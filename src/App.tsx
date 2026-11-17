import { useEffect, useMemo, useState } from 'react';
import { CampaignMapView } from './components/CampaignMapView';
import { DashboardView } from './components/DashboardView';
import { FieldGuideView } from './components/FieldGuideView';
import { LevelPlayer } from './components/LevelPlayer';
import { StudentOnboardingGate } from './components/StudentOnboardingGate';
import { TopNav } from './components/TopNav';
import { LEVELS } from './data/courseData';
import { AppView, LevelCompletion, StudentProgress } from './types/game';
import { generateScoreReportPdf } from './utils/pdfReport';
import { soundEngine } from './utils/sound';

const STORAGE_KEY = 'railfinance_quest_day3_progress_v1';

const DEFAULT_PROGRESS: StudentProgress = {
  studentName: '',
  studentIdOrGroup: '',
  profileConfirmed: false,
  xp: 0,
  streak: 0,
  bestStreak: 0,
  totalAnswered: 0,
  totalCorrect: 0,
  totalTimeSeconds: 0,
  completedLevels: {},
  unlockedBadges: [],
  instructorUnlockAll: false,
  soundEnabled: true,
};

function hasValidStudentProfile(p: StudentProgress): boolean {
  const trimmed = p.studentName.trim();
  return (
    Boolean(p.profileConfirmed) &&
    trimmed.length >= 2 &&
    trimmed.toLowerCase() !== 'finance cadet'
  );
}

function loadProgress(): StudentProgress {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_PROGRESS;
    const parsed = JSON.parse(raw) as Partial<StudentProgress>;
    const merged: StudentProgress = {
      ...DEFAULT_PROGRESS,
      ...parsed,
      studentName: typeof parsed.studentName === 'string' ? parsed.studentName : '',
      profileConfirmed: Boolean(parsed.profileConfirmed),
      totalTimeSeconds:
        typeof parsed.totalTimeSeconds === 'number' ? parsed.totalTimeSeconds : 0,
      completedLevels: parsed.completedLevels ?? {},
      unlockedBadges: Array.isArray(parsed.unlockedBadges)
        ? parsed.unlockedBadges
        : [],
    };
    if (!hasValidStudentProfile(merged)) {
      return { ...DEFAULT_PROGRESS, soundEnabled: merged.soundEnabled };
    }
    return merged;
  } catch {
    return DEFAULT_PROGRESS;
  }
}

function evaluateUnlockedBadges(
  completedLevels: Record<number, LevelCompletion>,
  existingBadges: string[],
): string[] {
  const nextSet = new Set(existingBadges);
  if (completedLevels[1]) nextSet.add('gatekeeper-badge');
  if (completedLevels[2]) nextSet.add('stress-shield');
  if (completedLevels[3]) nextSet.add('rationing-strategist');
  if (
    completedLevels[1] &&
    completedLevels[2] &&
    completedLevels[3] &&
    completedLevels[4]
  ) {
    nextSet.add('morning-certified');
  }
  if (completedLevels[5]) nextSet.add('evm-commander');
  if (completedLevels[7]) nextSet.add('erp-architect');
  if (LEVELS.every((l) => Boolean(completedLevels[l.id]))) {
    nextSet.add('day3-master');
  }
  return Array.from(nextSet);
}

export default function App() {
  const [progress, setProgress] = useState<StudentProgress>(() => loadProgress());
  const [currentView, setCurrentView] = useState<AppView>('dashboard');
  const [activeLevelId, setActiveLevelId] = useState<number>(1);

  useEffect(() => {
    soundEngine.setEnabled(progress.soundEnabled);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch {
      // Ignore storage quota errors cleanly
    }
  }, [progress]);

  const isLevelUnlocked = (levelId: number): boolean => {
    if (!hasValidStudentProfile(progress)) return false;
    if (progress.instructorUnlockAll) return true;
    if (levelId <= 1) return true;
    return Boolean(progress.completedLevels[levelId - 1]);
  };

  const nextPlayableLevelId = useMemo(() => {
    const firstIncomplete = LEVELS.find((l) => !progress.completedLevels[l.id]);
    return firstIncomplete ? firstIncomplete.id : 1;
  }, [progress.completedLevels]);

  const allCompleted = useMemo(
    () => LEVELS.every((l) => Boolean(progress.completedLevels[l.id])),
    [progress.completedLevels],
  );

  if (!hasValidStudentProfile(progress)) {
    return (
      <StudentOnboardingGate
        onSubmitProfile={(studentName, studentIdOrGroup) => {
          soundEngine.playClick();
          setProgress((prev) => ({
            ...prev,
            studentName,
            studentIdOrGroup,
            profileConfirmed: true,
          }));
          setCurrentView('dashboard');
        }}
      />
    );
  }

  const handleStartLevel = (levelId: number) => {
    if (!hasValidStudentProfile(progress) || !isLevelUnlocked(levelId)) return;
    soundEngine.playClick();
    setActiveLevelId(levelId);
    setCurrentView('play');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCompleteLevel = (
    levelId: number,
    correctCount: number,
    totalSteps: number,
    maxSessionStreak: number,
    timeSpentSeconds: number,
  ) => {
    const level = LEVELS.find((l) => l.id === levelId) ?? LEVELS[0];
    const accuracy = Math.round((correctCount / totalSteps) * 100);
    const stars: 1 | 2 | 3 = accuracy >= 85 ? 3 : accuracy >= 67 ? 2 : 1;

    const prevCompletion = progress.completedLevels[levelId];
    const earnedXpThisRun = prevCompletion
      ? Math.max(40, Math.round(level.xpReward * 0.25))
      : Math.round(level.xpReward * (0.6 + (accuracy / 100) * 0.4));

    const updatedCompleted: Record<number, LevelCompletion> = {
      ...progress.completedLevels,
      [levelId]: {
        levelId,
        stars: prevCompletion
          ? (Math.max(prevCompletion.stars, stars) as 1 | 2 | 3)
          : stars,
        bestAccuracy: prevCompletion
          ? Math.max(prevCompletion.bestAccuracy, accuracy)
          : accuracy,
        latestAccuracy: accuracy,
        xpEarned: (prevCompletion?.xpEarned ?? 0) + earnedXpThisRun,
        completedAt: new Date().toISOString(),
        attempts: (prevCompletion?.attempts ?? 0) + 1,
        timeSpentSeconds:
          (prevCompletion?.timeSpentSeconds ?? 0) + timeSpentSeconds,
      },
    };

    const nextBadges = evaluateUnlockedBadges(
      updatedCompleted,
      progress.unlockedBadges,
    );
    const newlyUnlockedBadgeIds = nextBadges.filter(
      (b) => !progress.unlockedBadges.includes(b),
    );

    setProgress((prev) => ({
      ...prev,
      xp: prev.xp + earnedXpThisRun,
      streak: maxSessionStreak,
      bestStreak: Math.max(prev.bestStreak, maxSessionStreak),
      totalAnswered: prev.totalAnswered + totalSteps,
      totalCorrect: prev.totalCorrect + correctCount,
      totalTimeSeconds: (prev.totalTimeSeconds ?? 0) + timeSpentSeconds,
      completedLevels: updatedCompleted,
      unlockedBadges: nextBadges,
    }));

    return {
      levelId,
      correctCount,
      totalSteps,
      accuracy,
      stars,
      xpEarned: earnedXpThisRun,
      maxSessionStreak,
      timeSpentSeconds,
      newlyUnlockedBadgeIds,
    };
  };

  const activeLevel =
    LEVELS.find((l) => l.id === activeLevelId) ?? LEVELS[0];

  const handleNavigate = (view: AppView) => {
    soundEngine.playClick();
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDownloadPdf = () => generateScoreReportPdf(progress);

  return (
    <div className="min-h-screen bg-[#f4f7fb] text-slate-900 flex flex-col">
      <TopNav
        currentView={currentView}
        onNavigate={handleNavigate}
        nextPlayableLevelId={nextPlayableLevelId}
        allCompleted={allCompleted}
        onLaunchNextLevel={() => handleStartLevel(nextPlayableLevelId)}
      />

      <main className="flex-1 pb-12">
        {currentView === 'dashboard' && (
          <DashboardView
            progress={progress}
            isLevelUnlocked={isLevelUnlocked}
            nextPlayableLevelId={nextPlayableLevelId}
            onStartLevel={handleStartLevel}
            onOpenBlock={(block) => handleNavigate(block)}
            onUpdateName={(studentName) =>
              setProgress((prev) => ({ ...prev, studentName }))
            }
            onToggleSound={() =>
              setProgress((prev) => ({
                ...prev,
                soundEnabled: !prev.soundEnabled,
              }))
            }
            onToggleInstructorUnlock={() =>
              setProgress((prev) => ({
                ...prev,
                instructorUnlockAll: !prev.instructorUnlockAll,
              }))
            }
            onDownloadPdf={handleDownloadPdf}
            onResetProgress={() => {
              setProgress(DEFAULT_PROGRESS);
              setCurrentView('dashboard');
            }}
          />
        )}

        {(currentView === 'part1' || currentView === 'part2') && (
          <CampaignMapView
            block={currentView}
            completedLevels={progress.completedLevels}
            isLevelUnlocked={isLevelUnlocked}
            onStartLevel={handleStartLevel}
            onSwitchBlock={(block) => handleNavigate(block)}
          />
        )}

        {currentView === 'guide' && <FieldGuideView />}

        {currentView === 'play' && (
          <LevelPlayer
            level={activeLevel}
            existingCompletion={progress.completedLevels[activeLevel.id]}
            hasNextLevel={activeLevel.id < LEVELS.length}
            onCompleteLevel={handleCompleteLevel}
            onDownloadPdf={handleDownloadPdf}
            onExit={() => handleNavigate('dashboard')}
            onGoToNextLevel={() => handleStartLevel(activeLevel.id + 1)}
          />
        )}
      </main>
    </div>
  );
}

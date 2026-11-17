export type Day3Block = 'part1' | 'part2';

export type CompetencyId =
  | 'approval-governance'
  | 'investment-appraisal'
  | 'cost-control'
  | 'erp-integration';

export type LevelMechanic =
  | 'governance-gate'
  | 'stress-lab'
  | 'rationing-lab'
  | 'valuation-trials'
  | 'evm-cockpit'
  | 'forensic-audit'
  | 'erp-architecture'
  | 'sod-master';

export interface RouterOption {
  id: 'A' | 'B';
  title: string;
  desc: string;
  tone: 'blue' | 'emerald' | 'amber' | 'indigo';
}

export interface RouterStep {
  id: string;
  kind: 'router';
  badgeText: string;
  title: string;
  department: string;
  amountOrMetric: string;
  horizonOrRule: string;
  scenario: string;
  leftOption: RouterOption;
  rightOption: RouterOption;
  correctAnswer: 'A' | 'B';
  subLabel: string;
  hint: string;
  explanation: string;
  takeaway: string;
}

export interface QuizOption {
  id: string;
  label: string;
  detail?: string;
}

export interface MultiChoiceStep {
  id: string;
  kind: 'choice';
  badgeText: string;
  prompt: string;
  contextBox?: {
    title: string;
    metrics: { label: string; value: string }[];
  };
  options: QuizOption[];
  correctOptionId: string;
  hint: string;
  explanation: string;
  takeaway: string;
}

export interface AuditStep {
  id: string;
  kind: 'audit';
  ledgerId: string;
  department: string;
  proposedEntry: string;
  bookedAs: string;
  amountSar: string;
  evidenceNote: string;
  isViolation: boolean;
  options: QuizOption[];
  correctOptionId: string;
  hint: string;
  explanation: string;
  takeaway: string;
}

export interface SliderLabStep {
  id: string;
  kind: 'slider-lab';
  title: string;
  prompt: string;
  visualType: 'macro-stress' | 'npv-rationing' | 'evm-control' | 'erp-commitment';
  sliders: {
    id: string;
    label: string;
    unit: string;
    min: number;
    max: number;
    step: number;
    defaultValue: number;
    targetMin: number;
    targetMax: number;
  }[];
  hint: string;
  explanation: string;
  takeaway: string;
}

export type LevelStep = RouterStep | MultiChoiceStep | AuditStep | SliderLabStep;

export interface LevelConfig {
  id: number;
  block: Day3Block;
  topicNumber: 1 | 2 | 3 | 4;
  moduleName: string;
  topicTag: string;
  title: string;
  subtitle: string;
  mechanic: LevelMechanic;
  competency: CompetencyId;
  accentColor: 'blue' | 'emerald' | 'amber' | 'rose' | 'teal' | 'indigo';
  estimatedMinutes: number;
  xpReward: number;
  briefing: {
    objective: string;
    howToPlay: string[];
    keyRules: { title: string; summary: string }[];
  };
  steps: LevelStep[];
}

export interface LevelCompletion {
  levelId: number;
  stars: 1 | 2 | 3;
  bestAccuracy: number;
  latestAccuracy?: number;
  xpEarned: number;
  completedAt: string;
  attempts: number;
  timeSpentSeconds?: number;
}

export interface BadgeDefinition {
  id: string;
  title: string;
  description: string;
  block: Day3Block | 'both';
  color: 'emerald' | 'blue' | 'amber' | 'rose';
}

export interface StudentProgress {
  studentName: string;
  studentIdOrGroup?: string;
  profileConfirmed?: boolean;
  xp: number;
  streak: number;
  bestStreak: number;
  totalAnswered: number;
  totalCorrect: number;
  totalTimeSeconds: number;
  completedLevels: Record<number, LevelCompletion>;
  unlockedBadges: string[];
  instructorUnlockAll: boolean;
  soundEnabled: boolean;
}

export interface FieldGuideEntry {
  id: string;
  topicNumber: 1 | 2 | 3 | 4;
  category: string;
  title: string;
  formulaOrRule: string;
  summary: string;
  railExample: string;
}

export type AppView = 'dashboard' | 'part1' | 'part2' | 'guide' | 'play';

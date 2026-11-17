import React from 'react';
import { ArrowRight, CheckCircle2, Lock, Play, Star } from 'lucide-react';
import { LEVELS } from '../data/courseData';
import { Day3Block, LevelCompletion } from '../types/game';

interface CampaignMapViewProps {
  block: Day3Block;
  completedLevels: Record<number, LevelCompletion>;
  isLevelUnlocked: (levelId: number) => boolean;
  onStartLevel: (levelId: number) => void;
  onSwitchBlock: (block: Day3Block) => void;
}

export const CampaignMapView: React.FC<CampaignMapViewProps> = ({
  block,
  completedLevels,
  isLevelUnlocked,
  onStartLevel,
  onSwitchBlock,
}) => {
  const blockLevels = LEVELS.filter((l) => l.block === block);
  const completedCount = blockLevels.filter((l) => completedLevels[l.id]).length;
  const totalBlockStars = blockLevels.reduce(
    (sum, l) => sum + (completedLevels[l.id]?.stars ?? 0),
    0,
  );

  const isPart1 = block === 'part1';

  return (
    <div className="mx-auto max-w-5xl space-y-6 px-4 py-6 sm:px-6 sm:py-8">
      {/* Module Block Header Card */}
      <section
        className={`rounded-3xl border p-6 sm:p-8 shadow-sm ${
          isPart1
            ? 'border-blue-200 bg-gradient-to-br from-blue-50 via-white to-emerald-50/70'
            : 'border-indigo-200 bg-gradient-to-br from-indigo-50 via-white to-amber-50/70'
        }`}
      >
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="space-y-2 max-w-2xl">
            <div
              className={`text-xs font-bold uppercase tracking-wider ${
                isPart1 ? 'text-blue-700' : 'text-indigo-700'
              }`}
            >
              {isPart1
                ? 'Day 3 · Module 3 · Topics 1 & 2'
                : 'Day 3 · Module 3 · Topics 3 & 4'}
            </div>
            <h1 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900">
              {isPart1
                ? 'Approval Governance & Capital Investment Appraisal'
                : 'EVM Cost Control & Oracle ERP Cloud Integration'}
            </h1>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {isPart1
                ? 'Move stage by stage through Delegation of Authority (DoA), Five Cases, Macroeconomic Stress-Testing, Two-Envelope Tenders, NPV/MIRR/PI Capital Rationing, and the Locomotive Case.'
                : 'Master execution and enterprise system controls: Earned Value Management (CPI/SPI/EAC/TCPI), Linear Contingency Burn-Down, Forensic Audits, WBS Locking, Dual-Book Assets, and Segregation of Duties (SoD).'}
            </p>
          </div>

          <div className="flex flex-col items-start md:items-end gap-2 shrink-0">
            <div className="font-mono-num text-sm font-bold text-slate-800">
              {completedCount} / {blockLevels.length} Stages · {totalBlockStars} / {blockLevels.length * 3} Stars
            </div>
            <button
              type="button"
              onClick={() => onSwitchBlock(isPart1 ? 'part2' : 'part1')}
              className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-4 py-2 text-xs font-bold text-slate-700 hover:bg-slate-50 cursor-pointer"
            >
              <span>Switch to {isPart1 ? 'Topics 3–4' : 'Topics 1–2'}</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* Step-by-Step Station List */}
      <div className="space-y-4">
        {blockLevels.map((level) => {
          const completion = completedLevels[level.id];
          const unlocked = isLevelUnlocked(level.id);

          return (
            <div
              key={level.id}
              className={`rounded-2xl border p-5 sm:p-6 transition-all ${
                unlocked
                  ? 'border-slate-200 bg-white shadow-sm hover:border-blue-300'
                  : 'border-slate-200 bg-slate-50/90 opacity-80'
              }`}
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5">
                <div className="space-y-3 flex-1">
                  <div className="flex flex-wrap items-center gap-3">
                    <span
                      className={`flex h-9 w-9 items-center justify-center rounded-xl font-display text-base font-extrabold ${
                        completion
                          ? 'bg-emerald-600 text-white'
                          : unlocked
                            ? 'bg-blue-600 text-white'
                            : 'bg-slate-200 text-slate-500'
                      }`}
                    >
                      {completion ? <CheckCircle2 className="h-5 w-5" /> : level.id}
                    </span>

                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                        Topic {level.topicNumber} · {level.topicTag} · {level.steps.length} Steps · {level.xpReward} XP
                      </div>
                      <h2 className="font-display text-xl font-bold text-slate-900">
                        {level.title}
                      </h2>
                    </div>
                  </div>

                  <p className="text-sm text-slate-700 leading-relaxed">
                    <strong className="font-semibold text-slate-900">Objective: </strong>
                    {level.briefing.objective}
                  </p>

                  {/* Key Rules Preview */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                    {level.briefing.keyRules.map((rule) => (
                      <div
                        key={rule.title}
                        className="rounded-xl border border-slate-200 bg-slate-50/70 p-3"
                      >
                        <div className="text-xs font-bold text-slate-900">
                          {rule.title}
                        </div>
                        <div className="mt-0.5 text-xs text-slate-600 leading-relaxed">
                          {rule.summary}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-row lg:flex-col items-center lg:items-end justify-between gap-4 shrink-0 border-t lg:border-t-0 lg:border-l border-slate-200 pt-4 lg:pt-0 lg:pl-6">
                  <div className="flex items-center gap-1">
                    {[1, 2, 3].map((s) => (
                      <Star
                        key={s}
                        className={`h-5 w-5 ${
                          completion && s <= completion.stars
                            ? 'fill-amber-400 text-amber-500'
                            : 'text-slate-300'
                        }`}
                      />
                    ))}
                  </div>

                  {completion && (
                    <div className="text-xs font-semibold text-emerald-700 font-mono-num">
                      Best: {completion.bestAccuracy}% · {completion.attempts} {completion.attempts === 1 ? 'try' : 'tries'}
                    </div>
                  )}

                  {unlocked ? (
                    <button
                      type="button"
                      onClick={() => onStartLevel(level.id)}
                      className={`inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-bold text-white shadow-sm transition-colors cursor-pointer whitespace-nowrap ${
                        completion
                          ? 'bg-emerald-600 hover:bg-emerald-700'
                          : 'bg-blue-600 hover:bg-blue-700'
                      }`}
                    >
                      <Play className="h-4 w-4 fill-current" />
                      <span>{completion ? 'Retry Stage' : 'Start Stage'}</span>
                    </button>
                  ) : (
                    <div className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-slate-100 px-4 py-2.5 text-xs font-bold text-slate-500 whitespace-nowrap">
                      <Lock className="h-4 w-4" />
                      <span>Clear Stage {level.id - 1} First</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

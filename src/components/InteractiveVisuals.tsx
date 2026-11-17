import React from 'react';
import { CheckCircle2, AlertTriangle, Star, Lock } from 'lucide-react';
import { LevelCompletion, LevelConfig } from '../types/game';

interface RailRouteProgressProps {
  levels: LevelConfig[];
  completedLevels: Record<number, LevelCompletion>;
  isLevelUnlocked: (id: number) => boolean;
  onSelectLevel: (id: number) => void;
}

export const RailRouteProgress: React.FC<RailRouteProgressProps> = ({
  levels,
  completedLevels,
  isLevelUnlocked,
  onSelectLevel,
}) => {
  const completedCount = Object.keys(completedLevels).length;
  const progressRatio = levels.length > 1 ? completedCount / levels.length : 0;

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
        <div>
          <h2 className="font-display text-lg font-bold text-slate-900">
            Day 3 · 8-Station Executive Control Route
          </h2>
          <p className="text-sm text-slate-600">
            Topics 1–2: Governance & Valuation (Stations 1–4) · Topics 3–4: EVM Control & Oracle ERP (Stations 5–8)
          </p>
        </div>
        <div className="font-mono-num text-sm font-semibold text-blue-700">
          {completedCount} / {levels.length} Stations Cleared
        </div>
      </div>

      {/* Mobile Compact 2-Column Station Grid (<640px) */}
      <div className="grid grid-cols-2 gap-2.5 sm:hidden">
        {levels.map((level) => {
          const completion = completedLevels[level.id];
          const unlocked = isLevelUnlocked(level.id);
          const isPart2 = level.block === 'part2';

          return (
            <button
              key={level.id}
              type="button"
              disabled={!unlocked}
              onClick={() => unlocked && onSelectLevel(level.id)}
              className={`flex flex-col items-start rounded-xl border p-3 text-left transition-all ${
                completion
                  ? 'border-emerald-200 bg-emerald-50/60'
                  : unlocked
                    ? isPart2
                      ? 'border-indigo-200 bg-indigo-50/50'
                      : 'border-blue-200 bg-blue-50/50'
                    : 'border-slate-200 bg-slate-50 opacity-75'
              } ${unlocked ? 'cursor-pointer active:scale-[0.98]' : 'cursor-not-allowed'}`}
            >
              <div className="flex w-full items-center justify-between gap-1">
                <span className="font-display text-xs font-extrabold text-slate-900">
                  Stage {level.id} · T{level.topicNumber}
                </span>
                {completion ? (
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                ) : !unlocked ? (
                  <Lock className="h-3.5 w-3.5 text-slate-400 shrink-0" />
                ) : null}
              </div>
              <span className="mt-1 text-xs font-bold text-slate-800 line-clamp-1">
                {level.title.replace('The ', '')}
              </span>
              <div className="mt-1.5 flex items-center justify-between w-full">
                <div className="flex items-center gap-0.5">
                  {[1, 2, 3].map((s) => (
                    <Star
                      key={s}
                      className={`h-3 w-3 ${
                        completion && s <= completion.stars
                          ? 'fill-amber-400 text-amber-500'
                          : 'text-slate-300'
                      }`}
                    />
                  ))}
                </div>
                {completion && (
                  <span className="font-mono-num text-[11px] font-bold text-emerald-700">
                    {completion.bestAccuracy}%
                  </span>
                )}
              </div>
            </button>
          );
        })}
      </div>

      {/* Desktop Horizontal Interactive Route Map (640px+) */}
      <div className="hidden sm:block relative overflow-x-auto pb-2">
        <div className="min-w-[680px] px-3 py-4">
          <div className="relative flex items-center justify-between">
            <div
              aria-hidden="true"
              className="absolute left-6 right-6 top-6 h-2 rounded-full bg-slate-100 border border-slate-200"
            />
            <div
              aria-hidden="true"
              className="absolute left-6 top-6 h-2 rounded-full bg-gradient-to-r from-blue-600 via-teal-500 to-indigo-600 transition-all duration-500"
              style={{ width: `calc(${Math.min(progressRatio, 1) * 100}% - 3rem)` }}
            />

            {levels.map((level) => {
              const completion = completedLevels[level.id];
              const unlocked = isLevelUnlocked(level.id);
              const isPart2 = level.block === 'part2';

              return (
                <button
                  key={level.id}
                  type="button"
                  disabled={!unlocked}
                  onClick={() => unlocked && onSelectLevel(level.id)}
                  className={`group relative z-10 flex w-20 flex-col items-center text-center transition-transform ${
                    unlocked ? 'cursor-pointer hover:-translate-y-0.5' : 'cursor-not-allowed opacity-70'
                  }`}
                >
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl border-2 font-display text-base font-bold shadow-sm transition-all ${
                      completion
                        ? 'border-emerald-600 bg-emerald-600 text-white'
                        : unlocked
                          ? isPart2
                            ? 'border-indigo-500 bg-indigo-50 text-indigo-800 group-hover:bg-indigo-100'
                            : 'border-blue-600 bg-blue-50 text-blue-700 group-hover:bg-blue-100'
                          : 'border-slate-300 bg-slate-100 text-slate-400'
                    }`}
                  >
                    {completion ? (
                      <CheckCircle2 className="h-5 w-5" />
                    ) : unlocked ? (
                      <span>{level.id}</span>
                    ) : (
                      <Lock className="h-4 w-4" />
                    )}
                  </div>

                  <span className="mt-2 text-xs font-bold text-slate-800 leading-tight line-clamp-2">
                    {level.title.replace('The ', '')}
                  </span>

                  <span className="mt-1 text-[11px] font-medium text-slate-500">
                    Topic {level.topicNumber}
                  </span>

                  <div className="mt-1 flex items-center gap-0.5">
                    {[1, 2, 3].map((s) => (
                      <Star
                        key={s}
                        className={`h-3 w-3 ${
                          completion && s <= completion.stars
                            ? 'fill-amber-400 text-amber-500'
                            : 'text-slate-300'
                        }`}
                      />
                    ))}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

interface SliderValues {
  [key: string]: number;
}

interface InteractiveVisualProps {
  visualType: 'macro-stress' | 'npv-rationing' | 'evm-control' | 'erp-commitment';
  values: SliderValues;
}

export const InteractiveVisuals: React.FC<InteractiveVisualProps> = ({
  visualType,
  values,
}) => {
  // =========================================================================
  // SIMULATOR 1: MACROECONOMIC STRESS-TESTING & DSCR (Topic 1.15)
  // =========================================================================
  if (visualType === 'macro-stress') {
    const saiborHedgePct = values.saiborHedgePct ?? 20;
    const fxHedgePct = values.fxHedgePct ?? 15;
    const commodityHedgePct = values.commodityHedgePct ?? 10;

    const saiborOk = saiborHedgePct >= 70 && saiborHedgePct <= 95;
    const fxOk = fxHedgePct >= 65 && fxHedgePct <= 90;
    const commOk = commodityHedgePct >= 60 && commodityHedgePct <= 85;

    const stressedDscr = Number(
      (0.86 + saiborHedgePct * 0.0024 + fxHedgePct * 0.0018 + commodityHedgePct * 0.002).toFixed(2),
    );
    const dscrOk = stressedDscr >= 1.25;
    const dscrBarHeight = Math.min(130, Math.round((stressedDscr / 1.65) * 130));
    const covenantLineY = 165 - Math.round((1.25 / 1.65) * 130);

    return (
      <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4 sm:p-5">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
              Topic 1.15 · Audit Committee Stress Model
            </span>
            <h4 className="font-display text-base font-bold text-slate-900">
              Stressed Debt Service Coverage Ratio (DSCR) vs. 1.25x Covenant
            </h4>
          </div>
          <div className={`font-mono-num text-sm font-extrabold ${dscrOk ? 'text-emerald-700' : 'text-rose-700'}`}>
            Stressed DSCR: {stressedDscr.toFixed(2)}x ({dscrOk ? 'COVENANT SAFE' : 'BREACH RISK'})
          </div>
        </div>

        <svg viewBox="0 0 480 195" className="w-full h-auto rounded-xl bg-white border border-slate-200 p-2">
          {/* Covenant threshold line */}
          <line x1="40" y1={covenantLineY} x2="460" y2={covenantLineY} stroke="#10b981" strokeWidth="2" strokeDasharray="6 4" />
          <text x="456" y={covenantLineY - 6} textAnchor="end" fontSize="10" fontWeight="700" fill="#059669">
            MINIMUM LENDER COVENANT (1.25x DSCR)
          </text>

          {/* Bar 1: Unhedged Shock */}
          <rect x="75" y={165 - Math.round((0.86 / 1.65) * 130)} width="72" height={Math.round((0.86 / 1.65) * 130)} rx="6" fill="#e11d48" />
          <text x="111" y={165 - Math.round((0.86 / 1.65) * 130) - 7} textAnchor="middle" fontSize="12" fontWeight="800" fill="#be123c" fontFamily="monospace">
            0.86x
          </text>
          <text x="111" y="183" textAnchor="middle" fontSize="10" fontWeight="600" fill="#475569">
            Unhedged Shock
          </text>

          {/* Bar 2: Base Case Pre-Shock */}
          <rect x="204" y={165 - Math.round((1.42 / 1.65) * 130)} width="72" height={Math.round((1.42 / 1.65) * 130)} rx="6" fill="#94a3b8" />
          <text x="240" y={165 - Math.round((1.42 / 1.65) * 130) - 7} textAnchor="middle" fontSize="12" fontWeight="800" fill="#334155" fontFamily="monospace">
            1.42x
          </text>
          <text x="240" y="183" textAnchor="middle" fontSize="10" fontWeight="600" fill="#475569">
            Unstressed Base
          </text>

          {/* Bar 3: Your Hedged Structure */}
          <rect
            x="333"
            y={165 - dscrBarHeight}
            width="72"
            height={dscrBarHeight}
            rx="6"
            fill={saiborOk && fxOk && commOk ? '#059669' : '#f59e0b'}
          />
          <text x="369" y={165 - dscrBarHeight - 7} textAnchor="middle" fontSize="12" fontWeight="800" fill="#0f172a" fontFamily="monospace">
            {stressedDscr.toFixed(2)}x
          </text>
          <text x="369" y="183" textAnchor="middle" fontSize="10" fontWeight="700" fill="#0f172a">
            Your Hedged Plan
          </text>
        </svg>

        <div className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs">
          <div className={`rounded-xl border p-2.5 ${saiborOk ? 'border-emerald-200 bg-emerald-50/70' : 'border-amber-200 bg-amber-50/70'}`}>
            <div className="flex items-center gap-1 font-semibold text-slate-800">
              {saiborOk ? <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0" /> : <AlertTriangle className="h-3.5 w-3.5 text-amber-600 shrink-0" />}
              <span>SAIBOR Fixed Lock: {saiborHedgePct}%</span>
            </div>
            <div className="mt-0.5 text-slate-600">{saiborOk ? 'PROTECTED (70–95%)' : 'Target 70–95%'}</div>
          </div>

          <div className={`rounded-xl border p-2.5 ${fxOk ? 'border-emerald-200 bg-emerald-50/70' : 'border-amber-200 bg-amber-50/70'}`}>
            <div className="flex items-center gap-1 font-semibold text-slate-800">
              {fxOk ? <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0" /> : <AlertTriangle className="h-3.5 w-3.5 text-amber-600 shrink-0" />}
              <span>FX Forward Hedge: {fxHedgePct}%</span>
            </div>
            <div className="mt-0.5 text-slate-600">{fxOk ? 'PROTECTED (65–90%)' : 'Target 65–90%'}</div>
          </div>

          <div className={`rounded-xl border p-2.5 ${commOk ? 'border-emerald-200 bg-emerald-50/70' : 'border-amber-200 bg-amber-50/70'}`}>
            <div className="flex items-center gap-1 font-semibold text-slate-800">
              {commOk ? <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0" /> : <AlertTriangle className="h-3.5 w-3.5 text-amber-600 shrink-0" />}
              <span>Steel/Fuel Hedge: {commodityHedgePct}%</span>
            </div>
            <div className="mt-0.5 text-slate-600">{commOk ? 'PROTECTED (60–85%)' : 'Target 60–85%'}</div>
          </div>
        </div>
      </div>
    );
  }

  // =========================================================================
  // SIMULATOR 2: CAPITAL RATIONING & PROFITABILITY INDEX (Topic 2.9)
  // =========================================================================
  if (visualType === 'npv-rationing') {
    const sig = values.highPiSignaling ?? 100;
    const spur = values.medPiFreightSpur ?? 150;
    const term = values.lowPiTerminal ?? 450;

    const totalCapex = sig + spur + term;
    const withinCap = totalCapex <= 1000;
    const portfolioNpv = Math.round(sig * 0.62 + spur * 0.44 + term * 0.12);
    const weightedPi = totalCapex > 0 ? ((totalCapex + portfolioNpv) / totalCapex).toFixed(2) : '0.00';

    const sigOk = sig >= 350 && sig <= 400;
    const spurOk = spur >= 400 && spur <= 450;
    const termOk = term >= 100 && term <= 150;

    const scale = 0.32; // 1000M = 320px
    const sigW = sig * scale;
    const spurW = spur * scale;
    const termW = term * scale;

    return (
      <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4 sm:p-5">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-teal-700">
              Topic 2.9 · Capital Rationing Optimizer
            </span>
            <h4 className="font-display text-base font-bold text-slate-900">
              1,000M SAR Envelope Allocation by Profitability Index (PI)
            </h4>
          </div>
          <div className={`font-mono-num text-sm font-extrabold ${withinCap ? 'text-emerald-700' : 'text-rose-700'}`}>
            Portfolio NPV: +{portfolioNpv}M SAR · PI: {weightedPi}x
          </div>
        </div>

        <svg viewBox="0 0 480 175" className="w-full h-auto rounded-xl bg-white border border-slate-200 p-2">
          {/* 1,000M Hard Ceiling Line */}
          <line x1={20 + 1000 * scale} y1="22" x2={20 + 1000 * scale} y2="122" stroke="#e11d48" strokeWidth="2.5" strokeDasharray="5 4" />
          <text x={20 + 1000 * scale} y="16" textAnchor="middle" fontSize="10" fontWeight="800" fill="#be123c">
            1,000M HARD CAP
          </text>

          <text x="20" y="42" fontSize="11" fontWeight="700" fill="#334155">
            Allocated Capital Stack ({totalCapex}M / 1,000M SAR)
          </text>

          {/* Stacked Bar */}
          <rect x="20" y="54" width={sigW} height="34" rx="4" fill="#0d9488" />
          <rect x={20 + sigW + 2} y="54" width={spurW} height="34" rx="4" fill="#2563eb" />
          <rect x={20 + sigW + spurW + 4} y="54" width={termW} height="34" rx="4" fill="#f59e0b" />

          {/* Total badge text */}
          <text
            x={Math.min(440, 32 + sigW + spurW + termW)}
            y="76"
            fontSize="12"
            fontWeight="800"
            fill={withinCap ? '#0f172a' : '#be123c'}
            fontFamily="monospace"
          >
            {totalCapex}M
          </text>

          {/* Legend */}
          <g transform="translate(20, 118)">
            <rect width="10" height="10" rx="2" fill="#0d9488" />
            <text x="15" y="9" fontSize="10" fill="#334155">ETCS Signaling PI 1.62 ({sig}M)</text>

            <rect x="175" width="10" height="10" rx="2" fill="#2563eb" />
            <text x="190" y="9" fontSize="10" fill="#334155">Freight Spur PI 1.44 ({spur}M)</text>

            <rect x="335" width="10" height="10" rx="2" fill="#f59e0b" />
            <text x="350" y="9" fontSize="10" fill="#334155">Terminal PI 1.12 ({term}M)</text>
          </g>

          <text x="20" y="156" fontSize="10" fontWeight="600" fill={withinCap ? '#059669' : '#be123c'}>
            {withinCap
              ? `Envelope Compliant: ${1000 - totalCapex}M SAR unallocated reserve remaining`
              : `ENVELOPE BREACHED by ${totalCapex - 1000}M SAR — trim low-PI Terminal spend!`}
          </text>
        </svg>

        <div className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs">
          <div className={`rounded-xl border p-2.5 ${sigOk ? 'border-emerald-200 bg-emerald-50/70' : 'border-amber-200 bg-amber-50/70'}`}>
            <div className="font-semibold text-slate-800">Signaling (PI 1.62): {sig}M</div>
            <div className="mt-0.5 text-slate-600">{sigOk ? 'PRIORITIZED (350–400M)' : 'Target 350–400M'}</div>
          </div>
          <div className={`rounded-xl border p-2.5 ${spurOk ? 'border-emerald-200 bg-emerald-50/70' : 'border-amber-200 bg-amber-50/70'}`}>
            <div className="font-semibold text-slate-800">Freight Spur (PI 1.44): {spur}M</div>
            <div className="mt-0.5 text-slate-600">{spurOk ? 'PRIORITIZED (400–450M)' : 'Target 400–450M'}</div>
          </div>
          <div className={`rounded-xl border p-2.5 ${termOk ? 'border-emerald-200 bg-emerald-50/70' : 'border-rose-200 bg-rose-50/70'}`}>
            <div className="font-semibold text-slate-800">Terminal (PI 1.12): {term}M</div>
            <div className="mt-0.5 text-slate-600">{termOk ? 'RATIONED (100–150M)' : 'Trim to 100–150M'}</div>
          </div>
        </div>
      </div>
    );
  }

  // =========================================================================
  // SIMULATOR 3: EVM & CONTINGENCY BURN-DOWN COCKPIT (Topic 3.3 & 3.9)
  // =========================================================================
  if (visualType === 'evm-control') {
    const protectPct = values.contingencyProtectPct ?? 15;
    const veOffsetM = values.veOffsetM ?? 10;
    const targetTcpiPct = values.targetTcpiPct ?? 90;

    const protOk = protectPct >= 60 && protectPct <= 85;
    const veOk = veOffsetM >= 35 && veOffsetM <= 60;
    const tcpiOk = targetTcpiPct >= 108 && targetTcpiPct <= 120;

    const remainingWork = 300 - veOffsetM; // BAC 500 - EV 200 - VE offset
    const projectedRemainingCost = Math.round(remainingWork / (targetTcpiPct / 100));
    const projectedEac = 244 + projectedRemainingCost;
    const bac = 500;
    const eacWithinBac = projectedEac <= bac + 10;

    return (
      <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4 sm:p-5">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-rose-700">
              Topics 3.3 & 3.9 · EVM & Contingency Burn-Down
            </span>
            <h4 className="font-display text-base font-bold text-slate-900">
              Projected Estimate at Completion (EAC) vs. 500M SAR BAC
            </h4>
          </div>
          <div className={`font-mono-num text-sm font-extrabold ${eacWithinBac ? 'text-emerald-700' : 'text-rose-700'}`}>
            Projected EAC: {projectedEac}M SAR (BAC: 500M)
          </div>
        </div>

        <svg viewBox="0 0 480 185" className="w-full h-auto rounded-xl bg-white border border-slate-200 p-2">
          {/* BAC 500M Reference Line */}
          <line x1={20 + 500 * 0.62} y1="20" x2={20 + 500 * 0.62} y2="145" stroke="#059669" strokeWidth="2" strokeDasharray="6 4" />
          <text x={20 + 500 * 0.62} y="14" textAnchor="middle" fontSize="10" fontWeight="800" fill="#059669">
            APPROVED BAC (500M)
          </text>

          {/* Unmitigated Trend Bar (EAC = 610M) */}
          <text x="20" y="38" fontSize="10" fontWeight="700" fill="#64748b">Unmitigated Trend (CPI 0.82)</text>
          <rect x="20" y="45" width={610 * 0.62} height="24" rx="5" fill="#fecdd3" stroke="#e11d48" strokeWidth="1.5" />
          <text x={26 + 610 * 0.62} y="61" fontSize="11" fontWeight="800" fill="#be123c" fontFamily="monospace">
            610M
          </text>

          {/* Mitigated EAC Bar */}
          <text x="20" y="96" fontSize="10" fontWeight="700" fill="#0f172a">Your Controlled EAC (AC 244M + Mitigated Remaining)</text>
          <rect x="20" y="104" width={244 * 0.62} height="26" rx="4" fill="#334155" />
          <rect
            x={20 + 244 * 0.62 + 2}
            y="104"
            width={Math.min(260, projectedRemainingCost * 0.62)}
            height="26"
            rx="4"
            fill={protOk && veOk && tcpiOk ? '#2563eb' : '#f59e0b'}
          />
          <text
            x={Math.min(445, 28 + projectedEac * 0.62)}
            y="121"
            fontSize="12"
            fontWeight="800"
            fill="#0f172a"
            fontFamily="monospace"
          >
            {projectedEac}M
          </text>

          <text x="20" y="164" fontSize="10" fontWeight="600" fill="#475569">
            Physical Progress: 40% · Burned Contingency: 58% (Breach!) · Protected Reserve: {protectPct}% · VE Saved: {veOffsetM}M
          </text>
        </svg>

        <div className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs">
          <div className={`rounded-xl border p-2.5 ${protOk ? 'border-emerald-200 bg-emerald-50/70' : 'border-rose-200 bg-rose-50/70'}`}>
            <div className="font-semibold text-slate-800">Reserve Locked: {protectPct}%</div>
            <div className="mt-0.5 text-slate-600">{protOk ? 'PROTECTED (60–85%)' : 'Target 60–85%'}</div>
          </div>
          <div className={`rounded-xl border p-2.5 ${veOk ? 'border-emerald-200 bg-emerald-50/70' : 'border-amber-200 bg-amber-50/70'}`}>
            <div className="font-semibold text-slate-800">VE Scope Offset: {veOffsetM}M</div>
            <div className="mt-0.5 text-slate-600">{veOk ? 'BALANCED (35–60M)' : 'Target 35–60M'}</div>
          </div>
          <div className={`rounded-xl border p-2.5 ${tcpiOk ? 'border-emerald-200 bg-emerald-50/70' : 'border-amber-200 bg-amber-50/70'}`}>
            <div className="font-semibold text-slate-800">Target TCPI: {(targetTcpiPct / 100).toFixed(2)}</div>
            <div className="mt-0.5 text-slate-600">{tcpiOk ? 'REALISTIC (1.08–1.20)' : 'Target 1.08–1.20'}</div>
          </div>
        </div>
      </div>
    );
  }

  // =========================================================================
  // SIMULATOR 4: ORACLE COMMITMENT & 3-WAY MATCH TOLERANCE (Topics 4.7–4.8)
  // =========================================================================
  const priceTol = values.unitPriceTolerance ?? 5;
  const qtyTol = values.bulkQtyTolerance ?? 6;
  const encLock = values.encumbranceLockPct ?? 40;

  const priceOk = priceTol >= 0 && priceTol <= 0.5;
  const qtyOk = qtyTol >= 0.5 && qtyTol <= 1.5;
  const encOk = encLock >= 90 && encLock <= 100;

  const overbillingRiskM = Number(((priceTol * 1.4) + (qtyTol * 0.9) + ((100 - encLock) * 0.12)).toFixed(1));

  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4 sm:p-5">
      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-700">
            Topics 4.7–4.8 · Oracle PPM & AP Control Gate
          </span>
          <h4 className="font-display text-base font-bold text-slate-900">
            WBS Commitment Stack & 3-Way Match Leakage Risk
          </h4>
        </div>
        <div className={`font-mono-num text-sm font-extrabold ${priceOk && qtyOk && encOk ? 'text-emerald-700' : 'text-rose-700'}`}>
          Exposure Leakage: {overbillingRiskM}M SAR
        </div>
      </div>

      <svg viewBox="0 0 480 175" className="w-full h-auto rounded-xl bg-white border border-slate-200 p-2">
        {/* 120M WBS Budget Ceiling */}
        <line x1={20 + 120 * 3.1} y1="18" x2={20 + 120 * 3.1} y2="112" stroke="#0f172a" strokeWidth="2" strokeDasharray="5 4" />
        <text x={20 + 120 * 3.1} y="13" textAnchor="middle" fontSize="9.5" fontWeight="800" fill="#0f172a">
          WBS BUDGET (120M)
        </text>

        <text x="20" y="34" fontSize="10.5" fontWeight="700" fill="#334155">
          Oracle Real-Time Budget = 120M − 65M Actuals − 35M POs = 20M Available
        </text>

        {/* Stacked WBS bar: 65M Actuals + 35M PO + 20M Available */}
        <rect x="20" y="45" width={65 * 3.1} height="30" rx="4" fill="#334155" />
        <text x={20 + (65 * 3.1) / 2} y="64" textAnchor="middle" fontSize="10" fontWeight="700" fill="#ffffff" fontFamily="monospace">
          65M Actuals
        </text>

        <rect x={20 + 65 * 3.1 + 2} y="45" width={35 * 3.1} height="30" rx="4" fill="#4f46e5" />
        <text x={20 + 65 * 3.1 + 2 + (35 * 3.1) / 2} y="64" textAnchor="middle" fontSize="10" fontWeight="700" fill="#ffffff" fontFamily="monospace">
          35M POs
        </text>

        <rect x={20 + 100 * 3.1 + 4} y="45" width={20 * 3.1} height="30" rx="4" fill={encOk ? '#10b981' : '#f59e0b'} />
        <text x={20 + 100 * 3.1 + 4 + (20 * 3.1) / 2} y="64" textAnchor="middle" fontSize="9.5" fontWeight="800" fill="#ffffff" fontFamily="monospace">
          20M
        </text>

        {/* 3-Way Match Gate Status Boxes */}
        <rect x="20" y="96" width="138" height="44" rx="8" fill={priceOk ? '#ecfdf5' : '#fff1f2'} stroke={priceOk ? '#10b981' : '#f43f5e'} />
        <text x="89" y="114" textAnchor="middle" fontSize="10" fontWeight="800" fill="#0f172a">Unit Price Gate</text>
        <text x="89" y="130" textAnchor="middle" fontSize="10" fontWeight="700" fill={priceOk ? '#059669' : '#be123c'} fontFamily="monospace">
          ±{priceTol}% ({priceOk ? 'LOCKED' : 'TOO LOOSE'})
        </text>

        <rect x="171" y="96" width="138" height="44" rx="8" fill={qtyOk ? '#ecfdf5' : '#fff1f2'} stroke={qtyOk ? '#10b981' : '#f43f5e'} />
        <text x="240" y="114" textAnchor="middle" fontSize="10" fontWeight="800" fill="#0f172a">Ballast Qty Gate</text>
        <text x="240" y="130" textAnchor="middle" fontSize="10" fontWeight="700" fill={qtyOk ? '#059669' : '#be123c'} fontFamily="monospace">
          +{qtyTol}% ({qtyOk ? 'STRICT ~1%' : 'OVERBILL RISK'})
        </text>

        <rect x="322" y="96" width="138" height="44" rx="8" fill={encOk ? '#ecfdf5' : '#fffbeb'} stroke={encOk ? '#10b981' : '#f59e0b'} />
        <text x="391" y="114" textAnchor="middle" fontSize="10" fontWeight="800" fill="#0f172a">PR-to-PO Hard Stop</text>
        <text x="391" y="130" textAnchor="middle" fontSize="10" fontWeight="700" fill={encOk ? '#059669' : '#b45309'} fontFamily="monospace">
          {encLock}% ({encOk ? 'ENFORCED' : 'LEAKAGE'})
        </text>
      </svg>

      <div className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs">
        <div className={`rounded-xl border p-2.5 ${priceOk ? 'border-emerald-200 bg-emerald-50/70' : 'border-rose-200 bg-rose-50/70'}`}>
          <div className="font-semibold text-slate-800">Price Tolerance: {priceTol}%</div>
          <div className="mt-0.5 text-slate-600">{priceOk ? 'ZERO TOLERANCE (0–0.5%)' : 'Target 0–0.5%'}</div>
        </div>
        <div className={`rounded-xl border p-2.5 ${qtyOk ? 'border-emerald-200 bg-emerald-50/70' : 'border-rose-200 bg-rose-50/70'}`}>
          <div className="font-semibold text-slate-800">Bulk Qty Tolerance: {qtyTol}%</div>
          <div className="mt-0.5 text-slate-600">{qtyOk ? 'BULK LIMIT (0.5–1.5%)' : 'Target 0.5–1.5%'}</div>
        </div>
        <div className={`rounded-xl border p-2.5 ${encOk ? 'border-emerald-200 bg-emerald-50/70' : 'border-amber-200 bg-amber-50/70'}`}>
          <div className="font-semibold text-slate-800">Encumbrance Lock: {encLock}%</div>
          <div className="mt-0.5 text-slate-600">{encOk ? 'HARD STOP (90–100%)' : 'Target 90–100%'}</div>
        </div>
      </div>
    </div>
  );
};

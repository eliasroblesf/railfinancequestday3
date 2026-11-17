import React, { useMemo, useState } from 'react';
import { BookOpen, Search } from 'lucide-react';
import { FIELD_GUIDE_ENTRIES } from '../data/courseData';

export const FieldGuideView: React.FC = () => {
  const [topicFilter, setTopicFilter] = useState<'all' | 1 | 2 | 3 | 4>('all');
  const [query, setQuery] = useState('');

  const filteredEntries = useMemo(() => {
    const q = query.trim().toLowerCase();
    return FIELD_GUIDE_ENTRIES.filter((entry) => {
      if (topicFilter !== 'all' && entry.topicNumber !== topicFilter) return false;
      if (!q) return true;
      return (
        entry.title.toLowerCase().includes(q) ||
        entry.category.toLowerCase().includes(q) ||
        entry.formulaOrRule.toLowerCase().includes(q) ||
        entry.summary.toLowerCase().includes(q) ||
        entry.railExample.toLowerCase().includes(q)
      );
    });
  }, [topicFilter, query]);

  return (
    <div className="mx-auto max-w-5xl space-y-6 px-4 py-6 sm:px-6 sm:py-8">
      <section className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
        <div className="flex items-start gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 border border-blue-200">
            <BookOpen className="h-5 w-5" />
          </div>
          <div>
            <h1 className="font-display text-2xl font-extrabold text-slate-900">
              Day 3 Executive Pocket Field Guide
            </h1>
            <p className="mt-1 text-sm text-slate-600">
              Quick-reference Module 3 formulas, DoA thresholds, NPV/EVM rules, and Oracle ERP Cloud controls for Day 3 Topics 1–4.
            </p>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="mt-5 flex flex-col lg:flex-row lg:items-center justify-between gap-3">
          <div className="inline-flex flex-wrap rounded-xl border border-slate-200 bg-slate-50 p-1 self-start">
            {(
              [
                { id: 'all', label: `All (${FIELD_GUIDE_ENTRIES.length})` },
                { id: 1, label: 'T1 · Governance' },
                { id: 2, label: 'T2 · NPV & ROI' },
                { id: 3, label: 'T3 · EVM Control' },
                { id: 4, label: 'T4 · Oracle ERP' },
              ] as const
            ).map((tab) => (
              <button
                key={String(tab.id)}
                type="button"
                onClick={() => setTopicFilter(tab.id)}
                className={`rounded-lg px-3 py-1.5 text-xs font-bold transition-colors cursor-pointer whitespace-nowrap ${
                  topicFilter === tab.id
                    ? 'bg-white text-blue-700 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="relative w-full lg:w-72">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search DoA, NPV, CPI, SoD, WBS..."
              aria-label="Search Day 3 field guide"
              className="w-full rounded-xl border border-slate-200 bg-white py-2 pl-9 pr-3 text-sm text-slate-800 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
            />
          </div>
        </div>
      </section>

      {/* Cards */}
      {filteredEntries.length === 0 ? (
        <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center text-sm text-slate-600">
          No Day 3 rules match "{query}". Try clearing the search filter.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredEntries.map((entry) => (
            <article
              key={entry.id}
              className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-blue-700">
                  Topic {entry.topicNumber} · {entry.category}
                </div>
                <h2 className="font-display mt-1.5 text-lg font-bold text-slate-900">
                  {entry.title}
                </h2>

                <div className="mt-3 rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 font-mono-num text-xs font-bold text-slate-800">
                  {entry.formulaOrRule}
                </div>

                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  {entry.summary}
                </p>
              </div>

              <div className="mt-4 rounded-xl border border-emerald-200 bg-emerald-50/70 px-3.5 py-2.5 text-xs text-emerald-900">
                <strong className="font-bold">Rail Example: </strong>
                {entry.railExample}
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
};

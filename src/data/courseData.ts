import { BadgeDefinition, CompetencyId, FieldGuideEntry, LevelConfig } from '../types/game';

export const COMPETENCY_META: Record<
  CompetencyId,
  { label: string; shortLabel: string; colorClass: string; barColor: string }
> = {
  'approval-governance': {
    label: 'Approval Workflows & Funding Governance',
    shortLabel: 'Governance & Funding',
    colorClass: 'text-blue-700',
    barColor: 'bg-blue-600',
  },
  'investment-appraisal': {
    label: 'NPV, IRR, PI & Risk-Adjusted Appraisal',
    shortLabel: 'NPV & Valuation',
    colorClass: 'text-emerald-700',
    barColor: 'bg-emerald-600',
  },
  'cost-control': {
    label: 'EVM, Burn-Down & Forensic Cost Control',
    shortLabel: 'EVM & Cost Control',
    colorClass: 'text-amber-700',
    barColor: 'bg-amber-600',
  },
  'erp-integration': {
    label: 'Oracle ERP Cloud, WBS & SoD Controls',
    shortLabel: 'Oracle ERP & SoD',
    colorClass: 'text-indigo-700',
    barColor: 'bg-indigo-600',
  },
};

export const BADGES: BadgeDefinition[] = [
  {
    id: 'gatekeeper-badge',
    title: 'Capital Gatekeeper',
    description: 'Clear Stage 1 and master DoA thresholds, Five Cases, and sovereign funding.',
    block: 'part1',
    color: 'blue',
  },
  {
    id: 'stress-shield',
    title: 'Macro Stress Shield',
    description: 'Pass the Stage 2 Macroeconomic Stress-Test & Two-Envelope Tender simulation.',
    block: 'part1',
    color: 'emerald',
  },
  {
    id: 'rationing-strategist',
    title: 'Capital Rationing Strategist',
    description: 'Maximize portfolio NPV using Profitability Index (PI) inside a fixed budget cap.',
    block: 'part1',
    color: 'amber',
  },
  {
    id: 'morning-certified',
    title: 'Governance & Valuation Pro',
    description: 'Conquer Stages 1–4 across Topics 1 & 2 including the Locomotive NPV Case.',
    block: 'part1',
    color: 'blue',
  },
  {
    id: 'evm-commander',
    title: 'EVM & Burn-Down Commander',
    description: 'Stabilize CPI, TCPI, and linear contingency burn-down in Stage 5.',
    block: 'part2',
    color: 'rose',
  },
  {
    id: 'erp-architect',
    title: 'Oracle ERP Architect',
    description: 'Configure WBS encumbrances, 3-way matching tolerances, and EAM-to-GL bridges.',
    block: 'part2',
    color: 'emerald',
  },
  {
    id: 'day3-master',
    title: 'Day 3 Executive Master',
    description: 'Complete all 8 stages across Module 3: Governance, Appraisal, Control & ERP.',
    block: 'both',
    color: 'amber',
  },
];

export const LEVELS: LevelConfig[] = [
  // =========================================================================
  // DAY 3 · TOPIC 1 — STAGE 1
  // =========================================================================
  {
    id: 1,
    block: 'part1',
    topicNumber: 1,
    moduleName: 'Topic 1 · Budget Approval Workflows',
    topicTag: 'Subtopics 1.1–1.9 · Governance & Sovereign Funding',
    title: 'The Capital Gatekeeper',
    subtitle: 'Route railway funding proposals through DoA thresholds, Five Cases, sovereign stakeholders, and bankable structures.',
    mechanic: 'governance-gate',
    competency: 'approval-governance',
    accentColor: 'blue',
    estimatedMinutes: 3,
    xpReward: 160,
    briefing: {
      objective:
        'Apply Module 3 Topic 1 governance rules across 7 railway funding decisions: CAC charter, the Five Cases Model, Delegation of Authority (DoA), Off-Budget exceptions, MoF/PIF/TGA mandates, PPP availability structures, and Green Sukuk.',
      howToPlay: [
        'Inspect each funding proposal, SAR amount, and governance context carefully.',
        'Route the decision to the compliant authority tier or select the strongest strategic structure.',
        'Review the instant governance takeaway before advancing.',
      ],
      keyRules: [
        {
          title: 'DoA Escalation Matrix',
          summary:
            'Dept Manager ≤ 250k SAR (budgeted OpEx) · VP ≤ 2M CapEx / 5M OpEx · CEO ≤ 20M SAR · Board of Directors > 20M SAR.',
        },
        {
          title: 'Sovereign & Bankable Backstops',
          summary:
            'MoF handles PSO subsidies/grants, PIF provides sovereign equity, TGA regulates safety, and Take-or-Pay off-takes secure mineral rail debt.',
        },
      ],
    },
    steps: [
      {
        id: 'd3-l1-s1',
        kind: 'router',
        badgeText: 'Subtopic 1.4 · Delegation of Authority (DoA)',
        title: 'Heavy Freight Track Switch Replacement',
        department: 'Northern Corridor Engineering',
        amountOrMetric: '18,500,000 SAR (Budgeted CapEx)',
        horizonOrRule: 'Within Board-Approved Annual Envelope',
        scenario:
          'Procurement submits a budgeted 18.5M SAR CapEx contract for high-speed turnouts. Who holds the exact Delegation of Authority (DoA) sign-off threshold without unnecessary Board escalation?',
        leftOption: {
          id: 'A',
          title: 'Chief Executive Officer (CEO)',
          desc: 'Authorized up to 20,000,000 SAR within Board-approved budgets',
          tone: 'blue',
        },
        rightOption: {
          id: 'B',
          title: 'Vice President of Infrastructure',
          desc: 'Authorized up to 2,000,000 SAR CapEx / 5,000,000 SAR OpEx',
          tone: 'amber',
        },
        correctAnswer: 'A',
        subLabel: 'DoA Tier: CEO (≤ 20M SAR)',
        hint: 'Check the DoA matrix: VP CapEx limit is 2M SAR; CEO limit is 20M SAR; Board is >20M SAR.',
        explanation:
          'Under SAR’s DoA matrix, a VP is capped at 2M SAR for CapEx (5M SAR for OpEx). At 18.5M SAR inside an already approved budget, the CEO holds sign-off authority up to 20M SAR; anything above 20M SAR goes to the Board.',
        takeaway: 'Enforce strict DoA ceilings: Manager 250k · VP 2M CapEx / 5M OpEx · CEO 20M · Board >20M SAR.',
      },
      {
        id: 'd3-l1-s2',
        kind: 'choice',
        badgeText: 'Subtopic 1.2 · The Five Cases Model',
        prompt:
          'Before the Capital Allocation Committee (CAC) reviews a 3.2B SAR Landbridge expansion, which Five Cases Model pillar proves that contractor market capacity, procurement strategy, and risk allocation are viable?',
        contextBox: {
          title: 'Business Case Review',
          metrics: [
            { label: 'Proposal', value: 'Landbridge Rail Link' },
            { label: 'Capital Outlay', value: '3.2B SAR' },
            { label: 'Standard', value: 'Five Cases Model' },
          ],
        },
        options: [
          {
            id: 'a',
            label: 'Commercial Case',
            detail: 'Governs procurement strategy, contractor market appetite, and contractual risk allocation.',
          },
          {
            id: 'b',
            label: 'Economic Case',
            detail: 'Quantifies public socioeconomic value, carbon abatement, and Benefit-Cost Ratio (BCR).',
          },
          {
            id: 'c',
            label: 'Management Case',
            detail: 'Demonstrates internal delivery capability, governance structure, and milestone schedules.',
          },
        ],
        correctOptionId: 'a',
        hint: 'Match the 5 Cases: Strategic (policy), Economic (BCR/carbon), Commercial (procurement/risk), Financial (affordability), Management (delivery).',
        explanation:
          'In the internationally recognized Five Cases Model, the Commercial Case proves vendor market appetite, optimal contracting models, and risk allocation—distinct from the Financial Case (affordability/debt) and Economic Case (socioeconomic BCR).',
        takeaway: 'Audit-proof business cases align Strategic, Economic, Commercial, Financial, and Management cases.',
      },
      {
        id: 'd3-l1-s3',
        kind: 'choice',
        badgeText: 'Subtopic 1.5 · Off-Budget Exception Governance',
        prompt:
          'Mid-year, a regional operations director requests an unplanned 3.8M SAR off-budget expenditure for non-emergency depot upgrades. What dual governance mandate must be satisfied?',
        options: [
          {
            id: 'a',
            label: 'Identify offsetting cost reductions inside existing allocations AND escalate for CFO + CEO approval',
            detail: 'Prevents budget discipline erosion while proving necessity and failure impact.',
          },
          {
            id: 'b',
            label: 'Approve it internally under the VP’s 5M SAR budgeted OpEx limit',
            detail: 'Unbudgeted outlays bypass standard departmental DoA limits.',
          },
          {
            id: 'c',
            label: 'Defer vendor invoices to January so the spend hides in next year’s baseline',
            detail: 'Violates accrual accounting and budget transparency.',
          },
        ],
        correctOptionId: 'a',
        hint: 'Unbudgeted requests bypass standard departmental limits and require both an offset and top executive sign-off.',
        explanation:
          'Off-budget requests carry a heavy evidentiary burden: departments must propose matching budget offsets within existing allocations and escalate past normal VP limits to direct CFO and CEO sign-off.',
        takeaway: 'Off-budget exceptions require matching internal offsets plus direct CFO/CEO sign-off.',
      },
      {
        id: 'd3-l1-s4',
        kind: 'choice',
        badgeText: 'Subtopic 1.6 · Sovereign Stakeholders',
        prompt:
          'Which pairing accurately matches Saudi Arabia’s sovereign rail governance institutions to their funding and regulatory mandates?',
        options: [
          {
            id: 'a',
            label: 'MoF: PSO operational subsidies & grants · PIF: Long-term sovereign equity · TGA: Rail safety & licensing',
            detail: 'Each stakeholder requires distinct regulatory and economic justification.',
          },
          {
            id: 'b',
            label: 'TGA: Issues sovereign green equity · PIF: Audits depot overtime · MoF: Licenses train drivers',
            detail: 'Scrambles regulatory vs. sovereign equity mandates.',
          },
          {
            id: 'c',
            label: 'MoF, PIF, and TGA all share identical commercial passenger ticket pricing duties',
            detail: 'Ignores institutional separation.',
          },
        ],
        correctOptionId: 'a',
        hint: 'Think: Ministry of Finance (PSO subsidies), Public Investment Fund (equity expansions), Transport General Authority (safety/licensing).',
        explanation:
          'MoF oversees Public Service Obligation (PSO) subsidies and state grants; PIF provides long-term sovereign equity for Vision 2030 expansions; TGA regulates safety, service standards, and commercial licensing.',
        takeaway: 'Tailor justifications to MoF (PSO/grants), PIF (sovereign equity), and TGA (safety/licensing).',
      },
      {
        id: 'd3-l1-s5',
        kind: 'router',
        badgeText: 'Subtopic 1.7 · PPP Concession & IFRIC 12',
        title: 'New Intercity High-Speed Electrification via DBFOM',
        department: 'Structured Finance & PPPs',
        amountOrMetric: '25-Year DBFOM Concession',
        horizonOrRule: 'Availability Payments Tied to Punctuality & Safety',
        scenario:
          'A private consortium Designs, Builds, Finances, Operates, and Maintains (DBFOM) a new corridor in exchange for monthly Availability Payments. How does this shift CapEx/OpEx risk and accounting?',
        leftOption: {
          id: 'A',
          title: 'Shifts Upfront CapEx & Lifecycle Risk to Private Partner (IFRIC 12)',
          desc: 'Monthly Availability Payments depend on verified track availability & safety',
          tone: 'emerald',
        },
        rightOption: {
          id: 'B',
          title: 'Treats Concession as Zero-Compliance Off-Balance-Sheet Rental',
          desc: 'Assumes IFRIC 12 ignores service concession asset & liability recognition',
          tone: 'indigo',
        },
        correctAnswer: 'A',
        subLabel: 'PPP Service Concession · IFRIC 12',
        hint: 'PPP transfers upfront CapEx financing and multi-year performance risk, but still requires IFRIC 12 Balance Sheet evaluation.',
        explanation:
          'DBFOM PPPs transfer upfront construction financing and lifecycle maintenance risk to the private concessionaire via performance-linked Availability Payments, while requiring rigorous IFRIC 12 evaluation for Balance Sheet asset/liability recognition.',
        takeaway: 'PPP Availability Payments transfer construction/lifecycle risk and require IFRIC 12 accounting.',
      },
      {
        id: 'd3-l1-s6',
        kind: 'choice',
        badgeText: 'Subtopic 1.8 · Commercial Off-Take Backstops',
        prompt:
          'To finance a dedicated 180-km mineral freight spur and hopper wagon fleet for an industrial mining partner (e.g., Ma’aden), what contractual clause makes the CapEx bankable for lenders?',
        options: [
          {
            id: 'a',
            label: 'A long-term "Take-or-Pay" Off-Take Agreement guaranteeing payment even if the miner ships less volume',
            detail: 'Insulates SAR’s capital recovery from customer production shortfalls.',
          },
          {
            id: 'b',
            label: 'A non-binding letter of intent allowing spot cancellations every 30 days',
            detail: 'Leaves 30-year dedicated rail assets exposed to stranding risk.',
          },
          {
            id: 'c',
            label: 'Financing the entire 180-km track using 90-day short-term overdrafts',
            detail: 'Severe asset-liability maturity mismatch.',
          },
        ],
        correctOptionId: 'a',
        hint: 'What clause forces the industrial customer to pay for committed capacity regardless of actual shipment volume?',
        explanation:
          'Long-term "take-or-pay" commercial off-take contracts guarantee contracted cash flows even if the industrial client faces temporary mine shutdowns, making dedicated spurs and rolling stock bankable.',
        takeaway: 'Use Take-or-Pay off-take contracts as bankable backstops for dedicated freight CapEx.',
      },
      {
        id: 'd3-l1-s7',
        kind: 'choice',
        badgeText: 'Subtopic 1.9 · Green Finance & Sustainability Sukuk',
        prompt:
          'SAR structures an electrified freight corridor and solar-powered terminal program under an audited ESG Green Financing Framework. What direct financial benefit does a Sustainability Sukuk deliver?',
        options: [
          {
            id: 'a',
            label: 'A "Greenium" pricing discount that lowers the corporate cost of capital, backed by audited emissions-avoided reports',
            detail: 'Attracts ESG institutional capital at lower yield spreads.',
          },
          {
            id: 'b',
            label: 'Exempts the project from Stage-Gate reviews and CWIP capitalization audits',
            detail: 'Green finance adds reporting rigor; it never removes governance.',
          },
          {
            id: 'c',
            label: 'Allows diesel locomotives to be booked as solar equipment on the Fixed Asset Register',
            detail: 'Greenwashing violates Climate Bonds criteria and external audits.',
          },
        ],
        correctOptionId: 'a',
        hint: 'Recall the ESG pricing advantage term from Topic 1.9 ("greenium").',
        explanation:
          'Certified green assets (electrification, modal-shift freight, solar terminals) qualify for Green Bonds and Sustainability Sukuk—capturing a "greenium" yield discount in exchange for audited post-issuance ESG impact reporting.',
        takeaway: 'Green Finance & Sustainability Sukuk capture a "greenium" that lowers cost of capital.',
      },
    ],
  },

  // =========================================================================
  // DAY 3 · TOPIC 1 — STAGE 2 (INCLUDES SLIDER LAB #1: macro-stress)
  // =========================================================================
  {
    id: 2,
    block: 'part1',
    topicNumber: 1,
    moduleName: 'Topic 1 · Budget Integration & Stress Testing',
    topicTag: 'Subtopics 1.10–1.18 · CWIP, Stress Tests & Tenders',
    title: 'Stress-Test & Tender Command',
    subtitle: 'Merge CapEx/OpEx cash flows, defend proposals before the Audit Committee, and enforce Two-Envelope tenders.',
    mechanic: 'stress-lab',
    competency: 'approval-governance',
    accentColor: 'emerald',
    estimatedMinutes: 4,
    xpReward: 200,
    briefing: {
      objective:
        'Master the second half of Topic 1: CWIP 30-day commissioning protocols, merged CapEx/OpEx DSCR modeling, live macroeconomic stress-testing, WBS baseline locks, Two-Envelope tenders, and retrospective Value Auditing.',
      howToPlay: [
        'Solve the governance challenges and configure the Macroeconomic Stress-Testing Simulator in Step 3.',
        'Keep Debt Service Coverage Ratio (DSCR) ≥ 1.25x even under +250 bps SAIBOR, FX swings, and +25% steel/diesel shocks.',
        'Check your instant explanation after every step.',
      ],
      keyRules: [
        {
          title: '30-Day CWIP & Baseline Lock',
          summary:
            'Capitalize completed CWIP within 30 days of acceptance trials; lock approved budget/WBS baselines at handover.',
        },
        {
          title: 'Two-Envelope >80% Gate',
          summary:
            'Open commercial price bids ONLY for vendors passing the >80% technical threshold—eliminating substandard low-bid traps.',
        },
      ],
    },
    steps: [
      {
        id: 'd3-l2-s1',
        kind: 'choice',
        badgeText: 'Subtopic 1.12 · CWIP Commissioning Protocol',
        prompt:
          'A newly constructed 90-km mineral rail spur passes technical acceptance trials and receives its TGA operating license on May 1. Under CWIP Governance, what is the mandatory capitalization deadline?',
        options: [
          {
            id: 'a',
            label: 'Formal capitalization from CWIP to active PP&E within 30 days, triggering lawful depreciation immediately',
            detail: 'Prevents "aged CWIP stagnation" and understated depreciation.',
          },
          {
            id: 'b',
            label: 'Leave the cost parked in CWIP for 24 months until all warranty periods expire',
            detail: 'Violates IAS 16 readiness rules and triggers external audit flags.',
          },
          {
            id: 'c',
            label: 'Write off the entire CWIP balance to Q2 OpEx upon opening day',
            detail: 'Destroys Balance Sheet asset recognition.',
          },
        ],
        correctOptionId: 'a',
        hint: 'Topic 1.12 enforces a strict calendar-day window after acceptance trials and operating license receipt.',
        explanation:
          'CWIP governance enforces a mandatory 30-day capitalization protocol once technical acceptance and operating licenses are secured, preventing aged CWIP stagnation and initiating accurate depreciation schedules.',
        takeaway: 'Enforce a strict 30-day CWIP-to-PP&E capitalization timeline after commissioning.',
      },
      {
        id: 'd3-l2-s2',
        kind: 'choice',
        badgeText: 'Subtopic 1.13 · Merging CapEx & OpEx Cash Flows',
        prompt:
          'Why must Treasury merge multi-year CapEx phasing schedules and ongoing OpEx forecasts into one integrated financial model before seeking debt financing?',
        contextBox: {
          title: 'Integrated Model Check',
          metrics: [
            { label: 'Peak Construction Yr', value: 'Max Cash Drain' },
            { label: 'Lender Metric', value: 'DSCR ≥ 1.25x' },
          ],
        },
        options: [
          {
            id: 'a',
            label: 'Reveals combined peak-year cash burn and verifies Debt Service Coverage (DSCR) across principal & interest',
            detail: 'Breaks silos so sponsors see the long-term OpEx carrying cost of requested CapEx.',
          },
          {
            id: 'b',
            label: 'Merging them lets managers reclassify diesel fuel as Balance Sheet PP&E',
            detail: 'Integration improves visibility; it never alters IFRS classification.',
          },
          {
            id: 'c',
            label: 'Eliminates the need to forecast interest and principal debt repayments',
            detail: 'Opposite: debt service modeling is a core purpose.',
          },
        ],
        correctOptionId: 'a',
        hint: 'Think about peak construction cash burn and whether operating earnings cover principal + interest.',
        explanation:
          'An integrated financial model reveals total enterprise cash drain during peak construction years and tests Debt Service Coverage Ratios against operational earnings—forcing sponsors to own future OpEx carrying costs.',
        takeaway: 'Merge CapEx S-curves with OpEx forecasts to manage peak cash burn and Debt Service Coverage.',
      },
      {
        id: 'd3-l2-s3',
        kind: 'slider-lab',
        title: 'Audit Committee Macroeconomic Stress-Test Lab',
        prompt:
          'Subtopic 1.15 Simulation: The Audit Committee stress-tests our 2.4B SAR corridor against a SAIBOR +250 bps spike, EUR/USD FX devaluation, and +25% steel/diesel surge. Configure hedging & escalation protection to lift Stressed DSCR above the 1.25x lender covenant!',
        visualType: 'macro-stress',
        sliders: [
          {
            id: 'saiborHedgePct',
            label: 'Interest Rate Swap / Fixed Sukuk Tranche',
            unit: '% Fixed Debt',
            min: 0,
            max: 100,
            step: 5,
            defaultValue: 20,
            targetMin: 70,
            targetMax: 95,
          },
          {
            id: 'fxHedgePct',
            label: 'Foreign Exchange Forward Cover (EUR/USD Imports)',
            unit: '% Hedged',
            min: 0,
            max: 100,
            step: 5,
            defaultValue: 15,
            targetMin: 65,
            targetMax: 90,
          },
          {
            id: 'commodityHedgePct',
            label: 'Steel Escalation Cap & Fuel Surcharge Pass-Through',
            unit: '% Protected',
            min: 0,
            max: 100,
            step: 5,
            defaultValue: 10,
            targetMin: 60,
            targetMax: 85,
          },
        ],
        hint: 'Lock 70–95% of debt via fixed Sukuk/swaps, hedge 65–90% of FX equipment contracts, and protect 60–85% of steel/diesel exposure to clear the 1.25x DSCR floor.',
        explanation:
          'Proposals that fail SAIBOR (+200–300 bps), FX, or +25% steel/diesel stress tests cannot reach Board approval without contractual hedging, fixed-rate Sukuk tranches, or index-linked freight surcharges.',
        takeaway: 'Stress-test CapEx proposals against SAIBOR, FX, and commodity shocks with contractual hedges.',
      },
      {
        id: 'd3-l2-s4',
        kind: 'choice',
        badgeText: 'Subtopic 1.14 · Audit Committee Defense',
        prompt:
          'During an Audit Committee interrogation of a major signaling modernization proposal, which combination of evidence represents a strong defense?',
        options: [
          {
            id: 'a',
            label: 'Empirical contractor benchmarks, Monte Carlo P80 contingency sizing, verified off-take demand, and strict IFRS compliance',
            detail: 'Transparent risk disclosure plus complete command over sensitivities.',
          },
          {
            id: 'b',
            label: 'Best-case ridership projections only, zero contingency reserve, and verbal vendor quotes',
            detail: 'Fails all four Audit Committee scrutiny pillars.',
          },
          {
            id: 'c',
            label: 'Hiding geotechnical risk inside an unapproved general OpEx reserve',
            detail: 'Triggers immediate rejection and governance audit.',
          },
        ],
        correctOptionId: 'a',
        hint: 'Check Topic 1.14’s 4 interrogation focus areas: cost benchmarks, P80 contingency, demand commitments, and IFRS compliance.',
        explanation:
          'Successful Audit Committee defense rests on transparent risk disclosure across 4 pillars: benchmarked engineering costs, P80 probabilistic contingency, verified demand/off-take commitments, and IFRS capitalization compliance.',
        takeaway: 'Defend proposals with benchmarked costs, P80 buffers, verified demand, and IFRS compliance.',
      },
      {
        id: 'd3-l2-s5',
        kind: 'choice',
        badgeText: 'Subtopic 1.16 · Approval-to-Execution Handover',
        prompt:
          'Once the Board approves a capital project, what happens inside the ERP system during Life-of-Project Handover Governance?',
        options: [
          {
            id: 'a',
            label: 'Lock the approved budget/schedule/scope baseline and activate approved CapEx WBS codes for purchase orders',
            detail: 'Future baseline changes now require formal Change Control Board (CCB) sign-off.',
          },
          {
            id: 'b',
            label: 'Leave WBS budgets unlocked so site engineers can freely move funds between civil and rolling stock',
            detail: 'Causes cross-package cost contamination.',
          },
          {
            id: 'c',
            label: 'Delete the business case assumptions so delivery teams are judged only on spend speed',
            detail: 'Breaks accountability for original Board covenants.',
          },
        ],
        correctOptionId: 'a',
        hint: 'Think of the two ERP handover steps: Baseline Lock and WBS Activation.',
        explanation:
          'Handover Governance transfers ownership to the Delivery Team by locking the approved baseline in the ERP and activating WBS codes—binding execution to Board covenants and routing changes to the CCB.',
        takeaway: 'Lock the approved baseline and activate WBS codes in ERP upon project handover.',
      },
      {
        id: 'd3-l2-s6',
        kind: 'router',
        badgeText: 'Subtopic 1.17 · Two-Envelope Tender Evaluation',
        title: 'Signaling Modernization Commercial Bid Opening',
        department: 'Procurement & Tendering Committee',
        amountOrMetric: '4 Vendors Submitted Envelopes',
        horizonOrRule: 'Technical Minimum Gate: >80%',
        scenario:
          'Vendor Z submitted the lowest price (140M SAR vs. 195M SAR average), but scored only 64% on Technical Compliance (below the 80% gate). Should the committee open Vendor Z’s Commercial Price Envelope?',
        leftOption: {
          id: 'A',
          title: 'Disqualify Sealed Commercial Bid Immediately',
          desc: 'Enforce Two-Envelope >80% technical gate to block substandard low-bid risk',
          tone: 'blue',
        },
        rightOption: {
          id: 'B',
          title: 'Open Price Envelope & Award on Lowest Sticker Price',
          desc: 'Override technical threshold to capture short-term CapEx savings',
          tone: 'amber',
        },
        correctAnswer: 'A',
        subLabel: 'Two-Envelope Rule · >80% Technical Gate',
        hint: 'In Two-Envelope evaluation, commercial bids are ONLY opened for vendors passing the technical minimum gate.',
        explanation:
          'Strict Two-Envelope governance physically segregates technical and commercial bids. Disqualifying any bid below the >80% technical gate before opening commercial envelopes eliminates low-bid, substandard engineering failure.',
        takeaway: 'Never open commercial envelopes for vendors failing the >80% Two-Envelope technical gate.',
      },
      {
        id: 'd3-l2-s7',
        kind: 'choice',
        badgeText: 'Subtopic 1.18 · Retrospective Value Auditing',
        prompt:
          'Two to three years after a new freight corridor begins commercial operations, SAR conducts a formal Value Audit. What does this retrospective audit verify?',
        options: [
          {
            id: 'a',
            label: 'Actual freight tonnage, passenger ridership, realized lifecycle maintenance unit costs, and operating margins vs. the original business case',
            detail: 'Closes the governance loop and holds sponsors accountable for forecasting accuracy.',
          },
          {
            id: 'b',
            label: 'Only whether the opening ceremony ribbon was cut on schedule',
            detail: 'Ignores commercial and operational value realization.',
          },
          {
            id: 'c',
            label: 'Re-evaluates whether steel rails should be reclassified as office supplies',
            detail: 'Unrelated to post-commissioning strategic impact.',
          },
        ],
        correctOptionId: 'a',
        hint: 'Value Auditing checks whether the promised business case returns actually materialized 2–3 years post-commissioning.',
        explanation:
          'Value Auditing (2–3 years post-commissioning) compares realized freight tonnage, ridership, maintenance OpEx/km, and margins against original forecasts—feeding real empirical insights back into future capital decisions.',
        takeaway: 'Conduct Value Audits 2–3 years post-commissioning to verify business case realization.',
      },
    ],
  },

  // =========================================================================
  // DAY 3 · TOPIC 2 — STAGE 3 (INCLUDES SLIDER LAB #2: npv-rationing)
  // =========================================================================
  {
    id: 3,
    block: 'part1',
    topicNumber: 2,
    moduleName: 'Topic 2 · ROI, Payback & NPV Analysis',
    topicTag: 'Subtopics 2.1–2.10 · Discounting, Hurdles & Rationing',
    title: 'NPV & Capital Rationing Lab',
    subtitle: 'Apply TVM, MIRR, tiered risk hurdle rates, Tornado sensitivities, EVA, and Profitability Index capital rationing.',
    mechanic: 'rationing-lab',
    competency: 'investment-appraisal',
    accentColor: 'teal',
    estimatedMinutes: 4,
    xpReward: 220,
    briefing: {
      objective:
        'Master core investment appraisal metrics from Topic 2: NPV superiority, MIRR vs. IRR reinvestment flaw, Discounted Payback, Tiered Risk Hurdle Rates, Tornado Diagrams, EVA, and Profitability Index (PI) Capital Rationing.',
      howToPlay: [
        'Evaluate each valuation problem using Time Value of Money and WACC principles.',
        'In Step 6, run the Capital Rationing Simulator to allocate a fixed 1,000M SAR budget across candidate projects using Profitability Index (PI).',
        'Aim for maximum Portfolio NPV without exceeding the 1,000M SAR ceiling.',
      ],
      keyRules: [
        {
          title: 'Tiered Hurdle Rates & MIRR',
          summary:
            'Sustaining = WACC − 1% · Capacity = WACC + 1% · Greenfield = WACC + 4%. MIRR reinvests inflows realistically at WACC.',
        },
        {
          title: 'Capital Rationing (PI) & EVA',
          summary:
            'Under fixed budget caps, rank projects by Profitability Index (PV / CapEx). EVA = NOPAT − Capital Charge.',
        },
      ],
    },
    steps: [
      {
        id: 'd3-l3-s1',
        kind: 'choice',
        badgeText: 'Subtopics 2.1–2.2 · TVM & NPV Gold Standard',
        prompt:
          'Why is Net Present Value (NPV) universally considered the gold standard metric over accounting profit or simple payback for 30–50 year railway assets?',
        options: [
          {
            id: 'a',
            label: 'It discounts every future cash flow across the full asset lifespan to measure absolute enterprise wealth creation in today’s Riyals',
            detail: 'Captures Time Value of Money, risk via discount rate, and full multi-decade scale.',
          },
          {
            id: 'b',
            label: 'It ignores all cash flows after Year 5 so long-term maintenance costs disappear',
            detail: 'That is the flaw of Payback Period, not NPV.',
          },
          {
            id: 'c',
            label: 'It assumes a Riyal earned in Year 40 has identical purchasing power to a Riyal today',
            detail: 'Violates Time Value of Money.',
          },
        ],
        correctOptionId: 'a',
        hint: 'NPV answers: "How many Riyals of net wealth does this project add today after covering WACC?"',
        explanation:
          'Over 30–50 year rail lifespans, failing to discount cash flows distorts value. NPV incorporates Time Value of Money across the entire horizon and directly measures absolute enterprise wealth added (Accept if NPV > 0).',
        takeaway: 'NPV is the gold standard because it measures absolute enterprise wealth creation over the full lifecycle.',
      },
      {
        id: 'd3-l3-s2',
        kind: 'choice',
        badgeText: 'Subtopic 2.4 · IRR vs. Modified IRR (MIRR)',
        prompt:
          'A rail terminal project shows a headline IRR of 22% while corporate WACC is 8%. Why does the Finance Director insist on recalculating Modified IRR (MIRR)?',
        options: [
          {
            id: 'a',
            label: 'Traditional IRR unrealistically assumes intermediate cash inflows can be reinvested at 22%, whereas MIRR compounds inflows at realistic WACC (8%)',
            detail: 'Eliminates inflated return projections on multi-decade infrastructure.',
          },
          {
            id: 'b',
            label: 'MIRR ignores initial capital outlays to make marginal projects look stronger',
            detail: 'False — MIRR includes all initial outlays and produces a more conservative rate.',
          },
          {
            id: 'c',
            label: 'MIRR replaces WACC with the simple payback year count',
            detail: 'Unrelated metrics.',
          },
        ],
        correctOptionId: 'a',
        hint: 'Ask yourself: Can SAR really reinvest interim terminal cash flows at 22% every year, or at its 8% cost of capital?',
        explanation:
          'Standard IRR embeds the unrealistic reinvestment assumption that interim cash flows earn the project’s own high IRR (22%). MIRR corrects this by compounding intermediate cash inflows at the company’s realistic WACC (8%).',
        takeaway: 'Use MIRR instead of raw IRR to avoid unrealistic reinvestment-rate inflation.',
      },
      {
        id: 'd3-l3-s3',
        kind: 'choice',
        badgeText: 'Subtopic 2.5 · Simple vs. Discounted Payback',
        prompt:
          'Project Alpha costs 100M SAR and generates 25M SAR/year for 20 years. Simple Payback is 4.0 years. What happens under Discounted Payback, and what is its biggest blind spot?',
        options: [
          {
            id: 'a',
            label: 'Discounted Payback takes longer than 4.0 years (due to TVM discounting), and both payback metrics ignore all profitable cash flows after Year 4–5',
            detail: 'Measures liquidity recovery speed, biasing heavily against long-lived rail assets.',
          },
          {
            id: 'b',
            label: 'Discounted Payback is shorter than 4.0 years and measures total 20-year wealth',
            detail: 'Discounting shrinks future cash flows, making recovery slower—not faster.',
          },
          {
            id: 'c',
            label: 'Payback Period automatically captures Year-15 overhaul costs and Year-20 salvage value',
            detail: 'Payback stops counting the moment initial CapEx is recovered.',
          },
        ],
        correctOptionId: 'a',
        hint: 'Discounted cash inflows are smaller in PV terms than nominal inflows—and payback stops counting once cumulative inflows hit 100M.',
        explanation:
          'Discounted Payback accounts for Time Value of Money so recovery takes longer than Simple Payback. Crucially, payback metrics only track short-term liquidity recovery and completely ignore post-cutoff cash flows.',
        takeaway: 'Payback tracks liquidity speed only; never rely on it alone for 30-year rail investments.',
      },
      {
        id: 'd3-l3-s4',
        kind: 'router',
        badgeText: 'Subtopic 2.6 & 2.16 · Tiered Risk-Adjusted Hurdle Rates',
        title: 'Greenfield Desert Passenger Spur vs. Core Safety Renewal',
        department: 'Corporate Investment Appraisal',
        amountOrMetric: 'Corporate WACC = 8.0%',
        horizonOrRule: 'Tiered Asset Risk Classes (Cat 1 vs. Cat 3)',
        scenario:
          'Applying a flat 8.0% corporate hurdle rate across all proposals distorts capital allocation. What hurdle rate must be assigned to a high-risk Category 3 Greenfield Expansion into an unproven corridor?',
        leftOption: {
          id: 'A',
          title: 'Category 3 Greenfield: WACC + 4% (12.0%)',
          desc: 'Penalizes speculative ridership & greenfield risk to protect the Balance Sheet',
          tone: 'indigo',
        },
        rightOption: {
          id: 'B',
          title: 'Category 1 Sustaining: WACC − 1% (7.0%)',
          desc: 'Reserved for low-risk regulatory safety & core sustaining renewals',
          tone: 'emerald',
        },
        correctAnswer: 'A',
        subLabel: 'Hurdle Rate Tier: Cat 3 = WACC + 4%',
        hint: 'Check Topic 2.16: Cat 1 Sustaining = WACC − 1%; Cat 2 Capacity = WACC + 1%; Cat 3 Greenfield = WACC + 4%.',
        explanation:
          'A homogeneous hurdle rate encourages excessive risk-taking. Topic 2.16 enforces tiered hurdles: Category 1 Core Sustaining (`WACC − 1%`), Category 2 Capacity (`WACC + 1%`), and Category 3 Greenfield (`WACC + 4%`).',
        takeaway: 'Apply tiered hurdle rates: Sustaining (WACC−1%), Capacity (WACC+1%), Greenfield (WACC+4%).',
      },
      {
        id: 'd3-l3-s5',
        kind: 'choice',
        badgeText: 'Subtopics 2.7 & 2.8 · Tornado & Scenario Modeling',
        prompt:
          'During investment appraisal, how does a Tornado Diagram complement Three-Case Scenario Modeling (Base, Bull, Downturn)?',
        options: [
          {
            id: 'a',
            label: 'Tornado Diagrams isolate and rank individual variables by NPV impact, while Scenario Modeling stress-tests simultaneous macro shifts to verify Downturn debt solvency',
            detail: 'Prevents analysis paralysis by spotlighting the 2–3 assumptions that actually drive solvency.',
          },
          {
            id: 'b',
            label: 'Tornado Diagrams show only best-case outcomes while hiding debt covenant tests',
            detail: 'Tornado charts display symmetric upside and downside swings per variable.',
          },
          {
            id: 'c',
            label: 'Scenario Modeling guarantees zero cost overruns if Base Case NPV is positive',
            detail: 'Approval requires the Downturn (Bear) case not to breach debt covenants.',
          },
        ],
        correctOptionId: 'a',
        hint: 'Single-variable sensitivity ranking (Tornado) vs. multi-variable coherent environments (Base/Bull/Downturn).',
        explanation:
          'Tornado Diagrams visually rank individual risk drivers from largest to smallest NPV swing; Scenario Modeling shifts interconnected variables together to prove the Downturn Scenario does not breach debt covenants.',
        takeaway: 'Use Tornado Diagrams to rank key drivers and Downturn Scenarios to verify debt covenant solvency.',
      },
      {
        id: 'd3-l3-s6',
        kind: 'slider-lab',
        title: 'Capital Rationing & Profitability Index (PI) Lab',
        prompt:
          'Subtopic 2.9 Simulation: Corporate CapEx is capped at a hard 1,000M SAR ceiling. Allocate capital across the three candidate projects ranked by Profitability Index (PI = PV / CapEx) to maximize Total Portfolio NPV without breaching 1,000M SAR!',
        visualType: 'npv-rationing',
        sliders: [
          {
            id: 'highPiSignaling',
            label: 'ETCS Corridor Signaling (PI: 1.62 · Highest Efficiency)',
            unit: 'M SAR',
            min: 0,
            max: 400,
            step: 50,
            defaultValue: 100,
            targetMin: 350,
            targetMax: 400,
          },
          {
            id: 'medPiFreightSpur',
            label: 'Industrial Take-or-Pay Spur (PI: 1.44 · High Efficiency)',
            unit: 'M SAR',
            min: 0,
            max: 450,
            step: 50,
            defaultValue: 150,
            targetMin: 400,
            targetMax: 450,
          },
          {
            id: 'lowPiTerminal',
            label: 'Luxury Terminal Concourse (PI: 1.12 · Lower Efficiency)',
            unit: 'M SAR',
            min: 0,
            max: 500,
            step: 50,
            defaultValue: 450,
            targetMin: 100,
            targetMax: 150,
          },
        ],
        hint: 'Fully fund the highest-PI projects first (Signaling 350–400M + Freight Spur 400–450M), leaving only 100–150M SAR for the lower-PI Terminal so total spend stays ≤ 1,000M SAR!',
        explanation:
          'Under Capital Rationing, ranking by raw project size destroys value. Ranking by Profitability Index (PI = PV / Initial CapEx) ensures every scarce Riyal goes to the highest bang-for-buck packages inside the 1,000M SAR cap.',
        takeaway: 'Under Capital Rationing, rank projects by Profitability Index (PI) to maximize NPV per Riyal.',
      },
      {
        id: 'd3-l3-s7',
        kind: 'choice',
        badgeText: 'Subtopic 2.10 · Economic Value Added (EVA)',
        prompt:
          'A regional logistics subsidiary reports +24M SAR in Net Operating Profit After Tax (NOPAT), but ties up 500M SAR of capital at an 8% WACC (40M SAR Capital Charge). What is its Economic Value Added (EVA)?',
        contextBox: {
          title: 'EVA Calculation',
          metrics: [
            { label: 'NOPAT', value: '+24M SAR' },
            { label: 'Capital Tied Up', value: '500M SAR' },
            { label: 'WACC Charge (8%)', value: '40M SAR' },
          ],
        },
        options: [
          {
            id: 'a',
            label: '−16M SAR EVA — The unit generated accounting profit but destroyed economic value',
            detail: 'EVA = NOPAT (24M) − Capital Charge (40M) = −16M SAR.',
          },
          {
            id: 'b',
            label: '+24M SAR EVA — Any positive accounting profit automatically creates shareholder wealth',
            detail: 'Ignores the 40M SAR opportunity cost of capital tied up on the Balance Sheet.',
          },
          {
            id: 'c',
            label: '+64M SAR EVA — Add NOPAT and Capital Charge together',
            detail: 'Capital charge must be subtracted from NOPAT.',
          },
        ],
        correctOptionId: 'a',
        hint: 'Formula: EVA = NOPAT − (Invested Capital × WACC).',
        explanation:
          'Accounting profit alone can mislead directors. Subtracting the 40M SAR cost of tied-up capital from 24M SAR NOPAT reveals an EVA of −16M SAR—disciplining directors against holding idle Balance Sheet assets.',
        takeaway: 'EVA = NOPAT − Capital Charge; positive accounting profit can still destroy economic value.',
      },
    ],
  },

  // =========================================================================
  // DAY 3 · TOPIC 2 — STAGE 4 (VALUATION TRIALS & LOCOMOTIVE CASE 2.18)
  // =========================================================================
  {
    id: 4,
    block: 'part1',
    topicNumber: 2,
    moduleName: 'Topic 2 · Strategic Valuation & Case 2.18',
    topicTag: 'Subtopics 2.11–2.18 · EIRR, EAC, Inflation & NPV vs. IRR',
    title: 'Strategic Valuation Trials',
    subtitle: 'Solve sovereign EIRR externalities, Challenger vs. Defender EAC, Fisher inflation traps, optimism bias, and the Locomotive Case.',
    mechanic: 'valuation-trials',
    competency: 'investment-appraisal',
    accentColor: 'amber',
    estimatedMinutes: 3,
    xpReward: 240,
    briefing: {
      objective:
        'Master advanced Topic 2 valuation traps: Sovereign EIRR (+400–600 bps), Challenger vs. Defender Equivalent Annual Cost (EAC), Abandonment Real Options, the Fisher Inflation Rule, Reference Class Forecasting, Tax Shields, and Case 2.18.',
      howToPlay: [
        'Analyze each advanced capital appraisal problem carefully.',
        'Watch out for the classic Fisher Inflation error and the NPV vs. IRR conflict in Step 7!',
        'Complete all 4 Morning Stages to unlock the Governance & Valuation Pro badge.',
      ],
      keyRules: [
        {
          title: 'Inflation Consistency & Optimism Bias',
          summary:
            'Discount Nominal CFs at Nominal WACC; Real CFs at Real WACC. Apply Reference Class uplifts (+15% CapEx, −20% early ridership).',
        },
        {
          title: 'NPV vs. IRR Conflict Axiom',
          summary:
            'When mutually exclusive projects conflict (Case 2.18: Hybrid-Electric vs. Diesel), ALWAYS select the project with higher absolute NPV.',
        },
      ],
    },
    steps: [
      {
        id: 'd3-l4-s1',
        kind: 'choice',
        badgeText: 'Subtopic 2.11 · Socioeconomic Externalities & EIRR',
        prompt:
          'A sovereign passenger-freight corridor shows a Financial IRR (FIRR) of 6.5% (below 8% commercial WACC), yet receives state grant approval at an Economic IRR (EIRR) of 11.8%. Why?',
        options: [
          {
            id: 'a',
            label: 'EIRR monetizes carbon abatement, reduced heavy-truck highway fatalities, and avoided asphalt road maintenance (+400–600 bps above FIRR)',
            detail: 'Captures broad national socioeconomic externalities for sovereign capital allocation.',
          },
          {
            id: 'b',
            label: 'EIRR removes construction CapEx from the denominator to artificially double IRR',
            detail: 'CapEx remains in full; EIRR adds quantified public economic benefits.',
          },
          {
            id: 'c',
            label: 'EIRR ignores passenger safety and emissions completely',
            detail: 'Opposite of sovereign socioeconomic appraisal.',
          },
        ],
        correctOptionId: 'a',
        hint: 'Think of the 3 quantifiable sovereign externalities in Topic 2.11: carbon, highway safety, and road wear.',
        explanation:
          'As a state-backed operator, SAR quantifies carbon emissions displaced, highway safety dividends, and avoided Ministry of Transport road repairs. EIRR typically exceeds FIRR by 400–600 bps, justifying sovereign grants.',
        takeaway: 'EIRR captures carbon, safety, and road-wear savings (+400–600 bps above FIRR) to justify state grants.',
      },
      {
        id: 'd3-l4-s2',
        kind: 'choice',
        badgeText: 'Subtopic 2.12 · Challenger vs. Defender (EAC)',
        prompt:
          'An aging 22-year-old locomotive (Defender) costs 0M upfront CapEx but burns escalating fuel & overhaul OpEx. A new locomotive (Challenger) requires high upfront CapEx with low unit OpEx over 30 years. How do you pinpoint the exact replacement year?',
        options: [
          {
            id: 'a',
            label: 'Convert both options’ lifetime cash flows into Equivalent Annual Cost (EAC) and replace when Defender’s marginal annual cost exceeds Challenger’s EAC',
            detail: 'Compares unequal asset lifespans on an annualized apples-to-apples basis.',
          },
          {
            id: 'b',
            label: 'Always keep the Defender until its frame physically cracks because CapEx is zero',
            detail: 'Ignores exponentially rising OpEx and poor fleet availability.',
          },
          {
            id: 'c',
            label: 'Compare 1-year Defender OpEx directly against 30-year total Challenger CapEx',
            detail: 'Invalid horizon mismatch.',
          },
        ],
        correctOptionId: 'a',
        hint: 'What annualized metric places an aging asset and a new 30-year asset on equal annual footing?',
        explanation:
          'Equivalent Annual Cost (EAC) converts multi-year capital and operating cash flows into a uniform annual figure. The optimal economic inflection point occurs the year the Defender’s rising annual cost surpasses the Challenger’s EAC.',
        takeaway: 'Use Equivalent Annual Cost (EAC) to find the exact Challenger vs. Defender replacement year.',
      },
      {
        id: 'd3-l4-s3',
        kind: 'choice',
        badgeText: 'Subtopic 2.13 · Real Options & Abandonment Floor',
        prompt:
          'Why does Real Options Valuation assign higher strategic value to modular, standardized track and locomotive assets than rigid bespoke infrastructure?',
        options: [
          {
            id: 'a',
            label: 'Modular assets carry higher secondary-market resale & recyclable salvage value, creating a protective Abandonment Option floor if demand stalls',
            detail: 'Values managerial flexibility to redeploy, scale down, or exit early.',
          },
          {
            id: 'b',
            label: 'Modular assets can be hidden from Fixed Asset Registers and depreciation rules',
            detail: 'All owned PP&E remains on the FAR.',
          },
          {
            id: 'c',
            label: 'Real Options eliminate the need to calculate NPV',
            detail: 'Real Options augment DCF/NPV with flexibility value.',
          },
        ],
        correctOptionId: 'a',
        hint: 'Compare rigid 30-year DCF assumptions against the managerial flexibility to exit or redeploy modular assets.',
        explanation:
          'Traditional DCF assumes rigid 30-year operation. Designing projects with modular, repurposable components and recyclable steel/copper maximizes the Abandonment Option—protecting downside NPV.',
        takeaway: 'Modular design maximizes Real Options abandonment floors via resale and salvage recovery.',
      },
      {
        id: 'd3-l4-s4',
        kind: 'router',
        badgeText: 'Subtopic 2.14 · Inflation Consistency (Fisher Relation)',
        title: '30-Year Passenger Fare & OpEx Cash Flow Model',
        department: 'Financial Modeling Desk',
        amountOrMetric: 'Nominal WACC = 9.2% · Real WACC = 6.0%',
        horizonOrRule: 'Cash Flows Modeled in Constant 2026 Purchasing Power (Real)',
        scenario:
          'An analyst modeled 30-year cash flows in constant 2026 Riyals (excluding inflation). Which discount rate MUST be used to avoid the fatal Fisher Relation mismatch error?',
        leftOption: {
          id: 'A',
          title: 'Discount at Real WACC (6.0%)',
          desc: 'Matches constant-purchasing-power Real Cash Flows with Real Discount Rate',
          tone: 'emerald',
        },
        rightOption: {
          id: 'B',
          title: 'Discount at Nominal WACC (9.2%)',
          desc: 'Includes 3% inflation in the discount rate while excluding it from cash flows',
          tone: 'amber',
        },
        correctAnswer: 'A',
        subLabel: 'Fisher Consistency: Real CF @ Real Rate',
        hint: 'The Consistency Golden Rule: Nominal CFs → Nominal Rate; Real CFs → Real Rate!',
        explanation:
          'Discounting Real (uninflated) cash flows with a Nominal discount rate (which includes inflation) double-penalizes future cash flows and artificially crushes project NPV—causing viable rail projects to be wrongly rejected.',
        takeaway: 'Never mix bases: discount Nominal cash flows at Nominal WACC and Real cash flows at Real WACC.',
      },
      {
        id: 'd3-l4-s5',
        kind: 'choice',
        badgeText: 'Subtopic 2.15 · Reference Class Forecasting',
        prompt:
          'Project sponsors submit an enthusiastic business case for a regional rail link. To neutralize "Forecast Optimism Bias," what empirical adjustments does sovereign Reference Class Forecasting apply?',
        options: [
          {
            id: 'a',
            label: 'Benchmark against past completed rail projects and apply empirical uplifts (e.g., +15% to CapEx, −20% to early ridership)',
            detail: 'Anchors appraisal in historical reality rather than sponsor enthusiasm.',
          },
          {
            id: 'b',
            label: 'Cut CapEx estimates by −15% and double early ridership to improve IRR optics',
            detail: 'Amplifies optimism bias and threatens corporate solvency.',
          },
          {
            id: 'c',
            label: 'Ignore historical rail outcomes because every corridor is treated as completely unique',
            detail: 'Repeats systematic megaproject overrun mistakes.',
          },
        ],
        correctOptionId: 'a',
        hint: 'What happens to CapEx estimates and early ridership forecasts under Reference Class uplift factors?',
        explanation:
          'Reference Class Forecasting cures cognitive optimism bias by benchmarking against real-world historical outcomes—applying sovereign uplifts (such as +15% CapEx and −20% early ridership) before committing funds.',
        takeaway: 'Defeat Optimism Bias using Reference Class Forecasting (+15% CapEx / −20% early ridership uplifts).',
      },
      {
        id: 'd3-l4-s6',
        kind: 'choice',
        badgeText: 'Subtopic 2.17 · Depreciation Tax Shield Valuation',
        prompt:
          'In a taxable commercial rail joint venture, why does accelerated depreciation produce a higher project NPV than straight-line depreciation on the exact same locomotive fleet?',
        options: [
          {
            id: 'a',
            label: 'Front-loading non-cash depreciation deductions accelerates real cash tax savings into earlier years, increasing Present Value',
            detail: 'Captures Time Value of Money on the Depreciation Tax Shield.',
          },
          {
            id: 'b',
            label: 'Accelerated depreciation creates extra physical locomotives on the Balance Sheet',
            detail: 'Depreciation schedules change tax timing, never physical assets.',
          },
          {
            id: 'c',
            label: 'Depreciation is a cash outflow that boosts taxable operating profit',
            detail: 'Depreciation is non-cash and reduces taxable income.',
          },
        ],
        correctOptionId: 'a',
        hint: 'A tax Riyal saved in Year 1 is worth more in PV terms than the same Riyal saved in Year 20.',
        explanation:
          'Although depreciation is non-cash, its tax-deductibility shields taxable income and saves real cash taxes. Accelerated tax depreciation front-loads those cash tax shields into earlier years, boosting NPV.',
        takeaway: 'Front-loaded depreciation tax shields generate real early cash savings and higher NPV.',
      },
      {
        id: 'd3-l4-s7',
        kind: 'router',
        badgeText: 'Subtopic 2.18 Case Exercise · NPV vs. IRR Conflict',
        title: 'Procurement Appraisal: 30 Heavy Freight Locomotives',
        department: 'Fleet Procurement Board',
        amountOrMetric: 'Mutually Exclusive Bid Selection',
        horizonOrRule: '30-Year Heavy Haul Evaluation',
        scenario:
          'SAR must select ONE supplier for 30 freight locomotives. Option A (European Hybrid-Electric) has higher upfront CapEx, lower fuel/OpEx, an 11% IRR, and +185M SAR NPV. Option B (Standard Diesel) has lower CapEx, higher fuel burn, a 14% IRR, and +110M SAR NPV. Which MUST you select?',
        leftOption: {
          id: 'A',
          title: 'Option A: European Hybrid-Electric (11% IRR · +185M NPV)',
          desc: 'Higher absolute enterprise wealth creation (+75M SAR extra NPV)',
          tone: 'emerald',
        },
        rightOption: {
          id: 'B',
          title: 'Option B: Standard Diesel (14% IRR · +110M NPV)',
          desc: 'Higher percentage IRR despite delivering 75M SAR less enterprise wealth',
          tone: 'blue',
        },
        correctAnswer: 'A',
        subLabel: 'Axiom: Highest NPV Wins Mutually Exclusive Bids',
        hint: 'Check Subtopic 2.18’s unshakeable finance axiom when mutually exclusive NPV and IRR conflict!',
        explanation:
          'Because the two fleet options are mutually exclusive, IRR’s scale bias misleads decision-makers toward the smaller upfront diesel bid (14% IRR). Option A delivers +75M SAR more absolute enterprise wealth (+185M vs +110M NPV). Always choose higher NPV!',
        takeaway: 'When mutually exclusive projects conflict on IRR vs. NPV, ALWAYS pick the higher absolute NPV.',
      },
    ],
  },

  // =========================================================================
  // DAY 3 · TOPIC 3 — STAGE 5 (INCLUDES SLIDER LAB #3: evm-control)
  // =========================================================================
  {
    id: 5,
    block: 'part2',
    topicNumber: 3,
    moduleName: 'Topic 3 · Earned Value & Cost Monitoring',
    topicTag: 'Subtopics 3.1–3.9 · EVM, Encumbrances & Burn-Down',
    title: 'EVM & Burn-Down Cockpit',
    subtitle: 'Track PV/AC/EV, forecast EAC & TCPI, enforce 3-way matching, and stop runaway contingency burn-down.',
    mechanic: 'evm-cockpit',
    competency: 'cost-control',
    accentColor: 'rose',
    estimatedMinutes: 4,
    xpReward: 240,
    briefing: {
      objective:
        'Take command of Module 3 Topic 3 project cost controls: Earned Value Management (PV, AC, EV), CPI/SPI stability, EAC & TCPI recovery, Committed vs. Incurred vs. Cash tiers, PR-to-PO encumbrance, Three-Way Matching, CCB 1% Rule, and Linear Contingency Burn-Down.',
      howToPlay: [
        'Calculate EVM indices and inspect expenditure tier controls across 7 steps.',
        'In Step 4, stabilize the live EVM & Contingency Burn-Down Cockpit by protecting remaining reserves and driving recovery TCPI.',
        'Watch how CPI < 1.00 signals cost overrun even when actual cash spent looks lower than Planned Value!',
      ],
      keyRules: [
        {
          title: 'EVM & The 20% Stability Rule',
          summary:
            'CPI = EV / AC · SPI = EV / PV · EAC = BAC / CPI. Once a project crosses 20% completion, CPI rarely recovers >10% without decisive intervention.',
        },
        {
          title: 'Burn-Down & CCB 1% Threshold',
          summary:
            '% Contingency consumed must never exceed % physical construction complete. Single scope changes >1% (or cumulative >5%) require CCB approval.',
        },
      ],
    },
    steps: [
      {
        id: 'd3-l5-s1',
        kind: 'choice',
        badgeText: 'Subtopics 3.1–3.2 · Earned Value Management (EVM)',
        prompt:
          'At Month 12 of a 400M SAR track extension, Planned Value (PV) is 120M SAR, Actual Cost (AC) is 110M SAR, and physical Earned Value (EV) completed is only 90M SAR. What is the real project status?',
        contextBox: {
          title: 'Month 12 EVM Telemetry',
          metrics: [
            { label: 'Planned Value (PV)', value: '120M SAR' },
            { label: 'Actual Cost (AC)', value: '110M SAR' },
            { label: 'Earned Value (EV)', value: '90M SAR' },
          ],
        },
        options: [
          {
            id: 'a',
            label: 'Both OVER BUDGET (CPI = 0.82) and BEHIND SCHEDULE (SPI = 0.75) — naive AC vs. PV comparison creates a false sense of savings',
            detail: 'CPI = 90/110 = 0.82 (<1.0 overrun); SPI = 90/120 = 0.75 (<1.0 delay).',
          },
          {
            id: 'b',
            label: 'Under budget by 10M SAR because Actual Cost (110M) is below Planned Value (120M)',
            detail: 'Classic "Cost Fallacy" — ignores that only 90M of physical track was built!',
          },
          {
            id: 'c',
            label: 'Ahead of schedule because EV is positive',
            detail: 'SPI = EV / PV = 0.75 (25% behind schedule).',
          },
        ],
        correctOptionId: 'a',
        hint: 'Never compare AC to PV directly! Always anchor against EV: CPI = EV / AC and SPI = EV / PV.',
        explanation:
          'Comparing Actual Cost (110M) to Planned Value (120M) creates the dangerous illusion of a 10M SAR saving. EVM anchors to physical Earned Value (90M): CPI = 0.82 (spending 1.22 SAR per 1.00 SAR of track) and SPI = 0.75 (behind schedule).',
        takeaway: 'Compute CPI (EV/AC) and SPI (EV/PV) to expose hidden overruns masked by schedule delays.',
      },
      {
        id: 'd3-l5-s2',
        kind: 'choice',
        badgeText: 'Subtopics 3.2–3.3 · 20% Stability Rule & EAC',
        prompt:
          'A 500M SAR (BAC) corridor crosses 25% physical completion with CPI = 0.80. Why does the Project Controller warn the Board immediately using Estimate at Completion (EAC = BAC / CPI)?',
        options: [
          {
            id: 'a',
            label: 'Projected EAC is 625M SAR (+125M deficit), and empirical research shows CPI stabilizes by 20% completion—rarely recovering >10% without aggressive intervention',
            detail: 'TCPI on remaining work climbs to 1.33, signaling unrealistic recovery without scope/VE action.',
          },
          {
            id: 'b',
            label: 'CPI always bounces back automatically to 1.05 after 50% completion',
            detail: 'Contradicts the empirical 20% Stability Rule.',
          },
          {
            id: 'c',
            label: 'EAC equals PV + AC regardless of physical efficiency',
            detail: 'Incorrect EAC formula.',
          },
        ],
        correctOptionId: 'a',
        hint: 'Calculate BAC / CPI = 500M / 0.80, and recall the 20% Completion Stability Rule!',
        explanation:
          'At 25% completion, the 20% Stability Rule applies: a 0.80 CPI projects an EAC of 625M SAR (125M SAR overrun) and demands an extreme TCPI > 1.33 on remaining work—requiring immediate Value Engineering or CCB intervention.',
        takeaway: 'CPI stabilizes by 20% completion; use EAC = BAC/CPI and TCPI to trigger early Board intervention.',
      },
      {
        id: 'd3-l5-s3',
        kind: 'choice',
        badgeText: 'Subtopics 3.4 & 3.5 · Three Expenditure Tiers & Encumbrance',
        prompt:
          'A corridor has a 200M SAR budget, 60M SAR in Paid Cash Disbursements, 30M SAR in Delivered Uninvoiced Work (Incurred), and 95M SAR in Signed Open POs (Committed). What is the true Remaining Uncommitted Budget?',
        contextBox: {
          title: 'Three-Tier Budget Check',
          metrics: [
            { label: 'Approved Budget', value: '200M SAR' },
            { label: 'Cash + Incurred', value: '60M + 30M = 90M' },
            { label: 'Signed Open POs', value: '95M SAR' },
          ],
        },
        options: [
          {
            id: 'a',
            label: '15M SAR Remaining — PR-to-PO Encumbrance Controls must count Paid, Incurred, and Committed obligations together',
            detail: '200M − (60M + 30M + 95M) = 15M SAR truly available.',
          },
          {
            id: 'b',
            label: '140M SAR Remaining — Only cash paid out of the bank reduces the budget',
            detail: 'The "Cash Control Trap" guarantees massive overspending once PO invoices arrive.',
          },
          {
            id: 'c',
            label: '110M SAR Remaining — Ignore signed open POs until delivery',
            detail: 'Signed POs are legally binding financial encumbrances.',
          },
        ],
        correctOptionId: 'a',
        hint: 'Subtract ALL three obligations (Cash Paid + Incurred + Signed Open Commitments) from 200M SAR.',
        explanation:
          'Tracking only cash disbursements creates a fatal illusion of 140M SAR availability while 125M SAR is already legally encumbered or performed. ERP Hard-Stop encumbrance reserves funds at PR/PO approval, showing the true 15M SAR balance.',
        takeaway: 'Track Committed, Incurred, and Cash tiers together via PR-to-PO encumbrances to stop overspending.',
      },
      {
        id: 'd3-l5-s4',
        kind: 'slider-lab',
        title: 'Live Corridor EVM & Contingency Burn-Down Cockpit',
        prompt:
          'Subtopic 3.9 & 3.3 Simulation: At 40% physical completion (EV = 200M SAR, AC = 244M SAR, CPI = 0.82), 58% of contingency is already burned! Configure CCB contingency freeze, Value Engineering scope offsets, and Target Recovery TCPI to bring Projected EAC within the 500M SAR BAC.',
        visualType: 'evm-control',
        sliders: [
          {
            id: 'contingencyProtectPct',
            label: 'CCB Contingency Reserve Locked for Commissioning',
            unit: '% Protected',
            min: 0,
            max: 100,
            step: 5,
            defaultValue: 15,
            targetMin: 60,
            targetMax: 85,
          },
          {
            id: 'veOffsetM',
            label: 'Value Engineering / Scope Offset Recovery',
            unit: 'M SAR Saved',
            min: 0,
            max: 80,
            step: 5,
            defaultValue: 10,
            targetMin: 35,
            targetMax: 60,
          },
          {
            id: 'targetTcpiPct',
            label: 'Mandated Recovery Cost Efficiency (TCPI × 100)',
            unit: '% Efficiency',
            min: 80,
            max: 130,
            step: 2,
            defaultValue: 90,
            targetMin: 108,
            targetMax: 120,
          },
        ],
        hint: 'Lock 60–85% of remaining contingency for final commissioning, recover 35–60M SAR via Value Engineering offsets, and enforce a realistic 108–120% recovery TCPI.',
        explanation:
          'Burning 58% of contingency at 40% physical completion violates the Linear Alignment Principle (% Contingency ≤ % Physical Complete). Locking remaining buffers for handover, executing Value Engineering offsets, and enforcing disciplined TCPI pulls EAC back toward BAC.',
        takeaway: 'Enforce Linear Contingency Burn-Down (% Contingency ≤ % Physical Complete) to protect commissioning.',
      },
      {
        id: 'd3-l5-s5',
        kind: 'choice',
        badgeText: 'Subtopic 3.6 · Three-Way Matching & Quantity Surveying',
        prompt:
          'A track contractor submits a 14.2M SAR monthly progress invoice for ballast laying. Under Three-Way Matching and Quantity Surveying governance, which three documents must align before payment release?',
        options: [
          {
            id: 'a',
            label: 'Approved Purchase Order + Independent Quantity Surveyor / Engineer Completion Certificate + Vendor Commercial Invoice',
            detail: 'Prevents paying for unverified physical track progress or unauthorized price hikes.',
          },
          {
            id: 'b',
            label: 'Vendor Invoice + Contractor Email + Verbal Depot Manager Approval',
            detail: 'Lacks independent physical verification and PO pricing control.',
          },
          {
            id: 'c',
            label: 'Original Business Case + Annual Budget + Board Minutes',
            detail: 'High-level planning documents do not verify physical monthly deliveries.',
          },
        ],
        correctOptionId: 'a',
        hint: 'Three-Way Match always links: Commercial Authorization (PO) + Physical Proof (GRN/Survey Certificate) + Billing (Invoice).',
        explanation:
          'Three-Way Matching verifies PO unit prices/scope, independent Goods Receipt / Quantity Surveyor physical progress certification, and the vendor invoice—eliminating overbilling and payment for unperformed work.',
        takeaway: 'Enforce Three-Way Matching (PO + GRN/Surveyor Certificate + Invoice) before releasing cash.',
      },
      {
        id: 'd3-l5-s6',
        kind: 'choice',
        badgeText: 'Subtopic 3.7 · Price vs. Volume vs. Mix Variance',
        prompt:
          'Quarterly traction energy OpEx came in +14M SAR over budget. Variance Attribution reveals: +9M SAR from higher global diesel tariffs, +6M SAR from running 12% more mineral freight tonnage, and −1M SAR from shifting light trains to electric corridors. What did this prove?',
        options: [
          {
            id: 'a',
            label: 'Separated uncontrollable market Price (+9M) and profitable revenue Volume (+6M) from efficient corridor Mix (−1M)',
            detail: 'Eliminates management ambiguity so operations aren’t blamed for diesel prices or extra cargo.',
          },
          {
            id: 'b',
            label: 'Proved that freight operators wasted 14M SAR of diesel fuel',
            detail: 'Conflates profitable freight growth and market prices with operational waste.',
          },
          {
            id: 'c',
            label: 'Requires freezing profitable mineral freight trains immediately',
            detail: 'Volume variance driven by paying freight tonnage is positive business growth.',
          },
        ],
        correctOptionId: 'a',
        hint: 'Distinguish external tariff shifts (Price), workload growth (Volume), and service composition (Mix).',
        explanation:
          'Continuous Variance Attribution decomposes raw variances into Price (external tariffs), Volume (freight tonnage/train-km), and Mix (fleet/corridor proportions)—preventing unfair penalties for hauling profitable extra tonnage.',
        takeaway: 'Decompose budget variances into Price, Volume, and Mix before judging operational performance.',
      },
      {
        id: 'd3-l5-s7',
        kind: 'router',
        badgeText: 'Subtopic 3.8 · Change Control Board (CCB) 1% Rule',
        title: 'Mid-Construction Station Marble Cladding Upgrade',
        department: 'Passenger Terminal Delivery',
        amountOrMetric: '+4.8M SAR Change (+1.6% of 300M Budget)',
        horizonOrRule: 'CCB Threshold: >1% Single or >5% Cumulative',
        scenario:
          'Architects propose upgrading concourse finishes mid-construction, adding +4.8M SAR (+1.6% of the 300M SAR station budget). Can the Project Manager approve this from contingency without CCB review?',
        leftOption: {
          id: 'A',
          title: 'Mandatory Change Control Board (CCB) Review (>1% Rule)',
          desc: 'Requires formal Change Request package with cost, safety, and schedule impact',
          tone: 'blue',
        },
        rightOption: {
          id: 'B',
          title: 'Project Manager Fast-Track from Contingency Reserve',
          desc: 'Allows informal <5% single upgrades without formal CCB scrutiny',
          tone: 'amber',
        },
        correctAnswer: 'A',
        subLabel: 'CCB Trigger: >1% Single Change',
        hint: 'Check the two CCB thresholds: ANY single change >1% OR cumulative changes >5%!',
        explanation:
          'At +1.6%, this single scope addition breaches the 1% CCB threshold. Requiring a formal Change Request package before the CCB prevents unauthorized "engineering gold-plating" from quietly draining project reserves.',
        takeaway: 'Route any single change >1% (or cumulative >5%) through a formal CCB Change Request.',
      },
    ],
  },

  // =========================================================================
  // DAY 3 · TOPIC 3 — STAGE 6 (FORENSIC AUDIT & OPEX GOVERNANCE)
  // =========================================================================
  {
    id: 6,
    block: 'part2',
    topicNumber: 3,
    moduleName: 'Topic 3 · Forensic & Operational Control',
    topicTag: 'Subtopics 3.10–3.18 · ZBR, Step-In, TOD & KPIs',
    title: 'Forensic Audit & OpEx Control',
    subtitle: 'Trigger Zero-Base Redesigns, exercise contractor step-in rights, capture TOD revenue, and govern the 4-Quadrant KPI Scorecard.',
    mechanic: 'forensic-audit',
    competency: 'cost-control',
    accentColor: 'amber',
    estimatedMinutes: 3,
    xpReward: 250,
    briefing: {
      objective:
        'Apply Topic 3 governance triggers across 7 operational & forensic audit scenarios: 5 Whys Root Cause Analysis, Zero-Base Redesign (ZBR), Treasury Cash Sweeping, Subcontractor Step-In Rights, TOD Value Capture, CMMS Asset Life Cycle Tracking, Forensic Audits, and Indirect Overhead Caps.',
      howToPlay: [
        'Inspect each departmental variance, contractor risk alert, or governance ledger entry.',
        'Select the exact compliant control action or audit trigger.',
        'Watch the specific numerical triggers: 3 Red quarters (>10%) = ZBR · >15% overrun or >6 mo delay = Forensic Audit · HQ Overhead <8%.',
      ],
      keyRules: [
        {
          title: 'ZBR & Forensic Triggers',
          summary:
            '3 consecutive quarters >10% unfavorable variance → mandatory Zero-Base Redesign (ZBR). >15% cost overrun or >6 mo delay → independent Forensic Audit.',
        },
        {
          title: 'Liquidity, Step-In & Indirect Caps',
          summary:
            'Hold 30–45 days direct OpEx liquidity via cash sweeping; keep 10% contractor performance bonds + step-in rights; cap HQ overhead <8%.',
        },
      ],
    },
    steps: [
      {
        id: 'd3-l6-s1',
        kind: 'audit',
        ledgerId: 'CTRL-310',
        department: 'Eastern Rolling Stock Depot',
        proposedEntry: 'Chronic Depot Overtime (+18% Monthly Overrun for 5 Months)',
        bookedAs: 'Requested +20% Baseline Budget Top-Up',
        amountSar: '4,900,000 SAR Overrun',
        evidenceNote:
          'Depot management requests permanently raising its annual overtime budget by +20% to absorb recurring weekend shift hours.',
        isViolation: true,
        options: [
          {
            id: 'rca-fix',
            label: 'Reject Top-Up — Deploy Root Cause Analysis (5 Whys / Fishbone) to Fix Delayed Spares & Scheduling',
            detail: 'Chronic overtime is a symptom of broken parts delivery or tooling—never reward inefficiency with baseline hikes.',
          },
          {
            id: 'approve-hike',
            label: 'Approve +20% Permanent Budget Increase — Accept overtime as normal depot cost',
            detail: 'Institutionalizes systemic operational waste.',
          },
        ],
        correctOptionId: 'rca-fix',
        hint: 'In Subtopic 3.10, is chronic overtime solved by issuing higher budgets or by 5 Whys / Fishbone process redesign?',
        explanation:
          'Root Cause Analysis (5 Whys, Ishikawa Fishbone) reveals that chronic overtime stems from delayed spare parts deliveries, aging diagnostics, or poor training. Issuing permanent budget hikes merely subsidizes systemic inefficiency.',
        takeaway: 'Use 5 Whys / Fishbone RCA for chronic overruns—never reward inefficiencies with higher baselines.',
      },
      {
        id: 'd3-l6-s2',
        kind: 'audit',
        ledgerId: 'CTRL-311',
        department: 'Station Facilities Management',
        proposedEntry: 'Three Consecutive Quarters >10% Unfavorable OpEx Variance',
        bookedAs: 'Q1: +11.2% · Q2: +13.8% · Q3: +12.5%',
        amountSar: '19,400,000 SAR Cumulative Variance',
        evidenceNote:
          'Facilities unit has missed its flexed quarterly budget by >10% (Red) for three straight quarters while requesting incremental rollovers.',
        isViolation: true,
        options: [
          {
            id: 'trigger-zbr',
            label: 'Trigger Mandatory Zero-Base Redesign (ZBR) — Revoke Historical Baseline Permanently',
            detail: 'Unit must rebuild every expenditure line, staffing model, and vendor contract from zero.',
          },
          {
            id: 'warning-only',
            label: 'Issue Amber Advisory Memo & Carry Over Previous Year’s Baseline +3%',
            detail: 'Violates the 3-quarter Red-Line ZBR governance trigger.',
          },
        ],
        correctOptionId: 'trigger-zbr',
        hint: 'Remember the exact Red-Line Trigger in Subtopic 3.11: 3 consecutive quarters >10% unfavorable variance.',
        explanation:
          'Under the ZBR Trigger Protocol, three consecutive quarters exceeding >10% unfavorable variance automatically revoke the unit’s historical budget baseline, forcing a clean-sheet reconstruction from zero.',
        takeaway: 'Three consecutive Red quarters (>10% variance) trigger mandatory Zero-Base Redesign (ZBR).',
      },
      {
        id: 'd3-l6-s3',
        kind: 'choice',
        badgeText: 'Subtopic 3.12 · Cash Sweeping & Liquidity Buffers',
        prompt:
          'Corporate Treasury implements automated daily Cash Sweeping from regional station accounts into a centralized pool, while maintaining a dedicated operational liquidity buffer. What is the standard buffer size?',
        options: [
          {
            id: 'a',
            label: '30 to 45 days of direct OpEx to shield vendor payments while maximizing interest on pooled reserves',
            detail: 'Prevents payment stoppages for critical fuel/spares without leaving idle cash trapped in regional accounts.',
          },
          {
            id: 'b',
            label: '0 days of cash — rely on daily emergency bank overdrafts',
            detail: 'Exposes rail operations to supplier stoppages during collection delays.',
          },
          {
            id: 'c',
            label: '365 days of idle cash sitting uninvested inside each local depot checking account',
            detail: 'Destroys treasury yield and working capital efficiency.',
          },
        ],
        correctOptionId: 'a',
        hint: 'Check Subtopic 3.12’s standard Treasury Operational Liquidity Buffer range.',
        explanation:
          'Cash Sweeping centralizes idle regional balances into interest-earning corporate pools while preserving a 30–45 day direct OpEx liquidity buffer so mission-critical suppliers are never delayed.',
        takeaway: 'Combine centralized Cash Sweeping with a 30–45 day direct OpEx liquidity buffer.',
      },
      {
        id: 'd3-l6-s4',
        kind: 'choice',
        badgeText: 'Subtopic 3.13 · Subcontractor Insolvency & Step-In Rights',
        prompt:
          'Insolvency monitoring flags that a Tier-1 track contractor’s liquidity ratio has collapsed mid-project, risking site abandonment. Which two contractual protections keep construction moving?',
        options: [
          {
            id: 'a',
            label: 'Exercise contractual Step-In Rights to pay vital subcontractors directly AND call the 10% unencumbered bank Performance Bond',
            detail: 'Prevents site shutdowns while recovering immediate transition liquidity.',
          },
          {
            id: 'b',
            label: 'Advance 100% of remaining contract cash upfront to help the failing contractor’s balance sheet',
            detail: 'Unsecured advance payments are lost if the contractor enters bankruptcy.',
          },
          {
            id: 'c',
            label: 'Wait 12 months until liquidation courts settle before touching the site',
            detail: 'Triggers catastrophic schedule delays and stranded CWIP.',
          },
        ],
        correctOptionId: 'a',
        hint: 'Recall the two contractual tools in Subtopic 3.13: paying subcontractors directly + bank security.',
        explanation:
          'Continuous supplier credit auditing provides early warning so SAR can trigger Step-In Rights (bypassing the struggling prime contractor to pay critical sub-trades) backed by the 10% bank Performance Bond.',
        takeaway: 'Protect delivery with insolvency monitoring, contractual Step-In Rights, and 10% Performance Bonds.',
      },
      {
        id: 'd3-l6-s5',
        kind: 'choice',
        badgeText: 'Subtopics 3.14 & 3.15 · TOD Value Capture & ALCT',
        prompt:
          'How do Transit-Oriented Development (TOD) Value Capture and CMMS-to-ERP Asset Life Cycle Tracking (ALCT) work together to strengthen network economics?',
        options: [
          {
            id: 'a',
            label: 'Ring-fenced TOD retail/real estate revenues subsidize station OpEx, while ALCT links CMMS work orders to GL asset IDs to spot replacement inflection points',
            detail: 'Boosts terminal self-sufficiency and gives real-time cumulative maintenance cost per asset.',
          },
          {
            id: 'b',
            label: 'TOD replaces farebox ticket revenue tracking, and ALCT disconnects maintenance from finance',
            detail: 'TOD is tracked distinctly; ALCT specifically integrates CMMS with ERP GL.',
          },
          {
            id: 'c',
            label: 'TOD profits are used to erase locomotive depreciation from IFRS statements',
            detail: 'Non-farebox revenues never alter IAS 16 depreciation rules.',
          },
        ],
        correctOptionId: 'a',
        hint: 'TOD = commercial terminal retail/office revenue offsetting terminal OpEx; ALCT = CMMS (Maximo) + ERP GL per asset ID.',
        explanation:
          'TOD Value Capture generates high-margin retail and real estate revenues around stations to offset terminal OpEx, while ALCT connects CMMS work orders directly to ERP General Ledgers per Asset ID to track cumulative lifecycle spend.',
        takeaway: 'Ring-fence TOD non-farebox cash to offset station OpEx and integrate CMMS with GL via ALCT.',
      },
      {
        id: 'd3-l6-s6',
        kind: 'audit',
        ledgerId: 'FOR-316',
        department: 'Southern Rail Corridor Project',
        proposedEntry: 'Cost Overrun +17.5% & Schedule Delay 8 Months',
        bookedAs: 'Routine Monthly Status Update',
        amountSar: '140,000,000 SAR Cost Overrun',
        evidenceNote:
          'Project team attributed the +17.5% overrun and 8-month delay to "market conditions" without independent change-order or quantity verification.',
        isViolation: true,
        options: [
          {
            id: 'forensic-trigger',
            label: 'Mandate Independent Forensic Audit (>15% Overrun / >6 Mo Delay Trigger)',
            detail: 'Audits hidden scope changes, tender integrity, schedule logic, and liquidated damages recovery.',
          },
          {
            id: 'routine-accept',
            label: 'Accept Project Manager Summary & Wait Until Project Handover',
            detail: 'Breaches mandatory Forensic Audit thresholds and delays liquidated damages claims.',
          },
        ],
        correctOptionId: 'forensic-trigger',
        hint: 'Check Subtopic 3.16’s exact Forensic Audit Trigger numbers (>15% cost overrun OR >6 months schedule delay).',
        explanation:
          'Exceeding a 15% cost overrun or 6-month delay mandates an independent Forensic Audit—investigating unauthorized design tweaks, change-order validity, contractor billing, and recoverable liquidated damages.',
        takeaway: 'Trigger an independent Forensic Audit whenever a project breaches >15% cost overrun or >6 months delay.',
      },
      {
        id: 'd3-l6-s7',
        kind: 'choice',
        badgeText: 'Subtopics 3.17–3.18 · Indirect Overhead Cap & KPI Scorecard',
        prompt:
          'In the Executive KPI Scorecard and Indirect OpEx framework, how should Headquarters Administrative Overhead and corporate vital signs be governed?',
        options: [
          {
            id: 'a',
            label: 'Segment value-adding compliance/cyber vs. non-value-adding bloat with a dynamic <8% HQ overhead cap, steered via the 4-Quadrant Executive Scorecard',
            detail: 'Balances Capital Velocity, Operational Margin (Cost/ASK & Cost/GTK), Asset Stewardship (AHI/MDBF), and Vision 2030 Impact.',
          },
          {
            id: 'b',
            label: 'Let HQ travel and consultancy spend grow unchecked whenever freight revenue rises, while tracking only EBITDA',
            detail: 'Creates overhead creep and ignores asset health (AHI/MDBF) and capital velocity (CPI/SPI).',
          },
          {
            id: 'c',
            label: 'Cut safety compliance and cybersecurity budgets first because they are indirect expenses',
            detail: 'Compliance, safety governance, and digital security are Value-Adding indirect costs.',
          },
        ],
        correctOptionId: 'a',
        hint: 'Check the <8% dynamic HQ cap (Subtopic 3.17) and the 4 Balanced Scorecard Quadrants (Subtopic 3.18).',
        explanation:
          'Overhead Value Profiling protects safety/cyber compliance while capping total HQ overhead (e.g., <8% of direct operating costs). Executives steer via 4 balanced quadrants: Capital Velocity, Margin Health, Asset Stewardship, and Strategic Impact.',
        takeaway: 'Cap HQ overhead dynamically (<8%) and govern via the 4-Quadrant Executive KPI Scorecard.',
      },
    ],
  },

  // =========================================================================
  // DAY 3 · TOPIC 4 — STAGE 7 (INCLUDES SLIDER LAB #4: erp-commitment)
  // =========================================================================
  {
    id: 7,
    block: 'part2',
    topicNumber: 4,
    moduleName: 'Topic 4 · Oracle ERP Cloud Architecture',
    topicTag: 'Subtopics 4.1–4.9 · CoA, WBS, EAM Bridge & Tolerances',
    title: 'Oracle ERP & WBS Architecture',
    subtitle: 'Connect Oracle Financials, PPM, and EAM; enforce WBS settlement rules, BTR routing, and 3-way match tolerances.',
    mechanic: 'erp-architecture',
    competency: 'erp-integration',
    accentColor: 'teal',
    estimatedMinutes: 4,
    xpReward: 260,
    briefing: {
      objective:
        'Configure Oracle Fusion Cloud across Topics 4.1–4.9: 3-Pillar Integration (GL, PPM, EAM), Multi-Segment Chart of Accounts, 4-Tier WBS Locking, CWIP Clearing & Asset Settlement, EAM-to-GL Work Order routing, Budget Transfer Requests (BTR), Commitment Accounting, and 3-Way Match tolerances.',
      howToPlay: [
        'Solve each ERP configuration and ledger-routing decision.',
        'In Step 7, run the Oracle PPM Commitment & 3-Way Match Tolerance Simulator to lock WBS encumbrances and strict invoice tolerances.',
        'Check how EAM closes maintenance work orders cleanly into OpEx or Capital WBS codes.',
      ],
      keyRules: [
        {
          title: 'Oracle 3 Pillars & WBS Level 4',
          summary:
            'Financials (GL/AP/AR) + PPM (Megaprojects/WBS) + EAM (Depot Work Orders). Budgets lock at Level 4 Chargeable Tasks.',
        },
        {
          title: 'Strict 3-Way Match & BTR Tiers',
          summary:
            '0% unit price tolerance · 0% capital qty (+1% bulk ballast). BTR <100k Dept Director · Cross-Dept Controller · Contingency CFO/CAC.',
        },
      ],
    },
    steps: [
      {
        id: 'd3-l7-s1',
        kind: 'choice',
        badgeText: 'Subtopics 4.1–4.2 · Oracle 3 Pillars & Chart of Accounts',
        prompt:
          'In SAR’s Oracle Fusion Cloud design, which segment combination in the Multi-Segment Chart of Accounts (CoA) enables instant reporting across subsidiaries, depots, expense types, and capital projects?',
        options: [
          {
            id: 'a',
            label: 'Entity · Cost Center · Account Code · Project / WBS · Intercompany / Future',
            detail: 'Synchronizes Oracle Financials (GL/AP/AR), PPM, and EAM without manual re-entry.',
          },
          {
            id: 'b',
            label: 'Only a single 4-digit Account Number with free-text memo notes for depot and project names',
            detail: 'Makes automated corridor, WBS, and subsidiary eliminations impossible.',
          },
          {
            id: 'c',
            label: 'Separate disconnected Excel CoA tables per regional depot',
            detail: 'Destroys ERP integration and auditability.',
          },
        ],
        correctOptionId: 'a',
        hint: 'Look for all 5 railway CoA segments from Subtopic 4.2: Entity, Cost Center, Account, Project/WBS, Intercompany.',
        explanation:
          'A 5-segment Chart of Accounts (Entity, Cost Center, Account Code, Project/WBS, Intercompany/Future) lets Oracle Financials, PPM, and EAM slice every Riyal instantaneously by subsidiary, depot, IFRS account, and capital WBS.',
        takeaway: 'Structure CoA across Entity, Cost Center, Account, Project/WBS, and Intercompany segments.',
      },
      {
        id: 'd3-l7-s2',
        kind: 'choice',
        badgeText: 'Subtopic 4.3 · 4-Tier Work Breakdown Structure (WBS)',
        prompt:
          'Within Oracle Project Portfolio Management (PPM), at which Work Breakdown Structure (WBS) tier are capital budgets and purchase order commitments strictly locked to prevent cross-package cost contamination?',
        options: [
          {
            id: 'a',
            label: 'Level 4 Chargeable Tasks (e.g., Subgrade Stabilization Km 0–25) beneath Level 3 Work Packages',
            detail: 'Stops civil earthwork overruns from silently draining signaling or rolling stock budgets.',
          },
          {
            id: 'b',
            label: 'Level 1 Total Project Envelope only, with zero task-level controls',
            detail: 'Lets teams shift money blindly across sub-projects until total funds vanish.',
          },
          {
            id: 'c',
            label: 'WBS codes are deleted before POs are issued',
            detail: 'Breaks commitment accounting and CWIP clearing.',
          },
        ],
        correctOptionId: 'a',
        hint: 'Hierarchy: Level 1 Project → Level 2 Sub-Project → Level 3 Work Package → Level 4 Chargeable Task.',
        explanation:
          'Locking budgets and PO encumbrances at WBS Level 4 (Chargeable Tasks) prevents one contractor package—such as desert cut-and-fill earthworks—from cannibalizing funds reserved for signaling or stations.',
        takeaway: 'Lock capital budgets and POs at WBS Level 4 Chargeable Tasks in Oracle PPM.',
      },
      {
        id: 'd3-l7-s3',
        kind: 'choice',
        badgeText: 'Subtopic 4.4 · CWIP Clearing & Asset Settlement Rules',
        prompt:
          'When a 300-km corridor WBS finishes construction in Oracle PPM, how does the CWIP Clearing Engine convert accumulated staging costs into distinct IAS 16 depreciable Fixed Assets?',
        options: [
          {
            id: 'a',
            label: 'Predefined Asset Settlement Rules allocate WBS costs via percent splits (e.g., 60% Track, 25% Earthworks, 15% Drainage) or 1:1 asset tags, triggering first-month depreciation',
            detail: 'Automates componentization and eliminates manual journal spreadsheets.',
          },
          {
            id: 'b',
            label: 'Lumps 100% of track, earthworks, and locomotives into one unseparated 50-year asset',
            detail: 'Violates IAS 16 Component Accounting.',
          },
          {
            id: 'c',
            label: 'Transfers CWIP balances straight into current-year administrative OpEx',
            detail: 'Destroys Balance Sheet PP&E.',
          },
        ],
        correctOptionId: 'a',
        hint: 'Think of the two Asset Settlement methods in Subtopic 4.4: Percent-based distribution vs. 1:1 specific tagging.',
        explanation:
          'Oracle’s CWIP Clearing Engine applies Asset Settlement Rules—distributing shared civil WBS packages by engineering percentage splits and 1:1 tagging rolling stock—then automatically schedules first-month depreciation.',
        takeaway: 'Use Oracle Asset Settlement Rules (percent splits & 1:1 tagging) to automate IAS 16 CWIP clearing.',
      },
      {
        id: 'd3-l7-s4',
        kind: 'router',
        badgeText: 'Subtopic 4.5 · EAM-to-GL Maintenance Bridge',
        title: 'Work Order #WO-88412: Scheduled Traction Motor Replacement',
        department: 'Oracle EAM Depot Workshop',
        amountOrMetric: '1,450,000 SAR (Extends Fleet Life +12 Yrs)',
        horizonOrRule: 'IAS 16 Capital Enhancement Work Order',
        scenario:
          'A technician closes Work Order #WO-88412 in Oracle EAM covering a major locomotive power-unit upgrade that extends useful life by 12 years. How must the EAM-to-GL Bridge automatically route the accumulated parts & technician labor?',
        leftOption: {
          id: 'A',
          title: 'Route to Capital Improvement WBS Code (CapEx)',
          desc: 'IAS 16 life-extending overhaul flows automatically to Capital Project WBS',
          tone: 'blue',
        },
        rightOption: {
          id: 'B',
          title: 'Route to Routine Depot Cost Center (OpEx)',
          desc: 'Reserved for routine servicing, inspections, and wear-and-tear consumables',
          tone: 'emerald',
        },
        correctAnswer: 'A',
        subLabel: 'EAM Bridge: Major Overhaul → Capital WBS',
        hint: 'Does this work order restore baseline daily wear (OpEx Cost Center) or extend useful life by 12 years (Capital WBS)?',
        explanation:
          'The Oracle EAM-to-GL Bridge eliminates manual journals: routine maintenance work orders route automatically to departmental OpEx cost centers, while life-extending major overhaul work orders route to Capital Improvement WBS codes.',
        takeaway: 'Oracle EAM routes routine Work Orders to OpEx Cost Centers and major overhauls to Capital WBS.',
      },
      {
        id: 'd3-l7-s5',
        kind: 'choice',
        badgeText: 'Subtopic 4.6 · Automated Budget Transfer Requests (BTR)',
        prompt:
          'A Project Manager needs to transfer 450,000 SAR from the Capital Contingency Pool into the Track Welding WBS task. Under electronic Budget Transfer Request (BTR) governance, who MUST approve this?',
        options: [
          {
            id: 'a',
            label: 'CFO and Capital Allocation Committee (CAC) approval (required for all transfers out of Capital Contingency pools)',
            detail: 'Logs full justification, timestamp, and executive credentials in the ERP audit trail.',
          },
          {
            id: 'b',
            label: 'Department Director alone (rule for transfers <100,000 SAR within the same cost center)',
            detail: 'Exceeds 100k SAR AND draws from restricted Capital Contingency.',
          },
          {
            id: 'c',
            label: 'Project Engineer self-approval inside a spreadsheet',
            detail: 'Bypasses electronic BTR workflow and audit logging.',
          },
        ],
        correctOptionId: 'a',
        hint: 'Check Subtopic 4.6’s 3 BTR approval tiers: <100k same dept (Director), Cross-dept (Directors + Controller), Contingency Pool (CFO + CAC).',
        explanation:
          'Electronic BTR workflows enforce strict routing: <100k within one cost center clears at Department Director level, cross-departmental needs Finance Controller sign-off, and ANY drawdown from Capital Contingency requires CFO + CAC approval.',
        takeaway: 'Transfers from Capital Contingency pools require CFO and CAC electronic BTR approval.',
      },
      {
        id: 'd3-l7-s6',
        kind: 'choice',
        badgeText: 'Subtopic 4.9 · Oracle EPM / Hyperion Rolling Forecast Drivers',
        prompt:
          'Inside Oracle EPM (Hyperion), when Operations raises next year’s projected Freight Gross Ton-Kilometers (GTK) by +15%, how does the Driver-Based Rules Engine respond?',
        options: [
          {
            id: 'a',
            label: 'Automatically recalculates fuel, variable maintenance, and crew OpEx lines while splicing closed GL actuals into the 5-Quarter Rolling Forecast',
            detail: 'Connects physical timetable drivers directly to financial forecasts.',
          },
          {
            id: 'b',
            label: 'Freezes fuel and maintenance budgets at last year’s flat amount',
            detail: 'Creates artificial deficits when haulage grows.',
          },
          {
            id: 'c',
            label: 'Automatically doubles HQ executive travel overhead by +15%',
            detail: 'Fixed HQ overhead does not scale linearly with GTK.',
          },
        ],
        correctOptionId: 'a',
        hint: 'Think of Subtopic 4.9: physical GTK and ASK drivers recalculate variable OpEx and splice closed GL actuals.',
        explanation:
          'Oracle EPM hardcodes driver-based algorithms linking Freight GTK (and Passenger ASK) directly to fuel, maintenance, and crew cost lines, while automatically splicing closed General Ledger actuals into the 5-Quarter Rolling Forecast.',
        takeaway: 'Use driver-based Oracle EPM rules (GTK/ASK) with automated GL actuals splicing.',
      },
      {
        id: 'd3-l7-s7',
        kind: 'slider-lab',
        title: 'Oracle PPM Commitment & 3-Way Match Tolerance Lab',
        prompt:
          'Subtopics 4.7–4.8 Simulation: Configure Oracle Payables 3-Way Matching tolerance limits and WBS Hard-Stop PR-to-PO encumbrance enforcement for a 120M SAR Track Rehabilitation WBS (65M Actuals + 35M Open POs = 20M Available).',
        visualType: 'erp-commitment',
        sliders: [
          {
            id: 'unitPriceTolerance',
            label: '3-Way Match Unit Price Tolerance Limit',
            unit: '% Over PO',
            min: 0,
            max: 10,
            step: 0.5,
            defaultValue: 5,
            targetMin: 0,
            targetMax: 0.5,
          },
          {
            id: 'bulkQtyTolerance',
            label: 'Bulk Material (Ballast) Quantity Tolerance',
            unit: '% Over GRN',
            min: 0,
            max: 10,
            step: 0.5,
            defaultValue: 6,
            targetMin: 0.5,
            targetMax: 1.5,
          },
          {
            id: 'encumbranceLockPct',
            label: 'Hard-Stop PR-to-PO Encumbrance Coverage',
            unit: '% WBS Locked',
            min: 0,
            max: 100,
            step: 10,
            defaultValue: 40,
            targetMin: 90,
            targetMax: 100,
          },
        ],
        hint: 'Set Unit Price Tolerance near 0% (0–0.5%), cap Bulk Ballast Quantity tolerance tightly at ~1% (0.5–1.5%), and enforce 90–100% Hard-Stop PR-to-PO encumbrance!',
        explanation:
          'Oracle Payables enforces 0% tolerance on unit pricing (placing over-priced invoices on automatic hold) and tight +1% tolerance on bulk materials like ballast stone—while Real-Time Commitment Accounting reserves WBS funds at PR/PO creation.',
        takeaway: 'Enforce 0% unit price tolerance, ≤1% bulk qty tolerance, and hard-stop PR-to-PO encumbrances.',
      },
    ],
  },

  // =========================================================================
  // DAY 3 · TOPIC 4 — STAGE 8 (BOSS: MASTER ERP, SOD & AI CONTROL ROOM)
  // =========================================================================
  {
    id: 8,
    block: 'part2',
    topicNumber: 4,
    moduleName: 'Topic 4 · Fixed Assets, SoD & AI Governance',
    topicTag: 'Subtopics 4.10–4.18 · Dual-Book, IAS 2, SoD & AI',
    title: 'Master ERP & AI Control Room',
    subtitle: 'Govern Dual-Book depreciation, IAS 2 inventory aging, Segregation of Duties (SoD), data cleansing, and AI anomaly detection.',
    mechanic: 'sod-master',
    competency: 'erp-integration',
    accentColor: 'indigo',
    estimatedMinutes: 3,
    xpReward: 300,
    briefing: {
      objective:
        'Complete Day 3 by mastering enterprise ERP governance (Subtopics 4.10–4.18): Mass Additions CIP conversion, Corporate vs. ZATCA Dual-Book depreciation, Partial Asset Retirements & IAS 36 Impairment, Maintenance BOM Costing, IAS 2 Inventory Aging, Segregation of Duties (SoD) violations, Legacy Migration Cleansing, and AI/ML anomaly detection.',
      howToPlay: [
        'Spot Segregation of Duties (SoD) fraud risks and ERP configuration traps across 7 executive challenges.',
        'Check exact statutory rules: Corporate Book (IFRS) vs. Tax/Zakat Book (ZATCA) and 24-mo (50%) / 36-mo (100%) inventory aging.',
        'Finish Stage 8 to earn your Day 3 Executive Master badge and download your official PDF Score Report!',
      ],
      keyRules: [
        {
          title: 'Non-Negotiable SoD Matrix',
          summary:
            'PR creator ≠ PO approver · Goods Receiver ≠ Invoice approver · Asset Master Admin ≠ Asset Scrapping approver.',
        },
        {
          title: 'Dual-Book & IAS 2 Aging',
          summary:
            'Maintain parallel Corporate (IFRS) and Tax/Zakat (ZATCA) asset books. Provision dormant spares 50% at 24 mo and 100% at 36 mo.',
        },
      ],
    },
    steps: [
      {
        id: 'd3-l8-s1',
        kind: 'choice',
        badgeText: 'Subtopics 4.10–4.11 · Mass Additions & Dual-Book Depreciation',
        prompt:
          'When Oracle’s Mass Additions Interface moves completed CIP assets into the Fixed Asset Register, why does SAR maintain Dual-Book Architecture (Corporate Book + Tax/Zakat Book)?',
        options: [
          {
            id: 'a',
            label: 'Corporate Book runs IFRS (IAS 16) straight-line/units-of-production schedules, while Tax/Zakat Book runs parallel ZATCA statutory depreciation rules automatically',
            detail: 'Eliminates manual tax reconciliations while capturing serial, GPS, and warranty tags.',
          },
          {
            id: 'b',
            label: 'Dual books let management report higher asset values to investors and zero assets to regulators',
            detail: 'Both books are strictly auditable and reconciled.',
          },
          {
            id: 'c',
            label: 'Tax/Zakat Book replaces physical GPS and manufacturer serial tagging',
            detail: 'Mandatory system tagging applies across all physical assets.',
          },
        ],
        correctOptionId: 'a',
        hint: 'Match the two parallel books: Corporate Book (IFRS IAS 16) vs. Tax/Zakat Book (ZATCA).',
        explanation:
          'Oracle’s Dual-Book engine runs parallel automated depreciation batches: IFRS (IAS 16) in the Corporate Book for financial reporting and ZATCA statutory rules in the Tax/Zakat Book—with mandatory serial, warranty, and GPS asset tagging.',
        takeaway: 'Use Oracle Dual-Book Architecture to segregate IFRS Corporate and ZATCA Tax/Zakat ledgers.',
      },
      {
        id: 'd3-l8-s2',
        kind: 'choice',
        badgeText: 'Subtopics 4.12–4.13 · Asset Retirement & Maintenance BOM',
        prompt:
          'How do Oracle Fixed Assets and Preventative Maintenance Bills of Materials (BOM) work together during major rolling stock maintenance and partial component replacements?',
        options: [
          {
            id: 'a',
            label: 'Standard BOM recipes baseline parts/labor per train-km for automated variances, while Partial Retirement derecognizes the replaced old engine and posts scrap gain/loss',
            detail: 'Preserves host locomotive FAR history while capturing IAS 36 impairments or scrap proceeds.',
          },
          {
            id: 'b',
            label: 'Partial Retirement forces deleting the entire 30-year locomotive from the register',
            detail: 'Partial retirement retires only the removed component while preserving the host asset.',
          },
          {
            id: 'c',
            label: 'Maintenance BOMs prohibit tracking labor hour variances against standard recipes',
            detail: 'Comparing actual vs. BOM standard is the core variance control.',
          },
        ],
        correctOptionId: 'a',
        hint: 'Partial Retirement keeps the host locomotive on the FAR; Maintenance BOMs compare actual parts/labor vs. standardized recipes.',
        explanation:
          'Maintenance BOMs hardcode standard parts, lubricants, and labor per service to multiply by scheduled train-km and flag inefficiencies—while Partial Retirement derecognizes replaced components without deleting the host train.',
        takeaway: 'Use Maintenance BOMs for standard cost variances and Partial Retirement for component swaps.',
      },
      {
        id: 'd3-l8-s3',
        kind: 'audit',
        ledgerId: 'IAS2-414',
        department: 'Central Spare Parts Warehouse',
        proposedEntry: '18M SAR of Legacy Diesel Parts Dormant for 38 Months',
        bookedAs: '100% Full Historical Cost on Balance Sheet',
        amountSar: '18,000,000 SAR',
        evidenceNote:
          'Oracle Inventory aging report shows zero movement for 38 months because the legacy locomotive sub-fleet was retired; warehouse team carried parts at 100% original cost.',
        isViolation: true,
        options: [
          {
            id: 'provision-100',
            label: 'Audit Violation — Book 100% Obsolescence Provision (IAS 2 Lower of Cost & NRV)',
            detail: 'Dormant spares >36 months require 100% obsolescence reserve (50% at 24 months).',
          },
          {
            id: 'keep-full-cost',
            label: 'Compliant — Hold obsolete spares at 100% cost indefinitely until physical auction',
            detail: 'Overstates Balance Sheet inventory with unusable legacy parts.',
          },
        ],
        correctOptionId: 'provision-100',
        hint: 'Check Subtopic 4.14’s automated aging provision thresholds: 50% at 24 months, 100% at 36 months!',
        explanation:
          'Under IAS 2 (Lower of Cost and Net Realizable Value), automated quarterly aging flags dormant spares—reserving 50% at 24 months and 100% at 36 months so warehouse balances are never overstated with obsolete stock.',
        takeaway: 'Enforce IAS 2 aging reserves automatically: 50% at 24 months and 100% at 36 months dormant.',
      },
      {
        id: 'd3-l8-s4',
        kind: 'audit',
        ledgerId: 'SOD-415A',
        department: 'Regional Procurement & Depot Access',
        proposedEntry: 'User Profile Request: Combine Goods Receipt + Vendor Invoice Approval',
        bookedAs: 'Role Conflict Alert in Oracle Security',
        amountSar: 'System Access Control',
        evidenceNote:
          'A regional site coordinator asks IT to grant both "Verify Site Goods Receipt (GRN)" and "Approve Vendor Payment Invoice" in Oracle so bills clear faster during holidays.',
        isViolation: true,
        options: [
          {
            id: 'block-sod',
            label: 'Block Request — Non-Negotiable SoD Violation (Receiver Cannot Approve Payment)',
            detail: 'Prevents phantom delivery fraud where one employee confirms fake goods and pays a shell vendor.',
          },
          {
            id: 'grant-sod',
            label: 'Approve Temporary Bundle — Speed is more important than Segregation of Duties',
            detail: 'Creates a fatal internal fraud exposure and fails IT general controls audit.',
          },
        ],
        correctOptionId: 'block-sod',
        hint: 'Check Subtopic 4.15’s three non-negotiable SoD rules: PR≠PO, GRN≠Invoice Approval, Asset Master≠Scrapping Approval.',
        explanation:
          'Segregation of Duties (SoD) hardcoded into ERP security is non-negotiable: the person confirming site Goods Receipt can NEVER approve the vendor invoice, just as PR creators cannot approve POs and Asset Admins cannot approve scrappings.',
        takeaway: 'Hardcode SoD in ERP: PR≠PO, Goods Receipt≠Invoice Approval, and Asset Master≠Scrapping.',
      },
      {
        id: 'd3-l8-s5',
        kind: 'audit',
        ledgerId: 'SOD-415B',
        department: 'Fixed Asset Governance',
        proposedEntry: 'Fixed Asset Master Admin Also Approves Asset Scrapping Write-Offs',
        bookedAs: 'Privileged User Audit Review',
        amountSar: '4,200,000 SAR Retired Bogies',
        evidenceNote:
          'Audit trail review shows the Fixed Asset Master Data administrator initiated asset retirements and approved the final scrapping write-off inside the same module.',
        isViolation: true,
        options: [
          {
            id: 'enforce-sod-far',
            label: 'Audit Violation — Separate Asset Master Maintenance from Scrapping Approval',
            detail: 'Prevents unauthorized asset write-offs and off-book scrap theft.',
          },
          {
            id: 'allow-far',
            label: 'Compliant — Asset administrators should always self-approve asset disposals',
            detail: 'Eliminates independent disposal oversight.',
          },
        ],
        correctOptionId: 'enforce-sod-far',
        hint: 'Remember the third non-negotiable SoD rule in Subtopic 4.15 regarding Fixed Asset Master Data!',
        explanation:
          'The user managing Fixed Asset Master Data must NEVER hold authority to approve asset scrappings or disposals—preventing concealed write-offs or unauthorized scrap sales.',
        takeaway: 'Segregate Fixed Asset Master administration from asset scrapping and disposal approval.',
      },
      {
        id: 'd3-l8-s6',
        kind: 'choice',
        badgeText: 'Subtopics 4.16–4.17 · OTBI Dashboards & Migration Cleansing',
        prompt:
          'Before migrating 20 years of legacy railway spreadsheets into Oracle ERP Cloud and Power BI / OTBI executive drill-down dashboards, what is the #1 migration prerequisite?',
        options: [
          {
            id: 'a',
            label: 'Execute physical asset verifications, reconcile legacy depreciation, and purge obsolete WBS/CWIP balances to avoid "Garbage-In, Garbage-Out"',
            detail: 'Ensures executive OTBI/Power BI drill-downs reflect verified, auditable reality.',
          },
          {
            id: 'b',
            label: 'Bulk-upload all legacy spreadsheets untouched so Power BI cleans the errors visually',
            detail: 'Visual dashboards cannot cure corrupted underlying ledger data.',
          },
          {
            id: 'c',
            label: 'Disable drill-down from corporate KPIs to individual WBS invoices',
            detail: 'Drill-down transparency is the core value of Oracle OTBI / Power BI.',
          },
        ],
        correctOptionId: 'a',
        hint: 'Recall the "Garbage-In, Garbage-Out" Trap in Subtopic 4.17.',
        explanation:
          'Migrating unverified legacy registers or stale CWIP balances infects the new Oracle environment and corrupts OTBI/Power BI executive drill-down dashboards. Rigorous physical verification and data cleansing must come first.',
        takeaway: 'Cleanse asset registers, WBS codes, and CWIP balances before ERP migration to stop Garbage-In, Garbage-Out.',
      },
      {
        id: 'd3-l8-s7',
        kind: 'choice',
        badgeText: 'Subtopic 4.18 · AI & Predictive ML in Railway ERP',
        prompt:
          'How do next-generation AI and Machine Learning models layer on top of Oracle ERP transactional data and trackside IoT telemetry to transform CapEx/OpEx management?',
        options: [
          {
            id: 'a',
            label: 'Predict daily cash balances from vendor payment cycles, flag duplicate/irregular PO invoices automatically, and merge IoT telemetry with ERP costs for predictive maintenance budgeting',
            detail: 'Combines treasury cash forecasting, automated fraud anomaly detection, and predictive component budgeting.',
          },
          {
            id: 'b',
            label: 'Replace IFRS rules and Segregation of Duties so invoices auto-pay without POs',
            detail: 'AI strengthens controls and anomaly alerts; it never bypasses SoD or 3-way matching.',
          },
          {
            id: 'c',
            label: 'Limit ERP reporting to annual printed paper binders once every December',
            detail: 'AI delivers continuous real-time anomaly scanning and dynamic forecasting.',
          },
        ],
        correctOptionId: 'a',
        hint: 'Check the 3 AI/ML ERP use cases in Subtopic 4.18: Cash Flow, Anomaly Detection, and Predictive Maintenance Budgeting.',
        explanation:
          'AI/ML transforms railway ERP into an active intelligence engine: forecasting daily treasury cash, scanning thousands of POs/invoices for duplicate billing anomalies, and merging trackside IoT alerts with ERP costs to budget replacements before failures occur.',
        takeaway: 'Deploy ERP AI/ML for predictive cash modeling, duplicate-invoice detection, and IoT maintenance budgeting.',
      },
    ],
  },
];

export const FIELD_GUIDE_ENTRIES: FieldGuideEntry[] = [
  {
    id: 'd3-fg-1',
    topicNumber: 1,
    category: 'Governance & DoA',
    title: 'Delegation of Authority (DoA) & Off-Budget Rules',
    formulaOrRule: 'Mgr ≤250k OpEx · VP ≤2M CapEx / 5M OpEx · CEO ≤20M · Board >20M SAR',
    summary:
      'Financial commitments follow strict DoA tiers inside Board-approved budgets. Unbudgeted Off-Budget exceptions bypass standard VP limits, requiring internal budget offsets plus direct CFO and CEO sign-off.',
    railExample:
      'An 18.5M SAR budgeted switch replacement clears at CEO level; a 3.8M SAR unbudgeted upgrade requires offsets + CFO/CEO sign-off.',
  },
  {
    id: 'd3-fg-2',
    topicNumber: 1,
    category: 'Business Cases & Tenders',
    title: 'Five Cases Model & Two-Envelope Evaluation',
    formulaOrRule: '5 Cases (Strategic, Economic, Commercial, Financial, Mgmt) · >80% Tech Gate',
    summary:
      'Audit-proof proposals satisfy all 5 Cases. In Two-Envelope tendering, commercial price envelopes stay sealed unless the vendor clears the >80% technical compliance minimum.',
    railExample:
      'A low-bid signaling vendor scoring 64% technically is disqualified before its commercial price is ever opened.',
  },
  {
    id: 'd3-fg-3',
    topicNumber: 1,
    category: 'Sovereign & Bankable Finance',
    title: 'MoF, PIF, TGA, PPP & Green Sukuk',
    formulaOrRule: 'MoF (PSO) · PIF (Equity) · TGA (Safety) · Take-or-Pay · Greenium',
    summary:
      'MoF funds Public Service Obligations, PIF injects sovereign equity, and TGA licenses safety. Take-or-Pay contracts backstop industrial spurs, DBFOM PPPs shift risk via Availability Payments (IFRIC 12), and Sustainability Sukuk capture a "greenium".',
    railExample:
      'Electrified freight corridors qualify for Sustainability Sukuk greenium discounts backed by audited CO2 abatement.',
  },
  {
    id: 'd3-fg-4',
    topicNumber: 2,
    category: 'Valuation Metrics',
    title: 'NPV Gold Standard, MIRR & Mutually Exclusive Axiom',
    formulaOrRule: 'NPV > 0 (Wealth Added) · MIRR reinvests at WACC · Conflict → Higher NPV Wins',
    summary:
      'NPV measures absolute enterprise wealth over 30–50 years. MIRR fixes IRR’s inflated reinvestment flaw by compounding inflows at WACC. When mutually exclusive projects conflict on IRR vs. NPV, ALWAYS pick higher NPV.',
    railExample:
      'Hybrid-Electric Fleet (11% IRR, +185M NPV) beats Standard Diesel (14% IRR, +110M NPV) in Case 2.18.',
  },
  {
    id: 'd3-fg-5',
    topicNumber: 2,
    category: 'Risk & Capital Rationing',
    title: 'Tiered Hurdle Rates, Profitability Index (PI) & EVA',
    formulaOrRule: 'Cat 1: WACC−1% · Cat 2: WACC+1% · Cat 3: WACC+4% · PI = PV / CapEx',
    summary:
      'Risk-adjusted hurdles stop speculative greenfield bias. Under Capital Rationing, rank projects by Profitability Index (PI). Economic Value Added (EVA = NOPAT − Capital Charge) exposes value-destroying idle assets.',
    railExample:
      'Under a 1,000M SAR cap, fully fund ETCS Signaling (PI 1.62) and Freight Spur (PI 1.44) before lower-PI expansions.',
  },
  {
    id: 'd3-fg-6',
    topicNumber: 2,
    category: 'Inflation, Bias & Lifecycle',
    title: 'Fisher Inflation Consistency, Optimism Uplift & EAC',
    formulaOrRule: 'Real CF @ Real WACC · Nominal CF @ Nominal WACC · +15% CapEx / −20% Ridership',
    summary:
      'Never discount Real cash flows at a Nominal rate. Neutralize Optimism Bias via Reference Class Forecasting (+15% CapEx, −20% early ridership). Compare aging Defenders vs. Challengers using Equivalent Annual Cost (EAC).',
    railExample:
      'Replace an aging locomotive the exact year its escalating annual cost exceeds the new Challenger’s 30-year EAC.',
  },
  {
    id: 'd3-fg-7',
    topicNumber: 3,
    category: 'Earned Value Management',
    title: 'EVM Architecture: PV, AC, EV, CPI, SPI, EAC & TCPI',
    formulaOrRule: 'CPI = EV / AC · SPI = EV / PV · EAC = BAC / CPI · Stabilizes @ 20% Complete',
    summary:
      'EVM anchors spending to physical Earned Value rather than comparing AC to PV. Once a megaproject passes 20% completion, CPI rarely improves >10% without aggressive Value Engineering or CCB intervention.',
    railExample:
      'At 25% completion and CPI = 0.80 on a 500M BAC project, projected EAC jumps to 625M SAR (+125M deficit).',
  },
  {
    id: 'd3-fg-8',
    topicNumber: 3,
    category: 'Scope & Contingency Control',
    title: 'CCB 1% Rule & Linear Contingency Burn-Down',
    formulaOrRule: 'CCB >1% Single / >5% Cumulative · % Contingency Burned ≤ % Physical Complete',
    summary:
      'All single changes >1% (or cumulative >5%) require formal Change Control Board (CCB) approval. Contingency drawdown must never outpace physical construction progress, preserving reserves for commissioning.',
    railExample:
      'Burning 58% of contingency at 40% track completion breaches linear alignment and triggers a CCB freeze.',
  },
  {
    id: 'd3-fg-9',
    topicNumber: 3,
    category: 'Audit & OpEx Triggers',
    title: 'ZBR Red-Line, Forensic Audit & Overhead Governance',
    formulaOrRule: '3 Red Qtrs (>10%) = ZBR · >15% Overrun / >6 Mo Delay = Forensic Audit · HQ <8%',
    summary:
      'Chronic depot overruns demand 5 Whys / Fishbone RCA, not budget hikes. Three Red quarters force Zero-Base Redesign (ZBR). Hold 30–45 day OpEx buffers, 10% supplier Performance Bonds + Step-In Rights, and cap HQ overhead <8%.',
    railExample:
      'Ring-fence TOD station retail profits to subsidize terminal OpEx while keeping 4-Quadrant Executive KPIs visible.',
  },
  {
    id: 'd3-fg-10',
    topicNumber: 4,
    category: 'Oracle ERP Architecture',
    title: '3 Pillars, 5-Segment CoA, Level-4 WBS & EAM Bridge',
    formulaOrRule: 'GL + PPM + EAM · Budgets Locked @ WBS Level 4 · Routine → OpEx / Overhaul → WBS',
    summary:
      'Oracle Financials, PPM, and EAM connect via a 5-segment CoA (Entity, Cost Center, Account, Project/WBS, Intercompany). Budgets lock at WBS Level 4 tasks, while EAM routes routine vs. capital work orders automatically.',
    railExample:
      'A +12-year traction motor overhaul work order in EAM settles automatically to a Capital Improvement WBS code.',
  },
  {
    id: 'd3-fg-11',
    topicNumber: 4,
    category: 'Encumbrances & Matching',
    title: 'Commitment Accounting, BTR Routing & 3-Way Match',
    formulaOrRule: 'Available = Budget − Commitments − Actuals · 0% Price Tol. / +1% Bulk Qty Tol.',
    summary:
      'PR-to-PO encumbrance reserves budget funds instantly upon approval. Oracle Payables enforces 0% unit price tolerance and ≤1% bulk ballast tolerance against PO + GRN/Surveyor Certificate + Invoice.',
    railExample:
      'Any Budget Transfer Request drawing from Capital Contingency requires electronic CFO + CAC sign-off.',
  },
  {
    id: 'd3-fg-12',
    topicNumber: 4,
    category: 'Compliance, SoD & AI',
    title: 'Dual-Book Assets, IAS 2 Aging, SoD & ERP AI/ML',
    formulaOrRule: 'Corporate (IFRS) + Tax (ZATCA) · 50% @ 24m / 100% @ 36m · PR≠PO, GRN≠AP, FAR≠Scrap',
    summary:
      'Oracle runs Corporate (IAS 16) and ZATCA books in parallel, provisions dormant spares at 24/36 months, hardcodes Segregation of Duties (SoD), and layers AI/ML for cash prediction and duplicate-invoice anomaly alerts.',
    railExample:
      'Oracle security automatically blocks any user requesting both Goods Receipt confirmation and Invoice Approval.',
  },
];

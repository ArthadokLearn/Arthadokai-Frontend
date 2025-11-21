export interface Concept {
  id: string;
  title: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  description: string;
  keyPoints: string[];
  example: string;
  formula?: string;
}

export const cmaFinalElectiveSPMBVConcepts: Concept[] = [
  {
    id: 'cma-f-spmbv-1',
    title: 'Introduction to Performance Management',
    difficulty: 'advanced',
    description: 'Strategic performance management framework, KPIs, and performance measurement systems.',
    keyPoints: [
      'Performance management concepts',
      'Strategic vs operational performance',
      'Performance measurement framework',
      'Key Performance Indicators (KPIs)',
      'Performance management cycle',
      'Linking strategy to performance'
    ],
    example: 'Performance management aligns individual and organizational objectives to achieve strategic goals.',
  },
  {
    id: 'cma-f-spmbv-2',
    title: 'Performance Measurement, Evaluation and Improvement Tools',
    difficulty: 'advanced',
    description: 'Balanced scorecard, performance prism, and other performance tools.',
    keyPoints: [
      'Balanced Scorecard - four perspectives',
      'Performance prism framework',
      'EFQM Excellence Model',
      'Malcolm Baldrige criteria',
      'Six Sigma and continuous improvement',
      'Benchmarking techniques'
    ],
    example: 'Balanced Scorecard translates strategy into objectives across financial, customer, process, and learning perspectives.',
  },
  {
    id: 'cma-f-spmbv-3',
    title: 'Economic Efficiency and Performance Analysis',
    difficulty: 'advanced',
    description: 'Economic Value Added, productivity analysis, and efficiency measurement.',
    keyPoints: [
      'Economic Value Added (EVA)',
      'Market Value Added (MVA)',
      'Return on Investment (ROI)',
      'Residual Income (RI)',
      'Productivity measurement',
      'Efficiency ratios'
    ],
    example: 'EVA measures value created above the cost of capital employed in the business.',
    formula: 'EVA = NOPAT - (Capital Employed × WACC)'
  },
  {
    id: 'cma-f-spmbv-4',
    title: 'Enterprise Risk Management',
    difficulty: 'advanced',
    description: 'ERM framework, risk identification, assessment, and mitigation strategies.',
    keyPoints: [
      'COSO ERM framework',
      'Risk identification and assessment',
      'Risk appetite and tolerance',
      'Risk response strategies',
      'Risk monitoring and reporting',
      'Integration with strategy'
    ],
    example: 'ERM provides a framework for identifying, assessing, and managing risks across the enterprise.',
  },
  {
    id: 'cma-f-spmbv-5',
    title: 'Fundamentals of Business Valuation',
    difficulty: 'advanced',
    description: 'Purpose, approaches, and principles of business valuation.',
    keyPoints: [
      'Purpose of business valuation',
      'Going concern vs liquidation value',
      'Fair value vs fair market value',
      'Valuation standards and guidelines',
      'Control premium and minority discount',
      'Marketability discounts'
    ],
    example: 'Business valuation is required for M&A, taxation, litigation, financial reporting, and strategic planning.',
  },
  {
    id: 'cma-f-spmbv-6',
    title: 'Laws and Compliance in Valuation',
    difficulty: 'advanced',
    description: 'Legal and regulatory requirements for valuation in India.',
    keyPoints: [
      'Companies Act provisions for valuation',
      'SEBI valuation regulations',
      'Income Tax Act provisions',
      'FEMA regulations',
      'Registered Valuer requirements',
      'Valuation reports and certification'
    ],
    example: 'Companies Act mandates valuation by registered valuer for share buyback, preferential allotment, and amalgamation.',
  },
  {
    id: 'cma-f-spmbv-7',
    title: 'Valuation Methods and Approaches',
    difficulty: 'advanced',
    description: 'Income approach, market approach, and asset-based approach to valuation.',
    keyPoints: [
      'Income approach - DCF method',
      'Market approach - comparable companies',
      'Asset-based approach',
      'Relative valuation multiples',
      'Option pricing models',
      'Selection of appropriate method'
    ],
    example: 'DCF method values business by discounting projected free cash flows at appropriate discount rate (WACC).',
    formula: 'Enterprise Value = Σ [FCFF / (1 + WACC)^t] + Terminal Value'
  },
  {
    id: 'cma-f-spmbv-8',
    title: 'Valuation of Assets and Liabilities',
    difficulty: 'advanced',
    description: 'Specific valuation of tangible assets, intangible assets, and liabilities.',
    keyPoints: [
      'Fixed assets valuation',
      'Inventory valuation',
      'Intangible assets - goodwill, brand, patents',
      'Financial assets and liabilities',
      'Contingent liabilities',
      'Off-balance sheet items'
    ],
    example: 'Brand valuation uses relief from royalty method or incremental cash flow method.',
  },
  {
    id: 'cma-f-spmbv-9',
    title: 'Valuation in Mergers and Acquisitions',
    difficulty: 'advanced',
    description: 'Valuation for M&A transactions, synergy valuation, and deal structuring.',
    keyPoints: [
      'Pre-merger and post-merger valuation',
      'Synergy identification and valuation',
      'Purchase price allocation',
      'Earn-out provisions',
      'Fairness opinion',
      'Tax implications in M&A'
    ],
    example: 'Synergy value captures cost savings and revenue enhancements from combining two businesses.',
    formula: 'Synergy Value = Value(A+B) - [Value(A) + Value(B)]'
  }
];

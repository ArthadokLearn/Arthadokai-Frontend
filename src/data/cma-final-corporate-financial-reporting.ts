export interface Concept {
  id: string;
  title: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  description: string;
  keyPoints: string[];
  example: string;
  formula?: string;
}

export const cmaFinalCorporateFinancialReportingConcepts: Concept[] = [
  {
    id: 'cma-f-cfr-1',
    title: 'Specific Accounting Standards',
    difficulty: 'advanced',
    description: 'In-depth study of complex accounting standards including Ind AS.',
    keyPoints: [
      'Ind AS vs AS - key differences',
      'Ind AS 101 - First-time Adoption',
      'Ind AS 109 - Financial Instruments',
      'Ind AS 115 - Revenue from Contracts',
      'Ind AS 116 - Leases',
      'Fair value measurement'
    ],
    example: 'Ind AS 116 requires lessees to recognize right-of-use asset and lease liability for all leases.',
  },
  {
    id: 'cma-f-cfr-2',
    title: 'Valuation of Shares and Intangible Assets',
    difficulty: 'advanced',
    description: 'Methods of share valuation and intangible asset measurement.',
    keyPoints: [
      'Asset-based valuation methods',
      'Income-based methods - DCF, dividend capitalization',
      'Market-based methods - comparable company analysis',
      'Goodwill valuation',
      'Brand valuation',
      'Patent and IP valuation'
    ],
    example: 'DCF method values shares by discounting expected future cash flows at appropriate discount rate.',
    formula: 'Share Value = PV of Future Cash Flows = Σ [CFt / (1 + r)^t]'
  },
  {
    id: 'cma-f-cfr-3',
    title: 'Accounting of Financial Instruments',
    difficulty: 'advanced',
    description: 'Classification, measurement, and hedge accounting for financial instruments.',
    keyPoints: [
      'Classification - amortized cost, FVOCI, FVTPL',
      'Measurement of financial assets and liabilities',
      'Impairment of financial assets - ECL model',
      'Derivative accounting',
      'Hedge accounting',
      'Derecognition principles'
    ],
    example: 'Financial assets are classified based on business model and contractual cash flow characteristics.',
  },
  {
    id: 'cma-f-cfr-4',
    title: 'Accounting and Reporting of NBFCs',
    difficulty: 'advanced',
    description: 'Special accounting and prudential norms for Non-Banking Financial Companies.',
    keyPoints: [
      'NBFC classification - Asset Finance, Investment, Loan',
      'Income recognition norms',
      'Asset classification and provisioning',
      'Capital adequacy requirements',
      'Disclosures as per RBI guidelines',
      'Fair practices code'
    ],
    example: 'NBFCs must maintain minimum Capital to Risk-weighted Assets Ratio (CRAR) of 15%.',
  },
  {
    id: 'cma-f-cfr-5',
    title: 'Business Combination and Restructuring',
    difficulty: 'advanced',
    description: 'Accounting for mergers, acquisitions, demergers, and business reorganization.',
    keyPoints: [
      'Ind AS 103 - Business Combinations',
      'Acquisition method of accounting',
      'Purchase price allocation',
      'Goodwill calculation and impairment',
      'Common control transactions',
      'Reverse acquisitions'
    ],
    example: 'In acquisition, acquirer recognizes identifiable assets and liabilities at fair value, with excess being goodwill.',
    formula: 'Goodwill = Purchase Consideration - Fair Value of Net Identifiable Assets'
  },
  {
    id: 'cma-f-cfr-6',
    title: 'Consolidated and Separate Financial Statements',
    difficulty: 'advanced',
    description: 'Preparation of consolidated financial statements for group companies.',
    keyPoints: [
      'Ind AS 110 - Consolidated Financial Statements',
      'Control concept and consolidation',
      'Elimination of intra-group transactions',
      'Non-controlling interest',
      'Associates and joint ventures - equity method',
      'Separate financial statements'
    ],
    example: 'Parent consolidates all subsidiaries where it has control, eliminating inter-company balances and transactions.',
  },
  {
    id: 'cma-f-cfr-7',
    title: 'Recent Developments in Financial Reporting',
    difficulty: 'advanced',
    description: 'Latest amendments, new standards, and emerging reporting requirements.',
    keyPoints: [
      'IFRS updates and amendments',
      'ESG reporting and BRSR',
      'Integrated reporting framework',
      'XBRL and digital reporting',
      'Blockchain in accounting',
      'Sustainability reporting standards'
    ],
    example: 'BRSR (Business Responsibility and Sustainability Reporting) is mandatory for top 1000 listed companies.',
  },
  {
    id: 'cma-f-cfr-8',
    title: 'Government Accounting in India',
    difficulty: 'advanced',
    description: 'Accounting systems and procedures for government organizations.',
    keyPoints: [
      'Government accounting system',
      'Budget preparation and execution',
      'Comptroller and Auditor General (CAG)',
      'Government Financial Reporting Standards (GFRS)',
      'Cash vs accrual accounting in government',
      'Public sector undertakings accounting'
    ],
    example: 'Government accounting follows single entry cash-based system, though moving towards accrual basis.',
  }
];

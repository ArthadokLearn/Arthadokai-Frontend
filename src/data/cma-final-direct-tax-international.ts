export interface Concept {
  id: string;
  title: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  description: string;
  keyPoints: string[];
  example: string;
  formula?: string;
}

export const cmaFinalDirectTaxInternationalConcepts: Concept[] = [
  {
    id: 'cma-f-dti-1',
    title: 'Assessment and Computation of Total Income of Various Entities',
    difficulty: 'advanced',
    description: 'Tax computation for companies, firms, trusts, and other entities.',
    keyPoints: [
      'Domestic vs foreign company taxation',
      'Minimum Alternate Tax (MAT)',
      'Alternate Minimum Tax (AMT)',
      'Taxation of partnership firms and LLPs',
      'Trust and AOP taxation',
      'Dividend distribution tax'
    ],
    example: 'MAT ensures that companies with book profits pay minimum 15% tax even if regular tax is lower.',
    formula: 'MAT = 15% × (Book Profit adjusted as per Section 115JB)'
  },
  {
    id: 'cma-f-dti-2',
    title: 'Tax Management – Return Filing and Assessment Procedure',
    difficulty: 'advanced',
    description: 'E-filing, ITR forms, assessment types, and compliance procedures.',
    keyPoints: [
      'Types of returns - ITR-1 to ITR-7',
      'E-filing and digital signature',
      'Self-assessment and advance tax',
      'Assessment procedures - scrutiny, best judgment',
      'Reassessment and revision',
      'Time limits for assessment'
    ],
    example: 'Companies and entities with audit requirement must file returns by October 31 (extended to November 30 for AY 2024-25).',
  },
  {
    id: 'cma-f-dti-3',
    title: 'Grievance Redressal',
    difficulty: 'advanced',
    description: 'Appeals, revisions, and dispute resolution mechanisms in income tax.',
    keyPoints: [
      'Appeal to CIT(A) - Commissioner (Appeals)',
      'Appeal to ITAT - Income Tax Appellate Tribunal',
      'High Court and Supreme Court appeals',
      'Revision by Commissioner',
      'Advance Ruling Authority',
      'Dispute Resolution Panel (DRP)'
    ],
    example: 'Appeal to CIT(A) must be filed within 30 days from receipt of assessment order.',
  },
  {
    id: 'cma-f-dti-4',
    title: 'Penalties and Prosecutions',
    difficulty: 'advanced',
    description: 'Penalties for non-compliance, prosecution provisions, and immunity schemes.',
    keyPoints: [
      'Penalty for concealment of income - Section 271',
      'Penalty for failure to file return',
      'Penalty for failure to deduct TDS',
      'Prosecution for tax evasion',
      'Voluntary disclosure schemes',
      'Immunity from penalty'
    ],
    example: 'Penalty for concealment ranges from 50% to 200% of tax sought to be evaded.',
  },
  {
    id: 'cma-f-dti-5',
    title: 'Business Restructuring',
    difficulty: 'advanced',
    description: 'Tax implications of amalgamation, demerger, slump sale, and business reorganization.',
    keyPoints: [
      'Amalgamation - conditions and tax implications',
      'Demerger - resulting and demerged companies',
      'Slump sale - transfer of undertaking',
      'Capital gains exemptions',
      'Carry forward of losses',
      'Tax neutrality in restructuring'
    ],
    example: 'In amalgamation, accumulated losses of amalgamating company can be set off by amalgamated company subject to conditions.',
  },
  {
    id: 'cma-f-dti-6',
    title: 'Tax Planning – Various Aspects',
    difficulty: 'advanced',
    description: 'Tax planning strategies, tax avoidance vs evasion, and legitimate tax optimization.',
    keyPoints: [
      'Tax planning vs tax evasion',
      'Salary structuring for tax efficiency',
      'Investment planning - 80C, 80D',
      'Choice of business structure',
      'Location-based tax planning',
      'Timing of income and expenses'
    ],
    example: 'Salary can be structured with allowances and perquisites to optimize tax liability within legal framework.',
  },
  {
    id: 'cma-f-dti-7',
    title: 'CBDT and Other Authorities',
    difficulty: 'advanced',
    description: 'Income tax authorities, powers, and administrative structure.',
    keyPoints: [
      'Central Board of Direct Taxes (CBDT)',
      'Principal Chief Commissioner and Chief Commissioner',
      'Commissioner and Additional Commissioner',
      'Assessing Officer powers',
      'TDS authorities',
      'Faceless assessment scheme'
    ],
    example: 'CBDT is the apex body for administration of direct taxes in India under Ministry of Finance.',
  },
  {
    id: 'cma-f-dti-8',
    title: 'E-Commerce Transactions and Special Liabilities',
    difficulty: 'advanced',
    description: 'Taxation of e-commerce transactions, equalization levy, and special provisions.',
    keyPoints: [
      'Equalization levy - digital advertising services',
      'TCS on e-commerce transactions',
      'Attribution of income to Permanent Establishment',
      'Significant Economic Presence',
      'Cross-border e-commerce',
      'Compliance for e-commerce operators'
    ],
    example: 'E-commerce operators must collect TCS @ 1% on net value of taxable supplies facilitated through their platform.',
  },
  {
    id: 'cma-f-dti-9',
    title: 'Income Computation and Disclosure Standards (ICDS)',
    difficulty: 'advanced',
    description: 'ICDS for computation of income under the head "Profits and Gains of Business or Profession".',
    keyPoints: [
      'ICDS I: Accounting Policies',
      'ICDS II: Valuation of Inventories',
      'ICDS III: Construction Contracts',
      'ICDS IV: Revenue Recognition',
      'ICDS V: Tangible Fixed Assets',
      'Differences between ICDS and Accounting Standards'
    ],
    example: 'ICDS requires marked-to-market gains/losses on derivatives to be recognized annually for tax purposes.',
  },
  {
    id: 'cma-f-dti-10',
    title: 'Black Money (Undisclosed Foreign Income and Assets) and Imposition of Tax Act, 2015',
    difficulty: 'advanced',
    description: 'Taxation of undisclosed foreign income and assets, compliance requirements.',
    keyPoints: [
      'Scope and definitions',
      'Tax on undisclosed foreign income - 30%',
      'Penalty provisions - 300% of tax',
      'Prosecution and imprisonment',
      'Compliance schemes',
      'Information exchange agreements'
    ],
    example: 'Undisclosed foreign income is taxed at flat 30% with penalty up to 300% of tax and rigorous imprisonment up to 10 years.',
  },
  {
    id: 'cma-f-dti-11',
    title: 'Case Studies',
    difficulty: 'advanced',
    description: 'Practical case studies covering complex tax scenarios and planning situations.',
    keyPoints: [
      'Corporate restructuring cases',
      'International taxation scenarios',
      'Transfer pricing disputes',
      'MAT and AMT applications',
      'Residential status complexities',
      'Multi-jurisdictional cases'
    ],
    example: 'Case study: A company planning to demerge its business division - tax implications and compliance requirements.',
  },
  {
    id: 'cma-f-dti-12',
    title: 'Double Taxation Avoidance Agreements (DTAA)',
    difficulty: 'advanced',
    description: 'Tax treaties, avoidance of double taxation, and treaty benefits.',
    keyPoints: [
      'Principles of DTAA',
      'Residential tie-breaker rules',
      'Permanent Establishment concept',
      'Tax treaty benefits - reduced withholding tax',
      'Treaty shopping and abuse',
      'Most Favored Nation clause'
    ],
    example: 'India-USA DTAA provides reduced withholding tax rates: 15% on dividends, 10-15% on interest, 10-15% on royalties.',
  },
  {
    id: 'cma-f-dti-13',
    title: 'Transfer Pricing',
    difficulty: 'advanced',
    description: 'Arm\'s length principle, transfer pricing methods, and documentation requirements.',
    keyPoints: [
      'Arm\'s length principle',
      'Associated enterprises definition',
      'Transfer pricing methods - CUP, RPM, CPM, PSM, TNMM',
      'Documentation - Master file, Local file, CbCR',
      'Secondary adjustment',
      'Advance Pricing Agreement (APA)'
    ],
    example: 'Transfer pricing ensures that international transactions between related parties are at arm\'s length price.',
    formula: 'Arm\'s Length Price = Price that would be charged in a comparable uncontrolled transaction'
  },
  {
    id: 'cma-f-dti-14',
    title: 'General Anti-Avoidance Rules (GAAR)',
    difficulty: 'advanced',
    description: 'Anti-avoidance provisions to counter aggressive tax planning.',
    keyPoints: [
      'Impermissible avoidance arrangement',
      'Main purpose test',
      'Powers of Principal Commissioner',
      'Consequences of GAAR invocation',
      'Safe harbor rules',
      'Grandfathering provisions'
    ],
    example: 'GAAR can be invoked if the main purpose of an arrangement is to obtain tax benefit and it lacks commercial substance.',
  }
];

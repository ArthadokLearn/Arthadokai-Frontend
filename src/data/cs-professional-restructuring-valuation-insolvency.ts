export interface Concept {
  id: string;
  title: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  description: string;
  keyPoints: string[];
  example: string;
  formula?: string;
}

export const csProfessionalRestructuringValuationInsolvencyConcepts: Concept[] = [
  {
    id: 'cs-p-rvi-1',
    title: 'Types of Corporate Restructuring',
    difficulty: 'advanced',
    description: 'Various forms of corporate restructuring and reorganization.',
    keyPoints: [
      'Merger and amalgamation',
      'Demerger and spin-off',
      'Slump sale',
      'Strategic disinvestment',
      'Reverse merger',
      'Cross-border restructuring'
    ],
    example: 'Demerger separates business division into independent company while transferring undertaking to new entity.',
  },
  {
    id: 'cs-p-rvi-2',
    title: 'Acquisition of Company / Business',
    difficulty: 'advanced',
    description: 'Strategies and methods for acquiring companies and businesses.',
    keyPoints: [
      'Share acquisition',
      'Asset acquisition',
      'Hostile vs friendly takeovers',
      'Tender offers',
      'Leveraged buyouts',
      'Management buyouts'
    ],
    example: 'Share acquisition transfers ownership while asset acquisition involves purchase of specific assets and liabilities.',
  },
  {
    id: 'cs-p-rvi-3',
    title: 'Planning and Strategy for M&A',
    difficulty: 'advanced',
    description: 'Strategic planning and execution of mergers and acquisitions.',
    keyPoints: [
      'M&A objectives and rationale',
      'Target identification and screening',
      'Valuation and pricing',
      'Deal structuring',
      'Integration planning',
      'Synergy realization'
    ],
    example: 'Successful M&A requires clear strategic rationale, thorough due diligence, and effective post-merger integration.',
  },
  {
    id: 'cs-p-rvi-4',
    title: 'Process of M&A Transactions',
    difficulty: 'advanced',
    description: 'Step-by-step process of merger and acquisition execution.',
    keyPoints: [
      'Letter of intent and term sheet',
      'Due diligence process',
      'Negotiation and deal closure',
      'Regulatory approvals',
      'Shareholder and creditor approvals',
      'Post-merger integration'
    ],
    example: 'M&A process begins with LOI, proceeds through due diligence, obtains approvals, and concludes with integration.',
  },
  {
    id: 'cs-p-rvi-5',
    title: 'Documentation for Merger and Amalgamation',
    difficulty: 'advanced',
    description: 'Legal documentation required for merger transactions.',
    keyPoints: [
      'Scheme of amalgamation',
      'Share exchange ratio',
      'Board resolutions',
      'Shareholder resolutions',
      'Court applications and orders',
      'Filing with ROC'
    ],
    example: 'Scheme of amalgamation details terms, share exchange ratio, appointed date, and effective date.',
  },
  {
    id: 'cs-p-rvi-6',
    title: 'Accounting for Restructuring',
    difficulty: 'advanced',
    description: 'Accounting treatment for mergers, demergers, and restructuring.',
    keyPoints: [
      'Purchase method vs pooling of interests',
      'Goodwill calculation and treatment',
      'Ind AS 103 - Business Combinations',
      'Treatment of reserves',
      'Adjustments and eliminations',
      'Disclosure requirements'
    ],
    example: 'Under purchase method, acquirer recognizes assets and liabilities at fair value with goodwill arising.',
    formula: 'Goodwill = Consideration Paid - Fair Value of Net Assets Acquired'
  },
  {
    id: 'cs-p-rvi-7',
    title: 'Tax and Stamp Duty Implications in Restructuring',
    difficulty: 'advanced',
    description: 'Tax consequences and stamp duty for restructuring transactions.',
    keyPoints: [
      'Section 2(1B) - Amalgamation',
      'Section 2(19AA) - Demerger',
      'Capital gains exemption - Sections 47, 54',
      'Tax neutrality conditions',
      'Stamp duty on transfer',
      'State-specific stamp duty laws'
    ],
    example: 'Amalgamation satisfying Section 2(1B) conditions enjoys tax-neutral treatment without capital gains.',
  },
  {
    id: 'cs-p-rvi-8',
    title: 'Regulation of Combinations',
    difficulty: 'advanced',
    description: 'Competition Commission regulation of mergers and acquisitions.',
    keyPoints: [
      'Competition Act provisions',
      'Thresholds for notification',
      'Notice to CCI - Form I/II',
      'CCI approval process',
      'Adverse effect on competition',
      'Remedies and conditions'
    ],
    example: 'Combinations exceeding asset/turnover thresholds require CCI approval before implementation.',
  },
  {
    id: 'cs-p-rvi-9',
    title: 'Regulatory Approvals for Schemes',
    difficulty: 'advanced',
    description: 'Obtaining regulatory clearances for restructuring schemes.',
    keyPoints: [
      'NCLT approval - Sections 230-232',
      'Stock exchange approvals',
      'SEBI no-objection',
      'Sectoral regulator approvals',
      'RBI approval for cross-border',
      'Creditor and shareholder meetings'
    ],
    example: 'NCLT approves scheme after ensuring compliance, shareholder approval, and creditor consent.',
  },
  {
    id: 'cs-p-rvi-10',
    title: 'Fast Track Mergers',
    difficulty: 'advanced',
    description: 'Simplified merger process for specific company combinations.',
    keyPoints: [
      'Section 233 - Fast track merger',
      'Eligible combinations',
      'ROC approval process',
      'Declaration of solvency',
      'Objections mechanism',
      'Timeline and procedure'
    ],
    example: 'Holding-subsidiary or small company mergers can use fast track route without NCLT approval.',
  },
  {
    id: 'cs-p-rvi-11',
    title: 'Cross-Border Mergers',
    difficulty: 'advanced',
    description: 'International mergers involving foreign companies.',
    keyPoints: [
      'Section 234 - Cross-border mergers',
      'Inbound and outbound mergers',
      'RBI and government approvals',
      'Permitted jurisdictions',
      'Valuation and share exchange',
      'FEMA compliance'
    ],
    example: 'Indian company can merge with company from notified jurisdiction with RBI and government approval.',
  },
  {
    id: 'cs-p-rvi-12',
    title: 'Business Valuation – Overview',
    difficulty: 'advanced',
    description: 'Principles and approaches for business valuation.',
    keyPoints: [
      'Asset-based valuation',
      'Income-based valuation - DCF',
      'Market-based valuation',
      'Valuation standards',
      'Fair value determination',
      'Registered valuers'
    ],
    example: 'DCF method values business based on present value of projected future cash flows.',
    formula: 'Enterprise Value = Σ[FCF/(1+WACC)^t] + Terminal Value'
  },
  {
    id: 'cs-p-rvi-13',
    title: 'Valuation for Restructuring',
    difficulty: 'advanced',
    description: 'Specific valuation requirements for mergers and restructuring.',
    keyPoints: [
      'Share exchange ratio determination',
      'Fairness opinion',
      'Valuation report requirements',
      'SEBI valuation regulations',
      'Independent valuers',
      'Valuation disclosures'
    ],
    example: 'Share exchange ratio determined through valuation ensures fair treatment of shareholders in merger.',
  },
  {
    id: 'cs-p-rvi-14',
    title: 'Insolvency Framework – Overview',
    difficulty: 'advanced',
    description: 'Insolvency and Bankruptcy Code framework and objectives.',
    keyPoints: [
      'IBC 2016 - objectives',
      'Corporate insolvency resolution',
      'Liquidation process',
      'Individual insolvency',
      'Adjudicating authorities - NCLT, DRT',
      'Insolvency and Bankruptcy Board'
    ],
    example: 'IBC provides time-bound process for resolving insolvency to maximize asset value.',
  },
  {
    id: 'cs-p-rvi-15',
    title: 'Corporate Insolvency Resolution Process (CIRP)',
    difficulty: 'advanced',
    description: 'Initiation and conduct of corporate insolvency resolution.',
    keyPoints: [
      'Initiation by creditors or corporate debtor',
      'Default threshold - ₹1 crore',
      'Appointment of IRP/RP',
      'Moratorium provisions',
      '180/270 day timeline',
      'Committee of Creditors'
    ],
    example: 'Financial creditor can initiate CIRP if default exceeds ₹1 crore by filing application to NCLT.',
  },
  {
    id: 'cs-p-rvi-16',
    title: 'Role of Insolvency Professionals (IP, IRP, RP)',
    difficulty: 'advanced',
    description: 'Functions and responsibilities of insolvency professionals.',
    keyPoints: [
      'Interim Resolution Professional',
      'Resolution Professional',
      'Liquidator',
      'IP registration and eligibility',
      'Duties and responsibilities',
      'Code of conduct'
    ],
    example: 'Resolution Professional manages corporate debtor, invites resolution plans, and conducts CIRP process.',
  },
  {
    id: 'cs-p-rvi-17',
    title: 'Resolution Strategies',
    difficulty: 'advanced',
    description: 'Developing and evaluating resolution strategies.',
    keyPoints: [
      'Resolution plan requirements',
      'Feasibility and viability',
      'Payment to creditors',
      'Revival vs liquidation analysis',
      'Stakeholder interests',
      'Operational creditor treatment'
    ],
    example: 'Resolution plan must ensure operational creditors receive at least liquidation value.',
  },
  {
    id: 'cs-p-rvi-18',
    title: 'Committee of Creditors and Meetings',
    difficulty: 'advanced',
    description: 'Formation and functioning of Committee of Creditors.',
    keyPoints: [
      'CoC composition - financial creditors',
      'Voting share calculation',
      'CoC meetings and decisions',
      '66% approval requirement',
      'Related party exclusion',
      'Information memorandum'
    ],
    example: 'CoC comprises all financial creditors with voting share proportionate to debt amount.',
  },
  {
    id: 'cs-p-rvi-19',
    title: 'Resolution Plan – Preparation and Approval',
    difficulty: 'advanced',
    description: 'Preparation, submission, and approval of resolution plans.',
    keyPoints: [
      'Resolution plan contents',
      'Financial creditor payment',
      'Feasibility and implementation',
      'CoC approval - 66%',
      'NCLT approval',
      'Plan implementation and monitoring'
    ],
    example: 'Resolution plan requires 66% CoC approval and NCLT sanction before implementation.',
  },
  {
    id: 'cs-p-rvi-20',
    title: 'Pre-Packaged Insolvency',
    difficulty: 'advanced',
    description: 'Pre-negotiated insolvency resolution for MSMEs.',
    keyPoints: [
      'Pre-pack framework for MSMEs',
      'Base resolution plan',
      'Creditor approval - 66%',
      'Swiss challenge mechanism',
      '120-day timeline',
      'Advantages over regular CIRP'
    ],
    example: 'Pre-pack allows MSMEs to negotiate resolution with creditors before NCLT application, reducing time.',
  },
  {
    id: 'cs-p-rvi-21',
    title: 'Cross-Border Insolvency',
    difficulty: 'advanced',
    description: 'Cross-border insolvency proceedings and cooperation.',
    keyPoints: [
      'Section 234 and 235 - Cross-border',
      'UNCITRAL Model Law',
      'Recognition of foreign proceedings',
      'Cooperation with foreign courts',
      'Assets in multiple jurisdictions',
      'International best practices'
    ],
    example: 'Cross-border insolvency provisions facilitate cooperation between Indian and foreign insolvency proceedings.',
  },
  {
    id: 'cs-p-rvi-22',
    title: 'Liquidation Process',
    difficulty: 'advanced',
    description: 'Corporate liquidation process under IBC.',
    keyPoints: [
      'Liquidation commencement',
      'Appointment of liquidator',
      'Asset realization',
      'Waterfall mechanism',
      'Stakeholder claims',
      'Distribution proceeds'
    ],
    example: 'Liquidation waterfall prioritizes secured creditors, workmen dues, then unsecured creditors.',
  },
  {
    id: 'cs-p-rvi-23',
    title: 'Voluntary Liquidation',
    difficulty: 'advanced',
    description: 'Voluntary liquidation by solvent companies.',
    keyPoints: [
      'Declaration of solvency',
      'Shareholder approval - 75%',
      'Appointment of liquidator',
      'Asset distribution',
      'Creditor consent',
      'Closure procedure'
    ],
    example: 'Solvent company can voluntarily liquidate with 75% shareholder approval and declaration of solvency.',
  },
  {
    id: 'cs-p-rvi-24',
    title: 'Debt Recovery and SARFAESI',
    difficulty: 'advanced',
    description: 'Debt recovery mechanisms under SARFAESI Act.',
    keyPoints: [
      'SARFAESI Act, 2002',
      'Secured creditor rights',
      'Enforcement without court',
      'Asset reconstruction companies',
      'DRT proceedings',
      'Borrower remedies'
    ],
    example: 'Secured creditors can enforce security and sell assets without court intervention under SARFAESI.',
  },
  {
    id: 'cs-p-rvi-25',
    title: 'Winding-Up by Tribunal',
    difficulty: 'advanced',
    description: 'Compulsory winding up of companies by NCLT.',
    keyPoints: [
      'Grounds for winding up',
      'Petition filing - creditors, shareholders',
      'NCLT proceedings',
      'Appointment of liquidator',
      'Settlement of claims',
      'Dissolution'
    ],
    example: 'NCLT can order winding up if company unable to pay debts or just and equitable to wind up.',
  },
  {
    id: 'cs-p-rvi-26',
    title: 'Strike Off and Restoration',
    difficulty: 'advanced',
    description: 'Removal of company name from register and restoration procedures.',
    keyPoints: [
      'Strike off under Section 248',
      'Defunct company removal',
      'Fast track exit',
      'Objections to strike off',
      'Restoration of name - Section 252',
      'Consequences of strike off'
    ],
    example: 'ROC can strike off company name if not carrying on business for 2 years or not complying with filings.',
  }
];

export interface Concept {
  id: string;
  title: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  description: string;
  keyPoints: string[];
  example: string;
  formula?: string;
}

export const csProfessionalElectiveInsolvencyBankruptcyConcepts: Concept[] = [
  {
    id: 'cs-p-ib-1',
    title: 'Introduction to Insolvency and Bankruptcy Code (IBC)',
    difficulty: 'advanced',
    description: 'IBC framework, objectives, and structure.',
    keyPoints: ['IBC 2016 objectives', 'Time-bound resolution', 'Creditor-in-control model', 'Corporate and personal insolvency', 'Adjudicating authorities', 'Insolvency professionals'],
    example: 'IBC consolidates insolvency laws providing time-bound process for resolution maximizing asset value.',
  },
  {
    id: 'cs-p-ib-2',
    title: 'Corporate Insolvency Resolution Process (CIRP)',
    difficulty: 'advanced',
    description: 'CIRP initiation, conduct, and timeline.',
    keyPoints: ['Initiation by FC, OC, or CD', 'Default threshold - ₹1 crore', 'Appointment of IRP/RP', 'Moratorium effect', '180/270 day timeline', 'Committee of Creditors role'],
    example: 'Financial creditor can initiate CIRP if corporate debtor defaults on debt exceeding ₹1 crore.',
  },
  {
    id: 'cs-p-ib-3',
    title: 'Resolution Strategies and Frameworks',
    difficulty: 'advanced',
    description: 'Developing and evaluating resolution plans.',
    keyPoints: ['Resolution plan requirements', 'Feasibility and viability assessment', 'Stakeholder interests', 'Payment waterfall', 'Operational creditor treatment', 'CoC approval - 66%'],
    example: 'Resolution plan must ensure operational creditors receive amount not less than liquidation value.',
  },
  {
    id: 'cs-p-ib-4',
    title: 'Fast Track CIRP',
    difficulty: 'advanced',
    description: 'Expedited insolvency process for small companies and startups.',
    keyPoints: ['Eligibility for fast track', 'Voluntary initiation', '90-day timeline', 'Simplified procedures', 'Applicability to startups', 'Limited extensions'],
    example: 'Fast track CIRP for companies with assets and income below specified thresholds completing in 90 days.',
  },
  {
    id: 'cs-p-ib-5',
    title: 'Corporate Liquidation Process',
    difficulty: 'advanced',
    description: 'Liquidation when resolution fails or chosen.',
    keyPoints: ['Liquidation commencement', 'Appointment of liquidator', 'Liquidation estate', 'Asset realization', 'Waterfall mechanism - Section 53', 'Distribution to stakeholders'],
    example: 'Liquidation waterfall prioritizes secured creditors, workmen dues (24 months), then unsecured creditors.',
  },
  {
    id: 'cs-p-ib-6',
    title: 'Voluntary Liquidation',
    difficulty: 'advanced',
    description: 'Voluntary winding up of solvent companies.',
    keyPoints: ['Declaration of solvency', 'Members\' resolution - 75%', 'Creditor consent', 'Appointment of liquidator', 'Asset distribution', 'Dissolution procedure'],
    example: 'Solvent company can voluntarily liquidate with 75% member approval and declaration that debts will be paid.',
  },
  {
    id: 'cs-p-ib-7',
    title: 'Adjudication for Corporate Persons',
    difficulty: 'advanced',
    description: 'NCLT adjudication of corporate insolvency matters.',
    keyPoints: ['NCLT jurisdiction', 'Application procedures', 'Hearing and orders', 'Interim orders', 'Appeals to NCLAT', 'Supreme Court appeals'],
    example: 'NCLT adjudicates applications for initiation, approval of plans, and liquidation orders under IBC.',
  },
  {
    id: 'cs-p-ib-8',
    title: 'Pre-Packaged Insolvency',
    difficulty: 'advanced',
    description: 'Pre-negotiated resolution framework for MSMEs.',
    keyPoints: ['Pre-pack for MSMEs', 'Base resolution plan', '66% creditor approval before filing', 'Swiss challenge mechanism', '120-day timeline', 'Benefits over regular CIRP'],
    example: 'Pre-pack allows MSMEs to negotiate resolution with creditors before approaching NCLT reducing time and costs.',
  },
  {
    id: 'cs-p-ib-9',
    title: 'Debt Recovery and SARFAESI',
    difficulty: 'advanced',
    description: 'SARFAESI Act for secured creditor enforcement.',
    keyPoints: ['SARFAESI Act 2002', 'Enforcement without court', 'Secured creditor rights', 'Asset reconstruction companies', 'DRT proceedings', 'Borrower protections'],
    example: 'Under SARFAESI, secured creditors can take possession and sell assets without court intervention.',
  },
  {
    id: 'cs-p-ib-10',
    title: 'Winding-up by Tribunal',
    difficulty: 'advanced',
    description: 'Compulsory winding up under Companies Act.',
    keyPoints: ['Grounds for winding up', 'Petition by creditors/shareholders', 'NCLT proceedings', 'Just and equitable ground', 'Provisional liquidator', 'Liquidation process'],
    example: 'NCLT can order winding up if company unable to pay debts or just and equitable to wind up.',
  },
  {
    id: 'cs-p-ib-11',
    title: 'Insolvency of Individuals and Firms',
    difficulty: 'advanced',
    description: 'Personal insolvency for individuals and partnership firms.',
    keyPoints: ['Personal guarantors to corporate debtors', 'Application threshold', 'Insolvency resolution process', 'Repayment plan', 'Discharge from insolvency', 'Credit information'],
    example: 'Personal guarantors to corporate debtors can be proceeded against under personal insolvency provisions.',
  },
  {
    id: 'cs-p-ib-12',
    title: 'Bankruptcy Orders and Process',
    difficulty: 'advanced',
    description: 'Bankruptcy proceedings for individuals.',
    keyPoints: ['Bankruptcy application', 'Bankruptcy trustee', 'Bankruptcy estate', 'Duties of bankrupt', 'Discharge conditions', 'Consequences of bankruptcy'],
    example: 'Bankruptcy order appoints trustee to realize assets and distribute to creditors after which individual discharged.',
  },
  {
    id: 'cs-p-ib-13',
    title: 'Fresh Start Process',
    difficulty: 'advanced',
    description: 'Fresh start for individuals with limited income and assets.',
    keyPoints: ['Eligibility for fresh start', 'Asset and income thresholds', 'Summary procedure', 'Discharge from debts', 'Rehabilitation', 'Credit history impact'],
    example: 'Fresh start provides debt relief to individuals with assets and income below thresholds enabling rehabilitation.',
  },
  {
    id: 'cs-p-ib-14',
    title: 'Professional Ethics under IBC',
    difficulty: 'advanced',
    description: 'Ethical standards for insolvency professionals.',
    keyPoints: ['Code of conduct', 'Independence and conflict of interest', 'Confidentiality', 'Professional competence', 'Disciplinary proceedings', 'Quality standards'],
    example: 'Insolvency professionals must maintain independence, avoid conflicts, and act in best interests of creditors.',
  },
  {
    id: 'cs-p-ib-15',
    title: 'Group Insolvency',
    difficulty: 'advanced',
    description: 'Insolvency resolution for group companies.',
    keyPoints: ['Group company definition', 'Consolidated resolution', 'Pooling and consolidation', 'Group insolvency framework', 'Inter-company claims', 'Coordination mechanisms'],
    example: 'Group insolvency enables coordinated resolution of related companies maximizing value through synergies.',
  },
  {
    id: 'cs-p-ib-16',
    title: 'Cross-Border Insolvency',
    difficulty: 'advanced',
    description: 'International aspects of insolvency proceedings.',
    keyPoints: ['Sections 234-235', 'UNCITRAL Model Law', 'Recognition of foreign proceedings', 'Cooperation with foreign courts', 'Cross-border cooperation agreements', 'International best practices'],
    example: 'Cross-border insolvency provisions facilitate cooperation when debtor has assets or creditors in multiple countries.',
  }
];

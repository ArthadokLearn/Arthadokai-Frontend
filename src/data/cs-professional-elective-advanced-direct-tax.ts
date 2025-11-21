export interface Concept {
  id: string;
  title: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  description: string;
  keyPoints: string[];
  example: string;
  formula?: string;
}

export const csProfessionalElectiveAdvancedDirectTaxConcepts: Concept[] = [
  {
    id: 'cs-p-adt-1',
    title: 'Income and Taxation for Non-Company Entities',
    difficulty: 'advanced',
    description: 'Taxation of individuals, HUF, firms, AOP, BOI, and trusts.',
    keyPoints: ['Individual taxation', 'HUF taxation', 'Partnership firm taxation', 'AOP and BOI', 'Trust taxation', 'Tax rates and slabs'],
    example: 'Partnership firms taxed at flat 30% plus surcharge and cess; partners taxed separately on profit share.',
  },
  {
    id: 'cs-p-adt-2',
    title: 'Company Tax Filing',
    difficulty: 'advanced',
    description: 'Corporate tax compliance, returns, and advance tax.',
    keyPoints: ['ITR-6 for companies', 'Tax audit under Section 44AB', 'Advance tax provisions', 'TDS compliance', 'Transfer pricing reporting', 'Tax payment schedule'],
    example: 'Companies must file ITR-6 with audited financial statements and tax audit report before due date.',
  },
  {
    id: 'cs-p-adt-3',
    title: 'Tax on Special Transactions',
    difficulty: 'advanced',
    description: 'Taxation of mergers, demergers, slump sales, and buybacks.',
    keyPoints: ['Amalgamation - Section 2(1B)', 'Demerger - Section 2(19AA)', 'Slump sale taxation', 'Buyback tax - Section 115QA', 'Capital gains on restructuring', 'Tax neutrality'],
    example: 'Tax-neutral amalgamation requires shareholders to get shares in amalgamated company as consideration.',
  },
  {
    id: 'cs-p-adt-4',
    title: 'Tax Audit',
    difficulty: 'advanced',
    description: 'Tax audit provisions, procedure, and reporting.',
    keyPoints: ['Section 44AB applicability', 'Form 3CA/3CB and 3CD', 'Auditor qualifications', 'Audit clauses and reporting', 'Due dates', 'Consequences of non-compliance'],
    example: 'Business with turnover exceeding ₹1 crore (₹10 crore for digital receipts) requires tax audit.',
  },
  {
    id: 'cs-p-adt-5',
    title: 'Assessment and Reassessment',
    difficulty: 'advanced',
    description: 'Assessment procedures, scrutiny, and reassessment provisions.',
    keyPoints: ['Self-assessment', 'Summary assessment', 'Scrutiny assessment', 'Best judgment assessment', 'Reassessment - Section 147-151', 'Time limits'],
    example: 'Reassessment can be initiated within 3 years if income escaped assessment exceeds ₹50 lakh.',
  },
  {
    id: 'cs-p-adt-6',
    title: 'Appeals and Revisions',
    difficulty: 'advanced',
    description: 'Appellate remedies and revision provisions.',
    keyPoints: ['Appeal to CIT(A)', 'Appeal to ITAT', 'Appeal to High Court and Supreme Court', 'Revision by Commissioner', 'Rectification of mistakes', 'Settlement Commission'],
    example: 'Appeal to CIT(A) must be filed within 30 days from receipt of assessment order with prescribed fees.',
  },
  {
    id: 'cs-p-adt-7',
    title: 'Transfer Pricing and GAAR',
    difficulty: 'advanced',
    description: 'Transfer pricing regulations and General Anti-Avoidance Rules.',
    keyPoints: ['Arm\'s length principle', 'Transfer pricing methods', 'Documentation requirements', 'APA mechanism', 'GAAR provisions', 'Impermissible avoidance arrangements'],
    example: 'Transfer pricing ensures international transactions between associated enterprises are at arm\'s length price.',
  },
  {
    id: 'cs-p-adt-8',
    title: 'Double Taxation Avoidance Agreements',
    difficulty: 'advanced',
    description: 'DTAA provisions and tax relief mechanisms.',
    keyPoints: ['DTAA objectives', 'Residential tie-breaker rules', 'Tax relief methods - exemption, credit', 'Permanent establishment', 'Limitation of benefits', 'MLI - Multilateral Instrument'],
    example: 'DTAA prevents same income from being taxed in both source and residence country of taxpayer.',
  }
];

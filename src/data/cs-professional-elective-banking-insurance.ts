export interface Concept {
  id: string;
  title: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  description: string;
  keyPoints: string[];
  example: string;
  formula?: string;
}

export const csProfessionalElectiveBankingInsuranceConcepts: Concept[] = [
  {
    id: 'cs-p-bi-1',
    title: 'Overview of Indian Banking System',
    difficulty: 'advanced',
    description: 'Structure and evolution of banking system in India.',
    keyPoints: ['Central bank - RBI', 'Commercial banks', 'Cooperative banks', 'Regional Rural Banks', 'Payment banks and small finance banks', 'Banking evolution in India'],
    example: 'Indian banking system comprises RBI as apex bank regulating commercial, cooperative, and development banks.',
  },
  {
    id: 'cs-p-bi-2',
    title: 'Banking Regulations',
    difficulty: 'advanced',
    description: 'Legal and regulatory framework for banking.',
    keyPoints: ['Banking Regulation Act 1949', 'RBI Act 1934', 'Banking Companies Act', 'Licensing requirements', 'Restrictions on business', 'RBI powers and control'],
    example: 'Banking Regulation Act empowers RBI to regulate banking operations, licensing, and ensure financial stability.',
  },
  {
    id: 'cs-p-bi-3',
    title: 'Bank Organisation and Control',
    difficulty: 'advanced',
    description: 'Organizational structure and governance in banks.',
    keyPoints: ['Board of directors', 'Management structure', 'Audit committee', 'Risk management', 'Compliance function', 'Corporate governance'],
    example: 'Banks must constitute Board-level committees for audit, risk management, and IT strategy as per RBI guidelines.',
  },
  {
    id: 'cs-p-bi-4',
    title: 'Banking Operations and Procedures',
    difficulty: 'advanced',
    description: 'Core banking operations and customer services.',
    keyPoints: ['Account opening - KYC norms', 'Deposit operations', 'Remittance services', 'Clearing and settlement', 'Safe deposit lockers', 'Customer service'],
    example: 'KYC (Know Your Customer) norms require identity and address verification for account opening preventing money laundering.',
  },
  {
    id: 'cs-p-bi-5',
    title: 'Digital Banking and Fintech',
    difficulty: 'advanced',
    description: 'Digital transformation and fintech in banking.',
    keyPoints: ['Internet and mobile banking', 'UPI and digital payments', 'Fintech innovations', 'Neo banks', 'Blockchain in banking', 'Cybersecurity in digital banking'],
    example: 'UPI enables instant inter-bank money transfer using mobile phones revolutionizing digital payments in India.',
  },
  {
    id: 'cs-p-bi-6',
    title: 'Negotiable Instruments Act',
    difficulty: 'advanced',
    description: 'Legal framework for cheques, bills, and promissory notes.',
    keyPoints: ['Negotiable Instruments Act 1881', 'Cheques, bills, and promissory notes', 'Holder and holder in due course', 'Dishonour and penalties - Section 138', 'Electronic negotiable instruments', 'Banking amendments'],
    example: 'Cheque dishonour for insufficiency attracts penalty up to twice the cheque amount under Section 138.',
  },
  {
    id: 'cs-p-bi-7',
    title: 'Government Schemes and Financial Inclusion',
    difficulty: 'advanced',
    description: 'Financial inclusion initiatives and government schemes.',
    keyPoints: ['Jan Dhan Yojana', 'Mudra loans', 'Stand-up India', 'Priority sector lending', 'Financial literacy', 'Direct benefit transfer'],
    example: 'Pradhan Mantri Jan Dhan Yojana provides universal access to banking with zero-balance accounts and insurance.',
  },
  {
    id: 'cs-p-bi-8',
    title: 'Consumer Protection in Banking',
    difficulty: 'advanced',
    description: 'Customer rights and grievance redressal in banking.',
    keyPoints: ['Banking Ombudsman Scheme', 'Customer rights charter', 'Fair practices code', 'Grievance redressal', 'Compensation policy', 'RBI consumer protection guidelines'],
    example: 'Banking Ombudsman provides free, quick redressal of customer complaints against banks for deficient services.',
  },
  {
    id: 'cs-p-bi-9',
    title: 'Advances and Securities',
    difficulty: 'advanced',
    description: 'Bank lending, credit appraisal, and securities.',
    keyPoints: ['Credit appraisal process', 'Types of advances', 'Primary and collateral securities', 'Loan documentation', 'Credit monitoring', 'Recovery mechanisms'],
    example: 'Banks assess borrower\'s character, capacity, capital, collateral, and conditions (5Cs) before lending.',
  },
  {
    id: 'cs-p-bi-10',
    title: 'Interest and Annuities',
    difficulty: 'advanced',
    description: 'Interest calculations and annuity products.',
    keyPoints: ['Simple and compound interest', 'Interest computation methods', 'Effective interest rate', 'Annuity products', 'EMI calculations', 'Present and future value'],
    example: 'EMI is calculated using reducing balance method considering principal, interest rate, and tenure.',
    formula: 'EMI = [P×R×(1+R)^N] / [(1+R)^N-1] where P=Principal, R=Rate, N=Tenure'
  },
  {
    id: 'cs-p-bi-11',
    title: 'Non-Performing Assets (NPA)',
    difficulty: 'advanced',
    description: 'NPA classification, provisioning, and resolution.',
    keyPoints: ['NPA definition - 90 days default', 'Asset classification', 'Provisioning norms', 'Restructuring and resolution', 'Recovery methods - SARFAESI, IBC', 'Wilful defaulters'],
    example: 'Loan becomes NPA if interest or principal remains overdue for period exceeding 90 days.',
  },
  {
    id: 'cs-p-bi-12',
    title: 'Bank Financial Analysis',
    difficulty: 'advanced',
    description: 'Financial statement analysis and performance metrics for banks.',
    keyPoints: ['CAMELS framework', 'Net Interest Margin', 'Return on Assets', 'Capital Adequacy Ratio', 'Asset quality metrics', 'Profitability ratios'],
    example: 'CAMELS evaluates banks on Capital, Asset quality, Management, Earnings, Liquidity, and Systems.',
    formula: 'NIM = (Interest Income - Interest Expense) / Average Earning Assets'
  },
  {
    id: 'cs-p-bi-13',
    title: 'Risk Management and Basel Norms',
    difficulty: 'advanced',
    description: 'Banking risks and Basel regulatory framework.',
    keyPoints: ['Credit, market, operational risks', 'Basel III framework', 'Capital Adequacy Ratio - 9%', 'Risk-weighted assets', 'Liquidity Coverage Ratio', 'Stress testing'],
    example: 'Basel III requires banks to maintain minimum 9% CRAR with adequate Tier I and Tier II capital.',
  },
  {
    id: 'cs-p-bi-14',
    title: 'Insurance – Concepts and Functions',
    difficulty: 'advanced',
    description: 'Insurance principles, types, and functions.',
    keyPoints: ['Insurance principles - utmost good faith, insurable interest', 'Life, general, health insurance', 'Risk pooling and transfer', 'Underwriting process', 'Claims settlement', 'Reinsurance'],
    example: 'Insurance transfers risk from individual to insurer through pooling and spreading risk across many policyholders.',
  },
  {
    id: 'cs-p-bi-15',
    title: 'Insurance Regulations and Authority',
    difficulty: 'advanced',
    description: 'IRDA and regulatory framework for insurance.',
    keyPoints: ['IRDA Act 1999', 'Powers and functions of IRDAI', 'Licensing of insurers', 'FDI in insurance - 74%', 'Solvency margins', 'Consumer protection'],
    example: 'IRDAI regulates and promotes insurance industry protecting policyholders\' interests.',
  },
  {
    id: 'cs-p-bi-16',
    title: 'Life, General and Health Insurance',
    difficulty: 'advanced',
    description: 'Different insurance products and features.',
    keyPoints: ['Life insurance types - term, endowment, ULIP', 'General insurance - motor, property, liability', 'Health insurance products', 'Riders and add-ons', 'Tax benefits', 'Claim process'],
    example: 'Term insurance provides pure risk cover with death benefit but no maturity benefit.',
  },
  {
    id: 'cs-p-bi-17',
    title: 'Investigation and Appeals',
    difficulty: 'advanced',
    description: 'Insurance disputes, ombudsman, and appeals.',
    keyPoints: ['Insurance Ombudsman', 'Complaint redressal', 'Investigation of claims', 'Fraud detection', 'Dispute resolution', 'Appeals to IRDAI'],
    example: 'Insurance Ombudsman resolves disputes between policyholders and insurers free of cost up to ₹50 lakh.',
  },
  {
    id: 'cs-p-bi-18',
    title: 'Career and Professional Opportunities in Insurance',
    difficulty: 'advanced',
    description: 'Career paths and professional roles in insurance sector.',
    keyPoints: ['Insurance agents and brokers', 'Actuarial profession', 'Underwriters', 'Claims professionals', 'Risk managers', 'Insurance surveyors'],
    example: 'Actuaries analyze financial risks using mathematics, statistics, and financial theory in insurance and pensions.',
  }
];

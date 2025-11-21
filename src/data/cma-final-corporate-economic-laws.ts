export interface Concept {
  id: string;
  title: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  description: string;
  keyPoints: string[];
  example: string;
  formula?: string;
}

export const cmaFinalCorporateEconomicLawsConcepts: Concept[] = [
  {
    id: 'cma-f-cel-1',
    title: 'Companies Act, 2013',
    difficulty: 'advanced',
    description: 'Advanced provisions of Companies Act including corporate governance, related party transactions, and board responsibilities.',
    keyPoints: [
      'Corporate governance framework',
      'Board composition and independence',
      'Related party transactions',
      'CSR and sustainability reporting',
      'Audit committee requirements',
      'Insider trading provisions'
    ],
    example: 'Listed companies must have at least one-third of the board as independent directors and establish an audit committee.',
  },
  {
    id: 'cma-f-cel-2',
    title: 'Insolvency and Bankruptcy Code, 2016',
    difficulty: 'advanced',
    description: 'Comprehensive framework for insolvency resolution and bankruptcy proceedings.',
    keyPoints: [
      'Corporate Insolvency Resolution Process (CIRP)',
      'Role of insolvency professionals',
      'Committee of Creditors (CoC)',
      'Resolution plans and liquidation',
      'Pre-packaged insolvency',
      'Cross-border insolvency'
    ],
    example: 'When a corporate debtor defaults, creditors can initiate CIRP to resolve the insolvency within 330 days.',
  },
  {
    id: 'cma-f-cel-3',
    title: 'Corporate Governance, CSR and Sustainability',
    difficulty: 'advanced',
    description: 'Principles of corporate governance, CSR mandates, and sustainability reporting frameworks.',
    keyPoints: [
      'Corporate governance codes and principles',
      'CSR spending requirements (2% of average net profits)',
      'CSR committee and policy',
      'Sustainability reporting - ESG metrics',
      'Business Responsibility and Sustainability Report (BRSR)',
      'Stakeholder engagement'
    ],
    example: 'Companies with net worth ≥ ₹500 crore or turnover ≥ ₹1000 crore must spend at least 2% of average net profits on CSR.',
  },
  {
    id: 'cma-f-cel-4',
    title: 'SEBI Laws and Regulations',
    difficulty: 'advanced',
    description: 'Securities and Exchange Board of India regulations governing capital markets and investor protection.',
    keyPoints: [
      'SEBI Act, 1992 - powers and functions',
      'Listing obligations and disclosure requirements (LODR)',
      'Takeover regulations',
      'Insider trading prohibition',
      'PFUTP regulations',
      'IPO and FPO regulations'
    ],
    example: 'SEBI requires listed companies to disclose price-sensitive information within 24 hours through stock exchange filing.',
  },
  {
    id: 'cma-f-cel-5',
    title: 'Competition Act, 2002',
    difficulty: 'advanced',
    description: 'Anti-competitive practices, abuse of dominance, and merger control regulations.',
    keyPoints: [
      'Anti-competitive agreements - cartels',
      'Abuse of dominant position',
      'Merger and acquisition regulations',
      'Competition Commission of India (CCI)',
      'Leniency provisions',
      'Penalties and enforcement'
    ],
    example: 'Combinations exceeding specified thresholds (assets > ₹2000 crore or turnover > ₹6000 crore) must be notified to CCI.',
  },
  {
    id: 'cma-f-cel-6',
    title: 'Foreign Exchange Management Act, 1999',
    difficulty: 'advanced',
    description: 'Foreign exchange transactions, capital account and current account transactions, FDI regulations.',
    keyPoints: [
      'Current account vs capital account transactions',
      'FDI policy and sector caps',
      'ODI (Overseas Direct Investment)',
      'ECB (External Commercial Borrowings)',
      'Foreign portfolio investment',
      'Enforcement and penalties'
    ],
    example: 'FDI up to 100% is allowed in many sectors under automatic route, while some sectors require government approval.',
  },
  {
    id: 'cma-f-cel-7',
    title: 'Banking Sector Laws and Regulations',
    difficulty: 'advanced',
    description: 'Banking Regulation Act, RBI guidelines, and prudential norms for banks.',
    keyPoints: [
      'Banking Regulation Act, 1949',
      'RBI regulatory framework',
      'Prudential norms - NPA classification',
      'Capital adequacy requirements',
      'Priority sector lending',
      'Digital banking regulations'
    ],
    example: 'Banks must maintain Capital Adequacy Ratio (CAR) of at least 9% as per RBI norms.',
  },
  {
    id: 'cma-f-cel-8',
    title: 'Insurance Sector Laws and Regulations',
    difficulty: 'advanced',
    description: 'Insurance regulatory framework, IRDAI regulations, and insurance products.',
    keyPoints: [
      'Insurance Act, 1938 and amendments',
      'IRDAI regulations',
      'Solvency margin requirements',
      'Investment norms',
      'Life and general insurance products',
      'Microinsurance and health insurance'
    ],
    example: 'Insurance companies must maintain solvency margin as prescribed by IRDAI to ensure financial stability.',
  },
  {
    id: 'cma-f-cel-9',
    title: 'MSME-specific Provisions',
    difficulty: 'advanced',
    description: 'MSME Development Act, credit facilities, and government schemes for MSMEs.',
    keyPoints: [
      'MSME classification criteria',
      'Udyam Registration Portal',
      'Priority sector lending to MSMEs',
      'Delayed payment provisions',
      'Government schemes - CLCSS, CGTSME',
      'Export promotion for MSMEs'
    ],
    example: 'MSMEs are classified based on investment and turnover: Micro (≤₹1 cr, ≤₹5 cr), Small (≤₹10 cr, ≤₹50 cr), Medium (≤₹50 cr, ≤₹250 cr).',
  },
  {
    id: 'cma-f-cel-10',
    title: 'Cybersecurity and Data Privacy Laws',
    difficulty: 'advanced',
    description: 'Information Technology Act, data protection regulations, and cybersecurity framework.',
    keyPoints: [
      'IT Act, 2000 and amendments',
      'Digital Personal Data Protection Act, 2023',
      'Cybersecurity incidents reporting',
      'Data localization requirements',
      'Consent framework for data processing',
      'Penalties for data breaches'
    ],
    example: 'Organizations must obtain explicit consent before collecting and processing personal data of users.',
  },
  {
    id: 'cma-f-cel-11',
    title: 'Anti-Money Laundering Laws',
    difficulty: 'advanced',
    description: 'Prevention of Money Laundering Act (PMLA) and AML compliance framework.',
    keyPoints: [
      'PMLA, 2002 - scope and provisions',
      'Know Your Customer (KYC) norms',
      'Suspicious transaction reporting',
      'Enforcement Directorate powers',
      'Attachment and confiscation of property',
      'International cooperation in AML'
    ],
    example: 'Financial institutions must report cash transactions exceeding ₹10 lakh and all suspicious transactions to FIU-IND.',
  }
];

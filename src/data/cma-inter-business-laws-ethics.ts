export interface Concept {
  id: string;
  title: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  description: string;
  keyPoints: string[];
  example: string;
  formula?: string;
}

export const cmaInterBusinessLawsEthicsConcepts: Concept[] = [
  {
    id: 'cma-i-ble-1',
    title: 'Introduction to Law & Legal System',
    difficulty: 'beginner',
    description: 'Understanding the Indian legal system, sources of law, and judicial hierarchy.',
    keyPoints: [
      'Sources of law in India',
      'Judicial hierarchy and court system',
      'Common law vs statute law',
      'Legal persons and their rights',
      'Doctrine of precedent'
    ],
    example: 'The Supreme Court is the apex court in India and has the power of judicial review.',
  },
  {
    id: 'cma-i-ble-2',
    title: 'Indian Contract Act, 1872',
    difficulty: 'intermediate',
    description: 'Detailed study of contract law including formation, performance, and breach of contracts.',
    keyPoints: [
      'Essential elements of a valid contract',
      'Types of contracts',
      'Performance and discharge of contract',
      'Breach of contract and remedies',
      'Quasi-contracts and contingent contracts'
    ],
    example: 'A voidable contract is valid until the aggrieved party chooses to rescind it.',
  },
  {
    id: 'cma-i-ble-3',
    title: 'Sale of Goods Act, 1930',
    difficulty: 'intermediate',
    description: 'Comprehensive understanding of sale of goods, transfer of ownership, and seller-buyer rights.',
    keyPoints: [
      'Sale vs agreement to sell',
      'Conditions and warranties',
      'Transfer of property rules',
      'Rights and duties of buyer and seller',
      'Unpaid seller\'s rights'
    ],
    example: 'In a sale, property in goods passes immediately, whereas in an agreement to sell, it passes at a future date.',
  },
  {
    id: 'cma-i-ble-4',
    title: 'Negotiable Instruments Act, 1881',
    difficulty: 'intermediate',
    description: 'Laws governing promissory notes, bills of exchange, and cheques including electronic instruments.',
    keyPoints: [
      'Characteristics of negotiable instruments',
      'Parties to instruments',
      'Endorsement and negotiation',
      'Dishonor and notice of dishonor',
      'Cheque truncation and electronic clearing'
    ],
    example: 'A holder in due course gets a better title than the transferor and is protected from defects in title.',
  },
  {
    id: 'cma-i-ble-5',
    title: 'Indian Partnership Act, 1932',
    difficulty: 'intermediate',
    description: 'Formation, rights, duties, and dissolution of partnership firms.',
    keyPoints: [
      'Essential elements of partnership',
      'Rights and duties of partners',
      'Types of partners',
      'Registration of partnership',
      'Dissolution of partnership'
    ],
    example: 'Partners are mutual agents - each partner can bind the firm by their acts done in the ordinary course of business.',
  },
  {
    id: 'cma-i-ble-6',
    title: 'LLP Act, 2008',
    difficulty: 'intermediate',
    description: 'Limited Liability Partnership - formation, structure, and regulatory compliance.',
    keyPoints: [
      'Difference between LLP and partnership',
      'Incorporation of LLP',
      'Rights and liabilities of partners',
      'Contribution and profit sharing',
      'Winding up of LLP'
    ],
    example: 'In an LLP, partners have limited liability limited to their agreed contribution, unlike unlimited liability in traditional partnerships.',
  },
  {
    id: 'cma-i-ble-7',
    title: 'Factories Act, 1948',
    difficulty: 'intermediate',
    description: 'Health, safety, and welfare provisions for factory workers.',
    keyPoints: [
      'Applicability of the Act',
      'Health provisions - cleanliness, ventilation',
      'Safety provisions - fencing of machinery',
      'Welfare provisions - canteen, crèches',
      'Working hours and overtime'
    ],
    example: 'A factory employing 250 workers must provide canteen facilities as per the Factories Act.',
  },
  {
    id: 'cma-i-ble-8',
    title: 'Payment of Gratuity Act, 1972',
    difficulty: 'intermediate',
    description: 'Provisions for payment of gratuity to employees.',
    keyPoints: [
      'Eligibility for gratuity',
      'Calculation of gratuity',
      'Maximum gratuity amount',
      'Forfeiture of gratuity',
      'Time limit for payment'
    ],
    example: 'An employee who has completed 5 years of continuous service is entitled to gratuity.',
    formula: 'Gratuity = (Last drawn salary × 15 × Years of service) / 26'
  },
  {
    id: 'cma-i-ble-9',
    title: 'EPF & MP Act, 1952',
    difficulty: 'intermediate',
    description: 'Employees Provident Fund and Miscellaneous Provisions Act for social security.',
    keyPoints: [
      'Applicability of EPF',
      'Contribution rates - employer and employee',
      'EPF, EPS, and EDLI schemes',
      'Withdrawal and settlement',
      'Universal Account Number (UAN)'
    ],
    example: 'Both employer and employee contribute 12% of basic salary towards EPF.',
  },
  {
    id: 'cma-i-ble-10',
    title: 'ESI Act, 1948',
    difficulty: 'intermediate',
    description: 'Employees State Insurance for medical and cash benefits to employees.',
    keyPoints: [
      'Applicability criteria',
      'Contribution rates',
      'Benefits - sickness, maternity, disablement',
      'Medical benefits to family',
      'ESI Corporation and administration'
    ],
    example: 'ESI provides medical care to insured employees and their families during sickness, maternity, and employment injury.',
  },
  {
    id: 'cma-i-ble-11',
    title: 'Code on Wages, 2019',
    difficulty: 'intermediate',
    description: 'Consolidated law on wages covering minimum wages, payment of wages, and bonus.',
    keyPoints: [
      'Consolidation of wage laws',
      'Minimum wages fixation',
      'Payment of wages provisions',
      'Bonus payment criteria',
      'Gender-neutral provisions'
    ],
    example: 'The Code on Wages consolidates four laws: Minimum Wages Act, Payment of Wages Act, Payment of Bonus Act, and Equal Remuneration Act.',
  },
  {
    id: 'cma-i-ble-12',
    title: 'Companies Act, 2013',
    difficulty: 'intermediate',
    description: 'Basic provisions of Companies Act including incorporation, management, and compliance.',
    keyPoints: [
      'Types of companies',
      'Incorporation process',
      'Board of directors and meetings',
      'Share capital and debentures',
      'Annual compliance requirements'
    ],
    example: 'A private limited company must have a minimum of 2 directors and can have up to 200 members.',
  },
  {
    id: 'cma-i-ble-13',
    title: 'Business Ethics & Emotional Intelligence',
    difficulty: 'intermediate',
    description: 'Ethical principles in business and development of emotional intelligence for professional success.',
    keyPoints: [
      'Ethics and corporate governance',
      'Ethical dilemmas in business',
      'Corporate social responsibility',
      'Emotional intelligence components',
      'Self-awareness and empathy'
    ],
    example: 'A company refusing to engage in bribery despite losing a contract demonstrates strong business ethics.',
  }
];

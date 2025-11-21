export interface Concept {
  id: string;
  title: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  description: string;
  keyPoints: string[];
  example: string;
  formula?: string;
}

export const csExecutiveCompanyLawPracticeConcepts: Concept[] = [
  {
    id: 'cs-e-clp-1',
    title: 'Introduction to Company Law',
    difficulty: 'intermediate',
    description: 'Overview of Companies Act 2013, evolution, and fundamental concepts of company law.',
    keyPoints: [
      'Evolution of company law in India',
      'Companies Act 2013 - key features',
      'Definition and characteristics of company',
      'Corporate personality and veil',
      'Lifting of corporate veil',
      'Distinction from partnership and LLP'
    ],
    example: 'A company is a separate legal entity distinct from its members (Salomon v Salomon & Co Ltd).',
  },
  {
    id: 'cs-e-clp-2',
    title: 'Legal Status and Types of Registered Companies',
    difficulty: 'intermediate',
    description: 'Classification of companies based on liability, ownership, and other criteria.',
    keyPoints: [
      'Private and public companies',
      'Limited by shares and by guarantee',
      'One Person Company (OPC)',
      'Small company and startup company',
      'Government and foreign companies',
      'Holding and subsidiary companies'
    ],
    example: 'Private company restricts share transfer, limits members to 200, and prohibits public subscription.',
  },
  {
    id: 'cs-e-clp-3',
    title: 'Memorandum and Articles of Association and its Alteration',
    difficulty: 'intermediate',
    description: 'MOA and AOA as constitutional documents and procedures for alteration.',
    keyPoints: [
      'Memorandum of Association - clauses',
      'Articles of Association - internal regulations',
      'Doctrine of ultra vires',
      'Alteration of MOA - special resolution',
      'Alteration of AOA - procedure',
      'Entrenchment provisions'
    ],
    example: 'Object clause defines scope of company activities; ultra vires acts are void and cannot be ratified.',
  },
  {
    id: 'cs-e-clp-4',
    title: 'Share and Share Capital – Concepts',
    difficulty: 'intermediate',
    description: 'Types of share capital, classes of shares, and share capital alterations.',
    keyPoints: [
      'Authorized, issued, subscribed, paid-up capital',
      'Equity and preference shares',
      'Rights and bonus shares',
      'Alteration of share capital',
      'Reduction of capital - Section 66',
      'Share certificates and demat shares'
    ],
    example: 'Preference shares have preferential rights for dividend and capital repayment but usually no voting rights.',
  },
  {
    id: 'cs-e-clp-5',
    title: 'Members and Shareholders',
    difficulty: 'intermediate',
    description: 'Membership rights, obligations, and register of members.',
    keyPoints: [
      'Who can be a member',
      'Rights of members',
      'Duties and liabilities',
      'Register of members - Section 88',
      'Nomination facility',
      'Cessation of membership'
    ],
    example: 'Members have rights to attend meetings, vote, receive dividends, and inspect company documents.',
  },
  {
    id: 'cs-e-clp-6',
    title: 'Debt Instruments – Concepts',
    difficulty: 'intermediate',
    description: 'Debentures, bonds, and other debt instruments issued by companies.',
    keyPoints: [
      'Types of debentures',
      'Issue and redemption procedures',
      'Debenture trust deed',
      'Rights of debenture holders',
      'Convertible and non-convertible debentures',
      'Security for debentures'
    ],
    example: 'Debentures are debt instruments acknowledging company\'s loan and creating charge on assets.',
  },
  {
    id: 'cs-e-clp-7',
    title: 'Charges',
    difficulty: 'intermediate',
    description: 'Creation, modification, and registration of charges on company assets.',
    keyPoints: [
      'Fixed and floating charges',
      'Creation of charge',
      'Registration of charges - Section 77',
      'Modification of charges',
      'Satisfaction of charges',
      'Priority of charges'
    ],
    example: 'Charges must be registered with ROC within 30 days of creation, failing which they become void.',
  },
  {
    id: 'cs-e-clp-8',
    title: 'Distribution of Profits',
    difficulty: 'intermediate',
    description: 'Declaration and payment of dividends, transfer to reserves.',
    keyPoints: [
      'Declaration of dividend',
      'Interim and final dividend',
      'Transfer to reserves',
      'Unpaid dividend account',
      'Investor Education and Protection Fund',
      'Restrictions on dividend payment'
    ],
    example: 'Dividend can be declared only out of current year profits or past accumulated profits.',
  },
  {
    id: 'cs-e-clp-9',
    title: 'Accounts and Auditors',
    difficulty: 'intermediate',
    description: 'Maintenance of books, preparation of financial statements, and auditor appointment.',
    keyPoints: [
      'Books of accounts - Section 128',
      'Financial statements preparation',
      'Appointment of auditors',
      'Auditor rotation and eligibility',
      'Audit report and qualifications',
      'Auditor removal and resignation'
    ],
    example: 'Listed companies must rotate auditors after maximum continuous term of 5 years (individual) or 10 years (firm).',
  },
  {
    id: 'cs-e-clp-10',
    title: 'Compromise, Arrangement and Amalgamation – Concepts',
    difficulty: 'intermediate',
    description: 'Merger, amalgamation, and reconstruction procedures under Companies Act.',
    keyPoints: [
      'Merger and amalgamation - Section 230',
      'NCLT approval process',
      'Scheme of arrangement',
      'Rights of creditors and shareholders',
      'Fast track merger',
      'Cross-border mergers'
    ],
    example: 'Merger requires approval of 75% majority in value and number representing 50% in value of each class.',
  },
  {
    id: 'cs-e-clp-11',
    title: 'Dormant Company',
    difficulty: 'intermediate',
    description: 'Formation and compliance requirements for dormant companies.',
    keyPoints: [
      'Definition of dormant company',
      'Application for dormant status',
      'Compliance requirements',
      'Conversion to active status',
      'Exemptions available',
      'Annual filing requirements'
    ],
    example: 'Company can apply for dormant status if formed for future project or holding assets with no significant transactions.',
  },
  {
    id: 'cs-e-clp-12',
    title: 'Inspection, Inquiry and Investigation',
    difficulty: 'intermediate',
    description: 'Powers of government to inspect, inquire, and investigate company affairs.',
    keyPoints: [
      'Inspection of books - Section 206',
      'Investigation into company affairs',
      'Serious Fraud Investigation Office (SFIO)',
      'Powers of inspectors',
      'Investigation report',
      'Consequences of investigation'
    ],
    example: 'Central Government can order investigation if company affairs conducted with intent to defraud.',
  },
  {
    id: 'cs-e-clp-13',
    title: 'General Meetings',
    difficulty: 'intermediate',
    description: 'Annual general meetings, extraordinary general meetings, and procedures.',
    keyPoints: [
      'Annual General Meeting - Section 96',
      'Extraordinary General Meeting',
      'Notice requirements - 21 days',
      'Quorum for meetings',
      'Resolutions - ordinary and special',
      'Postal ballot and e-voting'
    ],
    example: 'AGM must be held within 6 months from end of financial year and during business hours on working day.',
  },
  {
    id: 'cs-e-clp-14',
    title: 'Directors',
    difficulty: 'intermediate',
    description: 'Appointment, qualifications, disqualifications, and removal of directors.',
    keyPoints: [
      'Appointment of directors',
      'Qualifications and disqualifications',
      'Director Identification Number (DIN)',
      'Independent directors',
      'Nominee and additional directors',
      'Removal and resignation'
    ],
    example: 'Independent director cannot hold office for more than two consecutive terms of 5 years each.',
  },
  {
    id: 'cs-e-clp-15',
    title: 'Board Composition and Powers of the Board',
    difficulty: 'intermediate',
    description: 'Board structure, powers, and limitations under Companies Act.',
    keyPoints: [
      'Board composition requirements',
      'Powers of board',
      'Restrictions on powers - Section 180',
      'Delegation to committees',
      'Managing director and whole-time director',
      'Duties of directors - Section 166'
    ],
    example: 'Board cannot borrow beyond paid-up capital and free reserves without shareholders\' approval.',
  },
  {
    id: 'cs-e-clp-16',
    title: 'Meetings of Board and its Committees',
    difficulty: 'intermediate',
    description: 'Convening and conducting board meetings and committee meetings.',
    keyPoints: [
      'Frequency of board meetings',
      'Notice and agenda',
      'Quorum requirements',
      'Participation through video conferencing',
      'Minutes of meetings',
      'Committee meetings - Audit, Nomination'
    ],
    example: 'Board meeting must be held at least once in every quarter with maximum gap of 120 days.',
  },
  {
    id: 'cs-e-clp-17',
    title: 'Corporate Social Responsibility – Concepts',
    difficulty: 'intermediate',
    description: 'CSR obligations, policy, and implementation framework.',
    keyPoints: [
      'Applicability - Section 135',
      'CSR committee formation',
      'CSR policy and activities',
      'Spending requirement - 2%',
      'Reporting and disclosure',
      'Consequences of non-compliance'
    ],
    example: 'Companies with net worth ≥ ₹500 cr or turnover ≥ ₹1000 cr must constitute CSR committee.',
  },
  {
    id: 'cs-e-clp-18',
    title: 'Annual Report – Concepts',
    difficulty: 'intermediate',
    description: 'Contents of annual report and disclosure requirements.',
    keyPoints: [
      'Components of annual report',
      'Board report - Section 134',
      'Management Discussion and Analysis',
      'Corporate Governance Report',
      'Financial statements',
      'Auditor\'s report and secretarial audit'
    ],
    example: 'Board report must include extract of annual return, conservation of energy, technology absorption, and forex earnings.',
  },
  {
    id: 'cs-e-clp-19',
    title: 'Key Managerial Personnel (KMPs) and their Remuneration',
    difficulty: 'intermediate',
    description: 'Definition, appointment, and remuneration of KMPs.',
    keyPoints: [
      'Who are KMPs - MD, WTD, CEO, CFO, CS',
      'Appointment requirements',
      'Remuneration determination',
      'Managerial remuneration limits',
      'Stock options and commissions',
      'Sitting fees for directors'
    ],
    example: 'Every listed company must appoint CS, CFO, and CEO/MD as whole-time KMPs.',
  }
];

export interface Concept {
  id: string;
  title: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  description: string;
  keyPoints: string[];
  example: string;
  formula?: string;
}

export const cmaInterCorporateAccountingAuditingConcepts: Concept[] = [
  {
    id: 'cma-i-caa-1',
    title: 'Accounting for Shares and Debentures',
    difficulty: 'intermediate',
    description: 'Issue, forfeiture, and reissue of shares, issue of debentures and redemption.',
    keyPoints: [
      'Issue of shares at par, premium, and discount',
      'Calls in advance and calls in arrears',
      'Forfeiture and reissue of shares',
      'Issue of debentures',
      'Redemption of debentures - payment and conversion'
    ],
    example: 'When shares are forfeited, the Share Capital account is debited and Share Forfeiture account is credited with the amount received.',
  },
  {
    id: 'cma-i-caa-2',
    title: 'Preparation of the Statement of Profit and Loss (As per Schedule III of Companies Act, 2013)',
    difficulty: 'intermediate',
    description: 'Format and preparation of Statement of Profit and Loss as per Schedule III requirements.',
    keyPoints: [
      'Vertical format as per Schedule III',
      'Classification of expenses',
      'Revenue from operations',
      'Other income',
      'Earnings per share calculation'
    ],
    example: 'Revenue from operations includes sale of products, sale of services, and other operating revenues.',
    formula: 'Basic EPS = (Net Profit - Preference Dividend) / Weighted Average Number of Equity Shares'
  },
  {
    id: 'cma-i-caa-3',
    title: 'Cash Flow Statement',
    difficulty: 'intermediate',
    description: 'Preparation of Cash Flow Statement as per AS-3 using direct and indirect methods.',
    keyPoints: [
      'Cash flows from operating activities',
      'Cash flows from investing activities',
      'Cash flows from financing activities',
      'Direct and indirect method',
      'Interpretation of cash flow statement'
    ],
    example: 'Operating activities include cash receipts from customers and cash payments to suppliers and employees.',
    formula: 'Net Cash Flow = Cash from Operations + Cash from Investing + Cash from Financing'
  },
  {
    id: 'cma-i-caa-4',
    title: 'Accounts of Banking, Electricity and Insurance Companies',
    difficulty: 'intermediate',
    description: 'Special features and accounting treatment for banking, electricity, and insurance companies.',
    keyPoints: [
      'Banking companies - Balance Sheet and P&L',
      'NPAs and provisioning',
      'Electricity companies - tariff and revenue recognition',
      'Insurance companies - revenue account and balance sheet',
      'Life and general insurance accounting'
    ],
    example: 'Banks classify assets as Standard, Sub-standard, Doubtful, and Loss assets based on NPA norms.',
  },
  {
    id: 'cma-i-caa-5',
    title: 'Accounting Standards',
    difficulty: 'intermediate',
    description: 'Application of Indian Accounting Standards (AS) in financial reporting.',
    keyPoints: [
      'AS-1: Disclosure of Accounting Policies',
      'AS-2: Valuation of Inventories',
      'AS-9: Revenue Recognition',
      'AS-10: Fixed Assets',
      'Other relevant accounting standards'
    ],
    example: 'AS-2 requires inventories to be valued at lower of cost or net realizable value.',
  },
  {
    id: 'cma-i-caa-6',
    title: 'Basic Concepts of Auditing',
    difficulty: 'intermediate',
    description: 'Fundamental concepts, objectives, and types of audits.',
    keyPoints: [
      'Nature and objectives of audit',
      'Types of audits',
      'Audit planning and program',
      'Audit evidence and documentation',
      'Internal control and internal audit'
    ],
    example: 'Auditing is a systematic examination of books and records to express an opinion on financial statements.',
  },
  {
    id: 'cma-i-caa-7',
    title: 'Provisions Relating to Audit under Companies Act, 2013',
    difficulty: 'intermediate',
    description: 'Appointment, qualifications, rights, duties, and liabilities of auditors.',
    keyPoints: [
      'Appointment of auditors',
      'Qualifications and disqualifications',
      'Rights and duties of auditors',
      'Audit report requirements',
      'Removal and resignation of auditors'
    ],
    example: 'Auditor must report on whether the company has adequate internal financial controls and their operating effectiveness.',
  },
  {
    id: 'cma-i-caa-8',
    title: 'Audit of Different Types of Undertakings',
    difficulty: 'intermediate',
    description: 'Special audits including government companies, banks, and cooperative societies.',
    keyPoints: [
      'Government company audit',
      'Bank audit procedures',
      'Cooperative society audit',
      'Partnership firm audit',
      'Trust and society audit'
    ],
    example: 'Bank audits focus on verification of advances, NPA classification, and regulatory compliance.',
  }
];

export interface Concept {
  id: string;
  title: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  description: string;
  keyPoints: string[];
  example: string;
  formula?: string;
}

export const cmaInterFinancialAccountingConcepts: Concept[] = [
  {
    id: 'cma-i-fa-1',
    title: 'Accounting Fundamentals',
    difficulty: 'intermediate',
    description: 'Advanced accounting principles, concepts, and conventions.',
    keyPoints: ['Accounting standards', 'GAAP principles', 'Accrual vs cash accounting', 'Materiality and prudence', 'Accounting policies'],
    example: 'The matching principle requires expenses to be matched with revenues in the period they helped generate.',
  },
  {
    id: 'cma-i-fa-2',
    title: 'Bills of Exchange, Consignment, Joint Venture',
    difficulty: 'intermediate',
    description: 'Accounting treatment for bills of exchange, consignment sales, and joint ventures.',
    keyPoints: ['Bills receivable and payable', 'Consignor and consignee accounts', 'Joint venture - memorandum method', 'Account sales preparation', 'Del credere commission'],
    example: 'In consignment, goods sent remain the property of the consignor until sold by the consignee.',
  },
  {
    id: 'cma-i-fa-3',
    title: 'Final Accounts—Commercial, Not-for-Profit & Incomplete Records',
    difficulty: 'intermediate',
    description: 'Preparation of final accounts for various types of entities.',
    keyPoints: ['Trading and P&L account', 'Receipts and payments vs income and expenditure', 'Statement of affairs method', 'Single entry conversion', 'Adjustments and provisions'],
    example: 'For not-for-profit organizations, income and expenditure account is prepared instead of P&L account.',
  },
  {
    id: 'cma-i-fa-4',
    title: 'Partnership Accounting',
    difficulty: 'intermediate',
    description: 'Accounting for partnership including admission, retirement, and dissolution.',
    keyPoints: ['Profit sharing and capital accounts', 'Admission and goodwill valuation', 'Retirement and death of partner', 'Dissolution and settlement', 'Piecemeal distribution'],
    example: 'When a new partner is admitted, goodwill is adjusted to recognize the value of the existing business.',
  },
  {
    id: 'cma-i-fa-5',
    title: 'Lease Accounting',
    difficulty: 'intermediate',
    description: 'Accounting for finance and operating leases as per AS-19.',
    keyPoints: ['Finance lease vs operating lease', 'Lease classification criteria', 'Lessee accounting', 'Lessor accounting', 'Sale and leaseback'],
    example: 'A finance lease transfers substantially all risks and rewards of ownership to the lessee.',
  },
  {
    id: 'cma-i-fa-6',
    title: 'Branch (incl. Foreign) & Departmental Accounts',
    difficulty: 'intermediate',
    description: 'Accounting for branch operations and departmental accounts.',
    keyPoints: ['Dependent vs independent branches', 'Stock and debtors system', 'Foreign branch accounting', 'Departmental profit calculation', 'Inter-departmental transfers'],
    example: 'For foreign branches, transactions must be converted to reporting currency using appropriate exchange rates.',
  },
  {
    id: 'cma-i-fa-7',
    title: 'Insurance Claims—Stock & Loss of Profit',
    difficulty: 'intermediate',
    description: 'Calculation of insurance claims for loss of stock and loss of profits.',
    keyPoints: ['Average clause application', 'Loss of stock calculation', 'Loss of profit policy', 'Indemnity period', 'Increased cost of working'],
    example: 'Under average clause, if sum insured is less than actual value, claim is proportionately reduced.',
    formula: 'Claim = (Loss × Sum Insured) / Value of Stock'
  },
  {
    id: 'cma-i-fa-8',
    title: 'Hire-Purchase & Instalment Sales',
    difficulty: 'intermediate',
    description: 'Accounting for hire-purchase and instalment payment transactions.',
    keyPoints: ['Hire-purchase vs instalment sale', 'Calculation of interest', 'Repossession accounting', 'Buyer and seller accounts', 'Default and surrender'],
    example: 'In hire-purchase, ownership transfers only after payment of last instalment, while in instalment sale it transfers immediately.',
  },
  {
    id: 'cma-i-fa-9',
    title: 'Accounting Standards',
    difficulty: 'intermediate',
    description: 'Application of Indian Accounting Standards in financial reporting.',
    keyPoints: ['AS-1 to AS-32 overview', 'Revenue recognition (AS-9)', 'Fixed assets (AS-10)', 'Depreciation (AS-6)', 'Inventories (AS-2)'],
    example: 'AS-2 requires inventories to be valued at lower of cost or net realizable value.',
  }
];

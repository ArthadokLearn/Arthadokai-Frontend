export interface Concept {
  id: string;
  title: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  description: string;
  keyPoints: string[];
  example: string;
  formula?: string;
}

export const csFoundationAccountingAuditingConcepts: Concept[] = [
  {
    id: 'cs-f-aa-1',
    title: 'Theoretical Framework',
    difficulty: 'beginner',
    description: 'Accounting concepts, conventions, and principles that form the foundation of accounting.',
    keyPoints: [
      'Objectives of accounting',
      'Accounting concepts - entity, going concern, money measurement',
      'Accounting conventions - conservatism, consistency, materiality',
      'Accounting principles and standards',
      'Generally Accepted Accounting Principles (GAAP)',
      'Users of accounting information'
    ],
    example: 'Going concern concept assumes that the business will continue to operate in the foreseeable future.',
  },
  {
    id: 'cs-f-aa-2',
    title: 'Accounting Process',
    difficulty: 'beginner',
    description: 'Recording transactions, journal entries, ledger posting, and trial balance.',
    keyPoints: [
      'Double entry system',
      'Journal and types of journal entries',
      'Ledger posting and balancing',
      'Subsidiary books - cash book, purchases, sales',
      'Trial balance preparation',
      'Accounting equation'
    ],
    example: 'For every debit entry, there must be an equal credit entry (double entry principle).',
    formula: 'Accounting Equation: Assets = Liabilities + Capital'
  },
  {
    id: 'cs-f-aa-3',
    title: 'Bank Reconciliation Statement – Meaning and Causes of Difference',
    difficulty: 'beginner',
    description: 'Reconciliation between cash book and bank statement, identifying differences.',
    keyPoints: [
      'Purpose of bank reconciliation',
      'Causes of differences - timing, errors',
      'Cheques issued but not presented',
      'Cheques deposited but not cleared',
      'Bank charges and interest',
      'Preparation of BRS'
    ],
    example: 'A cheque issued on 30th March appears in cash book but clears bank only on 2nd April, causing a timing difference.',
  },
  {
    id: 'cs-f-aa-4',
    title: 'Depreciation Accounting',
    difficulty: 'beginner',
    description: 'Methods of depreciation, accounting treatment, and disposal of fixed assets.',
    keyPoints: [
      'Concept and causes of depreciation',
      'Straight line method',
      'Written down value (diminishing balance) method',
      'Units of production method',
      'Accounting entries for depreciation',
      'Disposal of fixed assets'
    ],
    example: 'Straight line method charges equal depreciation each year over the asset\'s useful life.',
    formula: 'SLM Depreciation = (Cost - Salvage Value) / Useful Life; WDV Depreciation = Book Value × Rate %'
  },
  {
    id: 'cs-f-aa-5',
    title: 'Preparation of Final Accounts for Sole Proprietors',
    difficulty: 'beginner',
    description: 'Trading account, profit and loss account, and balance sheet preparation.',
    keyPoints: [
      'Trading account - gross profit calculation',
      'Profit and loss account - net profit',
      'Balance sheet - assets and liabilities',
      'Adjustments - outstanding, prepaid, depreciation',
      'Closing entries',
      'Marshalling of assets and liabilities'
    ],
    example: 'Trading account shows gross profit by deducting cost of goods sold from net sales.',
    formula: 'Gross Profit = Net Sales - Cost of Goods Sold; Net Profit = Gross Profit - Operating Expenses'
  },
  {
    id: 'cs-f-aa-6',
    title: 'Partnership Accounts',
    difficulty: 'beginner',
    description: 'Accounting for partnerships including profit sharing, admission, and retirement.',
    keyPoints: [
      'Partnership deed and provisions',
      'Capital and current accounts',
      'Distribution of profits and losses',
      'Interest on capital and drawings',
      'Admission of a partner',
      'Retirement and death of a partner'
    ],
    example: 'Partners share profits in agreed ratio; interest on capital and drawings are adjusted before profit distribution.',
    formula: 'Profit Distribution = Total Profit - Interest on Capital + Interest on Drawings, shared in profit ratio'
  },
  {
    id: 'cs-f-aa-7',
    title: 'Joint Venture and Consignment Accounts',
    difficulty: 'beginner',
    description: 'Accounting for joint ventures and consignment transactions.',
    keyPoints: [
      'Features of joint venture',
      'Methods of recording joint ventures',
      'Memorandum joint venture account',
      'Consignment concept',
      'Consignor and consignee accounts',
      'Valuation of unsold stock'
    ],
    example: 'In consignment, goods ownership remains with consignor until sold by consignee to third party.',
  },
  {
    id: 'cs-f-aa-8',
    title: 'Introduction to Company Accounts',
    difficulty: 'beginner',
    description: 'Basics of company accounting, share capital, and debentures.',
    keyPoints: [
      'Types of companies',
      'Share capital - authorized, issued, subscribed',
      'Issue of shares at par and premium',
      'Calls and forfeiture of shares',
      'Issue of debentures',
      'Redemption of debentures'
    ],
    example: 'Companies can issue shares at premium, with excess over face value credited to Securities Premium Account.',
  },
  {
    id: 'cs-f-aa-9',
    title: 'Accounting for Non-Profit Organisations',
    difficulty: 'beginner',
    description: 'Receipts and payments account, income and expenditure account for NPOs.',
    keyPoints: [
      'Features of non-profit organizations',
      'Receipts and payments account',
      'Income and expenditure account',
      'Balance sheet of NPO',
      'Treatment of subscriptions',
      'Capital and revenue items'
    ],
    example: 'Income and Expenditure Account is similar to Profit and Loss Account but for non-profit organizations.',
  },
  {
    id: 'cs-f-aa-10',
    title: 'Computerized Accounting Environment',
    difficulty: 'beginner',
    description: 'Accounting software, databases, and computerized accounting systems.',
    keyPoints: [
      'Advantages of computerized accounting',
      'Accounting software features',
      'Tally and other accounting packages',
      'Data security and backup',
      'MIS reports',
      'E-accounting and cloud accounting'
    ],
    example: 'Tally software automates journal entries, ledger posting, and financial statement preparation.',
  },
  {
    id: 'cs-f-aa-11',
    title: 'Auditing',
    difficulty: 'beginner',
    description: 'Fundamentals of auditing, types of audits, and audit procedures.',
    keyPoints: [
      'Definition and objectives of auditing',
      'Types of audits - statutory, internal, tax',
      'Audit process and planning',
      'Audit evidence and documentation',
      'Internal control systems',
      'Auditor\'s duties and responsibilities'
    ],
    example: 'Auditing is systematic examination of books of accounts to verify accuracy and provide an independent opinion.',
  },
  {
    id: 'cs-f-aa-12',
    title: 'Audits and Auditor\'s Reports',
    difficulty: 'beginner',
    description: 'Types of audit reports, qualifications, and auditor\'s opinion.',
    keyPoints: [
      'Types of audit reports',
      'Unqualified (clean) opinion',
      'Qualified opinion',
      'Adverse opinion',
      'Disclaimer of opinion',
      'Reporting requirements'
    ],
    example: 'An unqualified opinion states that financial statements present a true and fair view in all material respects.',
  }
];

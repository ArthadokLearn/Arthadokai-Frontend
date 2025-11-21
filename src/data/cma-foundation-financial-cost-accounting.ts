export interface Concept {
  id: string;
  title: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  description: string;
  keyPoints: string[];
  example: string;
  formula?: string;
}

export const cmaFoundationFinancialCostAccountingConcepts: Concept[] = [
  {
    id: 'cma-f-fca-1',
    title: 'Accounting Fundamentals',
    difficulty: 'beginner',
    description: 'Basic principles of accounting including double entry system, accounting equation, and journal entries.',
    keyPoints: [
      'Accounting concepts and conventions',
      'Double entry system of bookkeeping',
      'Accounting equation: Assets = Liabilities + Capital',
      'Journal and ledger posting',
      'Trial balance preparation'
    ],
    example: 'If a business purchases furniture for ₹50,000 cash, the journal entry would be: Furniture A/c Dr. ₹50,000 To Cash A/c ₹50,000',
    formula: 'Assets = Liabilities + Capital'
  },
  {
    id: 'cma-f-fca-2',
    title: 'Special Transactions',
    difficulty: 'beginner',
    description: 'Accounting for bills of exchange, consignment, and joint venture transactions.',
    keyPoints: [
      'Bills of exchange - drawer, drawee, payee',
      'Consignment accounting',
      'Joint venture accounting',
      'Account sales and commission',
      'Unsold stock valuation'
    ],
    example: 'In consignment, goods sent on consignment remain the property of the consignor until sold by the consignee.',
  },
  {
    id: 'cma-f-fca-3',
    title: 'Final Accounts',
    difficulty: 'beginner',
    description: 'Preparation of trading account, profit and loss account, and balance sheet.',
    keyPoints: [
      'Trading account preparation',
      'Profit & Loss account',
      'Balance sheet presentation',
      'Adjustments for outstanding and prepaid expenses',
      'Closing stock valuation'
    ],
    example: 'Gross Profit is calculated as: Sales - Cost of Goods Sold, where COGS = Opening Stock + Purchases - Closing Stock',
    formula: 'Gross Profit = Sales - COGS; COGS = Opening Stock + Purchases - Closing Stock'
  },
  {
    id: 'cma-f-fca-4',
    title: 'Fundamentals of Cost Accounting',
    difficulty: 'beginner',
    description: 'Introduction to cost accounting, cost concepts, and classification of costs.',
    keyPoints: [
      'Difference between financial and cost accounting',
      'Cost classification - direct vs indirect',
      'Fixed, variable, and semi-variable costs',
      'Cost elements: Material, Labour, Overheads',
      'Cost sheet preparation'
    ],
    example: 'Direct costs can be directly traced to a product (e.g., raw materials), while indirect costs cannot be directly attributed (e.g., factory rent).',
    formula: 'Total Cost = Direct Material + Direct Labour + Direct Expenses + Overheads'
  }
];

export interface Concept {
  id: string;
  title: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  description: string;
  keyPoints: string[];
  example: string;
  formula?: string;
}

export const cmaInterCostAccountingConcepts: Concept[] = [
  {
    id: 'cma-i-ca-1',
    title: 'Introduction to Cost Accounting',
    difficulty: 'intermediate',
    description: 'Fundamental concepts, objectives, and importance of cost accounting in business management.',
    keyPoints: [
      'Definition and scope of cost accounting',
      'Objectives and functions',
      'Difference between cost and financial accounting',
      'Cost concepts and terminology',
      'Installation of costing system'
    ],
    example: 'Cost accounting helps management in pricing decisions, cost control, and profit planning.',
  },
  {
    id: 'cma-i-ca-2',
    title: 'Cost Ascertainment – Elements of Cost',
    difficulty: 'intermediate',
    description: 'Detailed study of material cost, labor cost, and overhead costs with their accounting treatment.',
    keyPoints: [
      'Material cost - purchase, storage, and issue',
      'Inventory valuation methods - FIFO, LIFO, Weighted Average',
      'Labor cost - time and piece rate systems',
      'Idle time and overtime',
      'Classification and allocation of overheads'
    ],
    example: 'Under FIFO method, materials issued are valued at the price of earliest purchase.',
    formula: 'Total Cost = Direct Material + Direct Labour + Direct Expenses + Overheads'
  },
  {
    id: 'cma-i-ca-3',
    title: 'Cost Accounting Standards',
    difficulty: 'intermediate',
    description: 'Understanding and application of Cost Accounting Standards issued by ICAI.',
    keyPoints: [
      'CAS-1: Classification of Cost',
      'CAS-2: Capacity Determination',
      'CAS-3: Production and Operation Overheads',
      'CAS-4: Cost of Production for Captive Consumption',
      'Other relevant CAS standards'
    ],
    example: 'CAS-1 provides principles for classification of costs into direct and indirect costs.',
  },
  {
    id: 'cma-i-ca-4',
    title: 'Cost Book Keeping',
    difficulty: 'intermediate',
    description: 'Integrated and non-integrated accounting systems for recording cost transactions.',
    keyPoints: [
      'Integrated accounting system',
      'Non-integrated accounting system',
      'Control accounts',
      'Reconciliation of cost and financial accounts',
      'Journal entries in cost ledger'
    ],
    example: 'In integrated system, both financial and cost transactions are recorded in one set of books.',
  },
  {
    id: 'cma-i-ca-5',
    title: 'Methods of Costing',
    difficulty: 'intermediate',
    description: 'Different costing methods applicable to various industries and business types.',
    keyPoints: [
      'Job costing and batch costing',
      'Process costing and operation costing',
      'Unit costing and service costing',
      'Contract costing',
      'Joint and by-product costing'
    ],
    example: 'Job costing is suitable for printing press, repair shop, where each job is unique.',
  },
  {
    id: 'cma-i-ca-6',
    title: 'Cost Accounting Techniques',
    difficulty: 'intermediate',
    description: 'Advanced cost accounting techniques including marginal costing, standard costing, and budgetary control.',
    keyPoints: [
      'Marginal costing and break-even analysis',
      'Standard costing and variance analysis',
      'Budgetary control systems',
      'Uniform costing',
      'Activity-based costing'
    ],
    example: 'Marginal costing helps in decision making by analyzing the impact of changes in volume on profit.',
    formula: 'Break-even Point = Fixed Costs / (Selling Price per unit - Variable Cost per unit)'
  }
];

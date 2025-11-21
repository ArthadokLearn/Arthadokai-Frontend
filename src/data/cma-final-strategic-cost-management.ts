export interface Concept {
  id: string;
  title: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  description: string;
  keyPoints: string[];
  example: string;
  formula?: string;
}

export const cmaFinalStrategicCostManagementConcepts: Concept[] = [
  {
    id: 'cma-f-scm-1',
    title: 'Introduction to Strategic Cost Management',
    difficulty: 'advanced',
    description: 'Strategic cost management framework, value chain analysis, and competitive advantage.',
    keyPoints: [
      'Strategic cost management concepts',
      'Value chain analysis - Porter\'s model',
      'Cost leadership vs differentiation',
      'Target costing and kaizen costing',
      'Life cycle costing',
      'Strategic positioning'
    ],
    example: 'Value chain analysis identifies primary and support activities that create value for customers.',
  },
  {
    id: 'cma-f-scm-2',
    title: 'Quality Cost Management',
    difficulty: 'advanced',
    description: 'Quality costs, TQM, Six Sigma, and quality improvement methodologies.',
    keyPoints: [
      'Prevention, appraisal, internal and external failure costs',
      'Cost of Quality (COQ) reporting',
      'Total Quality Management (TQM)',
      'Six Sigma - DMAIC methodology',
      'Quality circles and continuous improvement',
      'ISO quality standards'
    ],
    example: 'Prevention costs (training, quality planning) are typically lower than failure costs (rework, warranty claims).',
    formula: 'Total Quality Cost = Prevention Costs + Appraisal Costs + Internal Failure + External Failure Costs'
  },
  {
    id: 'cma-f-scm-3',
    title: 'Decision-Making Techniques',
    difficulty: 'advanced',
    description: 'Advanced decision-making under certainty, risk, and uncertainty.',
    keyPoints: [
      'Decision theory and decision trees',
      'Expected value and expected opportunity loss',
      'Maximin, maximax, minimax regret criteria',
      'Value of perfect information',
      'Bayesian analysis',
      'Multi-criteria decision making'
    ],
    example: 'Decision tree helps visualize sequential decisions and their probable outcomes with associated probabilities.',
    formula: 'Expected Value = Σ (Probability × Outcome)'
  },
  {
    id: 'cma-f-scm-4',
    title: 'Activity Based Management (ABM) and Just-in-Time (JIT)',
    difficulty: 'advanced',
    description: 'ABM for process improvement and JIT production system.',
    keyPoints: [
      'Activity Based Management framework',
      'Value-added vs non-value-added activities',
      'Process improvement using ABM',
      'JIT philosophy and principles',
      'Kanban system',
      'JIT purchasing and production'
    ],
    example: 'JIT aims to produce the right product, at the right time, in the right quantity, eliminating waste.',
  },
  {
    id: 'cma-f-scm-5',
    title: 'Performance Evaluation',
    difficulty: 'advanced',
    description: 'Balanced scorecard, KPIs, and strategic performance measurement.',
    keyPoints: [
      'Balanced Scorecard - four perspectives',
      'Key Performance Indicators (KPIs)',
      'Performance prism',
      'Benchmarking techniques',
      'Strategy maps',
      'Non-financial performance measures'
    ],
    example: 'Balanced scorecard evaluates performance from financial, customer, internal process, and learning perspectives.',
  },
  {
    id: 'cma-f-scm-6',
    title: 'Linear Programming',
    difficulty: 'advanced',
    description: 'Formulation and solution of linear programming problems using graphical and simplex methods.',
    keyPoints: [
      'LP problem formulation',
      'Graphical method for 2-variable problems',
      'Simplex method',
      'Duality in LP',
      'Sensitivity analysis',
      'Applications in product mix and resource allocation'
    ],
    example: 'LP can optimize product mix to maximize contribution subject to resource constraints.',
    formula: 'Maximize/Minimize Z = c₁x₁ + c₂x₂ + ... + cₙxₙ subject to constraints'
  },
  {
    id: 'cma-f-scm-7',
    title: 'Transportation Problems',
    difficulty: 'advanced',
    description: 'Transportation model for cost minimization in distribution problems.',
    keyPoints: [
      'Transportation problem formulation',
      'Initial basic feasible solution - NWCM, LCM, VAM',
      'Optimality test - MODI method',
      'Degeneracy in transportation',
      'Unbalanced transportation problems',
      'Transshipment problems'
    ],
    example: 'Vogel\'s Approximation Method (VAM) often provides near-optimal initial solution.',
  },
  {
    id: 'cma-f-scm-8',
    title: 'Assignment Problems',
    difficulty: 'advanced',
    description: 'Hungarian method for optimal assignment of tasks to resources.',
    keyPoints: [
      'Assignment problem formulation',
      'Hungarian algorithm',
      'Maximization assignment problems',
      'Unbalanced assignments',
      'Multiple optimal solutions',
      'Traveling salesman problem'
    ],
    example: 'Assignment problem finds optimal one-to-one matching of tasks to workers minimizing total cost or time.',
  },
  {
    id: 'cma-f-scm-9',
    title: 'Simulation',
    difficulty: 'advanced',
    description: 'Monte Carlo simulation and business modeling techniques.',
    keyPoints: [
      'Simulation concepts and applications',
      'Monte Carlo simulation',
      'Random number generation',
      'Probability distributions in simulation',
      'Queuing models',
      'Risk analysis using simulation'
    ],
    example: 'Monte Carlo simulation uses random sampling to model complex systems and assess risk.',
  },
  {
    id: 'cma-f-scm-10',
    title: 'Network Analysis – PERT and CPM',
    difficulty: 'advanced',
    description: 'Project scheduling using PERT and CPM techniques.',
    keyPoints: [
      'Network diagram construction',
      'Critical path identification',
      'Project duration estimation',
      'Float calculations - total, free, independent',
      'Project crashing and time-cost trade-off',
      'Resource leveling'
    ],
    example: 'Critical path is the longest path determining minimum project completion time.',
    formula: 'PERT Expected Time = (Optimistic + 4×Most Likely + Pessimistic) / 6'
  },
  {
    id: 'cma-f-scm-11',
    title: 'Learning Curve',
    difficulty: 'advanced',
    description: 'Learning curve theory and its application in cost estimation.',
    keyPoints: [
      'Learning curve concept',
      'Cumulative average time model',
      'Incremental unit time model',
      'Learning rate determination',
      'Applications in pricing and budgeting',
      'Limitations of learning curve'
    ],
    example: 'With 80% learning curve, average time per unit reduces to 80% when cumulative production doubles.',
    formula: 'Yₙ = Y₁ × n^b where b = log(learning rate) / log(2)'
  },
  {
    id: 'cma-f-scm-12',
    title: 'Application of Maxima and Minima in Business Problems',
    difficulty: 'advanced',
    description: 'Calculus-based optimization for business decisions.',
    keyPoints: [
      'Differential calculus for optimization',
      'Profit maximization conditions',
      'Cost minimization',
      'Revenue optimization',
      'Economic order quantity derivation',
      'Constrained optimization - Lagrange multipliers'
    ],
    example: 'Profit is maximized when marginal revenue equals marginal cost (MR = MC).',
    formula: 'dπ/dx = 0 for profit maximization; d²π/dx² < 0 for maximum'
  },
  {
    id: 'cma-f-scm-13',
    title: 'Forecasting Models – Time Series and Regression Analysis',
    difficulty: 'advanced',
    description: 'Quantitative forecasting using time series and regression techniques.',
    keyPoints: [
      'Time series components - trend, seasonal, cyclical',
      'Moving averages and exponential smoothing',
      'Seasonal indices',
      'Simple and multiple regression',
      'Coefficient of determination (R²)',
      'Forecast accuracy measures'
    ],
    example: 'Exponential smoothing gives more weight to recent observations in forecasting.',
    formula: 'Forecast = α × Actual + (1 - α) × Previous Forecast'
  },
  {
    id: 'cma-f-scm-14',
    title: 'Introduction to Data Analytics Tools',
    difficulty: 'advanced',
    description: 'Big data analytics, business intelligence, and data-driven decision making.',
    keyPoints: [
      'Big data concepts - 5Vs',
      'Descriptive, predictive, and prescriptive analytics',
      'Data mining techniques',
      'Business intelligence tools',
      'Dashboard and visualization',
      'AI and machine learning in cost management'
    ],
    example: 'Predictive analytics uses historical data to forecast future costs and identify trends.',
  }
];

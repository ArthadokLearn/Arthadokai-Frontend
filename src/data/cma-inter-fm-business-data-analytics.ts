export interface Concept {
  id: string;
  title: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  description: string;
  keyPoints: string[];
  example: string;
  formula?: string;
}

export const cmaInterFMBusinessDataAnalyticsConcepts: Concept[] = [
  {
    id: 'cma-i-fmda-1',
    title: 'Fundamentals of Financial Management',
    difficulty: 'intermediate',
    description: 'Introduction to financial management, objectives, and financial decision making.',
    keyPoints: [
      'Scope and objectives of financial management',
      'Financial decisions - investment, financing, dividend',
      'Time value of money concepts',
      'Risk and return relationship',
      'Financial goals and wealth maximization'
    ],
    example: 'Financial management aims at wealth maximization rather than just profit maximization.',
    formula: 'Future Value = Present Value × (1 + r)^n'
  },
  {
    id: 'cma-i-fmda-2',
    title: 'Institutions and Instruments in Financial Markets',
    difficulty: 'intermediate',
    description: 'Understanding financial markets, institutions, and various financial instruments.',
    keyPoints: [
      'Money market and capital market',
      'Financial institutions - RBI, SEBI, banks',
      'Equity and debt instruments',
      'Mutual funds and ETFs',
      'Derivatives - futures and options'
    ],
    example: 'Money market deals in short-term instruments like T-bills, CPs, while capital market deals in long-term instruments like equity and bonds.',
  },
  {
    id: 'cma-i-fmda-3',
    title: 'Tools for Financial Analysis',
    difficulty: 'intermediate',
    description: 'Financial statement analysis using ratio analysis, trend analysis, and common-size statements.',
    keyPoints: [
      'Ratio analysis - liquidity, profitability, solvency',
      'Comparative statements',
      'Common-size statements',
      'Trend analysis',
      'DuPont analysis'
    ],
    example: 'Current ratio measures short-term liquidity by comparing current assets with current liabilities.',
    formula: 'Current Ratio = Current Assets / Current Liabilities'
  },
  {
    id: 'cma-i-fmda-4',
    title: 'Sources of Finance and Cost of Capital',
    difficulty: 'intermediate',
    description: 'Various sources of finance and calculation of cost of different sources of capital.',
    keyPoints: [
      'Sources of finance - equity, debt, retained earnings',
      'Cost of equity - dividend growth model, CAPM',
      'Cost of debt and preference shares',
      'Weighted average cost of capital (WACC)',
      'Marginal cost of capital'
    ],
    example: 'WACC is the average cost of all sources of finance weighted by their proportion in capital structure.',
    formula: 'WACC = (We × Ke) + (Wd × Kd × (1-T)) + (Wp × Kp)'
  },
  {
    id: 'cma-i-fmda-5',
    title: 'Capital Budgeting',
    difficulty: 'intermediate',
    description: 'Investment decision making using NPV, IRR, payback period, and other capital budgeting techniques.',
    keyPoints: [
      'Capital budgeting process',
      'Net Present Value (NPV)',
      'Internal Rate of Return (IRR)',
      'Payback period and discounted payback',
      'Profitability index'
    ],
    example: 'NPV method discounts all cash flows to present value and accepts projects with positive NPV.',
    formula: 'NPV = Σ [Cash Flow / (1 + r)^t] - Initial Investment'
  },
  {
    id: 'cma-i-fmda-6',
    title: 'Working Capital Management',
    difficulty: 'intermediate',
    description: 'Management of current assets and current liabilities for optimal liquidity and profitability.',
    keyPoints: [
      'Working capital concepts',
      'Operating cycle and cash cycle',
      'Inventory management',
      'Receivables management',
      'Cash and marketable securities management'
    ],
    example: 'Operating cycle is the time period between purchase of inventory and collection from debtors.',
    formula: 'Working Capital = Current Assets - Current Liabilities'
  },
  {
    id: 'cma-i-fmda-7',
    title: 'Financing Decisions of a Firm',
    difficulty: 'intermediate',
    description: 'Capital structure decisions, leverage analysis, and financing strategies.',
    keyPoints: [
      'Capital structure theories',
      'Operating and financial leverage',
      'EBIT-EPS analysis',
      'Optimal capital structure',
      'Factors affecting capital structure'
    ],
    example: 'Financial leverage magnifies the effect of changes in EBIT on EPS.',
    formula: 'Financial Leverage = EBIT / (EBIT - Interest)'
  },
  {
    id: 'cma-i-fmda-8',
    title: 'Introduction to Data Science for Business Decision Making',
    difficulty: 'intermediate',
    description: 'Fundamentals of data science, big data, and its applications in business.',
    keyPoints: [
      'Data science concepts',
      'Big data - volume, velocity, variety',
      'Data-driven decision making',
      'Business analytics applications',
      'Predictive and prescriptive analytics'
    ],
    example: 'Data science helps businesses predict customer behavior, optimize operations, and improve decision making.',
  },
  {
    id: 'cma-i-fmda-9',
    title: 'Data Processing, Organisation, Cleaning and Validation',
    difficulty: 'intermediate',
    description: 'Techniques for data collection, cleaning, transformation, and validation.',
    keyPoints: [
      'Data collection methods',
      'Data cleaning and preprocessing',
      'Handling missing values',
      'Data transformation techniques',
      'Data validation and quality checks'
    ],
    example: 'Data cleaning involves removing duplicates, handling missing values, and correcting errors in the dataset.',
  },
  {
    id: 'cma-i-fmda-10',
    title: 'Data Presentation – Visualisation and Graphical Presentation',
    difficulty: 'intermediate',
    description: 'Visual representation of data using charts, graphs, and dashboards.',
    keyPoints: [
      'Types of charts - bar, line, pie, scatter',
      'Dashboard design principles',
      'Data visualization tools',
      'Effective storytelling with data',
      'Interactive visualizations'
    ],
    example: 'Line charts are best for showing trends over time, while bar charts are ideal for comparing categories.',
  },
  {
    id: 'cma-i-fmda-11',
    title: 'Data Analysis and Modelling',
    difficulty: 'intermediate',
    description: 'Statistical analysis, regression models, and predictive modeling techniques.',
    keyPoints: [
      'Descriptive statistics',
      'Correlation and regression analysis',
      'Time series analysis',
      'Forecasting methods',
      'Model validation and evaluation'
    ],
    example: 'Regression analysis helps in understanding the relationship between dependent and independent variables.',
    formula: 'Linear Regression: Y = a + bX'
  }
];

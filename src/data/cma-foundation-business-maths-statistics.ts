export interface Concept {
  id: string;
  title: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  description: string;
  keyPoints: string[];
  example: string;
  formula?: string;
}

export const cmaFoundationBusinessMathsStatisticsConcepts: Concept[] = [
  {
    id: 'cma-f-bms-1',
    title: 'Arithmetic',
    difficulty: 'beginner',
    description: 'Basic arithmetic operations, percentages, profit and loss, simple and compound interest.',
    keyPoints: [
      'Percentage calculations',
      'Profit and loss problems',
      'Simple interest and compound interest',
      'Ratio and proportion',
      'Averages and mixtures'
    ],
    example: 'If a product is sold at ₹1,200 after a 20% profit, the cost price was ₹1,000.',
    formula: 'Simple Interest = (P × R × T) / 100; Compound Interest = P(1 + R/100)^T - P'
  },
  {
    id: 'cma-f-bms-2',
    title: 'Algebra',
    difficulty: 'beginner',
    description: 'Algebraic expressions, equations, inequalities, and their applications.',
    keyPoints: [
      'Linear equations and inequalities',
      'Quadratic equations',
      'Simultaneous equations',
      'Algebraic identities',
      'Factorization methods'
    ],
    example: 'Solve: 2x + 5 = 15; Solution: x = 5',
    formula: 'Quadratic Formula: x = [-b ± √(b² - 4ac)] / 2a'
  },
  {
    id: 'cma-f-bms-3',
    title: 'Calculus—Business Applications',
    difficulty: 'intermediate',
    description: 'Differentiation and integration with applications in business and economics.',
    keyPoints: [
      'Limits and continuity',
      'Differentiation rules',
      'Maxima and minima',
      'Marginal cost and marginal revenue',
      'Integration basics'
    ],
    example: 'To find maximum profit, differentiate the profit function and set it equal to zero.',
    formula: 'Marginal Cost = dC/dx; Marginal Revenue = dR/dx'
  },
  {
    id: 'cma-f-bms-4',
    title: 'Mathematics of Finance',
    difficulty: 'intermediate',
    description: 'Time value of money, annuities, loans, and investment analysis.',
    keyPoints: [
      'Present value and future value',
      'Annuities - ordinary and due',
      'EMI calculations',
      'Sinking funds',
      'Bond valuation'
    ],
    example: 'The present value of ₹10,000 to be received after 3 years at 10% p.a. is ₹7,513.',
    formula: 'PV = FV / (1 + r)^n; FV = PV × (1 + r)^n'
  },
  {
    id: 'cma-f-bms-5',
    title: 'Statistical Representation of Data',
    difficulty: 'beginner',
    description: 'Collection, classification, and presentation of statistical data using tables and graphs.',
    keyPoints: [
      'Data collection methods',
      'Classification and tabulation',
      'Frequency distribution',
      'Bar charts, pie charts, histograms',
      'Ogives and frequency polygons'
    ],
    example: 'A histogram is used to represent frequency distribution of continuous data.',
  },
  {
    id: 'cma-f-bms-6',
    title: 'Measures of Central Tendency & Dispersion',
    difficulty: 'beginner',
    description: 'Mean, median, mode, range, variance, and standard deviation.',
    keyPoints: [
      'Arithmetic mean, median, mode',
      'Weighted average',
      'Range and quartile deviation',
      'Variance and standard deviation',
      'Coefficient of variation'
    ],
    example: 'For data: 2, 4, 6, 8, 10; Mean = 6, Median = 6, Mode = No mode',
    formula: 'Mean = Σx/n; Variance = Σ(x - mean)²/n; SD = √Variance'
  },
  {
    id: 'cma-f-bms-7',
    title: 'Correlation & Regression',
    difficulty: 'intermediate',
    description: 'Measuring the relationship between two variables using correlation and regression analysis.',
    keyPoints: [
      'Correlation coefficient',
      'Positive and negative correlation',
      'Scatter diagrams',
      'Regression equations',
      'Least squares method'
    ],
    example: 'A correlation coefficient of +0.9 indicates a strong positive relationship between two variables.',
    formula: 'r = [nΣxy - ΣxΣy] / √[(nΣx² - (Σx)²)(nΣy² - (Σy)²)]'
  },
  {
    id: 'cma-f-bms-8',
    title: 'Probability',
    difficulty: 'intermediate',
    description: 'Basic probability concepts, rules, and applications.',
    keyPoints: [
      'Random experiments and events',
      'Addition and multiplication rules',
      'Conditional probability',
      'Bayes theorem',
      'Independent and dependent events'
    ],
    example: 'The probability of getting a head when tossing a fair coin is 1/2 or 0.5.',
    formula: 'P(A) = Number of favorable outcomes / Total number of outcomes'
  },
  {
    id: 'cma-f-bms-9',
    title: 'Index Numbers & Time Series',
    difficulty: 'intermediate',
    description: 'Construction and interpretation of index numbers and time series analysis.',
    keyPoints: [
      'Index numbers - purpose and types',
      'Laspeyres and Paasche indices',
      'Cost of living index',
      'Time series components',
      'Trend analysis and moving averages'
    ],
    example: 'Consumer Price Index (CPI) measures changes in the price level of a basket of consumer goods and services.',
    formula: 'Laspeyres Index = (Σp₁q₀ / Σp₀q₀) × 100; Paasche Index = (Σp₁q₁ / Σp₀q₁) × 100'
  }
];

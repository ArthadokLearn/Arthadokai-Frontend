export interface Concept {
  id: string;
  title: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  description: string;
  keyPoints: string[];
  example: string;
  formula?: string;
}

export const csFoundationBusinessEconomicsConcepts: Concept[] = [
  {
    id: 'cs-f-be-1',
    title: 'The Fundamentals of Economics',
    difficulty: 'beginner',
    description: 'Basic economic concepts, scarcity, choice, and economic systems.',
    keyPoints: [
      'Definition and scope of economics',
      'Scarcity and choice',
      'Opportunity cost',
      'Production possibility curve',
      'Economic systems - capitalist, socialist, mixed',
      'Micro and macro economics'
    ],
    example: 'Opportunity cost is the value of the next best alternative foregone when making a choice.',
    formula: 'Opportunity Cost = Return of Best Foregone Alternative'
  },
  {
    id: 'cs-f-be-2',
    title: 'Basic Elements of Demand and Supply',
    difficulty: 'beginner',
    description: 'Laws of demand and supply, market equilibrium, and price determination.',
    keyPoints: [
      'Law of demand and demand curve',
      'Determinants of demand',
      'Law of supply and supply curve',
      'Determinants of supply',
      'Market equilibrium',
      'Elasticity of demand and supply'
    ],
    example: 'When price increases, quantity demanded decreases (law of demand), while quantity supplied increases (law of supply).',
    formula: 'Price Elasticity of Demand = % Change in Quantity Demanded / % Change in Price'
  },
  {
    id: 'cs-f-be-3',
    title: 'Theory of Consumer Behaviour',
    difficulty: 'beginner',
    description: 'Utility analysis, indifference curve analysis, and consumer equilibrium.',
    keyPoints: [
      'Concept of utility - total and marginal',
      'Law of diminishing marginal utility',
      'Consumer equilibrium - cardinal approach',
      'Indifference curve analysis',
      'Budget line and consumer equilibrium',
      'Income and substitution effects'
    ],
    example: 'Consumer equilibrium occurs when the marginal utility per rupee spent is equal for all goods consumed.',
    formula: 'Consumer Equilibrium: MUx/Px = MUy/Py = MUz/Pz'
  },
  {
    id: 'cs-f-be-4',
    title: 'Theory of Production and Costs',
    difficulty: 'beginner',
    description: 'Production function, factors of production, and cost concepts.',
    keyPoints: [
      'Production function',
      'Law of variable proportions',
      'Returns to scale',
      'Isoquants and isocosts',
      'Cost concepts - fixed, variable, total, average, marginal',
      'Short-run and long-run costs'
    ],
    example: 'Law of variable proportions states that as more of a variable input is added to fixed inputs, marginal product initially increases, then decreases.',
    formula: 'Marginal Product = Change in Total Product / Change in Variable Input'
  },
  {
    id: 'cs-f-be-5',
    title: 'Analysis of Markets',
    difficulty: 'beginner',
    description: 'Market structures including perfect competition, monopoly, and oligopoly.',
    keyPoints: [
      'Perfect competition - characteristics and equilibrium',
      'Monopoly market structure',
      'Monopolistic competition',
      'Oligopoly and price rigidity',
      'Price discrimination',
      'Market power and efficiency'
    ],
    example: 'In perfect competition, firms are price takers with no market power, while in monopoly, a single firm controls the market.',
  },
  {
    id: 'cs-f-be-6',
    title: 'Indian Economy – An Overview',
    difficulty: 'beginner',
    description: 'Structure of Indian economy, sectors, and economic development.',
    keyPoints: [
      'Characteristics of Indian economy',
      'Primary, secondary, and tertiary sectors',
      'Economic planning in India',
      'Economic reforms and liberalization',
      'Growth and development indicators',
      'Challenges - poverty, unemployment, inequality'
    ],
    example: 'Indian economy has transformed from a predominantly agricultural economy to a service-dominated economy.',
  },
  {
    id: 'cs-f-be-7',
    title: 'Basic Elements of Money and Banking',
    difficulty: 'beginner',
    description: 'Functions of money, banking system, and monetary policy.',
    keyPoints: [
      'Functions of money',
      'Types of money',
      'Commercial banks and their functions',
      'Credit creation by banks',
      'Central bank - RBI functions',
      'Monetary policy instruments'
    ],
    example: 'Money serves as a medium of exchange, unit of account, store of value, and standard of deferred payment.',
    formula: 'Money Multiplier = 1 / Reserve Ratio'
  },
  {
    id: 'cs-f-be-8',
    title: 'Descriptive Statistics',
    difficulty: 'beginner',
    description: 'Data collection, presentation, measures of central tendency and dispersion.',
    keyPoints: [
      'Data collection methods',
      'Classification and tabulation',
      'Graphical presentation - bar, pie, histogram',
      'Measures of central tendency - mean, median, mode',
      'Measures of dispersion - range, variance, standard deviation',
      'Correlation and regression basics'
    ],
    example: 'Mean is calculated by dividing the sum of all values by the number of values.',
    formula: 'Mean = Σx / n; Standard Deviation = √[Σ(x - mean)² / n]'
  },
  {
    id: 'cs-f-be-9',
    title: 'Mathematics of Finance and Elementary Probability',
    difficulty: 'beginner',
    description: 'Time value of money, annuities, probability concepts, and applications.',
    keyPoints: [
      'Simple and compound interest',
      'Present value and future value',
      'Annuities - ordinary and due',
      'Loan amortization',
      'Probability concepts and rules',
      'Expected value and decision-making'
    ],
    example: 'Present value calculates today\'s value of a future amount considering the time value of money.',
    formula: 'Compound Interest: A = P(1 + r/n)^(nt); Present Value: PV = FV / (1 + r)^n'
  }
];

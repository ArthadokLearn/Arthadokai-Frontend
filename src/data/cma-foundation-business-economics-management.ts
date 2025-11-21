export interface Concept {
  id: string;
  title: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  description: string;
  keyPoints: string[];
  example: string;
  formula?: string;
}

export const cmaFoundationBusinessEconomicsManagementConcepts: Concept[] = [
  {
    id: 'cma-f-bem-1',
    title: 'Basic Concepts',
    difficulty: 'beginner',
    description: 'Fundamental concepts of economics including scarcity, choice, and opportunity cost.',
    keyPoints: [
      'Definition and scope of economics',
      'Microeconomics vs macroeconomics',
      'Scarcity and choice',
      'Opportunity cost',
      'Production possibility frontier'
    ],
    example: 'If a farmer uses land to grow wheat instead of rice, the opportunity cost is the rice that could have been produced.',
  },
  {
    id: 'cma-f-bem-2',
    title: 'Forms of Market',
    difficulty: 'beginner',
    description: 'Different market structures: perfect competition, monopoly, monopolistic competition, and oligopoly.',
    keyPoints: [
      'Perfect competition characteristics',
      'Monopoly and price discrimination',
      'Monopolistic competition',
      'Oligopoly and game theory',
      'Price determination in different markets'
    ],
    example: 'In a monopoly market, a single seller controls the entire supply and can influence prices.',
  },
  {
    id: 'cma-f-bem-3',
    title: 'Money & Banking',
    difficulty: 'beginner',
    description: 'Functions of money, banking system, and central bank operations.',
    keyPoints: [
      'Functions of money',
      'Types of money supply (M1, M2, M3, M4)',
      'Commercial banks and their functions',
      'Central bank and monetary policy',
      'Credit creation by banks'
    ],
    example: 'The Reserve Bank of India (RBI) uses repo rate, reverse repo rate, and CRR to control money supply in the economy.',
    formula: 'Money Multiplier = 1 / Cash Reserve Ratio'
  },
  {
    id: 'cma-f-bem-4',
    title: 'Economic & Business Environment',
    difficulty: 'intermediate',
    description: 'Understanding the economic and business environment, GDP, inflation, and economic policies.',
    keyPoints: [
      'National income concepts',
      'GDP, GNP, and NNP',
      'Inflation and its types',
      'Fiscal and monetary policy',
      'Business cycles'
    ],
    example: 'GDP measures the total value of all goods and services produced within a country in a specific period.',
    formula: 'GDP = C + I + G + (X - M) where C=Consumption, I=Investment, G=Government Spending, X=Exports, M=Imports'
  },
  {
    id: 'cma-f-bem-5',
    title: 'Fundamentals of Management',
    difficulty: 'beginner',
    description: 'Basic principles of management including planning, organizing, staffing, directing, and controlling.',
    keyPoints: [
      'Management functions: POSDCORB',
      'Planning and decision making',
      'Organizing and organizational structure',
      'Leadership and motivation',
      'Controlling and performance evaluation'
    ],
    example: 'Henri Fayol identified 14 principles of management including division of work, authority and responsibility, and unity of command.',
  }
];

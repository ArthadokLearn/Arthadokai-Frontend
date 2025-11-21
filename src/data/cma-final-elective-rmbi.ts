export interface Concept {
  id: string;
  title: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  description: string;
  keyPoints: string[];
  example: string;
  formula?: string;
}

export const cmaFinalElectiveRMBIConcepts: Concept[] = [
  {
    id: 'cma-f-rmbi-1',
    title: 'Introduction to Risk Management',
    difficulty: 'advanced',
    description: 'Risk management framework, types of risks, and risk management process.',
    keyPoints: [
      'Risk concepts and definitions',
      'Types of financial risks',
      'Risk management process',
      'Risk appetite and tolerance',
      'Enterprise risk management',
      'Basel framework for risk management'
    ],
    example: 'Risk management involves identifying, assessing, and mitigating risks to protect organizational value.',
  },
  {
    id: 'cma-f-rmbi-2',
    title: 'Interest Rate Risk and Market Risk',
    difficulty: 'advanced',
    description: 'Management of interest rate risk and market price fluctuations.',
    keyPoints: [
      'Interest rate risk - repricing and yield curve risk',
      'Duration and convexity',
      'Immunization strategies',
      'Market risk - equity and commodity',
      'Value at Risk (VaR)',
      'Stress testing and scenario analysis'
    ],
    example: 'Duration measures sensitivity of bond price to interest rate changes.',
    formula: 'Modified Duration = Macaulay Duration / (1 + YTM); Price Change % ≈ -Modified Duration × Δi'
  },
  {
    id: 'cma-f-rmbi-3',
    title: 'Credit and Liquidity Risk',
    difficulty: 'advanced',
    description: 'Credit risk assessment, rating, and liquidity risk management.',
    keyPoints: [
      'Credit risk measurement',
      'Credit rating and scoring',
      'Expected and unexpected loss',
      'Credit derivatives',
      'Liquidity risk - funding and market liquidity',
      'Liquidity coverage ratio (LCR)'
    ],
    example: 'Credit risk is the risk of loss arising from borrower\'s failure to repay loan or meet contractual obligations.',
    formula: 'Expected Loss = Probability of Default × Exposure at Default × Loss Given Default'
  },
  {
    id: 'cma-f-rmbi-4',
    title: 'Sovereign Risk and Insolvency Risk',
    difficulty: 'advanced',
    description: 'Country risk analysis and corporate insolvency risk assessment.',
    keyPoints: [
      'Sovereign risk assessment',
      'Country risk ratings',
      'Transfer and convertibility risk',
      'Political risk',
      'Corporate insolvency prediction - Altman Z-score',
      'Restructuring and recovery'
    ],
    example: 'Sovereign risk arises from actions of foreign government that may affect loan repayment or investment value.',
    formula: 'Altman Z-Score = 1.2(WC/TA) + 1.4(RE/TA) + 3.3(EBIT/TA) + 0.6(MVE/TL) + 1.0(Sales/TA)'
  },
  {
    id: 'cma-f-rmbi-5',
    title: 'Operational and Off-Balance-Sheet Risk',
    difficulty: 'advanced',
    description: 'Management of operational risks and contingent liabilities.',
    keyPoints: [
      'Operational risk - people, process, systems',
      'Internal fraud and external fraud',
      'Business disruption risks',
      'Off-balance sheet exposures',
      'Contingent liabilities',
      'Operational risk measurement - Basic Indicator, Standardized, AMA'
    ],
    example: 'Operational risk includes losses from inadequate internal processes, human errors, system failures, or external events.',
  },
  {
    id: 'cma-f-rmbi-6',
    title: 'Overview of Insurance Business',
    difficulty: 'advanced',
    description: 'Insurance industry structure, products, and regulatory framework.',
    keyPoints: [
      'Insurance principles - utmost good faith, insurable interest',
      'Life insurance vs general insurance',
      'Reinsurance and coinsurance',
      'IRDAI regulations',
      'Solvency requirements',
      'Distribution channels'
    ],
    example: 'Insurance transfers risk from individual/entity (insured) to insurance company (insurer) for a premium.',
  },
  {
    id: 'cma-f-rmbi-7',
    title: 'Intermediaries in Insurance',
    difficulty: 'advanced',
    description: 'Insurance intermediaries including agents, brokers, surveyors, and TPAs.',
    keyPoints: [
      'Insurance agents and brokers',
      'Corporate agents',
      'Surveyors and loss assessors',
      'Third-Party Administrators (TPA)',
      'Insurance repositories',
      'Regulations for intermediaries'
    ],
    example: 'Insurance brokers act on behalf of buyers and help them choose appropriate insurance products from various insurers.',
  },
  {
    id: 'cma-f-rmbi-8',
    title: 'Managing Risk in Insurance',
    difficulty: 'advanced',
    description: 'Risk management in insurance companies including underwriting and claims.',
    keyPoints: [
      'Underwriting process',
      'Risk selection and classification',
      'Premium calculation',
      'Claims management',
      'Reserve calculations',
      'Catastrophe risk management'
    ],
    example: 'Underwriting evaluates risk and determines premium based on probability and severity of potential loss.',
  }
];

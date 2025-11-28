// CA Final Paper-4: Direct Tax Laws & International Taxation - Chapter Titles

interface Concept {
  id: string;
  title: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  description: string;
  keyPoints: string[];
  example: string;
  formula?: string;
  questions?: QuestionAnswer[];
}

export interface QuestionAnswer {
  id: string;
  question: string;
  answer: string;
  howToApproach: string;
  conceptExplanation: string;
}

export const caFinalLawConcepts: Concept[] = [
  {
    id: 'ch1-basic-concepts',
    title: 'Chapter 1: Basic Concepts',
    difficulty: 'advanced',
    description: 'Content to be added',
    keyPoints: ['Content to be added'],
    example: 'Content to be added',
    questions: [
      {
        id: 'q1',
        question: 'Explain the concept of "Residential Status" under the Income Tax Act and its significance in determining tax liability.',
        answer: 'Residential status determines the scope of total income that is taxable in India. An individual can be classified as Resident and Ordinarily Resident (ROR), Resident but Not Ordinarily Resident (RNOR), or Non-Resident (NR). ROR individuals are taxed on worldwide income, RNOR on Indian income plus foreign income from business/profession controlled from India, and NR only on income received/deemed to be received in India or accruing/arising in India.',
        howToApproach: 'Start by explaining why residential status matters, then define the three categories. Discuss the conditions for each status (physical presence tests), and conclude with the scope of taxable income for each category with examples.',
        conceptExplanation: 'Residential status is fundamental to determining tax liability. The Income Tax Act follows the residence-based taxation system, where the extent of tax liability depends on how closely connected the taxpayer is to India during the previous year.'
      },
      {
        id: 'q2',
        question: 'Distinguish between "Income deemed to accrue or arise in India" and "Income deemed to be received in India".',
        answer: 'Income deemed to accrue or arise in India includes salary for services rendered in India, income from business controlled from India, dividend from Indian companies, income from assets/property in India, etc. Income deemed to be received in India includes any sum payable by government to a non-resident, dividends paid by Indian companies outside India, salary earned by Indian citizens working abroad on Indian ships, etc. The distinction is crucial as it affects when and where tax liability arises.',
        howToApproach: 'Define both concepts separately, list the specific incomes covered under each category as per Sections 9 and 5(2), explain with examples, and highlight the practical implications for tax computation.',
        conceptExplanation: 'These deeming provisions expand the tax net beyond actual accrual or receipt in India. They ensure that certain incomes with a substantial connection to India are taxed here regardless of where they physically accrue or are received.'
      }
    ]
  },
  {
    id: 'ch2-exempt-income',
    title: 'Chapter 2: Income not forming part of Total Income',
    difficulty: 'advanced',
    description: 'Content to be added',
    keyPoints: ['Content to be added'],
    example: 'Content to be added'
  },
  {
    id: 'ch3-business-profession',
    title: 'Chapter 3: Profits and Gains of Business or Profession',
    difficulty: 'advanced',
    description: 'Content to be added',
    keyPoints: ['Content to be added'],
    example: 'Content to be added'
  },
  {
    id: 'ch4-capital-gains',
    title: 'Chapter 4: Capital Gains',
    difficulty: 'advanced',
    description: 'Content to be added',
    keyPoints: ['Content to be added'],
    example: 'Content to be added'
  },
  {
    id: 'ch5-other-sources',
    title: 'Chapter 5: Income from Other Sources',
    difficulty: 'advanced',
    description: 'Content to be added',
    keyPoints: ['Content to be added'],
    example: 'Content to be added'
  },
  {
    id: 'ch6-clubbing',
    title: 'Chapter 6: Income of Other Persons included in Assessee\'s Total Income',
    difficulty: 'advanced',
    description: 'Content to be added',
    keyPoints: ['Content to be added'],
    example: 'Content to be added'
  },
  {
    id: 'ch7-aggregation',
    title: 'Chapter 7: Aggregation of Income, Set-off and Carry forward of Losses',
    difficulty: 'advanced',
    description: 'Content to be added',
    keyPoints: ['Content to be added'],
    example: 'Content to be added'
  },
  {
    id: 'ch8-deductions',
    title: 'Chapter 8: Deductions from Gross Total Income',
    difficulty: 'advanced',
    description: 'Content to be added',
    keyPoints: ['Content to be added'],
    example: 'Content to be added'
  },
  {
    id: 'ch9-various-entities',
    title: 'Chapter 9: Assessment of Various Entities',
    difficulty: 'advanced',
    description: 'Content to be added',
    keyPoints: ['Content to be added'],
    example: 'Content to be added'
  },
  {
    id: 'ch10-trusts-institutions',
    title: 'Chapter 10: Assessment of Trusts, Institutions, Political Parties and Special Entities',
    difficulty: 'advanced',
    description: 'Content to be added',
    keyPoints: ['Content to be added'],
    example: 'Content to be added'
  },
  {
    id: 'ch11-tax-planning',
    title: 'Chapter 11: Tax Planning, Avoidance and Evasion',
    difficulty: 'advanced',
    description: 'Content to be added',
    keyPoints: ['Content to be added'],
    example: 'Content to be added'
  },
  {
    id: 'ch12-digital-transactions',
    title: 'Chapter 12: Taxation of Digital Transactions',
    difficulty: 'advanced',
    description: 'Content to be added',
    keyPoints: ['Content to be added'],
    example: 'Content to be added'
  },
  {
    id: 'ch13-tds-tcs',
    title: 'Chapter 13: Deduction, Collection and Recovery of Tax',
    difficulty: 'advanced',
    description: 'Content to be added',
    keyPoints: ['Content to be added'],
    example: 'Content to be added'
  },
  {
    id: 'ch14-authorities',
    title: 'Chapter 14: Income Tax Authorities',
    difficulty: 'advanced',
    description: 'Content to be added',
    keyPoints: ['Content to be added'],
    example: 'Content to be added'
  },
  {
    id: 'ch15-assessment-procedure',
    title: 'Chapter 15: Assessment Procedure',
    difficulty: 'advanced',
    description: 'Content to be added',
    keyPoints: ['Content to be added'],
    example: 'Content to be added'
  },
  {
    id: 'ch16-appeals-revision',
    title: 'Chapter 16: Appeals and Revision',
    difficulty: 'advanced',
    description: 'Content to be added',
    keyPoints: ['Content to be added'],
    example: 'Content to be added'
  },
  {
    id: 'ch17-dispute-resolution',
    title: 'Chapter 17: Dispute Resolution',
    difficulty: 'advanced',
    description: 'Content to be added',
    keyPoints: ['Content to be added'],
    example: 'Content to be added'
  },
  {
    id: 'ch18-miscellaneous',
    title: 'Chapter 18: Miscellaneous Provisions',
    difficulty: 'advanced',
    description: 'Content to be added',
    keyPoints: ['Content to be added'],
    example: 'Content to be added'
  },
  {
    id: 'ch19-unethical-practices',
    title: 'Chapter 19: Provisions to Counteract Unethical Tax Practices',
    difficulty: 'advanced',
    description: 'Content to be added',
    keyPoints: ['Content to be added'],
    example: 'Content to be added'
  },
  {
    id: 'ch20-tax-audit',
    title: 'Chapter 20: Tax Audit and Ethical Compliance',
    difficulty: 'advanced',
    description: 'Content to be added',
    keyPoints: ['Content to be added'],
    example: 'Content to be added'
  },
  {
    id: 'ch21-non-resident',
    title: 'Chapter 21: Non-Resident Taxation',
    difficulty: 'advanced',
    description: 'Content to be added',
    keyPoints: ['Content to be added'],
    example: 'Content to be added'
  },
  {
    id: 'ch22-double-taxation',
    title: 'Chapter 22: Double Taxation Relief',
    difficulty: 'advanced',
    description: 'Content to be added',
    keyPoints: ['Content to be added'],
    example: 'Content to be added'
  },
  {
    id: 'ch23-advance-rulings',
    title: 'Chapter 23: Advance Rulings',
    difficulty: 'advanced',
    description: 'Content to be added',
    keyPoints: ['Content to be added'],
    example: 'Content to be added'
  },
  {
    id: 'ch24-transfer-pricing',
    title: 'Chapter 24: Transfer Pricing',
    difficulty: 'advanced',
    description: 'Content to be added',
    keyPoints: ['Content to be added'],
    example: 'Content to be added'
  },
  {
    id: 'ch25-beps',
    title: 'Chapter 25: Fundamentals of BEPS',
    difficulty: 'advanced',
    description: 'Content to be added',
    keyPoints: ['Content to be added'],
    example: 'Content to be added'
  },
  {
    id: 'ch26-tax-treaties',
    title: 'Chapter 26: Interpretation of Tax Treaties',
    difficulty: 'advanced',
    description: 'Content to be added',
    keyPoints: ['Content to be added'],
    example: 'Content to be added'
  },
  {
    id: 'ch27-model-conventions',
    title: 'Chapter 27: Overview of Model Tax Conventions',
    difficulty: 'advanced',
    description: 'Content to be added',
    keyPoints: ['Content to be added'],
    example: 'Content to be added'
  },
  {
    id: 'ch28-latest-developments',
    title: 'Chapter 28: Latest Developments in International Taxation',
    difficulty: 'advanced',
    description: 'Content to be added',
    keyPoints: ['Content to be added'],
    example: 'Content to be added'
  }
];

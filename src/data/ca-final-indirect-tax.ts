// CA Final Paper-5: Indirect Tax Laws - Chapter Titles

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

export const caFinalIndirectTaxConcepts: Concept[] = [
  {
    id: 'ch1-supply',
    title: 'Chapter 1: Supply under GST',
    difficulty: 'advanced',
    description: 'Content to be added',
    keyPoints: ['Content to be added'],
    example: 'Content to be added',
    questions: [
      {
        id: 'q1',
        question: 'Define "Supply" under GST and explain its significance.',
        answer: 'Supply is the taxable event under GST. Section 7 of CGST Act defines supply to include all forms of supply of goods or services such as sale, transfer, barter, exchange, license, rental, lease or disposal made or agreed to be made for a consideration by a person in the course or furtherance of business. The definition also includes supplies specified in Schedule I (without consideration), Schedule II (goods or services), and Schedule III (excluded from supply).',
        howToApproach: 'Start with the statutory definition from Section 7, explain the essential elements (goods/services, for consideration, in the course of business), discuss deemed supplies and activities excluded from supply. Use examples for clarity.',
        conceptExplanation: 'Supply is the broadest taxable event under GST, replacing previous concepts like manufacture and sale. Understanding what constitutes supply is crucial as GST is levied on all supplies except those specifically excluded.'
      },
      {
        id: 'q2',
        question: 'Explain the concept of "Composite Supply" and "Mixed Supply" under GST with examples.',
        answer: 'Composite Supply is a supply consisting of two or more taxable supplies naturally bundled and supplied in conjunction with each other in the ordinary course of business, one being the principal supply (e.g., restaurant meal with food and service). Mixed Supply is a supply of two or more individual supplies not naturally bundled, supplied together for a single price (e.g., gift hamper). Composite supply is taxed at the rate of principal supply, while mixed supply is taxed at the highest rate applicable to any of the supplies.',
        howToApproach: 'Define both concepts separately, highlight key differences (natural bundling vs artificial bundling), explain tax treatment for each, and provide practical examples. Discuss the importance of classification for correct tax determination.',
        conceptExplanation: 'The distinction between composite and mixed supply is critical for determining applicable GST rates. Misclassification can lead to incorrect tax payment and potential disputes with authorities.'
      }
    ]
  },
  {
    id: 'ch2-charge',
    title: 'Chapter 2: Charge of GST',
    difficulty: 'advanced',
    description: 'Content to be added',
    keyPoints: ['Content to be added'],
    example: 'Content to be added'
  },
  {
    id: 'ch3-place-of-supply',
    title: 'Chapter 3: Place of Supply',
    difficulty: 'advanced',
    description: 'Content to be added',
    keyPoints: ['Content to be added'],
    example: 'Content to be added'
  },
  {
    id: 'ch4-exemptions',
    title: 'Chapter 4: Exemptions from GST',
    difficulty: 'advanced',
    description: 'Content to be added',
    keyPoints: ['Content to be added'],
    example: 'Content to be added'
  },
  {
    id: 'ch5-time-of-supply',
    title: 'Chapter 5: Time of Supply',
    difficulty: 'advanced',
    description: 'Content to be added',
    keyPoints: ['Content to be added'],
    example: 'Content to be added'
  },
  {
    id: 'ch6-value-of-supply',
    title: 'Chapter 6: Value of Supply',
    difficulty: 'advanced',
    description: 'Content to be added',
    keyPoints: ['Content to be added'],
    example: 'Content to be added'
  },
  {
    id: 'ch7-itc',
    title: 'Chapter 7: Input Tax Credit',
    difficulty: 'advanced',
    description: 'Content to be added',
    keyPoints: ['Content to be added'],
    example: 'Content to be added'
  },
  {
    id: 'ch8-registration',
    title: 'Chapter 8: Registration',
    difficulty: 'advanced',
    description: 'Content to be added',
    keyPoints: ['Content to be added'],
    example: 'Content to be added'
  },
  {
    id: 'ch9-invoice',
    title: 'Chapter 9: Tax Invoice, Credit and Debit Notes',
    difficulty: 'advanced',
    description: 'Content to be added',
    keyPoints: ['Content to be added'],
    example: 'Content to be added'
  },
  {
    id: 'ch10-accounts-eway',
    title: 'Chapter 10: Accounts and Records, E-Way Bill',
    difficulty: 'advanced',
    description: 'Content to be added',
    keyPoints: ['Content to be added'],
    example: 'Content to be added'
  },
  {
    id: 'ch11-payment',
    title: 'Chapter 11: Payment of Tax',
    difficulty: 'advanced',
    description: 'Content to be added',
    keyPoints: ['Content to be added'],
    example: 'Content to be added'
  },
  {
    id: 'ch12-ecommerce',
    title: 'Chapter 12: Electronic Commerce Transactions',
    difficulty: 'advanced',
    description: 'Content to be added',
    keyPoints: ['Content to be added'],
    example: 'Content to be added'
  },
  {
    id: 'ch13-returns',
    title: 'Chapter 13: Returns',
    difficulty: 'advanced',
    description: 'Content to be added',
    keyPoints: ['Content to be added'],
    example: 'Content to be added'
  },
  {
    id: 'ch14-import-export',
    title: 'Chapter 14: Import and Export under GST',
    difficulty: 'advanced',
    description: 'Content to be added',
    keyPoints: ['Content to be added'],
    example: 'Content to be added'
  },
  {
    id: 'ch15-refunds',
    title: 'Chapter 15: Refunds',
    difficulty: 'advanced',
    description: 'Content to be added',
    keyPoints: ['Content to be added'],
    example: 'Content to be added'
  },
  {
    id: 'ch16-job-work',
    title: 'Chapter 16: Job Work',
    difficulty: 'advanced',
    description: 'Content to be added',
    keyPoints: ['Content to be added'],
    example: 'Content to be added'
  },
  {
    id: 'ch17-assessment-audit',
    title: 'Chapter 17: Assessment and Audit',
    difficulty: 'advanced',
    description: 'Content to be added',
    keyPoints: ['Content to be added'],
    example: 'Content to be added'
  },
  {
    id: 'ch18-inspection',
    title: 'Chapter 18: Inspection, Search, Seizure and Arrest',
    difficulty: 'advanced',
    description: 'Content to be added',
    keyPoints: ['Content to be added'],
    example: 'Content to be added'
  },
  {
    id: 'ch19-demands-recovery',
    title: 'Chapter 19: Demands and Recovery',
    difficulty: 'advanced',
    description: 'Content to be added',
    keyPoints: ['Content to be added'],
    example: 'Content to be added'
  },
  {
    id: 'ch20-liability-to-pay',
    title: 'Chapter 20: Liability to Pay in Certain Cases',
    difficulty: 'advanced',
    description: 'Content to be added',
    keyPoints: ['Content to be added'],
    example: 'Content to be added'
  },
  {
    id: 'ch21-offences-penalties',
    title: 'Chapter 21: Offences and Penalties, Ethical Aspects',
    difficulty: 'advanced',
    description: 'Content to be added',
    keyPoints: ['Content to be added'],
    example: 'Content to be added'
  },
  {
    id: 'ch22-appeals-revision',
    title: 'Chapter 22: Appeals and Revision',
    difficulty: 'advanced',
    description: 'Content to be added',
    keyPoints: ['Content to be added'],
    example: 'Content to be added'
  },
  {
    id: 'ch23-advance-ruling',
    title: 'Chapter 23: Advance Ruling',
    difficulty: 'advanced',
    description: 'Content to be added',
    keyPoints: ['Content to be added'],
    example: 'Content to be added'
  },
  {
    id: 'ch24-miscellaneous',
    title: 'Chapter 24: Miscellaneous Provisions',
    difficulty: 'advanced',
    description: 'Content to be added',
    keyPoints: ['Content to be added'],
    example: 'Content to be added'
  },
  {
    id: 'ch25-customs-levy',
    title: 'Chapter 25: Levy and Exemptions from Customs Duty',
    difficulty: 'advanced',
    description: 'Content to be added',
    keyPoints: ['Content to be added'],
    example: 'Content to be added'
  },
  {
    id: 'ch26-types-of-duty',
    title: 'Chapter 26: Types of Duty',
    difficulty: 'advanced',
    description: 'Content to be added',
    keyPoints: ['Content to be added'],
    example: 'Content to be added'
  },
  {
    id: 'ch27-classification',
    title: 'Chapter 27: Classification of Imported and Export Goods',
    difficulty: 'advanced',
    description: 'Content to be added',
    keyPoints: ['Content to be added'],
    example: 'Content to be added'
  },
  {
    id: 'ch28-valuation-customs',
    title: 'Chapter 28: Valuation under Customs Act, 1962',
    difficulty: 'advanced',
    description: 'Content to be added',
    keyPoints: ['Content to be added'],
    example: 'Content to be added'
  },
  {
    id: 'ch29-importation-exportation',
    title: 'Chapter 29: Importation and Exportation of Goods',
    difficulty: 'advanced',
    description: 'Content to be added',
    keyPoints: ['Content to be added'],
    example: 'Content to be added'
  },
  {
    id: 'ch30-warehousing',
    title: 'Chapter 30: Warehousing',
    difficulty: 'advanced',
    description: 'Content to be added',
    keyPoints: ['Content to be added'],
    example: 'Content to be added'
  },
  {
    id: 'ch31-refunds-customs',
    title: 'Chapter 31: Refunds',
    difficulty: 'advanced',
    description: 'Content to be added',
    keyPoints: ['Content to be added'],
    example: 'Content to be added'
  },
  {
    id: 'ch32-ftp',
    title: 'Chapter 32: Foreign Trade Policy',
    difficulty: 'advanced',
    description: 'Content to be added',
    keyPoints: ['Content to be added'],
    example: 'Content to be added'
  }
];

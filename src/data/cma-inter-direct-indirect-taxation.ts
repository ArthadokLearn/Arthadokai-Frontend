export interface Concept {
  id: string;
  title: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  description: string;
  keyPoints: string[];
  example: string;
  formula?: string;
}

export const cmaInterDirectIndirectTaxationConcepts: Concept[] = [
  {
    id: 'cma-i-dit-1',
    title: 'Basics of Income Tax Act',
    difficulty: 'intermediate',
    description: 'Fundamental concepts of income tax including definitions, residential status, and scope of total income.',
    keyPoints: [
      'Basic concepts and definitions',
      'Residential status of individuals, HUF, firms, and companies',
      'Scope of total income',
      'Exempt incomes under Section 10',
      'Assessment year and previous year'
    ],
    example: 'A person is resident in India if they stay in India for 182 days or more during the previous year.',
  },
  {
    id: 'cma-i-dit-2',
    title: 'Heads of Income',
    difficulty: 'intermediate',
    description: 'Detailed study of five heads of income: Salaries, House Property, Business/Profession, Capital Gains, and Other Sources.',
    keyPoints: [
      'Income from Salaries - allowances and perquisites',
      'Income from House Property - self-occupied and let-out',
      'Profits and Gains of Business or Profession',
      'Capital Gains - short-term and long-term',
      'Income from Other Sources'
    ],
    example: 'HRA exemption is calculated as the least of: (a) Actual HRA received, (b) 50%/40% of salary, (c) Rent paid minus 10% of salary.',
    formula: 'Annual Value = Actual Rent or Fair Rent - Municipal Taxes'
  },
  {
    id: 'cma-i-dit-3',
    title: 'Total Income and Tax Liability of Individuals & HUF',
    difficulty: 'intermediate',
    description: 'Computation of total income and tax liability for individuals and Hindu Undivided Families.',
    keyPoints: [
      'Clubbing provisions',
      'Set-off and carry forward of losses',
      'Deductions under Chapter VI-A',
      'Computation of total income',
      'Tax rates and rebates'
    ],
    example: 'Income of minor child is clubbed with the income of the parent whose income is higher.',
    formula: 'Total Income = Gross Total Income - Deductions under Chapter VI-A'
  },
  {
    id: 'cma-i-dit-4',
    title: 'Concept of Indirect Taxes',
    difficulty: 'intermediate',
    description: 'Introduction to indirect taxation system in India, evolution of GST, and its impact on Indian economy.',
    keyPoints: [
      'Concept of indirect taxes',
      'Evolution from multiple taxes to GST',
      'GST structure - CGST, SGST, IGST',
      'Benefits of GST',
      'Constitutional amendments for GST'
    ],
    example: 'GST replaced multiple indirect taxes like VAT, Service Tax, Excise Duty, creating "One Nation, One Tax".',
  },
  {
    id: 'cma-i-dit-5',
    title: 'Goods and Service Tax Laws',
    difficulty: 'intermediate',
    description: 'Comprehensive understanding of GST laws including supply, valuation, ITC, and returns.',
    keyPoints: [
      'Concept of supply under GST',
      'Registration requirements',
      'Tax invoice and time of supply',
      'Valuation of supply',
      'Input Tax Credit mechanism',
      'GST returns and payment'
    ],
    example: 'ITC is available only if the supplier has filed their returns and the tax has been deposited with the government.',
    formula: 'ITC = Input CGST + Input SGST + Input IGST'
  },
  {
    id: 'cma-i-dit-6',
    title: 'Customs Act & Rules',
    difficulty: 'intermediate',
    description: 'Basic provisions of Customs Act including levy, valuation, exemptions, and procedures.',
    keyPoints: [
      'Levy and collection of customs duty',
      'Types of customs duties',
      'Valuation of imported and exported goods',
      'Customs procedures',
      'Exemptions and concessions',
      'Baggage rules'
    ],
    example: 'Customs duty is levied on goods imported into India or exported from India at the rates specified in Customs Tariff Act.',
    formula: 'Assessable Value = CIF Value (Cost + Insurance + Freight)'
  }
];

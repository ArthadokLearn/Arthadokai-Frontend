export interface Concept {
  id: string;
  title: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  description: string;
  keyPoints: string[];
  example: string;
  formula?: string;
}

export const csExecutiveTaxLawsPracticeConcepts: Concept[] = [
  {
    id: 'cs-e-tlp-1',
    title: 'Direct Taxes – An Overview',
    difficulty: 'intermediate',
    description: 'Introduction to direct taxation system and Income Tax Act.',
    keyPoints: [
      'Direct vs indirect taxes',
      'Income Tax Act, 1961 structure',
      'Assessment year vs financial year',
      'Tax administration - CBDT',
      'Tax rates and slabs',
      'Old vs new tax regime'
    ],
    example: 'Direct taxes are levied directly on income of taxpayers and cannot be shifted to others.',
    formula: 'Assessment Year = Financial Year + 1'
  },
  {
    id: 'cs-e-tlp-2',
    title: 'Basic Concepts of Income Tax',
    difficulty: 'intermediate',
    description: 'Fundamental concepts including person, income, previous year, and assessment year.',
    keyPoints: [
      'Person - individual, HUF, company, firm',
      'Income definition - Section 2(24)',
      'Total income computation',
      'Residential status',
      'Scope of total income',
      'Agricultural income'
    ],
    example: 'Resident and Ordinarily Resident is taxed on global income while non-resident only on India-sourced income.',
  },
  {
    id: 'cs-e-tlp-3',
    title: 'Incomes not forming part of Total Income',
    difficulty: 'intermediate',
    description: 'Exempted incomes under Section 10 and other provisions.',
    keyPoints: [
      'Section 10 exemptions',
      'Agricultural income exemption',
      'HRA exemption - Section 10(13A)',
      'LTA exemption',
      'Gratuity and pension exemptions',
      'Income of charitable trusts'
    ],
    example: 'HRA exemption is minimum of: actual HRA, 50%/40% of salary, or rent paid minus 10% of salary.',
    formula: 'HRA Exemption = Min(Actual HRA, 50%/40% of Salary, Rent - 10% of Salary)'
  },
  {
    id: 'cs-e-tlp-4',
    title: 'Income under the Head Salary',
    difficulty: 'intermediate',
    description: 'Computation of salary income including allowances and perquisites.',
    keyPoints: [
      'Employer-employee relationship',
      'Components of salary - basic, DA, allowances',
      'Perquisites and their valuation',
      'Allowances - exempt and taxable',
      'Standard deduction - ₹50,000',
      'Professional tax deduction'
    ],
    example: 'Salary includes wages, pension, gratuity, fees, commission, perquisites, and profits in lieu of salary.',
    formula: 'Taxable Salary = Gross Salary + Perquisites - Exemptions - Standard Deduction - Professional Tax'
  },
  {
    id: 'cs-e-tlp-5',
    title: 'Income under the Head House Property',
    difficulty: 'intermediate',
    description: 'Taxation of income from house property including deductions.',
    keyPoints: [
      'Annual value determination',
      'Self-occupied vs let-out property',
      'Municipal taxes deduction',
      'Standard deduction - 30%',
      'Interest on housing loan - Section 24(b)',
      'Deemed let-out property'
    ],
    example: 'For self-occupied property, annual value is nil, but interest on housing loan up to ₹2 lakh is deductible.',
    formula: 'Income from House Property = GAV - Municipal Taxes - 30% Standard Deduction - Interest u/s 24(b)'
  },
  {
    id: 'cs-e-tlp-6',
    title: 'Profits and Gains of Business or Profession',
    difficulty: 'intermediate',
    description: 'Computation of business income and allowable deductions.',
    keyPoints: [
      'Business vs profession distinction',
      'Allowable expenses - Section 30-37',
      'Disallowances - Section 40, 40A, 43B',
      'Depreciation - Section 32',
      'Presumptive taxation - Section 44AD, 44ADA',
      'Book profit vs taxable profit'
    ],
    example: 'Business expenses wholly and exclusively for business are deductible except those specifically disallowed.',
    formula: 'Business Income = Gross Receipts - Allowable Expenses + Disallowances - Depreciation'
  },
  {
    id: 'cs-e-tlp-7',
    title: 'Capital Gains',
    difficulty: 'intermediate',
    description: 'Taxation of gains from transfer of capital assets.',
    keyPoints: [
      'Short-term vs long-term capital gains',
      'Cost of acquisition and improvement',
      'Indexed cost of acquisition',
      'Exemptions - Section 54, 54EC, 54F',
      'Tax rates on STCG and LTCG',
      'Listed equity - 15% STCG, 10% LTCG'
    ],
    example: 'LTCG on listed equity exceeding ₹1 lakh is taxed at 10% without indexation benefit.',
    formula: 'LTCG = Sale Price - Indexed Cost - Expenses on Transfer'
  },
  {
    id: 'cs-e-tlp-8',
    title: 'Income from Other Sources',
    difficulty: 'intermediate',
    description: 'Residuary head covering dividend, interest, and other incomes.',
    keyPoints: [
      'Residuary nature of this head',
      'Dividend income taxation',
      'Interest from savings and deposits',
      'Family pension',
      'Winnings from lottery and gambling',
      'Deductions allowable'
    ],
    example: 'Income not falling under any other head is taxed under Income from Other Sources.',
  },
  {
    id: 'cs-e-tlp-9',
    title: 'Clubbing of Income, Set-off, and Carry Forward of Losses',
    difficulty: 'intermediate',
    description: 'Aggregation of income, clubbing provisions, and loss adjustment.',
    keyPoints: [
      'Clubbing provisions - Section 60-64',
      'Transfer to spouse and minor children',
      'Intra-head and inter-head set-off',
      'Carry forward of losses',
      'Time limits for carry forward',
      'Return filing requirement for carry forward'
    ],
    example: 'Income from assets transferred to spouse without adequate consideration is clubbed with transferor\'s income.',
  },
  {
    id: 'cs-e-tlp-10',
    title: 'Deductions from Gross Total Income',
    difficulty: 'intermediate',
    description: 'Chapter VI-A deductions under Sections 80C to 80U.',
    keyPoints: [
      'Section 80C - investments up to ₹1.5 lakh',
      'Section 80D - health insurance premium',
      'Section 80E - interest on education loan',
      'Section 80G - donations to charitable institutions',
      'Section 80TTA/TTB - interest on savings',
      'New tax regime - no deductions'
    ],
    example: 'Section 80C allows deduction for LIC, PPF, ELSS, tuition fees, principal on home loan up to ₹1.5 lakh.',
  },
  {
    id: 'cs-e-tlp-11',
    title: 'Computation of Total Income and Tax Liability of Various Entities',
    difficulty: 'intermediate',
    description: 'Tax computation for individuals, HUF, firms, and companies.',
    keyPoints: [
      'Tax slabs for individuals',
      'HUF taxation',
      'Firm taxation - 30% + surcharge + cess',
      'AOP and BOI taxation',
      'Rebate under Section 87A',
      'Surcharge and cess computation'
    ],
    example: 'Individuals with income up to ₹7 lakh get full rebate under Section 87A in new tax regime.',
    formula: 'Tax Liability = Tax on Total Income + Surcharge + Health & Education Cess - Rebate - TDS/TCS'
  },
  {
    id: 'cs-e-tlp-12',
    title: 'Classification and Tax Incidence on Companies',
    difficulty: 'intermediate',
    description: 'Domestic vs foreign company taxation and special provisions.',
    keyPoints: [
      'Domestic vs foreign company',
      'Normal tax rate - 30% for domestic companies',
      'Section 115BA - 25% for new manufacturing companies',
      'Section 115BAA - 22% optional rate',
      'Minimum Alternate Tax (MAT)',
      'Dividend Distribution Tax (abolished)'
    ],
    example: 'New manufacturing companies can opt for 15% tax rate under Section 115BAB without exemptions.',
    formula: 'MAT = 15% × Book Profit (if MAT > Normal Tax)'
  },
  {
    id: 'cs-e-tlp-13',
    title: 'Procedural Compliance',
    difficulty: 'intermediate',
    description: 'Return filing, advance tax, TDS, and assessment procedures.',
    keyPoints: [
      'Types of returns - ITR-1 to ITR-7',
      'Due dates for return filing',
      'Advance tax provisions',
      'TDS and TCS compliance',
      'Assessment procedures',
      'Penalties and interest'
    ],
    example: 'Individuals must file return by July 31, while companies by October 31 (extended to November 30 for AY 2024-25).',
  },
  {
    id: 'cs-e-tlp-14',
    title: 'Indirect Taxes – An Overview',
    difficulty: 'intermediate',
    description: 'Introduction to GST and indirect taxation framework.',
    keyPoints: [
      'Evolution of indirect taxes in India',
      'GST - dual model',
      'CGST, SGST, IGST, UTGST',
      'GST Council',
      'Benefits of GST',
      'Destination-based consumption tax'
    ],
    example: 'GST subsumed multiple indirect taxes into unified tax system implemented from July 1, 2017.',
  },
  {
    id: 'cs-e-tlp-15',
    title: 'Basics of Goods and Services Tax (GST)',
    difficulty: 'intermediate',
    description: 'GST structure, registration, and fundamental concepts.',
    keyPoints: [
      'Supply concept under GST',
      'Taxable person and registration',
      'Composition scheme',
      'Tax rates - 0%, 5%, 12%, 18%, 28%',
      'Exempted and nil-rated supplies',
      'Reverse charge mechanism'
    ],
    example: 'Businesses with turnover above ₹40 lakh (₹20 lakh for services/special states) must register under GST.',
  },
  {
    id: 'cs-e-tlp-16',
    title: 'Levy and Collection of GST',
    difficulty: 'intermediate',
    description: 'Charging provisions, tax liability, and payment mechanisms.',
    keyPoints: [
      'Levy of CGST, SGST, IGST',
      'Intra-state vs inter-state supply',
      'Tax liability determination',
      'Payment of tax',
      'Interest and late fees',
      'Electronic credit ledger and cash ledger'
    ],
    example: 'Intra-state supply attracts CGST + SGST while inter-state supply attracts IGST.',
  },
  {
    id: 'cs-e-tlp-17',
    title: 'Time, Value, and Place of Supply',
    difficulty: 'intermediate',
    description: 'Determining when, how much, and where GST is leviable.',
    keyPoints: [
      'Time of supply for goods and services',
      'Transaction value determination',
      'Valuation rules',
      'Place of supply for goods',
      'Place of supply for services',
      'Import and export of services'
    ],
    example: 'Time of supply is earliest of invoice date, payment receipt, or completion of service/delivery of goods.',
    formula: 'Value of Supply = Transaction Value + Includable Items - Excludable Items'
  },
  {
    id: 'cs-e-tlp-18',
    title: 'Input Tax Credit and Computation of GST Liability',
    difficulty: 'intermediate',
    description: 'ITC mechanism, conditions, and tax liability calculation.',
    keyPoints: [
      'Conditions for ITC availment',
      'Blocked credits - Section 17(5)',
      'ITC matching and reversal',
      'Common credit distribution',
      'GST liability computation',
      'Utilization of ITC'
    ],
    example: 'ITC on motor vehicles blocked except when used for passenger transportation, goods transportation, or imparting training.',
  },
  {
    id: 'cs-e-tlp-19',
    title: 'Procedural Compliance under GST',
    difficulty: 'intermediate',
    description: 'Returns, e-way bill, refunds, and other GST compliances.',
    keyPoints: [
      'GSTR-1 - outward supplies',
      'GSTR-3B - summary return',
      'GSTR-9 - annual return',
      'E-way bill requirements',
      'Refund provisions',
      'GST audit and assessment'
    ],
    example: 'GSTR-1 filed monthly showing outward supplies, while GSTR-3B shows tax liability and ITC claimed.',
  },
  {
    id: 'cs-e-tlp-20',
    title: 'Overview of Customs Act',
    difficulty: 'intermediate',
    description: 'Customs duties, import-export procedures, and valuation.',
    keyPoints: [
      'Customs Act, 1962',
      'Types of customs duties',
      'Valuation of imported and exported goods',
      'Customs clearance procedures',
      'Warehousing provisions',
      'Baggage and courier regulations'
    ],
    example: 'Basic Customs Duty levied on imported goods; integrated tax (IGST) also applicable on imports.',
  }
];

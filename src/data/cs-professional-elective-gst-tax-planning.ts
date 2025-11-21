export interface Concept {
  id: string;
  title: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  description: string;
  keyPoints: string[];
  example: string;
  formula?: string;
}

export const csProfessionalElectiveGSTTaxPlanningConcepts: Concept[] = [
  {
    id: 'cs-p-gst-1',
    title: 'Overview of GST',
    difficulty: 'advanced',
    description: 'Comprehensive overview of GST framework in India.',
    keyPoints: ['GST dual model', 'Constitutional framework', 'GST Council', 'One nation one tax', 'Benefits of GST', 'GST rates structure'],
    example: 'GST eliminated cascading effect of taxes through seamless input tax credit across value chain.',
  },
  {
    id: 'cs-p-gst-2',
    title: 'Supply under GST',
    difficulty: 'advanced',
    description: 'Concept of supply and taxable events.',
    keyPoints: ['Definition of supply - Section 7', 'Supply of goods vs services', 'Composite and mixed supply', 'Deemed supply', 'Intra-state vs inter-state supply', 'Non-taxable supplies'],
    example: 'Supply includes sale, transfer, barter, exchange, license, rental, lease, or disposal made for consideration.',
  },
  {
    id: 'cs-p-gst-3',
    title: 'Time of Supply',
    difficulty: 'advanced',
    description: 'Determining when GST liability arises.',
    keyPoints: ['Time of supply for goods', 'Time of supply for services', 'Invoice date relevance', 'Receipt of payment', 'Reverse charge mechanism', 'Change in rate of tax'],
    example: 'Time of supply is earliest of invoice date, payment receipt, or completion of supply determining tax point.',
  },
  {
    id: 'cs-p-gst-4',
    title: 'Value of Supply',
    difficulty: 'advanced',
    description: 'Valuation rules for determining taxable value.',
    keyPoints: ['Transaction value', 'Valuation rules - Rule 27-35', 'Related party transactions', 'Discount treatment', 'Includable and excludable amounts', 'Special valuation situations'],
    example: 'Transaction value is price paid/payable for supply when supplier and recipient are not related.',
  },
  {
    id: 'cs-p-gst-5',
    title: 'Input Tax Credit and Computation of GST Liability',
    difficulty: 'advanced',
    description: 'ITC mechanism and GST liability calculation.',
    keyPoints: ['ITC eligibility conditions', 'Blocked credits - Section 17(5)', 'ITC reversal', 'Common credit apportionment', 'Liability computation', 'ITC utilization order'],
    example: 'ITC on motor vehicles blocked except when used for passenger/goods transport or imparting driving training.',
  },
  {
    id: 'cs-p-gst-6',
    title: 'GST Procedural Compliance',
    difficulty: 'advanced',
    description: 'Returns, e-way bill, and compliance requirements.',
    keyPoints: ['GSTR-1, GSTR-3B filing', 'Annual return - GSTR-9', 'E-way bill generation', 'E-invoicing for large taxpayers', 'Payment of tax', 'Matching and reconciliation'],
    example: 'E-invoicing mandatory for businesses with turnover exceeding ₹5 crore for B2B transactions.',
  },
  {
    id: 'cs-p-gst-7',
    title: 'Assessment, Audit and Appeals under GST',
    difficulty: 'advanced',
    description: 'Assessment procedures, audit, and appellate mechanisms.',
    keyPoints: ['Self-assessment', 'Provisional assessment', 'GST audit - Section 65', 'Special audit', 'Assessment orders', 'Appeals to First Appellate Authority'],
    example: 'GST audit can be conducted for taxpayers exceeding prescribed turnover to verify compliance.',
  },
  {
    id: 'cs-p-gst-8',
    title: 'Inspection, Penalties and Offences',
    difficulty: 'advanced',
    description: 'Inspection powers, penalty provisions, and offences.',
    keyPoints: ['Inspection and search powers', 'Penalty for various offences', 'Compounding of offences', 'Arrest and prosecution', 'Interest on delayed payment', 'Confiscation of goods'],
    example: 'Penalty of ₹10,000 or 100% of tax whichever is higher for tax evasion without fraud intent.',
  },
  {
    id: 'cs-p-gst-9',
    title: 'GST Rating and Advance Rulings',
    difficulty: 'advanced',
    description: 'GST rate structure and advance ruling mechanism.',
    keyPoints: ['GST rate slabs - 0%, 5%, 12%, 18%, 28%', 'Inverted duty structure', 'Advance Ruling Authority', 'Questions eligible for ruling', 'Binding nature', 'Appeal against ruling'],
    example: 'Advance ruling provides clarity on classification, applicability, and valuation before undertaking transaction.',
  },
  {
    id: 'cs-p-gst-10',
    title: 'Corporate Tax Planning – Introduction',
    difficulty: 'advanced',
    description: 'Fundamentals of tax planning for corporates.',
    keyPoints: ['Tax planning vs tax evasion vs tax avoidance', 'Legitimate tax planning', 'Tax management objectives', 'Factors affecting tax planning', 'Long-term vs short-term', 'Ethical considerations'],
    example: 'Tax planning involves arranging affairs within legal framework to minimize tax liability and maximize post-tax returns.',
  },
  {
    id: 'cs-p-gst-11',
    title: 'Tax Planning by Nature and Location of Business',
    difficulty: 'advanced',
    description: 'Location and industry-specific tax incentives.',
    keyPoints: ['SEZ tax benefits', 'Backward area incentives', 'Export-oriented units', 'Industry-specific deductions', 'Infrastructure sector benefits', 'Geographic tax incentives'],
    example: 'SEZ units enjoy 100% profit deduction for 5 years, 50% for next 5 years promoting export-oriented businesses.',
  },
  {
    id: 'cs-p-gst-12',
    title: 'Tax Implications in Managerial Decisions',
    difficulty: 'advanced',
    description: 'Tax considerations in business decisions.',
    keyPoints: ['Make or buy decisions', 'Own or lease decisions', 'Form of organization', 'Employee vs contractor', 'Debt vs equity financing', 'Dividend distribution tax'],
    example: 'Debt financing provides tax deduction on interest while equity dividend distribution does not reduce taxable income.',
  },
  {
    id: 'cs-p-gst-13',
    title: 'Tax Planning in Business Restructuring',
    difficulty: 'advanced',
    description: 'Tax-efficient restructuring strategies.',
    keyPoints: ['Tax-neutral merger', 'Demerger tax implications', 'Slump sale vs itemized sale', 'Share sale vs asset sale', 'Holding company structure', 'Capital gains exemptions'],
    example: 'Tax-neutral amalgamation under Section 2(1B) allows transfer without capital gains tax to shareholders.',
  }
];

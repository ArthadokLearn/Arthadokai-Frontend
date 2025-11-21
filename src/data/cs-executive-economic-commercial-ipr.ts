export interface Concept {
  id: string;
  title: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  description: string;
  keyPoints: string[];
  example: string;
  formula?: string;
}

export const csExecutiveEconomicCommercialIPRConcepts: Concept[] = [
  {
    id: 'cs-e-eci-1',
    title: 'Foreign Exchange Management Law',
    difficulty: 'intermediate',
    description: 'FEMA provisions governing foreign exchange transactions and capital controls.',
    keyPoints: [
      'FEMA, 1999 - objectives and scope',
      'Current account vs capital account',
      'Authorized dealers and money changers',
      'Contraventions and penalties',
      'Directorate of Enforcement',
      'Compounding of offences'
    ],
    example: 'FEMA regulates all foreign exchange transactions to facilitate external trade and maintain forex market.',
  },
  {
    id: 'cs-e-eci-2',
    title: 'Foreign Direct Investment – Regulations and Policy',
    difficulty: 'intermediate',
    description: 'FDI policy, sectoral caps, and approval routes.',
    keyPoints: [
      'FDI policy - automatic vs approval route',
      'Sectoral caps and restrictions',
      'Prohibited sectors',
      'Press Note 3 of 2020 - neighboring countries',
      'Downstream investment',
      'Reporting requirements - FC-GPR, FC-TRS'
    ],
    example: 'FDI up to 100% allowed in many sectors under automatic route without government approval.',
  },
  {
    id: 'cs-e-eci-3',
    title: 'Overseas Direct Investment',
    difficulty: 'intermediate',
    description: 'Indian investment abroad and regulatory framework.',
    keyPoints: [
      'ODI regulations under FEMA',
      'Direct and indirect investment',
      'Financial commitment limit - 400% of net worth',
      'RBI approval requirements',
      'Permitted and restricted sectors',
      'Reporting - APR and ARF'
    ],
    example: 'Indian companies can invest overseas up to 400% of net worth in permitted sectors.',
  },
  {
    id: 'cs-e-eci-4',
    title: 'External Commercial Borrowings (ECB)',
    difficulty: 'intermediate',
    description: 'ECB framework, eligible borrowers, and end-use restrictions.',
    keyPoints: [
      'ECB policy framework',
      'Eligible borrowers and lenders',
      'Automatic and approval routes',
      'All-in-cost ceilings',
      'End-use restrictions',
      'Hedging requirements'
    ],
    example: 'ECB allows Indian entities to raise funds from foreign sources subject to RBI guidelines.',
  },
  {
    id: 'cs-e-eci-5',
    title: 'Foreign Trade Policy and Procedure',
    difficulty: 'intermediate',
    description: 'Export-import policy, incentive schemes, and trade facilitation.',
    keyPoints: [
      'Foreign Trade Policy 2023',
      'DGFT and regional authorities',
      'Export promotion schemes - RoDTEP, RoSCTL',
      'Advance Authorization Scheme',
      'Export Oriented Units',
      'IEC (Import Export Code)'
    ],
    example: 'RoDTEP scheme provides refund of embedded central, state, and local duties on exported products.',
  },
  {
    id: 'cs-e-eci-6',
    title: 'Special Economic Zones Law',
    difficulty: 'intermediate',
    description: 'SEZ Act provisions, benefits, and compliance requirements.',
    keyPoints: [
      'SEZ Act, 2005',
      'Setting up SEZ and SEZ units',
      'Tax and duty benefits',
      'DTA sale provisions',
      'Net Foreign Exchange earning',
      'Exit from SEZ'
    ],
    example: 'SEZ units enjoy duty-free import of goods, 100% FDI under automatic route, and income tax exemptions.',
  },
  {
    id: 'cs-e-eci-7',
    title: 'Foreign Contribution Regulation Law',
    difficulty: 'intermediate',
    description: 'FCRA for regulation of foreign contributions to NGOs and associations.',
    keyPoints: [
      'FCRA, 2010 and amendments',
      'Registration requirements',
      'Prohibited recipients',
      'Utilization of foreign contribution',
      'Bank account and compliance',
      'Cancellation and suspension'
    ],
    example: 'NGOs receiving foreign donations must obtain FCRA registration and maintain separate bank account.',
  },
  {
    id: 'cs-e-eci-8',
    title: 'Prevention of Money Laundering Law',
    difficulty: 'intermediate',
    description: 'PMLA provisions for combating money laundering and terror financing.',
    keyPoints: [
      'PMLA, 2002',
      'Money laundering - definition and stages',
      'Know Your Customer (KYC) norms',
      'Suspicious transaction reporting',
      'Attachment and confiscation',
      'Special courts and enforcement'
    ],
    example: 'Financial institutions must report cash transactions exceeding ₹10 lakh to FIU-IND.',
  },
  {
    id: 'cs-e-eci-9',
    title: 'Fugitive Economic Offenders Law',
    difficulty: 'intermediate',
    description: 'Fugitive Economic Offenders Act to confiscate assets of economic offenders.',
    keyPoints: [
      'Fugitive Economic Offenders Act, 2018',
      'Definition of fugitive economic offender',
      'Threshold - ₹100 crore',
      'Special court proceedings',
      'Confiscation of property',
      'Disentitlement to defend civil claims'
    ],
    example: 'Person who leaves India to avoid prosecution for economic offences exceeding ₹100 crore can be declared FEO.',
  },
  {
    id: 'cs-e-eci-10',
    title: 'Benami Transactions and Prohibition Law',
    difficulty: 'intermediate',
    description: 'Prohibition of Benami Property Transactions Act.',
    keyPoints: [
      'Benami Transactions Act, 1988 (amended 2016)',
      'Definition of benami property',
      'Prohibition and penalties',
      'Confiscation proceedings',
      'Adjudicating authority',
      'Exemptions'
    ],
    example: 'Benami property is held in name of benamidar while consideration paid by real owner, subject to confiscation.',
  },
  {
    id: 'cs-e-eci-11',
    title: 'Competition Law',
    difficulty: 'intermediate',
    description: 'Competition Act to prevent anti-competitive practices.',
    keyPoints: [
      'Competition Act, 2002',
      'Anti-competitive agreements',
      'Abuse of dominant position',
      'Merger control - combinations',
      'Competition Commission of India',
      'Penalties and remedies'
    ],
    example: 'Combinations exceeding threshold (assets > ₹2000 cr or turnover > ₹6000 cr) require CCI approval.',
  },
  {
    id: 'cs-e-eci-12',
    title: 'Consumer Protection Law',
    difficulty: 'intermediate',
    description: 'Consumer Protection Act for safeguarding consumer rights.',
    keyPoints: [
      'Consumer Protection Act, 2019',
      'Consumer rights',
      'Consumer disputes redressal',
      'District, State, and National Commissions',
      'E-commerce rules',
      'Product liability'
    ],
    example: 'Consumers have right to be informed, to choose, to be heard, to seek redressal, and consumer education.',
  },
  {
    id: 'cs-e-eci-13',
    title: 'Legal Metrology',
    difficulty: 'intermediate',
    description: 'Legal Metrology Act for standardized weights and measures.',
    keyPoints: [
      'Legal Metrology Act, 2009',
      'Standard weights and measures',
      'Packaged commodities rules',
      'Labeling requirements',
      'Verification and stamping',
      'Offences and penalties'
    ],
    example: 'Pre-packaged commodities must declare net quantity, MRP, name and address of manufacturer on label.',
  },
  {
    id: 'cs-e-eci-14',
    title: 'Real Estate Regulation and Development Law',
    difficulty: 'intermediate',
    description: 'RERA for regulation and promotion of real estate sector.',
    keyPoints: [
      'RERA, 2016',
      'Registration of projects and agents',
      'Promoter obligations',
      'Allottee rights',
      'Real Estate Regulatory Authority',
      'Appellate tribunal'
    ],
    example: 'Promoters must register projects with RERA and deposit 70% of funds in escrow account.',
  },
  {
    id: 'cs-e-eci-15',
    title: 'Intellectual Property Rights',
    difficulty: 'intermediate',
    description: 'Overview of IPR including patents, trademarks, copyrights, and designs.',
    keyPoints: [
      'Types of IPR',
      'Patents, trademarks, copyrights',
      'Industrial designs',
      'Geographical indications',
      'Trade secrets',
      'International conventions - TRIPS, Paris, Berne'
    ],
    example: 'IPR grants exclusive rights to creators/inventors to exploit their intellectual creations commercially.',
  },
  {
    id: 'cs-e-eci-16',
    title: 'Patent Law',
    difficulty: 'intermediate',
    description: 'Patents Act for protection of inventions.',
    keyPoints: [
      'Patents Act, 1970',
      'Patentability criteria - novelty, inventive step, industrial application',
      'Patent application and examination',
      'Term of patent - 20 years',
      'Compulsory licensing',
      'Infringement and remedies'
    ],
    example: 'Patent grants exclusive right to prevent others from making, using, or selling invention for 20 years.',
  },
  {
    id: 'cs-e-eci-17',
    title: 'Trademark Law',
    difficulty: 'intermediate',
    description: 'Trademarks Act for registration and protection of trademarks.',
    keyPoints: [
      'Trademarks Act, 1999',
      'Registration procedure',
      'Validity - 10 years (renewable)',
      'Well-known trademarks',
      'Trademark infringement',
      'Passing off'
    ],
    example: 'Trademark distinguishes goods/services of one enterprise from others and can be renewed perpetually.',
  },
  {
    id: 'cs-e-eci-18',
    title: 'Copyright Law',
    difficulty: 'intermediate',
    description: 'Copyright Act for protection of original creative works.',
    keyPoints: [
      'Copyright Act, 1957',
      'Copyrightable works - literary, artistic, musical',
      'Rights of copyright owner',
      'Term of copyright - life + 60 years',
      'Fair use and exceptions',
      'Infringement and remedies'
    ],
    example: 'Copyright protects original expression in literary, dramatic, musical, and artistic works.',
  },
  {
    id: 'cs-e-eci-19',
    title: 'Geographical Indications Law',
    difficulty: 'intermediate',
    description: 'GI Act for protection of geographical indications.',
    keyPoints: [
      'GI of Goods Act, 1999',
      'Registration of GI',
      'Authorized users',
      'Term - 10 years (renewable)',
      'Infringement',
      'Examples - Darjeeling tea, Basmati rice'
    ],
    example: 'GI identifies goods originating from specific geographical area with quality attributable to that origin.',
  },
  {
    id: 'cs-e-eci-20',
    title: 'Design Law',
    difficulty: 'intermediate',
    description: 'Designs Act for protection of industrial designs.',
    keyPoints: [
      'Designs Act, 2000',
      'Registration of designs',
      'Features of shape, configuration, pattern',
      'Term - 15 years',
      'Piracy of design',
      'Cancellation of registration'
    ],
    example: 'Design registration protects visual appearance of manufactured articles for 15 years.',
  }
];

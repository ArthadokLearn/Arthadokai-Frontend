export interface Concept {
  id: string;
  title: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  description: string;
  keyPoints: string[];
  example: string;
  formula?: string;
}

export const csExecutiveSettingUpBusinessLabourConcepts: Concept[] = [
  {
    id: 'cs-e-sbl-1',
    title: 'Selection of Business Organization',
    difficulty: 'intermediate',
    description: 'Factors for selecting appropriate business structure based on requirements.',
    keyPoints: [
      'Sole proprietorship, partnership, company',
      'Factors - capital, liability, taxation',
      'Scalability and funding requirements',
      'Compliance and regulatory considerations',
      'Exit options and transferability',
      'Industry-specific considerations'
    ],
    example: 'Startups may choose private limited company for limited liability and ease of fundraising.',
  },
  {
    id: 'cs-e-sbl-2',
    title: 'Corporate Entities – Companies',
    difficulty: 'intermediate',
    description: 'Incorporation process, types, and initial compliance for companies.',
    keyPoints: [
      'Incorporation procedure - SPICe+',
      'Name reservation - RUN',
      'Private vs public companies',
      'One Person Company (OPC)',
      'Documents required for incorporation',
      'Post-incorporation compliance'
    ],
    example: 'Company incorporation through SPICe+ form enables simultaneous application for PAN, TAN, EPFO, ESIC.',
  },
  {
    id: 'cs-e-sbl-3',
    title: 'Limited Liability Partnership',
    difficulty: 'intermediate',
    description: 'LLP formation, compliance, and comparison with companies and traditional partnerships.',
    keyPoints: [
      'LLP Act, 2008 provisions',
      'Incorporation of LLP',
      'LLP agreement',
      'Rights and duties of partners',
      'Compliance requirements',
      'Conversion from partnership/company'
    ],
    example: 'LLP combines benefits of limited liability (like company) and operational flexibility (like partnership).',
  },
  {
    id: 'cs-e-sbl-4',
    title: 'Startups and their Registration',
    difficulty: 'intermediate',
    description: 'Startup India scheme, recognition criteria, and benefits.',
    keyPoints: [
      'Definition of startup - DPIIT',
      'Startup India registration process',
      'Recognition criteria',
      'Tax benefits - Section 80-IAC',
      'Compliance exemptions',
      'Funding support and schemes'
    ],
    example: 'Recognized startups get 3-year tax holiday under Section 80-IAC and exemption from angel tax.',
  },
  {
    id: 'cs-e-sbl-5',
    title: 'Micro, Small and Medium Enterprises',
    difficulty: 'intermediate',
    description: 'MSME classification, registration, and government support schemes.',
    keyPoints: [
      'MSME classification criteria - investment and turnover',
      'Udyam Registration Portal',
      'Priority sector lending benefits',
      'Delayed payment protection',
      'Government schemes - CLCSS, CGTSME',
      'Export promotion for MSMEs'
    ],
    example: 'Micro: investment ≤ ₹1 cr, turnover ≤ ₹5 cr; Small: ≤ ₹10 cr, ≤ ₹50 cr; Medium: ≤ ₹50 cr, ≤ ₹250 cr.',
  },
  {
    id: 'cs-e-sbl-6',
    title: 'Conversion of Business Entities',
    difficulty: 'intermediate',
    description: 'Conversion between different forms of business organizations.',
    keyPoints: [
      'Conversion of sole proprietorship to company',
      'Partnership to LLP conversion',
      'Company to LLP conversion',
      'Private to public company',
      'Procedure and documentation',
      'Tax implications of conversion'
    ],
    example: 'Partnership can be converted to LLP by filing Form 17 with details of all partners and assets.',
  },
  {
    id: 'cs-e-sbl-7',
    title: 'Non-Corporate Entities',
    difficulty: 'intermediate',
    description: 'Trusts, societies, cooperatives, and other non-corporate forms.',
    keyPoints: [
      'Public trusts - Indian Trusts Act',
      'Societies - Societies Registration Act',
      'Cooperative societies',
      'Section 8 companies (NPO)',
      'Registration procedures',
      'Tax benefits under Section 11-13'
    ],
    example: 'Section 8 company is formed for promoting charitable objects and prohibited from paying dividends.',
  },
  {
    id: 'cs-e-sbl-8',
    title: 'Financial Services Organization',
    difficulty: 'intermediate',
    description: 'Setting up NBFCs, payment banks, and other financial services entities.',
    keyPoints: [
      'NBFC registration with RBI',
      'Types of NBFCs',
      'Capital adequacy requirements',
      'Payment banks and small finance banks',
      'Peer-to-peer lending platforms',
      'Fintech regulations'
    ],
    example: 'NBFC requires RBI registration, minimum NOF of ₹2 crore, and must maintain CRAR of 15%.',
  },
  {
    id: 'cs-e-sbl-9',
    title: 'Business Collaborations',
    difficulty: 'intermediate',
    description: 'Joint ventures, strategic alliances, and business partnerships.',
    keyPoints: [
      'Joint venture structures',
      'Strategic alliances and MOUs',
      'Consortium and collaboration agreements',
      'Franchise agreements',
      'Technology transfer agreements',
      'Distribution and agency agreements'
    ],
    example: 'Joint venture can be structured as separate entity or contractual arrangement between collaborating parties.',
  },
  {
    id: 'cs-e-sbl-10',
    title: 'Setting up of Branch Office, Liaison Office, and Wholly Owned Subsidiary by Foreign Company',
    difficulty: 'intermediate',
    description: 'FEMA provisions for foreign companies establishing presence in India.',
    keyPoints: [
      'Branch office - permitted activities',
      'Liaison office - representative office',
      'Wholly owned subsidiary',
      'RBI approval requirements',
      'FDI route vs automatic route',
      'Compliance and reporting'
    ],
    example: 'Branch office can undertake commercial activities while liaison office limited to coordination activities.',
  },
  {
    id: 'cs-e-sbl-11',
    title: 'Setting up of Business outside India and Related Issues',
    difficulty: 'intermediate',
    description: 'Overseas Direct Investment and establishing business presence abroad.',
    keyPoints: [
      'ODI regulations under FEMA',
      'RBI approval for ODI',
      'Forms of overseas investment',
      'Permitted sectors and limits',
      'Repatriation of funds',
      'Reporting requirements'
    ],
    example: 'Indian companies can invest up to 400% of net worth in overseas ventures in permitted sectors.',
  },
  {
    id: 'cs-e-sbl-12',
    title: 'Identification of Applicable Laws for Various Industries and Initial Compliances',
    difficulty: 'intermediate',
    description: 'Industry-specific regulations and compliance requirements.',
    keyPoints: [
      'Manufacturing sector regulations',
      'Service sector compliance',
      'E-commerce and IT laws',
      'Food and pharmaceuticals',
      'Banking and finance regulations',
      'Environmental clearances'
    ],
    example: 'E-commerce companies must comply with Consumer Protection Act, IT Act, and E-commerce Rules 2020.',
  },
  {
    id: 'cs-e-sbl-13',
    title: 'Various Initial Registrations and Licenses',
    difficulty: 'intermediate',
    description: 'Essential registrations and licenses for starting business operations.',
    keyPoints: [
      'GST registration',
      'Shops and Establishment license',
      'Trade license',
      'Professional tax registration',
      'FSSAI license for food businesses',
      'Industry-specific licenses'
    ],
    example: 'Every business with turnover above ₹40 lakh (₹20 lakh for services) must obtain GST registration.',
  },
  {
    id: 'cs-e-sbl-14',
    title: 'Constitution and Labour Laws',
    difficulty: 'intermediate',
    description: 'Constitutional provisions for labour welfare and fundamental rights.',
    keyPoints: [
      'Fundamental Rights - Article 14-32',
      'Right to form associations - Article 19(1)(c)',
      'Directive Principles for labour',
      'Article 39, 41, 42, 43',
      'Constitutional validity of labour laws',
      'Concurrent list - Entry 22-24'
    ],
    example: 'Article 24 prohibits employment of children below 14 years in factories and hazardous work.',
  },
  {
    id: 'cs-e-sbl-15',
    title: 'Evaluation of Labour Legislation and Need of Labour Code',
    difficulty: 'intermediate',
    description: 'Evolution of labour laws and consolidation into labour codes.',
    keyPoints: [
      'Pre-independence labour laws',
      'Post-independence developments',
      'Multiplicity of labour laws',
      'Need for consolidation',
      'Four labour codes framework',
      'Benefits of codification'
    ],
    example: 'Four labour codes consolidate 29 central labour laws: Wages, IR, SS, OSH&WC.',
  },
  {
    id: 'cs-e-sbl-16',
    title: 'Law of Welfare and Working Conditions',
    difficulty: 'intermediate',
    description: 'Factories Act, safety, health, and welfare provisions for workers.',
    keyPoints: [
      'Factories Act, 1948',
      'Working hours and overtime',
      'Health and safety measures',
      'Welfare facilities',
      'Occupational Safety, Health and Working Conditions Code',
      'Women and child labour protection'
    ],
    example: 'Factories Act mandates weekly holiday, maximum 48 hours work per week, and overtime at double rate.',
  },
  {
    id: 'cs-e-sbl-17',
    title: 'Law of Industrial Relations',
    difficulty: 'intermediate',
    description: 'Trade unions, industrial disputes, and resolution mechanisms.',
    keyPoints: [
      'Trade Unions Act, 1926',
      'Industrial Disputes Act, 1947',
      'Recognition of trade unions',
      'Strikes and lockouts',
      'Layoff, retrenchment, closure',
      'Industrial Relations Code, 2020'
    ],
    example: 'Industrial establishment with 300+ workers cannot retrench without government permission.',
  },
  {
    id: 'cs-e-sbl-18',
    title: 'Law of Wages',
    difficulty: 'intermediate',
    description: 'Minimum wages, payment of wages, and wage protection laws.',
    keyPoints: [
      'Minimum Wages Act, 1948',
      'Payment of Wages Act, 1936',
      'Payment of Bonus Act, 1965',
      'Equal Remuneration Act',
      'Code on Wages, 2019',
      'Floor wage and minimum wage'
    ],
    example: 'Code on Wages consolidates wages laws and mandates timely payment within 7 days of due date.',
  },
  {
    id: 'cs-e-sbl-19',
    title: 'Social Security Legislations',
    difficulty: 'intermediate',
    description: 'EPF, ESI, gratuity, and social security benefits for employees.',
    keyPoints: [
      'Employees Provident Fund Act',
      'Employees State Insurance Act',
      'Payment of Gratuity Act',
      'Maternity Benefit Act',
      'Social Security Code, 2020',
      'Coverage and contributions'
    ],
    example: 'EPF mandatory for establishments with 20+ employees; both employer and employee contribute 12% of wages.',
  },
  {
    id: 'cs-e-sbl-20',
    title: 'Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013',
    difficulty: 'intermediate',
    description: 'Prevention of sexual harassment at workplace and redressal mechanism.',
    keyPoints: [
      'Definition of sexual harassment',
      'Internal Complaints Committee (ICC)',
      'Complaint procedure',
      'Inquiry process',
      'Penalties for non-compliance',
      'Annual reporting requirements'
    ],
    example: 'Every organization with 10+ employees must constitute ICC to address sexual harassment complaints.',
  }
];

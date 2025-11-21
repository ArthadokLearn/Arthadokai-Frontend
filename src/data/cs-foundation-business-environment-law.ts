export interface Concept {
  id: string;
  title: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  description: string;
  keyPoints: string[];
  example: string;
  formula?: string;
}

export const csFoundationBusinessEnvironmentLawConcepts: Concept[] = [
  {
    id: 'cs-f-bel-1',
    title: 'Business Environment',
    difficulty: 'beginner',
    description: 'Understanding the external and internal business environment.',
    keyPoints: ['PESTEL analysis', 'Micro and macro environment', 'Business opportunities and threats', 'Competitive environment', 'Environmental scanning'],
    example: 'PESTEL analyzes Political, Economic, Social, Technological, Environmental, and Legal factors affecting business.',
  },
  {
    id: 'cs-f-bel-2',
    title: 'Forms of Business Organisation',
    difficulty: 'beginner',
    description: 'Different forms of business organizations and their characteristics.',
    keyPoints: ['Sole proprietorship', 'Partnership', 'Joint stock company', 'Cooperative societies', 'One Person Company'],
    example: 'A private limited company offers limited liability protection to its shareholders.',
  },
  {
    id: 'cs-f-bel-3',
    title: 'Scales of Business',
    difficulty: 'beginner',
    description: 'Classification of businesses based on size and scale of operations.',
    keyPoints: ['Micro, small, and medium enterprises', 'Large scale industries', 'MSME classification', 'Investment criteria', 'Turnover limits'],
    example: 'MSMEs are classified based on investment in plant and machinery and annual turnover.',
  },
  {
    id: 'cs-f-bel-4',
    title: 'Emerging Trends in Business',
    difficulty: 'beginner',
    description: 'Modern business trends including e-commerce, digital transformation, and sustainability.',
    keyPoints: ['E-commerce and digital business', 'Gig economy', 'Sustainable business practices', 'Startup ecosystem', 'Globalization'],
    example: 'E-commerce platforms like Amazon and Flipkart have transformed retail business in India.',
  },
  {
    id: 'cs-f-bel-5',
    title: 'Business Functions',
    difficulty: 'beginner',
    description: 'Key functional areas of business including production, marketing, finance, and HR.',
    keyPoints: ['Production and operations', 'Marketing management', 'Financial management', 'Human resource management', 'Research and development'],
    example: 'Marketing function includes market research, product development, pricing, and promotion.',
  },
  {
    id: 'cs-f-bel-6',
    title: 'Introduction to Law',
    difficulty: 'beginner',
    description: 'Basic concepts of law, sources of law, and legal system in India.',
    keyPoints: ['Definition and purpose of law', 'Sources of law', 'Classification of law', 'Rights and duties', 'Legal persons'],
    example: 'The Constitution is the supreme law of India from which all other laws derive their authority.',
  },
  {
    id: 'cs-f-bel-7',
    title: 'Elements of Company Law',
    difficulty: 'beginner',
    description: 'Basic provisions of Companies Act, 2013.',
    keyPoints: ['Types of companies', 'Incorporation process', 'MOA and AOA', 'Share capital', 'Directors and meetings'],
    example: 'A company is a separate legal entity distinct from its members.',
  },
  {
    id: 'cs-f-bel-8',
    title: 'Elements of Partnership & LLP Law',
    difficulty: 'beginner',
    description: 'Fundamentals of partnership and LLP legislation.',
    keyPoints: ['Partnership essentials', 'Rights and duties of partners', 'LLP characteristics', 'LLP vs partnership', 'Registration requirements'],
    example: 'In an LLP, partners have limited liability while retaining flexibility of partnership.',
  },
  {
    id: 'cs-f-bel-9',
    title: 'Contract Law—Elements',
    difficulty: 'beginner',
    description: 'Essential elements of a valid contract under Indian Contract Act.',
    keyPoints: ['Offer and acceptance', 'Consideration', 'Capacity to contract', 'Free consent', 'Lawful object'],
    example: 'A contract with a minor is void ab initio as the minor lacks capacity to contract.',
  },
  {
    id: 'cs-f-bel-10',
    title: 'Sale of Goods—Elements',
    difficulty: 'beginner',
    description: 'Basic principles of Sale of Goods Act, 1930.',
    keyPoints: ['Definition of goods', 'Sale vs agreement to sell', 'Conditions and warranties', 'Transfer of property', 'Seller and buyer rights'],
    example: 'Goods must be of merchantable quality if purchased by description from a seller who deals in such goods.',
  },
  {
    id: 'cs-f-bel-11',
    title: 'Negotiable Instruments—Elements',
    difficulty: 'beginner',
    description: 'Basics of negotiable instruments including cheques, bills, and promissory notes.',
    keyPoints: ['Types of instruments', 'Characteristics', 'Parties involved', 'Negotiation process', 'Dishonor provisions'],
    example: 'A cheque is a bill of exchange drawn on a specified banker payable on demand.',
  },
  {
    id: 'cs-f-bel-12',
    title: 'Information Technology Act—Elements',
    difficulty: 'beginner',
    description: 'Basic provisions of IT Act for electronic transactions and cybersecurity.',
    keyPoints: ['Electronic records and signatures', 'Cyber crimes', 'Data protection', 'Certifying authorities', 'Digital signatures'],
    example: 'Digital signatures provide authentication and non-repudiation for electronic documents.',
  },
  {
    id: 'cs-f-bel-13',
    title: 'Role of Company Secretary—Duties, Responsibilities & Practice Areas',
    difficulty: 'beginner',
    description: 'Professional role, duties, and career opportunities for Company Secretaries.',
    keyPoints: ['CS profession overview', 'Statutory duties', 'Compliance management', 'Corporate governance role', 'Practice areas'],
    example: 'Company Secretary ensures compliance with Companies Act and SEBI regulations.',
  }
];

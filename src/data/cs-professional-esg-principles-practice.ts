export interface Concept {
  id: string;
  title: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  description: string;
  keyPoints: string[];
  example: string;
  formula?: string;
}

export const csProfessionalESGPrinciplesPracticeConcepts: Concept[] = [
  {
    id: 'cs-p-esg-1',
    title: 'Conceptual Framework of Corporate Governance',
    difficulty: 'advanced',
    description: 'Fundamental principles, theories, and models of corporate governance.',
    keyPoints: [
      'Definition and objectives of corporate governance',
      'Agency theory and stakeholder theory',
      'OECD principles of corporate governance',
      'Evolution of corporate governance in India',
      'Corporate governance models - Anglo-Saxon, German, Japanese',
      'Role of board, shareholders, and stakeholders'
    ],
    example: 'Good corporate governance balances interests of stakeholders including shareholders, management, customers, suppliers, and community.',
  },
  {
    id: 'cs-p-esg-2',
    title: 'Legislative Framework of Corporate Governance in India',
    difficulty: 'advanced',
    description: 'Legal and regulatory framework governing corporate governance in India.',
    keyPoints: [
      'Companies Act 2013 provisions',
      'SEBI LODR Regulations',
      'Kotak Committee recommendations',
      'Uday Kotak Committee on Corporate Governance',
      'Clause 49 evolution',
      'Regulatory authorities - MCA, SEBI, RBI'
    ],
    example: 'SEBI LODR mandates listed companies to have at least one-third independent directors on board.',
  },
  {
    id: 'cs-p-esg-3',
    title: 'Board Effectiveness / Building Better Boards',
    difficulty: 'advanced',
    description: 'Principles and practices for effective board functioning and composition.',
    keyPoints: [
      'Board composition and diversity',
      'Role and responsibilities of board',
      'Board evaluation and performance',
      'Succession planning',
      'Board induction and training',
      'Director competencies and skills matrix'
    ],
    example: 'Effective boards have diverse skills, experience, and perspectives with regular performance evaluations.',
  },
  {
    id: 'cs-p-esg-4',
    title: 'Board Processes through Secretarial Standards',
    difficulty: 'advanced',
    description: 'Implementation of Secretarial Standards for board and general meetings.',
    keyPoints: [
      'SS-1: Board Meetings',
      'SS-2: General Meetings',
      'Notice requirements and agenda preparation',
      'Minutes and resolutions',
      'Attendance and quorum',
      'Video conferencing and technology use'
    ],
    example: 'SS-1 mandates clear agenda, adequate notice, and comprehensive minutes for all board meetings.',
  },
  {
    id: 'cs-p-esg-5',
    title: 'Board Committees',
    difficulty: 'advanced',
    description: 'Constitution, role, and functioning of various board committees.',
    keyPoints: [
      'Audit Committee - composition and functions',
      'Nomination and Remuneration Committee',
      'Stakeholders Relationship Committee',
      'Risk Management Committee',
      'CSR Committee',
      'Other voluntary committees'
    ],
    example: 'Audit Committee must have minimum 3 directors with majority being independent and all financially literate.',
  },
  {
    id: 'cs-p-esg-6',
    title: 'Governance in Professionally Managed vs Promoter Driven Companies',
    difficulty: 'advanced',
    description: 'Comparative analysis of governance structures in different company types.',
    keyPoints: [
      'Characteristics of promoter-driven companies',
      'Professional management structure',
      'Governance challenges in family businesses',
      'Separation of ownership and control',
      'Succession planning differences',
      'Institutional investor influence'
    ],
    example: 'Promoter-driven companies face challenges in independent decision-making while professionally managed firms have clearer governance structures.',
  },
  {
    id: 'cs-p-esg-7',
    title: 'Board Disclosures and Website Disclosures',
    difficulty: 'advanced',
    description: 'Mandatory disclosures for transparency and investor protection.',
    keyPoints: [
      'Annual Report disclosures',
      'Corporate Governance Report',
      'Related party transactions disclosure',
      'Website disclosure requirements',
      'Material events and price sensitive information',
      'Shareholder information section'
    ],
    example: 'Companies must disclose director details, committee composition, and meeting attendance on website.',
  },
  {
    id: 'cs-p-esg-8',
    title: 'Data Governance',
    difficulty: 'advanced',
    description: 'Managing data as strategic asset with privacy and security considerations.',
    keyPoints: [
      'Data governance framework',
      'Data privacy and protection laws',
      'Digital Personal Data Protection Act',
      'Data ownership and access controls',
      'Data quality and lifecycle management',
      'Cybersecurity governance'
    ],
    example: 'Robust data governance ensures data accuracy, accessibility, security, and compliance with privacy regulations.',
  },
  {
    id: 'cs-p-esg-9',
    title: 'Stakeholders\' Rights',
    difficulty: 'advanced',
    description: 'Rights and protection mechanisms for various stakeholders.',
    keyPoints: [
      'Shareholder rights - voting, dividends, information',
      'Minority shareholder protection',
      'Creditor rights',
      'Employee rights',
      'Customer and supplier protection',
      'Investor grievance redressal'
    ],
    example: 'Shareholders have rights to attend meetings, vote on resolutions, receive dividends, and inspect company documents.',
  },
  {
    id: 'cs-p-esg-10',
    title: 'Business Ethics, Code of Conduct and Anti-Bribery',
    difficulty: 'advanced',
    description: 'Ethical frameworks, codes of conduct, and anti-corruption measures.',
    keyPoints: [
      'Code of conduct for directors and employees',
      'Ethical decision-making frameworks',
      'Anti-bribery and corruption policies',
      'Prevention of Corruption Act',
      'Whistleblower policy and vigil mechanism',
      'Conflict of interest management'
    ],
    example: 'Companies must establish vigil mechanism for directors and employees to report unethical behavior.',
  },
  {
    id: 'cs-p-esg-11',
    title: 'Board\'s Accountability on ESG',
    difficulty: 'advanced',
    description: 'Board responsibilities for environmental, social, and governance factors.',
    keyPoints: [
      'Board oversight of ESG matters',
      'ESG strategy and integration',
      'Climate risk governance',
      'ESG performance monitoring',
      'Stakeholder engagement on ESG',
      'ESG reporting and disclosures'
    ],
    example: 'Boards are increasingly accountable for ESG risks including climate change, social equity, and ethical governance.',
  },
  {
    id: 'cs-p-esg-12',
    title: 'Environment and Sustainability',
    difficulty: 'advanced',
    description: 'Environmental management, sustainable practices, and climate action.',
    keyPoints: [
      'Environmental laws and regulations',
      'Climate change and carbon management',
      'Circular economy principles',
      'Resource efficiency and waste management',
      'Biodiversity conservation',
      'Environmental impact assessment'
    ],
    example: 'Companies adopting circular economy reduce waste by reusing, recycling, and regenerating materials.',
  },
  {
    id: 'cs-p-esg-13',
    title: 'Corporate Social Responsibility (CSR)',
    difficulty: 'advanced',
    description: 'CSR framework, implementation, and compliance under Companies Act.',
    keyPoints: [
      'Section 135 - CSR provisions',
      'CSR committee and policy',
      'Eligible CSR activities - Schedule VII',
      '2% spending requirement',
      'Implementation and monitoring',
      'CSR reporting and disclosures'
    ],
    example: 'Companies with net worth ≥₹500 cr or turnover ≥₹1000 cr must spend 2% of average net profit on CSR.',
  },
  {
    id: 'cs-p-esg-14',
    title: 'Green Initiatives',
    difficulty: 'advanced',
    description: 'Environmental initiatives, green technologies, and sustainable operations.',
    keyPoints: [
      'Renewable energy adoption',
      'Green building certification',
      'Sustainable supply chain',
      'Carbon footprint reduction',
      'Green products and services',
      'Environmental certifications - ISO 14001'
    ],
    example: 'Companies implementing solar energy, electric vehicles, and paperless operations demonstrate green initiatives.',
  },
  {
    id: 'cs-p-esg-15',
    title: 'Governance Influencers',
    difficulty: 'advanced',
    description: 'External factors and entities influencing corporate governance practices.',
    keyPoints: [
      'Institutional investors and proxy advisors',
      'Credit rating agencies',
      'Stock exchanges',
      'Media and civil society',
      'International standards and frameworks',
      'ESG rating agencies'
    ],
    example: 'Institutional investors like LIC and mutual funds influence governance through active voting and engagement.',
  },
  {
    id: 'cs-p-esg-16',
    title: 'Empowerment of the Company Secretary Profession',
    difficulty: 'advanced',
    description: 'Evolving role and responsibilities of Company Secretaries in governance.',
    keyPoints: [
      'Statutory recognition and responsibilities',
      'Company Secretary as KMP',
      'Compliance officer role',
      'Secretarial audit and certification',
      'Professional development and ethics',
      'Emerging opportunities in ESG and compliance'
    ],
    example: 'Company Secretaries play crucial role in ensuring compliance, governance, and stakeholder communication.',
  },
  {
    id: 'cs-p-esg-17',
    title: 'Risk Management',
    difficulty: 'advanced',
    description: 'Enterprise risk management framework and board oversight.',
    keyPoints: [
      'Risk management framework',
      'Risk identification and assessment',
      'Risk mitigation strategies',
      'Risk Management Committee',
      'Enterprise Risk Management (ERM)',
      'Emerging risks - cyber, climate, pandemic'
    ],
    example: 'Top 1000 listed companies must constitute Risk Management Committee to oversee enterprise-wide risks.',
  },
  {
    id: 'cs-p-esg-18',
    title: 'Sustainability Audit, ESG Rating and Government Mandates',
    difficulty: 'advanced',
    description: 'Auditing sustainability practices and ESG performance measurement.',
    keyPoints: [
      'Sustainability audit framework',
      'ESG rating methodologies',
      'Top 1000 companies ESG disclosure',
      'Assurance and verification',
      'Government mandates and compliance',
      'International ESG frameworks'
    ],
    example: 'SEBI mandates top 1000 listed companies to submit Business Responsibility and Sustainability Report (BRSR).',
  },
  {
    id: 'cs-p-esg-19',
    title: 'Integrated and Global Reporting – BRSR',
    difficulty: 'advanced',
    description: 'Integrated reporting framework and BRSR compliance.',
    keyPoints: [
      'Integrated Reporting framework',
      'Business Responsibility and Sustainability Report',
      'BRSR Core - mandatory assurance',
      'Nine ESG principles',
      'Stakeholder engagement reporting',
      'Global Reporting Initiative (GRI) standards'
    ],
    example: 'BRSR integrates financial and non-financial performance covering environmental, social, and governance aspects.',
  }
];

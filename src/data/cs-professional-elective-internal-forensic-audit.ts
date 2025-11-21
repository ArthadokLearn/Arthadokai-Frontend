export interface Concept {
  id: string;
  title: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  description: string;
  keyPoints: string[];
  example: string;
  formula?: string;
}

export const csProfessionalElectiveInternalForensicAuditConcepts: Concept[] = [
  {
    id: 'cs-p-ifa-1',
    title: 'Overview of Internal Audit',
    difficulty: 'advanced',
    description: 'Internal audit function, objectives, and organizational role.',
    keyPoints: ['Internal audit definition', 'Independence and objectivity', 'Internal audit charter', 'Reporting relationships', 'IIA standards', 'Value addition role'],
    example: 'Internal audit provides independent assurance on risk management, control, and governance processes.',
  },
  {
    id: 'cs-p-ifa-2',
    title: 'Internal Audit Practices and Procedures',
    difficulty: 'advanced',
    description: 'Standard practices and procedures for internal auditing.',
    keyPoints: ['Audit methodology', 'Audit programs', 'Sampling techniques', 'Documentation standards', 'Quality assurance', 'Continuous auditing'],
    example: 'Risk-based internal audit focuses resources on high-risk areas requiring detailed examination.',
  },
  {
    id: 'cs-p-ifa-3',
    title: 'Internal Controls',
    difficulty: 'advanced',
    description: 'Internal control systems and COSO framework.',
    keyPoints: ['COSO framework', 'Control environment', 'Risk assessment', 'Control activities', 'Information and communication', 'Monitoring'],
    example: 'Effective internal controls ensure operational efficiency, reliable reporting, and regulatory compliance.',
  },
  {
    id: 'cs-p-ifa-4',
    title: 'Audit Planning',
    difficulty: 'advanced',
    description: 'Strategic and operational planning for internal audits.',
    keyPoints: ['Risk assessment', 'Annual audit plan', 'Resource allocation', 'Audit universe', 'Engagement planning', 'Communication with auditees'],
    example: 'Annual audit plan based on risk assessment allocates resources to high-risk areas and critical processes.',
  },
  {
    id: 'cs-p-ifa-5',
    title: 'Audit Tools and Techniques',
    difficulty: 'advanced',
    description: 'Tools and techniques for effective internal auditing.',
    keyPoints: ['Data analytics', 'Computer-assisted audit techniques', 'Process mapping', 'Control testing', 'Benchmarking', 'Fraud indicators'],
    example: 'Data analytics enables auditors to analyze entire population rather than samples, improving audit coverage.',
  },
  {
    id: 'cs-p-ifa-6',
    title: 'Internal Audit of Functional Areas',
    difficulty: 'advanced',
    description: 'Auditing specific functional areas and processes.',
    keyPoints: ['Finance and accounts audit', 'Procurement and purchasing', 'HR and payroll', 'IT systems audit', 'Marketing and sales', 'Inventory management'],
    example: 'Procurement audit examines supplier selection, purchase authorization, receiving, and payment processes.',
  },
  {
    id: 'cs-p-ifa-7',
    title: 'Internal Audit in Various Entities',
    difficulty: 'advanced',
    description: 'Sector-specific internal auditing approaches.',
    keyPoints: ['Banking sector audit', 'Insurance companies', 'Manufacturing entities', 'Service organizations', 'Government entities', 'NPOs and trusts'],
    example: 'Bank internal audit covers loan appraisal, credit monitoring, NPA management, and regulatory compliance.',
  },
  {
    id: 'cs-p-ifa-8',
    title: 'Audit Reporting',
    difficulty: 'advanced',
    description: 'Communicating audit findings and recommendations.',
    keyPoints: ['Report structure', 'Audit observations', 'Recommendations', 'Management responses', 'Follow-up mechanisms', 'Presentation to audit committee'],
    example: 'Audit report presents findings with severity ratings, recommendations, and management action plans.',
  },
  {
    id: 'cs-p-ifa-9',
    title: 'Emerging Issues in Internal Audit',
    difficulty: 'advanced',
    description: 'Contemporary challenges and trends in internal auditing.',
    keyPoints: ['Digital transformation', 'ESG auditing', 'Cybersecurity audit', 'Remote auditing', 'Agile auditing', 'Predictive analytics'],
    example: 'Internal auditors increasingly focus on cybersecurity, data privacy, and digital risks in technology-driven organizations.',
  },
  {
    id: 'cs-p-ifa-10',
    title: 'Basics of Forensic Audit',
    difficulty: 'advanced',
    description: 'Forensic auditing fundamentals and objectives.',
    keyPoints: ['Forensic audit definition', 'Investigative auditing', 'Fraud detection', 'Litigation support', 'Expert witness role', 'Difference from internal audit'],
    example: 'Forensic audit investigates financial irregularities for legal proceedings with admissible evidence.',
  },
  {
    id: 'cs-p-ifa-11',
    title: 'Audit and Investigations',
    difficulty: 'advanced',
    description: 'Investigation techniques and procedures.',
    keyPoints: ['Investigation planning', 'Evidence gathering', 'Interview techniques', 'Document examination', 'Tracing transactions', 'Report writing'],
    example: 'Forensic investigation follows chain of custody for evidence to ensure admissibility in legal proceedings.',
  },
  {
    id: 'cs-p-ifa-12',
    title: 'Forensic Audit Laws',
    difficulty: 'advanced',
    description: 'Legal framework governing forensic audits and investigations.',
    keyPoints: ['Companies Act provisions', 'IPC and fraud provisions', 'Prevention of Corruption Act', 'Money Laundering laws', 'Benami transactions', 'Serious Fraud Investigation Office'],
    example: 'SFIO investigates serious frauds under Companies Act with powers similar to police investigation.',
  },
  {
    id: 'cs-p-ifa-13',
    title: 'Forensic Audit and Evidence Law',
    difficulty: 'advanced',
    description: 'Evidence law applicable to forensic audits.',
    keyPoints: ['Indian Evidence Act', 'Admissibility of evidence', 'Documentary evidence', 'Electronic evidence', 'Expert testimony', 'Chain of custody'],
    example: 'Electronic records admissible as evidence under Section 65B if accompanied by proper certificate.',
  },
  {
    id: 'cs-p-ifa-14',
    title: 'Cyber Forensics',
    difficulty: 'advanced',
    description: 'Digital forensics and cybercrime investigation.',
    keyPoints: ['Digital evidence collection', 'Data recovery techniques', 'Email and network forensics', 'Mobile device forensics', 'Cybercrime investigation', 'Reporting cyber incidents'],
    example: 'Cyber forensics recovers and analyzes digital evidence from computers, mobiles, and networks for investigation.',
  },
  {
    id: 'cs-p-ifa-15',
    title: 'Fraud Detection and Prevention',
    difficulty: 'advanced',
    description: 'Identifying and preventing fraud in organizations.',
    keyPoints: ['Fraud triangle theory', 'Red flags and indicators', 'Fraud risk assessment', 'Preventive controls', 'Detective controls', 'Whistleblower mechanisms'],
    example: 'Fraud triangle comprises opportunity, pressure, and rationalization as factors enabling fraud.',
  }
];

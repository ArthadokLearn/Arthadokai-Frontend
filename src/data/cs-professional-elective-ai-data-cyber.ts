export interface Concept {
  id: string;
  title: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  description: string;
  keyPoints: string[];
  example: string;
  formula?: string;
}

export const csProfessionalElectiveAIDataCyberConcepts: Concept[] = [
  {
    id: 'cs-p-aidc-1',
    title: 'Introduction to Artificial Intelligence',
    difficulty: 'advanced',
    description: 'AI fundamentals, applications, and ethical considerations.',
    keyPoints: ['AI definition and types', 'Machine learning basics', 'Deep learning and neural networks', 'AI applications in business', 'Ethical AI and bias', 'AI governance'],
    example: 'AI enables machines to learn from data and perform tasks requiring human intelligence like recognition, prediction, and decision-making.',
  },
  {
    id: 'cs-p-aidc-2',
    title: 'Cyber Security Basics',
    difficulty: 'advanced',
    description: 'Fundamental concepts of cybersecurity and information security.',
    keyPoints: ['CIA triad - Confidentiality, Integrity, Availability', 'Security threats and vulnerabilities', 'Security controls', 'Access control mechanisms', 'Encryption basics', 'Security awareness'],
    example: 'Cybersecurity protects systems, networks, and data from unauthorized access, attacks, and damage.',
  },
  {
    id: 'cs-p-aidc-3',
    title: 'Cyber Threats and Laws',
    difficulty: 'advanced',
    description: 'Types of cyber threats and legal framework for cybersecurity.',
    keyPoints: ['Malware and ransomware', 'Phishing and social engineering', 'DDoS attacks', 'IT Act 2000', 'Data protection laws', 'Cyber regulations'],
    example: 'Ransomware encrypts victim\'s data and demands payment for decryption key, causing business disruption.',
  },
  {
    id: 'cs-p-aidc-4',
    title: 'Cyber Crimes and Investigation',
    difficulty: 'advanced',
    description: 'Cybercrime types, investigation, and prosecution.',
    keyPoints: ['Types of cybercrimes', 'Hacking and unauthorized access', 'Identity theft', 'Cyber investigation process', 'Digital forensics', 'Reporting mechanisms'],
    example: 'Cybercrime investigation involves identifying, preserving, analyzing digital evidence for legal proceedings.',
  },
  {
    id: 'cs-p-aidc-5',
    title: 'AI and Cyber Regulatory Framework',
    difficulty: 'advanced',
    description: 'Regulations governing AI and cybersecurity in India.',
    keyPoints: ['IT Act and amendments', 'Digital Personal Data Protection Act', 'CERT-In guidelines', 'AI ethics framework', 'Cross-border data transfer', 'Compliance requirements'],
    example: 'Digital Personal Data Protection Act regulates processing of personal data ensuring privacy and consent.',
  },
  {
    id: 'cs-p-aidc-6',
    title: 'Data Analytics and Law',
    difficulty: 'advanced',
    description: 'Legal aspects of data analytics and big data.',
    keyPoints: ['Big data concepts', 'Data analytics types', 'Privacy in analytics', 'Consent for data use', 'Anonymization techniques', 'Legal compliance'],
    example: 'Data analytics extracts insights from large datasets while ensuring privacy through anonymization and consent.',
  },
  {
    id: 'cs-p-aidc-7',
    title: 'Computer Hardware and Software Concepts',
    difficulty: 'advanced',
    description: 'IT infrastructure components and architecture.',
    keyPoints: ['Hardware components', 'Operating systems', 'Application software', 'Client-server architecture', 'Cloud computing', 'Virtualization'],
    example: 'Cloud computing provides on-demand access to computing resources over internet with scalability and flexibility.',
  },
  {
    id: 'cs-p-aidc-8',
    title: 'Network and Software Security',
    difficulty: 'advanced',
    description: 'Securing networks and software applications.',
    keyPoints: ['Firewalls and IDS/IPS', 'VPN and secure tunneling', 'Network segmentation', 'Application security', 'Secure coding practices', 'Vulnerability management'],
    example: 'Firewalls filter network traffic based on security rules preventing unauthorized access to internal networks.',
  },
  {
    id: 'cs-p-aidc-9',
    title: 'Database Management',
    difficulty: 'advanced',
    description: 'Database systems, management, and security.',
    keyPoints: ['DBMS concepts', 'Relational databases', 'SQL basics', 'Database security', 'Backup and recovery', 'Data integrity'],
    example: 'DBMS organizes, stores, and retrieves data efficiently with ACID properties ensuring data consistency.',
  },
  {
    id: 'cs-p-aidc-10',
    title: 'Data Analytics – Tools and Techniques',
    difficulty: 'advanced',
    description: 'Analytical tools and methodologies for data-driven decisions.',
    keyPoints: ['Descriptive analytics', 'Predictive analytics', 'Prescriptive analytics', 'Visualization tools', 'Statistical techniques', 'Machine learning in analytics'],
    example: 'Predictive analytics uses historical data and algorithms to forecast future trends and behaviors.',
  },
  {
    id: 'cs-p-aidc-11',
    title: 'Information Systems Overview',
    difficulty: 'advanced',
    description: 'Enterprise information systems and their role.',
    keyPoints: ['Types of information systems', 'Transaction processing systems', 'Decision support systems', 'Executive information systems', 'Expert systems', 'Knowledge management'],
    example: 'Decision support systems analyze business data helping managers make informed strategic decisions.',
  },
  {
    id: 'cs-p-aidc-12',
    title: 'MIS and ERP Overview',
    difficulty: 'advanced',
    description: 'Management Information Systems and Enterprise Resource Planning.',
    keyPoints: ['MIS components and functions', 'ERP systems', 'ERP modules - SAP, Oracle', 'Implementation challenges', 'Benefits of ERP', 'Cloud ERP'],
    example: 'ERP integrates all business functions into unified system providing real-time information for decision-making.',
  },
  {
    id: 'cs-p-aidc-13',
    title: 'Internet and Emerging Technologies',
    difficulty: 'advanced',
    description: 'Internet technologies, IoT, blockchain, and emerging trends.',
    keyPoints: ['Internet protocols', 'Web technologies', 'Internet of Things (IoT)', 'Blockchain technology', '5G networks', 'Edge computing'],
    example: 'Blockchain provides decentralized, tamper-proof ledger for transactions enabling trust without intermediaries.',
  }
];

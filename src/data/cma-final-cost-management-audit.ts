export interface Concept {
  id: string;
  title: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  description: string;
  keyPoints: string[];
  example: string;
  formula?: string;
}

export const cmaFinalCostManagementAuditConcepts: Concept[] = [
  {
    id: 'cma-f-cma-1',
    title: 'Basics of Cost Audit',
    difficulty: 'advanced',
    description: 'Fundamentals of cost audit, objectives, scope, and regulatory framework.',
    keyPoints: [
      'Definition and objectives of cost audit',
      'Difference between cost audit and financial audit',
      'Scope and coverage of cost audit',
      'Advantages of cost audit',
      'Cost audit vs management audit',
      'Role in cost control and efficiency'
    ],
    example: 'Cost audit provides independent verification of cost records and helps identify cost reduction opportunities.',
  },
  {
    id: 'cma-f-cma-2',
    title: 'Companies (Cost Records and Audit) Rules, 2014',
    difficulty: 'advanced',
    description: 'Legal provisions for maintenance of cost records and cost audit requirements.',
    keyPoints: [
      'Applicability criteria for cost records',
      'Applicability criteria for cost audit',
      'Industries and turnover thresholds',
      'Cost records maintenance requirements',
      'Board resolution and compliance',
      'Exemptions and relaxations'
    ],
    example: 'Cost audit is applicable to companies in specified sectors with turnover ≥ ₹50 crore and cost of production ≥ ₹25 crore.',
  },
  {
    id: 'cma-f-cma-3',
    title: 'Cost Auditor – Appointment and Role',
    difficulty: 'advanced',
    description: 'Appointment, qualifications, duties, rights, and liabilities of cost auditor.',
    keyPoints: [
      'Qualifications and eligibility',
      'Appointment process and approval',
      'Rights and duties of cost auditor',
      'Professional independence',
      'Removal and resignation',
      'Remuneration and certification'
    ],
    example: 'Cost auditor must be a practicing Cost Accountant and member of ICAI in practice.',
  },
  {
    id: 'cma-f-cma-4',
    title: 'Cost Accounting Standards and Generally Accepted Cost Accounting Principles (GACAP)',
    difficulty: 'advanced',
    description: 'Overview of Cost Accounting Standards and cost accounting principles.',
    keyPoints: [
      'CAS 1 to CAS 24 - overview',
      'Mandatory vs recommendatory standards',
      'GACAP principles',
      'Consistency and comparability',
      'Materiality in cost accounting',
      'Compliance requirements'
    ],
    example: 'CAS-4 prescribes principles for determination of cost of production for captive consumption.',
  },
  {
    id: 'cma-f-cma-5',
    title: 'Cost Auditing and Assurance Standards',
    difficulty: 'advanced',
    description: 'Standards for conducting cost audit and providing assurance.',
    keyPoints: [
      'Cost Auditing Standards (CAS) 101-103',
      'Planning and documentation',
      'Audit evidence and verification',
      'Reporting standards',
      'Quality control',
      'Assurance engagement principles'
    ],
    example: 'CAS-101 deals with planning an audit of cost statements.',
  },
  {
    id: 'cma-f-cma-6',
    title: 'Cost Audit Programme',
    difficulty: 'advanced',
    description: 'Planning, designing, and executing a comprehensive cost audit programme.',
    keyPoints: [
      'Audit planning and strategy',
      'Understanding the entity and environment',
      'Risk assessment',
      'Audit programme design',
      'Verification procedures',
      'Sampling techniques'
    ],
    example: 'Cost audit programme outlines specific procedures to be performed for verifying cost records and statements.',
  },
  {
    id: 'cma-f-cma-7',
    title: 'Cost Audit Process and Documentation',
    difficulty: 'advanced',
    description: 'Systematic process of cost audit and documentation requirements.',
    keyPoints: [
      'Audit engagement and planning',
      'Internal control evaluation',
      'Substantive testing',
      'Working paper preparation',
      'Audit documentation standards',
      'Review and supervision'
    ],
    example: 'Working papers provide evidence of audit procedures performed and conclusions reached.',
  },
  {
    id: 'cma-f-cma-8',
    title: 'Preparation and Filing of Cost Audit Report',
    difficulty: 'advanced',
    description: 'Cost audit report format, annexures, and e-filing process.',
    keyPoints: [
      'CRA-3 form - main report',
      'CRA-4 form - annexures',
      'Compliance report',
      'Qualifications and reservations',
      'E-filing through MCA portal',
      'Board meeting and filing timelines'
    ],
    example: 'Cost audit report in Form CRA-3 must be filed within 180 days from closure of financial year.',
  },
  {
    id: 'cma-f-cma-9',
    title: 'Management Audit – Introduction',
    difficulty: 'advanced',
    description: 'Concept, objectives, and scope of management audit.',
    keyPoints: [
      'Definition and objectives',
      'Scope of management audit',
      'Management audit vs other audits',
      'Areas covered - planning, organizing, directing',
      'Performance and efficiency audit',
      'Organizational effectiveness'
    ],
    example: 'Management audit evaluates effectiveness of management processes and systems.',
  },
  {
    id: 'cma-f-cma-10',
    title: 'Management Reporting Issues and Analysis',
    difficulty: 'advanced',
    description: 'Management reporting systems, MIS, and analytical techniques.',
    keyPoints: [
      'Management information system design',
      'Key performance indicators',
      'Variance analysis and reporting',
      'Exception reporting',
      'Dashboard and scorecard reporting',
      'Timeliness and relevance'
    ],
    example: 'MIS should provide relevant, timely, and accurate information for decision making.',
  },
  {
    id: 'cma-f-cma-11',
    title: 'Management Audit – Functions and Scope',
    difficulty: 'advanced',
    description: 'Audit of different management functions and areas.',
    keyPoints: [
      'Production and operations audit',
      'Marketing and sales audit',
      'Financial management audit',
      'HR and personnel audit',
      'R&D and innovation audit',
      'IT systems audit'
    ],
    example: 'Production audit examines efficiency of production processes, capacity utilization, and quality control.',
  },
  {
    id: 'cma-f-cma-12',
    title: 'Corporate Image Evaluation',
    difficulty: 'advanced',
    description: 'Assessment of corporate reputation, brand value, and stakeholder perception.',
    keyPoints: [
      'Corporate image and reputation',
      'Brand valuation methods',
      'Stakeholder perception analysis',
      'Social responsibility audit',
      'Corporate communication effectiveness',
      'Crisis management and PR'
    ],
    example: 'Corporate image audit assesses how stakeholders perceive the company\'s values, ethics, and performance.',
  },
  {
    id: 'cma-f-cma-13',
    title: 'Information System Security Audit',
    difficulty: 'advanced',
    description: 'IT security audit, cyber security assessment, and data protection.',
    keyPoints: [
      'IT security framework',
      'Access controls and authentication',
      'Network security audit',
      'Data encryption and protection',
      'Backup and disaster recovery',
      'Cybersecurity threat assessment'
    ],
    example: 'IS security audit evaluates adequacy of controls to protect information assets from unauthorized access.',
  },
  {
    id: 'cma-f-cma-14',
    title: 'Internal Control and Internal Audit',
    difficulty: 'advanced',
    description: 'Internal control systems, COSO framework, and internal audit function.',
    keyPoints: [
      'COSO internal control framework',
      'Control environment and risk assessment',
      'Control activities and monitoring',
      'Internal audit function and charter',
      'Risk-based internal audit',
      'Internal audit reporting'
    ],
    example: 'COSO framework consists of five components: control environment, risk assessment, control activities, information & communication, and monitoring.',
  },
  {
    id: 'cma-f-cma-15',
    title: 'Operational Audit and Internal Audit under Companies Act, 2013',
    difficulty: 'advanced',
    description: 'Operational audit for efficiency and mandatory internal audit requirements.',
    keyPoints: [
      'Operational audit objectives',
      '3Es - Economy, Efficiency, Effectiveness',
      'Process improvement audit',
      'Section 138 - Internal audit mandate',
      'Applicability criteria',
      'Internal auditor appointment and reporting'
    ],
    example: 'Companies with turnover ≥ ₹200 crore or borrowings ≥ ₹100 crore must appoint internal auditor.',
  },
  {
    id: 'cma-f-cma-16',
    title: 'Audit of Service Sector Organisations',
    difficulty: 'advanced',
    description: 'Specialized audit for banks, insurance, hospitals, hotels, and other service organizations.',
    keyPoints: [
      'Banking sector audit',
      'Insurance company audit',
      'Hospital and healthcare audit',
      'Hotel and hospitality audit',
      'Educational institution audit',
      'Service quality and customer satisfaction'
    ],
    example: 'Hospital audit covers patient care quality, medical records, inventory of medicines, and revenue cycle.',
  },
  {
    id: 'cma-f-cma-17',
    title: 'Forensic Audit',
    difficulty: 'advanced',
    description: 'Investigation of financial fraud, embezzlement, and financial irregularities.',
    keyPoints: [
      'Forensic audit objectives and scope',
      'Fraud detection techniques',
      'Evidence gathering and preservation',
      'Red flags and fraud indicators',
      'Investigation methodology',
      'Expert witness and reporting'
    ],
    example: 'Forensic audit investigates suspected fraud using analytical procedures, interviews, and forensic accounting techniques.',
  },
  {
    id: 'cma-f-cma-18',
    title: 'Anti-Money Laundering',
    difficulty: 'advanced',
    description: 'AML framework, KYC compliance, and suspicious transaction monitoring.',
    keyPoints: [
      'Money laundering - stages and methods',
      'PMLA, 2002 provisions',
      'Know Your Customer (KYC) norms',
      'Suspicious transaction reporting',
      'Customer due diligence',
      'AML compliance programme'
    ],
    example: 'Financial institutions must report cash transactions exceeding ₹10 lakh and all suspicious transactions to FIU-IND.',
  }
];

export interface Concept {
  id: string;
  title: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  description: string;
  keyPoints: string[];
  example: string;
  formula?: string;
}

export const csProfessionalComplianceAuditDiligenceConcepts: Concept[] = [
  {
    id: 'cs-p-cad-1',
    title: 'Compliance Framework',
    difficulty: 'advanced',
    description: 'Establishing comprehensive compliance management systems.',
    keyPoints: [
      'Compliance risk assessment',
      'Compliance calendar and tracking',
      'Regulatory mapping',
      'Compliance policies and procedures',
      'Compliance monitoring and reporting',
      'Technology-enabled compliance'
    ],
    example: 'Robust compliance framework identifies applicable laws, tracks deadlines, and ensures timely submissions.',
  },
  {
    id: 'cs-p-cad-2',
    title: 'Documentation and Maintenance of Records',
    difficulty: 'advanced',
    description: 'Statutory records, registers, and documentation requirements.',
    keyPoints: [
      'Statutory registers under Companies Act',
      'Minutes books and resolutions',
      'Document retention policies',
      'E-filing and digital records',
      'Safe custody and archival',
      'Inspection rights'
    ],
    example: 'Companies must maintain registers of members, directors, charges, and ensure availability for inspection.',
  },
  {
    id: 'cs-p-cad-3',
    title: 'Signing and Certification',
    difficulty: 'advanced',
    description: 'Authority and responsibility for signing documents and certifications.',
    keyPoints: [
      'Board resolutions and authentication',
      'Common seal usage',
      'Digital signatures',
      'Authorized signatories',
      'Certification requirements',
      'Professional liability'
    ],
    example: 'Company Secretary certifies true copies of board resolutions and other documents filed with authorities.',
  },
  {
    id: 'cs-p-cad-4',
    title: 'Legal Framework Governing Company Secretaries',
    difficulty: 'advanced',
    description: 'Company Secretaries Act and regulatory framework for the profession.',
    keyPoints: [
      'Company Secretaries Act, 1980',
      'ICSI regulations and guidelines',
      'Certificate of Practice',
      'Scope of practice',
      'Continuing Professional Education',
      'Professional indemnity insurance'
    ],
    example: 'Company Secretary in practice must obtain Certificate of Practice from ICSI and maintain professional indemnity.',
  },
  {
    id: 'cs-p-cad-5',
    title: 'Values, Ethics and Professional Conduct',
    difficulty: 'advanced',
    description: 'Ethical standards and professional conduct for Company Secretaries.',
    keyPoints: [
      'Code of conduct',
      'Professional integrity and objectivity',
      'Confidentiality obligations',
      'Conflict of interest',
      'Professional competence',
      'Peer review and quality control'
    ],
    example: 'Company Secretaries must maintain confidentiality of client information and avoid conflicts of interest.',
  },
  {
    id: 'cs-p-cad-6',
    title: 'Non-Compliances, Penalties and Adjudications',
    difficulty: 'advanced',
    description: 'Consequences of non-compliance and penalty provisions.',
    keyPoints: [
      'Compoundable and non-compoundable offences',
      'Monetary penalties',
      'Imprisonment provisions',
      'Adjudication process',
      'Special Courts under Companies Act',
      'Prosecution procedures'
    ],
    example: 'Late filing of annual return attracts penalty of ₹100 per day for company and officers in default.',
  },
  {
    id: 'cs-p-cad-7',
    title: 'Relief and Remedies',
    difficulty: 'advanced',
    description: 'Legal remedies and relief mechanisms available to companies.',
    keyPoints: [
      'Compounding of offences',
      'Condonation of delay',
      'Rectification applications',
      'Appeals and revisions',
      'Writ petitions',
      'Alternative dispute resolution'
    ],
    example: 'Companies can compound offences by filing application with ROC and paying prescribed fees.',
  },
  {
    id: 'cs-p-cad-8',
    title: 'Concepts of Various Audits',
    difficulty: 'advanced',
    description: 'Understanding different types of audits and their objectives.',
    keyPoints: [
      'Statutory audit vs internal audit',
      'Secretarial audit',
      'Cost audit and tax audit',
      'Compliance audit',
      'Performance audit',
      'Forensic audit'
    ],
    example: 'Secretarial audit examines compliance with applicable laws, while statutory audit focuses on financial statements.',
  },
  {
    id: 'cs-p-cad-9',
    title: 'Audit Engagement',
    difficulty: 'advanced',
    description: 'Planning and initiating audit engagements professionally.',
    keyPoints: [
      'Engagement letter',
      'Scope and limitations',
      'Terms of reference',
      'Audit fee determination',
      'Independence requirements',
      'Quality control procedures'
    ],
    example: 'Audit engagement letter defines scope, responsibilities, deliverables, and fees for the assignment.',
  },
  {
    id: 'cs-p-cad-10',
    title: 'Audit Principles and Techniques',
    difficulty: 'advanced',
    description: 'Fundamental audit principles and examination techniques.',
    keyPoints: [
      'Risk-based audit approach',
      'Materiality and sampling',
      'Audit evidence collection',
      'Verification and vouching',
      'Analytical procedures',
      'Technology in auditing'
    ],
    example: 'Risk-based auditing focuses resources on high-risk areas requiring detailed examination.',
  },
  {
    id: 'cs-p-cad-11',
    title: 'Audit Process and Documentation',
    difficulty: 'advanced',
    description: 'Systematic audit process and working paper documentation.',
    keyPoints: [
      'Audit planning',
      'Fieldwork and examination',
      'Working papers preparation',
      'Audit documentation standards',
      'Review and supervision',
      'File management and retention'
    ],
    example: 'Comprehensive working papers support audit findings and conclusions with adequate evidence.',
  },
  {
    id: 'cs-p-cad-12',
    title: 'Forming an Opinion and Reporting',
    difficulty: 'advanced',
    description: 'Audit conclusions, opinion formulation, and report writing.',
    keyPoints: [
      'Evaluation of findings',
      'Forming audit opinion',
      'Types of audit reports',
      'Qualifications and reservations',
      'Management representation letter',
      'Reporting format and content'
    ],
    example: 'Auditor expresses qualified opinion when specific exceptions exist, with clear explanation of deviations.',
  },
  {
    id: 'cs-p-cad-13',
    title: 'Secretarial Audit',
    difficulty: 'advanced',
    description: 'Secretarial audit under Section 204 of Companies Act.',
    keyPoints: [
      'Applicability - listed and other companies',
      'Appointment of Secretarial Auditor',
      'Scope of secretarial audit',
      'Form MR-3 - Secretarial Audit Report',
      'Qualifications and reporting',
      'Annual Secretarial Compliance Report'
    ],
    example: 'Listed companies must obtain annual secretarial audit report in Form MR-3 from practicing Company Secretary.',
  },
  {
    id: 'cs-p-cad-14',
    title: 'Internal Audit and Performance Audit',
    difficulty: 'advanced',
    description: 'Internal audit systems and performance evaluation audits.',
    keyPoints: [
      'Internal audit framework',
      'Internal Financial Controls',
      'Risk-based internal audit',
      'Performance measurement',
      'Operational efficiency audit',
      'Value for money audit'
    ],
    example: 'Internal audit evaluates effectiveness of internal controls, risk management, and governance processes.',
  },
  {
    id: 'cs-p-cad-15',
    title: 'Peer Review and Quality Review',
    difficulty: 'advanced',
    description: 'Quality assurance through peer review of professional work.',
    keyPoints: [
      'Peer review objectives',
      'ICSI peer review mechanism',
      'Quality review standards',
      'Review process and methodology',
      'Reporting and recommendations',
      'Continuous improvement'
    ],
    example: 'Peer review ensures quality of professional services through independent evaluation by fellow professionals.',
  },
  {
    id: 'cs-p-cad-16',
    title: 'Due Diligence',
    difficulty: 'advanced',
    description: 'Conducting comprehensive due diligence for transactions and investments.',
    keyPoints: [
      'Types - legal, financial, commercial, technical',
      'Due diligence scope and checklist',
      'Document review and verification',
      'Interviews and site visits',
      'Risk identification and assessment',
      'Due diligence report preparation'
    ],
    example: 'Legal due diligence examines corporate structure, contracts, litigation, compliance, and regulatory approvals.',
  }
];

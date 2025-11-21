export interface Concept {
  id: string;
  title: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  description: string;
  keyPoints: string[];
  example: string;
  formula?: string;
}

export const csProfessionalDraftingPleadingsAppearancesConcepts: Concept[] = [
  {
    id: 'cs-p-dpa-1',
    title: 'Types of Documents',
    difficulty: 'advanced',
    description: 'Classification and understanding of various legal and commercial documents.',
    keyPoints: [
      'Commercial documents - agreements, contracts',
      'Legal documents - deeds, affidavits',
      'Corporate documents - resolutions, notices',
      'Court documents - pleadings, petitions',
      'Conveyancing documents',
      'Digital and electronic documents'
    ],
    example: 'Agreements are bilateral documents while deeds may be unilateral or bilateral with specific formalities.',
  },
  {
    id: 'cs-p-dpa-2',
    title: 'General Principles of Drafting',
    difficulty: 'advanced',
    description: 'Fundamental principles and techniques for effective legal drafting.',
    keyPoints: [
      'Clarity, precision, and brevity',
      'Use of plain language',
      'Logical structure and organization',
      'Defined terms and interpretation clauses',
      'Avoiding ambiguity',
      'Gender-neutral language'
    ],
    example: 'Good drafting uses clear, simple language: "within 30 days" rather than "within a period not exceeding 30 days".',
  },
  {
    id: 'cs-p-dpa-3',
    title: 'Laws Relating to Drafting and Conveyancing',
    difficulty: 'advanced',
    description: 'Legal framework governing drafting and property conveyancing.',
    keyPoints: [
      'Transfer of Property Act, 1882',
      'Indian Contract Act, 1872',
      'Registration Act, 1908',
      'Indian Stamp Act, 1899',
      'Specific Relief Act, 1963',
      'State-specific conveyancing laws'
    ],
    example: 'Sale deed requires registration under Registration Act and payment of stamp duty under Stamp Act.',
  },
  {
    id: 'cs-p-dpa-4',
    title: 'Drafting of Agreements, Deeds and Documents',
    difficulty: 'advanced',
    description: 'Practical drafting of various agreements and deeds.',
    keyPoints: [
      'Sale and purchase agreements',
      'Lease and rental agreements',
      'Partnership deed',
      'Power of attorney',
      'Gift deed and will',
      'Affidavits and undertakings'
    ],
    example: 'Lease agreement must specify parties, property description, rent, duration, and terms of renewal/termination.',
  },
  {
    id: 'cs-p-dpa-5',
    title: 'Drafting of Commercial Contracts',
    difficulty: 'advanced',
    description: 'Drafting complex commercial and business contracts.',
    keyPoints: [
      'Non-disclosure agreements (NDA)',
      'Service level agreements (SLA)',
      'Franchise agreements',
      'Distribution agreements',
      'Joint venture agreements',
      'Licensing agreements'
    ],
    example: 'NDA protects confidential information with specific obligations, exclusions, and consequences of breach.',
  },
  {
    id: 'cs-p-dpa-6',
    title: 'Documents under Companies Act, 2013',
    difficulty: 'advanced',
    description: 'Drafting corporate documents as per Companies Act requirements.',
    keyPoints: [
      'Memorandum and Articles of Association',
      'Board resolutions and minutes',
      'Shareholders\' resolutions',
      'Notice of general meetings',
      'Debenture trust deed',
      'Prospectus and offer documents'
    ],
    example: 'Special resolution requires 21 days notice and approval by 75% majority of members present and voting.',
  },
  {
    id: 'cs-p-dpa-7',
    title: 'Art of Opinion Writing',
    difficulty: 'advanced',
    description: 'Professional opinion writing on legal and corporate matters.',
    keyPoints: [
      'Structure of legal opinion',
      'Facts, issues, and analysis',
      'Legal research and citations',
      'Reasoned conclusions',
      'Qualifications and assumptions',
      'Professional responsibility'
    ],
    example: 'Legal opinion clearly states facts, identifies issues, analyzes law, and provides reasoned conclusion with caveats.',
  },
  {
    id: 'cs-p-dpa-8',
    title: 'Commercial Contract Management',
    difficulty: 'advanced',
    description: 'Lifecycle management of commercial contracts from negotiation to closure.',
    keyPoints: [
      'Contract negotiation strategies',
      'Due diligence and risk assessment',
      'Performance monitoring',
      'Amendment and variation',
      'Dispute resolution mechanisms',
      'Contract termination and renewal'
    ],
    example: 'Effective contract management involves tracking obligations, milestones, renewals, and ensuring compliance.',
  },
  {
    id: 'cs-p-dpa-9',
    title: 'Judicial and Administrative Framework',
    difficulty: 'advanced',
    description: 'Understanding courts, tribunals, and administrative authorities.',
    keyPoints: [
      'Hierarchy of courts in India',
      'Jurisdiction - territorial, pecuniary, subject matter',
      'NCLT and NCLAT',
      'SAT and other tribunals',
      'Regulatory authorities - MCA, SEBI, ROC',
      'Alternative dispute resolution forums'
    ],
    example: 'NCLT has jurisdiction over company law matters including insolvency, mergers, and oppression cases.',
  },
  {
    id: 'cs-p-dpa-10',
    title: 'Pleadings',
    difficulty: 'advanced',
    description: 'Drafting pleadings including plaints, written statements, and replies.',
    keyPoints: [
      'Plaint - essential elements',
      'Written statement and counter-claim',
      'Rejoinder and replication',
      'Interlocutory applications',
      'Civil Procedure Code provisions',
      'Verification and court fees'
    ],
    example: 'Plaint must contain cause of action, relief sought, valuation, and verification by plaintiff.',
  },
  {
    id: 'cs-p-dpa-11',
    title: 'Art of Advocacy and Appearances',
    difficulty: 'advanced',
    description: 'Skills and techniques for effective advocacy and court appearances.',
    keyPoints: [
      'Preparation and case research',
      'Oral arguments and presentation',
      'Professional conduct and etiquette',
      'Examination and cross-examination',
      'Use of precedents',
      'Virtual court appearances'
    ],
    example: 'Effective advocacy requires thorough preparation, clear articulation, and persuasive presentation of facts and law.',
  },
  {
    id: 'cs-p-dpa-12',
    title: 'Applications, Petitions and Appeals under Companies Act, 2013',
    difficulty: 'advanced',
    description: 'Filing applications and appeals before NCLT/NCLAT under Companies Act.',
    keyPoints: [
      'Company petitions under Companies Act',
      'Oppression and mismanagement - Sections 241-246',
      'Compromise and arrangements - Section 230',
      'Winding-up petitions',
      'Appeals to NCLAT',
      'Procedural compliance'
    ],
    example: 'Oppression petition can be filed by members holding at least 10% of issued share capital or 100 members.',
  },
  {
    id: 'cs-p-dpa-13',
    title: 'Adjudications and Appeals under SEBI Laws',
    difficulty: 'advanced',
    description: 'Proceedings before SEBI and Securities Appellate Tribunal.',
    keyPoints: [
      'SEBI enforcement actions',
      'Show cause notices and replies',
      'Consent mechanisms',
      'Adjudication proceedings',
      'Appeals to SAT',
      'Settlement and compounding'
    ],
    example: 'SEBI issues show cause notice before passing any adverse order; parties can file detailed reply.',
  },
  {
    id: 'cs-p-dpa-14',
    title: 'Appearances before Other Regulatory Authorities',
    difficulty: 'advanced',
    description: 'Representing before various regulatory and administrative authorities.',
    keyPoints: [
      'Registrar of Companies (ROC)',
      'Competition Commission of India',
      'Income Tax authorities',
      'GST authorities',
      'RBI and FEMA authorities',
      'Professional conduct and documentation'
    ],
    example: 'Company Secretaries can appear before ROC for compounding of offences and rectification of documents.',
  }
];

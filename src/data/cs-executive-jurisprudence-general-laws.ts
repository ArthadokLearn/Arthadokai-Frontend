export interface Concept {
  id: string;
  title: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  description: string;
  keyPoints: string[];
  example: string;
  formula?: string;
}

export const csExecutiveJurisprudenceGeneralLawsConcepts: Concept[] = [
  {
    id: 'cs-e-jgl-1',
    title: 'Sources of Law',
    difficulty: 'intermediate',
    description: 'Understanding various sources of law including customs, precedents, legislation, and judicial decisions.',
    keyPoints: [
      'Primary sources - legislation and precedents',
      'Secondary sources - customs and conventions',
      'Judicial precedents and stare decisis',
      'Statutory law and delegated legislation',
      'Equity and natural justice',
      'International law as a source'
    ],
    example: 'Supreme Court judgments serve as binding precedents for lower courts under the doctrine of stare decisis.',
  },
  {
    id: 'cs-e-jgl-2',
    title: 'Constitution of India',
    difficulty: 'intermediate',
    description: 'Fundamental features, rights, duties, and constitutional framework of India.',
    keyPoints: [
      'Preamble and basic structure',
      'Fundamental Rights (Articles 12-35)',
      'Fundamental Duties (Article 51A)',
      'Directive Principles of State Policy',
      'Union and State relations',
      'Amendment procedure (Article 368)'
    ],
    example: 'Right to Equality (Article 14) ensures equal protection of laws to all persons within the territory of India.',
  },
  {
    id: 'cs-e-jgl-3',
    title: 'Interpretation of Statutes',
    difficulty: 'intermediate',
    description: 'Principles and rules for interpreting statutes and legal documents.',
    keyPoints: [
      'Literal rule of interpretation',
      'Golden rule and mischief rule',
      'Harmonious construction',
      'Internal and external aids',
      'Prospective vs retrospective operation',
      'Presumptions in interpretation'
    ],
    example: 'Mischief rule seeks to determine the legislative intent by identifying the defect the statute aimed to remedy.',
  },
  {
    id: 'cs-e-jgl-4',
    title: 'Administrative Laws',
    difficulty: 'intermediate',
    description: 'Principles of administrative law, delegated legislation, and judicial review.',
    keyPoints: [
      'Delegated legislation and its types',
      'Principles of natural justice - audi alteram partem',
      'Rule against bias',
      'Judicial review of administrative actions',
      'Administrative tribunals',
      'Doctrine of ultra vires'
    ],
    example: 'Principles of natural justice require that no person should be condemned unheard (audi alteram partem).',
  },
  {
    id: 'cs-e-jgl-5',
    title: 'Law of Torts',
    difficulty: 'intermediate',
    description: 'Civil wrongs, tortious liability, and remedies under tort law.',
    keyPoints: [
      'Definition and essentials of tort',
      'Negligence and duty of care',
      'Nuisance - public and private',
      'Defamation - libel and slander',
      'Vicarious liability',
      'Remedies - damages, injunction'
    ],
    example: 'In negligence, plaintiff must prove duty of care, breach of duty, and resulting damage (Donoghue v Stevenson).',
  },
  {
    id: 'cs-e-jgl-6',
    title: 'Law relating to Civil Procedure',
    difficulty: 'intermediate',
    description: 'Civil Procedure Code provisions for conducting civil litigation.',
    keyPoints: [
      'Jurisdiction of civil courts',
      'Plaint and written statement',
      'Summons and service',
      'Interim orders and injunctions',
      'Trial procedure',
      'Judgment and decree execution'
    ],
    example: 'A plaint must contain facts showing cause of action, relief sought, and valuation for court fees.',
  },
  {
    id: 'cs-e-jgl-7',
    title: 'Laws relating to Crime and its Procedure',
    difficulty: 'intermediate',
    description: 'Indian Penal Code and Criminal Procedure Code provisions.',
    keyPoints: [
      'Classification of offences',
      'General exceptions - Sections 76-106',
      'Cognizable and non-cognizable offences',
      'FIR and investigation',
      'Arrest and bail provisions',
      'Trial procedure in criminal cases'
    ],
    example: 'Cognizable offences allow police to arrest without warrant, while non-cognizable require court permission.',
  },
  {
    id: 'cs-e-jgl-8',
    title: 'Law relating to Evidence',
    difficulty: 'intermediate',
    description: 'Indian Evidence Act provisions for admissibility and relevance of evidence.',
    keyPoints: [
      'Relevancy and admissibility of evidence',
      'Oral and documentary evidence',
      'Burden of proof',
      'Examination of witnesses',
      'Privileged communications',
      'Electronic evidence'
    ],
    example: 'Burden of proof in civil cases lies on the plaintiff who asserts the affirmative (Section 101).',
  },
  {
    id: 'cs-e-jgl-9',
    title: 'Law relating to Specific Relief',
    difficulty: 'intermediate',
    description: 'Specific Relief Act for enforcement of civil rights through specific performance.',
    keyPoints: [
      'Specific performance of contracts',
      'Discretion of court',
      'Contracts not specifically enforceable',
      'Injunctions - temporary and permanent',
      'Declaratory decrees',
      'Damages in addition to relief'
    ],
    example: 'Specific performance of contract to sell immovable property may be granted if damages are inadequate remedy.',
  },
  {
    id: 'cs-e-jgl-10',
    title: 'Law relating to Limitation',
    difficulty: 'intermediate',
    description: 'Limitation Act provisions for time limits to file legal proceedings.',
    keyPoints: [
      'Period of limitation for various suits',
      'Computation of period',
      'Extension and exclusion of time',
      'Effect of limitation',
      'Acknowledgment and part payment',
      'Savings provisions'
    ],
    example: 'Suit for recovery of money lent must be filed within 3 years from when loan becomes due.',
  },
  {
    id: 'cs-e-jgl-11',
    title: 'Law relating to Arbitration, Mediation and Conciliation',
    difficulty: 'intermediate',
    description: 'Arbitration and Conciliation Act for alternative dispute resolution.',
    keyPoints: [
      'Arbitration agreement and clause',
      'Appointment of arbitrators',
      'Arbitral proceedings and awards',
      'Challenge to arbitral awards',
      'Conciliation proceedings',
      'International commercial arbitration'
    ],
    example: 'Parties can resolve disputes through arbitration by appointing neutral arbitrator as per arbitration clause.',
  },
  {
    id: 'cs-e-jgl-12',
    title: 'Indian Stamp Law',
    difficulty: 'intermediate',
    description: 'Indian Stamp Act provisions for stamping of documents and instruments.',
    keyPoints: [
      'Instruments chargeable with duty',
      'Types of stamps - adhesive, impressed',
      'Valuation for stamp duty',
      'Time of stamping',
      'Consequences of non-stamping',
      'Adjudication of stamp duty'
    ],
    example: 'Conveyance deed transferring immovable property is chargeable with stamp duty as per state rates.',
  },
  {
    id: 'cs-e-jgl-13',
    title: 'Law relating to Registration of Documents',
    difficulty: 'intermediate',
    description: 'Registration Act for compulsory and optional registration of documents.',
    keyPoints: [
      'Documents requiring compulsory registration',
      'Optional registration',
      'Time and place of registration',
      'Procedure for registration',
      'Effect of non-registration',
      'Endorsement and filing'
    ],
    example: 'Sale deed of immovable property exceeding ₹100 requires compulsory registration within 4 months.',
  },
  {
    id: 'cs-e-jgl-14',
    title: 'Right to Information Law',
    difficulty: 'intermediate',
    description: 'RTI Act empowering citizens to seek information from public authorities.',
    keyPoints: [
      'Right to information - scope',
      'Public Information Officer (PIO)',
      'Procedure for seeking information',
      'Exemptions from disclosure',
      'Information Commission',
      'Penalties for non-compliance'
    ],
    example: 'Citizens can file RTI application to PIO seeking information, with response required within 30 days.',
  },
  {
    id: 'cs-e-jgl-15',
    title: 'Law relating to Information Technology',
    difficulty: 'intermediate',
    description: 'IT Act provisions for electronic commerce, digital signatures, and cyber crimes.',
    keyPoints: [
      'Digital signatures and electronic records',
      'Electronic governance',
      'Cyber crimes and penalties',
      'Data protection and privacy',
      'Intermediary liability',
      'Cyber appellate tribunal'
    ],
    example: 'Digital signatures authenticated through certifying authority have same legal validity as handwritten signatures.',
  },
  {
    id: 'cs-e-jgl-16',
    title: 'Contract Law',
    difficulty: 'intermediate',
    description: 'Indian Contract Act governing formation, performance, and discharge of contracts.',
    keyPoints: [
      'Essentials of valid contract',
      'Offer and acceptance',
      'Consideration and capacity',
      'Free consent and lawful object',
      'Performance and discharge',
      'Breach and remedies'
    ],
    example: 'Valid contract requires offer, acceptance, consideration, capacity, free consent, and lawful object.',
  },
  {
    id: 'cs-e-jgl-17',
    title: 'Law relating to Sale of Goods',
    difficulty: 'intermediate',
    description: 'Sale of Goods Act governing sale transactions, conditions, warranties, and remedies.',
    keyPoints: [
      'Contract of sale - sale and agreement to sell',
      'Conditions and warranties',
      'Transfer of property and risk',
      'Performance of contract',
      'Rights of unpaid seller',
      'Remedies for breach'
    ],
    example: 'Condition precedent to sale: goods must be of merchantable quality and fit for purpose disclosed.',
  },
  {
    id: 'cs-e-jgl-18',
    title: 'Law relating to Negotiable Instruments',
    difficulty: 'intermediate',
    description: 'Negotiable Instruments Act covering cheques, bills of exchange, and promissory notes.',
    keyPoints: [
      'Types of negotiable instruments',
      'Holder and holder in due course',
      'Negotiation and endorsement',
      'Presentment and dishonour',
      'Paying and collecting banker',
      'Offences and penalties - Section 138'
    ],
    example: 'Dishonour of cheque for insufficiency of funds is criminal offence punishable under Section 138.',
  }
];

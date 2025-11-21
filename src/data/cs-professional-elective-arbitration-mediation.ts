export interface Concept {
  id: string;
  title: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  description: string;
  keyPoints: string[];
  example: string;
  formula?: string;
}

export const csProfessionalElectiveArbitrationMediationConcepts: Concept[] = [
  {
    id: 'cs-p-am-1',
    title: 'Arbitration – Basics and Scope',
    difficulty: 'advanced',
    description: 'Fundamentals of arbitration as alternative dispute resolution.',
    keyPoints: ['Arbitration definition', 'Advantages over litigation', 'Types of arbitration', 'Arbitration and Conciliation Act 1996', 'Institutional vs ad-hoc', 'Arbitrability of disputes'],
    example: 'Arbitration provides faster, confidential dispute resolution by neutral arbitrators chosen by parties.',
  },
  {
    id: 'cs-p-am-2',
    title: 'Commercial Transactions and Disputes',
    difficulty: 'advanced',
    description: 'Commercial disputes suitable for arbitration.',
    keyPoints: ['Contract disputes', 'Partnership disputes', 'Construction contracts', 'Joint ventures', 'IP disputes', 'International commercial disputes'],
    example: 'Construction contract disputes involving payment, delays, quality are commonly resolved through arbitration.',
  },
  {
    id: 'cs-p-am-3',
    title: 'Arbitration Procedure and Clauses',
    difficulty: 'advanced',
    description: 'Drafting arbitration clauses and initiating proceedings.',
    keyPoints: ['Arbitration agreement essentials', 'Arbitration clause drafting', 'Scott v Avery clause', 'Appointment of arbitrators', 'Jurisdiction of arbitrator', 'Seat vs venue'],
    example: 'Well-drafted arbitration clause specifies number of arbitrators, seat, governing law, and institutional rules.',
  },
  {
    id: 'cs-p-am-4',
    title: 'Arbitral Proceedings and Awards',
    difficulty: 'advanced',
    description: 'Conduct of arbitration and making awards.',
    keyPoints: ['Statement of claim and defense', 'Evidence and hearings', 'Interim measures', 'Arbitral award types', 'Time limits for award', 'Costs and fees'],
    example: 'Arbitrator must make award within 12 months from date of completing pleadings, extendable by 6 months.',
  },
  {
    id: 'cs-p-am-5',
    title: 'Challenges to Awards',
    difficulty: 'advanced',
    description: 'Setting aside and enforcement of arbitral awards.',
    keyPoints: ['Grounds for setting aside - Section 34', 'Public policy violation', 'Patent illegality', 'Time limit - 3 months', 'Appeal against Section 34 order', 'Enforcement of awards'],
    example: 'Arbitral award can be set aside if contrary to public policy or fundamental policy of Indian law.',
  },
  {
    id: 'cs-p-am-6',
    title: 'Fast Track and Virtual Arbitration',
    difficulty: 'advanced',
    description: 'Expedited arbitration and online dispute resolution.',
    keyPoints: ['Fast track arbitration - Section 29B', 'Sole arbitrator', '6-month timeline', 'Virtual hearings', 'E-filing and digital evidence', 'Technology in arbitration'],
    example: 'Fast track arbitration completes proceedings within 6 months with sole arbitrator for quick resolution.',
  },
  {
    id: 'cs-p-am-7',
    title: 'Stock Exchange Arbitration',
    difficulty: 'advanced',
    description: 'Arbitration of securities market disputes.',
    keyPoints: ['SEBI arbitration framework', 'Investor grievance redressal', 'Stock exchange arbitration panels', 'SCORES platform', 'Arbitrable disputes', 'Award enforcement'],
    example: 'Stock exchange arbitration resolves disputes between investors and brokers regarding trading transactions.',
  },
  {
    id: 'cs-p-am-8',
    title: 'International Commercial Arbitration',
    difficulty: 'advanced',
    description: 'Cross-border commercial arbitration.',
    keyPoints: ['Definition - Section 2(1)(f)', 'New York Convention', 'Foreign awards recognition', 'UNCITRAL Model Law', 'Choice of law', 'Enforcement in India'],
    example: 'International commercial arbitration involves parties from different countries with one party having business place abroad.',
  },
  {
    id: 'cs-p-am-9',
    title: 'International Arbitration Law',
    difficulty: 'advanced',
    description: 'International arbitration institutions and rules.',
    keyPoints: ['ICC Arbitration', 'LCIA Rules', 'SIAC Arbitration', 'UNCITRAL Rules', 'Institutional arbitration', 'Emergency arbitrators'],
    example: 'ICC International Court of Arbitration provides institutional arbitration with established rules and administration.',
  },
  {
    id: 'cs-p-am-10',
    title: 'Conciliation Procedures',
    difficulty: 'advanced',
    description: 'Conciliation process under Arbitration Act.',
    keyPoints: ['Conciliation vs arbitration', 'Appointment of conciliator', 'Conciliation proceedings', 'Settlement agreement', 'Finality of settlement', 'Confidentiality'],
    example: 'Conciliator facilitates negotiation between parties to reach amicable settlement without imposing decision.',
  },
  {
    id: 'cs-p-am-11',
    title: 'Mediation Process and Rules',
    difficulty: 'advanced',
    description: 'Mediation as ADR mechanism and recent legislation.',
    keyPoints: ['Mediation Act 2023', 'Pre-litigation mediation', 'Mediator qualifications', 'Mediation proceedings', 'Settlement agreement enforcement', 'Confidentiality provisions'],
    example: 'Mediation Act 2023 provides statutory framework for mediation with enforceability of settlement agreements.',
  },
  {
    id: 'cs-p-am-12',
    title: 'Negotiation and Communication',
    difficulty: 'advanced',
    description: 'Negotiation skills and communication in dispute resolution.',
    keyPoints: ['Negotiation strategies', 'Win-win approach', 'BATNA and WATNA', 'Communication techniques', 'Cultural considerations', 'Ethical negotiation'],
    example: 'BATNA (Best Alternative to Negotiated Agreement) defines minimum acceptable outcome in negotiation.',
  },
  {
    id: 'cs-p-am-13',
    title: 'Scope and Global Trends in Mediation',
    difficulty: 'advanced',
    description: 'International mediation developments and trends.',
    keyPoints: ['Singapore Convention on Mediation', 'Cross-border mediation', 'Online dispute resolution', 'Court-annexed mediation', 'Commercial mediation', 'Global mediation practices'],
    example: 'Singapore Convention enables cross-border enforcement of mediated settlement agreements like New York Convention for arbitration.',
  }
];

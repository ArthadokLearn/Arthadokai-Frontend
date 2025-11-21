export interface Concept {
  id: string;
  title: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  description: string;
  keyPoints: string[];
  example: string;
  formula?: string;
}

export const cmaFoundationBusinessLawsCommunicationConcepts: Concept[] = [
  {
    id: 'cma-f-blc-1',
    title: 'Introduction',
    difficulty: 'beginner',
    description: 'Introduction to business laws and legal framework in India.',
    keyPoints: [
      'Understanding the legal system',
      'Sources of law in India',
      'Importance of business laws',
      'Legal compliance for businesses'
    ],
    example: 'A business must comply with various laws such as contract law, company law, and tax laws.',
  },
  {
    id: 'cma-f-blc-2',
    title: 'Indian Contract Act, 1872',
    difficulty: 'beginner',
    description: 'Fundamentals of contract law including offer, acceptance, consideration, and capacity to contract.',
    keyPoints: [
      'Essential elements of a valid contract',
      'Offer and acceptance rules',
      'Consideration - "something in return"',
      'Capacity to contract',
      'Free consent and legality of object'
    ],
    example: 'When A offers to sell goods to B for ₹10,000 and B accepts, a valid contract is formed if all elements are present.',
  },
  {
    id: 'cma-f-blc-3',
    title: 'Sale of Goods Act, 1930',
    difficulty: 'beginner',
    description: 'Laws governing the sale and purchase of goods, conditions and warranties, transfer of ownership.',
    keyPoints: [
      'Definition of goods and sale',
      'Conditions vs warranties',
      'Transfer of property in goods',
      'Rights of unpaid seller',
      'Sale vs agreement to sell'
    ],
    example: 'When goods are sold "as is," the buyer cannot claim warranty unless specifically mentioned in the contract.',
  },
  {
    id: 'cma-f-blc-4',
    title: 'Negotiable Instruments Act, 1881',
    difficulty: 'beginner',
    description: 'Laws relating to promissory notes, bills of exchange, and cheques.',
    keyPoints: [
      'Types of negotiable instruments',
      'Characteristics of negotiable instruments',
      'Parties to negotiable instruments',
      'Dishonor of cheques',
      'Holder and holder in due course'
    ],
    example: 'A cheque is a bill of exchange drawn on a specified banker and payable on demand.',
  },
  {
    id: 'cma-f-blc-5',
    title: 'Business Communication',
    difficulty: 'beginner',
    description: 'Principles of effective business communication, written and oral communication skills.',
    keyPoints: [
      'Importance of communication in business',
      'Types of business communication',
      'Barriers to effective communication',
      'Business letter writing',
      'Email etiquette and professional communication'
    ],
    example: 'A business proposal should be clear, concise, and professionally formatted to convey the intended message effectively.',
  }
];

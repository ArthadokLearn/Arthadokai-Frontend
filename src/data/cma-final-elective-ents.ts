export interface Concept {
  id: string;
  title: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  description: string;
  keyPoints: string[];
  example: string;
  formula?: string;
}

export const cmaFinalElectiveENTSConcepts: Concept[] = [
  {
    id: 'cma-f-ents-1',
    title: 'Entrepreneurial Skills and Competencies',
    difficulty: 'advanced',
    description: 'Essential skills, traits, and competencies required for successful entrepreneurship.',
    keyPoints: [
      'Entrepreneurial mindset and attitude',
      'Creativity and innovation skills',
      'Problem-solving abilities',
      'Risk-taking propensity',
      'Resilience and perseverance',
      'Networking and relationship building'
    ],
    example: 'Successful entrepreneurs possess vision, creativity, calculated risk-taking ability, and resilience to overcome failures.',
  },
  {
    id: 'cma-f-ents-2',
    title: 'Entrepreneurial Ecosystem',
    difficulty: 'advanced',
    description: 'Components of entrepreneurial ecosystem including enablers, support systems, and policies.',
    keyPoints: [
      'Startup ecosystem components',
      'Incubators and accelerators',
      'Angel investors and venture capital',
      'Government schemes - Startup India, MUDRA',
      'Regulatory framework',
      'Academic and research institutions'
    ],
    example: 'A vibrant entrepreneurial ecosystem includes access to funding, mentorship, talent, markets, and supportive policies.',
  },
  {
    id: 'cma-f-ents-3',
    title: 'Idea Generation to Action',
    difficulty: 'advanced',
    description: 'Opportunity identification, idea validation, and business plan development.',
    keyPoints: [
      'Opportunity recognition techniques',
      'Market research and validation',
      'Business model canvas',
      'Lean startup methodology',
      'Minimum Viable Product (MVP)',
      'Business plan preparation'
    ],
    example: 'Lean startup approach advocates building MVP, testing with customers, learning, and iterating quickly.',
  },
  {
    id: 'cma-f-ents-4',
    title: 'Value Addition and Differentiation',
    difficulty: 'advanced',
    description: 'Creating and delivering unique value propositions to customers.',
    keyPoints: [
      'Value proposition design',
      'Customer segments and personas',
      'Unique selling proposition (USP)',
      'Competitive advantage',
      'Blue ocean strategy',
      'Innovation and differentiation'
    ],
    example: 'Value proposition explains how the product/service solves customer problems better than alternatives.',
  },
  {
    id: 'cma-f-ents-5',
    title: 'Scalability and Business Stabilisation',
    difficulty: 'advanced',
    description: 'Growth strategies, scaling operations, and achieving business sustainability.',
    keyPoints: [
      'Growth strategies - market penetration, development',
      'Scaling operations and systems',
      'Funding for growth - Series A, B, C',
      'Organizational structure for scale',
      'Operational efficiency',
      'Achieving product-market fit'
    ],
    example: 'Scalability requires building systems, processes, and infrastructure that can handle exponential growth.',
  },
  {
    id: 'cma-f-ents-6',
    title: 'Risk Management in Entrepreneurship',
    difficulty: 'advanced',
    description: 'Identifying, assessing, and mitigating entrepreneurial risks.',
    keyPoints: [
      'Types of entrepreneurial risks',
      'Market and competitive risks',
      'Financial risks and cash flow management',
      'Technology and execution risks',
      'Regulatory and compliance risks',
      'Risk mitigation strategies'
    ],
    example: 'Entrepreneurs face market risk, technology risk, financial risk, and execution risk at different stages.',
  },
  {
    id: 'cma-f-ents-7',
    title: 'Leadership and Team Building',
    difficulty: 'advanced',
    description: 'Leadership styles, team formation, and organizational culture development.',
    keyPoints: [
      'Entrepreneurial leadership',
      'Building high-performance teams',
      'Co-founder dynamics',
      'Organizational culture',
      'Employee motivation and retention',
      'Conflict resolution'
    ],
    example: 'Effective entrepreneurial leaders inspire vision, build strong teams, and create culture of innovation.',
  },
  {
    id: 'cma-f-ents-8',
    title: 'New-age Business Models and Digital Ventures',
    difficulty: 'advanced',
    description: 'Digital business models, platform economy, and technology-driven ventures.',
    keyPoints: [
      'Platform business models',
      'Subscription and freemium models',
      'Marketplace and aggregator models',
      'SaaS and cloud-based businesses',
      'Fintech and edtech innovations',
      'Social enterprise models'
    ],
    example: 'Platform businesses like Uber and Airbnb create value by connecting suppliers with consumers.',
  }
];

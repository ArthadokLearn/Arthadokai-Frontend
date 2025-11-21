export interface Concept {
  id: string;
  title: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  description: string;
  keyPoints: string[];
  example: string;
  formula?: string;
}

export const csProfessionalStrategicManagementFinanceConcepts: Concept[] = [
  {
    id: 'cs-p-smf-1',
    title: 'Introduction to Strategic Management',
    difficulty: 'advanced',
    description: 'Strategic management process, concepts, and frameworks.',
    keyPoints: [
      'Strategic management definition and importance',
      'Vision, mission, and objectives',
      'Strategic management process',
      'Levels of strategy - corporate, business, functional',
      'Strategic thinking and leadership',
      'Contemporary strategic issues'
    ],
    example: 'Strategic management involves formulation, implementation, and evaluation of cross-functional decisions achieving long-term objectives.',
  },
  {
    id: 'cs-p-smf-2',
    title: 'Analysing External and Internal Environment',
    difficulty: 'advanced',
    description: 'Environmental scanning and analysis for strategic decisions.',
    keyPoints: [
      'PESTEL analysis',
      'Porter\'s Five Forces',
      'Industry and competitive analysis',
      'SWOT analysis',
      'Internal resource audit',
      'VRIO framework'
    ],
    example: 'PESTEL analyzes Political, Economic, Social, Technological, Environmental, and Legal factors affecting business.',
  },
  {
    id: 'cs-p-smf-3',
    title: 'Business Policy and Functional Strategy',
    difficulty: 'advanced',
    description: 'Formulating business policies and functional area strategies.',
    keyPoints: [
      'Business policy formulation',
      'Marketing strategy',
      'Operations strategy',
      'HR strategy',
      'Financial strategy',
      'R&D and innovation strategy'
    ],
    example: 'Functional strategies align departmental activities with overall business strategy for competitive advantage.',
  },
  {
    id: 'cs-p-smf-4',
    title: 'Strategic Analysis and Planning',
    difficulty: 'advanced',
    description: 'Strategic planning tools and implementation frameworks.',
    keyPoints: [
      'BCG Matrix',
      'GE-McKinsey Matrix',
      'Ansoff Matrix',
      'Strategic planning process',
      'Scenario planning',
      'Balanced Scorecard'
    ],
    example: 'BCG Matrix categorizes business units as Stars, Cash Cows, Question Marks, or Dogs based on market share and growth.',
  },
  {
    id: 'cs-p-smf-5',
    title: 'Competitive Positioning',
    difficulty: 'advanced',
    description: 'Competitive strategies and positioning for market advantage.',
    keyPoints: [
      'Porter\'s generic strategies',
      'Cost leadership strategy',
      'Differentiation strategy',
      'Focus strategy',
      'Blue Ocean strategy',
      'Competitive advantage'
    ],
    example: 'Cost leadership achieves competitive advantage through lowest cost of production in the industry.',
  },
  {
    id: 'cs-p-smf-6',
    title: 'Managing Multi-Business Firms and Strategic Edge',
    difficulty: 'advanced',
    description: 'Corporate-level strategy for diversified business portfolios.',
    keyPoints: [
      'Diversification strategies',
      'Vertical and horizontal integration',
      'Core competencies',
      'Synergy realization',
      'Portfolio management',
      'Strategic alliances and partnerships'
    ],
    example: 'Related diversification leverages core competencies across businesses creating operational synergies.',
  },
  {
    id: 'cs-p-smf-7',
    title: 'Sources of Corporate Funding',
    difficulty: 'advanced',
    description: 'Various sources and instruments for corporate fundraising.',
    keyPoints: [
      'Internal vs external funding',
      'Equity and debt financing',
      'Hybrid instruments',
      'Public vs private funding',
      'Government schemes and grants',
      'Alternative funding sources'
    ],
    example: 'Companies can raise funds through equity shares, debentures, term loans, or retained earnings.',
  },
  {
    id: 'cs-p-smf-8',
    title: 'Equity Funding and Procedures',
    difficulty: 'advanced',
    description: 'Equity capital raising through various mechanisms.',
    keyPoints: [
      'Initial Public Offering (IPO)',
      'Follow-on Public Offering (FPO)',
      'Rights issue and bonus shares',
      'Preferential allotment',
      'QIP and institutional placement',
      'Book building process'
    ],
    example: 'IPO enables unlisted company to raise capital from public and get listed on stock exchange.',
  },
  {
    id: 'cs-p-smf-9',
    title: 'Real Estate Investment Trusts (REITs)',
    difficulty: 'advanced',
    description: 'REITs structure, regulations, and investment framework.',
    keyPoints: [
      'REIT structure and benefits',
      'SEBI REIT Regulations',
      'Eligibility and listing requirements',
      'Asset composition and valuation',
      'Distribution requirements - 90%',
      'Tax treatment of REITs'
    ],
    example: 'REITs pool investor funds to invest in income-generating real estate assets with regular dividend distribution.',
  },
  {
    id: 'cs-p-smf-10',
    title: 'Infrastructure Investment Trusts (InvITs)',
    difficulty: 'advanced',
    description: 'InvITs framework for infrastructure project funding.',
    keyPoints: [
      'InvIT structure',
      'SEBI InvIT Regulations',
      'Publicly offered vs privately placed',
      'Infrastructure assets eligible',
      'Distribution policy',
      'Taxation aspects'
    ],
    example: 'InvITs enable retail investors to invest in infrastructure projects like roads, power transmission.',
  },
  {
    id: 'cs-p-smf-11',
    title: 'Private Funding',
    difficulty: 'advanced',
    description: 'Private equity, venture capital, and angel funding.',
    keyPoints: [
      'Venture capital funding',
      'Private equity investments',
      'Angel investors',
      'Funding stages - seed, Series A, B, C',
      'Valuation and term sheets',
      'Exit strategies'
    ],
    example: 'Venture capital provides funding to startups and growth companies in exchange for equity stake.',
  },
  {
    id: 'cs-p-smf-12',
    title: 'Non-Fund Based Funding',
    difficulty: 'advanced',
    description: 'Bank guarantees, letters of credit, and other non-fund facilities.',
    keyPoints: [
      'Bank guarantees',
      'Letters of credit',
      'Bill discounting',
      'Factoring and forfaiting',
      'Trade credit',
      'Deferred payment arrangements'
    ],
    example: 'Letter of credit provides payment guarantee to seller reducing risk in international trade.',
  },
  {
    id: 'cs-p-smf-13',
    title: 'IFSC Securities Listing',
    difficulty: 'advanced',
    description: 'Listing securities in International Financial Services Centres.',
    keyPoints: [
      'IFSC framework - GIFT City',
      'Listing in IFSC exchanges',
      'Benefits and incentives',
      'Regulatory requirements',
      'Depository receipts',
      'Global investor access'
    ],
    example: 'Companies can list securities in GIFT IFSC to access global capital with tax benefits.',
  },
  {
    id: 'cs-p-smf-14',
    title: 'Debt Funding and Procedures',
    difficulty: 'advanced',
    description: 'Debt instruments and borrowing procedures.',
    keyPoints: [
      'Debentures and bonds',
      'Term loans from banks/FIs',
      'Commercial paper',
      'Borrowing limits - Section 180',
      'Security creation',
      'Debt covenants and compliance'
    ],
    example: 'Non-convertible debentures provide fixed income to investors with priority over equity in liquidation.',
  },
  {
    id: 'cs-p-smf-15',
    title: 'Foreign Funding – Institutions',
    difficulty: 'advanced',
    description: 'Foreign institutional investors and their participation.',
    keyPoints: [
      'Foreign Portfolio Investors (FPI)',
      'Foreign Direct Investment (FDI)',
      'Qualified Foreign Investors',
      'Investment limits and regulations',
      'Depository receipts - ADR, GDR',
      'FEMA compliance'
    ],
    example: 'FPIs can invest in Indian securities subject to sector-wise limits prescribed by SEBI and RBI.',
  },
  {
    id: 'cs-p-smf-16',
    title: 'Foreign Funding – Instruments and Laws',
    difficulty: 'advanced',
    description: 'Foreign funding instruments and regulatory framework.',
    keyPoints: [
      'External Commercial Borrowings (ECB)',
      'Foreign Currency Convertible Bonds',
      'American Depository Receipts',
      'Global Depository Receipts',
      'Masala bonds',
      'Regulatory approvals and compliance'
    ],
    example: 'Masala bonds are rupee-denominated bonds issued in overseas markets by Indian entities.',
  },
  {
    id: 'cs-p-smf-17',
    title: 'Role of Intermediaries in Fund Raising',
    difficulty: 'advanced',
    description: 'Merchant bankers, underwriters, and other intermediaries.',
    keyPoints: [
      'Merchant bankers',
      'Underwriters',
      'Registrars and transfer agents',
      'Credit rating agencies',
      'Legal advisors',
      'Due diligence agencies'
    ],
    example: 'Merchant bankers manage IPO process including due diligence, pricing, marketing, and allotment.',
  },
  {
    id: 'cs-p-smf-18',
    title: 'Project Evaluation',
    difficulty: 'advanced',
    description: 'Appraisal and evaluation of investment projects.',
    keyPoints: [
      'Project identification and formulation',
      'Technical feasibility',
      'Commercial viability',
      'Financial appraisal',
      'Economic and social cost-benefit',
      'Risk analysis and mitigation'
    ],
    example: 'Project evaluation examines technical, commercial, financial, and economic feasibility before investment.',
  }
];

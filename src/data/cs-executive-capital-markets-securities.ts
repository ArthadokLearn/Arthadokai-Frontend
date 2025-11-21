export interface Concept {
  id: string;
  title: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  description: string;
  keyPoints: string[];
  example: string;
  formula?: string;
}

export const csExecutiveCapitalMarketsSecuritiesConcepts: Concept[] = [
  {
    id: 'cs-e-cms-1',
    title: 'Basics of Capital Market',
    difficulty: 'intermediate',
    description: 'Structure, participants, and functions of capital markets.',
    keyPoints: [
      'Primary and secondary markets',
      'Capital market participants',
      'Functions of capital market',
      'Securities - equity, debt, derivatives',
      'Market indices',
      'Role in economic development'
    ],
    example: 'Primary market facilitates new capital formation through IPO, while secondary market provides liquidity.',
  },
  {
    id: 'cs-e-cms-2',
    title: 'Secondary Market in India',
    difficulty: 'intermediate',
    description: 'Stock exchanges, trading mechanisms, and settlement systems.',
    keyPoints: [
      'BSE and NSE',
      'Trading mechanism - order-driven',
      'T+2 settlement cycle',
      'Circuit breakers and price bands',
      'Market timings and trading hours',
      'Clearing and settlement'
    ],
    example: 'NSE uses screen-based electronic trading system with anonymous order matching.',
  },
  {
    id: 'cs-e-cms-3',
    title: 'Securities Contracts (Regulation) Act, 1956',
    difficulty: 'intermediate',
    description: 'Regulation of securities contracts and recognition of stock exchanges.',
    keyPoints: [
      'Definition of securities',
      'Recognition of stock exchanges',
      'Listing of securities',
      'Delisting provisions',
      'Powers of government',
      'Offences and penalties'
    ],
    example: 'SCRA defines securities to include shares, bonds, debentures, derivatives, and other instruments.',
  },
  {
    id: 'cs-e-cms-4',
    title: 'Securities and Exchange Board of India (SEBI)',
    difficulty: 'intermediate',
    description: 'SEBI structure, functions, powers, and investor protection role.',
    keyPoints: [
      'SEBI Act, 1992',
      'Functions - protective, regulatory, developmental',
      'Powers of SEBI',
      'SEBI Board composition',
      'Enforcement actions',
      'Investor grievance redressal'
    ],
    example: 'SEBI protects investor interests, regulates securities market, and promotes market development.',
  },
  {
    id: 'cs-e-cms-5',
    title: 'Laws Governing Depositories and Depository Participants',
    difficulty: 'intermediate',
    description: 'Depositories Act, NSDL, CDSL, and dematerialization process.',
    keyPoints: [
      'Depositories Act, 1996',
      'NSDL and CDSL',
      'Dematerialization and rematerialization',
      'Depository participants',
      'Benefits of demat',
      'Pledge and hypothecation'
    ],
    example: 'Dematerialization converts physical share certificates into electronic form held in demat account.',
  },
  {
    id: 'cs-e-cms-6',
    title: 'Securities Market Intermediaries',
    difficulty: 'intermediate',
    description: 'Stockbrokers, merchant bankers, registrars, and other intermediaries.',
    keyPoints: [
      'Stockbrokers and sub-brokers',
      'Merchant bankers',
      'Registrars and transfer agents',
      'Portfolio managers',
      'Credit rating agencies',
      'Registration and obligations'
    ],
    example: 'Merchant bankers assist companies in IPO process including due diligence and underwriting.',
  },
  {
    id: 'cs-e-cms-7',
    title: 'International Financial Services Centres Authority (IFSCA)',
    difficulty: 'intermediate',
    description: 'Unified regulator for financial services in IFSCs like GIFT City.',
    keyPoints: [
      'IFSCA Act, 2019',
      'Functions and powers of IFSCA',
      'GIFT City - India\'s first IFSC',
      'Regulatory framework',
      'Tax benefits in IFSC',
      'Financial products in IFSC'
    ],
    example: 'IFSCA regulates all financial services in IFSCs including banking, insurance, securities.',
  },
  {
    id: 'cs-e-cms-8',
    title: 'Issue of Capital & Disclosure Requirements',
    difficulty: 'intermediate',
    description: 'ICDR Regulations for public issues and private placements.',
    keyPoints: [
      'SEBI (ICDR) Regulations, 2018',
      'IPO and FPO requirements',
      'Eligibility criteria',
      'Pricing - fixed price vs book building',
      'Underwriting requirements',
      'Prospectus and disclosures'
    ],
    example: 'Company must have net tangible assets of ₹3 crore and track record of 3 years for IPO.',
  },
  {
    id: 'cs-e-cms-9',
    title: 'Share-Based Employee Benefits and Sweat Equity',
    difficulty: 'intermediate',
    description: 'ESOP schemes, sweat equity, and employee stock benefits.',
    keyPoints: [
      'SEBI (SBEB) Regulations',
      'ESOP implementation',
      'Grant, vesting, and exercise',
      'Sweat equity shares',
      'Taxation of ESOP',
      'Disclosures and compliance'
    ],
    example: 'ESOP allows employees to purchase company shares at predetermined price after vesting period.',
  },
  {
    id: 'cs-e-cms-10',
    title: 'Issue and Listing of Non-Convertible Securities',
    difficulty: 'intermediate',
    description: 'Debt securities, NCDs, and their listing requirements.',
    keyPoints: [
      'Non-convertible debentures (NCDs)',
      'Public vs private placement',
      'Credit rating requirements',
      'Debenture trustee',
      'Listing requirements',
      'Redemption and interest payment'
    ],
    example: 'Publicly issued NCDs must have minimum investment grade credit rating from SEBI registered CRA.',
  },
  {
    id: 'cs-e-cms-11',
    title: 'Listing Obligations and Disclosure Requirements',
    difficulty: 'intermediate',
    description: 'SEBI LODR for continuous disclosures and corporate governance.',
    keyPoints: [
      'SEBI (LODR) Regulations, 2015',
      'Continuous disclosures',
      'Financial results - quarterly, annual',
      'Corporate governance report',
      'Material events and price sensitive information',
      'Penalties for non-compliance'
    ],
    example: 'Listed companies must disclose quarterly financial results within 45 days of quarter end.',
  },
  {
    id: 'cs-e-cms-12',
    title: 'Acquisition of Shares and Takeovers – Concepts',
    difficulty: 'intermediate',
    description: 'SEBI Takeover Regulations and open offer requirements.',
    keyPoints: [
      'SEBI (SAST) Regulations, 2011',
      'Substantial acquisition of shares',
      'Trigger for open offer - 25%',
      'Open offer size - 26%',
      'Pricing of open offer',
      'Exemptions from open offer'
    ],
    example: 'Acquirer triggering 25% threshold must make open offer for additional 26% shares to public shareholders.',
  },
  {
    id: 'cs-e-cms-13',
    title: 'Prohibition of Insider Trading',
    difficulty: 'intermediate',
    description: 'SEBI PIT Regulations to prevent unfair trading using inside information.',
    keyPoints: [
      'SEBI (PIT) Regulations, 2015',
      'Insider and unpublished price sensitive information',
      'Trading window and closure',
      'Pre-clearance of trades',
      'Designated persons',
      'Penalties and prosecution'
    ],
    example: 'Insiders cannot trade during trading window closure period before declaration of financial results.',
  },
  {
    id: 'cs-e-cms-14',
    title: 'Prohibition of Fraudulent and Unfair Trade Practices',
    difficulty: 'intermediate',
    description: 'SEBI PFUTP Regulations against market manipulation and fraud.',
    keyPoints: [
      'SEBI (PFUTP) Regulations, 2003',
      'Fraudulent and unfair trade practices',
      'Market manipulation',
      'Front running',
      'Pump and dump schemes',
      'Investigation and penalties'
    ],
    example: 'Circular trading to create artificial volumes and manipulate prices is prohibited under PFUTP.',
  },
  {
    id: 'cs-e-cms-15',
    title: 'Delisting of Equity Shares',
    difficulty: 'intermediate',
    description: 'Voluntary and compulsory delisting procedures.',
    keyPoints: [
      'SEBI (Delisting) Regulations, 2009',
      'Voluntary delisting process',
      'Reverse book building',
      'Compulsory delisting',
      'Exit opportunity to shareholders',
      'Listing on SME platform'
    ],
    example: 'Voluntary delisting requires approval from 90% public shareholders through reverse book building.',
  },
  {
    id: 'cs-e-cms-16',
    title: 'Buyback of Securities',
    difficulty: 'intermediate',
    description: 'Share buyback regulations, methods, and compliance.',
    keyPoints: [
      'SEBI (Buyback) Regulations, 2018',
      'Methods - tender offer, open market',
      'Limits - 25% of paid-up capital and free reserves',
      'Special resolution requirement',
      'Extinguishment of shares',
      'Taxation of buyback'
    ],
    example: 'Buyback through tender offer must be at least 15% of total shares and not exceeding 25%.',
  },
  {
    id: 'cs-e-cms-17',
    title: 'Mutual Funds',
    difficulty: 'intermediate',
    description: 'SEBI MF Regulations, types of schemes, and investor protection.',
    keyPoints: [
      'SEBI (MF) Regulations, 1996',
      'AMC, trustees, and custodian',
      'Types of schemes - equity, debt, hybrid',
      'Open-ended vs closed-ended',
      'NAV calculation',
      'Entry and exit loads'
    ],
    example: 'Mutual funds pool money from investors and invest in diversified portfolio managed by professional fund managers.',
    formula: 'NAV = (Total Assets - Total Liabilities) / Number of Outstanding Units'
  },
  {
    id: 'cs-e-cms-18',
    title: 'Collective Investment Schemes',
    difficulty: 'intermediate',
    description: 'CIS regulations and distinction from mutual funds.',
    keyPoints: [
      'SEBI (CIS) Regulations, 1999',
      'Definition of collective investment scheme',
      'Registration requirements',
      'Investment restrictions',
      'Disclosures to investors',
      'Winding up provisions'
    ],
    example: 'CIS pools funds from investors for investing in securities with return sharing arrangement.',
  }
];

export interface Concept {
  id: string;
  title: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  description: string;
  keyPoints: string[];
  example: string;
  formula?: string;
}

export const csProfessionalElectiveIPRLawPracticeConcepts: Concept[] = [
  {
    id: 'cs-p-ipr-1',
    title: 'Introduction to Intellectual Property Rights',
    difficulty: 'advanced',
    description: 'Fundamentals of IPR and its importance in innovation economy.',
    keyPoints: ['IPR definition and rationale', 'Types of intellectual property', 'Economic significance', 'Balance between innovation and access', 'IPR and development', 'National IPR Policy'],
    example: 'IPR protects creations of mind enabling creators to benefit commercially from their innovations.',
  },
  {
    id: 'cs-p-ipr-2',
    title: 'Types of IPR',
    difficulty: 'advanced',
    description: 'Classification and overview of various intellectual property rights.',
    keyPoints: ['Patents', 'Trademarks', 'Copyrights', 'Industrial designs', 'Geographical indications', 'Trade secrets'],
    example: 'Patents protect inventions, trademarks protect brands, and copyrights protect creative expressions.',
  },
  {
    id: 'cs-p-ipr-3',
    title: 'Role of International Institutions (WIPO, TRIPS, etc.)',
    difficulty: 'advanced',
    description: 'International framework and institutions for IPR protection.',
    keyPoints: ['WIPO administration', 'TRIPS Agreement', 'Paris Convention', 'Berne Convention', 'PCT for patents', 'Madrid Protocol for trademarks'],
    example: 'TRIPS sets minimum IPR protection standards for WTO member countries ensuring global harmonization.',
  },
  {
    id: 'cs-p-ipr-4',
    title: 'Indian Patent Law',
    difficulty: 'advanced',
    description: 'Patents Act 1970 and patent protection in India.',
    keyPoints: ['Patentability criteria', 'Patent application process', 'Examination and grant', 'Patent term - 20 years', 'Compulsory licensing', 'Infringement and remedies'],
    example: 'Invention must be novel, involve inventive step, and be capable of industrial application to be patentable.',
  },
  {
    id: 'cs-p-ipr-5',
    title: 'Patent Databases and Information Systems',
    difficulty: 'advanced',
    description: 'Accessing and using patent information databases.',
    keyPoints: ['Patent search strategies', 'Indian Patent Office database', 'WIPO Patentscope', 'Espacenet', 'Prior art search', 'Patent analytics'],
    example: 'Patent databases enable prior art search to determine novelty and assess patent landscape.',
  },
  {
    id: 'cs-p-ipr-6',
    title: 'Patent Documentation and Infringement',
    difficulty: 'advanced',
    description: 'Patent specification drafting and infringement analysis.',
    keyPoints: ['Patent specification', 'Claims drafting', 'Patent drawings', 'Infringement types', 'Doctrine of equivalents', 'Defenses to infringement'],
    example: 'Patent claims define scope of protection; infringement occurs when third party makes, uses, or sells claimed invention.',
  },
  {
    id: 'cs-p-ipr-7',
    title: 'Trademarks – Registration and Protection',
    difficulty: 'advanced',
    description: 'Trademark law, registration process, and enforcement.',
    keyPoints: ['Trademark definition', 'Registration procedure', 'Classification - Nice Classification', 'Renewal - 10 years', 'Well-known trademarks', 'Infringement and passing off'],
    example: 'Trademark distinguishes goods/services and can be word mark, device mark, or combination.',
  },
  {
    id: 'cs-p-ipr-8',
    title: 'Copyrights – Ownership and Enforcement',
    difficulty: 'advanced',
    description: 'Copyright protection for creative works.',
    keyPoints: ['Copyrightable works', 'Author rights - economic and moral', 'Term - life + 60 years', 'Fair use exceptions', 'Copyright infringement', 'Digital copyrights'],
    example: 'Copyright protects original literary, dramatic, musical, and artistic works from unauthorized copying.',
  },
  {
    id: 'cs-p-ipr-9',
    title: 'Industrial Designs',
    difficulty: 'advanced',
    description: 'Protection of aesthetic designs of manufactured products.',
    keyPoints: ['Design registration', 'Features of shape and pattern', 'Novelty requirement', 'Term - 15 years', 'Piracy of design', 'Infringement remedies'],
    example: 'Industrial design protects visual appearance of articles, not functionality or technical features.',
  },
  {
    id: 'cs-p-ipr-10',
    title: 'Geographical Indications',
    difficulty: 'advanced',
    description: 'GI protection for products linked to specific geographical origin.',
    keyPoints: ['GI definition', 'Registration process', 'Authorized users', 'Term - 10 years renewable', 'Examples - Darjeeling tea, Basmati', 'International protection'],
    example: 'Geographical indication identifies goods originating from specific place with quality attributable to that origin.',
  },
  {
    id: 'cs-p-ipr-11',
    title: 'Layout Designs of Integrated Circuits',
    difficulty: 'advanced',
    description: 'Protection for semiconductor integrated circuit layouts.',
    keyPoints: ['SICLD Act 2000', 'Layout design definition', 'Registration procedure', 'Term - 10 years', 'Infringement', 'International treaties'],
    example: 'Layout design of integrated circuit is three-dimensional disposition of elements and interconnections.',
  },
  {
    id: 'cs-p-ipr-12',
    title: 'Trade Secrets and Confidential Information',
    difficulty: 'advanced',
    description: 'Protection of confidential business information.',
    keyPoints: ['Trade secret definition', 'Criteria for protection', 'Non-disclosure agreements', 'Employee obligations', 'Remedies for misappropriation', 'Comparison with patents'],
    example: 'Trade secrets protect confidential business information like formulas, processes, customer lists through secrecy.',
  },
  {
    id: 'cs-p-ipr-13',
    title: 'Biological Diversity and Traditional Knowledge',
    difficulty: 'advanced',
    description: 'Protection of biological resources and traditional knowledge.',
    keyPoints: ['Biological Diversity Act 2002', 'Access and benefit sharing', 'Traditional knowledge protection', 'Community rights', 'Biopiracy prevention', 'National Biodiversity Authority'],
    example: 'India protects traditional knowledge and ensures benefit sharing when biological resources are commercialized.',
  },
  {
    id: 'cs-p-ipr-14',
    title: 'Plant Variety Protection',
    difficulty: 'advanced',
    description: 'Protection for new plant varieties.',
    keyPoints: ['PPVFR Act 2001', 'Plant variety definition', 'Registration criteria - DUS test', 'Term of protection', 'Farmers\' rights', 'Breeders\' rights'],
    example: 'Plant breeders can register new, distinct, uniform, and stable varieties for exclusive commercial rights.',
  },
  {
    id: 'cs-p-ipr-15',
    title: 'Commercialization of IPR',
    difficulty: 'advanced',
    description: 'Monetizing intellectual property through licensing and transfer.',
    keyPoints: ['IP valuation', 'Licensing agreements', 'Technology transfer', 'Royalty determination', 'Cross-licensing', 'IP portfolios'],
    example: 'Patent licensing allows patentee to authorize others to use invention in exchange for royalty payments.',
  }
];

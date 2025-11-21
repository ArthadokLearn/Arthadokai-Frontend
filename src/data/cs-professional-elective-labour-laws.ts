export interface Concept {
  id: string;
  title: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  description: string;
  keyPoints: string[];
  example: string;
  formula?: string;
}

export const csProfessionalElectiveLabourLawsConcepts: Concept[] = [
  {
    id: 'cs-p-ll-1',
    title: 'Constitution and Labour Laws',
    difficulty: 'advanced',
    description: 'Constitutional provisions for labour welfare and rights.',
    keyPoints: ['Fundamental Rights for labour', 'Article 19(1)(c) - right to form associations', 'Directive Principles - Articles 39-43', 'Article 24 - child labour prohibition', 'Concurrent list entries', 'Constitutional validity of labour laws'],
    example: 'Article 43 mandates state to secure living wage and decent standard of life for workers.',
  },
  {
    id: 'cs-p-ll-2',
    title: 'International Labour Organisation (ILO) Framework',
    difficulty: 'advanced',
    description: 'ILO conventions and international labour standards.',
    keyPoints: ['ILO structure and functions', 'Core labour standards', 'Tripartite approach', 'Conventions and recommendations', 'India and ILO conventions', 'Decent work agenda'],
    example: 'ILO promotes rights at work, employment opportunities, social protection, and social dialogue.',
  },
  {
    id: 'cs-p-ll-3',
    title: 'Welfare and Working Conditions',
    difficulty: 'advanced',
    description: 'Laws governing working conditions, safety, and welfare.',
    keyPoints: ['Factories Act 1948', 'Working hours and overtime', 'Health and safety provisions', 'Welfare facilities', 'Occupational Safety Code', 'Women and child labour protection'],
    example: 'Factories Act mandates weekly holiday, maximum 48 hours work per week, and overtime at double rate.',
  },
  {
    id: 'cs-p-ll-4',
    title: 'Industrial Relations Law',
    difficulty: 'advanced',
    description: 'Trade unions, industrial disputes, and resolution.',
    keyPoints: ['Trade Unions Act 1926', 'Industrial Disputes Act 1947', 'Recognition of unions', 'Strikes and lockouts', 'Standing orders', 'Industrial Relations Code 2020'],
    example: 'Industrial establishment with 300+ workers requires government permission for retrenchment and closure.',
  },
  {
    id: 'cs-p-ll-5',
    title: 'Laws of Wages',
    difficulty: 'advanced',
    description: 'Minimum wages, payment, and wage protection laws.',
    keyPoints: ['Minimum Wages Act 1948', 'Payment of Wages Act 1936', 'Payment of Bonus Act 1965', 'Code on Wages 2019', 'Equal Remuneration Act', 'Floor wage concept'],
    example: 'Code on Wages consolidates 4 wage laws and mandates timely payment within 7 days of due date.',
  },
  {
    id: 'cs-p-ll-6',
    title: 'Social Security Laws',
    difficulty: 'advanced',
    description: 'EPF, ESI, gratuity, and social security benefits.',
    keyPoints: ['EPF Act 1952', 'ESI Act 1948', 'Payment of Gratuity Act', 'Maternity Benefit Act', 'Social Security Code 2020', 'Gig and platform workers'],
    example: 'EPF mandatory for establishments with 20+ employees; both employer and employee contribute 12% of wages.',
  },
  {
    id: 'cs-p-ll-7',
    title: 'Returns and Registers under Labour Codes',
    difficulty: 'advanced',
    description: 'Compliance requirements under new labour codes.',
    keyPoints: ['Common registration', 'Unified returns', 'Annual returns filing', 'Registers maintenance', 'E-filing requirements', 'Inspector Raj abolition'],
    example: 'Labour codes enable single registration, single license, and unified annual return simplifying compliance.',
  },
  {
    id: 'cs-p-ll-8',
    title: 'Labour Law Audit',
    difficulty: 'advanced',
    description: 'Auditing compliance with labour laws and codes.',
    keyPoints: ['Labour law audit framework', 'Audit checklist', 'Statutory registers verification', 'Wage and benefits audit', 'Compliance reporting', 'Remedial measures'],
    example: 'Labour law audit examines compliance with wage payments, PF/ESI deposits, registers, licenses, and returns.',
  }
];

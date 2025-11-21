import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { BookOpen, Scale, TrendingUp, FileText, Users, Building, Target } from 'lucide-react';
import { useState, useEffect } from 'react';

interface Subject {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  topics: number;
  totalWeightage: number; // Total marks for this subject
}

const subjectsByLevel: Record<string, Subject[]> = {
  'CA Foundation': [
    {
      id: 'accounting',
      name: 'Paper-1: Principles and Practice of Accounting',
      description: '11 Chapters: Theoretical Framework, Accounting Process, Bank Reconciliation, Inventories, and more',
      icon: <BookOpen className="w-5 h-5" />,
      topics: 11,
      totalWeightage: 100
    },
    {
      id: 'business-law',
      name: 'Paper-2: Business Laws',
      description: '7 Chapters: Indian Contract Act, Sale of Goods Act, Partnership Act, LLP Act, Companies Act, and more',
      icon: <Scale className="w-5 h-5" />,
      topics: 7,
      totalWeightage: 100
    },
    {
      id: 'quantitative-aptitude',
      name: 'Paper-3: Quantitative Aptitude',
      description: 'Part-A: Business Mathematics | Part-B: Logical Reasoning | Part-C: Statistics',
      icon: <FileText className="w-5 h-5" />,
      topics: 18,
      totalWeightage: 100
    },
    {
      id: 'business-economics',
      name: 'Paper-4: Business Economics',
      description: '10 Chapters: Demand-Supply, Production, Markets, Business Cycles, National Income, Public Finance, and more',
      icon: <TrendingUp className="w-5 h-5" />,
      topics: 10,
      totalWeightage: 100
    }
  ],
  'CA Inter': [
    {
      id: 'advanced-accounting',
      name: 'Paper-1: Advanced Accounting',
      description: '14 Chapters: Accounting Standards, Financial Statements, Buy Back, Internal Reconstruction, Branch Accounting',
      icon: <BookOpen className="w-5 h-5" />,
      topics: 14,
      totalWeightage: 100
    },
    {
      id: 'corporate-law',
      name: 'Paper-2: Corporate and Other Laws',
      description: '15 Chapters: Companies Act 2013, LLP Act 2008, FEMA 1999, Interpretation of Statutes',
      icon: <Scale className="w-5 h-5" />,
      topics: 15,
      totalWeightage: 100
    },
    {
      id: 'taxation',
      name: 'Paper-3: Taxation',
      description: 'Part-A: Income Tax (9 Chapters) | Part-B: GST (15 Chapters)',
      icon: <FileText className="w-5 h-5" />,
      topics: 24,
      totalWeightage: 100
    },
    {
      id: 'cost-management-accounting',
      name: 'Paper-4: Cost and Management Accounting',
      description: '15 Chapters: Material Cost, Employee Cost, Overheads, Costing Methods, Standard Costing, Budgeting',
      icon: <TrendingUp className="w-5 h-5" />,
      topics: 15,
      totalWeightage: 100
    },
    {
      id: 'auditing-ethics',
      name: 'Paper-5: Auditing and Ethics',
      description: '11 Chapters: Audit Strategy, Risk Assessment, Audit Evidence, Special Audits, Bank Audit',
      icon: <Scale className="w-5 h-5" />,
      topics: 11,
      totalWeightage: 100
    },
    {
      id: 'fm-sm',
      name: 'Paper-6: Financial Management and Strategic Management',
      description: 'Part-A: Financial Management (9 Chapters) | Part-B: Strategic Management (5 Chapters)',
      icon: <TrendingUp className="w-5 h-5" />,
      topics: 14,
      totalWeightage: 100
    }
  ],
  'CA Final': [
    {
      id: 'financial-reporting',
      name: 'Financial Reporting',
      description: 'Advanced accounting standards and financial statement preparation',
      icon: <BookOpen className="w-5 h-5" />,
      topics: 17,
      totalWeightage: 100
    },
    {
      id: 'advanced-fm',
      name: 'Advanced Financial Management',
      description: 'Strategic financial decisions, risk management, and valuations',
      icon: <TrendingUp className="w-5 h-5" />,
      topics: 15,
      totalWeightage: 100
    },
    {
      id: 'advanced-audit',
      name: 'Advanced Auditing, Assurance and Professional Ethics',
      description: 'Advanced auditing standards, procedures, ethics, and professional conduct',
      icon: <Scale className="w-5 h-5" />,
      topics: 19,
      totalWeightage: 100
    },
    {
      id: 'direct-tax',
      name: 'Direct Tax Laws & International Taxation',
      description: 'Income tax and international taxation including transfer pricing',
      icon: <FileText className="w-5 h-5" />,
      topics: 28,
      totalWeightage: 100
    },
    {
      id: 'indirect-tax',
      name: 'Indirect Tax Laws',
      description: 'GST and customs laws with practical applications',
      icon: <FileText className="w-5 h-5" />,
      topics: 32,
      totalWeightage: 100
    },
    {
      id: 'integrated-business',
      name: 'Integrated Business Solutions',
      description: 'Multidisciplinary case study with strategic management',
      icon: <Building className="w-5 h-5" />,
      topics: 16,
      totalWeightage: 100
    }
  ],
  'CMA Foundation': [
    {
      id: 'business-laws-communication',
      name: 'Fundamentals of Business Laws and Business Communications',
      description: '5 Chapters: Introduction, Contract Act, Sale of Goods, Negotiable Instruments, Business Communication',
      icon: <Scale className="w-5 h-5" />,
      topics: 5,
      totalWeightage: 100
    },
    {
      id: 'financial-cost-accounting',
      name: 'Fundamentals of Financial and Cost Accounting',
      description: '4 Chapters: Accounting Fundamentals, Special Transactions, Final Accounts, Cost Accounting',
      icon: <BookOpen className="w-5 h-5" />,
      topics: 4,
      totalWeightage: 100
    },
    {
      id: 'business-maths-statistics',
      name: 'Fundamentals of Business Mathematics and Statistics',
      description: '9 Chapters: Arithmetic, Algebra, Calculus, Finance, Statistics, Correlation, Probability, Index Numbers, Time Series',
      icon: <FileText className="w-5 h-5" />,
      topics: 9,
      totalWeightage: 100
    },
    {
      id: 'business-economics-management',
      name: 'Fundamentals of Business Economics and Management',
      description: '5 Chapters: Basic Concepts, Forms of Market, Money & Banking, Economic Environment, Management',
      icon: <TrendingUp className="w-5 h-5" />,
      topics: 5,
      totalWeightage: 100
    }
  ],
  'CMA Inter': [
    {
      id: 'business-laws-ethics',
      name: 'Business Laws and Ethics',
      description: '13 Chapters: Contract Act, Sale of Goods, NI Act, Partnership, LLP, Labour Laws, Companies Act, Ethics',
      icon: <Scale className="w-5 h-5" />,
      topics: 13,
      totalWeightage: 100
    },
    {
      id: 'financial-accounting',
      name: 'Financial Accounting',
      description: '9 Chapters: Fundamentals, Bills/Consignment, Final Accounts, Partnership, Lease, Branch, Insurance, Hire Purchase, AS',
      icon: <BookOpen className="w-5 h-5" />,
      topics: 9,
      totalWeightage: 100
    },
    {
      id: 'direct-indirect-taxation',
      name: 'Direct and Indirect Taxation',
      description: '6 Chapters: Income Tax Basics, Heads of Income, Individual/HUF Tax, Indirect Taxes, GST Laws, Customs',
      icon: <FileText className="w-5 h-5" />,
      topics: 6,
      totalWeightage: 100
    },
    {
      id: 'cost-accounting',
      name: 'Cost Accounting',
      description: '6 Chapters: Introduction, Cost Ascertainment, Cost Accounting Standards, Book-keeping, Costing Methods, Techniques',
      icon: <TrendingUp className="w-5 h-5" />,
      topics: 6,
      totalWeightage: 100
    },
    {
      id: 'operations-strategic-management',
      name: 'Operations Management and Strategic Management',
      description: '10 Chapters: Operations Planning, Designing Systems, OR Applications, Productivity, Project Management, Strategic Analysis',
      icon: <Building className="w-5 h-5" />,
      topics: 10,
      totalWeightage: 100
    },
    {
      id: 'corporate-accounting-auditing',
      name: 'Corporate Accounting and Auditing',
      description: '8 Chapters: Shares/Debentures, P&L, Cash Flow, Banking/Electricity/Insurance, AS, Audit Basics, Companies Act Audit',
      icon: <BookOpen className="w-5 h-5" />,
      topics: 8,
      totalWeightage: 100
    },
    {
      id: 'fm-business-data-analytics',
      name: 'Financial Management and Business Data Analytics',
      description: '11 Chapters: FM Fundamentals, Financial Markets, Analysis Tools, Finance Sources, Capital Budgeting, WC, Data Science',
      icon: <TrendingUp className="w-5 h-5" />,
      topics: 11,
      totalWeightage: 100
    },
    {
      id: 'management-accounting',
      name: 'Management Accounting',
      description: '10 Chapters: Introduction, ABC, Marginal Costing, Decision-making, Transfer Pricing, Standard Costing, Budgeting',
      icon: <FileText className="w-5 h-5" />,
      topics: 10,
      totalWeightage: 100
    }
  ],
  'CMA Final': [
    {
      id: 'corporate-economic-laws',
      name: 'Corporate and Economic Laws',
      description: '11 Chapters: Companies Act, IBC, Corporate Governance, SEBI, Competition Act, FEMA, Banking, Insurance, MSME, Cyber Laws',
      icon: <Scale className="w-5 h-5" />,
      topics: 11,
      totalWeightage: 100
    },
    {
      id: 'strategic-financial-management',
      name: 'Strategic Financial Management',
      description: '17 Chapters: Investment Decisions, Risky Proposals, Leasing, Securities, Valuation, Mutual Funds, Portfolio, Derivatives, Forex',
      icon: <TrendingUp className="w-5 h-5" />,
      topics: 17,
      totalWeightage: 100
    },
    {
      id: 'direct-tax-international',
      name: 'Direct Tax Laws and International Taxation',
      description: '14 Chapters: Assessment of Entities, Returns, Grievance, Penalties, Restructuring, Tax Planning, DTAA, Transfer Pricing',
      icon: <FileText className="w-5 h-5" />,
      topics: 14,
      totalWeightage: 100
    },
    {
      id: 'strategic-cost-management',
      name: 'Strategic Cost Management',
      description: '14 Chapters: SCM, Quality Cost, Decision-making, ABM/JIT, Performance, LP, Transportation, PERT/CPM, Learning Curve',
      icon: <TrendingUp className="w-5 h-5" />,
      topics: 14,
      totalWeightage: 100
    },
    {
      id: 'cost-management-audit',
      name: 'Cost and Management Audit',
      description: '18 Chapters: Cost Audit, Cost Records Rules, Auditor, CAS, Audit Programme, Reporting, Management Audit, Internal Audit',
      icon: <Scale className="w-5 h-5" />,
      topics: 18,
      totalWeightage: 100
    },
    {
      id: 'corporate-financial-reporting',
      name: 'Corporate Financial Reporting',
      description: '8 Chapters: Accounting Standards, Share Valuation, Financial Instruments, NBFCs, Business Combination, Consolidated FS',
      icon: <BookOpen className="w-5 h-5" />,
      topics: 8,
      totalWeightage: 100
    },
    {
      id: 'indirect-tax-laws-practice',
      name: 'Indirect Tax Laws and Practice',
      description: '27 Chapters: GST (Supply, Time, Place, Value, ITC, Returns, Audit, Refunds), Customs, FTP, SEZ Scheme',
      icon: <FileText className="w-5 h-5" />,
      topics: 27,
      totalWeightage: 100
    },
    {
      id: 'elective-spmbv',
      name: 'Elective – Strategic Performance Management & Business Valuation (SPMBV)',
      description: '9 Chapters: Performance Management, Measurement Tools, Economic Efficiency, ERM, Business Valuation, M&A Valuation',
      icon: <TrendingUp className="w-5 h-5" />,
      topics: 9,
      totalWeightage: 100
    },
    {
      id: 'elective-rmbi',
      name: 'Elective – Risk Management in Banking and Insurance (RMBI)',
      description: '8 Chapters: Risk Management, Interest Rate/Market Risk, Credit/Liquidity Risk, Operational Risk, Insurance Business',
      icon: <Building className="w-5 h-5" />,
      topics: 8,
      totalWeightage: 100
    },
    {
      id: 'elective-ents',
      name: 'Elective – Entrepreneurship and Startup (ENTS)',
      description: '8 Chapters: Entrepreneurial Skills, Ecosystem, Idea to Action, Value Addition, Scalability, Risk Management, Leadership',
      icon: <Users className="w-5 h-5" />,
      topics: 8,
      totalWeightage: 100
    }
  ],
  'CS Foundation': [
    {
      id: 'business-environment-law',
      name: 'Business Environment and Law',
      description: '13 Chapters: Business Environment, Forms of Business, Company Law, Partnership, Contract, Sale of Goods, NI, IT Act, CS Role',
      icon: <Building className="w-5 h-5" />,
      topics: 13,
      totalWeightage: 100
    },
    {
      id: 'business-management-ethics',
      name: 'Business Management, Ethics & Entrepreneurship',
      description: '17 Chapters: Planning, Organising, HRM, Direction, Controlling, Ethics, Communication, English, Entrepreneurship, Innovation',
      icon: <Users className="w-5 h-5" />,
      topics: 17,
      totalWeightage: 100
    },
    {
      id: 'business-economics',
      name: 'Business Economics',
      description: '9 Chapters: Economics Fundamentals, Demand & Supply, Consumer Behaviour, Production, Markets, Indian Economy, Statistics',
      icon: <TrendingUp className="w-5 h-5" />,
      topics: 9,
      totalWeightage: 100
    },
    {
      id: 'accounting-auditing-fundamentals',
      name: 'Fundamentals of Accounting and Auditing',
      description: '12 Chapters: Theoretical Framework, Accounting Process, Bank Reconciliation, Depreciation, Final Accounts, Partnership, Auditing',
      icon: <BookOpen className="w-5 h-5" />,
      topics: 12,
      totalWeightage: 100
    }
  ],
  'CS Executive': [
    {
      id: 'jurisprudence-general-laws',
      name: 'Jurisprudence, Interpretation & General Laws',
      description: '18 Chapters: Constitution, Interpretation, Administrative Law, Torts, Civil/Criminal Procedure, Evidence, Arbitration, IT Law',
      icon: <Scale className="w-5 h-5" />,
      topics: 18,
      totalWeightage: 100
    },
    {
      id: 'company-law-practice',
      name: 'Company Law & Practice',
      description: '19 Chapters: Company Law, Legal Status, MOA/AOA, Shares, Members, Debentures, Charges, Dividends, Accounts, Directors, Meetings',
      icon: <Building className="w-5 h-5" />,
      topics: 19,
      totalWeightage: 100
    },
    {
      id: 'setting-up-business-labour',
      name: 'Setting up of Business, Industrial & Labour Laws',
      description: '20 Chapters: Business Selection, Corporate Entities, LLP, Start-ups, MSMEs, Conversion, Labour Laws, Labour Codes, POSH',
      icon: <Users className="w-5 h-5" />,
      topics: 20,
      totalWeightage: 100
    },
    {
      id: 'corporate-accounting-fm',
      name: 'Corporate Accounting & Financial Management',
      description: '18 Chapters: Accounting Standards, Share Capital, Debentures, Consolidation, Cash Flows, FM, Capital Budgeting, WC',
      icon: <BookOpen className="w-5 h-5" />,
      topics: 18,
      totalWeightage: 100
    },
    {
      id: 'capital-markets-securities',
      name: 'Capital Markets & Securities Laws',
      description: '18 Chapters: Capital Market Basics, Secondary Market, SCRA, SEBI, Depositories, ICDR, LODR, Takeovers, Insider Trading, Mutual Funds',
      icon: <TrendingUp className="w-5 h-5" />,
      topics: 18,
      totalWeightage: 100
    },
    {
      id: 'economic-commercial-ipr',
      name: 'Economic, Commercial & Intellectual Property Laws',
      description: '15 Chapters: FEMA, FDI, ODI, ECB, FTP, SEZ, Competition Law, Consumer Protection, RERA, IPR (Patents, Trademarks, Copyright)',
      icon: <FileText className="w-5 h-5" />,
      topics: 15,
      totalWeightage: 100
    },
    {
      id: 'tax-laws-practice',
      name: 'Tax Laws and Practice',
      description: '16 Chapters: Direct Tax (Salary, House Property, Business, Capital Gains, Deductions, Companies) | Indirect Tax (GST, Customs)',
      icon: <FileText className="w-5 h-5" />,
      topics: 16,
      totalWeightage: 100
    }
  ],
  'CS Professional': [
    {
      id: 'esg-principles-practice',
      name: 'Environmental, Social and Governance (ESG) – Principles & Practice',
      description: '19 Chapters: Corporate Governance, Board Effectiveness, Committees, Ethics, ESG, Environment, CSR, Risk Management, BRSR',
      icon: <Building className="w-5 h-5" />,
      topics: 19,
      totalWeightage: 100
    },
    {
      id: 'drafting-pleadings-appearances',
      name: 'Drafting, Pleadings & Appearances',
      description: '14 Chapters: Drafting Principles, Agreements, Commercial Contracts, Companies Act Documents, Opinion Writing, Pleadings, Advocacy',
      icon: <FileText className="w-5 h-5" />,
      topics: 14,
      totalWeightage: 100
    },
    {
      id: 'compliance-audit-diligence',
      name: 'Compliance Management, Audit & Due Diligence',
      description: '16 Chapters: Compliance Framework, Documentation, Professional Conduct, Audit Principles, Secretarial Audit, Due Diligence',
      icon: <Scale className="w-5 h-5" />,
      topics: 16,
      totalWeightage: 100
    },
    {
      id: 'strategic-management-finance',
      name: 'Strategic Management & Corporate Finance',
      description: '18 Chapters: Strategic Management, Analysis, Corporate Funding, Equity/Debt Funding, REITs, InvITs, Foreign Funding, Project Evaluation',
      icon: <TrendingUp className="w-5 h-5" />,
      topics: 18,
      totalWeightage: 100
    },
    {
      id: 'restructuring-valuation-insolvency',
      name: 'Corporate Restructuring, Valuation & Insolvency',
      description: '26 Chapters: M&A, Business Valuation, Insolvency, CIRP, Resolution, Liquidation, Debt Recovery, SARFAESI, Winding-up',
      icon: <Building className="w-5 h-5" />,
      topics: 26,
      totalWeightage: 100
    },
    {
      id: 'elective-csr-social-governance',
      name: 'Elective 4.1 – CSR & Social Governance',
      description: '9 Chapters: CSR Concepts, Projects, Implementation, Social Impact, Audit, SDGs, Social Governance, NCEs, Local Self-Governance',
      icon: <Users className="w-5 h-5" />,
      topics: 9,
      totalWeightage: 100
    },
    {
      id: 'elective-internal-forensic-audit',
      name: 'Elective 4.2 – Internal & Forensic Audit',
      description: '7 Chapters: Overview, Internal Controls, Planning, Tools, Functional/Entity Audits, Forensic Audit, Cyber Forensics, Fraud Detection',
      icon: <Scale className="w-5 h-5" />,
      topics: 7,
      totalWeightage: 100
    },
    {
      id: 'elective-ipr-law-practice',
      name: 'Elective 4.3 – Intellectual Property Rights – Law & Practice',
      description: '8 Chapters: IPR Introduction, International Institutions, Patents, Trademarks, Copyrights, Designs, GIs, IPR Commercialisation',
      icon: <FileText className="w-5 h-5" />,
      topics: 8,
      totalWeightage: 100
    },
    {
      id: 'elective-ai-data-cyber',
      name: 'Elective 4.4 – Artificial Intelligence, Data Analytics & Cyber Security – Laws & Practice',
      description: '9 Chapters: AI, Cyber Security, Cyber Crimes, Regulatory Framework, Data Analytics, Hardware/Software, DBMS, Internet Technologies',
      icon: <TrendingUp className="w-5 h-5" />,
      topics: 9,
      totalWeightage: 100
    },
    {
      id: 'elective-advanced-direct-tax',
      name: 'Elective 4.5 – Advanced Direct Tax Laws – Law & Practice',
      description: '7 Chapters: Non-Company Tax, Company Tax Filing, Special Transactions, Tax Audit, Assessment & Appeals, Transfer Pricing, DTAA',
      icon: <FileText className="w-5 h-5" />,
      topics: 7,
      totalWeightage: 100
    },
    {
      id: 'elective-arbitration-mediation',
      name: 'Elective 7.1 – Arbitration, Mediation & Conciliation',
      description: '6 Chapters: Arbitration Basics, Arbitral Proceedings, Fast-track/Virtual, International Arbitration, Conciliation, Mediation',
      icon: <Scale className="w-5 h-5" />,
      topics: 6,
      totalWeightage: 100
    },
    {
      id: 'elective-gst-tax-planning',
      name: 'Elective 7.2 – Goods & Services Tax (GST) & Corporate Tax Planning',
      description: '6 Chapters: GST Overview, Supply, ITC, Compliance, Assessment/Audit/Appeals, Corporate Tax Planning, Restructuring Planning',
      icon: <FileText className="w-5 h-5" />,
      topics: 6,
      totalWeightage: 100
    },
    {
      id: 'elective-labour-laws',
      name: 'Elective 7.3 – Labour Laws & Practice',
      description: '7 Chapters: Constitution & ILO, Welfare & Working Conditions, Industrial Relations, Wages, Social Security, Labour Codes, Audit',
      icon: <Users className="w-5 h-5" />,
      topics: 7,
      totalWeightage: 100
    },
    {
      id: 'elective-banking-insurance',
      name: 'Elective 7.4 – Banking & Insurance – Laws & Practice',
      description: '7 Chapters: Banking System, Operations, Digital Banking, Advances, NPAs, Financial Analysis, Insurance Regulations & Functions',
      icon: <Building className="w-5 h-5" />,
      topics: 7,
      totalWeightage: 100
    },
    {
      id: 'elective-insolvency-bankruptcy',
      name: 'Elective 7.5 – Insolvency and Bankruptcy – Law & Practice',
      description: '6 Chapters: IBC Overview, CIRP, Resolution, Liquidation, Debt Recovery, Winding-up, Individual Insolvency, Cross-border',
      icon: <Scale className="w-5 h-5" />,
      topics: 6,
      totalWeightage: 100
    }
  ]
};

interface SubjectSelectorProps {
  course: string;
  level: string;
  selectedSubject: string;
  onSelectSubject: (subjectId: string, subjectName: string) => void;
  onBack: () => void;
  userEmail?: string;
}

// Circular Progress Component
function CircularProgress({ percentage, size = 80 }: { percentage: number; size?: number }) {
  const radius = (size - 8) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative inline-flex items-center justify-center" style={{ width: size, height: size }}>
      <svg className="transform -rotate-90" width={size} height={size}>
        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="currentColor"
          strokeWidth="6"
          fill="none"
          className="text-gray-200 dark:text-gray-700"
        />
        {/* Progress circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="currentColor"
          strokeWidth="6"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          className="text-indigo-600 dark:text-indigo-400 transition-all duration-500"
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-lg font-semibold text-gray-900 dark:text-gray-100">{Math.round(percentage)}%</span>
        <span className="text-xs text-gray-500 dark:text-gray-400">Done</span>
      </div>
    </div>
  );
}

function SubjectCard({ subject, isSelected, onSelect, userEmail }: { 
  subject: Subject; 
  isSelected: boolean; 
  onSelect: () => void;
  userEmail?: string;
}) {
  const [coveredWeightage, setCoveredWeightage] = useState(0);

  useEffect(() => {
    if (userEmail) {
      // Load completed chapters for this subject
      const storageKey = `completed_chapters_${userEmail}_${subject.id}`;
      const completedChapters = JSON.parse(localStorage.getItem(storageKey) || '[]');
      
      // Calculate weightage per chapter (equal distribution)
      const weightagePerChapter = subject.totalWeightage / subject.topics;
      const covered = completedChapters.length * weightagePerChapter;
      
      setCoveredWeightage(Math.round(covered));
    }
  }, [userEmail, subject.id, subject.totalWeightage, subject.topics]);

  const progressPercentage = (coveredWeightage / subject.totalWeightage) * 100;

  return (
    <Card
      className={`p-5 transition-all hover:shadow-lg cursor-pointer ${
        isSelected 
          ? 'ring-2 ring-indigo-600 shadow-md' 
          : 'hover:scale-[1.02]'
      }`}
      onClick={onSelect}
    >
      <div className="flex items-start gap-4">
        <div className="flex flex-col items-center gap-2 flex-shrink-0">
          <div className="bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300 p-3 rounded-lg">
            {subject.icon}
          </div>
          {userEmail && (
            <CircularProgress percentage={progressPercentage} size={70} />
          )}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="text-gray-900 dark:text-gray-100">{subject.name}</h3>
            {isSelected && (
              <Badge variant="default" className="flex-shrink-0">Active</Badge>
            )}
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{subject.description}</p>
          
          <div className="space-y-2">
            <div className="flex items-center gap-2 flex-wrap">
              <Badge variant="secondary" className="text-xs">
                {subject.topics} Topics
              </Badge>
              {userEmail && (
                <Badge variant="outline" className="text-xs gap-1">
                  <Target className="w-3 h-3" />
                  {coveredWeightage}/{subject.totalWeightage} Marks
                </Badge>
              )}
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}

export function SubjectSelector({ course, level, selectedSubject, onSelectSubject, onBack, userEmail }: SubjectSelectorProps) {
  const subjects = subjectsByLevel[level] || [];

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-gray-900 dark:text-gray-100 mb-2">Select Subject - {level}</h2>
        <p className="text-gray-600 dark:text-gray-400">Choose a subject to start learning</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {subjects.map((subject) => (
          <SubjectCard
            key={subject.id}
            subject={subject}
            isSelected={selectedSubject === subject.id}
            onSelect={() => onSelectSubject(subject.id, subject.name)}
            userEmail={userEmail}
          />
        ))}
      </div>
    </div>
  );
}
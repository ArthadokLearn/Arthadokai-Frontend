import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { BookOpen, ChevronRight } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';

// Import all chapter data
import { caFoundationAccountingConcepts } from '../data/ca-foundation-accounting';
import { caFoundationBusinessLawsConcepts } from '../data/ca-foundation-business-laws';
import { caFoundationQuantitativeAptitudeConcepts } from '../data/ca-foundation-quantitative-aptitude';
import { caFoundationBusinessEconomicsConcepts } from '../data/ca-foundation-business-economics';
import { caInterAdvancedAccountingConcepts } from '../data/ca-inter-advanced-accounting';
import { caInterCorporateLawConcepts } from '../data/ca-inter-corporate-law';
import { caInterTaxationConcepts } from '../data/ca-inter-taxation';
import { caInterCostManagementConcepts } from '../data/ca-inter-cost-management';
import { caInterAuditingEthicsConcepts } from '../data/ca-inter-auditing-ethics';
import { caInterFMEconomicsConcepts } from '../data/ca-inter-fm-economics';
import { caFinalFinancialReportingConcepts } from '../data/ca-final-financial-reporting';
import { caFinalAFMConcepts } from '../data/ca-final-afm';
import { caFinalAuditConcepts } from '../data/ca-final-audit';
import { caFinalLawConcepts } from '../data/ca-final-law';
import { caFinalIndirectTaxConcepts } from '../data/ca-final-indirect-tax';
import { cmaFoundationBusinessLawsCommunicationConcepts } from '../data/cma-foundation-business-laws-communication';
import { cmaFoundationFinancialCostAccountingConcepts } from '../data/cma-foundation-financial-cost-accounting';
import { cmaFoundationBusinessMathsStatisticsConcepts } from '../data/cma-foundation-business-maths-statistics';
import { cmaFoundationBusinessEconomicsManagementConcepts } from '../data/cma-foundation-business-economics-management';
import { cmaInterBusinessLawsEthicsConcepts } from '../data/cma-inter-business-laws-ethics';
import { cmaInterFinancialAccountingConcepts } from '../data/cma-inter-financial-accounting';
import { cmaInterDirectIndirectTaxationConcepts } from '../data/cma-inter-direct-indirect-taxation';
import { cmaInterCostAccountingConcepts } from '../data/cma-inter-cost-accounting';
import { cmaInterOperationsStrategicManagementConcepts } from '../data/cma-inter-operations-strategic-management';
import { cmaInterCorporateAccountingAuditingConcepts } from '../data/cma-inter-corporate-accounting-auditing';
import { cmaInterFMBusinessDataAnalyticsConcepts } from '../data/cma-inter-fm-business-data-analytics';
import { cmaInterManagementAccountingConcepts } from '../data/cma-inter-management-accounting';
import { cmaFinalCorporateEconomicLawsConcepts } from '../data/cma-final-corporate-economic-laws';
import { cmaFinalStrategicFinancialManagementConcepts } from '../data/cma-final-strategic-financial-management';
import { cmaFinalDirectTaxInternationalConcepts } from '../data/cma-final-direct-tax-international';
import { cmaFinalStrategicCostManagementConcepts } from '../data/cma-final-strategic-cost-management';
import { cmaFinalCostManagementAuditConcepts } from '../data/cma-final-cost-management-audit';
import { cmaFinalCorporateFinancialReportingConcepts } from '../data/cma-final-corporate-financial-reporting';
import { cmaFinalIndirectTaxLawsPracticeConcepts } from '../data/cma-final-indirect-tax-laws-practice';
import { cmaFinalElectiveSPMBVConcepts } from '../data/cma-final-elective-spmbv';
import { cmaFinalElectiveRMBIConcepts } from '../data/cma-final-elective-rmbi';
import { cmaFinalElectiveENTSConcepts } from '../data/cma-final-elective-ents';
import { csFoundationBusinessEnvironmentLawConcepts } from '../data/cs-foundation-business-environment-law';
import { csFoundationBusinessManagementEthicsConcepts } from '../data/cs-foundation-business-management-ethics';
import { csFoundationBusinessEconomicsConcepts } from '../data/cs-foundation-business-economics';
import { csFoundationAccountingAuditingConcepts } from '../data/cs-foundation-accounting-auditing';
import { csExecutiveJurisprudenceGeneralLawsConcepts } from '../data/cs-executive-jurisprudence-general-laws';
import { csExecutiveCompanyLawPracticeConcepts } from '../data/cs-executive-company-law-practice';
import { csExecutiveSettingUpBusinessLabourConcepts } from '../data/cs-executive-setting-up-business-labour';
import { csExecutiveCorporateAccountingFMConcepts } from '../data/cs-executive-corporate-accounting-fm';
import { csExecutiveCapitalMarketsSecuritiesConcepts } from '../data/cs-executive-capital-markets-securities';
import { csExecutiveEconomicCommercialIPRConcepts } from '../data/cs-executive-economic-commercial-ipr';
import { csExecutiveTaxLawsPracticeConcepts } from '../data/cs-executive-tax-laws-practice';
import { csProfessionalESGPrinciplesPracticeConcepts } from '../data/cs-professional-esg-principles-practice';
import { csProfessionalDraftingPleadingsAppearancesConcepts } from '../data/cs-professional-drafting-pleadings-appearances';
import { csProfessionalComplianceAuditDiligenceConcepts } from '../data/cs-professional-compliance-audit-diligence';
import { csProfessionalStrategicManagementFinanceConcepts } from '../data/cs-professional-strategic-management-finance';
import { csProfessionalRestructuringValuationInsolvencyConcepts } from '../data/cs-professional-restructuring-valuation-insolvency';
import { csProfessionalElectiveCSRSocialGovernanceConcepts } from '../data/cs-professional-elective-csr-social-governance';
import { csProfessionalElectiveInternalForensicAuditConcepts } from '../data/cs-professional-elective-internal-forensic-audit';
import { csProfessionalElectiveIPRLawPracticeConcepts } from '../data/cs-professional-elective-ipr-law-practice';
import { csProfessionalElectiveAIDataCyberConcepts } from '../data/cs-professional-elective-ai-data-cyber';
import { csProfessionalElectiveAdvancedDirectTaxConcepts } from '../data/cs-professional-elective-advanced-direct-tax';
import { csProfessionalElectiveArbitrationMediationConcepts } from '../data/cs-professional-elective-arbitration-mediation';
import { csProfessionalElectiveGSTTaxPlanningConcepts } from '../data/cs-professional-elective-gst-tax-planning';
import { csProfessionalElectiveLabourLawsConcepts } from '../data/cs-professional-elective-labour-laws';
import { csProfessionalElectiveBankingInsuranceConcepts } from '../data/cs-professional-elective-banking-insurance';
import { csProfessionalElectiveInsolvencyBankruptcyConcepts } from '../data/cs-professional-elective-insolvency-bankruptcy';

interface Concept {
  id: string;
  title: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  description: string;
  keyPoints: string[];
  example: string;
  formula?: string;
  subchapters?: Concept[]; // Support for hierarchical chapters
}

// Mapping of subject IDs to their chapter data
const subjectChaptersMap: Record<string, Concept[]> = {
  // CA Foundation
  'accounting': caFoundationAccountingConcepts,
  'business-law': caFoundationBusinessLawsConcepts,
  'quantitative-aptitude': caFoundationQuantitativeAptitudeConcepts,
  'business-economics': caFoundationBusinessEconomicsConcepts,
  // CA Inter
  'advanced-accounting': caInterAdvancedAccountingConcepts,
  'corporate-law': caInterCorporateLawConcepts,
  'taxation': caInterTaxationConcepts,
  'cost-management-accounting': caInterCostManagementConcepts,
  'auditing-ethics': caInterAuditingEthicsConcepts,
  'fm-sm': caInterFMEconomicsConcepts,
  // CA Final
  'financial-reporting': caFinalFinancialReportingConcepts,
  'advanced-fm': caFinalAFMConcepts,
  'advanced-audit': caFinalAuditConcepts,
  'direct-tax': caFinalLawConcepts,
  'indirect-tax': caFinalIndirectTaxConcepts,
  'integrated-business': [
    {
      id: 'integrated-business-1',
      title: 'Case Study 1: Strategic Management',
      difficulty: 'advanced' as const,
      description: 'A comprehensive case study focusing on strategic management principles.',
      keyPoints: ['Strategic planning', 'SWOT analysis', 'PESTEL analysis'],
      example: 'A company decides to enter a new market by conducting a SWOT analysis.',
      formula: 'SWOT = Strengths, Weaknesses, Opportunities, Threats'
    },
    {
      id: 'integrated-business-2',
      title: 'Case Study 2: Financial Management',
      difficulty: 'advanced' as const,
      description: 'A detailed case study on financial management techniques.',
      keyPoints: ['Capital budgeting', 'Risk assessment', 'Financial forecasting'],
      example: 'A company uses capital budgeting to evaluate a new project.',
      formula: 'NPV = Net Present Value'
    },
    {
      id: 'integrated-business-3',
      title: 'Case Study 3: Auditing and Assurance',
      difficulty: 'advanced' as const,
      description: 'A case study on advanced auditing and assurance practices.',
      keyPoints: ['Audit strategy', 'Risk assessment', 'Audit evidence'],
      example: 'An auditor uses risk assessment to plan an audit.',
      formula: 'Audit Risk = Inherent Risk x Control Risk'
    },
    {
      id: 'integrated-business-4',
      title: 'Case Study 4: Taxation',
      difficulty: 'advanced' as const,
      description: 'A case study on direct and indirect taxation laws.',
      keyPoints: ['Income tax', 'GST', 'Transfer pricing'],
      example: 'A company calculates its GST liability for a quarter.',
      formula: 'GST = Goods and Services Tax'
    }
  ],
  // CMA Foundation
  'business-laws-communication': cmaFoundationBusinessLawsCommunicationConcepts,
  'financial-cost-accounting': cmaFoundationFinancialCostAccountingConcepts,
  'business-maths-statistics': cmaFoundationBusinessMathsStatisticsConcepts,
  'business-economics-management': cmaFoundationBusinessEconomicsManagementConcepts,
  // CMA Inter
  'business-laws-ethics': cmaInterBusinessLawsEthicsConcepts,
  'financial-accounting': cmaInterFinancialAccountingConcepts,
  'direct-indirect-taxation': cmaInterDirectIndirectTaxationConcepts,
  'cost-accounting': cmaInterCostAccountingConcepts,
  'operations-strategic-management': cmaInterOperationsStrategicManagementConcepts,
  'corporate-accounting-auditing': cmaInterCorporateAccountingAuditingConcepts,
  'fm-business-data-analytics': cmaInterFMBusinessDataAnalyticsConcepts,
  'management-accounting': cmaInterManagementAccountingConcepts,
  // CMA Final
  'corporate-economic-laws': cmaFinalCorporateEconomicLawsConcepts,
  'strategic-financial-management': cmaFinalStrategicFinancialManagementConcepts,
  'direct-tax-international': cmaFinalDirectTaxInternationalConcepts,
  'strategic-cost-management': cmaFinalStrategicCostManagementConcepts,
  'cost-management-audit': cmaFinalCostManagementAuditConcepts,
  'corporate-financial-reporting': cmaFinalCorporateFinancialReportingConcepts,
  'indirect-tax-laws-practice': cmaFinalIndirectTaxLawsPracticeConcepts,
  'elective-spmbv': cmaFinalElectiveSPMBVConcepts,
  'elective-rmbi': cmaFinalElectiveRMBIConcepts,
  'elective-ents': cmaFinalElectiveENTSConcepts,
  // CS Foundation
  'business-environment-law': csFoundationBusinessEnvironmentLawConcepts,
  'business-management-ethics': csFoundationBusinessManagementEthicsConcepts,
  'business-economics': csFoundationBusinessEconomicsConcepts,
  'accounting-auditing-fundamentals': csFoundationAccountingAuditingConcepts,
  // CS Executive
  'jurisprudence-general-laws': csExecutiveJurisprudenceGeneralLawsConcepts,
  'company-law-practice': csExecutiveCompanyLawPracticeConcepts,
  'setting-up-business-labour': csExecutiveSettingUpBusinessLabourConcepts,
  'corporate-accounting-fm': csExecutiveCorporateAccountingFMConcepts,
  'capital-markets-securities': csExecutiveCapitalMarketsSecuritiesConcepts,
  'economic-commercial-ipr': csExecutiveEconomicCommercialIPRConcepts,
  'tax-laws-practice': csExecutiveTaxLawsPracticeConcepts,
  // CS Professional
  'esg-principles-practice': csProfessionalESGPrinciplesPracticeConcepts,
  'drafting-pleadings-appearances': csProfessionalDraftingPleadingsAppearancesConcepts,
  'compliance-audit-diligence': csProfessionalComplianceAuditDiligenceConcepts,
  'strategic-management-finance': csProfessionalStrategicManagementFinanceConcepts,
  'restructuring-valuation-insolvency': csProfessionalRestructuringValuationInsolvencyConcepts,
  'elective-csr-social-governance': csProfessionalElectiveCSRSocialGovernanceConcepts,
  'elective-internal-forensic-audit': csProfessionalElectiveInternalForensicAuditConcepts,
  'elective-ipr-law-practice': csProfessionalElectiveIPRLawPracticeConcepts,
  'elective-ai-data-cyber': csProfessionalElectiveAIDataCyberConcepts,
  'elective-advanced-direct-tax': csProfessionalElectiveAdvancedDirectTaxConcepts,
  'elective-arbitration-mediation': csProfessionalElectiveArbitrationMediationConcepts,
  'elective-gst-tax-planning': csProfessionalElectiveGSTTaxPlanningConcepts,
  'elective-labour-laws': csProfessionalElectiveLabourLawsConcepts,
  'elective-banking-insurance': csProfessionalElectiveBankingInsuranceConcepts,
  'elective-insolvency-bankruptcy': csProfessionalElectiveInsolvencyBankruptcyConcepts
};

interface ChapterSelectorProps {
  subject: string;
  subjectName: string;
  selectedChapter: string;
  onSelectChapter: (chapterId: string) => void;
  onBack: () => void;
}

export function ChapterSelector({ subject, subjectName, selectedChapter, onSelectChapter, onBack }: ChapterSelectorProps) {
  const chapters = subjectChaptersMap[subject] || [];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner':
        return 'bg-green-100 text-green-800';
      case 'intermediate':
        return 'bg-yellow-100 text-yellow-800';
      case 'advanced':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  if (chapters.length === 0) {
    return (
      <div className="text-center py-12">
        <BookOpen className="w-16 h-16 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
        <h3 className="text-gray-700 dark:text-gray-300 mb-2">Content Coming Soon</h3>
        <p className="text-gray-500 dark:text-gray-400">Chapters for this subject are being prepared.</p>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-gray-900 dark:text-gray-100 mb-2">{subjectName}</h2>
        <p className="text-gray-600 dark:text-gray-400">Select a chapter to start learning</p>
      </div>

      <div className="grid grid-cols-1 gap-3">
        {chapters.map((chapter, index) => {
          // Check if chapter has subchapters
          if (chapter.subchapters && chapter.subchapters.length > 0) {
            return (
              <Card key={chapter.id} className="p-0 overflow-hidden">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value={chapter.id} className="border-0">
                    <AccordionTrigger 
                      className={`p-4 hover:no-underline hover:bg-gray-50 dark:hover:bg-gray-900`}
                    >
                      <div className="flex items-start gap-4 flex-1">
                        <div className="bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300 p-3 rounded-lg flex-shrink-0 font-bold">
                          {index + 1}
                        </div>
                        <div className="flex-1 min-w-0 text-left">
                          <div className="flex items-start justify-between gap-2 mb-2">
                            <h3 className="text-gray-900 dark:text-gray-100">{chapter.title}</h3>
                            <Badge className={getDifficultyColor(chapter.difficulty)}>
                              {chapter.difficulty}
                            </Badge>
                          </div>
                          <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">{chapter.description}</p>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pb-0">
                      <div className="pl-4 pr-4 pb-4 space-y-2">
                        {chapter.subchapters.map((subchapter, subIndex) => (
                          <Card
                            key={subchapter.id}
                            className={`p-3 transition-all cursor-pointer hover:shadow-md border-l-4 ${
                              selectedChapter === subchapter.id
                                ? 'border-l-indigo-600 bg-indigo-50 dark:bg-indigo-950 ring-1 ring-indigo-600'
                                : 'border-l-gray-300 hover:border-l-indigo-400'
                            }`}
                            onClick={(e) => {
                              e.stopPropagation();
                              onSelectChapter(subchapter.id);
                            }}
                          >
                            <div className="flex items-start gap-3">
                              <div className="text-indigo-600 dark:text-indigo-400 font-semibold text-sm flex-shrink-0 mt-0.5">
                                {index + 1}.{subIndex + 1}
                              </div>
                              <div className="flex-1 min-w-0">
                                <h4 className="text-sm text-gray-900 dark:text-gray-100 mb-1">{subchapter.title}</h4>
                                <p className="text-xs text-gray-600 dark:text-gray-400 line-clamp-2">{subchapter.description}</p>
                              </div>
                            </div>
                          </Card>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </Card>
            );
          }
          
          // Regular chapter without subchapters
          return (
            <Card
              key={chapter.id}
              className={`p-4 transition-all cursor-pointer hover:shadow-lg ${
                selectedChapter === chapter.id
                  ? 'ring-2 ring-indigo-600 shadow-md bg-indigo-50 dark:bg-indigo-950'
                  : 'hover:scale-[1.01]'
              }`}
              onClick={() => onSelectChapter(chapter.id)}
            >
              <div className="flex items-start gap-4">
                <div className="bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300 p-3 rounded-lg flex-shrink-0 font-bold">
                  {index + 1}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="text-gray-900 dark:text-gray-100">{chapter.title}</h3>
                    <Badge className={getDifficultyColor(chapter.difficulty)}>
                      {chapter.difficulty}
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">{chapter.description}</p>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
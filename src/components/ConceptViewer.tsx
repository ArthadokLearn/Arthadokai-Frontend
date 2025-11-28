import { useState, useEffect, useRef } from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Lightbulb, ChevronRight, Sparkles, BookmarkPlus, Edit, Save, X, HelpCircle, Upload, Trash2, Image as ImageIcon } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import { toast } from 'sonner@2.0.3';
import { caFoundationQuantitativeAptitudeConcepts } from '../data/ca-foundation-quantitative-aptitude';
import { caFoundationBusinessEconomicsConcepts } from '../data/ca-foundation-business-economics';
import { caFoundationAccountingConcepts } from '../data/ca-foundation-accounting';
import { caFoundationBusinessLawsConcepts } from '../data/ca-foundation-business-laws';
import { caFoundationBusinessCommerceConcepts } from '../data/ca-foundation-business-commerce';
import { caInterAccountingConcepts } from '../data/ca-inter-accounting';
import { caInterCorporateLawConcepts } from '../data/ca-inter-corporate-law';
import { caInterCostManagementConcepts } from '../data/ca-inter-cost-management';
import { caInterTaxationConcepts } from '../data/ca-inter-taxation';
import { caInterAdvancedAccountingConcepts } from '../data/ca-inter-advanced-accounting';
import { caInterAuditingEthicsConcepts } from '../data/ca-inter-auditing-ethics';
import { caInterEISSMConcepts } from '../data/ca-inter-eis-sm';
import { caInterFMEconomicsConcepts } from '../data/ca-inter-fm-economics';
import { caFinalFinancialReportingConcepts, QuestionAnswer } from '../data/ca-final-financial-reporting';
import { caFinalAFMConcepts } from '../data/ca-final-afm';
import { caFinalAuditConcepts } from '../data/ca-final-audit';
import { caFinalLawConcepts } from '../data/ca-final-law';
import { caFinalIndirectTaxConcepts } from '../data/ca-final-indirect-tax';

interface Concept {
  id: string;
  title: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  description: string;
  keyPoints: string[];
  example: string;
  formula?: string;
  questions?: QuestionAnswer[];
  subchapters?: Concept[]; // Support for hierarchical chapters
}

const conceptsData: Record<string, Concept[]> = {
  'CA Foundation-accounting': [
    {
      id: 'theoretical-framework',
      title: 'Chapter 1: Theoretical Framework',
      difficulty: 'beginner',
      description: 'Accounting is the language of business. It provides a systematic way to record, classify, and communicate financial information.',
      keyPoints: [
        'Accounting: Process of identifying, measuring, recording and communicating financial information',
        'Book-keeping: Recording of financial transactions in books of accounts',
        'Objectives: Systematic recording, calculation of profit/loss, depicting financial position',
        'Users: Internal (Management) and External (Investors, Creditors, Government)',
        'Accounting Principles: Going Concern, Consistency, Accrual, Matching, Prudence',
        'Accounting Standards: Uniform rules issued by ICAI for preparation of financial statements'
      ],
      example: 'Example: Users of Accounting Information\n\nInternal Users:\n• Management - for decision making\n• Employees - for job security and incentives\n\nExternal Users:\n• Investors - for investment decisions\n• Banks - for creditworthiness\n• Government - for taxation and regulation\n• Suppliers - for credit terms'
    },
    {
      id: 'accounting-process',
      title: 'Chapter 2: Accounting Process',
      difficulty: 'beginner',
      description: 'The accounting process involves recording transactions using the double-entry system following golden rules of accounting.',
      keyPoints: [
        'Golden Rules: Personal A/c (Debit receiver, Credit giver), Real A/c (Debit what comes in, Credit what goes out), Nominal A/c (Debit expenses/losses, Credit incomes/gains)',
        'Journal: Book of original entry, chronological recording',
        'Ledger: Book of final entry, account-wise classification',
        'Trial Balance: Statement to verify arithmetical accuracy',
        'Subsidiary Books: Purchase book, Sales book, Cash book, etc.',
        'Cash Book: Records all cash and bank transactions'
      ],
      example: 'Example: Journal Entry\n\nDate: Jan 1, 2024\nParticulars:\nCash A/c                    Dr.  ₹5,00,000\n    To Capital A/c                     ₹5,00,000\n(Being capital introduced in cash)\n\nExplanation:\n• Cash A/c is Real A/c - What comes in, Debit\n• Capital A/c is Personal A/c - Giver, Credit'
    },
    {
      id: 'bank-reconciliation',
      title: 'Chapter 3: Bank Reconciliation Statement',
      difficulty: 'intermediate',
      description: 'BRS is a statement prepared to reconcile the difference between bank balance as per cash book and bank balance as per bank statement.',
      keyPoints: [
        'Need: Differences arise due to timing differences and errors',
        'Cheques issued but not presented for payment',
        'Cheques deposited but not yet collected/cleared',
        'Direct deposits by customers in bank',
        'Bank charges, interest on overdraft debited by bank',
        'Interest on deposits credited by bank',
        'Dishonour of cheques not recorded in cash book'
      ],
      example: 'Example: BRS Preparation\n\nCash Book shows: ₹50,000 (Dr.)\nBank Statement shows: ₹48,000 (Cr.)\n\nReconciliation:\nBalance as per Cash Book        ₹50,000\nAdd: Cheques issued not presented  ₹3,000\nLess: Cheques deposited not cleared (₹5,000)\nBalance as per Bank Statement   ₹48,000\n\nDifference explained ✓'
    },
    {
      id: 'inventories',
      title: 'Chapter 4: Inventories',
      difficulty: 'intermediate',
      description: 'Inventories are assets held for sale in ordinary course of business, in process of production, or in the form of materials/supplies to be consumed.',
      keyPoints: [
        'Valuation: Lower of Cost or Net Realisable Value (NRV)',
        'Cost includes: Purchase price + Conversion costs + Other costs incurred to bring inventory to present location and condition',
        'FIFO Method: First In First Out - oldest stock issued first',
        'Weighted Average Method: Cost based on weighted average of units',
        'NRV = Estimated selling price - Estimated cost of completion - Estimated selling expenses',
        'Closing stock increases profit, Opening stock decreases profit'
      ],
      example: 'Example: FIFO Method\n\nPurchases:\nJan 10: 100 units @ ₹50 = ₹5,000\nJan 20: 150 units @ ₹60 = ₹9,000\n\nIssue on Jan 25: 120 units\n\nFIFO Issue:\n100 units @ ₹50 = ₹5,000\n20 units @ ₹60 = ₹1,200\nTotal Cost = ₹6,200\n\nClosing Stock: 130 units @ ₹60 = ₹7,800',
      formula: 'Cost of Goods Sold = Opening Stock + Purchases - Closing Stock'
    },
    {
      id: 'depreciation',
      title: 'Chapter 5: Depreciation and Amortisation',
      difficulty: 'intermediate',
      description: 'Depreciation is systematic allocation of depreciable amount of an asset over its useful life. It represents wear and tear of fixed assets.',
      keyPoints: [
        'Straight Line Method (SLM): Depreciation = (Cost - Residual Value) / Useful Life',
        'Written Down Value Method (WDV): Depreciation on reducing balance each year',
        'Depreciation charged whether profit or loss',
        'Accumulated Depreciation shown as reduction from asset value',
        'Change in method is change in accounting policy',
        'Amortisation: Systematic write-off of intangible assets like patents, goodwill'
      ],
      example: 'Example: Depreciation Calculation\n\nMachine Cost: ₹1,00,000\nResidual Value: ₹10,000\nUseful Life: 5 years\nDepreciation Rate (WDV): 20%\n\nStraight Line Method:\nAnnual Depreciation = (1,00,000 - 10,000) / 5\n                    = ₹18,000 per year\n\nWDV Method (Year 1):\nDepreciation = 1,00,000 × 20% = ₹20,000\nClosing WDV = 1,00,000 - 20,000 = ₹80,000',
      formula: 'SLM = (Cost - Salvage) / Life; WDV = Book Value × Rate%'
    },
    {
      id: 'bills-of-exchange',
      title: 'Chapter 6: Bills of Exchange and Promissory Notes',
      difficulty: 'advanced',
      description: 'Bills of Exchange and Promissory Notes are negotiable instruments used in credit transactions to facilitate payment at a future date.',
      keyPoints: [
        'Bill of Exchange: Written order by creditor (drawer) to debtor (drawee) to pay certain amount',
        'Promissory Note: Written promise by debtor to pay creditor',
        'Parties: Drawer (seller/creditor), Drawee (buyer/debtor), Payee (receiver)',
        'Acceptance: Drawee accepting the bill by signing',
        'Discounting: Getting bill encashed before maturity at a discount',
        'Dishonour: Non-payment on due date, noting charges levied',
        'Retirement: Payment before due date'
      ],
      example: 'Example: Bill of Exchange\n\nA sold goods to B for ₹50,000 on Jan 1.\nA draws a bill on B for 3 months.\nB accepts the bill.\n\nIn A\'s Books (Drawer/Creditor):\nBills Receivable A/c    Dr.  ₹50,000\n    To B\'s A/c                  ₹50,000\n\nIn B\'s Books (Drawee/Debtor):\nA\'s A/c                Dr.  ₹50,000\n    To Bills Payable A/c        ₹50,000\n\nOn due date (April 4 with 3 days grace):\nA receives payment, B makes payment'
    },
    {
      id: 'final-accounts-sole-proprietor',
      title: 'Chapter 7: Preparation of Final Accounts of Sole Proprietors',
      difficulty: 'intermediate',
      description: 'Final accounts include Trading Account, Profit & Loss Account, and Balance Sheet prepared at the end of accounting period.',
      keyPoints: [
        'Trading A/c: Shows Gross Profit/Loss = Net Sales - Cost of Goods Sold',
        'P&L A/c: Shows Net Profit/Loss = Gross Profit - Operating Expenses + Other Income',
        'Balance Sheet: Statement of Assets and Liabilities as on a particular date',
        'Adjustments: Closing stock, outstanding expenses, prepaid expenses, accrued income, depreciation',
        'Closing entries transfer nominal accounts to P&L A/c',
        'Net profit increases capital, Net loss decreases capital'
      ],
      example: 'Example: Trading Account Format\n\nTrading Account for the year ended Dec 31, 2024\n\nDr.                                          Cr.\nTo Opening Stock      ₹50,000  By Sales           ₹5,00,000\nTo Purchases         ₹3,00,000  By Closing Stock     ₹80,000\nTo Carriage Inward     ₹5,000\nTo Wages              ₹25,000\nTo Gross Profit      ₹2,00,000\n                     ₹5,80,000                      ₹5,80,000\n\nGross Profit Ratio = (2,00,000/5,00,000) × 100 = 40%',
      formula: 'Gross Profit = Sales - COGS; Net Profit = Gross Profit - Expenses'
    },
    {
      id: 'npo-accounts',
      title: 'Chapter 8: Financial Statements of Non-Profit Organisations',
      difficulty: 'intermediate',
      description: 'NPOs prepare Receipts & Payments A/c, Income & Expenditure A/c, and Balance Sheet instead of trading and P&L account.',
      keyPoints: [
        'Receipts & Payments A/c: Summary of cash book, includes capital and revenue items',
        'Income & Expenditure A/c: Similar to P&L A/c, shows surplus/deficit',
        'Surplus = Income > Expenditure; Deficit = Expenditure > Income',
        'Capital receipts: Life membership fees, donations for specific purpose, sale of assets',
        'Revenue receipts: Subscription, entrance fees, donations for general purpose',
        'Balance Sheet shows Capital Fund (General Fund) and specific funds'
      ],
      example: 'Example: Treatment of Subscription\n\nSubscription received: ₹1,00,000\nOpening Outstanding: ₹5,000\nClosing Outstanding: ₹8,000\nAdvance subscription: ₹3,000\n\nIncome & Expenditure A/c:\nSubscription = 1,00,000 + 8,000 - 5,000 - 3,000\n             = ₹1,00,000\n\nBalance Sheet:\nAssets side: Outstanding Subscription ₹8,000\nLiabilities side: Advance Subscription ₹3,000'
    },
    {
      id: 'incomplete-records',
      title: 'Chapter 9: Accounts from Incomplete Records',
      difficulty: 'advanced',
      description: 'Single entry system is an incomplete system where complete double entry is not maintained. Profit is calculated by Statement of Affairs method.',
      keyPoints: [
        'Statement of Affairs: List of assets and liabilities to find capital',
        'Opening Capital = Opening Assets - Opening Liabilities',
        'Closing Capital = Closing Assets - Closing Liabilities',
        'Profit = Closing Capital - Opening Capital + Drawings - Additional Capital',
        'Missing figures: Use Total Debtors A/c, Total Creditors A/c, Cash/Bank Summary',
        'Credit Sales = Closing Debtors + Cash received - Opening Debtors - Bad debts',
        'Credit Purchases = Closing Creditors + Cash paid - Opening Creditors'
      ],
      example: 'Example: Profit Calculation\n\nOpening Capital (Jan 1): ₹2,00,000\nClosing Capital (Dec 31): ₹3,00,000\nDrawings during year: ₹60,000\nAdditional Capital: ₹50,000\n\nProfit Calculation:\nClosing Capital           ₹3,00,000\nAdd: Drawings               ₹60,000\nLess: Additional Capital   (₹50,000)\nLess: Opening Capital     (₹2,00,000)\nProfit for the year       ₹1,10,000',
      formula: 'Profit = (Closing Capital + Drawings) - (Opening Capital + Additional Capital)'
    },
    {
      id: 'partnership-llp',
      title: 'Chapter 10: Partnership and LLP Accounts',
      difficulty: 'advanced',
      description: 'Partnership is a relation between persons who agree to share profits of business. Accounting involves profit sharing, interest on capital, salary, and admission/retirement of partners.',
      keyPoints: [
        'Profit Sharing Ratio: Agreed ratio for sharing profits and losses',
        'Interest on Capital: Appropriation of profit, not a charge',
        'Interest on Drawings: Income for firm, reduces partner\'s profit share',
        'Salary/Commission: Appropriation of profit if provided in deed',
        'Goodwill: Valued on admission/retirement for adjusting capital',
        'Reconstitution: Change in profit sharing ratio, admission, retirement, death',
        'LLP: Limited Liability Partnership has features of both company and partnership'
      ],
      example: 'Example: Profit Appropriation\n\nNet Profit: ₹3,00,000\nPartners A & B share 3:2\nInterest on Capital: A ₹20,000, B ₹15,000\nSalary to A: ₹30,000\n\nProfit & Loss Appropriation Account:\nNet Profit                    ₹3,00,000\nLess: Interest on Capital\n  A ₹20,000, B ₹15,000         (₹35,000)\nLess: Salary to A             (₹30,000)\nDivisible Profit             ₹2,35,000\n\nA\'s Share: 2,35,000 × 3/5 = ₹1,41,000\nB\'s Share: 2,35,000 × 2/5 = ₹94,000'
    },
    {
      id: 'company-accounts',
      title: 'Chapter 11: Company Accounts',
      difficulty: 'advanced',
      description: 'Company accounts deal with share capital transactions, issue of shares, forfeiture of shares, and reissue of forfeited shares.',
      keyPoints: [
        'Share Capital: Authorized, Issued, Subscribed, Called-up, Paid-up capital',
        'Issue of Shares: At par, at premium, at discount (not allowed for equity)',
        'Calls: Application, Allotment, First Call, Final Call',
        'Forfeiture: Cancellation of shares for non-payment of calls',
        'Reissue: Forfeited shares can be reissued at par/premium/discount',
        'Securities Premium: Shown under Reserves & Surplus in Balance Sheet',
        'Calls in Arrear: Deducted from Called-up capital'
      ],
      example: 'Example: Issue of Shares\n\nCompany issued 10,000 shares of ₹10 each at 20% premium\nPayable: ₹3 on Application, ₹5 on Allotment (including premium), ₹4 on First Call\n\nBank A/c                     Dr. ₹30,000\n    To Share Application A/c       ₹30,000\n(Application money received)\n\nShare Application A/c        Dr. ₹30,000\nShare Allotment A/c          Dr. ₹50,000\n    To Share Capital A/c           ₹60,000\n    To Securities Premium A/c      ₹20,000\n(Shares allotted and premium recorded)',
      formula: 'Capital = No. of shares × Face value per share'
    }
  ],
  'CA Foundation-business-law': [
    {
      id: 'regulatory-framework',
      title: 'Chapter 1: Indian Regulatory Framework',
      difficulty: 'beginner',
      description: 'Understanding the structure and hierarchy of Indian legal and regulatory framework governing business transactions and corporate entities.',
      keyPoints: [
        'Sources of Law: Constitution, Statutes/Acts, Delegated Legislation, Case Laws',
        'Legislature: Parliament makes laws for entire India (Central Laws)',
        'Executive: Government implements and enforces laws',
        'Judiciary: Supreme Court, High Courts, and subordinate courts interpret laws',
        'Regulatory Bodies: SEBI, RBI, ICAI, MCA, Competition Commission',
        'Business Laws: Contract Act, Companies Act, Partnership Act, Sale of Goods Act',
        'Hierarchy: Constitution > Statutes > Delegated Legislation'
      ],
      example: 'Example: Regulatory Framework for a Company\\n\\n• Ministry of Corporate Affairs (MCA) - Company registration\\n• SEBI - If company is listed on stock exchange\\n• RBI - For foreign investments and banking\\n• Income Tax Department - Tax compliance\\n• ROC (Registrar of Companies) - Annual filings\\n• Competition Commission - Anti-competitive practices\\n\\nA company must comply with all applicable laws and regulations under this framework.'
    },
    {
      id: 'contract-essentials',
      title: 'Chapter 2: The Indian Contract Act 1872 - Essentials',
      difficulty: 'beginner',
      description: 'According to Section 10 of Indian Contract Act 1872, certain conditions must be met for an agreement to become a valid contract.',
      keyPoints: [
        'Offer and Acceptance - There must be a lawful offer and lawful acceptance',
        'Intention to create legal relationship',
        'Lawful consideration - Something in return',
        'Capacity of parties - Competent to contract',
        'Free consent - Without coercion, fraud, misrepresentation',
        'Lawful object - Not forbidden by law',
        'Agreement not declared void'
      ],
      example: 'Example: A offers to sell his car to B for ₹5 lakhs. B accepts.\n\nThis is valid if:\n✓ Both are major and of sound mind\n✓ ₹5 lakhs is the consideration\n✓ Sale is lawful\n✓ Both parties intend legal relationship\n✓ No coercion or fraud involved'
    },
    {
      id: 'sale-of-goods-act',
      title: 'Chapter 3: The Sale of Goods Act 1930',
      difficulty: 'intermediate',
      description: 'Sale of Goods Act 1930 governs contracts for sale of goods. It distinguishes between Sale and Agreement to Sell based on transfer of property.',
      keyPoints: [
        'Goods: Every kind of movable property except actionable claims and money',
        'Sale: Transfer of property in goods from seller to buyer for price',
        'Agreement to Sell: Property in goods to be transferred at future time',
        'Essentials: Buyer, Seller, Goods, Price, Transfer of ownership',
        'Conditions: Stipulations essential to main purpose',
        'Warranties: Stipulations collateral to main purpose',
        'Implied Conditions: Title, quality, fitness, sample'
      ],
      example: 'Example: Sale vs Agreement to Sell\\n\\nSale: Ownership transfers immediately\\nAgreement to Sell: Ownership transfers later'
    },
    {
      id: 'partnership-act',
      title: 'Chapter 4: The Indian Partnership Act 1932',
      difficulty: 'intermediate',
      description: 'Partnership is relation between persons who agree to share profits of business carried on by all or any of them acting for all.',
      keyPoints: [
        'Essentials: Two or more persons, agreement, business, profit sharing, mutual agency',
        'Minimum 2 Partners',
        'Registration: Optional but recommended',
        'Types: Active, Sleeping, Nominal, Partner by estoppel',
        'Rights: Share profits, participate in management',
        'Duties: Utmost good faith, render accounts',
        'Dissolution: By agreement, notice, court'
      ],
      example: 'Example: A, B, C start business. Valid partnership needs agreement and profit sharing.'
    },
    {
      id: 'llp-act',
      title: 'Chapter 5: The Limited Liability Partnership Act 2008',
      difficulty: 'intermediate',
      description: 'LLP is hybrid between company and partnership, providing limited liability benefits with partnership flexibility.',
      keyPoints: [
        'Body Corporate: Separate legal entity',
        'Limited Liability: Partners liability limited',
        'Minimum 2 Partners',
        'No Maximum Limit',
        'Registration: Mandatory with MCA',
        'Perpetual Succession',
        'LLP Agreement: Governs rights',
        'Designated Partners: Min 2'
      ],
      example: 'Example: LLP protects personal assets. Traditional partnership: personal assets at risk.'
    },
    {
      id: 'companies-act',
      title: 'Chapter 6: The Companies Act 2013',
      difficulty: 'advanced',
      description: 'Companies Act 2013 governs incorporation, management, and winding up of companies. Company is artificial legal person.',
      keyPoints: [
        'Private Company: Min 2, Max 200 members',
        'Public: Min 7, no max',
        'One Person Company (OPC)',
        'Incorporation: ROC with MOA, AOA',
        'MOA: Charter defining scope',
        'AOA: Internal rules',
        'Directors: Min 2 for private',
        'Share Capital types',
        'DIN mandatory'
      ],
      example: 'Example: ABC Pvt Ltd. Min 2 members, 2 directors. Get DIN, file SPICe+.'
    },
    {
      id: 'negotiable-instruments-act',
      title: 'Chapter 7: The Negotiable Instruments Act 1881',
      difficulty: 'advanced',
      description: 'Governs promissory notes, bills of exchange, and cheques. Documents transferable by delivery or endorsement.',
      keyPoints: [
        'Types: Promissory Note, Bill of Exchange, Cheque',
        'Promissory Note: Written promise to pay',
        'Bill of Exchange: Written order to pay',
        'Cheque: Bill drawn on banker',
        'Negotiation: Transfer by delivery',
        'Holder: Person entitled to possess',
        'Dishonour: Non-payment',
        'Crossing: Two parallel lines on cheque'
      ],
      example: 'Example: A draws bill on B. Drawer: A, Drawee: B. Cheque dishonour: Section 138 offence.',
      formula: 'Maturity = Due Date + 3 Days Grace'
    }
  ],
  // CA Foundation
  'CA Foundation-accounting': caFoundationAccountingConcepts,
  'CA Foundation-business-laws': caFoundationBusinessLawsConcepts,
  'CA Foundation-quantitative-aptitude': caFoundationQuantitativeAptitudeConcepts,
  'CA Foundation-business-economics-commerce': caFoundationBusinessCommerceConcepts,
  'CA Foundation-business-economics': caFoundationBusinessEconomicsConcepts,
  // CA Inter
  'CA Inter-accounting': caInterAccountingConcepts,
  'CA Inter-corporate-law': caInterCorporateLawConcepts,
  'CA Inter-cost-management-accounting': caInterCostManagementConcepts,
  'CA Inter-taxation': caInterTaxationConcepts,
  'CA Inter-advanced-accounting': caInterAdvancedAccountingConcepts,
  'CA Inter-auditing-ethics': caInterAuditingEthicsConcepts,
  'CA Inter-eis-sm': caInterEISSMConcepts,
  'CA Inter-fm-economics': caInterFMEconomicsConcepts,
  // CA Final
  'CA Final-financial-reporting': caFinalFinancialReportingConcepts,
  'CA Final-advanced-financial-management': caFinalAFMConcepts,
  'CA Final-audit': caFinalAuditConcepts,
  'CA Final-law': caFinalLawConcepts,
  'CA Inter-advanced-accounting-OLD': [
    {
      id: 'company-accounts',
      title: 'Company Accounts - Share Capital',
      difficulty: 'intermediate',
      description: 'Share capital represents ownership in a company. Accounting for issue, forfeiture, and re-issue of shares follows specific rules.',
      keyPoints: [
        'Share Capital = Authorized, Issued, Subscribed, Called-up, Paid-up',
        'Proportion: a:b = c:d means a/b = c/d or ad = bc',
        'In a:b, a is antecedent and b is consequent',
        'Duplicate ratio of a:b is a²:b²',
        'Triplicate ratio of a:b is a³:b³',
        'Direct proportion: When one increases, other increases'
      ],
      example: 'Example: If 5:x = 15:60, find x\n\nUsing cross multiplication:\n5 × 60 = 15 × x\n300 = 15x\nx = 300/15 = 20\n\nTherefore, x = 20',
      formula: 'If a:b = c:d, then ad = bc'
    },
    {
      id: 'percentages',
      title: 'Percentages (Part-A: Business Mathematics)',
      difficulty: 'beginner',
      description: 'Percentage means per hundred. It is a way of expressing a number as a fraction of 100.',
      keyPoints: [
        'Percentage = (Value/Total) × 100',
        'To convert fraction to percentage: Multiply by 100',
        'To find percentage of a number: (Percentage/100) × Number',
        'Percentage increase = [(New - Old)/Old] × 100',
        'Percentage decrease = [(Old - New)/Old] × 100',
        'Successive percentages cannot be directly added'
      ],
      example: 'Example: A man\'s salary increased from ₹40,000 to ₹50,000\n\nPercentage increase:\n= [(50,000 - 40,000)/40,000] × 100\n= (10,000/40,000) × 100\n= 0.25 × 100 = 25%\n\nSalary increased by 25%',
      formula: 'Percentage = (Part/Whole) × 100'
    },
    {
      id: 'simple-compound-interest',
      title: 'Simple and Compound Interest (Part-A: Business Mathematics)',
      difficulty: 'intermediate',
      description: 'Interest is the charge for borrowing money. Simple interest is calculated on principal only, while compound interest is on principal plus accumulated interest.',
      keyPoints: [
        'Simple Interest (SI) = (P × R × T)/100',
        'Compound Interest: Interest on principal + accumulated interest',
        'CI = P(1 + r/100)ⁿ - P',
        'Amount = Principal + Interest',
        'In CI, interest is compounded (annually/half-yearly/quarterly)',
        'CI is always greater than SI for same P, R, T (except for 1 year)'
      ],
      example: 'Example: Find SI and CI on ₹10,000 at 10% for 2 years\n\nSimple Interest:\nSI = (10,000 × 10 × 2)/100 = ₹2,000\n\nCompound Interest:\nAmount = 10,000(1 + 10/100)²\n       = 10,000(1.1)² = 10,000 × 1.21 = ₹12,100\nCI = 12,100 - 10,000 = ₹2,100\n\nDifference = ₹100',
      formula: 'SI = (P × R × T)/100; CI = P(1 + R/100)ⁿ - P'
    },
    {
      id: 'logical-reasoning-series',
      title: 'Number Series (Part-B: Logical Reasoning)',
      difficulty: 'beginner',
      description: 'Number series involves finding patterns in a sequence of numbers and identifying the missing number or next number in the sequence.',
      keyPoints: [
        'Arithmetic Series: Constant difference between consecutive terms',
        'Geometric Series: Constant ratio between consecutive terms',
        'Perfect Squares: 1, 4, 9, 16, 25, 36...',
        'Perfect Cubes: 1, 8, 27, 64, 125...',
        'Prime Numbers: 2, 3, 5, 7, 11, 13, 17...',
        'Look for patterns: addition, subtraction, multiplication, division, squares, cubes'
      ],
      example: 'Example: Find the next number in the series\n2, 5, 10, 17, 26, ?\n\nDifferences: +3, +5, +7, +9\nPattern: Adding consecutive odd numbers\nNext difference: +11\n26 + 11 = 37\n\nAnswer: 37'
    },
    {
      id: 'logical-reasoning-coding',
      title: 'Coding-Decoding (Part-B: Logical Reasoning)',
      difficulty: 'intermediate',
      description: 'Coding-decoding involves finding the pattern or rule used to code words or numbers and then applying or reversing it.',
      keyPoints: [
        'Letter Shift: Each letter shifted by fixed positions (e.g., A→C means +2)',
        'Reverse Coding: Word written in reverse order',
        'Number Coding: Letters assigned specific numbers',
        'Symbol Substitution: Letters replaced with symbols',
        'Mixed Patterns: Combination of multiple coding methods',
        'Identify the pattern first, then apply to new words'
      ],
      example: 'Example: If CAT is coded as ECV, how is DOG coded?\n\nPattern Analysis:\nC → E (+2 positions)\nA → C (+2 positions)\nT → V (+2 positions)\n\nApplying to DOG:\nD → F (+2)\nO → Q (+2)\nG → I (+2)\n\nAnswer: DOG is coded as FQI'
    },
    {
      id: 'statistics-mean-median',
      title: 'Mean, Median and Mode (Part-C: Statistics)',
      difficulty: 'intermediate',
      description: 'Measures of central tendency describe the center of a data set. Mean is average, median is middle value, and mode is most frequent value.',
      keyPoints: [
        'Mean (Arithmetic Average) = Sum of all values / Number of values',
        'Median: Middle value when data is arranged in order',
        'For even number of values: Median = Average of two middle values',
        'Mode: Value that appears most frequently',
        'A data set can have no mode, one mode, or multiple modes',
        'Mean is affected by extreme values, median is not'
      ],
      example: 'Example: Find Mean, Median, Mode of: 10, 15, 20, 20, 25, 30\n\nMean = (10+15+20+20+25+30)/6 = 120/6 = 20\n\nMedian (even count):\nMiddle values: 20 and 20\nMedian = (20+20)/2 = 20\n\nMode = 20 (appears twice, most frequent)\n\nAll three measures = 20',
      formula: 'Mean = Σx/n; Median = Middle value; Mode = Most frequent value'
    },
    {
      id: 'statistics-variance-sd',
      title: 'Variance and Standard Deviation (Part-C: Statistics)',
      difficulty: 'advanced',
      description: 'Variance and standard deviation measure the spread or dispersion of data around the mean. They indicate how scattered the data points are.',
      keyPoints: [
        'Variance (σ²) = Σ(x - x̄)² / n',
        'Standard Deviation (σ) = √Variance',
        'Higher variance/SD means data is more spread out',
        'Lower variance/SD means data is more concentrated around mean',
        'SD is in same units as original data, variance is in squared units',
        'Used to measure risk, consistency, and variability'
      ],
      example: 'Example: Find SD for data: 2, 4, 6, 8, 10\n\nMean (x̄) = (2+4+6+8+10)/5 = 30/5 = 6\n\nDeviations from mean:\n(2-6)² = 16\n(4-6)² = 4\n(6-6)² = 0\n(8-6)² = 4\n(10-6)² = 16\n\nVariance = (16+4+0+4+16)/5 = 40/5 = 8\nSD = √8 = 2.83',
      formula: 'Variance = Σ(x - x̄)��/n; Standard Deviation = √Variance'
    }
  ],
  'CA Foundation-business-economics': [
    {
      id: 'demand-supply',
      title: 'Law of Demand and Supply',
      difficulty: 'beginner',
      description: 'The law of demand states that quantity demanded varies inversely with price. The law of supply states that quantity supplied varies directly with price.',
      keyPoints: [
        'Law of Demand: Higher price → Lower demand (inverse relationship)',
        'Law of Supply: Higher price → Higher supply (direct relationship)',
        'Demand curve slopes downward from left to right',
        'Supply curve slopes upward from left to right',
        'Market equilibrium: Demand = Supply',
        'Factors affecting demand: Price, Income, Preferences, Price of related goods'
      ],
      example: 'Example: Market Equilibrium\n\nAt Price ₹50: Demand = 100 units, Supply = 60 units (Shortage)\nAt Price ₹80: Demand = 60 units, Supply = 100 units (Surplus)\nAt Price ₹65: Demand = 80 units, Supply = 80 units (Equilibrium)\n\nEquilibrium price = ₹65, Equilibrium quantity = 80 units'
    },
    {
      id: 'elasticity-demand',
      title: 'Elasticity of Demand',
      difficulty: 'intermediate',
      description: 'Elasticity of demand measures the responsiveness of quantity demanded to changes in price or other factors.',
      keyPoints: [
        'Price Elasticity of Demand (PED) = % change in Qty demanded / % change in Price',
        'Elastic demand: PED > 1 (demand highly responsive)',
        'Inelastic demand: PED < 1 (demand less responsive)',
        'Unitary elastic: PED = 1',
        'Perfectly elastic: PED = ∞ (horizontal demand curve)',
        'Perfectly inelastic: PED = 0 (vertical demand curve)'
      ],
      example: 'Example: Price Elasticity Calculation\n\nPrice changes from ₹100 to ₹120 (20% increase)\nQuantity demanded falls from 50 to 40 units (20% decrease)\n\nPED = (% change in Qty) / (% change in Price)\n    = 20% / 20% = 1\n\nUnitary Elastic Demand',
      formula: 'PED = (% change in Quantity Demanded) / (% change in Price)'
    }
  ],
  'CA Inter-advanced-accounting': [
    {
      id: 'company-accounts',
      title: 'Company Accounts - Share Capital',
      difficulty: 'intermediate',
      description: 'Share capital represents ownership in a company. Accounting for issue, forfeiture, and re-issue of shares follows specific rules.',
      keyPoints: [
        'Share Capital = Authorized, Issued, Subscribed, Called-up, Paid-up',
        'Shares can be issued at par, premium, or discount (with restrictions)',
        'Forfeiture for non-payment of calls - shares revert to company',
        'Forfeited shares can be re-issued at discount',
        'Share premium credited to Securities Premium Account',
        'Discount on issue allowed only for debentures (shares - limited cases)'
      ],
      example: 'Example: Share Forfeiture and Re-issue\n\n100 shares of ₹10 each, ₹8 called up\nShareholder paid only ₹5, failed to pay ₹3\n\nForfeiture Entry:\nShare Capital A/c Dr. ₹8\n    To Share Forfeiture A/c ₹5\n    To Calls in Arrear A/c ₹3\n\nRe-issued at ₹6 per share:\nBank A/c Dr. ₹6\nShare Forfeiture A/c Dr. ₹2\n    To Share Capital A/c ₹8'
    },
    {
      id: 'amalgamation',
      title: 'Amalgamation of Companies',
      difficulty: 'advanced',
      description: 'Amalgamation is the merger of two or more companies. Accounting treatment follows AS-14 or Ind AS 103.',
      keyPoints: [
        'Amalgamation in nature of merger - Pooling of interests method',
        'Amalgamation in nature of purchase - Purchase method',
        'Transferor company dissolves, assets/liabilities taken by transferee',
        'Goodwill/Capital Reserve arises from difference in consideration',
        'Statutory reserves can be carried forward in merger',
        'Disclosure requirements in financial statements'
      ],
      example: 'Example: Calculation of Purchase Consideration\n\nEquity shares: 10,000 @ ₹100 = ₹10,00,000\nPreference shares: 5,000 @ ₹50 = ₹2,50,000\nDebentures: ₹3,00,000\nCash payment: ₹1,00,000\n\nTotal Purchase Consideration = ₹16,50,000'
    },
    {
      id: 'valuation-shares',
      title: 'Valuation of Shares and Goodwill',
      difficulty: 'advanced',
      description: 'Shares are valued using various methods like Net Asset Value, Earning Capacity, Fair Value, etc.',
      keyPoints: [
        'Net Asset Value (NAV) = (Assets - Liabilities) / Number of shares',
        'Yield Method: Based on expected returns and normal rate of return',
        'Fair Value Method: Average of NAV and Yield value',
        'Goodwill = Super Profit × Number of years purchase',
        'Super Profit = Actual Profit - Normal Profit',
        'Intrinsic Value considers both asset backing and earning capacity'
      ],
      example: 'Example: Share Valuation - NAV Method\n\nTotal Assets (Fair Value): ₹50,00,000\nTotal Liabilities: ₹20,00,000\nPreference Share Capital: ₹5,00,000\nEquity Shares: 10,000 shares\n\nNet Assets for Equity = 50,00,000 - 20,00,000 - 5,00,000 = ₹25,00,000\nValue per share = 25,00,000 / 10,000 = ₹250',
      formula: 'Net Asset Value per share = (Total Assets - Total Liabilities - Preference Capital) / Number of Equity Shares'
    }
  ],
  'CA Inter-cost-management-accounting': [
    {
      id: 'material-costing',
      title: 'Material Cost Control and Valuation',
      difficulty: 'intermediate',
      description: 'Material cost is a significant component of total cost. Various techniques are used for control and valuation.',
      keyPoints: [
        'Economic Order Quantity (EOQ) minimizes ordering and carrying costs',
        'FIFO: First-In-First-Out - materials issued in order of receipt',
        'LIFO: Last-In-First-Out - latest materials issued first',
        'Weighted Average: Average cost of all materials',
        'ABC Analysis: Classify materials based on value (A-high, B-medium, C-low)',
        'JIT (Just-in-Time): Minimize inventory by timely procurement'
      ],
      example: 'Example: EOQ Calculation\n\nAnnual Requirement: 10,000 units\nOrdering Cost per order: ₹500\nCarrying Cost per unit p.a.: ₹20\n\nEOQ = √(2 × Annual Demand × Ordering Cost / Carrying Cost)\nEOQ = √(2 × 10,000 × 500 / 20)\nEOQ = √(5,00,000) = 707 units',
      formula: 'EOQ = √(2 × Annual Demand × Ordering Cost / Carrying Cost per unit)'
    },
    {
      id: 'standard-costing',
      title: 'Standard Costing and Variance Analysis',
      difficulty: 'advanced',
      description: 'Standard costing sets predetermined costs and analyzes variances to control costs and measure performance.',
      keyPoints: [
        'Material Variance = Material Cost Variance + Material Price Variance + Material Usage Variance',
        'Labour Variance = Labour Cost Variance + Labour Rate Variance + Labour Efficiency Variance',
        'Overhead Variance includes expenditure, volume, efficiency, and capacity variances',
        'Favorable variance: Actual cost < Standard cost',
        'Unfavorable variance: Actual cost > Standard cost',
        'Variance analysis helps in cost control and responsibility accounting'
      ],
      example: 'Example: Material Price Variance\n\nStandard: 100 kg @ ₹50 per kg = ₹5,000\nActual: 100 kg @ ₹55 per kg = ₹5,500\n\nMaterial Price Variance = (SP - AP) × AQ\n= (50 - 55) × 100\n= -₹500 (Unfavorable)\n\nActual price higher than standard = Unfavorable',
      formula: 'Material Price Variance = (Standard Price - Actual Price) × Actual Quantity'
    }
  ],
  'CA Inter-auditing-ethics': [
    {
      id: 'audit-planning',
      title: 'Audit Planning and Documentation',
      difficulty: 'intermediate',
      description: 'Proper planning ensures audit is performed effectively, efficiently, and in accordance with auditing standards.',
      keyPoints: [
        'Overall audit strategy and detailed audit plan required (SA 300)',
        'Understanding entity and its environment is crucial',
        'Assess risk of material misstatement',
        'Determine materiality levels for planning',
        'Document audit plan, procedures, and findings (SA 230)',
        'Audit working papers serve as evidence and facilitate review'
      ],
      example: 'Example: Audit Planning Steps\n\n1. Obtain engagement letter\n2. Understand business and industry\n3. Assess inherent and control risk\n4. Set materiality at ₹5,00,000 (5% of PBT)\n5. Plan audit procedures for high-risk areas\n6. Allocate staff and set timeline\n7. Document overall strategy'
    },
    {
      id: 'audit-evidence',
      title: 'Audit Evidence and Audit Procedures',
      difficulty: 'intermediate',
      description: 'Auditor must obtain sufficient appropriate audit evidence to draw reasonable conclusions (SA 500).',
      keyPoints: [
        'Sufficiency: Quantity of audit evidence',
        'Appropriateness: Quality - relevance and reliability',
        'Inspection, Observation, Inquiry, Confirmation, Recalculation, Re-performance, Analytical procedures',
        'External evidence more reliable than internal',
        'Documentary evidence more reliable than oral',
        'Original documents more reliable than copies'
      ],
      example: 'Example: Bank Confirmation (External Evidence)\n\nAuditor sends confirmation to bank requesting:\n- Balance as on 31st March 2024\n- Details of loans and guarantees\n- Securities held by bank\n\nDirect reply from bank = Highly reliable evidence'
    }
  ],
  'CA Inter-fm-sm': [
    {
      id: 'capital-budgeting',
      title: 'Capital Budgeting Techniques',
      difficulty: 'intermediate',
      description: 'Capital budgeting involves evaluation of long-term investment decisions using various appraisal techniques.',
      keyPoints: [
        'Net Present Value (NPV): PV of inflows - PV of outflows',
        'Internal Rate of Return (IRR): Rate at which NPV = 0',
        'Payback Period: Time to recover initial investment',
        'Profitability Index (PI): PV of inflows / PV of outflows',
        'Accept project if NPV > 0, IRR > Cost of Capital, PI > 1',
        'NPV method is theoretically superior'
      ],
      example: 'Example: NPV Calculation\n\nInitial Investment: ₹10,00,000\nAnnual Cash Inflow: ₹3,00,000 for 5 years\nCost of Capital: 10%\nPVAF (10%, 5 years) = 3.791\n\nPV of Inflows = 3,00,000 × 3.791 = ₹11,37,300\nNPV = 11,37,300 - 10,00,000 = ₹1,37,300\n\nDecision: Accept (NPV > 0)',
      formula: 'NPV = PV of Cash Inflows - Initial Investment'
    },
    {
      id: 'working-capital',
      title: 'Working Capital Management',
      difficulty: 'intermediate',
      description: 'Working capital management ensures sufficient liquidity to meet short-term obligations and operational requirements.',
      keyPoints: [
        'Working Capital = Current Assets - Current Liabilities',
        'Operating Cycle = Inventory period + Receivables period - Payables period',
        'Cash management: Optimize cash holding using Baumol/Miller-Orr model',
        'Inventory management: EOQ, JIT, ABC analysis',
        'Receivables management: Credit policy, collection period',
        'Adequate working capital ensures smooth operations'
      ],
      example: 'Example: Operating Cycle Calculation\n\nRaw Material Storage: 30 days\nWork-in-Progress: 20 days\nFinished Goods: 25 days\nDebtors Collection: 40 days\nCreditors Payment: 35 days\n\nOperating Cycle = 30 + 20 + 25 + 40 - 35 = 80 days\n\nShorter cycle = Better working capital efficiency',
      formula: 'Operating Cycle = Inventory Period + Receivables Period - Payables Period'
    },
    {
      id: 'strategic-management-basics',
      title: 'Strategic Management Process',
      difficulty: 'intermediate',
      description: 'Strategic management involves formulation, implementation, and evaluation of cross-functional decisions to achieve organizational objectives.',
      keyPoints: [
        'Vision and Mission define organization\'s purpose and direction',
        'SWOT Analysis: Strengths, Weaknesses, Opportunities, Threats',
        'Porter\'s Five Forces: Industry analysis framework',
        'Generic Strategies: Cost Leadership, Differentiation, Focus',
        'Strategy formulation → Implementation → Evaluation',
        'Balanced Scorecard: Financial, Customer, Internal Process, Learning & Growth'
      ],
      example: 'Example: SWOT Analysis for a Company\n\nStrengths:\n- Strong brand, skilled workforce\n\nWeaknesses:\n- High debt, limited distribution\n\nOpportunities:\n- Growing market, technology adoption\n\nThreats:\n- Intense competition, regulatory changes\n\nStrategy: Leverage brand (S) to exploit market growth (O)'
    }
  ],
  'CA Inter-taxation': [
    {
      id: 'income-tax-basics',
      title: 'Basic Concepts of Income Tax',
      difficulty: 'intermediate',
      description: 'Income Tax is a direct tax levied on income earned during the previous year, assessed in the assessment year.',
      keyPoints: [
        'Previous Year: Year in which income is earned (Apr 1 - Mar 31)',
        'Assessment Year: Year in which income is assessed (next FY)',
        'Five Heads of Income: Salary, House Property, Business, Capital Gains, Other Sources',
        'Gross Total Income - Deductions = Total Income',
        'Tax computed on Total Income as per applicable slab rates'
      ],
      example: 'Example: Income earned from Apr 2023 to Mar 2024\nPrevious Year: 2023-24\nAssessment Year: 2024-25\n\nSalary Income: ₹8,00,000\nHouse Rent Income: ₹2,00,000\nGross Total Income: ₹10,00,000\nLess: Deductions u/s 80C: ₹1,50,000\nTotal Income: ₹8,50,000'
    },
    {
      id: 'gst-overview',
      title: 'Goods and Services Tax (GST)',
      difficulty: 'intermediate',
      description: 'GST is an indirect tax levied on supply of goods and services. It has subsumed multiple indirect taxes.',
      keyPoints: [
        'CGST: Central GST (Intra-state supply)',
        'SGST: State GST (Intra-state supply)',
        'IGST: Integrated GST (Inter-state supply)',
        'Input Tax Credit available for tax paid on inputs',
        'Registration mandatory if turnover exceeds threshold',
        'Tax Rates: 0%, 5%, 12%, 18%, 28%'
      ],
      example: 'Example: Sale of goods within state for ₹1,00,000 @ 18%\n\nBasic Value: ₹1,00,000\nCGST @ 9%: ₹9,000\nSGST @ 9%: ₹9,000\nTotal Invoice Value: ₹1,18,000\n\n(Both CGST and SGST for intra-state supply)'
    }
  ],
  'CA Final-financial-reporting': caFinalFinancialReportingConcepts,
  'CA Final-direct-tax': caFinalLawConcepts,
  'CA Final-advanced-fm': caFinalAFMConcepts,
  'CA Final-advanced-audit': caFinalAuditConcepts,
  'CA Final-indirect-tax': caFinalIndirectTaxConcepts,
  '__CA_FINAL_OLD_DATA': [
    {
      id: 'ind-as-consolidation',
      title: 'Ind AS 110: Consolidated Financial Statements',
      difficulty: 'advanced',
      description: 'Ind AS 110 establishes principles for presentation and preparation of consolidated financial statements when an entity controls one or more other entities.',
      keyPoints: [
        'Control exists when investor has power over investee, exposure to variable returns, and ability to use power to affect returns',
        'Parent must consolidate all subsidiaries unless exempted',
        'Non-controlling interests presented in consolidated equity',
        'Intra-group transactions and balances eliminated in full',
        'Uniform accounting policies required across group'
      ],
      example: 'Example: Consolidation Process\n\nParent Co owns 80% of Subsidiary Co\nParent\'s Net Assets: ₹10,00,000\nSubsidiary\'s Net Assets: ₹5,00,000\n\nConsolidated Net Assets:\n= 10,00,000 + 5,00,000 = ₹15,00,000\nLess: Intra-group transactions (eliminated)\nNCI (20% of Sub) = ₹1,00,000 (shown separately)',
      formula: 'Goodwill = Consideration Paid + NCI - Fair Value of Net Assets Acquired'
    },
    {
      id: 'revenue-recognition',
      title: 'Ind AS 115: Revenue from Contracts with Customers',
      difficulty: 'advanced',
      description: 'Ind AS 115 provides a comprehensive framework for revenue recognition following a 5-step model.',
      keyPoints: [
        'Step 1: Identify the contract with customer',
        'Step 2: Identify performance obligations',
        'Step 3: Determine transaction price',
        'Step 4: Allocate transaction price to performance obligations',
        'Step 5: Recognize revenue when performance obligation satisfied',
        'Revenue recognized over time or at a point in time'
      ],
      example: 'Example: Software License + Support Contract\n\nTotal Contract Price: ₹1,20,000\nSoftware License (standalone price): ₹1,00,000\nAnnual Support (standalone price): ₹30,000\n\nAllocation:\nSoftware: (100/130) × 120,000 = ₹92,308 (at point in time)\nSupport: (30/130) × 120,000 = ₹27,692 (over time)'
    },
    {
      id: 'business-combinations',
      title: 'Ind AS 103: Business Combinations',
      difficulty: 'advanced',
      description: 'Ind AS 103 prescribes accounting treatment when an acquirer obtains control of a business using acquisition method.',
      keyPoints: [
        'Acquisition method mandatory for business combinations',
        'Identify acquirer, acquisition date, and measure consideration',
        'Recognize and measure identifiable assets, liabilities, and NCI',
        'Recognize and measure goodwill or gain from bargain purchase',
        'Contingent consideration measured at fair value',
        'Transaction costs expensed as incurred'
      ],
      example: 'Example: Business Acquisition\n\nConsideration paid: ₹50,00,000\nFair value of net assets acquired: ₹40,00,000\nNon-controlling interest: ₹5,00,000\n\nGoodwill Calculation:\nConsideration: ₹50,00,000\nAdd: NCI: ₹5,00,000\nLess: Net Assets: (₹40,00,000)\nGoodwill: ₹15,00,000'
    }
  ],
  'CA Final-direct-tax': [
    {
      id: 'transfer-pricing',
      title: 'Transfer Pricing - Arm\'s Length Principle',
      difficulty: 'advanced',
      description: 'Transfer pricing provisions ensure that international transactions between associated enterprises are priced at arm\'s length to prevent tax base erosion.',
      keyPoints: [
        'Applicable to international transactions between AEs',
        'Arm\'s Length Price (ALP) must be determined',
        'Five methods: CUP, RPM, CPM, PSM, TNMM',
        'Form 3CEB report by CA mandatory',
        'Transfer Pricing Officer can make adjustments',
        'Safe Harbour rules available for certain transactions'
      ],
      example: 'Example: Transfer Pricing Adjustment\n\nIndian Co sells to US Parent at ₹80 per unit\nComparable Uncontrolled Price: ₹100 per unit\nVolume: 10,000 units\n\nTP Adjustment:\nActual Revenue: ₹8,00,000\nALP Revenue: ₹10,00,000\nAdjustment: ₹2,00,000 (added to income)'
    },
    {
      id: 'corporate-tax',
      title: 'Corporate Tax Rates and MAT',
      difficulty: 'advanced',
      description: 'Companies in India can opt for different tax regimes with varying rates and conditions. MAT ensures minimum tax payment.',
      keyPoints: [
        'Section 115BAA: 22% (no exemptions/deductions)',
        'Section 115BAB: 15% (new manufacturing companies)',
        'Regular regime: 30% + surcharge + cess (with exemptions)',
        'MAT @ 15% on book profit u/s 115JB',
        'MAT Credit available for carry forward',
        'Once option exercised, cannot switch back'
      ],
      example: 'Example: Tax Computation - Old vs New Regime\n\nGross Total Income: ₹1,00,00,000\nDeductions u/s 80: ₹10,00,000\n\nOld Regime (30%):\nTaxable: ₹90,00,000\nTax: ₹27,00,000 + SC + Cess\n\nNew Regime (22%):\nTaxable: ₹1,00,00,000 (no deductions)\nTax: ₹22,00,000 + SC + Cess'
    }
  ],
  'CA Final-advanced-fm': [
    {
      id: 'portfolio-theory',
      title: 'Portfolio Theory and CAPM',
      difficulty: 'advanced',
      description: 'Modern Portfolio Theory explains how investors can construct optimal portfolios to maximize returns for a given level of risk.',
      keyPoints: [
        'Diversification reduces unsystematic risk',
        'Systematic risk measured by Beta (β)',
        'CAPM: E(R) = Rf + β(Rm - Rf)',
        'Efficient Frontier represents optimal portfolios',
        'Sharpe Ratio measures risk-adjusted returns',
        'Beta > 1: More volatile than market; Beta < 1: Less volatile'
      ],
      example: 'Example: CAPM Expected Return\n\nRisk-free rate (Rf): 6%\nMarket return (Rm): 14%\nStock Beta (β): 1.5\n\nExpected Return:\nE(R) = 6% + 1.5(14% - 6%)\nE(R) = 6% + 1.5(8%)\nE(R) = 6% + 12% = 18%',
      formula: 'E(R) = Rf + β(Rm - Rf)'
    }
  ],
  'CMA Foundation-accounting': [
    {
      id: 'double-entry',
      title: 'Double Entry System',
      difficulty: 'beginner',
      description: 'Every transaction has two aspects - debit and credit. This system ensures that accounting equation always balances.',
      keyPoints: [
        'Every debit has a corresponding credit',
        'Accounting Equation: Assets = Liabilities + Capital',
        'Increases in assets are debited',
        'Increases in liabilities are credited',
        'System provides complete record of transactions',
        'Helps in detecting errors'
      ],
      example: 'Example: Purchased goods for cash ₹20,000\n\nPurchases A/c (Expense) Dr. ₹20,000\n    To Cash A/c ₹20,000\n\nEffect:\nAsset (Cash) decreases: Credit\nExpense (Purchases) increases: Debit',
      formula: 'Assets = Liabilities + Capital'
    }
  ],
  'CS Foundation-business-environment': [
    {
      id: 'business-organization',
      title: 'Forms of Business Organization',
      difficulty: 'beginner',
      description: 'Business can be organized in various forms, each with distinct characteristics, advantages and limitations.',
      keyPoints: [
        'Sole Proprietorship: Single owner, unlimited liability',
        'Partnership: 2+ partners, shared profits and liability',
        'Company: Separate legal entity, limited liability',
        'Cooperative Society: Mutual help organization',
        'One Person Company (OPC): Single member company',
        'Limited Liability Partnership (LLP): Hybrid form'
      ],
      example: 'Comparison Example:\n\nSole Proprietorship:\n✓ Easy to form\n✗ Unlimited liability\n✗ Limited capital\n\nCompany:\n✓ Limited liability\n✓ Perpetual succession\n✗ Complex formation\n✗ More regulations'
    }
  ],
  'CS Executive-company-law': [
    {
      id: 'company-formation',
      title: 'Formation of a Company',
      difficulty: 'intermediate',
      description: 'A company is formed through incorporation process as per Companies Act 2013. Various documents and procedures are required.',
      keyPoints: [
        'Minimum 2 members for Private Company, 7 for Public Company',
        'Digital Signature Certificate (DSC) required',
        'Director Identification Number (DIN) mandatory',
        'Name Approval through RUN (Reserve Unique Name)',
        'MOA and AOA to be filed with ROC',
        'Certificate of Incorporation marks birth of company'
      ],
      example: 'Steps for Company Formation:\n\n1. Obtain DSC and DIN\n2. Name reservation (RUN)\n3. Draft MOA and AOA\n4. File SPICe+ form with ROC\n5. Pay registration fees\n6. Receive Certificate of Incorporation\n\nTimeline: Typically 7-15 days'
    }
  ]
};

interface ConceptViewerProps {
  course: string;
  level: string;
  subject: string;
  chapterId: string;
  currentUser: any;
  questionCategory?: 'Theoretical Questions & Answers' | 'Practical Questions & Answers' | 'Case Studies' | 'Multiple Choice Questions' | 'Extract of Financial Statements' | 'Formulas & Insights' | 'Extract of Audit Report' | 'Other';
}

export function ConceptViewer({ course, level, subject, chapterId, currentUser, questionCategory }: ConceptViewerProps) {
  const conceptKey = `${level}-${subject}`;
  const allConcepts = conceptsData[conceptKey] || [];
  
  // State for Q&A
  const [selectedQuestion, setSelectedQuestion] = useState<string | null>(null);
  const [editingField, setEditingField] = useState<string | null>(null);
  const [qaData, setQaData] = useState<Record<string, QuestionAnswer>>({});
  
  // Ref for file input - must be at top level
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  // Find the specific chapter (including subchapters)
  let chapter: Concept | undefined = allConcepts.find(c => c.id === chapterId);
  
  // If not found in main chapters, search in subchapters
  if (!chapter) {
    for (const mainChapter of allConcepts) {
      if (mainChapter.subchapters) {
        chapter = mainChapter.subchapters.find(sub => sub.id === chapterId);
        if (chapter) break;
      }
    }
  }
  
  // Load Q&A data from localStorage on mount
  useEffect(() => {
    if (chapter?.questions) {
      const storageKey = `qa_${level}_${subject}_${chapterId}`;
      const stored = localStorage.getItem(storageKey);
      if (stored) {
        setQaData(JSON.parse(stored));
      } else {
        // Initialize with default data
        const initial: Record<string, QuestionAnswer> = {};
        chapter.questions.forEach(q => {
          initial[q.id] = { ...q };
        });
        setQaData(initial);
      }
    }
  }, [chapterId, level, subject, chapter]);
  
  // Save Q&A data to localStorage
  const saveQaData = (updatedData: Record<string, QuestionAnswer>) => {
    const storageKey = `qa_${level}_${subject}_${chapterId}`;
    localStorage.setItem(storageKey, JSON.stringify(updatedData));
    setQaData(updatedData);
  };
  
  const isAdmin = currentUser?.userType === 'admin';
  
  if (!chapter) {
    return (
      <div className="text-center py-12">
        <Lightbulb className="w-16 h-16 text-gray-300 mx-auto mb-4" />
        <h3 className="text-gray-700 mb-2">Chapter Not Found</h3>
        <p className="text-gray-500">The selected chapter could not be loaded.</p>
      </div>
    );
  }

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

  const isCaFinal = level === 'CA Final';

  // Filter questions by category if provided
  const filteredQuestions = isCaFinal && chapter.questions 
    ? chapter.questions.filter(q => {
        // If no category is set on a question, treat it as "Other" by default
        const qCategory = q.category || 'Other';
        // If questionCategory prop is provided, filter by it
        if (questionCategory) {
          return qCategory === questionCategory;
        }
        // If no questionCategory prop, show all questions
        return true;
      })
    : chapter.questions;

  return (
    <div className="space-y-6">
      {/* Chapter Header */}
      <div className="border-b dark:border-gray-700 pb-4">
        <div className="flex items-center gap-3 mb-2">
          <Lightbulb className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
          <h2 className="text-indigo-900 dark:text-indigo-300">{chapter.title}</h2>
        </div>
        <Badge className={getDifficultyColor(chapter.difficulty)}>
          {chapter.difficulty}
        </Badge>
      </div>

      {/* CA Final: Q&A Format */}
      {isCaFinal && filteredQuestions && filteredQuestions.length > 0 ? (
        <>
          {!selectedQuestion ? (
            // Question List View
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-4">
                <HelpCircle className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                <h3 className="text-indigo-900 dark:text-indigo-300">
                  {questionCategory ? `${questionCategory}` : 'Select a question to view details'}
                </h3>
              </div>
              {filteredQuestions.map((q, index) => (
                <Card 
                  key={q.id}
                  className="p-4 hover:shadow-lg transition-shadow cursor-pointer border-l-4 border-indigo-500"
                  onClick={() => setSelectedQuestion(q.id)}
                >
                  <div className="flex items-start gap-3">
                    <Badge className="bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200 mt-1">
                      Q{index + 1}
                    </Badge>
                    <div className="flex-1">
                      <p className="text-gray-900 dark:text-gray-100">
                        {qaData[q.id]?.question || q.question}
                      </p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-400 mt-1" />
                  </div>
                </Card>
              ))}
            </div>
          ) : (
            // Question Detail View
            (() => {
              const questionData = qaData[selectedQuestion] || filteredQuestions.find(q => q.id === selectedQuestion);
              if (!questionData) return null;
              
              const handleEdit = (field: string, value: string) => {
                const updated = {
                  ...qaData,
                  [selectedQuestion]: {
                    ...questionData,
                    [field]: value
                  }
                };
                saveQaData(updated);
                setEditingField(null);
                toast.success('Updated successfully');
              };
              
              const canEditField = (field: string) => {
                if (field === 'conceptExplanation') return true; // Everyone can edit Concept & Explanation
                return isAdmin; // Only admin can edit other fields
              };
              
              const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
                const files = e.target.files;
                if (!files || files.length === 0) return;
                
                const file = files[0];
                if (!file.type.startsWith('image/')) {
                  toast.error('Please upload an image file');
                  return;
                }
                
                // Check file size (max 5MB)
                if (file.size > 5 * 1024 * 1024) {
                  toast.error('Image size should be less than 5MB');
                  return;
                }
                
                const reader = new FileReader();
                reader.onload = (event) => {
                  const base64 = event.target?.result as string;
                  const currentImages = questionData.conceptImages || [];
                  const updated = {
                    ...qaData,
                    [selectedQuestion]: {
                      ...questionData,
                      conceptImages: [...currentImages, base64]
                    }
                  };
                  saveQaData(updated);
                  toast.success('Image uploaded successfully');
                };
                reader.readAsDataURL(file);
              };
              
              const handleImageDelete = (index: number) => {
                const currentImages = questionData.conceptImages || [];
                const newImages = currentImages.filter((_, i) => i !== index);
                const updated = {
                  ...qaData,
                  [selectedQuestion]: {
                    ...questionData,
                    conceptImages: newImages
                  }
                };
                saveQaData(updated);
                toast.success('Image deleted');
              };
              
              return (
                <div className="space-y-6">
                  {/* Back Button */}
                  <Button 
                    variant="outline" 
                    onClick={() => {
                      setSelectedQuestion(null);
                      setEditingField(null);
                    }}
                    className="gap-2"
                  >
                    <X className="w-4 h-4" />
                    Back to Questions
                  </Button>
                  
                  {/* Question Block */}
                  <Card className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 border-blue-200 dark:border-blue-800">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-blue-900 dark:text-blue-300">Question</h3>
                      {canEditField('question') && (
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => setEditingField(editingField === 'question' ? null : 'question')}
                        >
                          {editingField === 'question' ? <X className="w-4 h-4" /> : <Edit className="w-4 h-4" />}
                        </Button>
                      )}
                    </div>
                    {editingField === 'question' ? (
                      <div className="space-y-2">
                        <Textarea
                          defaultValue={questionData.question}
                          className="min-h-[100px]"
                          id="question-edit"
                        />
                        <Button 
                          size="sm" 
                          onClick={() => {
                            const value = (document.getElementById('question-edit') as HTMLTextAreaElement).value;
                            handleEdit('question', value);
                          }}
                          className="gap-2"
                        >
                          <Save className="w-4 h-4" />
                          Save
                        </Button>
                      </div>
                    ) : (
                      <p className="text-gray-700 dark:text-gray-300">{questionData.question}</p>
                    )}
                  </Card>
                  
                  {/* Answer Block */}
                  <Card className="p-6 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950 border-green-200 dark:border-green-800">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-green-900 dark:text-green-300">Answer</h3>
                      {canEditField('answer') && (
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => setEditingField(editingField === 'answer' ? null : 'answer')}
                        >
                          {editingField === 'answer' ? <X className="w-4 h-4" /> : <Edit className="w-4 h-4" />}
                        </Button>
                      )}
                    </div>
                    {editingField === 'answer' ? (
                      <div className="space-y-2">
                        <Textarea
                          defaultValue={questionData.answer}
                          className="min-h-[150px]"
                          id="answer-edit"
                        />
                        <Button 
                          size="sm" 
                          onClick={() => {
                            const value = (document.getElementById('answer-edit') as HTMLTextAreaElement).value;
                            handleEdit('answer', value);
                          }}
                          className="gap-2"
                        >
                          <Save className="w-4 h-4" />
                          Save
                        </Button>
                      </div>
                    ) : (
                      <p className="text-gray-700 dark:text-gray-300 whitespace-pre-wrap">{questionData.answer}</p>
                    )}
                  </Card>
                  
                  {/* How to Approach Block */}
                  <Card className="p-6 bg-gradient-to-r from-purple-50 to-violet-50 dark:from-purple-950 dark:to-violet-950 border-purple-200 dark:border-purple-800">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-purple-900 dark:text-purple-300">How to Approach</h3>
                      {canEditField('howToApproach') && (
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => setEditingField(editingField === 'howToApproach' ? null : 'howToApproach')}
                        >
                          {editingField === 'howToApproach' ? <X className="w-4 h-4" /> : <Edit className="w-4 h-4" />}
                        </Button>
                      )}
                    </div>
                    {editingField === 'howToApproach' ? (
                      <div className="space-y-2">
                        <Textarea
                          defaultValue={questionData.howToApproach}
                          className="min-h-[120px]"
                          id="howToApproach-edit"
                        />
                        <Button 
                          size="sm" 
                          onClick={() => {
                            const value = (document.getElementById('howToApproach-edit') as HTMLTextAreaElement).value;
                            handleEdit('howToApproach', value);
                          }}
                          className="gap-2"
                        >
                          <Save className="w-4 h-4" />
                          Save
                        </Button>
                      </div>
                    ) : (
                      <p className="text-gray-700 dark:text-gray-300 whitespace-pre-wrap">{questionData.howToApproach}</p>
                    )}
                  </Card>
                  
                  {/* Concept & Explanation Block */}
                  <Card className="p-6 bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-950 dark:to-amber-950 border-orange-200 dark:border-orange-800">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-orange-900 dark:text-orange-300">Concept & Explanation</h3>
                      {canEditField('conceptExplanation') && (
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => setEditingField(editingField === 'conceptExplanation' ? null : 'conceptExplanation')}
                        >
                          {editingField === 'conceptExplanation' ? <X className="w-4 h-4" /> : <Edit className="w-4 h-4" />}
                        </Button>
                      )}
                    </div>
                    {editingField === 'conceptExplanation' ? (
                      <div className="space-y-4">
                        <Textarea
                          defaultValue={questionData.conceptExplanation}
                          className="min-h-[120px]"
                          id="conceptExplanation-edit"
                        />
                        
                        {/* Image Upload Section */}
                        <div className="border-t dark:border-gray-600 pt-4">
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center gap-2">
                              <ImageIcon className="w-4 h-4 text-orange-600 dark:text-orange-400" />
                              <span className="text-sm text-gray-700 dark:text-gray-300">Images</span>
                            </div>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => fileInputRef.current?.click()}
                              className="gap-2"
                            >
                              <Upload className="w-4 h-4" />
                              Upload Image
                            </Button>
                            <input
                              ref={fileInputRef}
                              type="file"
                              accept="image/*"
                              onChange={handleImageUpload}
                              className="hidden"
                            />
                          </div>
                          
                          {/* Display uploaded images */}
                          {questionData.conceptImages && questionData.conceptImages.length > 0 && (
                            <div className="grid grid-cols-2 gap-3">
                              {questionData.conceptImages.map((img, index) => (
                                <div key={index} className="relative group">
                                  <img 
                                    src={img} 
                                    alt={`Concept illustration ${index + 1}`}
                                    className="w-full h-32 object-cover rounded border dark:border-gray-600"
                                  />
                                  <Button
                                    size="sm"
                                    variant="destructive"
                                    className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                                    onClick={() => handleImageDelete(index)}
                                  >
                                    <Trash2 className="w-4 h-4" />
                                  </Button>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                        
                        <Button 
                          size="sm" 
                          onClick={() => {
                            const value = (document.getElementById('conceptExplanation-edit') as HTMLTextAreaElement).value;
                            handleEdit('conceptExplanation', value);
                          }}
                          className="gap-2"
                        >
                          <Save className="w-4 h-4" />
                          Save
                        </Button>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        <p className="text-gray-700 dark:text-gray-300 whitespace-pre-wrap">{questionData.conceptExplanation}</p>
                        
                        {/* Display images in view mode */}
                        {questionData.conceptImages && questionData.conceptImages.length > 0 && (
                          <div className="border-t dark:border-gray-600 pt-4">
                            <div className="flex items-center gap-2 mb-3">
                              <ImageIcon className="w-4 h-4 text-orange-600 dark:text-orange-400" />
                              <span className="text-sm text-gray-700 dark:text-gray-300">Reference Images</span>
                            </div>
                            <div className="grid grid-cols-2 gap-3">
                              {questionData.conceptImages.map((img, index) => (
                                <img 
                                  key={index}
                                  src={img} 
                                  alt={`Concept illustration ${index + 1}`}
                                  className="w-full h-auto rounded border dark:border-gray-600 cursor-pointer hover:opacity-90 transition-opacity"
                                  onClick={() => window.open(img, '_blank')}
                                />
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </Card>
                </div>
              );
            })()
          )}
        </>
      ) : isCaFinal ? (
        // Fallback for CA Final without questions
        <div className="text-center py-12">
          <HelpCircle className="w-16 h-16 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
          <h3 className="text-gray-700 dark:text-gray-300 mb-2">
            {questionCategory ? `No ${questionCategory} Available` : 'No Questions Available'}
          </h3>
          <p className="text-gray-500 dark:text-gray-400">
            {questionCategory 
              ? `${questionCategory} for this chapter will be added soon.` 
              : 'Questions for this chapter will be added soon.'}
          </p>
        </div>
      ) : (
        <>
          {/* Regular Format for Foundation & Inter */}
          {/* Overview */}
          <Card className="p-6 bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-950 dark:to-blue-950 border-indigo-200 dark:border-indigo-800">
            <h3 className="text-indigo-900 dark:text-indigo-300 mb-3">Overview</h3>
            <p className="text-gray-700 dark:text-gray-300">{chapter.description}</p>
          </Card>

          {/* Formula */}
          {chapter.formula && (
            <Card className="p-6 bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800">
              <h3 className="text-blue-900 dark:text-blue-300 mb-3">Formula</h3>
              <code className="text-blue-800 dark:text-blue-300 text-lg">{chapter.formula}</code>
            </Card>
          )}

          {/* Key Points */}
          <Card className="p-6">
            <h3 className="text-gray-900 dark:text-gray-100 mb-4">Key Points to Remember</h3>
            <ul className="space-y-3">
              {chapter.keyPoints.map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-indigo-600 dark:text-indigo-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">{point}</span>
                </li>
              ))}
            </ul>
          </Card>

          {/* Example */}
          <Card className="p-6 bg-indigo-50 dark:bg-indigo-950 border-indigo-200 dark:border-indigo-800">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              <h3 className="text-indigo-900 dark:text-indigo-300">Practical Example</h3>
            </div>
            <pre className="text-sm text-gray-800 dark:text-gray-300 whitespace-pre-wrap font-sans">
              {chapter.example}
            </pre>
          </Card>
        </>
      )}

      {/* Actions */}
      <div className="flex gap-2">
        <Button variant="outline" size="sm" className="gap-2">
          <BookmarkPlus className="w-4 h-4" />
          Bookmark Chapter
        </Button>
      </div>

      <Card className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-indigo-950 dark:to-blue-950 border-indigo-200 dark:border-indigo-800">
        <div className="flex items-start gap-3">
          <Sparkles className="w-5 h-5 text-indigo-600 dark:text-indigo-400 mt-0.5" />
          <div>
            <h4 className="text-indigo-900 dark:text-indigo-300 mb-1">AI-Powered Learning</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              {isCaFinal 
                ? 'These Q&A are curated and explained by AI to help you understand complex topics easily. Practice with case studies to reinforce your learning.'
                : 'These concepts are curated and explained by AI to help you understand complex topics easily. Practice with quizzes to reinforce your learning.'
              }
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}
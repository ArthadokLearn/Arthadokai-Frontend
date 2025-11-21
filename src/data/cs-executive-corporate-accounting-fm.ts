export interface Concept {
  id: string;
  title: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  description: string;
  keyPoints: string[];
  example: string;
  formula?: string;
}

export const csExecutiveCorporateAccountingFMConcepts: Concept[] = [
  {
    id: 'cs-e-cafm-1',
    title: 'Introduction to Accounting',
    difficulty: 'intermediate',
    description: 'Accounting principles, concepts, conventions, and regulatory framework.',
    keyPoints: [
      'Accounting concepts and conventions',
      'Generally Accepted Accounting Principles',
      'Accounting Standards framework',
      'Users of financial information',
      'Qualitative characteristics',
      'Accounting as information system'
    ],
    example: 'Going concern concept assumes business will continue operations indefinitely.',
  },
  {
    id: 'cs-e-cafm-2',
    title: 'Introduction to Corporate Accounting',
    difficulty: 'intermediate',
    description: 'Special accounting requirements for corporate entities.',
    keyPoints: [
      'Corporate vs general accounting',
      'Companies Act accounting provisions',
      'Schedule III requirements',
      'Corporate financial statements',
      'Regulatory compliance',
      'Corporate governance reporting'
    ],
    example: 'Corporate accounts must comply with Schedule III format for balance sheet and P&L statement.',
  },
  {
    id: 'cs-e-cafm-3',
    title: 'Accounting Standards (AS)',
    difficulty: 'intermediate',
    description: 'Indian Accounting Standards and their application.',
    keyPoints: [
      'AS framework - ICAI',
      'AS vs Ind AS comparison',
      'Key accounting standards',
      'Revenue recognition - AS 9',
      'Fixed assets - AS 10',
      'Construction contracts - AS 7'
    ],
    example: 'AS 1 mandates disclosure of accounting policies and changes in accounting policies.',
  },
  {
    id: 'cs-e-cafm-4',
    title: 'Accounting for Share Capital',
    difficulty: 'intermediate',
    description: 'Issue, forfeiture, reissue of shares, and share capital transactions.',
    keyPoints: [
      'Issue of shares - at par, premium, discount',
      'Calls and calls in arrears',
      'Forfeiture of shares',
      'Reissue of forfeited shares',
      'Underwriting of shares',
      'Sweat equity and ESOP'
    ],
    example: 'Premium on shares must be credited to Securities Premium Account and utilized as per Section 52.',
    formula: 'Discount on Reissue ≤ Amount Forfeited + Premium on Reissue'
  },
  {
    id: 'cs-e-cafm-5',
    title: 'Accounting for Debentures',
    difficulty: 'intermediate',
    description: 'Issue and redemption of debentures, interest payment, and sinking fund.',
    keyPoints: [
      'Issue of debentures - at par, premium, discount',
      'Interest on debentures',
      'Redemption methods - lumpsum, installments',
      'Sinking fund method',
      'Conversion of debentures',
      'Debenture redemption reserve'
    ],
    example: 'Debenture Redemption Reserve of 25% of debenture value must be created before redemption.',
  },
  {
    id: 'cs-e-cafm-6',
    title: 'Related Aspects of Company Accounts',
    difficulty: 'intermediate',
    description: 'Final accounts, reserves, provisions, and corporate financial statements.',
    keyPoints: [
      'Preparation of final accounts',
      'Reserves and surplus',
      'Provisions and contingencies',
      'Profit prior to incorporation',
      'Managerial remuneration',
      'Dividend declaration and payment'
    ],
    example: 'Profit prior to incorporation is capital profit and not available for dividend distribution.',
  },
  {
    id: 'cs-e-cafm-7',
    title: 'Consolidation of Accounts',
    difficulty: 'intermediate',
    description: 'Preparation of consolidated financial statements for group companies.',
    keyPoints: [
      'Holding and subsidiary companies',
      'AS 21 - Consolidated Financial Statements',
      'Elimination of intra-group transactions',
      'Minority interest calculation',
      'Goodwill on consolidation',
      'Associates and joint ventures'
    ],
    example: 'Consolidated statements eliminate inter-company balances, profits, and dividends.',
    formula: 'Goodwill = Cost of Investment - Share of Net Assets at Acquisition'
  },
  {
    id: 'cs-e-cafm-8',
    title: 'Financial Statement Analysis',
    difficulty: 'intermediate',
    description: 'Ratio analysis, trend analysis, and interpretation of financial statements.',
    keyPoints: [
      'Ratio analysis - liquidity, profitability, solvency',
      'Trend analysis',
      'Common size statements',
      'Comparative analysis',
      'DuPont analysis',
      'Limitations of ratio analysis'
    ],
    example: 'Current ratio = Current Assets / Current Liabilities; ideal ratio is 2:1.',
    formula: 'ROE = Net Profit Margin × Asset Turnover × Equity Multiplier'
  },
  {
    id: 'cs-e-cafm-9',
    title: 'Cash Flow Statements',
    difficulty: 'intermediate',
    description: 'Preparation and analysis of cash flow statements as per AS 3.',
    keyPoints: [
      'Operating activities cash flow',
      'Investing activities',
      'Financing activities',
      'Direct and indirect methods',
      'Free cash flow',
      'Cash flow ratios'
    ],
    example: 'Operating cash flow indicates cash generated from core business operations.',
    formula: 'Free Cash Flow = Operating Cash Flow - Capital Expenditure'
  },
  {
    id: 'cs-e-cafm-10',
    title: 'Forecasting Financial Statements',
    difficulty: 'intermediate',
    description: 'Pro-forma financial statements and financial projections.',
    keyPoints: [
      'Pro-forma income statement',
      'Pro-forma balance sheet',
      'Sales forecasting methods',
      'Percentage of sales method',
      'External financing needed',
      'Sensitivity analysis'
    ],
    example: 'Pro-forma statements help in planning future financing requirements and growth strategies.',
    formula: 'EFN = (A*/S)ΔS - (L*/S)ΔS - PM×S₁×(1-d)'
  },
  {
    id: 'cs-e-cafm-11',
    title: 'Introduction to Financial Management',
    difficulty: 'intermediate',
    description: 'Scope, objectives, and functions of financial management.',
    keyPoints: [
      'Financial management objectives',
      'Wealth maximization vs profit maximization',
      'Financial decisions - investment, financing, dividend',
      'Risk-return trade-off',
      'Agency theory',
      'Corporate governance'
    ],
    example: 'Wealth maximization considers time value of money and risk, unlike profit maximization.',
  },
  {
    id: 'cs-e-cafm-12',
    title: 'Time Value of Money',
    difficulty: 'intermediate',
    description: 'Present value, future value, annuities, and perpetuities.',
    keyPoints: [
      'Future value and present value',
      'Compounding and discounting',
      'Annuities - ordinary and due',
      'Perpetuities',
      'Growing annuities',
      'Effective annual rate'
    ],
    example: 'Money available today is worth more than same amount in future due to earning capacity.',
    formula: 'FV = PV(1+r)ⁿ; PV = FV/(1+r)ⁿ; Annuity PV = PMT × [(1-(1+r)⁻ⁿ)/r]'
  },
  {
    id: 'cs-e-cafm-13',
    title: 'Capital Budgeting',
    difficulty: 'intermediate',
    description: 'Investment appraisal techniques and project evaluation.',
    keyPoints: [
      'Payback period',
      'Net Present Value (NPV)',
      'Internal Rate of Return (IRR)',
      'Profitability Index',
      'NPV vs IRR comparison',
      'Capital rationing'
    ],
    example: 'NPV method is superior as it considers time value and gives absolute measure of profitability.',
    formula: 'NPV = Σ[CFt/(1+r)ᵗ] - Initial Investment; IRR: NPV = 0'
  },
  {
    id: 'cs-e-cafm-14',
    title: 'Cost of Capital',
    difficulty: 'intermediate',
    description: 'Computation of cost of various sources of capital and WACC.',
    keyPoints: [
      'Cost of equity - dividend growth model, CAPM',
      'Cost of debt',
      'Cost of preference shares',
      'Weighted Average Cost of Capital (WACC)',
      'Marginal cost of capital',
      'WACC as hurdle rate'
    ],
    example: 'WACC is the minimum return required to satisfy all stakeholders - equity and debt holders.',
    formula: 'WACC = (E/V)×Re + (D/V)×Rd×(1-T); CAPM: Re = Rf + β(Rm-Rf)'
  },
  {
    id: 'cs-e-cafm-15',
    title: 'Capital Structure',
    difficulty: 'intermediate',
    description: 'Capital structure theories, optimal capital structure, and leverage.',
    keyPoints: [
      'Capital structure concepts',
      'Modigliani-Miller theorem',
      'Trade-off theory',
      'Pecking order theory',
      'Operating and financial leverage',
      'EBIT-EPS analysis'
    ],
    example: 'Optimal capital structure minimizes WACC and maximizes firm value.',
    formula: 'DOL = % Change in EBIT / % Change in Sales; DFL = % Change in EPS / % Change in EBIT'
  },
  {
    id: 'cs-e-cafm-16',
    title: 'Dividend Decisions',
    difficulty: 'intermediate',
    description: 'Dividend theories, policies, and forms of dividends.',
    keyPoints: [
      'Walter\'s model',
      'Gordon\'s model',
      'Modigliani-Miller dividend irrelevance',
      'Dividend policies - stable, constant payout',
      'Stock dividends and splits',
      'Share buyback'
    ],
    example: 'Walter\'s model suggests retaining earnings when r > k for growth firms.',
    formula: 'P = [D + (E-D)×r/k] / k where r = ROI, k = cost of equity'
  },
  {
    id: 'cs-e-cafm-17',
    title: 'Working Capital Management',
    difficulty: 'intermediate',
    description: 'Management of current assets and current liabilities.',
    keyPoints: [
      'Operating cycle',
      'Cash management - Baumol and Miller-Orr models',
      'Receivables management',
      'Inventory management - EOQ',
      'Payables management',
      'Working capital financing'
    ],
    example: 'Efficient working capital management ensures liquidity while minimizing idle funds.',
    formula: 'Operating Cycle = Inventory Period + Receivables Period; EOQ = √(2×D×O/C)'
  },
  {
    id: 'cs-e-cafm-18',
    title: 'Security Analysis',
    difficulty: 'intermediate',
    description: 'Fundamental and technical analysis of securities.',
    keyPoints: [
      'Fundamental analysis - EIC framework',
      'Technical analysis',
      'Valuation of equity shares',
      'Valuation of bonds',
      'Efficient Market Hypothesis',
      'Portfolio theory basics'
    ],
    example: 'Fundamental analysis evaluates intrinsic value through economy, industry, and company analysis.',
    formula: 'Bond Value = Σ[Coupon/(1+r)ᵗ] + Face Value/(1+r)ⁿ'
  },
  {
    id: 'cs-e-cafm-19',
    title: 'Operational Approach to Financial Decisions',
    difficulty: 'intermediate',
    description: 'Practical application of financial concepts in business decisions.',
    keyPoints: [
      'Lease vs buy decisions',
      'Make or buy decisions',
      'Merger and acquisition decisions',
      'Disinvestment decisions',
      'Expansion and modernization',
      'Risk management strategies'
    ],
    example: 'Lease vs buy analysis compares present value of lease payments with outright purchase cost.',
  }
];

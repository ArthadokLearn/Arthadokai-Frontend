// CA Final Paper-2: Advanced Financial Management - All 15 Chapters

interface Concept {
  id: string;
  title: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  description: string;
  keyPoints: string[];
  example: string;
  formula?: string;
  questions?: QuestionAnswer[];
}

export interface QuestionAnswer {
  id: string;
  question: string;
  answer: string;
  howToApproach: string;
  conceptExplanation: string;
  conceptImages?: string[]; // base64 encoded images
  category?: 'Theoretical Questions & Answers' | 'Practical Questions & Answers' | 'Case Studies' | 'Multiple Choice Questions' | 'Formulas & Insights' | 'Other'; // Question category
}

export const caFinalAFMConcepts: Concept[] = [
  {
    id: 'ch1-financial-policy',
    title: 'Chapter 1: Financial Policy and Corporate Strategy',
    difficulty: 'advanced',
    description: 'Financial policy integrates with corporate strategy to maximize shareholder wealth. Covers capital structure, dividend policy, and strategic financial decisions.',
    keyPoints: [
      'Financial Policy: Framework for capital structure, dividend policy, working capital management',
      'Corporate Strategy: Long-term direction and scope of organization',
      'Value Creation: Achieved through optimal financial decisions',
      'Capital Structure Policy: Debt-equity mix to minimize WACC',
      'Dividend Policy: Payout ratio, stability, signaling effect',
      'MM Hypothesis: With/without taxes, impact on firm value',
      'Pecking Order Theory: Internal funds > Debt > Equity preference',
      'Trade-off Theory: Balance between tax shield and financial distress costs',
      'Agency Theory: Conflicts between shareholders, debtholders, managers'
    ],
    example: 'Example: Capital Structure Decision\n\nCompany ABC considering optimal capital structure:\nEBIT: ₹100 crore\nCurrent: 100% Equity (10 crore shares @ ₹100)\n\nProposal: 50% Debt at 10% interest\nDebt raised: ₹500 crore (buyback 5 crore shares)\n\nScenario Analysis:\n\nAll Equity:\nEBIT: ₹100 cr\nInterest: ₹0\nEBT: ₹100 cr\nTax @30%: ₹30 cr\nPAT: ₹70 cr\nEPS: ₹70/10 = ₹7\nROE: 70/1000 = 7%\n\n50% Debt:\nEBIT: ₹100 cr\nInterest: ₹50 cr (10% of ₹500 cr)\nEBT: ₹50 cr\nTax @30%: ₹15 cr\nPAT: ₹35 cr\nEPS: ₹35/5 = ₹7\nROE: 35/500 = 7%\n\nAt EBIT ₹100 cr, both structures give same EPS.\nIndifference Point: EBIT where EPS is equal under both plans.\n\nIf EBIT increases to ₹150 cr:\nAll Equity EPS: ₹10.5\n50% Debt EPS: ₹14 (Financial leverage benefit)',
    formula: 'WACC = (E/V × Re) + (D/V × Rd × (1-Tc)) where V = E + D',
    questions: [
      {
        id: 'q1',
        question: 'Explain the Modigliani-Miller (MM) Theorem and its relevance to capital structure decisions.',
        answer: 'The MM Theorem states that in a perfect market (no taxes, transaction costs, or bankruptcy costs), the value of a firm is independent of its capital structure. Proposition I states that firm value equals the present value of expected future cash flows, unaffected by financing mix. Proposition II states that cost of equity increases linearly with financial leverage. With corporate taxes (MM with taxes), debt financing adds value through tax shields on interest payments.',
        howToApproach: 'Start with MM assumptions (perfect markets), explain Proposition I and II separately, then discuss the impact of introducing corporate taxes. Highlight the practical limitations and why firms don\'t operate at 100% debt despite tax benefits.',
        conceptExplanation: 'The MM Theorem provides the foundation for understanding capital structure theory. While unrealistic, it establishes the baseline that deviations from optimal structure arise from market imperfections.'
      },
      {
        id: 'q2',
        question: 'Distinguish between Trading on Equity and Financial Leverage.',
        answer: 'Trading on Equity refers to the practice of using fixed-cost debt or preference capital to increase returns to equity shareholders when the return on investment exceeds the fixed cost. Financial Leverage measures the sensitivity of EPS to changes in EBIT.',
        howToApproach: 'Define both terms, explain the conditions for favorable leverage (ROI > Cost of Debt), use a numerical example showing how EBIT changes affect EPS differently under different capital structures.',
        conceptExplanation: 'These concepts explain why companies use debt financing strategically. While debt can magnify returns during good times, it also magnifies losses during downturns.'
      }
    ]
  },
  {
    id: 'ch2-risk-management',
    title: 'Chapter 2: Risk Management',
    difficulty: 'advanced',
    description: 'Systematic approach to identifying, assessing, and managing risks. Covers enterprise risk management, risk measurement techniques, and hedging strategies.',
    keyPoints: [
      'Risk: Uncertainty about outcomes, measured by standard deviation/variance',
      'Types: Business Risk, Financial Risk, Operational Risk, Strategic Risk',
      'ERM: Enterprise Risk Management - holistic approach',
      'Value at Risk (VaR): Maximum loss at given confidence level',
      'Expected Shortfall (ES): Average loss beyond VaR',
      'Risk Appetite: Amount of risk organization willing to accept',
      'Risk Mitigation: Avoidance, Reduction, Transfer, Acceptance',
      'Hedging: Using derivatives to offset risk exposure',
      'COSO Framework: Committee of Sponsoring Organizations framework'
    ],
    example: 'Example: Value at Risk (VaR) Calculation\n\nPortfolio Value: ₹10 crore\nDaily Return: Mean = 0.05%, Std Dev = 1.5%\nConfidence Level: 95% (Z = 1.645)\n\nDaily VaR Calculation:\nVaR = Portfolio Value × Z × Std Dev\nVaR = ₹10 cr × 1.645 × 1.5%\nVaR = ₹24.675 lakh\n\nInterpretation:\nWith 95% confidence, maximum loss in one day ≤ ₹24.675 lakh\nOr: 5% chance of losing more than ₹24.675 lakh in one day\n\n10-Day VaR:\n10-Day Std Dev = 1.5% × √10 = 4.74%\n10-Day VaR = ₹10 cr × 1.645 × 4.74% = ₹78 lakh\n\nRisk Management Decision:\nIf VaR exceeds risk appetite → Reduce position size or hedge\nOptions: Sell assets, buy put options, futures hedge',
    formula: 'VaR = Portfolio Value × Z-score × Standard Deviation × √Time Period'
  },
  {
    id: 'ch3-capital-budgeting',
    title: 'Chapter 3: Advanced Capital Budgeting Decisions',
    difficulty: 'advanced',
    description: 'Complex capital budgeting under uncertainty, real options, adjusted present value (APV), and strategic investment decisions.',
    keyPoints: [
      'Real Options: Option to expand, abandon, defer investment',
      'APV Method: Base-case NPV + PV of financing side effects',
      'Sensitivity Analysis: Impact of variable changes on NPV',
      'Scenario Analysis: Best case, base case, worst case',
      'Simulation: Monte Carlo simulation for risk assessment',
      'Decision Trees: Sequential decisions under uncertainty',
      'Equivalent Annual Cost (EAC): For comparing projects with unequal lives',
      'Replacement Analysis: Challenger vs Defender decision',
      'Inflation Adjustment: Real vs nominal cash flows and discount rates'
    ],
    example: 'Example: Adjusted Present Value (APV)\n\nProject Investment: ₹100 crore\nAll-equity cost of capital: 15%\nProject life: 5 years\nAnnual cash flow: ₹30 crore\n\nFinancing:\n60% Debt at 10% interest\nTax rate: 30%\n\nStep 1: Base-case NPV (All-equity)\nPV of cash flows = ₹30 cr × PVIFA(15%, 5)\n= ₹30 cr × 3.352\n= ₹100.56 cr\nBase NPV = ₹100.56 - ₹100 = ₹0.56 cr\n\nStep 2: PV of Interest Tax Shield\nDebt amount: 60% × ₹100 cr = ₹60 cr\nAnnual interest: ₹60 cr × 10% = ₹6 cr\nTax shield: ₹6 cr × 30% = ₹1.8 cr per year\nPV of tax shield = ₹1.8 cr × PVIFA(10%, 5)\n= ₹1.8 cr × 3.791\n= ₹6.82 cr\n\nStep 3: APV\nAPV = Base NPV + PV of tax shield\n= ₹0.56 cr + ₹6.82 cr\n= ₹7.38 cr\n\nDecision: Accept project (APV > 0)',
    formula: 'APV = NPV(all-equity) + PV(financing side effects)'
  },
  {
    id: 'ch4-security-analysis',
    title: 'Chapter 4: Security Analysis',
    difficulty: 'intermediate',
    description: 'Fundamental and technical analysis of securities. Covers economic, industry, and company analysis for investment decisions.',
    keyPoints: [
      'Fundamental Analysis: Economic → Industry → Company (Top-down)',
      'Economic Analysis: GDP growth, inflation, interest rates, fiscal policy',
      'Industry Analysis: Life cycle stage, competitive forces (Porter\'s 5)',
      'Company Analysis: Financial statements, ratios, management quality',
      'Technical Analysis: Price patterns, trends, support/resistance',
      'Dow Theory: Primary, secondary, minor trends',
      'Chart Patterns: Head & shoulders, double top/bottom, triangles',
      'Indicators: Moving averages, RSI, MACD, Bollinger Bands',
      'Efficient Market Hypothesis: Weak, semi-strong, strong form'
    ],
    example: 'Example: Company Fundamental Analysis\n\nCompany XYZ Ltd:\nCMP: ₹500\nEPS: ₹40\nBook Value per share: ₹200\nDividend per share: ₹20\nIndustry Average P/E: 15x\n\nValuation Ratios:\n\n1. P/E Ratio:\n= ₹500 / ₹40 = 12.5x\nAnalysis: Trading below industry average (15x)\nIndication: Potentially undervalued OR lower growth expectations\n\n2. P/B Ratio:\n= ₹500 / ₹200 = 2.5x\nAnalysis: Trading at 2.5 times book value\n\n3. Dividend Yield:\n= ₹20 / ₹500 = 4%\nAnalysis: Attractive for income investors\n\n4. Payout Ratio:\n= ₹20 / ₹40 = 50%\nAnalysis: Moderate payout, retains 50% for growth\n\nDCF Valuation:\nExpected dividend growth: 8%\nRequired return: 12%\nIntrinsic Value = D₁ / (Ke - g)\n= ₹20 × 1.08 / (0.12 - 0.08)\n= ₹21.6 / 0.04 = ₹540\n\nConclusion: Intrinsic value ₹540 > CMP ₹500 → BUY',
    formula: 'Intrinsic Value = D₁ / (Ke - g) where D₁ = next year dividend, Ke = required return, g = growth rate'
  },
  {
    id: 'ch5-security-valuation',
    title: 'Chapter 5: Security Valuation',
    difficulty: 'advanced',
    description: 'Valuation models for equity and debt securities. Dividend discount models, earnings-based models, and relative valuation.',
    keyPoints: [
      'Dividend Discount Model (DDM): Value = PV of future dividends',
      'Gordon Growth Model: Constant growth DDM',
      'Two-Stage Growth Model: High growth then stable growth',
      'H-Model: Declining growth rate model',
      'Free Cash Flow to Equity (FCFE): Cash available to shareholders',
      'Free Cash Flow to Firm (FCFF): Cash available to all investors',
      'P/E Valuation: Justified P/E based on fundamentals',
      'Bond Valuation: PV of coupon payments + principal',
      'Duration and Convexity: Bond price sensitivity to interest rates'
    ],
    example: 'Example: Two-Stage DDM Valuation\n\nCompany ABC:\nCurrent Dividend (D₀): ₹10\nHigh growth period: 5 years at 20%\nStable growth: 6% perpetually\nRequired return: 14%\n\nStage 1: High Growth (Years 1-5)\nYear 1: D₁ = ₹10 × 1.20 = ₹12.00, PV = ₹12/1.14 = ₹10.53\nYear 2: D₂ = ₹12 × 1.20 = ₹14.40, PV = ₹14.40/1.14² = ₹11.08\nYear 3: D₃ = ₹14.40 × 1.20 = ₹17.28, PV = ₹17.28/1.14³ = ₹11.66\nYear 4: D₄ = ₹17.28 × 1.20 = ₹20.74, PV = ₹20.74/1.14⁴ = ₹12.28\nYear 5: D₅ = ₹20.74 × 1.20 = ₹24.88, PV = ₹24.88/1.14⁵ = ₹12.93\nTotal PV (Stage 1) = ₹58.48\n\nStage 2: Stable Growth (Year 6 onwards)\nD₆ = ₹24.88 × 1.06 = ₹26.37\nTerminal Value at end of Year 5:\nTV₅ = D₆ / (Ke - g) = ₹26.37 / (0.14 - 0.06) = ₹329.63\nPV of TV₅ = ₹329.63 / 1.14⁵ = ₹171.20\n\nIntrinsic Value = ₹58.48 + ₹171.20 = ₹229.68\n\nIf CMP = ₹200 → Undervalued → BUY',
    formula: 'Two-Stage Value = PV(High Growth Dividends) + PV(Terminal Value)'
  },
  {
    id: 'ch6-portfolio-management',
    title: 'Chapter 6: Portfolio Management',
    difficulty: 'advanced',
    description: 'Modern Portfolio Theory, CAPM, portfolio optimization, performance evaluation, and asset allocation strategies.',
    keyPoints: [
      'Diversification: Reduces unsystematic risk through correlation',
      'Efficient Frontier: Optimal risk-return combinations',
      'Markowitz Model: Mean-variance optimization',
      'CAPM: E(Ri) = Rf + βi[E(Rm) - Rf]',
      'Beta: Systematic risk, sensitivity to market movements',
      'Sharpe Ratio: Excess return per unit of total risk',
      'Treynor Ratio: Excess return per unit of systematic risk',
      'Jensen\'s Alpha: Actual return - Expected return (CAPM)',
      'Asset Allocation: Strategic vs Tactical allocation'
    ],
    example: 'Example: Portfolio Construction & Performance\n\nInvestor creates portfolio with 2 stocks:\n\nStock A:\nExpected Return: 15%\nStandard Deviation: 20%\nBeta: 1.2\n\nStock B:\nExpected Return: 12%\nStandard Deviation: 15%\nBeta: 0.8\n\nCorrelation (A,B): 0.3\nWeights: 60% in A, 40% in B\nRisk-free rate: 6%\n\nPortfolio Expected Return:\nE(Rp) = 0.6 × 15% + 0.4 × 12% = 13.8%\n\nPortfolio Beta:\nβp = 0.6 × 1.2 + 0.4 × 0.8 = 1.04\n\nPortfolio Standard Deviation:\nσp² = (0.6² × 20²) + (0.4² × 15²) + (2 × 0.6 × 0.4 × 0.3 × 20 × 15)\nσp² = 144 + 36 + 43.2 = 223.2\nσp = 14.94%\n\nSharpe Ratio:\n= (13.8% - 6%) / 14.94% = 0.52\n\nTreynor Ratio:\n= (13.8% - 6%) / 1.04 = 7.5%\n\nBenefit of Diversification:\nWeighted avg σ = 0.6 × 20% + 0.4 × 15% = 18%\nPortfolio σ = 14.94%\nRisk reduction = 18% - 14.94% = 3.06%',
    formula: 'Sharpe Ratio = (Rp - Rf) / σp; Beta = Cov(Ri, Rm) / Var(Rm)'
  },
  {
    id: 'ch7-securitization',
    title: 'Chapter 7: Securitization',
    difficulty: 'intermediate',
    description: 'Process of pooling assets and issuing securities backed by cash flows. Covers mortgage-backed securities, asset-backed securities, and CDOs.',
    keyPoints: [
      'Securitization: Converting illiquid assets into tradable securities',
      'SPV/SPE: Special Purpose Vehicle isolates assets, bankruptcy remote',
      'Originator: Entity that creates underlying assets',
      'Pass-Through Securities: Cash flows passed to investors proportionately',
      'Pay-Through Securities: SPV issues bonds, manages cash flows',
      'Credit Enhancement: Subordination, over-collateralization, guarantees',
      'Tranching: Senior, mezzanine, equity tranches with different risk/return',
      'Benefits: Liquidity, risk transfer, lower funding costs, capital relief',
      'Risks: Prepayment risk, credit risk, liquidity risk'
    ],
    example: 'Example: Mortgage-Backed Securitization\n\nBank has home loans worth ₹1,000 crore:\nAverage interest rate: 10% p.a.\nAverage tenure: 15 years\nMonthly cash flow: ₹107.46 lakh\n\nSecuritization Structure:\n\nStep 1: Bank (Originator) sells loans to SPV\nSale Price: ₹1,000 crore\n\nStep 2: SPV issues securities (Tranches)\nSenior Tranche (AAA): ₹700 cr @ 8% (70%)\nMezzanine (BBB): ₹200 cr @ 9.5% (20%)\nEquity Tranche: ₹100 cr @ residual (10%)\n\nStep 3: Cash Flow Waterfall\nMonthly collections: ₹107.46 lakh\nPayment priority:\n1. SPV expenses: ₹2 lakh\n2. Senior interest: ₹700cr × 8%/12 = ₹4.67 cr\n3. Mezzanine interest: ₹200cr × 9.5%/12 = ₹1.58 cr\n4. Senior principal: Balance amount\n5. After Senior paid off → Mezzanine principal\n6. After all paid → Equity gets residual\n\nCredit Enhancement:\nOver-collateralization: ₹1,000 cr assets for ₹900 cr senior+mezzanine\nSubordination: Junior tranches absorb losses first\n\nBenefits to Bank:\n• Immediate liquidity of ₹1,000 cr\n• Capital freed up for new loans\n• Risk transferred to investors',
    formula: 'Securitization Gain = Sale Price - Book Value of Assets - Transaction Costs'
  },
  {
    id: 'ch8-mutual-funds',
    title: 'Chapter 8: Mutual Funds',
    difficulty: 'intermediate',
    description: 'Pooled investment vehicles managed professionally. Types of funds, NAV calculation, performance measurement, and regulatory framework.',
    keyPoints: [
      'Mutual Fund: Pool of funds from investors, professionally managed',
      'NAV: (Total Assets - Liabilities) / Number of Units',
      'Open-ended: Continuous purchase/redemption at NAV',
      'Close-ended: Fixed number of units, traded on exchange',
      'Types: Equity, Debt, Hybrid, Index, Sectoral, Thematic, ELSS',
      'SIP: Systematic Investment Plan, rupee cost averaging',
      'Load: Entry load (front-end), Exit load (back-end)',
      'Expense Ratio: Annual expenses as % of AUM (capped by SEBI)',
      'SEBI Regulations: Investor protection, disclosure norms'
    ],
    example: 'Example: Mutual Fund NAV Calculation & Returns\n\nABC Equity Fund (31 March 2024):\n\nAssets:\nEquity Shares: ₹500 crore\nCash & Bank: ₹10 crore\nDividends Receivable: ₹2 crore\nTotal Assets: ₹512 crore\n\nLiabilities:\nManagement Fees Payable: ₹1 crore\nOther Expenses: ₹0.5 crore\nTotal Liabilities: ₹1.5 crore\n\nNet Assets: ₹512 - ₹1.5 = ₹510.5 crore\nOutstanding Units: 10 crore\n\nNAV = ₹510.5 cr / 10 cr = ₹51.05 per unit\n\nInvestor Performance:\nInvestor bought 1,000 units on 1 April 2023:\nPurchase NAV: ₹45\nInvestment: ₹45,000\nExit Load: 1% if redeemed within 1 year\n\nRedemption on 31 March 2024:\nCurrent NAV: ₹51.05\nExit Load: 1% × ₹51.05 = ₹0.5105\nRedemption NAV: ₹51.05 - ₹0.51 = ₹50.54\nRedemption Value: 1,000 × ₹50.54 = ₹50,540\n\nReturn Calculation:\nAbsolute Return = (₹50,540 - ₹45,000) / ₹45,000 = 12.31%\n\nCAGR: Since held for 1 year, CAGR = 12.31%\n\nSIP Advantage:\nIf same ₹45,000 invested via monthly SIP (₹3,750/month):\nBenefits from rupee cost averaging during market volatility',
    formula: 'NAV = (Market Value of Assets - Liabilities) / Number of Outstanding Units'
  },
  {
    id: 'ch9-derivatives',
    title: 'Chapter 9: Derivatives Analysis and Valuation',
    difficulty: 'advanced',
    description: 'Forwards, futures, options, and swaps. Pricing models, hedging strategies, and risk management using derivatives.',
    keyPoints: [
      'Forward: OTC contract, customized, settlement at maturity',
      'Futures: Exchange-traded, standardized, daily settlement (MTM)',
      'Options: Right but not obligation, Call (buy), Put (sell)',
      'Black-Scholes Model: European option pricing',
      'Put-Call Parity: C + PV(X) = P + S₀',
      'Greeks: Delta, Gamma, Theta, Vega, Rho',
      'Hedging: Long hedge, Short hedge, Cross hedge',
      'Strategies: Covered call, Protective put, Straddle, Strangle, Spreads',
      'Interest Rate Swaps: Exchange fixed for floating cash flows'
    ],
    example: 'Example: Options Valuation & Strategy\n\nStock XYZ trading at ₹1,000\nCall Option: Strike ₹1,050, Premium ₹30\nPut Option: Strike ₹1,050, Premium ₹70\nExpiry: 3 months\nRisk-free rate: 8% p.a.\n\nPut-Call Parity Verification:\nC + PV(X) = P + S₀\n₹30 + ₹1,050/e^(0.08×0.25) = ₹70 + ₹1,000\n₹30 + ₹1,029.42 = ₹1,070\n₹1,059.42 ≈ ₹1,070 (approximately holds)\n\nLong Straddle Strategy:\n(Expects high volatility, direction unknown)\nBuy Call @ ₹30 + Buy Put @ ₹70\nTotal Premium: ₹100\n\nPayoff at Expiry:\nIf Stock = ₹900:\nCall payoff: ₹0\nPut payoff: ₹1,050 - ₹900 = ₹150\nNet: ₹150 - ₹100 = ₹50 profit\n\nIf Stock = ₹1,050:\nCall payoff: ₹0\nPut payoff: ₹0\nNet: -₹100 loss (max loss)\n\nIf Stock = ₹1,200:\nCall payoff: ₹1,200 - ₹1,050 = ₹150\nPut payoff: ₹0\nNet: ₹150 - ₹100 = ₹50 profit\n\nBreakeven Points:\nUpper: ₹1,050 + ₹100 = ₹1,150\nLower: ₹1,050 - ₹100 = ₹950\n\nProfit if: Stock < ₹950 OR Stock > ₹1,150',
    formula: 'Black-Scholes Call = S₀N(d₁) - Xe^(-rT)N(d₂); Put-Call Parity: C + Xe^(-rT) = P + S₀'
  },
  {
    id: 'ch10-forex-risk',
    title: 'Chapter 10: Foreign Exchange Exposure and Risk Management',
    difficulty: 'advanced',
    description: 'Managing currency risk arising from international transactions. Transaction, translation, and economic exposure with hedging techniques.',
    keyPoints: [
      'Transaction Exposure: Cash flow impact from exchange rate changes',
      'Translation Exposure: Balance sheet impact from consolidation',
      'Economic Exposure: Long-term competitive position impact',
      'Forward Contracts: Lock in exchange rate for future transaction',
      'Futures: Standardized exchange-traded currency contracts',
      'Options: Currency call/put for upside potential with downside protection',
      'Money Market Hedge: Borrow/lend in foreign currency',
      'Netting: Offsetting payables and receivables',
      'Leading and Lagging: Timing of payments based on expectations'
    ],
    example: 'Example: Transaction Exposure Hedging\n\nIndian Exporter:\nExport to USA: $1 million receivable in 3 months\nSpot Rate: ₹82/$\nExpected value: ₹8.2 crore\n\nRisk: If ₹ appreciates to ₹80/$, receive only ₹8.0 crore (loss ₹20 lakh)\n\nHedging Options:\n\n1. Forward Contract:\n3-month forward rate: ₹82.50/$\nLock in: ₹8.25 crore (guaranteed)\nNo upside if ₹ depreciates\n\n2. Currency Futures:\nSell $ futures at ₹82.40/$\nSimilar to forward, exchange-traded\n\n3. Currency Options:\nBuy $ Put Option (right to sell $ at ₹82/$)\nPremium: ₹0.50/$ × $1 million = ₹5 lakh\n\nScenario Analysis:\n\nIf Spot becomes ₹78/$:\nUnhedged: ₹7.8 cr (loss ₹40L)\nForward: ₹8.25 cr (gain ₹45L)\nOption: Max(₹7.8cr, ₹8.2cr) - ₹5L = ₹8.15cr (gain ₹35L)\n\nIf Spot becomes ₹85/$:\nUnhedged: ₹8.5 cr (gain ₹30L)\nForward: ₹8.25 cr (opportunity loss ₹25L)\nOption: ₹8.5cr - ₹5L = ₹8.45cr (gain ₹25L, keeps upside!)\n\n4. Money Market Hedge:\nBorrow $ now: $1m / (1 + 0.02) = $980,392\nConvert at spot ₹82: ₹8.04 cr\nInvest in India @8% p.a.: ₹8.04cr × 1.02 = ₹8.20 cr\nRepay $ loan from receivable\n\nDecision based on: Cost, flexibility, view on currency movement',
    formula: 'Forward Premium/Discount = [(Forward - Spot) / Spot] × (12/n) × 100'
  },
  {
    id: 'ch11-international-finance',
    title: 'Chapter 11: International Financial Management',
    difficulty: 'advanced',
    description: 'International capital budgeting, cross-border financing, political risk, and global investment decisions.',
    keyPoints: [
      'Interest Rate Parity: Forward premium/discount = Interest rate differential',
      'Purchasing Power Parity: Exchange rates adjust for inflation differences',
      'International Fisher Effect: Real interest rates equalize across countries',
      'Cross-border Capital Budgeting: Account for exchange rates, taxes, restrictions',
      'Cost of Capital: WACC in global context, country risk premium',
      'ADR/GDR: American/Global Depositary Receipts for foreign listings',
      'Political Risk: Expropriation, currency controls, contract repudiation',
      'FCCB: Foreign Currency Convertible Bonds',
      'ECB: External Commercial Borrowings'
    ],
    example: 'Example: International Capital Budgeting\n\nIndian MNC evaluating project in USA:\nInitial Investment: $10 million\nProject Life: 5 years\nAnnual Cash Flow: $3 million\nSalvage Value: $1 million\nUS Tax Rate: 25%\nRepatriation: No restrictions\n\nCurrent Spot Rate: ₹82/$\nUS Inflation: 2% p.a.\nIndia Inflation: 6% p.a.\nRisk-free India: 8%, USA: 3%\nProject Risk Premium: 5%\n\nForecast Exchange Rates (PPP):\nYear 0: ₹82/$\nYear 1: ₹82 × (1.06/1.02) = ₹85.18/$\nYear 2: ₹85.18 × (1.06/1.02) = ₹88.47/$\nYear 3: ₹88.47 × (1.06/1.02) = ₹91.89/$\nYear 4: ₹91.89 × (1.06/1.02) = ₹95.44/$\nYear 5: ₹95.44 × (1.06/1.02) = ₹99.13/$\n\nCash Flows in ₹:\nYear 0: -$10m × ₹82 = -₹820 million\nYear 1: $3m × ₹85.18 = ₹255.54 million\nYear 2: $3m × ₹88.47 = ₹265.41 million\nYear 3: $3m × ₹91.89 = ₹275.67 million\nYear 4: $3m × ₹95.44 = ₹286.32 million\nYear 5: ($3m + $1m) × ₹99.13 = ₹396.52 million\n\nDiscount Rate (Rupee terms):\nUsing Fisher Effect:\n(1 + R₹) = (1 + R$) × (1 + Inflation differential)\nBase rate: (1.03) × (1.06/1.02) = 1.0706 → 7.06%\nPlus risk premium: 7.06% + 5% = 12.06%\n\nNPV Calculation:\nNPV = -₹820 + ₹255.54/1.1206 + ... + ₹396.52/1.1206⁵\nNPV = -₹820 + ₹955.32 = ₹135.32 million\n\nDecision: Accept (NPV > 0)',
    formula: 'Covered IRP: (1 + Rd) = [(1 + Rf) × Forward] / Spot; PPP: E₁/E₀ = (1 + Ih) / (1 + If)'
  },
  {
    id: 'ch12-interest-rate-risk',
    title: 'Chapter 12: Interest Rate Risk Management',
    difficulty: 'advanced',
    description: 'Managing exposure to interest rate changes. Duration, convexity, immunization, and interest rate derivatives.',
    keyPoints: [
      'Interest Rate Risk: Price risk (inverse relation) and Reinvestment risk',
      'Duration: Weighted average time to receive cash flows, price sensitivity',
      'Macaulay Duration: Time-weighted PV of cash flows / Bond price',
      'Modified Duration: Price change per 1% yield change',
      'Convexity: Curvature in price-yield relationship',
      'Immunization: Match duration of assets and liabilities',
      'Forward Rate Agreement (FRA): Lock in future interest rate',
      'Interest Rate Swaps: Exchange fixed for floating payments',
      'Caps, Floors, Collars: Option-based interest rate protection'
    ],
    example: 'Example: Duration and Immunization\n\nBond Details:\nFace Value: ₹1,000\nCoupon: 8% annual\nYTM: 10%\nMaturity: 3 years\n\nStep 1: Calculate Macaulay Duration\n\nYear | Cash Flow | PV @10% | Weight | Year×Weight\n1    | ₹80      | ₹72.73  | 0.0745 | 0.0745\n2    | ₹80      | ₹66.12  | 0.0677 | 0.1354\n3    | ₹1,080   | ₹811.42 | 0.8308 | 2.4924\nTotal|          | ₹950.27 | 1.0000 | 2.7023\n\nMacaulay Duration = 2.7023 years\n\nModified Duration:\n= Macaulay Duration / (1 + YTM)\n= 2.7023 / 1.10 = 2.4567 years\n\nStep 2: Price Change Estimation\n\nIf YTM increases from 10% to 11%:\n\nUsing Modified Duration:\nΔP/P ≈ -Modified Duration × ΔY\nΔP/P ≈ -2.4567 × 0.01 = -0.024567 = -2.46%\nNew Price ≈ ₹950.27 × (1 - 0.0246) = ₹926.88\n\nActual New Price @11%:\n= ₹80/1.11 + ₹80/1.11² + ₹1,080/1.11³\n= ₹928.23\n\nError due to convexity: ₹928.23 - ₹926.88 = ₹1.35\n\nImmunization Example:\nLiability: ₹100 million due in 5 years\nDuration required: 5 years\n\nPortfolio Construction:\nBond A: Duration 3 years\nBond B: Duration 8 years\n\nWeights: wA(3) + wB(8) = 5\nwA + wB = 1\nSolving: wA = 0.6, wB = 0.4\n\nInvest ₹60M in Bond A, ₹40M in Bond B\nPortfolio immunized against parallel rate shifts',
    formula: 'Modified Duration = Macaulay Duration / (1 + YTM); ΔP/P ≈ -D × ΔY'
  },
  {
    id: 'ch13-business-valuation',
    title: 'Chapter 13: Business Valuation',
    difficulty: 'advanced',
    description: 'Valuation of firms and businesses using DCF, relative valuation, and asset-based approaches. Fair value determination.',
    keyPoints: [
      'DCF Valuation: PV of future cash flows at WACC',
      'FCFF: Free Cash Flow to Firm = NOPAT + Depreciation - Capex - Working Capital',
      'FCFE: Free Cash Flow to Equity (after debt payments)',
      'Terminal Value: Perpetuity growth or exit multiple',
      'Relative Valuation: P/E, EV/EBITDA, P/B multiples',
      'Asset-Based: Book value, Liquidation value, Replacement cost',
      'Control Premium: Additional value for controlling stake',
      'Minority Discount: Reduction for lack of control',
      'Marketability Discount: Illiquid shares trade at discount'
    ],
    example: 'Example: DCF Valuation of Company\n\nTarget Company Financials:\nEBIT (Year 1): ₹100 crore (growing @10% for 5 years, then 5%)\nTax Rate: 30%\nDepreciation: ₹20 crore/year\nCapex: ₹25 crore/year\nWorking Capital increase: ₹5 crore/year\nWACC: 12%\n\nStep 1: Project FCFF (Years 1-5)\n\nYear 1:\nEBIT: ₹100 cr\nTax: ₹30 cr\nNOPAT: ₹70 cr\nAdd: Depreciation: ₹20 cr\nLess: Capex: ₹25 cr\nLess: WC increase: ₹5 cr\nFCFF₁: ₹60 cr\nPV @12%: ₹53.57 cr\n\nYear 2:\nEBIT: ₹110 cr (10% growth)\nFCFF₂: ₹66 cr\nPV @12%: ₹52.61 cr\n\nYear 3: FCFF₃: ₹72.6 cr, PV: ₹51.68 cr\nYear 4: FCFF₄: ₹79.86 cr, PV: ₹50.77 cr\nYear 5: FCFF₅: ₹87.85 cr, PV: ₹49.88 cr\n\nTotal PV (Years 1-5): ₹258.51 cr\n\nStep 2: Terminal Value\n\nYear 6 FCFF: ₹87.85 × 1.05 = ₹92.24 cr\nTerminal Value = FCFF₆ / (WACC - g)\n= ₹92.24 / (0.12 - 0.05)\n= ₹1,317.71 cr\n\nPV of Terminal Value:\n= ₹1,317.71 / 1.12⁵\n= ₹747.60 cr\n\nStep 3: Enterprise Value\nEV = PV(FCFF 1-5) + PV(Terminal Value)\n= ₹258.51 + ₹747.60\n= ₹1,006.11 cr\n\nStep 4: Equity Value\nEnterprise Value: ₹1,006.11 cr\nLess: Debt: ₹200 cr\nAdd: Cash: ₹50 cr\nEquity Value: ₹856.11 cr\n\nPer Share: ₹856.11 cr / 10 cr shares = ₹85.61',
    formula: 'EV = PV(FCFF) + PV(Terminal Value); Equity Value = EV - Debt + Cash'
  },
  {
    id: 'ch14-ma-restructuring',
    title: 'Chapter 14: Mergers, Acquisitions and Corporate Restructuring',
    difficulty: 'advanced',
    description: 'Strategic rationale, valuation, financing, regulatory aspects of M&A. Divestitures, spin-offs, and corporate restructuring strategies.',
    keyPoints: [
      'Synergy: Revenue enhancement, Cost reduction, Tax benefits',
      'Types: Horizontal, Vertical, Conglomerate mergers',
      'Valuation: DCF, Comparable companies, Precedent transactions',
      'Exchange Ratio: Number of acquirer shares for target shares',
      'EPS Dilution/Accretion: Impact on acquirer EPS',
      'Payment Methods: Cash, Stock, Mixed consideration',
      'Hostile Takeover: Tender offer, proxy fight',
      'Defenses: Poison pill, White knight, Golden parachute',
      'Demerger/Spin-off: Separation of business units'
    ],
    example: 'Example: M&A Valuation and Exchange Ratio\n\nCompany A (Acquirer):\nShares: 10 crore\nEPS: ₹50\nP/E: 20x\nMarket Price: ₹1,000\nMarket Cap: ₹10,000 cr\n\nCompany B (Target):\nShares: 5 crore\nEPS: ₹30\nP/E: 15x\nMarket Price: ₹450\nMarket Cap: ₹2,250 cr\n\nAcquisition Premium: 20%\nOffer Price: ₹450 × 1.20 = ₹540/share\nTotal Consideration: ₹540 × 5 cr = ₹2,700 cr\n\nScenario 1: All Cash\nA pays ₹2,700 cr cash\nCombined EPS:\nCombined PAT: (₹50 × 10cr) + (₹30 × 5cr) = ₹650 cr\nShares: 10 cr (unchanged)\nNew EPS: ₹650/10 = ₹65\nAccretion: (₹65 - ₹50)/₹50 = 30% ✓\n\nScenario 2: All Stock\nExchange Ratio: ₹540 / ₹1,000 = 0.54\nNew shares issued: 5 cr × 0.54 = 2.7 cr\nTotal shares: 10 + 2.7 = 12.7 cr\nCombined PAT: ₹650 cr (same)\nNew EPS: ₹650/12.7 = ₹51.18\nAccretion: (₹51.18 - ₹50)/₹50 = 2.36%\n\nSynergy Analysis:\nExpected cost synergies: ₹50 cr/year\nSynergy PV @12%: ₹50/0.12 = ₹416.67 cr\n\nValue Creation:\nPremium paid: ₹450 cr\nSynergy value: ₹416.67 cr\nNet to A shareholders: -₹33.33 cr\n\nNegotiation: Need higher synergies or lower premium\n\nOwnership Post-Merger (Stock deal):\nA shareholders: 10/12.7 = 78.74%\nB shareholders: 2.7/12.7 = 21.26%',
    formula: 'Synergy = V(AB) - V(A) - V(B); Exchange Ratio = Offer Price(B) / Price(A)'
  },
  {
    id: 'ch15-startup-finance',
    title: 'Chapter 15: Start-up Finance',
    difficulty: 'intermediate',
    description: 'Funding stages, valuation methods, term sheets, exit strategies for start-ups. Venture capital and private equity financing.',
    keyPoints: [
      'Funding Stages: Pre-seed, Seed, Series A/B/C, Mezzanine',
      'Bootstrapping: Self-funding in early stages',
      'Angel Investors: High net-worth individuals, early-stage funding',
      'Venture Capital: Professional investors, growth-stage funding',
      'Valuation: Pre-money (before funding) and Post-money (after funding)',
      'Term Sheet: Investment terms, liquidation preference, anti-dilution',
      'Liquidation Preference: Priority in exit proceeds (1x, 2x participation)',
      'Vesting: Founder equity vesting over time (cliff, acceleration)',
      'Exit Routes: IPO, Strategic sale, Secondary sale, Buyback'
    ],
    example: 'Example: Start-up Funding Round\n\nTech Start-up "InnovateTech":\nFounders: 2 (50% each)\nInitial equity: 100 shares (50 each)\n\nSeries A Round:\nInvestment: ₹10 crore\nPre-money Valuation: ₹40 crore\nPost-money Valuation: ₹40 + ₹10 = ₹50 crore\n\nVC Stake Calculation:\nVC ownership: ₹10 cr / ₹50 cr = 20%\nNew shares issued: 100 × (20%/80%) = 25 shares\nTotal shares: 100 + 25 = 125\nPrice per share: ₹10 cr / 25 = ₹40 lakh\n\nPost-Investment Ownership:\nFounder A: 50/125 = 40%\nFounder B: 50/125 = 40%\nVC: 25/125 = 20%\n\nTerm Sheet Provisions:\n\n1. Liquidation Preference: 1x non-participating\nVC gets ₹10 cr first in exit, then rest pro-rata\n\n2. Anti-dilution: Weighted average\nProtects VC if down round occurs\n\n3. Board Seats:\nFounders: 2 seats\nVC: 1 seat\nIndependent: 2 seats\n\n4. Vesting: 4-year with 1-year cliff\nFounder shares vest over time\n\nExit Scenario Analysis:\n\nScenario 1: Exit at ₹100 crore\nVC gets: ₹10 cr (liquidation pref) + 20% × ₹90 cr = ₹28 cr\nOR: 20% × ₹100 cr = ₹20 cr\nVC takes ₹28 cr (liquidation pref better)\nFounders: ₹90 cr - ₹18 cr = ₹72 cr (36% each)\n\nScenario 2: Exit at ₹30 crore\nVC gets: ₹10 cr (liquidation pref)\nOR: 20% × ₹30 cr = ₹6 cr\nVC takes ₹10 cr\nFounders: ₹20 cr (₹10 cr each)\n\nIRR Calculation (VC):\nInvestment: ₹10 cr (Year 0)\nExit: ₹28 cr (Year 5)\nIRR: (₹28/₹10)^(1/5) - 1 = 22.9%',
    formula: 'Post-money Valuation = Pre-money + Investment; Investor % = Investment / Post-money'
  }
];

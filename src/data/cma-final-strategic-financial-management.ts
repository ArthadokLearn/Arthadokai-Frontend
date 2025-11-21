export interface Concept {
  id: string;
  title: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  description: string;
  keyPoints: string[];
  example: string;
  formula?: string;
}

export const cmaFinalStrategicFinancialManagementConcepts: Concept[] = [
  {
    id: 'cma-f-sfm-1',
    title: 'Investment Decisions – Project Planning and Control',
    difficulty: 'advanced',
    description: 'Advanced capital budgeting, project appraisal under uncertainty, and real options.',
    keyPoints: [
      'Capital rationing and project selection',
      'Sensitivity and scenario analysis',
      'Simulation techniques',
      'Real options in project valuation',
      'Post-implementation audit',
      'Strategic NPV'
    ],
    example: 'Real options allow management to defer, expand, or abandon a project based on future market conditions.',
    formula: 'Strategic NPV = Traditional NPV + Value of Real Options'
  },
  {
    id: 'cma-f-sfm-2',
    title: 'Evaluation of Risky Proposals',
    difficulty: 'advanced',
    description: 'Risk-adjusted discount rates, certainty equivalent approach, and decision tree analysis.',
    keyPoints: [
      'Risk-adjusted discount rate (RADR)',
      'Certainty equivalent method',
      'Decision tree analysis',
      'Probability distributions',
      'Monte Carlo simulation',
      'Value at Risk (VaR)'
    ],
    example: 'Certainty equivalent approach converts uncertain cash flows to their certain equivalents using risk coefficients.',
    formula: 'Risk-adjusted NPV = Σ [Certainty Equivalent Cash Flow / (1 + rf)^t] - Initial Investment'
  },
  {
    id: 'cma-f-sfm-3',
    title: 'Leasing Decisions',
    difficulty: 'advanced',
    description: 'Lease vs buy analysis, financial and operating leases, and tax implications.',
    keyPoints: [
      'Financial lease vs operating lease',
      'Lease vs buy decision analysis',
      'Tax benefits of leasing',
      'Lease rentals and implicit interest rate',
      'Sale and leaseback transactions',
      'Accounting treatment of leases'
    ],
    example: 'Leasing may be preferred when tax benefits and off-balance sheet treatment outweigh ownership benefits.',
    formula: 'PV of Lease = Σ [Lease Payment × (1 - Tax Rate) / (1 + after-tax cost of debt)^t]'
  },
  {
    id: 'cma-f-sfm-4',
    title: 'Securitization',
    difficulty: 'advanced',
    description: 'Asset securitization process, SPV structure, and credit enhancement mechanisms.',
    keyPoints: [
      'Securitization process and structure',
      'Special Purpose Vehicle (SPV)',
      'Credit enhancement techniques',
      'Pass-through certificates',
      'Mortgage-backed securities',
      'Risk transfer and liquidity creation'
    ],
    example: 'A bank can securitize its loan portfolio by transferring it to an SPV which issues securities to investors.',
  },
  {
    id: 'cma-f-sfm-5',
    title: 'Introduction to Securities',
    difficulty: 'advanced',
    description: 'Money market and capital market securities, derivatives, and structured products.',
    keyPoints: [
      'Money market instruments - T-bills, CP, CD',
      'Capital market securities - equity, bonds',
      'Convertible securities',
      'Preference shares and variants',
      'Warrants and rights',
      'Asset-backed securities'
    ],
    example: 'Commercial Paper is a short-term unsecured promissory note issued by highly rated companies for 7-365 days.',
  },
  {
    id: 'cma-f-sfm-6',
    title: 'Equity and Bond Valuation – Performance Evaluation',
    difficulty: 'advanced',
    description: 'Valuation models for equity and bonds, yield measures, and performance metrics.',
    keyPoints: [
      'Dividend discount model (DDM)',
      'Free cash flow to equity (FCFE)',
      'Bond valuation and yield measures',
      'Duration and convexity',
      'P/E ratio and relative valuation',
      'EVA and MVA'
    ],
    example: 'Gordon Growth Model values equity as: P0 = D1 / (Ke - g), where D1 is next dividend, Ke is cost of equity, g is growth rate.',
    formula: 'Bond Price = Σ [Coupon / (1 + YTM)^t] + [Face Value / (1 + YTM)^n]'
  },
  {
    id: 'cma-f-sfm-7',
    title: 'Mutual Funds',
    difficulty: 'advanced',
    description: 'Types of mutual funds, NAV calculation, and performance evaluation.',
    keyPoints: [
      'Open-ended vs closed-ended funds',
      'Equity, debt, hybrid, and index funds',
      'NAV calculation',
      'Load structures - entry and exit loads',
      'Performance metrics - Sharpe, Treynor, Jensen',
      'SIP and STP mechanisms'
    ],
    example: 'NAV represents the per-unit market value of all assets in the fund minus liabilities.',
    formula: 'NAV = (Total Assets - Total Liabilities) / Number of Outstanding Units'
  },
  {
    id: 'cma-f-sfm-8',
    title: 'Portfolio Theory and Practice',
    difficulty: 'advanced',
    description: 'Modern portfolio theory, efficient frontier, and optimal portfolio selection.',
    keyPoints: [
      'Markowitz portfolio theory',
      'Expected return and risk of portfolio',
      'Correlation and diversification',
      'Efficient frontier',
      'Capital market line (CML)',
      'Optimal portfolio selection'
    ],
    example: 'Diversification reduces portfolio risk when assets are not perfectly positively correlated.',
    formula: 'Portfolio Variance = w1²σ1² + w2²σ2² + 2w1w2ρ12σ1σ2'
  },
  {
    id: 'cma-f-sfm-9',
    title: 'Asset Pricing Theories',
    difficulty: 'advanced',
    description: 'CAPM, APT, and multi-factor models for asset pricing.',
    keyPoints: [
      'Capital Asset Pricing Model (CAPM)',
      'Beta and systematic risk',
      'Security Market Line (SML)',
      'Arbitrage Pricing Theory (APT)',
      'Fama-French three-factor model',
      'Market anomalies'
    ],
    example: 'CAPM calculates expected return based on risk-free rate, beta, and market risk premium.',
    formula: 'Expected Return = Rf + β(Rm - Rf)'
  },
  {
    id: 'cma-f-sfm-10',
    title: 'Portfolio Performance and Revision',
    difficulty: 'advanced',
    description: 'Performance measurement, attribution analysis, and portfolio rebalancing.',
    keyPoints: [
      'Sharpe ratio, Treynor ratio, Jensen alpha',
      'Information ratio',
      'Attribution analysis',
      'Portfolio rebalancing strategies',
      'Tax considerations in rebalancing',
      'Benchmarking'
    ],
    example: 'Sharpe ratio measures excess return per unit of total risk (standard deviation).',
    formula: 'Sharpe Ratio = (Rp - Rf) / σp'
  },
  {
    id: 'cma-f-sfm-11',
    title: 'Efficient Market Hypothesis',
    difficulty: 'advanced',
    description: 'Forms of market efficiency, behavioral finance, and market anomalies.',
    keyPoints: [
      'Weak, semi-strong, and strong form efficiency',
      'Random walk theory',
      'Market anomalies - January effect, size effect',
      'Behavioral finance concepts',
      'Technical vs fundamental analysis',
      'Implications for investors'
    ],
    example: 'In a semi-strong efficient market, stock prices reflect all publicly available information.',
  },
  {
    id: 'cma-f-sfm-12',
    title: 'Risks in Financial Markets',
    difficulty: 'advanced',
    description: 'Types of financial risks, risk measurement, and risk management frameworks.',
    keyPoints: [
      'Market risk, credit risk, liquidity risk',
      'Operational and systemic risk',
      'Value at Risk (VaR)',
      'Stress testing and scenario analysis',
      'Risk-adjusted return on capital (RAROC)',
      'Basel III framework'
    ],
    example: 'VaR measures the maximum expected loss over a given time period at a specified confidence level.',
    formula: 'VaR = Portfolio Value × Z-score × σ × √t'
  },
  {
    id: 'cma-f-sfm-13',
    title: 'Financial Derivatives for Risk Management',
    difficulty: 'advanced',
    description: 'Futures, options, swaps, and hedging strategies using derivatives.',
    keyPoints: [
      'Forwards and futures contracts',
      'Options - call and put',
      'Option pricing - Black-Scholes model',
      'Interest rate swaps and currency swaps',
      'Hedging strategies',
      'Speculation and arbitrage'
    ],
    example: 'A company can hedge foreign exchange risk using currency futures or forward contracts.',
    formula: 'Call Option Payoff = Max(ST - X, 0); Put Option Payoff = Max(X - ST, 0)'
  },
  {
    id: 'cma-f-sfm-14',
    title: 'International Financial Environment',
    difficulty: 'advanced',
    description: 'International financial markets, institutions, and regulatory framework.',
    keyPoints: [
      'International financial institutions - IMF, World Bank',
      'Balance of payments',
      'International capital markets',
      'Euromarkets and offshore markets',
      'Sovereign debt and credit ratings',
      'International financial regulations'
    ],
    example: 'IMF provides financial assistance to countries facing balance of payments problems.',
  },
  {
    id: 'cma-f-sfm-15',
    title: 'Foreign Exchange Market',
    difficulty: 'advanced',
    description: 'Foreign exchange rates, quotations, and forward premiums.',
    keyPoints: [
      'Spot and forward exchange rates',
      'Direct and indirect quotations',
      'Cross rates calculation',
      'Interest rate parity',
      'Purchasing power parity',
      'Exchange rate determination theories'
    ],
    example: 'Forward premium/discount reflects interest rate differential between two currencies.',
    formula: 'Forward Rate = Spot Rate × (1 + Domestic Rate) / (1 + Foreign Rate)'
  },
  {
    id: 'cma-f-sfm-16',
    title: 'Foreign Exchange Risk Management',
    difficulty: 'advanced',
    description: 'Transaction, translation, and economic exposure; hedging techniques.',
    keyPoints: [
      'Types of forex exposure',
      'Transaction exposure management',
      'Translation exposure',
      'Economic exposure',
      'Natural hedging techniques',
      'Financial hedging using derivatives'
    ],
    example: 'An exporter can hedge receivables by selling foreign currency forward.',
  },
  {
    id: 'cma-f-sfm-17',
    title: 'Digital Finance',
    difficulty: 'advanced',
    description: 'Fintech, blockchain, cryptocurrencies, and digital payment systems.',
    keyPoints: [
      'Fintech ecosystem',
      'Digital payments - UPI, wallets',
      'Blockchain and distributed ledger technology',
      'Cryptocurrencies and CBDCs',
      'Robo-advisory and algorithmic trading',
      'RegTech and SupTech'
    ],
    example: 'Blockchain enables peer-to-peer transactions without intermediaries through decentralized ledger.',
  }
];

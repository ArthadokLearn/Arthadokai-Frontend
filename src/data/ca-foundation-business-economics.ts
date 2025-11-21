// CA Foundation Paper-4: Business Economics - All 10 Chapters

interface Concept {
  id: string;
  title: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  description: string;
  keyPoints: string[];
  example: string;
  formula?: string;
}

export const caFoundationBusinessEconomicsConcepts: Concept[] = [
  {
    id: 'ch1-nature-scope',
    title: 'Chapter 1: Nature and Scope of Business Economics',
    difficulty: 'beginner',
    description: 'Business Economics applies economic theory and methods to business decision-making. It bridges the gap between economic theory and business practice for managerial decisions.',
    keyPoints: [
      'Definition: Application of economic theory to solve business problems',
      'Microeconomic focus: Demand, supply, costs, pricing, profit maximization',
      'Macroeconomic focus: National income, inflation, business cycles, economic policies',
      'Normative Economics: What ought to be (prescriptive approach)',
      'Positive Economics: What is (descriptive approach)',
      'Scope: Demand analysis, forecasting, production decisions, cost analysis, pricing strategies',
      'Helps managers make rational and informed business decisions'
    ],
    example: 'Example: Pricing Decision Using Business Economics\n\nA smartphone company wants to set price for new model:\n\nStep 1: Analyze demand (consumer willingness to pay)\nStep 2: Study competition (rival prices)\nStep 3: Calculate production costs\nStep 4: Determine profit-maximizing price\n\nBusiness Economics provides the framework and tools for this decision-making process.',
    formula: 'Business Economics = Economic Theory + Business Practice + Decision-Making Tools'
  },
  {
    id: 'ch2-demand-supply',
    title: 'Chapter 2: Theory of Demand and Supply',
    difficulty: 'beginner',
    description: 'Law of Demand shows inverse relationship between price and quantity demanded. Law of Supply shows direct relationship between price and quantity supplied. Market equilibrium occurs where demand equals supply.',
    keyPoints: [
      'Law of Demand: Higher price → Lower quantity demanded (inverse relationship)',
      'Law of Supply: Higher price → Higher quantity supplied (direct relationship)',
      'Demand Curve: Slopes downward from left to right',
      'Supply Curve: Slopes upward from left to right',
      'Market Equilibrium: Quantity Demanded = Quantity Supplied',
      'Equilibrium Price: Price at which demand equals supply',
      'Shortage: Demand > Supply (prices tend to rise)',
      'Surplus: Supply > Demand (prices tend to fall)',
      'Factors affecting demand: Income, tastes, prices of related goods, expectations'
    ],
    example: 'Example: Market Equilibrium for Apples\n\nPrice ₹40/kg: Demand = 200kg, Supply = 100kg → Shortage of 100kg\nPrice ₹80/kg: Demand = 100kg, Supply = 200kg → Surplus of 100kg\nPrice ₹60/kg: Demand = 150kg, Supply = 150kg → EQUILIBRIUM\n\nEquilibrium Price = ₹60/kg\nEquilibrium Quantity = 150kg',
    formula: 'Equilibrium: Qd = Qs; Shortage: Qd > Qs; Surplus: Qs > Qd'
  },
  {
    id: 'ch2-elasticity',
    title: 'Chapter 2: Elasticity of Demand',
    difficulty: 'intermediate',
    description: 'Elasticity measures the responsiveness of quantity demanded to changes in price, income, or prices of related goods.',
    keyPoints: [
      'Price Elasticity of Demand (PED) = % change in Quantity / % change in Price',
      'Elastic Demand: PED > 1 (highly responsive to price changes)',
      'Inelastic Demand: PED < 1 (less responsive to price changes)',
      'Unitary Elastic: PED = 1 (proportionate change)',
      'Perfectly Elastic: PED = ∞ (horizontal demand curve)',
      'Perfectly Inelastic: PED = 0 (vertical demand curve)',
      'Income Elasticity: Responsiveness to income changes',
      'Cross Elasticity: Responsiveness to price changes of related goods'
    ],
    example: 'Example: Price Elasticity Calculation\n\nLuxury Watch:\nPrice increases from ₹50,000 to ₹55,000 (10% increase)\nDemand falls from 100 to 80 units (20% decrease)\n\nPED = (% Change in Qty) / (% Change in Price)\nPED = -20% / 10% = -2\n|PED| = 2 > 1\n\nDemand is ELASTIC (price-sensitive product)',
    formula: 'PED = (% ΔQd) / (% ΔP) = [(ΔQ/Q) / (ΔP/P)]'
  },
  {
    id: 'ch3-production-cost',
    title: 'Chapter 3: Theory of Production and Cost',
    difficulty: 'intermediate',
    description: 'Production theory analyzes the relationship between inputs and output. Cost theory examines the relationship between output and production costs.',
    keyPoints: [
      'Production Function: Q = f(L, K) where Q=Output, L=Labor, K=Capital',
      'Short Run: At least one factor of production is fixed (usually capital)',
      'Long Run: All factors of production are variable',
      'Law of Diminishing Returns: Adding variable input to fixed input eventually decreases marginal product',
      'Total Cost (TC) = Fixed Cost (FC) + Variable Cost (VC)',
      'Average Cost (AC) = Total Cost / Output',
      'Marginal Cost (MC) = Change in Total Cost / Change in Output',
      'Fixed costs remain constant; Variable costs change with output'
    ],
    example: 'Example: Cost Calculation for Factory\n\nManufacturing Company:\nFixed Cost (rent, machinery) = ₹1,00,000/month\nVariable Cost per unit = ₹50\nOutput = 2,000 units\n\nTotal Cost = FC + VC\n           = 1,00,000 + (50 × 2,000)\n           = 1,00,000 + 1,00,000\n           = ₹2,00,000\n\nAverage Cost = TC / Q = 2,00,000 / 2,000 = ₹100 per unit',
    formula: 'TC = FC + VC; AC = TC/Q; MC = ΔTC/ΔQ'
  },
  {
    id: 'ch4-market-structures',
    title: 'Chapter 4: Price Determination in Different Markets',
    difficulty: 'intermediate',
    description: 'Different market structures determine how prices are set. Main types: Perfect Competition, Monopoly, Oligopoly, and Monopolistic Competition.',
    keyPoints: [
      'Perfect Competition: Many sellers, homogeneous product, free entry/exit, price takers',
      'Monopoly: Single seller, unique product, barriers to entry, price maker',
      'Monopolistic Competition: Many sellers, differentiated products, some price control',
      'Oligopoly: Few large sellers, interdependent pricing, strategic behavior',
      'Perfect Competition: Price = Marginal Cost (P = MC)',
      'Monopoly: Marginal Revenue = Marginal Cost (MR = MC), Price > MC',
      'Price Discrimination: Charging different prices to different customers for same product',
      'Examples: Agriculture (perfect competition), Railways (monopoly), Telecom (oligopoly)'
    ],
    example: 'Example: Market Structure Comparison\n\nPERFECT COMPETITION: Wheat Market\n• Thousands of farmers\n• Identical wheat quality\n• No single farmer can influence price\n• Market price = ₹25/kg (determined by supply-demand)\n\nMONOPOLY: Indian Railways (passenger trains)\n• Single provider for most routes\n• Sets ticket prices\n• No close substitutes\n• Can charge different prices (AC/Sleeper/General)',
    formula: 'Perfect Competition: P = MC = MR; Monopoly: MR = MC, P > MC'
  },
  {
    id: 'ch5-business-cycles',
    title: 'Chapter 5: Business Cycles',
    difficulty: 'intermediate',
    description: 'Business cycles are periodic fluctuations in economic activity characterized by expansion (boom) and contraction (recession) phases.',
    keyPoints: [
      'Four Phases: (1) Prosperity/Boom, (2) Recession, (3) Depression, (4) Recovery',
      'Prosperity: High employment, rising income, increasing GDP, high consumer confidence',
      'Recession: Declining economic activity, falling output, rising unemployment',
      'Depression: Severe and prolonged recession, very low GDP, high unemployment',
      'Recovery: Economy starts reviving, output and employment gradually increase',
      'Causes: Investment fluctuations, monetary factors, changes in demand, psychological factors',
      'Duration: Varies, typically 4-10 years for complete cycle',
      'Government uses fiscal and monetary policies to stabilize cycles'
    ],
    example: 'Example: Business Cycle Indicators in India\n\nPROSPERITY PHASE (2017-18):\n• GDP Growth: 7-8%\n• Unemployment: 4-5%\n• Stock Market: Bull run (Sensex rising)\n• Consumer Confidence: High\n• Credit Growth: Strong\n\nRECESSION PHASE (2020 COVID):\n• GDP Growth: Negative (-7.3%)\n• Unemployment: 10-12%\n• Stock Market: Bear market\n• Consumer Confidence: Low\n• Business closures increasing',
    formula: 'Business Cycle Phases = Prosperity → Recession → Depression → Recovery → Repeat'
  },
  {
    id: 'ch6-national-income',
    title: 'Chapter 6: Determination of National Income',
    difficulty: 'intermediate',
    description: 'National Income measures the total value of goods and services produced in an economy. It can be calculated using three methods: Product, Income, and Expenditure.',
    keyPoints: [
      'GDP (Gross Domestic Product) = Value of all final goods/services produced domestically',
      'GNP (Gross National Product) = GDP + Net Factor Income from Abroad (NFIA)',
      'NNP (Net National Product) = GNP - Depreciation',
      'National Income = NNP at Factor Cost',
      'Three Methods: (1) Product/Output Method, (2) Income Method, (3) Expenditure Method',
      'Expenditure Method: GDP = C + I + G + (X - M)',
      'C = Consumption, I = Investment, G = Govt Spending, X = Exports, M = Imports',
      'Per Capita Income = National Income / Population'
    ],
    example: 'Example: GDP Calculation Using Expenditure Method\n\nIndia 2023-24 (in ₹ lakh crore):\n\nConsumption (C) = ₹150\nInvestment (I) = ₹50\nGovernment Spending (G) = ₹40\nExports (X) = ₹35\nImports (M) = ₹30\n\nGDP = C + I + G + (X - M)\n    = 150 + 50 + 40 + (35 - 30)\n    = 150 + 50 + 40 + 5\n    = ₹245 lakh crore\n\nNet Exports (X-M) = ₹5 lakh crore (trade surplus)',
    formula: 'GDP = C + I + G + (X - M); GNP = GDP + NFIA; NI = NNP at FC'
  },
  {
    id: 'ch7-public-finance',
    title: 'Chapter 7: Public Finance',
    difficulty: 'intermediate',
    description: 'Public Finance deals with government revenue, expenditure, public debt, and fiscal policy. It focuses on resource allocation, income distribution, and economic stability.',
    keyPoints: [
      'Public Revenue: Taxes (direct & indirect), fees, fines, profits from public enterprises',
      'Direct Taxes: Paid by same person on whom imposed (Income Tax, Corporation Tax)',
      'Indirect Taxes: Burden can be shifted to others (GST, Customs, Excise)',
      'Public Expenditure: Development (infrastructure, education) & Non-development (defense)',
      'Budget: Government\'s annual financial statement of revenue and expenditure',
      'Revenue Budget: Revenue receipts and revenue expenditure',
      'Capital Budget: Capital receipts and capital expenditure',
      'Fiscal Deficit = Total Expenditure - Total Revenue (excluding borrowings)',
      'Primary Deficit = Fiscal Deficit - Interest Payments'
    ],
    example: 'Example: Government Budget Analysis\n\nUnion Budget 2023-24 (₹ lakh crore):\n\nREVENUE:\nDirect Taxes (Income Tax, Corp Tax): ₹18\nIndirect Taxes (GST, Customs): ₹14\nNon-Tax Revenue: ₹3\nTotal Revenue = ₹35\n\nEXPENDITURE:\nDevelopment (Infrastructure, Health): ₹20\nNon-Development (Defense, Subsidies): ₹18\nTotal Expenditure = ₹38\n\nFiscal Deficit = 38 - 35 = ₹3 lakh crore\n(Government needs to borrow ₹3 lakh crore)',
    formula: 'Fiscal Deficit = Total Expenditure - Total Revenue; Primary Deficit = Fiscal Deficit - Interest'
  },
  {
    id: 'ch8-money-market',
    title: 'Chapter 8: Money Market',
    difficulty: 'intermediate',
    description: 'Money market deals with short-term borrowing and lending. Money supply, banking system, central banking, and monetary policy are key components.',
    keyPoints: [
      'Functions of Money: (1) Medium of exchange, (2) Unit of account, (3) Store of value, (4) Standard of deferred payment',
      'Money Supply Measures: M1, M2, M3, M4 (different levels of liquidity)',
      'M1 (Narrow Money) = Currency + Demand Deposits (most liquid)',
      'M3 (Broad Money) = M1 + Time Deposits with banks',
      'Commercial Banks: Accept deposits, provide loans, create credit',
      'Reserve Bank of India (RBI): Central bank, monetary authority, regulator',
      'Monetary Policy Tools: CRR, SLR, Repo Rate, Reverse Repo Rate, Bank Rate',
      'CRR (Cash Reserve Ratio): Percentage of deposits banks must keep with RBI',
      'SLR (Statutory Liquidity Ratio): Percentage banks must maintain in liquid assets',
      'Repo Rate: Rate at which RBI lends to commercial banks'
    ],
    example: 'Example: Money Supply Components\n\nIndia Money Supply (₹ lakh crore):\n\nM1 (Narrow Money):\nCurrency with Public: ₹30\nDemand Deposits: ₹50\nM1 = ₹80 lakh crore\n\nTime Deposits: ₹120\nM3 (Broad Money) = M1 + Time Deposits\n                 = 80 + 120\n                 = ₹200 lakh crore\n\nMONETARY POLICY ACTION:\nRBI increases Repo Rate: 6.0% → 6.5%\nEffect: Borrowing becomes costlier → Controls inflation',
    formula: 'M1 = Currency + Demand Deposits; M3 = M1 + Time Deposits'
  },
  {
    id: 'ch8-inflation',
    title: 'Chapter 8: Inflation and Deflation',
    difficulty: 'intermediate',
    description: 'Inflation is sustained rise in general price level. Deflation is sustained fall in general price level. Both affect economic stability and purchasing power.',
    keyPoints: [
      'Inflation: Continuous rise in general price level, decrease in purchasing power',
      'Deflation: Continuous fall in general price level, increase in purchasing power',
      'Demand-Pull Inflation: Excess demand over supply ("too much money chasing too few goods")',
      'Cost-Push Inflation: Rising costs of production (wages, raw materials)',
      'Measurement: Consumer Price Index (CPI), Wholesale Price Index (WPI)',
      'CPI: Measures retail price changes for consumers',
      'Effects of Inflation: Reduces real income, uncertainty, redistribution of wealth',
      'Control Measures: Monetary policy (interest rates), Fiscal policy (taxes, spending)',
      'Moderate inflation (2-4%) considered healthy for economy'
    ],
    example: 'Example: Inflation Impact Calculation\n\nYear 2020: CPI = 100 (base year)\nYear 2024: CPI = 125\n\nInflation Rate = [(125 - 100) / 100] × 100 = 25%\n\nImpact on Purchasing Power:\nSalary in 2020 = ₹50,000\nReal purchasing power in 2024 = ₹50,000 / 1.25 = ₹40,000\n\nTo maintain same purchasing power in 2024:\nRequired salary = ₹50,000 × 1.25 = ₹62,500\n\nPurchasing power decreased by 20% due to inflation',
    formula: 'Inflation Rate = [(CPI Current - CPI Base) / CPI Base] × 100'
  },
  {
    id: 'ch9-international-trade',
    title: 'Chapter 9: International Trade',
    difficulty: 'intermediate',
    description: 'International trade involves exchange of goods and services across borders. Theory of comparative advantage explains why countries benefit from trade.',
    keyPoints: [
      'Comparative Advantage: Countries trade based on relative efficiency in production',
      'Absolute Advantage: Producing at lower absolute cost than other countries',
      'Balance of Trade (BOT) = Exports - Imports (merchandise trade only)',
      'Favorable BOT: Exports > Imports (trade surplus)',
      'Unfavorable BOT: Imports > Exports (trade deficit)',
      'Balance of Payments (BOP) = Current Account + Capital Account + Errors & Omissions',
      'Current Account: Trade in goods & services, income transfers',
      'Capital Account: Foreign investment, loans, banking capital',
      'Exchange Rate: Price of one currency in terms of another',
      'Benefits of Trade: Specialization, efficiency, wider choices, competition'
    ],
    example: 'Example: India\'s Balance of Trade\n\nFY 2023-24 (in $ billion):\n\nEXPORTS:\nGoods: $450\nServices: $350\nTotal Exports = $800\n\nIMPORTS:\nGoods: $650\nServices: $200\nTotal Imports = $850\n\nBalance of Trade (BOT) = Exports - Imports\n                       = 800 - 850\n                       = -$50 billion\n\nTrade Deficit of $50 billion (Unfavorable BOT)\nIndia is importing more than exporting',
    formula: 'BOT = Exports - Imports; BOP = Current A/c + Capital A/c; Trade Surplus: BOT > 0'
  },
  {
    id: 'ch10-indian-economy',
    title: 'Chapter 10: Indian Economy',
    difficulty: 'intermediate',
    description: 'Indian economy is a mixed economy with features of both capitalism and socialism. It has three main sectors and has undergone significant economic reforms.',
    keyPoints: [
      'Three Sectors: (1) Primary (Agriculture), (2) Secondary (Industry), (3) Tertiary (Services)',
      'Primary Sector: Agriculture, mining, forestry - employs ~40% workforce, contributes ~15% GDP',
      'Secondary Sector: Manufacturing, construction - contributes ~30% GDP',
      'Tertiary Sector: Services, IT, banking - largest contributor ~55% GDP',
      'Mixed Economy: Public sector (govt enterprises) + Private sector coexist',
      'Green Revolution: Agricultural transformation using HYV seeds (1960s-70s)',
      'White Revolution: Milk production increase through Operation Flood',
      'Self-reliant: Focus on reducing import dependence, domestic production',
      'Challenges: Unemployment, poverty, infrastructure gaps, regional imbalances'
    ],
    example: 'Example: Indian GDP Sectoral Composition (2023-24)\n\nTotal GDP = ₹300 lakh crore\n\nPRIMARY SECTOR (Agriculture):\nContribution: 15% of GDP\n= ₹45 lakh crore\nEmployment: 40% of workforce\n\nSECONDARY SECTOR (Industry):\nContribution: 30% of GDP\n= ₹90 lakh crore\nEmployment: 25% of workforce\n\nTERTIARY SECTOR (Services):\nContribution: 55% of GDP\n= ₹165 lakh crore\nEmployment: 35% of workforce\n\nServices sector dominates Indian economy in terms of GDP contribution',
    formula: 'GDP = Primary Sector + Secondary Sector + Tertiary Sector'
  },
  {
    id: 'ch10-lpg-reforms',
    title: 'Chapter 10: Economic Reforms in India (1991 LPG)',
    difficulty: 'intermediate',
    description: 'The 1991 economic reforms (LPG - Liberalization, Privatization, Globalization) transformed India from a closed, controlled economy to an open market economy.',
    keyPoints: [
      'LPG Reforms: Liberalization, Privatization, Globalization (1991)',
      'Liberalization: Removing government controls, abolishing license raj, deregulation',
      'Privatization: Reducing public sector role, disinvestment, encouraging private sector',
      'Globalization: Integrating Indian economy with world economy, opening to foreign trade & investment',
      'Industrial Licensing: Abolished for most industries (except few strategic sectors)',
      'Foreign Direct Investment (FDI): Limits increased, automatic approval routes introduced',
      'Import-Export: Reduced tariffs, removed quantitative restrictions, rupee made convertible',
      'Results: Higher GDP growth (3.5% → 6-8%), increased foreign investment, competition',
      'Key Reforms: FEMA replaced FERA, SEBI established, tax reforms, banking sector reforms'
    ],
    example: 'Example: Impact of 1991 LPG Reforms\n\nPRE-1991 (License Raj Era):\n• GDP Growth: 3-3.5% annually ("Hindu rate of growth")\n• FDI Inflow: Minimal, highly restricted\n• Import Tariffs: 200-300% (very high)\n• Business: Required multiple licenses from govt\n• Forex Reserves: Very low (crisis in 1991)\n\nPOST-1991 (Reform Era):\n• GDP Growth: 6-8% average\n• FDI Inflow: $80+ billion annually\n• Import Tariffs: 10-15% average\n• Business: Simplified procedures, ease of doing business\n• Forex Reserves: $600+ billion\n\nKey Industries Benefited: IT/Software, Telecom, Automobiles, Consumer Goods',
    formula: 'LPG = Liberalization + Privatization + Globalization'
  }
];

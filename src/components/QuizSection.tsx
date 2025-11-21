import { useState, useEffect } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { CheckCircle2, XCircle, RotateCcw, Trophy, Target, Award } from 'lucide-react';
import { toast } from 'sonner@2.0.3';

interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
}

const questionsData: Record<string, Question[]> = {
  'CA Foundation-accounting': [
    {
      id: 'q1',
      question: 'Which accounting principle states that revenue should be recognized when it is earned?',
      options: [
        'Going Concern Principle',
        'Accrual Principle',
        'Consistency Principle',
        'Prudence Principle'
      ],
      correctAnswer: 1,
      explanation: 'Accrual Principle states that revenue and expenses should be recognized when they are earned or incurred, not when cash is received or paid. This ensures proper matching of income and expenses.',
      difficulty: 'beginner'
    },
    {
      id: 'q2',
      question: 'In the accounting equation, if Assets = ₹5,00,000 and Liabilities = ₹2,00,000, what is the Capital?',
      options: [
        '₹2,00,000',
        '₹3,00,000',
        '₹5,00,000',
        '₹7,00,000'
      ],
      correctAnswer: 1,
      explanation: 'Assets = Liabilities + Capital\n₹5,00,000 = ₹2,00,000 + Capital\nCapital = ₹5,00,000 - ₹2,00,000 = ₹3,00,000',
      difficulty: 'beginner'
    },
    {
      id: 'q3',
      question: 'Bank Reconciliation Statement is prepared to reconcile the difference between:',
      options: [
        'Debtors and Creditors',
        'Cash book and Pass book',
        'Trial Balance and Balance Sheet',
        'Assets and Liabilities'
      ],
      correctAnswer: 1,
      explanation: 'BRS is prepared to reconcile the balance as per Cash Book (company\'s records) with the balance as per Pass Book/Bank Statement (bank\'s records). Differences arise due to timing differences and errors.',
      difficulty: 'intermediate'
    },
    {
      id: 'q4',
      question: 'Under FIFO method, which items are issued first?',
      options: [
        'Latest purchased items',
        'Oldest purchased items',
        'Middle purchased items',
        'Random items'
      ],
      correctAnswer: 1,
      explanation: 'FIFO (First In First Out) method assumes that items purchased first are issued first. During rising prices, this method results in lower cost of goods sold as older (cheaper) items are issued first.',
      difficulty: 'beginner'
    },
    {
      id: 'q5',
      question: 'Inventories are valued at:',
      options: [
        'Cost only',
        'Net Realisable Value only',
        'Lower of Cost or NRV',
        'Higher of Cost or NRV'
      ],
      correctAnswer: 2,
      explanation: 'As per AS-2, inventories should be valued at Lower of Cost or Net Realisable Value (NRV). This follows the principle of prudence/conservatism - assets should not be overstated.',
      difficulty: 'intermediate'
    },
    {
      id: 'q6',
      question: 'If a machine costing ₹1,00,000 has residual value ₹10,000 and useful life 5 years, what is annual depreciation under Straight Line Method?',
      options: [
        '₹18,000',
        '₹20,000',
        '₹22,000',
        '₹25,000'
      ],
      correctAnswer: 0,
      explanation: 'SLM Depreciation = (Cost - Residual Value) / Useful Life\n= (₹1,00,000 - ₹10,000) / 5\n= ₹90,000 / 5 = ₹18,000 per year',
      difficulty: 'intermediate'
    },
    {
      id: 'q7',
      question: 'In a Bill of Exchange, who is the Drawer?',
      options: [
        'The person who makes payment',
        'The person who draws/makes the bill (creditor)',
        'The bank',
        'The witness'
      ],
      correctAnswer: 1,
      explanation: 'Drawer is the person who draws/makes the bill of exchange (creditor/seller). Drawee is the person on whom the bill is drawn (debtor/buyer). Payee is the person to whom payment is to be made.',
      difficulty: 'intermediate'
    },
    {
      id: 'q8',
      question: 'Gross Profit is calculated in which account?',
      options: [
        'Profit & Loss Account',
        'Trading Account',
        'Balance Sheet',
        'Capital Account'
      ],
      correctAnswer: 1,
      explanation: 'Trading Account is prepared to calculate Gross Profit or Gross Loss. Gross Profit = Net Sales - Cost of Goods Sold. The Gross Profit is then transferred to Profit & Loss Account.',
      difficulty: 'beginner'
    },
    {
      id: 'q9',
      question: 'In Non-Profit Organisations, surplus is calculated by:',
      options: [
        'Trading Account',
        'Profit & Loss Account',
        'Income & Expenditure Account',
        'Receipts & Payments Account'
      ],
      correctAnswer: 2,
      explanation: 'Income & Expenditure Account (similar to P&L Account) is prepared to calculate surplus or deficit. Surplus = Income > Expenditure. Receipts & Payments Account only shows cash summary.',
      difficulty: 'intermediate'
    },
    {
      id: 'q10',
      question: 'Under Incomplete Records, if Opening Capital = ₹2,00,000, Closing Capital = ₹2,80,000, Drawings = ₹50,000, what is the profit?',
      options: [
        '₹80,000',
        '₹1,00,000',
        '₹1,30,000',
        '₹1,50,000'
      ],
      correctAnswer: 2,
      explanation: 'Profit = Closing Capital - Opening Capital + Drawings - Additional Capital\n= ₹2,80,000 - ₹2,00,000 + ₹50,000 - 0\n= ₹1,30,000',
      difficulty: 'advanced'
    },
    {
      id: 'q11',
      question: 'In partnership, interest on capital is:',
      options: [
        'A charge against profits',
        'An appropriation of profits',
        'Not allowed',
        'Treated as expense'
      ],
      correctAnswer: 1,
      explanation: 'Interest on capital is an appropriation of profits, not a charge. It is given out of profits after calculating net profit. If there are insufficient profits, interest may be proportionately reduced or not given.',
      difficulty: 'intermediate'
    },
    {
      id: 'q12',
      question: 'When shares are forfeited, the Share Capital Account is debited with:',
      options: [
        'Called-up amount',
        'Paid-up amount',
        'Nominal value',
        'Amount not paid'
      ],
      correctAnswer: 0,
      explanation: 'On forfeiture, Share Capital A/c is debited with the called-up amount (not paid-up or nominal). Share Forfeiture A/c is credited with the amount already paid, and Calls in Arrear with amount not paid.',
      difficulty: 'advanced'
    },
    {
      id: 'q13',
      question: 'Securities Premium can be utilized for:',
      options: [
        'Payment of dividend',
        'Issue of bonus shares',
        'Meeting revenue expenses',
        'Payment of salary'
      ],
      correctAnswer: 1,
      explanation: 'Securities Premium can be used for: (1) Issue of bonus shares, (2) Writing off preliminary expenses, (3) Writing off discount on issue of shares/debentures, (4) Providing premium on redemption. It cannot be used for dividend or revenue expenses.',
      difficulty: 'advanced'
    }
  ],
  'CA Foundation-business-law': [
    {
      id: 'q1',
      question: 'According to Indian Contract Act 1872, an agreement enforceable by law is:',
      options: [
        'A contract',
        'An offer',
        'An acceptance',
        'A proposal'
      ],
      correctAnswer: 0,
      explanation: 'Section 2(h) of Indian Contract Act defines contract as "an agreement enforceable by law". An agreement becomes a contract when it satisfies all essentials mentioned in Section 10.',
      difficulty: 'beginner'
    },
    {
      id: 'q2',
      question: 'Consideration in a contract must be:',
      options: [
        'Adequate',
        'Lawful',
        'In cash only',
        'Equal to market value'
      ],
      correctAnswer: 1,
      explanation: 'Consideration must be lawful as per Section 23. It need not be adequate (principle: even a peppercorn can be consideration). It can be in cash, kind, or an act or abstinence. Courts do not compare adequacy unless there is fraud.',
      difficulty: 'intermediate'
    },
    {
      id: 'q3',
      question: 'A minor\'s agreement is:',
      options: [
        'Valid',
        'Voidable',
        'Void ab initio',
        'Illegal'
      ],
      correctAnswer: 2,
      explanation: 'As per Mohori Bibee v. Dharmodas Ghose case, a minor\'s agreement is void ab initio (void from the beginning). A minor is not competent to contract under Section 11 of Indian Contract Act.',
      difficulty: 'intermediate'
    },
    {
      id: 'q4',
      question: 'In Sale of Goods Act, when does property in goods transfer in a Sale?',
      options: [
        'At future time',
        'Immediately',
        'After payment',
        'On delivery'
      ],
      correctAnswer: 1,
      explanation: 'In a Sale, property in goods transfers from seller to buyer immediately. In Agreement to Sell, property transfers at a future time or subject to certain conditions.',
      difficulty: 'beginner'
    },
    {
      id: 'q5',
      question: 'Minimum number of partners required to form a partnership:',
      options: [
        'One',
        'Two',
        'Three',
        'Seven'
      ],
      correctAnswer: 1,
      explanation: 'Minimum 2 persons are required to form a partnership. There is no maximum limit after Companies Act 2013 removed the cap of 50 partners.',
      difficulty: 'beginner'
    },
    {
      id: 'q6',
      question: 'In an LLP, the liability of partners is:',
      options: [
        'Unlimited',
        'Limited to their contribution',
        'Joint and several',
        'No liability'
      ],
      correctAnswer: 1,
      explanation: 'In Limited Liability Partnership (LLP), partners have limited liability restricted to their agreed contribution. Personal assets of partners are protected.',
      difficulty: 'intermediate'
    },
    {
      id: 'q7',
      question: 'Minimum number of members required for Private Limited Company:',
      options: [
        'One',
        'Two',
        'Three',
        'Seven'
      ],
      correctAnswer: 1,
      explanation: 'Private Limited Company requires minimum 2 members and maximum 200 members. Public Limited Company requires minimum 7 members with no upper limit.',
      difficulty: 'beginner'
    },
    {
      id: 'q8',
      question: 'A cheque is payable:',
      options: [
        'After 90 days',
        'On demand',
        'After 3 months',
        'On maturity'
      ],
      correctAnswer: 1,
      explanation: 'A cheque is a bill of exchange drawn on a banker and is always payable on demand. Unlike bills of exchange, cheques do not have grace period.',
      difficulty: 'intermediate'
    },
    {
      id: 'q9',
      question: 'MOA stands for:',
      options: [
        'Minutes of Agreement',
        'Memorandum of Association',
        'Manual of Accounts',
        'Method of Auditing'
      ],
      correctAnswer: 1,
      explanation: 'MOA stands for Memorandum of Association. It is the charter/constitution of the company that defines its objectives, scope, and relationship with the outside world.',
      difficulty: 'beginner'
    },
    {
      id: 'q10',
      question: 'Section 138 of Negotiable Instruments Act deals with:',
      options: [
        'Promissory notes',
        'Bills of exchange',
        'Dishonour of cheque',
        'Endorsement'
      ],
      correctAnswer: 2,
      explanation: 'Section 138 deals with dishonour of cheques for insufficiency of funds. It is a criminal offence punishable with imprisonment or fine or both.',
      difficulty: 'intermediate'
    }
  ],
  'CA Foundation-quantitative-aptitude': [
    {
      id: 'q1',
      question: 'If 3:5 = x:20, then x equals:',
      options: [
        '10',
        '12',
        '15',
        '18'
      ],
      correctAnswer: 1,
      explanation: 'Using cross multiplication: 3 × 20 = 5 × x\n60 = 5x\nx = 60/5 = 12',
      difficulty: 'beginner'
    },
    {
      id: 'q2',
      question: 'What is 15% of 200?',
      options: [
        '25',
        '30',
        '35',
        '40'
      ],
      correctAnswer: 1,
      explanation: '15% of 200 = (15/100) × 200 = 0.15 × 200 = 30',
      difficulty: 'beginner'
    },
    {
      id: 'q3',
      question: 'Simple Interest on ₹5,000 at 10% per annum for 2 years is:',
      options: [
        '₹500',
        '₹1,000',
        '₹1,500',
        '₹2,000'
      ],
      correctAnswer: 1,
      explanation: 'SI = (P × R × T)/100 = (5,000 × 10 × 2)/100 = 1,00,000/100 = ₹1,000',
      difficulty: 'beginner'
    },
    {
      id: 'q4',
      question: 'If a salary increases from ₹50,000 to ₹60,000, the percentage increase is:',
      options: [
        '10%',
        '15%',
        '20%',
        '25%'
      ],
      correctAnswer: 2,
      explanation: 'Percentage increase = [(60,000 - 50,000)/50,000] × 100 = (10,000/50,000) × 100 = 20%',
      difficulty: 'intermediate'
    },
    {
      id: 'q5',
      question: 'Find the next number in the series: 3, 6, 11, 18, 27, ?',
      options: [
        '36',
        '38',
        '40',
        '42'
      ],
      correctAnswer: 1,
      explanation: 'Pattern: Differences are +3, +5, +7, +9 (consecutive odd numbers)\nNext difference: +11\n27 + 11 = 38',
      difficulty: 'intermediate'
    },
    {
      id: 'q6',
      question: 'If BOOK is coded as CPPL, then CARD is coded as:',
      options: [
        'DBSE',
        'DCSE',
        'DBSF',
        'DCSF'
      ],
      correctAnswer: 0,
      explanation: 'Pattern: Each letter is shifted by +1 position\nB→C, O→P, O→P, K→L\nApplying to CARD:\nC→D, A→B, R→S, D→E\nAnswer: DBSE',
      difficulty: 'intermediate'
    },
    {
      id: 'q7',
      question: 'The mean of 5, 10, 15, 20, 25 is:',
      options: [
        '12',
        '15',
        '18',
        '20'
      ],
      correctAnswer: 1,
      explanation: 'Mean = Sum of all values / Number of values\nMean = (5 + 10 + 15 + 20 + 25) / 5 = 75 / 5 = 15',
      difficulty: 'beginner'
    },
    {
      id: 'q8',
      question: 'The median of the data set: 3, 7, 5, 9, 11 is:',
      options: [
        '5',
        '7',
        '9',
        '11'
      ],
      correctAnswer: 1,
      explanation: 'First arrange in order: 3, 5, 7, 9, 11\nMedian is the middle value = 7 (3rd position out of 5 values)',
      difficulty: 'beginner'
    }
  ],
  'CA Foundation-business-economics': [
    {
      id: 'q1',
      question: 'Business Economics applies economic theory and methods to:',
      options: [
        'Business decision-making',
        'Social welfare',
        'Government policy',
        'Academic research'
      ],
      correctAnswer: 0,
      explanation: 'Business Economics is the application of economic theory and methods to business decision-making. It helps managers make rational decisions using economic principles for pricing, production, cost, and profit optimization.',
      difficulty: 'beginner'
    },
    {
      id: 'q2',
      question: 'According to the law of demand, when price increases:',
      options: [
        'Demand increases',
        'Demand decreases',
        'Demand remains constant',
        'Supply decreases'
      ],
      correctAnswer: 1,
      explanation: 'The law of demand states that there is an inverse relationship between price and quantity demanded. When price increases, quantity demanded decreases (other things remaining constant).',
      difficulty: 'beginner'
    },
    {
      id: 'q3',
      question: 'Market equilibrium occurs when:',
      options: [
        'Demand exceeds supply',
        'Supply exceeds demand',
        'Demand equals supply',
        'Price is at maximum'
      ],
      correctAnswer: 2,
      explanation: 'Market equilibrium is achieved when quantity demanded equals quantity supplied at a particular price. At this point, there is no shortage or surplus in the market.',
      difficulty: 'beginner'
    },
    {
      id: 'q4',
      question: 'If Price Elasticity of Demand (PED) is greater than 1, demand is:',
      options: [
        'Inelastic',
        'Elastic',
        'Unitary elastic',
        'Perfectly inelastic'
      ],
      correctAnswer: 1,
      explanation: 'When PED > 1, demand is elastic, meaning quantity demanded is highly responsive to price changes. A small change in price leads to a larger change in quantity demanded.',
      difficulty: 'intermediate'
    },
    {
      id: 'q5',
      question: 'Total Cost (TC) equals:',
      options: [
        'Fixed Cost only',
        'Variable Cost only',
        'Fixed Cost + Variable Cost',
        'Revenue - Profit'
      ],
      correctAnswer: 2,
      explanation: 'Total Cost (TC) = Fixed Cost (FC) + Variable Cost (VC). Fixed costs remain constant regardless of output, while variable costs change with output level.',
      difficulty: 'beginner'
    },
    {
      id: 'q6',
      question: 'In Perfect Competition, a firm is a:',
      options: [
        'Price maker',
        'Price taker',
        'Monopolist',
        'Price discriminator'
      ],
      correctAnswer: 1,
      explanation: 'In perfect competition, there are many sellers of homogeneous products. Individual firms cannot influence market price and must accept the prevailing market price, hence they are price takers.',
      difficulty: 'intermediate'
    },
    {
      id: 'q7',
      question: 'The four phases of business cycle are:',
      options: [
        'Spring, Summer, Autumn, Winter',
        'Prosperity, Recession, Depression, Recovery',
        'Growth, Maturity, Decline, Death',
        'Boom, Bust, Crash, Revival'
      ],
      correctAnswer: 1,
      explanation: 'Business cycles have four phases: (1) Prosperity/Boom - high employment and GDP, (2) Recession - declining activity, (3) Depression - severe low GDP, (4) Recovery - economy reviving.',
      difficulty: 'beginner'
    },
    {
      id: 'q8',
      question: 'GDP is calculated using the formula:',
      options: [
        'C + I + G + X',
        'C + I + G + (X - M)',
        'C + I + (X - M)',
        'C + G + (X - M)'
      ],
      correctAnswer: 1,
      explanation: 'GDP = C + I + G + (X - M), where C = Consumption, I = Investment, G = Government Spending, X = Exports, M = Imports. Net exports (X-M) is the trade balance.',
      difficulty: 'intermediate'
    },
    {
      id: 'q9',
      question: 'Direct Tax is:',
      options: [
        'Paid and borne by different persons',
        'Paid and borne by the same person',
        'Only on goods',
        'Only on services'
      ],
      correctAnswer: 1,
      explanation: 'Direct Tax is paid and borne by the same person on whom it is imposed (e.g., Income Tax, Corporate Tax). The burden cannot be shifted. Indirect taxes can be shifted to others.',
      difficulty: 'beginner'
    },
    {
      id: 'q10',
      question: 'Fiscal Deficit is:',
      options: [
        'Revenue - Expenditure',
        'Total Expenditure - Total Revenue',
        'Exports - Imports',
        'Assets - Liabilities'
      ],
      correctAnswer: 1,
      explanation: 'Fiscal Deficit = Total Expenditure - Total Revenue (excluding borrowings). It indicates the extent to which government must borrow to finance its expenditure.',
      difficulty: 'intermediate'
    },
    {
      id: 'q11',
      question: 'M1 money supply includes:',
      options: [
        'Currency + Time Deposits',
        'Currency + Demand Deposits',
        'Only currency with public',
        'All bank deposits'
      ],
      correctAnswer: 1,
      explanation: 'M1 (Narrow Money) = Currency with public + Demand Deposits. It is the most liquid measure of money supply. M3 (Broad Money) additionally includes time deposits.',
      difficulty: 'intermediate'
    },
    {
      id: 'q12',
      question: 'Inflation is:',
      options: [
        'Fall in price level',
        'Sustained rise in general price level',
        'One-time price increase',
        'Increase in money supply'
      ],
      correctAnswer: 1,
      explanation: 'Inflation is a sustained rise in general price level over time, leading to decrease in purchasing power of money. It is measured using Consumer Price Index (CPI) or Wholesale Price Index (WPI).',
      difficulty: 'beginner'
    },
    {
      id: 'q13',
      question: 'Balance of Trade (BOT) equals:',
      options: [
        'Imports - Exports',
        'Exports - Imports',
        'Current Account + Capital Account',
        'Foreign Direct Investment'
      ],
      correctAnswer: 1,
      explanation: 'Balance of Trade (BOT) = Exports - Imports. Favorable BOT (trade surplus) when Exports > Imports. Unfavorable BOT (trade deficit) when Imports > Exports.',
      difficulty: 'beginner'
    },
    {
      id: 'q14',
      question: 'Which sector contributes the most to Indian GDP?',
      options: [
        'Primary (Agriculture)',
        'Secondary (Industry)',
        'Tertiary (Services)',
        'All contribute equally'
      ],
      correctAnswer: 2,
      explanation: 'The Tertiary/Services sector contributes approximately 55% to Indian GDP, making it the largest contributor. Primary sector contributes ~15% and Secondary sector ~30%.',
      difficulty: 'beginner'
    },
    {
      id: 'q15',
      question: 'LPG reforms (1991) stand for:',
      options: [
        'Land, Power, Growth',
        'Liberalization, Privatization, Globalization',
        'License, Permit, Government',
        'Labor, Production, GDP'
      ],
      correctAnswer: 1,
      explanation: 'LPG reforms of 1991 stand for Liberalization (removing restrictions), Privatization (reducing public sector role), and Globalization (integrating with world economy). These reforms transformed Indian economy.',
      difficulty: 'beginner'
    }
  ],
  'CA Inter-accounting': [
    {
      id: 'q1',
      question: 'Under Ind AS 2, inventories are valued at:',
      options: [
        'Cost only',
        'Net Realizable Value only',
        'Lower of cost or NRV',
        'Higher of cost or NRV'
      ],
      correctAnswer: 2,
      explanation: 'Ind AS 2 requires inventories to be valued at lower of cost or Net Realizable Value (NRV). This follows the principle of prudence/conservatism in accounting.',
      difficulty: 'intermediate'
    },
    {
      id: 'q2',
      question: 'In partnership, interest on capital is:',
      options: [
        'A charge against profits',
        'An appropriation of profits',
        'Not allowed',
        'Treated as expense'
      ],
      correctAnswer: 1,
      explanation: 'Interest on capital is an appropriation of profits, not a charge. It is given out of profits after calculating net profit. If there are insufficient profits, interest is proportionately reduced.',
      difficulty: 'intermediate'
    },
    {
      id: 'q3',
      question: 'Goodwill in partnership is valued at the time of:',
      options: [
        'Formation only',
        'Admission, retirement or death of partner',
        'Division of profits',
        'Payment of interest'
      ],
      correctAnswer: 1,
      explanation: 'Goodwill is valued when there is a change in profit sharing ratio, which occurs during admission of a new partner, retirement, or death of an existing partner. This is necessary for proper adjustment of partners\' capital.',
      difficulty: 'advanced'
    }
  ],
  'CA Inter-advanced-accounting': [
    {
      id: 'q1',
      question: 'Share premium can be utilized for:',
      options: [
        'Payment of dividend',
        'Issue of bonus shares',
        'Meeting revenue expenses',
        'Payment of salary'
      ],
      correctAnswer: 1,
      explanation: 'Securities Premium can be used for: (1) Issue of bonus shares, (2) Writing off preliminary expenses, (3) Writing off discount on issue of shares/debentures, (4) Providing premium on redemption of preference shares/debentures. It cannot be used for dividend or revenue expenses.',
      difficulty: 'intermediate'
    },
    {
      id: 'q2',
      question: 'When shares are forfeited, the Share Capital Account is debited with:',
      options: [
        'Called-up amount',
        'Paid-up amount',
        'Nominal value',
        'Amount not paid'
      ],
      correctAnswer: 0,
      explanation: 'On forfeiture, Share Capital A/c is debited with the called-up amount (not paid-up or nominal). Share Forfeiture A/c is credited with the amount already paid, and Calls in Arrear with amount not paid.',
      difficulty: 'intermediate'
    },
    {
      id: 'q3',
      question: 'Goodwill arising on amalgamation is:',
      options: [
        'Debited to Goodwill Account',
        'Written off immediately',
        'Credited to Capital Reserve',
        'Transferred to General Reserve'
      ],
      correctAnswer: 0,
      explanation: 'When Purchase Consideration > Net Assets taken over, the difference is Goodwill and is debited to Goodwill Account. If Purchase Consideration < Net Assets, it is Capital Reserve (credited).',
      difficulty: 'advanced'
    },
    {
      id: 'q4',
      question: 'In share valuation, Super Profit is calculated as:',
      options: [
        'Actual Profit + Normal Profit',
        'Actual Profit - Normal Profit',
        'Normal Profit - Actual Profit',
        'Actual Profit × Normal Rate'
      ],
      correctAnswer: 1,
      explanation: 'Super Profit = Actual Profit - Normal Profit. Normal Profit = Capital Employed × Normal Rate of Return / 100. Super Profit represents excess earnings over normal expectations.',
      difficulty: 'advanced'
    }
  ],
  'CA Inter-cost-management-accounting': [
    {
      id: 'q1',
      question: 'EOQ (Economic Order Quantity) minimizes:',
      options: [
        'Only ordering cost',
        'Only carrying cost',
        'Total of ordering and carrying costs',
        'Production cost'
      ],
      correctAnswer: 2,
      explanation: 'EOQ determines the optimal order quantity that minimizes the total cost, which is the sum of ordering costs and carrying (holding) costs.',
      difficulty: 'intermediate'
    },
    {
      id: 'q2',
      question: 'Material Price Variance is (Standard Price - Actual Price) × ?',
      options: [
        'Standard Quantity',
        'Actual Quantity',
        'Budgeted Quantity',
        'Difference in Quantity'
      ],
      correctAnswer: 1,
      explanation: 'Material Price Variance = (Standard Price - Actual Price) × Actual Quantity. It shows the impact of change in price on actual quantity purchased/consumed.',
      difficulty: 'intermediate'
    },
    {
      id: 'q3',
      question: 'Under FIFO method during rising prices, material cost will be:',
      options: [
        'Higher than LIFO',
        'Lower than LIFO',
        'Same as LIFO',
        'Same as Weighted Average'
      ],
      correctAnswer: 1,
      explanation: 'During rising prices, FIFO issues older (cheaper) materials first, resulting in lower cost of materials issued compared to LIFO which issues latest (expensive) materials first.',
      difficulty: 'intermediate'
    }
  ],
  'CA Inter-auditing-ethics': [
    {
      id: 'q1',
      question: 'SA 500 deals with:',
      options: [
        'Audit Planning',
        'Audit Evidence',
        'Audit Report',
        'Internal Control'
      ],
      correctAnswer: 1,
      explanation: 'SA 500 (Standard on Auditing 500) deals with Audit Evidence. It provides guidance on what constitutes sufficient appropriate audit evidence and procedures to obtain it.',
      difficulty: 'intermediate'
    },
    {
      id: 'q2',
      question: 'Which audit evidence is most reliable?',
      options: [
        'Internal documents',
        'Oral representations',
        'External confirmation',
        'Copies of documents'
      ],
      correctAnswer: 2,
      explanation: 'External evidence (like bank confirmation, debtors confirmation) obtained directly from independent third parties is generally more reliable than internal evidence or oral representations.',
      difficulty: 'intermediate'
    },
    {
      id: 'q3',
      question: 'SA 230 relates to:',
      options: [
        'Audit Risk',
        'Audit Documentation',
        'Audit Sampling',
        'Audit Committee'
      ],
      correctAnswer: 1,
      explanation: 'SA 230 deals with Audit Documentation (Working Papers). It requires auditors to prepare documentation that provides sufficient record of basis for audit report and evidence of compliance with auditing standards.',
      difficulty: 'intermediate'
    }
  ],
  'CA Inter-fm-sm': [
    {
      id: 'q1',
      question: 'A project should be accepted if NPV is:',
      options: [
        'Less than zero',
        'Equal to zero',
        'Greater than zero',
        'Negative'
      ],
      correctAnswer: 2,
      explanation: 'A project should be accepted if NPV (Net Present Value) is greater than zero, indicating that present value of cash inflows exceeds initial investment, creating value for shareholders.',
      difficulty: 'intermediate'
    },
    {
      id: 'q2',
      question: 'Working Capital is calculated as:',
      options: [
        'Current Assets + Current Liabilities',
        'Current Assets - Current Liabilities',
        'Fixed Assets - Current Liabilities',
        'Total Assets - Total Liabilities'
      ],
      correctAnswer: 1,
      explanation: 'Working Capital = Current Assets - Current Liabilities. It represents the amount available for day-to-day operations after meeting short-term obligations.',
      difficulty: 'beginner'
    },
    {
      id: 'q3',
      question: 'In SWOT analysis, "T" stands for:',
      options: [
        'Technology',
        'Targets',
        'Threats',
        'Tactics'
      ],
      correctAnswer: 2,
      explanation: 'SWOT stands for Strengths, Weaknesses, Opportunities, and Threats. It is a strategic planning tool to analyze internal and external factors affecting an organization.',
      difficulty: 'beginner'
    },
    {
      id: 'q4',
      question: 'Profitability Index is calculated as:',
      options: [
        'NPV / Initial Investment',
        'PV of Inflows / PV of Outflows',
        'IRR / Cost of Capital',
        'Cash Inflow / Cash Outflow'
      ],
      correctAnswer: 1,
      explanation: 'Profitability Index (PI) = Present Value of Cash Inflows / Present Value of Cash Outflows (Initial Investment). Accept if PI > 1.',
      difficulty: 'intermediate'
    }
  ],
  'CA Inter-taxation': [
    {
      id: 'q1',
      question: 'If previous year is 2023-24, the assessment year is:',
      options: [
        '2022-23',
        '2023-24',
        '2024-25',
        '2025-26'
      ],
      correctAnswer: 2,
      explanation: 'Assessment Year is the year immediately following the Previous Year. So if PY is 2023-24 (Apr 2023 to Mar 2024), AY will be 2024-25 (Apr 2024 to Mar 2025).',
      difficulty: 'beginner'
    },
    {
      id: 'q2',
      question: 'How many heads of income are there under Income Tax Act?',
      options: [
        'Three',
        'Four',
        'Five',
        'Six'
      ],
      correctAnswer: 2,
      explanation: 'There are five heads of income: (1) Salaries, (2) Income from House Property, (3) Profits and Gains of Business or Profession, (4) Capital Gains, (5) Income from Other Sources.',
      difficulty: 'beginner'
    },
    {
      id: 'q3',
      question: 'In case of intra-state supply, which GST is applicable?',
      options: [
        'IGST only',
        'CGST only',
        'CGST and SGST',
        'SGST only'
      ],
      correctAnswer: 2,
      explanation: 'For intra-state supply (within same state), both CGST (Central GST) and SGST (State GST) are levied. CGST goes to Central Government and SGST to State Government. Total rate is split equally between both.',
      difficulty: 'intermediate'
    },
    {
      id: 'q4',
      question: 'Input Tax Credit under GST can be claimed for:',
      options: [
        'All purchases',
        'Tax paid on inputs used for business',
        'Personal expenses',
        'Exempt supplies'
      ],
      correctAnswer: 1,
      explanation: 'ITC can be claimed only for GST paid on inputs/input services used for business purposes in the course of furtherance of business. ITC is not available for personal use, exempt supplies, and certain blocked credits.',
      difficulty: 'intermediate'
    }
  ],
  'CA Final-financial-reporting': [
    {
      id: 'q1',
      question: 'Under Ind AS 115, revenue is recognized when:',
      options: [
        'Invoice is issued',
        'Performance obligation is satisfied',
        'Cash is received',
        'Contract is signed'
      ],
      correctAnswer: 1,
      explanation: 'Under Ind AS 115, revenue is recognized when (or as) the entity satisfies a performance obligation by transferring promised goods or services to a customer. Transfer occurs when customer obtains control.',
      difficulty: 'advanced'
    },
    {
      id: 'q2',
      question: 'Goodwill arising on consolidation represents:',
      options: [
        'Excess of cost over fair value of net assets acquired',
        'Total assets of subsidiary',
        'Non-controlling interest',
        'Intra-group profits'
      ],
      correctAnswer: 0,
      explanation: 'Goodwill = (Consideration paid + NCI) - Fair value of identifiable net assets acquired. It represents the premium paid for future economic benefits from assets that are not individually identified.',
      difficulty: 'advanced'
    },
    {
      id: 'q3',
      question: 'In Ind AS 103, transaction costs for business combination are:',
      options: [
        'Added to goodwill',
        'Capitalized as intangible asset',
        'Expensed in profit or loss',
        'Deducted from consideration'
      ],
      correctAnswer: 2,
      explanation: 'Under Ind AS 103, acquisition-related costs (professional fees, valuation fees, etc.) are expensed in the period incurred and not included in the consideration transferred or goodwill calculation.',
      difficulty: 'advanced'
    },
    {
      id: 'q4',
      question: 'Non-controlling interest in consolidated financial statements represents:',
      options: [
        'Parent company\'s interest in subsidiary',
        'Minority shareholders\' interest in subsidiary',
        'Goodwill of the group',
        'Investment by parent'
      ],
      correctAnswer: 1,
      explanation: 'Non-controlling interest (NCI) represents the equity in a subsidiary not attributable to the parent. It is the minority shareholders\' proportionate share of the subsidiary\'s net assets.',
      difficulty: 'advanced'
    }
  ],
  'CA Final-direct-tax': [
    {
      id: 'q1',
      question: 'Under transfer pricing, CUP method stands for:',
      options: [
        'Comparable Uncontrolled Price',
        'Cost Under Pricing',
        'Comparable Unit Price',
        'Corporate Uniform Pricing'
      ],
      correctAnswer: 0,
      explanation: 'CUP (Comparable Uncontrolled Price) method compares the price charged in a controlled transaction with the price charged in a comparable uncontrolled transaction in comparable circumstances.',
      difficulty: 'advanced'
    },
    {
      id: 'q2',
      question: 'Corporate tax rate under Section 115BAA is:',
      options: [
        '30%',
        '25%',
        '22%',
        '15%'
      ],
      correctAnswer: 2,
      explanation: 'Section 115BAA provides a concessional tax rate of 22% (plus surcharge and cess) for domestic companies, but they cannot claim most exemptions and deductions. Effective rate is approximately 25.17%.',
      difficulty: 'advanced'
    },
    {
      id: 'q3',
      question: 'MAT (Minimum Alternate Tax) is levied at what rate on book profit?',
      options: [
        '18.5%',
        '15%',
        '9%',
        '22%'
      ],
      correctAnswer: 1,
      explanation: 'MAT under Section 115JB is levied at 15% (plus surcharge and cess) on book profit to ensure companies showing book profits pay minimum tax even if regular tax liability is lower.',
      difficulty: 'advanced'
    },
    {
      id: 'q4',
      question: 'Transfer pricing provisions apply when transaction is between:',
      options: [
        'Independent parties only',
        'Associated enterprises',
        'Domestic companies only',
        'Foreign individuals'
      ],
      correctAnswer: 1,
      explanation: 'Transfer pricing provisions under Sections 92-92F apply to international transactions and specified domestic transactions between associated enterprises (AEs) to ensure arm\'s length pricing.',
      difficulty: 'advanced'
    }
  ],
  'CA Final-advanced-fm': [
    {
      id: 'q1',
      question: 'In CAPM formula, Beta (β) measures:',
      options: [
        'Total risk',
        'Unsystematic risk',
        'Systematic risk',
        'Company-specific risk'
      ],
      correctAnswer: 2,
      explanation: 'Beta measures systematic risk (market risk) which cannot be diversified away. It shows how sensitive a stock\'s returns are to market movements. Unsystematic risk can be eliminated through diversification.',
      difficulty: 'advanced'
    },
    {
      id: 'q2',
      question: 'If a stock has Beta = 1.2, Risk-free rate = 5%, Market return = 13%, what is expected return using CAPM?',
      options: [
        '13.6%',
        '14.6%',
        '15.6%',
        '12.6%'
      ],
      correctAnswer: 1,
      explanation: 'E(R) = Rf + β(Rm - Rf) = 5% + 1.2(13% - 5%) = 5% + 1.2(8%) = 5% + 9.6% = 14.6%',
      difficulty: 'advanced'
    },
    {
      id: 'q3',
      question: 'The efficient frontier in portfolio theory represents:',
      options: [
        'Portfolios with highest risk',
        'Portfolios with maximum return for given risk level',
        'Risk-free investments',
        'Individual securities'
      ],
      correctAnswer: 1,
      explanation: 'The efficient frontier represents the set of optimal portfolios that offer the highest expected return for a defined level of risk or the lowest risk for a given level of expected return.',
      difficulty: 'advanced'
    }
  ],
  'CMA Foundation-accounting': [
    {
      id: 'q1',
      question: 'The accounting equation is:',
      options: [
        'Assets = Liabilities - Capital',
        'Assets + Liabilities = Capital',
        'Assets = Liabilities + Capital',
        'Assets - Liabilities = Capital'
      ],
      correctAnswer: 2,
      explanation: 'The fundamental accounting equation is Assets = Liabilities + Capital (or Equity). This equation must always balance. It can also be written as Assets - Liabilities = Capital.',
      difficulty: 'beginner'
    },
    {
      id: 'q2',
      question: 'Under double entry system, every transaction has:',
      options: [
        'One debit only',
        'One credit only',
        'Two aspects - debit and credit',
        'Three aspects'
      ],
      correctAnswer: 2,
      explanation: 'The fundamental principle of double entry is that every transaction has two aspects - a debit aspect and a credit aspect. Every debit must have a corresponding credit of equal amount.',
      difficulty: 'beginner'
    }
  ],
  'CS Foundation-business-environment': [
    {
      id: 'q1',
      question: 'Which form of business has unlimited liability?',
      options: [
        'Company',
        'Sole Proprietorship',
        'Limited Liability Partnership',
        'Cooperative Society'
      ],
      correctAnswer: 1,
      explanation: 'Sole Proprietorship has unlimited liability. The owner\'s personal assets can be used to pay business debts. In contrast, companies and LLPs provide limited liability protection to their members.',
      difficulty: 'beginner'
    },
    {
      id: 'q2',
      question: 'A company is considered as:',
      options: [
        'An association of persons',
        'A separate legal entity',
        'Partnership of members',
        'An individual'
      ],
      correctAnswer: 1,
      explanation: 'A company is a separate legal entity distinct from its members. It can own property, enter contracts, sue and be sued in its own name. This is the principle established in Salomon v. Salomon case.',
      difficulty: 'intermediate'
    }
  ],
  'CS Executive-company-law': [
    {
      id: 'q1',
      question: 'Minimum number of members required for a Private Limited Company:',
      options: [
        'One',
        'Two',
        'Seven',
        'Three'
      ],
      correctAnswer: 1,
      explanation: 'As per Companies Act 2013, a Private Limited Company requires minimum 2 members and maximum 200 members. For Public Company, minimum is 7 members with no upper limit.',
      difficulty: 'beginner'
    },
    {
      id: 'q2',
      question: 'MOA stands for:',
      options: [
        'Memorandum of Association',
        'Minutes of Agreement',
        'Manual of Accounts',
        'Method of Accounting'
      ],
      correctAnswer: 0,
      explanation: 'MOA stands for Memorandum of Association. It is the charter/constitution of the company defining its objectives, scope of activities, and relationship with outside world. It must be filed with ROC during incorporation.',
      difficulty: 'beginner'
    },
    {
      id: 'q3',
      question: 'DIN is mandatory for:',
      options: [
        'Shareholders',
        'Directors',
        'Employees',
        'Creditors'
      ],
      correctAnswer: 1,
      explanation: 'DIN (Director Identification Number) is mandatory for all directors of companies. It is a unique identification number allotted by Ministry of Corporate Affairs. One person can have only one DIN.',
      difficulty: 'intermediate'
    }
  ]
};

interface QuizSectionProps {
  course: string;
  level: string;
  subject: string;
  chapterId: string;
  userEmail?: string;
  mode?: 'case-studies' | 'mcq';
}

export function QuizSection({ course, level, subject, chapterId, userEmail, mode = 'mcq' }: QuizSectionProps) {
  const questionKey = `${level}-${subject}`;
  const allQuestions = questionsData[questionKey] || [];
  
  // Filter questions for the specific chapter (for now, just show all questions)
  // In a real implementation, questions would have a chapterId field
  const questions = allQuestions;
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState<Set<number>>(new Set());

  const isCaFinal = level === 'CA Final';
  const isCaseStudyMode = mode === 'case-studies';

  if (questions.length === 0) {
    return (
      <div className="text-center py-12">
        <Trophy className="w-16 h-16 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
        <h3 className="text-gray-700 dark:text-gray-300 mb-2">
          {isCaseStudyMode ? 'Case Studies Coming Soon' : 'Quiz Questions Coming Soon'}
        </h3>
        <p className="text-gray-500 dark:text-gray-400">
          {isCaseStudyMode ? 'Case studies for this subject are being prepared.' : 'Practice questions for this subject are being prepared.'}
        </p>
        <p className="text-sm text-gray-400 dark:text-gray-500 mt-2">
          {isCaseStudyMode ? 'Meanwhile, explore the Q&A section to build your knowledge.' : 'Meanwhile, explore the concepts section to build your knowledge.'}
        </p>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];
  const isCorrect = selectedAnswer === currentQuestion.correctAnswer;
  const progress = (answeredQuestions.size / questions.length) * 100;

  const handleAnswerSelect = (index: number) => {
    if (showExplanation) return;
    setSelectedAnswer(index);
  };

  const handleCheckAnswer = () => {
    if (selectedAnswer === null) return;
    setShowExplanation(true);
    
    if (!answeredQuestions.has(currentQuestionIndex) && isCorrect) {
      setScore(score + 1);
      setAnsweredQuestions(new Set([...answeredQuestions, currentQuestionIndex]));
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    }
  };

  const handleReset = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore(0);
    setAnsweredQuestions(new Set());
  };

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

  const scorePercentage = questions.length > 0 ? Math.round((score / questions.length) * 100) : 0;
  const isQuizComplete = answeredQuestions.size === questions.length && showExplanation;

  // Mark chapter as complete when quiz is finished with passing score
  useEffect(() => {
    if (isQuizComplete && userEmail && scorePercentage >= 60) {
      const storageKey = `completed_chapters_${userEmail}_${subject}`;
      const completedChapters = JSON.parse(localStorage.getItem(storageKey) || '[]');
      
      if (!completedChapters.includes(chapterId)) {
        const updatedCompleted = [...completedChapters, chapterId];
        localStorage.setItem(storageKey, JSON.stringify(updatedCompleted));
        toast.success('Chapter marked as complete! 🎉');
      }
    }
  }, [isQuizComplete, userEmail, subject, chapterId, scorePercentage]);

  return (
    <div className="space-y-6">
      {/* Quiz Header */}
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h3 className="text-indigo-900 dark:text-indigo-300">
            {isCaseStudyMode ? 'Case Study' : 'Practice Quiz'}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {isCaseStudyMode ? 'Case' : 'Question'} {currentQuestionIndex + 1} of {questions.length}
          </p>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-right">
            <div className="flex items-center gap-2 mb-1">
              <Target className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              <span className="text-gray-900 dark:text-gray-100">Score: {score}/{questions.length}</span>
            </div>
            <Progress value={progress} className="w-32" />
          </div>
        </div>
      </div>

      {/* Question Card */}
      <Card className="p-6">
        <div className="space-y-5">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <Badge className={getDifficultyColor(currentQuestion.difficulty)}>
              {currentQuestion.difficulty}
            </Badge>
            <div className="flex items-center gap-2">
              <Trophy className="w-4 h-4 text-yellow-600 dark:text-yellow-500" />
              <span className="text-sm text-gray-600 dark:text-gray-400">
                {answeredQuestions.has(currentQuestionIndex) ? 'Answered' : 'Not Answered'}
              </span>
            </div>
          </div>

          <div>
            <h4 className="text-gray-900 dark:text-gray-100 mb-1">
              {isCaseStudyMode ? 'Case Scenario' : 'Question'} {currentQuestionIndex + 1}
            </h4>
            <p className="text-gray-800 dark:text-gray-300">{currentQuestion.question}</p>
          </div>

          <div className="space-y-3">
            {currentQuestion.options.map((option, index) => {
              let buttonClass = 'w-full justify-start text-left h-auto py-4 px-4 transition-all';
              
              if (showExplanation) {
                if (index === currentQuestion.correctAnswer) {
                  buttonClass += ' bg-green-100 dark:bg-green-950 border-2 border-green-500 dark:border-green-700 hover:bg-green-100 dark:hover:bg-green-950';
                } else if (index === selectedAnswer) {
                  buttonClass += ' bg-red-100 dark:bg-red-950 border-2 border-red-500 dark:border-red-700 hover:bg-red-100 dark:hover:bg-red-950';
                }
              } else if (selectedAnswer === index) {
                buttonClass += ' bg-indigo-100 dark:bg-indigo-950 border-2 border-indigo-500 dark:border-indigo-700';
              }

              return (
                <Button
                  key={index}
                  variant={selectedAnswer === index && !showExplanation ? 'default' : 'outline'}
                  className={buttonClass}
                  onClick={() => handleAnswerSelect(index)}
                  disabled={showExplanation}
                >
                  <div className="flex items-center gap-3 w-full">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                      {String.fromCharCode(65 + index)}
                    </span>
                    <span className="flex-1 text-left">{option}</span>
                    {showExplanation && index === currentQuestion.correctAnswer && (
                      <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0" />
                    )}
                    {showExplanation && index === selectedAnswer && index !== currentQuestion.correctAnswer && (
                      <XCircle className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0" />
                    )}
                  </div>
                </Button>
              );
            })}
          </div>

          {showExplanation && (
            <div className={`p-4 rounded-lg border-2 ${isCorrect ? 'bg-green-50 dark:bg-green-950 border-green-200 dark:border-green-800' : 'bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800'}`}>
              <div className="flex items-start gap-3">
                {isCorrect ? (
                  <CheckCircle2 className="w-6 h-6 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                ) : (
                  <Award className="w-6 h-6 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                )}
                <div className="flex-1">
                  <h5 className={`mb-2 ${isCorrect ? 'text-green-900 dark:text-green-300' : 'text-blue-900 dark:text-blue-300'}`}>
                    {isCorrect ? '✓ Correct Answer!' : 'Explanation'}
                  </h5>
                  <p className="text-gray-800 dark:text-gray-300">{currentQuestion.explanation}</p>
                </div>
              </div>
            </div>
          )}

          <div className="flex gap-3 pt-2">
            {!showExplanation ? (
              <>
                <Button
                  variant="outline"
                  onClick={handlePreviousQuestion}
                  disabled={currentQuestionIndex === 0}
                  className="flex-1"
                >
                  Previous
                </Button>
                <Button
                  onClick={handleCheckAnswer}
                  disabled={selectedAnswer === null}
                  className="flex-1"
                >
                  Check Answer
                </Button>
              </>
            ) : (
              <>
                <Button
                  variant="outline"
                  onClick={handlePreviousQuestion}
                  disabled={currentQuestionIndex === 0}
                  className="flex-1"
                >
                  Previous
                </Button>
                {currentQuestionIndex < questions.length - 1 ? (
                  <Button onClick={handleNextQuestion} className="flex-1">
                    {isCaseStudyMode ? 'Next Case' : 'Next Question'}
                  </Button>
                ) : (
                  <Button onClick={handleReset} className="flex-1 gap-2">
                    <RotateCcw className="w-4 h-4" />
                    {isCaseStudyMode ? 'Restart Cases' : 'Restart Quiz'}
                  </Button>
                )}
              </>
            )}
          </div>
        </div>
      </Card>

      {/* Quiz Complete Card */}
      {isQuizComplete && (
        <Card className="p-6 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950 dark:to-purple-950 border-2 border-indigo-200 dark:border-indigo-800">
          <div className="text-center">
            <Trophy className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
            <h3 className="text-indigo-900 dark:text-indigo-300 mb-3">
              {isCaseStudyMode ? 'All Cases Complete!' : 'Quiz Complete!'} 🎉
            </h3>
            <div className="space-y-2 mb-4">
              <p className="text-gray-900 dark:text-gray-100">
                Final Score: <span className="font-semibold text-indigo-600 dark:text-indigo-400">{score} out of {questions.length}</span>
              </p>
              <p className="text-gray-900 dark:text-gray-100">
                Percentage: <span className="font-semibold text-indigo-600 dark:text-indigo-400">{scorePercentage}%</span>
              </p>
            </div>
            <div className="flex gap-3 justify-center">
              <Button onClick={handleReset} className="gap-2">
                <RotateCcw className="w-4 h-4" />
                {isCaseStudyMode ? 'Retake Cases' : 'Retake Quiz'}
              </Button>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
}
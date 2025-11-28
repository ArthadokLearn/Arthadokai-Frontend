// Temporary file for Chapter 5 content - to be merged into main file

export const ch5Content = {
  id: 'ch5-assets',
  title: 'Chapter 5: Ind AS on Assets and Liabilities of the Financial Statements',
  difficulty: 'advanced' as const,
  description: 'Comprehensive coverage of Ind AS standards related to assets and liabilities including inventories, property, leases, borrowing costs, impairment, intangibles, investment property, non-current assets held for sale, employee benefits, and provisions',
  keyPoints: [
    'Ind AS 2 - Inventories',
    'Ind AS 16 - Property, Plant and Equipment',
    'Ind AS 116 - Leases',
    'Ind AS 23 - Borrowing Costs',
    'Ind AS 36 - Impairment of Assets',
    'Ind AS 38 - Intangible Assets',
    'Ind AS 40 - Investment Property',
    'Ind AS 105 - Non-current Assets Held for Sale and Discontinued Operations',
    'Ind AS 19 - Employee Benefits',
    'Ind AS 37 - Provisions, Contingent Liabilities and Contingent Assets'
  ],
  example: 'Content to be added',
  subchapters: [
    {
      id: 'ch5-1-ind-as-2',
      title: '(i) Ind AS 2 "Inventories"',
      difficulty: 'advanced' as const,
      description: 'Measurement and disclosure requirements for inventories',
      keyPoints: [
        'Scope and definition of inventories',
        'Measurement at lower of cost and net realizable value',
        'Cost of inventories - purchase cost, conversion cost, other costs',
        'Cost formulas - FIFO and Weighted Average',
        'Net realizable value determination',
        'Recognition as expense',
        'Disclosure requirements'
      ],
      example: 'Example: NRV Calculation\n\nInventory cost: ₹100 per unit\nEstimated selling price: ₹120 per unit\nEstimated costs to complete: ₹5 per unit\nEstimated selling costs: ₹10 per unit\n\nNRV = ₹120 - ₹5 - ₹10 = ₹105\nLower of cost (₹100) and NRV (₹105) = ₹100\n\nInventory carried at ₹100 per unit',
      questions: [
        {
          id: 'ch5-1-q1',
          question: 'What is Net Realizable Value (NRV) as per Ind AS 2? How is it calculated?',
          answer: 'Net Realizable Value (NRV) is the estimated selling price in the ordinary course of business less the estimated costs of completion and the estimated costs necessary to make the sale.\n\nFormula: NRV = Estimated Selling Price - Estimated Costs to Complete - Estimated Selling Costs\n\nExample:\n• Estimated selling price: ₹10,000\n• Estimated costs to complete: ₹1,000\n• Estimated selling costs (commission, transport): ₹500\n• NRV = ₹10,000 - ₹1,000 - ₹500 = ₹8,500\n\nIf cost of inventory is ₹9,000, inventory should be written down to NRV of ₹8,500, recognizing a loss of ₹500.\n\nInventories are measured at the lower of cost and NRV to ensure assets are not carried at amounts greater than expected recoverable amounts.',
          howToApproach: 'Define NRV clearly with the formula. Break down each component (selling price, completion costs, selling costs). Provide a numerical example showing the calculation. Explain why NRV is important - to ensure inventories are not overstated.',
          conceptExplanation: 'NRV represents the net amount an entity expects to realize from the sale of inventory. It is a conservatism principle ensuring inventories are valued at realizable amounts, not inflated historical costs.',
          category: 'Theoretical Questions & Answers' as const
        },
        {
          id: 'ch5-1-q2',
          question: 'ABC Ltd has 1,000 units of inventory purchased as follows: 400 units @ ₹100, 300 units @ ₹110, 300 units @ ₹120. The company sold 700 units. Calculate closing inventory value and cost of goods sold using (a) FIFO and (b) Weighted Average methods.',
          answer: 'Given Data:\nPurchases: 400 @ ₹100 = ₹40,000\n          300 @ ₹110 = ₹33,000\n          300 @ ₹120 = ₹36,000\nTotal: 1,000 units, ₹1,09,000\nSold: 700 units\nClosing: 300 units\n\n(a) FIFO Method (First In First Out):\n\nCost of Goods Sold (700 units):\n• First 400 units @ ₹100 = ₹40,000\n• Next 300 units @ ₹110 = ��33,000\n• Total COGS = ₹73,000\n\nClosing Inventory (300 units):\n• All from last purchase @ ₹120 = ₹36,000\n\n(b) Weighted Average Method:\n\nWeighted Average Cost = ₹1,09,000 / 1,000 units = ₹109 per unit\n\nCost of Goods Sold:\n• 700 units × ₹109 = ₹76,300\n\nClosing Inventory:\n• 300 units × ₹109 = ₹32,700\n\nVerification: COGS + Closing = ₹76,300 + ₹32,700 = ₹1,09,000 ✓',
          howToApproach: 'Organize the purchase data clearly. For FIFO, sell from oldest purchases first. For weighted average, calculate the average cost per unit first, then apply to units sold and closing. Show all calculations step by step. Verify that COGS + Closing Inventory equals total purchases.',
          conceptExplanation: 'FIFO assumes oldest items are sold first, resulting in closing inventory at recent costs. Weighted average spreads cost evenly across all units. In rising price scenarios, FIFO gives lower COGS and higher closing inventory compared to weighted average.',
          category: 'Practical Questions & Answers' as const
        },
        {
          id: 'ch5-1-q3',
          question: 'Multiple Choice: Which of the following costs should NOT be included in the cost of inventories? (A) Freight inward (B) Import duties (C) Storage costs for finished goods (D) Direct labor costs',
          answer: 'Correct Answer: (C) Storage costs for finished goods\n\nExplanation:\nAs per Ind AS 2, cost of inventories includes all costs of purchase, costs of conversion, and other costs incurred in bringing inventories to their present location and condition.\n\nCosts to INCLUDE:\n(A) Freight inward - Part of purchase cost to bring inventory to location ✓\n(B) Import duties - Part of purchase cost (non-refundable duties) ✓\n(D) Direct labor costs - Part of conversion cost ✓\n\nCosts to EXCLUDE:\n(C) Storage costs for finished goods - These are costs incurred AFTER inventories reach their present location and condition. They are period costs, not inventory costs.\n\nOther excluded costs:\n• Abnormal waste\n• Storage costs (unless necessary in production)\n• Administrative overheads not related to production\n• Selling costs',
          howToApproach: 'Recall what Ind AS 2 includes in inventory cost: purchase costs, conversion costs, and other costs to bring inventory to present location and condition. Storage costs after production are period costs. Identify which option doesn\'t fit the criteria.',
          conceptExplanation: 'Inventory cost includes only costs incurred up to the point where inventory is ready for sale or use. Subsequent storage, selling, and distribution costs are expensed as incurred, not capitalized to inventory.',
          category: 'Multiple Choice Questions' as const
        }
      ]
    }
  ]
};

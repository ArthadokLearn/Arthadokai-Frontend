// CA Final Paper-1: Financial Reporting - Chapter Titles

interface Concept {
  id: string;
  title: string;
  difficulty: "beginner" | "intermediate" | "advanced";
  description: string;
  keyPoints: string[];
  example: string;
  formula?: string;
  questions?: QuestionAnswer[];
  subchapters?: Concept[]; // Support for hierarchical chapters
}

export interface QuestionAnswer {
  id: string;
  question: string;
  answer: string;
  howToApproach: string;
  conceptExplanation: string;
  conceptImages?: string[]; // base64 encoded images
  category?:
    | "Theoretical Questions & Answers"
    | "Practical Questions & Answers"
    | "Case Studies"
    | "Multiple Choice Questions"
    | "Extract of Financial Statements"
    | "Other"; // Question category
}

export const caFinalFinancialReportingConcepts: Concept[] = [
  {
    id: "ch1-intro-ind-as",
    title:
      "Chapter 1: Introduction to Indian Accounting Standards",
    difficulty: "advanced",
    description: "Content to be added",
    keyPoints: ["Content to be added"],
    example: "Content to be added",
    questions: [
      {
        id: "q1",
        question:
          "What are Indian Accounting Standards (Ind AS) and why were they introduced?",
        answer:
          "Indian Accounting Standards (Ind AS) are accounting standards converged with International Financial Reporting Standards (IFRS) notified under Section 133 of the Companies Act, 2013. They were introduced to improve the quality and comparability of financial statements, facilitate cross-border investments, and align Indian accounting practices with global standards.",
        howToApproach:
          "Start by defining Ind AS, then explain the need for convergence with IFRS. Mention the legal framework (Companies Act, 2013) and conclude with the benefits of adopting Ind AS for Indian companies and the economy.",
        conceptExplanation:
          "Ind AS represents India's move towards global accounting harmonization. Understanding the transition from Indian GAAP to Ind AS is crucial for financial reporting compliance.",
      },
      {
        id: "q2",
        question:
          "Differentiate between convergence and adoption of accounting standards.",
        answer:
          "Convergence means modifying IFRS to suit the Indian economic environment while retaining the core principles. Adoption means implementing IFRS as-is without modifications. India has chosen convergence to address local business practices, legal requirements, and economic conditions while maintaining global comparability.",
        howToApproach:
          "Define both terms clearly, explain why India chose convergence over adoption, and provide examples of modifications made in Ind AS compared to IFRS.",
        conceptExplanation:
          "The convergence approach balances global best practices with India-specific requirements, ensuring financial statements are both internationally comparable and locally relevant.",
      },
      {
        id: "q3",
        question:
          "Explain the roadmap for implementation of Ind AS in India.",
        answer:
          "Phase I (April 1, 2016): Voluntary for companies with net worth ≥ ₹500 crores. Phase II (April 1, 2017): Companies with net worth ≥ ₹250 crores. Phase III (Deferred): Listed entities and unlisted entities with net worth below ₹250 crores. Banking companies, NBFCs, and insurance companies have separate roadmaps issued by respective regulators.",
        howToApproach:
          "Present the phased implementation chronologically, mention the net worth criteria for each phase, and highlight sector-specific implementations. Note any deferrals or modifications to the original roadmap.",
        conceptExplanation:
          "The phased implementation allowed large companies to transition first, providing lessons for smaller entities. Understanding this roadmap helps identify which entities must comply with Ind AS.",
      },
    ],
  },
  {
    id: "ch2-conceptual-framework",
    title:
      "Chapter 2: Conceptual Framework for Financial Reporting under Indian Accounting Standards",
    difficulty: "advanced",
    description: "Content to be added",
    keyPoints: ["Content to be added"],
    example: "Content to be added",
  },
  {
    id: "ch3-presentation",
    title:
      "Chapter 3: Application of Ind AS with reference to General Purpose Financial Statements",
    difficulty: "advanced",
    description:
      "Comprehensive coverage of Ind AS standards for presentation of financial statements including Ind AS 1, Ind AS 34, and Ind AS 7",
    keyPoints: [
      "Ind AS on Presentation of Items in Financial Statements",
      "Ind AS 1 - Presentation of Financial Statements",
      "Ind AS 34 - Interim Financial Reporting",
      "Ind AS 7 - Statement of Cash Flows",
    ],
    example: "Content to be added",
    subchapters: [
      {
        id: "ch3-1-presentation-items",
        title:
          "(i) Ind AS on Presentation of Items in the Financial Statements",
        difficulty: "advanced",
        description:
          "Overview of presentation requirements and general principles for financial statement items",
        keyPoints: [
          "General principles for presentation of financial statements",
          "Classification of items in financial statements",
          "Aggregation and offsetting principles",
          "Comparative information requirements",
          "Consistency in presentation",
        ],
        example: "Content to be added",
        questions: [
          {
            id: "ch3-1-q1",
            question:
              "What are the fundamental principles for presentation of items in financial statements under Ind AS?",
            answer:
              "The fundamental principles include: (1) Fair presentation and compliance with Ind AS, (2) Going concern assumption, (3) Accrual basis of accounting, (4) Materiality and aggregation, (5) Offsetting is generally prohibited unless required or permitted by Ind AS, (6) Frequency of reporting - at least annually, (7) Comparative information for prior period, and (8) Consistency of presentation.",
            howToApproach:
              "Start by listing all the fundamental principles systematically. Explain each principle briefly with its significance in financial reporting. Emphasize the importance of fair presentation and compliance with Ind AS standards.",
            conceptExplanation:
              "These principles form the foundation of financial statement presentation under Ind AS. Understanding these principles is crucial as they ensure consistency, comparability, and reliability of financial statements across entities and periods.",
            category: "Theoretical Questions & Answers",
          },
          {
            id: "ch3-1-q2",
            question:
              "ABC Ltd has trade receivables of ₹10 lakhs and trade payables of ₹8 lakhs. Can the company offset these amounts and show net receivables of ₹2 lakhs in the Statement of Financial Position?",
            answer:
              "No, ABC Ltd cannot offset these amounts. Ind AS prohibits offsetting of assets and liabilities unless specifically required or permitted by an Ind AS. Trade receivables and trade payables are separate line items and must be presented separately in the Statement of Financial Position at their gross amounts - ₹10 lakhs as receivables under current assets and ₹8 lakhs as payables under current liabilities.",
            howToApproach:
              "First, state the general rule about offsetting under Ind AS. Then apply it to the specific scenario. Explain why offsetting is not permitted in this case and how the amounts should be correctly presented in the financial statements.",
            conceptExplanation:
              "The prohibition of offsetting ensures that users of financial statements get a true picture of the entity's assets and liabilities. Offsetting would hide the gross amounts and could mislead stakeholders about the entity's liquidity and financial position.",
            category: "Practical Questions & Answers",
          },
        ],
      },
      {
        id: "ch3-2-ind-as-1",
        title:
          '(ii) Ind AS 1 "Presentation of Financial Statements"',
        difficulty: "advanced",
        description:
          "Detailed requirements for preparing and presenting general purpose financial statements",
        keyPoints: [
          "Objective and scope of Ind AS 1",
          "Complete set of financial statements components",
          "Fair presentation and compliance with Ind AS",
          "Going concern assessment",
          "Accrual basis of accounting",
          "Materiality and aggregation",
          "Structure and content of financial statements",
          "Statement of Financial Position requirements",
          "Statement of Profit and Loss and Other Comprehensive Income",
          "Statement of Changes in Equity",
          "Notes to financial statements",
        ],
        example:
          "Example: Structure of Statement of Financial Position\n\nAssets:\n• Non-current Assets\n  - Property, Plant and Equipment\n  - Intangible Assets\n  - Financial Assets\n• Current Assets\n  - Inventories\n  - Trade Receivables\n  - Cash and Cash Equivalents\n\nEquity and Liabilities:\n• Equity\n  - Share Capital\n  - Reserves and Surplus\n• Non-current Liabilities\n• Current Liabilities",
        questions: [
          {
            id: "ch3-2-q1",
            question:
              "What constitutes a complete set of financial statements under Ind AS 1?",
            answer:
              "A complete set of financial statements comprises: (1) Statement of Financial Position as at the end of the period, (2) Statement of Profit and Loss for the period, (3) Statement of Changes in Equity for the period, (4) Statement of Cash Flows for the period, (5) Notes comprising summary of material accounting policy information and other explanatory information, (6) Comparative information in respect of the preceding period, and (7) Statement of Financial Position as at the beginning of the preceding period when an entity applies an accounting policy retrospectively or makes a retrospective restatement.",
            howToApproach:
              "List all seven components systematically. Emphasize that all components are equally important for a complete understanding of financial position and performance. Mention the comparative information requirement.",
            conceptExplanation:
              "Ind AS 1 mandates a comprehensive set of financial statements to provide users with complete information about an entity's financial position, financial performance, and cash flows. Each component serves a specific purpose in financial reporting.",
            category: "Theoretical Questions & Answers",
          },
          {
            id: "ch3-2-q2",
            question:
              "XYZ Ltd purchased machinery for ₹50 lakhs on 1st April 2023. Useful life is 10 years with residual value of ₹5 lakhs. Should it be classified as current or non-current asset?",
            answer:
              "The machinery should be classified as a Non-current Asset. Under Ind AS 1, an asset is classified as current when: (a) it is expected to be realized/consumed in normal operating cycle, (b) held primarily for trading, (c) expected to be realized within 12 months, or (d) it is cash or cash equivalent. The machinery has useful life of 10 years and will be used in operations beyond 12 months, hence it is a non-current asset. Annual depreciation = (50 - 5)/10 = ₹4.5 lakhs.",
            howToApproach:
              "First, state the classification criteria for current vs non-current assets under Ind AS 1. Then analyze the given facts against these criteria. Conclude with proper classification and calculate depreciation if relevant.",
            conceptExplanation:
              "Proper classification between current and non-current is crucial for users to assess the entity's liquidity and working capital position. Assets expected to be realized beyond 12 months and not part of normal operating cycle are non-current.",
            category: "Practical Questions & Answers",
          },
        ],
      },
      {
        id: "ch3-3-ind-as-34",
        title: '(iii) Ind AS 34 "Interim Financial Reporting"',
        difficulty: "advanced",
        description:
          "Requirements for preparation and presentation of interim financial reports",
        keyPoints: [
          "Objective and scope of Ind AS 34",
          "Content of interim financial report",
          "Minimum components of interim report",
          "Condensed financial statements",
          "Selected explanatory notes",
          "Recognition and measurement principles",
          "Same accounting policies as annual statements",
          "Revenues received seasonally or cyclically",
          "Costs incurred unevenly during financial year",
          "Income tax expense in interim periods",
        ],
        example:
          "Example: Interim Period Tax Calculation\\n\\nEstimated annual income: ₹10,00,000\\nExpected annual tax rate: 25%\\nExpected annual tax: ₹2,50,000\\n\\nQ1 Income: ₹2,00,000\\nQ1 Tax = 2,00,000 × 25% = ₹50,000\\n\\nQ2 Income: ₹3,00,000\\nCumulative Income: ₹5,00,000\\nCumulative Tax = 5,00,000 × 25% = ₹1,25,000\\nQ2 Tax = ₹1,25,000 - ₹50,000 = ₹75,000",
        questions: [
          {
            id: "ch3-3-q1",
            question:
              "What is the minimum content of an interim financial report as per Ind AS 34?",
            answer:
              "The minimum content of an interim financial report includes: (1) Condensed Statement of Financial Position, (2) Condensed Statement of Profit and Loss and Other Comprehensive Income, (3) Condensed Statement of Changes in Equity, (4) Condensed Statement of Cash Flows, and (5) Selected explanatory notes. These condensed statements should include line items and subtotals that were included in the most recent annual financial statements, along with explanatory notes as required by Ind AS 34.",
            howToApproach:
              'List all five components of minimum interim financial report content. Emphasize the word "condensed" and explain that these are not full statements but should include key line items from annual statements. Mention the requirement of explanatory notes.',
            conceptExplanation:
              "Ind AS 34 balances the need for timely information with the cost of preparation. Condensed statements provide users with an update on the latest annual financial statements without requiring full disclosure of all information.",
            category: "Theoretical Questions & Answers",
          },
          {
            id: "ch3-3-q2",
            question:
              "ABC Ltd estimates annual profit of ₹40 lakhs with tax rate 30%. Q1 actual profit is ₹12 lakhs. Calculate Q1 tax expense. In Q2, actual profit is ₹8 lakhs and estimated annual profit is revised to ₹36 lakhs. Calculate Q2 tax expense.",
            answer:
              "Q1 Tax Calculation:\\nEstimated annual tax rate = 30%\\nQ1 Profit = ₹12 lakhs\\nQ1 Tax = ₹12 lakhs × 30% = ₹3.6 lakhs\\n\\nQ2 Tax Calculation:\\nRevised annual profit estimate = ₹36 lakhs\\nRevised tax rate = 30%\\nCumulative profit (Q1+Q2) = ₹12 + ₹8 = ₹20 lakhs\\nCumulative tax = ₹20 lakhs × 30% = ₹6 lakhs\\nLess: Q1 tax already recognized = ₹3.6 lakhs\\nQ2 Tax expense = ₹6 - ₹3.6 = ₹2.4 lakhs",
            howToApproach:
              "Calculate Q1 tax using estimated annual rate. For Q2, use revised estimate to calculate cumulative tax, then deduct Q1 tax to arrive at Q2 tax. Show all workings clearly. Emphasize the use of year-to-date approach.",
            conceptExplanation:
              "Ind AS 34 requires income tax expense to be calculated on a year-to-date basis using the tax rate that would be applicable to expected total annual earnings. This ensures that interim tax expense reflects the best estimate of the weighted average annual income tax rate.",
            category: "Practical Questions & Answers",
          },
          {
            id: "ch3-3-q3",
            question:
              "Multiple Choice: Which of the following is NOT a requirement of Ind AS 34? (A) Same accounting policies as annual statements (B) Condensed financial statements (C) Audit by statutory auditor (D) Selected explanatory notes",
            answer:
              "Correct Answer: (C) Audit by statutory auditor\\n\\nExplanation: Ind AS 34 does not mandate that interim financial reports must be audited. While companies may choose to get them reviewed or audited, it is not a requirement of the standard. The standard requires: (A) Same accounting policies as used in annual statements, (B) Condensed financial statements, and (D) Selected explanatory notes to explain significant events and transactions.",
            howToApproach:
              "Read all options carefully. Identify what Ind AS 34 actually requires versus what might be required by other regulations like SEBI. The standard itself is about presentation and measurement, not audit requirements.",
            conceptExplanation:
              "While SEBI and stock exchange regulations may require listed companies to get interim reports reviewed by auditors, Ind AS 34 itself does not mandate audit or review. It focuses on recognition, measurement and disclosure requirements.",
            category: "Multiple Choice Questions",
          },
        ],
      },
      {
        id: "ch3-4-ind-as-7",
        title: '(iv) Ind AS 7 "Statement of Cash Flows"',
        difficulty: "advanced",
        description:
          "Requirements for preparation and presentation of cash flow statements",
        keyPoints: [
          "Objective and scope of Ind AS 7",
          "Cash and cash equivalents definition",
          "Classification of cash flows",
          "Operating activities - Direct and Indirect method",
          "Investing activities",
          "Financing activities",
          "Reporting cash flows on net basis",
          "Foreign currency cash flows",
          "Interest and dividends classification",
          "Income taxes on cash flows",
          "Non-cash transactions disclosure",
        ],
        example:
          "Example: Cash Flow Classification\\n\\nOperating Activities:\\n• Cash receipts from customers\\n• Cash payments to suppliers\\n• Cash payments to employees\\n• Interest paid (or investing)\\n• Income taxes paid\\n\\nInvesting Activities:\\n• Purchase of property, plant & equipment\\n• Sale of investments\\n• Interest received (or operating)\\n• Dividends received (or operating)\\n\\nFinancing Activities:\\n• Proceeds from issue of shares\\n• Proceeds from borrowings\\n• Repayment of borrowings\\n• Dividends paid\\n• Payment of lease liabilities",
        questions: [
          {
            id: "ch3-4-q1",
            question:
              "Define cash and cash equivalents as per Ind AS 7. Provide examples.",
            answer:
              "Cash comprises cash on hand and demand deposits. Cash equivalents are short-term, highly liquid investments that are readily convertible to known amounts of cash and subject to insignificant risk of changes in value. To qualify as cash equivalent, an investment must have a maturity of three months or less from the date of acquisition.\\n\\nExamples of Cash Equivalents:\\n• Treasury bills with 3-month maturity\\n• Commercial paper\\n• Money market funds\\n• Short-term deposits with banks (≤3 months)\\n\\nExamples NOT qualifying as Cash Equivalents:\\n• Fixed deposits with 6-month maturity\\n• Equity investments (high risk of value change)\\n• Preference shares",
            howToApproach:
              "Define cash first, then cash equivalents with emphasis on three key criteria: short-term, highly liquid, and insignificant risk. Mention the three-month rule. Provide both positive and negative examples to clarify the concept.",
            conceptExplanation:
              "The three-month rule is critical. An investment with original maturity of 6 months does not become a cash equivalent when remaining maturity reduces to 3 months. The assessment is made at acquisition date.",
            category: "Theoretical Questions & Answers",
          },
          {
            id: "ch3-4-q2",
            question:
              "XYZ Ltd reports net profit of ₹50 lakhs. Depreciation charged ₹10 lakhs. Trade receivables increased by ₹5 lakhs, inventory decreased by ₹3 lakhs, and trade payables increased by ₹4 lakhs. Calculate cash flow from operating activities using indirect method.",
            answer:
              "Cash Flow from Operating Activities (Indirect Method):\\n\\nNet Profit                                      ₹50 lakhs\\nAdd: Depreciation (non-cash expense)             ₹10 lakhs\\nOperating profit before WC changes               ₹60 lakhs\\n\\nWorking Capital Adjustments:\\nLess: Increase in Trade Receivables              (₹5 lakhs)\\nAdd: Decrease in Inventory                        ₹3 lakhs\\nAdd: Increase in Trade Payables                   ₹4 lakhs\\n\\nCash Generated from Operations                   ₹62 lakhs",
            howToApproach:
              "Start with net profit. Add back non-cash expenses like depreciation. Then adjust for working capital changes: increases in current assets are deducted (cash outflow), decreases are added (cash inflow). For current liabilities, reverse the logic. Show all workings clearly.",
            conceptExplanation:
              "The indirect method reconciles net profit to cash flow. Depreciation is added back as it reduced profit but did not use cash. Increase in receivables means sales made but cash not received, hence deducted. Increase in payables means purchases made but cash not paid, hence added.",
            category: "Practical Questions & Answers",
          },
          {
            id: "ch3-4-q3",
            question:
              "Case Study: ABC Ltd purchased machinery worth ₹100 lakhs. Paid ₹60 lakhs in cash and issued equity shares of ₹40 lakhs for the balance. How should this be disclosed in Statement of Cash Flows?",
            answer:
              'This is a non-cash transaction that requires special disclosure under Ind AS 7.\\n\\nPresentation in Statement of Cash Flows:\\n\\nCash Flow from Investing Activities:\\nPurchase of machinery (cash portion)              (₹60 lakhs)\\n\\nCash Flow from Financing Activities:\\nNil - Share issue is non-cash\\n\\nNote to Accounts (Mandatory Disclosure):\\n\"During the year, the company acquired machinery worth ₹100 lakhs by paying ₹60 lakhs in cash and issuing equity shares of ₹40 lakhs for the balance consideration.\"\\n\\nThe ₹40 lakhs non-cash portion is excluded from the statement but disclosed in notes as it is a significant investing and financing activity.',
            howToApproach:
              "Identify this as a partly cash, partly non-cash transaction. Show only cash portion in main statement under investing activities. Emphasize that non-cash portion must be disclosed in notes separately. Explain why this disclosure is important for users.",
            conceptExplanation:
              "Ind AS 7 requires that investing and financing transactions that do not require cash must be excluded from the cash flow statement but disclosed elsewhere in the financial statements. This ensures users understand all significant investing and financing activities, not just those involving cash.",
            category: "Case Studies",
          },
        ],
      },
    ],
  },
  {
    id: "ch4-measurement",
    title:
      "Chapter 4: Ind AS on Measurement based on Accounting Policies",
    difficulty: "advanced",
    description:
      "Comprehensive coverage of Ind AS standards related to accounting policies, events after reporting period, and fair value measurement",
    keyPoints: [
      "Ind AS 8 - Accounting Policies, Changes in Accounting Estimates and Errors",
      "Ind AS 10 - Events after the Reporting Period",
      "Ind AS 113 - Fair Value Measurement",
    ],
    example: "Content to be added",
    subchapters: [
      {
        id: "ch4-1-ind-as-8",
        title:
          '(i) Ind AS 8 "Accounting Policies, Changes in Accounting Estimates and Errors"',
        difficulty: "advanced",
        description:
          "Selection and application of accounting policies, accounting for changes in estimates and correction of prior period errors",
        keyPoints: [
          "Selection and application of accounting policies",
          "Consistency of accounting policies",
          "Changes in accounting policies",
          "Changes in accounting estimates",
          "Errors and prior period corrections",
          "Retrospective vs prospective application",
          "Disclosures for changes and errors",
          "Impracticability in retrospective application",
        ],
        example:
          "Example: Change in Depreciation Method\n\nOld Method: Straight Line Method (SLM)\nNew Method: Written Down Value (WDV)\n\nThis is a change in accounting estimate, not accounting policy. It should be applied prospectively from the current period onwards without restating prior periods.",
        questions: [
          {
            id: "ch4-1-q1",
            question:
              "Distinguish between a change in accounting policy and a change in accounting estimate as per Ind AS 8.",
            answer:
              "Change in Accounting Policy:\n• Refers to adoption of a different accounting principle or method\n• Example: Change from FIFO to Weighted Average method for inventory valuation\n• Applied retrospectively by restating prior period comparatives\n• Requires specific disclosure of nature, reason, and impact\n\nChange in Accounting Estimate:\n• Results from new information or better assessment\n• Example: Change in useful life of asset, change in bad debt estimation method\n• Applied prospectively from the date of change\n• No restatement of prior periods\n• Disclosed if material impact on current or future periods\n\nKey Distinction: Policy change affects the principle/method itself, while estimate change affects the judgment within the same policy.",
            howToApproach:
              "Start by defining both terms clearly. Provide clear examples for each. Explain the accounting treatment (retrospective vs prospective). Highlight the key differences in disclosure requirements. Use a tabular format if needed for better clarity.",
            conceptExplanation:
              "The distinction is crucial because it determines whether prior periods need to be restated. Changes in estimates are more common and are treated prospectively to avoid the complexity of restating prior periods for what are essentially new judgments based on new information.",
            category: "Theoretical Questions & Answers",
          },
          {
            id: "ch4-1-q2",
            question:
              "ABC Ltd discovered in March 2024 that closing inventory as on 31st March 2023 was overstated by ₹10 lakhs due to an error. The company follows March year-end. Tax rate is 30%. How should this error be corrected in financial statements for the year ended 31st March 2024?",
            answer:
              "This is a prior period error and should be corrected retrospectively as per Ind AS 8.\n\nImpact Analysis:\n• Overstatement of closing inventory 2022-23 = ₹10 lakhs\n• This reduced cost of goods sold and increased profit by ₹10 lakhs\n• Tax overpaid = ₹10 lakhs × 30% = ₹3 lakhs\n• Net impact on retained earnings = ₹7 lakhs (overstated)\n\nCorrection Entries in FY 2023-24:\n\nRetained Earnings (Opening)        Dr.  ₹7 lakhs\nDeferred Tax Asset                 Dr.  ₹3 lakhs\n    To Inventory (Opening)                      ₹10 lakhs\n\nComparative figures for 2022-23 should be restated:\n• Reduce closing inventory by ₹10 lakhs\n• Increase cost of goods sold by ₹10 lakhs\n• Reduce profit by ₹10 lakhs\n• Reduce tax expense by ₹3 lakhs\n• Reduce retained earnings by ₹7 lakhs",
            howToApproach:
              "Identify it as prior period error requiring retrospective correction. Calculate the impact on profit and tax. Prepare the correction entry. Explain how comparatives should be restated. Mention the disclosure requirements in notes.",
            conceptExplanation:
              "Prior period errors must be corrected retrospectively to ensure comparability of financial statements. The correction is made in the earliest period presented, and comparative information is restated as if the error had never occurred.",
            category: "Practical Questions & Answers",
          },
          {
            id: "ch4-1-q3",
            question:
              "Multiple Choice: Which of the following is applied retrospectively? (A) Change in accounting estimate (B) Change in accounting policy (C) Correction of error (D) Both B and C",
            answer:
              "Correct Answer: (D) Both B and C\n\nExplanation:\n• Change in accounting policy (B) - Applied retrospectively by restating prior period comparatives as per Ind AS 8\n• Correction of error (C) - Corrected retrospectively by restating the earliest prior period presented\n• Change in accounting estimate (A) - Applied prospectively, NOT retrospectively\n\nRetrospective application means adjusting opening balances and restating comparative information as if the new policy had always been applied or the error had never occurred.",
            howToApproach:
              "Recall the fundamental principles of Ind AS 8. Remember: Policy changes and error corrections are retrospective, while estimate changes are prospective. This is a key concept tested frequently.",
            conceptExplanation:
              "Retrospective application ensures comparability across periods. Only changes in estimates are prospective because they represent new information or reassessments, not corrections of past periods.",
            category: "Multiple Choice Questions",
          },
        ],
      },
      {
        id: "ch4-2-ind-as-10",
        title:
          '(ii) Ind AS 10 "Events after the Reporting Period"',
        difficulty: "advanced",
        description:
          "Accounting treatment and disclosure of events occurring between reporting date and date of authorization of financial statements",
        keyPoints: [
          "Events after the reporting period - definition",
          "Adjusting events vs non-adjusting events",
          "Going concern considerations",
          "Dividends declared after reporting period",
          "Date of authorization of financial statements",
          "Disclosure requirements for non-adjusting events",
          "Material non-adjusting events requiring disclosure",
        ],
        example:
          "Example: Adjusting vs Non-Adjusting Events\n\nAdjusting Event (requires adjustment):\n• Customer declared bankrupt after year-end for debt existing at year-end\n• Adjust provision for bad debts\n\nNon-Adjusting Event (disclosure only):\n• Fire destroyed factory after year-end\n• Disclose in notes, do not adjust financial statements",
        questions: [
          {
            id: "ch4-2-q1",
            question:
              "What is the difference between adjusting events and non-adjusting events after the reporting period as per Ind AS 10?",
            answer:
              "Adjusting Events:\n• Provide evidence of conditions that existed at the reporting date\n• Require adjustment to amounts recognized in financial statements\n• Example: Settlement of court case confirming liability existed at year-end, customer bankruptcy for receivable outstanding at year-end, discovery of fraud/error\n• These events help determine the correct amounts to be recognized\n\nNon-Adjusting Events:\n• Indicative of conditions that arose after the reporting period\n• Do not require adjustment to financial statements\n• Require disclosure if material\n• Example: Major business combination after year-end, announcement of restructuring plan, fire/natural calamity destroying assets, major decline in market value of investments\n• These events do not affect the financial position at reporting date",
            howToApproach:
              "Define both types clearly. Explain the fundamental difference - whether conditions existed at reporting date or arose after. Provide relevant examples for each category. Explain the accounting treatment - adjustment vs disclosure.",
            conceptExplanation:
              "The key test is whether the event provides evidence about conditions that existed at the reporting date. If yes, it's adjusting. If it relates to conditions arising after the reporting date, it's non-adjusting but may need disclosure if material.",
            category: "Theoretical Questions & Answers",
          },
          {
            id: "ch4-2-q2",
            question:
              "XYZ Ltd's financial year ended on 31st March 2024. The Board approved financial statements on 25th May 2024. Following events occurred: (a) On 15th April, a customer owing ₹5 lakhs at year-end was declared bankrupt (b) On 30th April, a fire destroyed inventory worth ₹10 lakhs. How should these be treated?",
            answer:
              'Analysis of Events:\n\n(a) Customer Bankruptcy - Adjusting Event\n• The receivable of ₹5 lakhs existed at 31st March 2024\n• Bankruptcy provides evidence that receivable was impaired at year-end\n• Treatment: Create/increase provision for bad debts by ₹5 lakhs in FY 2023-24 statements\n• Journal Entry:\nBad Debts / Provision for Doubtful Debts  Dr. ₹5 lakhs\n    To Trade Receivables                           ₹5 lakhs\n\n(b) Fire destroying inventory - Non-Adjusting Event\n• Inventory existed at 31st March 2024, but fire occurred after year-end\n• Fire is a new condition arising after reporting period\n• Treatment: No adjustment to financial statements\n• Disclosure Required in Notes:\n"Subsequent to year-end on 30th April 2024, a fire incident destroyed inventory of ₹10 lakhs. The company is in process of filing insurance claim and expects to recover ₹8 lakhs from insurance company."',
            howToApproach:
              "Analyze each event separately. Determine if condition existed at reporting date or arose after. For adjusting event, show the journal entry and impact on financial statements. For non-adjusting event, draft a disclosure note. Be specific about amounts and dates.",
            conceptExplanation:
              "Customer bankruptcy provides additional evidence about the recoverability of a receivable that existed at year-end, hence adjusting. Fire is a new event that occurred after year-end, hence non-adjusting but requires disclosure due to materiality.",
            category: "Practical Questions & Answers",
          },
          {
            id: "ch4-2-q3",
            question:
              "Case Study: ABC Ltd year-end is 31st Dec 2023, and Board approves statements on 20th Feb 2024. On 15th Jan 2024, Board declares dividend of ₹10 per share on 1 lakh shares. On 10th Feb 2024, major customer owing ₹20 lakhs at year-end settles for only ₹12 lakhs due to disputes. How should these events be accounted for?",
            answer:
              'Event 1: Dividend Declaration (15th Jan 2024) - Non-Adjusting Event\n\nAs per Ind AS 10, dividends declared after reporting period should NOT be recognized as liability at reporting date.\n\nAccounting Treatment:\n• Do not create dividend payable liability in Balance Sheet as at 31st Dec 2023\n• Do not reduce reserves and surplus\n• Dividend will be accounted in FY 2024 when approved by shareholders\n• Disclosure in Notes: "The Board has proposed dividend of ₹10 per share (total ₹10 lakhs) which is subject to approval by shareholders at Annual General Meeting."\n\nEvent 2: Customer Settlement (10th Feb 2024) - Adjusting Event\n\nThis provides evidence that receivable was impaired at 31st Dec 2023.\n\nAccounting Treatment:\n• Receivable at year-end: ₹20 lakhs\n• Settlement amount: ₹12 lakhs\n• Loss to be recognized: ₹8 lakhs\n\nJournal Entry in FY 2023 books:\nBad Debts Expense                Dr.  ₹8 lakhs\n    To Provision for Doubtful Debts         ₹8 lakhs\n\nStatement of Financial Position as at 31st Dec 2023:\nTrade Receivables                    ₹20 lakhs\nLess: Provision for Doubtful Debts  (₹8 lakhs)\nNet Receivables                      ₹12 lakhs',
            howToApproach:
              "Analyze each event separately against Ind AS 10 criteria. For dividend, cite the specific requirement that dividends proposed after reporting date are not recognized as liability. For settlement, explain why it's evidence of impairment at year-end. Show complete accounting entries and impact on financial statements.",
            conceptExplanation:
              "Dividends are not recognized until there is a legal obligation, which arises only upon shareholder approval, not board declaration. The settlement event provides additional evidence about the carrying amount of receivable at year-end, requiring adjustment under Ind AS 10.",
            category: "Case Studies",
          },
        ],
      },
      {
        id: "ch4-3-ind-as-113",
        title: '(iii) Ind AS 113 "Fair Value Measurement"',
        difficulty: "advanced",
        description:
          "Framework for measuring fair value and related disclosures",
        keyPoints: [
          "Definition of fair value",
          "Fair value hierarchy - Level 1, 2, and 3",
          "Principal market and most advantageous market",
          "Valuation techniques - Market, Income, and Cost approach",
          "Highest and best use for non-financial assets",
          "Fair value measurement at initial recognition",
          "Disclosure requirements for fair value measurements",
          "Fair value of financial instruments",
        ],
        example:
          "Example: Fair Value Hierarchy\n\nLevel 1: Quoted prices in active markets\n• Equity shares listed on NSE with daily trading\n• Government securities\n\nLevel 2: Observable inputs other than Level 1\n• Corporate bonds with quoted prices for similar bonds\n• Interest rate swaps valued using yield curves\n\nLevel 3: Unobservable inputs\n• Unlisted equity investments valued using DCF\n• Specialized machinery with no market data",
        questions: [
          {
            id: "ch4-3-q1",
            question:
              "Explain the three-level fair value hierarchy as per Ind AS 113 with examples.",
            answer:
              "Fair Value Hierarchy categorizes inputs used in valuation techniques:\n\nLevel 1 - Quoted Prices in Active Markets (Highest Priority)\n• Unadjusted quoted prices in active markets for identical assets/liabilities\n• Market must be active with regular transactions\n• Examples: Listed equity shares on stock exchanges, government bonds, commodities with quoted prices\n• Most reliable and preferred method\n• No adjustments or assumptions required\n\nLevel 2 - Observable Inputs (other than Level 1)\n• Inputs observable directly or indirectly, but not Level 1 quoted prices\n• Examples:\n  - Quoted prices for similar assets/liabilities in active markets\n  - Quoted prices for identical/similar assets in inactive markets\n  - Observable inputs like interest rates, yield curves, credit spreads\n  - Corporate bonds valued using similar bond prices\n  - Forward contracts valued using observable forward rates\n\nLevel 3 - Unobservable Inputs (Lowest Priority)\n• Unobservable inputs based on entity's own assumptions\n• Used when observable inputs not available\n• Examples:\n  - Unlisted equity valued using DCF with entity-specific assumptions\n  - Specialized assets with no market\n  - Long-dated derivatives with no observable market data\n• Requires extensive disclosures",
            howToApproach:
              "Explain the hierarchy from highest to lowest priority. Describe each level with its characteristics. Provide practical examples for each level. Emphasize the priority - use Level 1 when available, then Level 2, and Level 3 only when others not available.",
            conceptExplanation:
              "The hierarchy prioritizes observable market data over entity-specific assumptions to ensure fair value reflects market participant views rather than entity-specific views. This enhances comparability and reliability of fair value measurements.",
            category: "Theoretical Questions & Answers",
          },
          {
            id: "ch4-3-q2",
            question:
              "ABC Ltd holds following investments at year-end: (a) 1,000 shares of X Ltd listed on NSE, current market price ₹500 per share (b) Unlisted equity investment in Y Ltd acquired for ₹10 lakhs, fair valued using DCF at ₹15 lakhs. Categorize these in fair value hierarchy and determine carrying amount.",
            answer:
              "Analysis and Fair Value Categorization:\n\n(a) Investment in X Ltd - 1,000 shares\n\nFair Value Hierarchy: Level 1\nReason: Quoted prices available in active market (NSE)\nValuation: 1,000 shares × ₹500 = ₹5,00,000\nCarrying Amount: ₹5,00,000\n\nAccounting Entry:\nIf classified as FVTPL (Fair Value Through Profit or Loss):\nInvestments                           Dr.  Amount\n    To Gain on Fair Valuation                 Amount\n(If fair value exceeds cost)\n\n(b) Investment in Y Ltd - Unlisted Equity\n\nFair Value Hierarchy: Level 3\nReason: Unobservable inputs used (DCF with entity-specific assumptions)\nCost: ₹10,00,000\nFair Value (DCF): ₹15,00,000\nGain: ₹5,00,000\nCarrying Amount: ₹15,00,000\n\nAccounting Entry (if FVTPL):\nInvestments in Y Ltd                Dr.  ₹5,00,000\n    To Gain on Fair Valuation                ₹5,00,000\n\nDisclosure Requirements:\n• Level 1 measurement: ₹5 lakhs\n• Level 3 measurement: ₹15 lakhs\n• For Level 3, disclose valuation technique, key assumptions, sensitivity analysis",
            howToApproach:
              "Analyze each investment separately. Identify the level in fair value hierarchy based on available inputs. Calculate fair value and carrying amount. Prepare accounting entries if needed. Mention the disclosure requirements, especially for Level 3 measurements.",
            conceptExplanation:
              "Listed shares with active trading are always Level 1 as quoted prices are readily available. Unlisted equity requires valuation models with unobservable inputs, hence Level 3. Level 3 requires extensive disclosures due to higher measurement uncertainty.",
            category: "Practical Questions & Answers",
          },
          {
            id: "ch4-3-q3",
            question:
              "Multiple Choice: Fair value is defined as the price that would be received to sell an asset in: (A) A forced liquidation (B) An orderly transaction between market participants (C) Sale to related party (D) Quick sale at distress price",
            answer:
              "Correct Answer: (B) An orderly transaction between market participants\n\nExplanation:\nAs per Ind AS 113, fair value is \"the price that would be received to sell an asset or paid to transfer a liability in an orderly transaction between market participants at the measurement date.\"\n\nKey elements:\n• Orderly transaction - Not a forced or distressed sale\n• Market participants - Independent, knowledgeable parties\n• At measurement date - Current market conditions\n• Exit price - Price to sell asset or transfer liability\n\nWhy other options are incorrect:\n(A) Forced liquidation - This is NOT fair value as it doesn't represent orderly transaction\n(C) Related party - Fair value assumes transaction with independent market participants\n(D) Distress price - Quick/distress sales don't reflect fair value\n\nImportant: Fair value assumes orderly transaction in principal (or most advantageous) market, not distressed circumstances.",
            howToApproach:
              'Recall the exact definition from Ind AS 113. Focus on key words: "orderly transaction" and "market participants". Eliminate options that involve forced, distressed, or related party transactions. Fair value always assumes normal market conditions.',
            conceptExplanation:
              "The concept of orderly transaction is critical to fair value. It excludes forced liquidations, distress sales, or related party transactions. Fair value reflects what independent parties would agree upon in normal market conditions.",
            category: "Multiple Choice Questions",
          },
          {
            id: "ch4-3-q4",
            question:
              "Case Study: XYZ Ltd acquired specialized manufacturing equipment for ₹50 lakhs on 1st April 2023. Similar equipment sells for ₹48 lakhs in the market but would cost ₹10 lakhs to modify for XYZ's specific use. An appraiser valued it at ₹55 lakhs for its highest and best use in XYZ's operations. What is the fair value at acquisition?",
            answer:
              "Analysis under Ind AS 113:\n\nStep 1: Identify the Asset\nSpecialized manufacturing equipment acquired for ₹50 lakhs\n\nStep 2: Determine the Unit of Account\nThe equipment as configured for XYZ Ltd's specific use\n\nStep 3: Apply Highest and Best Use Principle (for non-financial assets)\n\nAs per Ind AS 113, fair value of non-financial asset is measured based on its highest and best use by market participants.\n\nAvailable Information:\n• Transaction price: ₹50 lakhs (what XYZ paid)\n• Market price of similar equipment: ₹48 lakhs\n• Modification cost for XYZ's use: ₹10 lakhs\n• Appraiser's valuation for highest and best use: ₹55 lakhs\n\nStep 4: Determine Fair Value at Initial Recognition\n\nThe fair value should reflect highest and best use from market participant perspective. The key question: Would market participants also derive ₹55 lakhs value?\n\nFair Value at Acquisition: ₹50 lakhs\n\nReason:\n• At initial recognition, fair value is generally the transaction price (₹50 lakhs) unless proven otherwise\n• The ₹55 lakhs appraiser value is entity-specific and may not reflect market participant view\n• Market price of similar equipment is ₹48 lakhs plus ₹10 lakhs modification = ₹58 lakhs\n• Transaction price of ₹50 lakhs appears reasonable and represents fair value\n\nAccounting Entry:\nPlant and Equipment               Dr.  ₹50 lakhs\n    To Bank/Payable                          ₹50 lakhs\n\nNo Day 1 gain/loss is recognized as transaction price represents fair value.\n\nDisclosure:\n• Fair value hierarchy: Likely Level 2 or 3 (depending on observability of inputs)\n• Valuation technique and key assumptions\n• If appraiser's valuation significantly differs, explain the difference",
            howToApproach:
              "Identify the asset and apply the highest and best use concept. Consider whether transaction price represents fair value at initial recognition. Analyze all available data points. For non-financial assets, highest and best use is from market participant perspective, not entity-specific. Be careful about entity-specific vs market participant assumptions.",
            conceptExplanation:
              "For non-financial assets, Ind AS 113 requires fair value to be based on highest and best use, even if entity intends different use. However, at initial recognition, transaction price usually represents fair value unless there's evidence to contrary. The entity-specific value of ₹55 lakhs needs to be assessed whether market participants would also realize this value.",
            category: "Case Studies",
          },
        ],
      },
    ],
  },
  {
    id: "ch5-assets",
    title:
      "Chapter 5: Ind AS on Assets and Liabilities of the Financial Statements",
    difficulty: "advanced",
    description:
      "Comprehensive coverage of Ind AS standards related to assets and liabilities",
    keyPoints: [
      "Ind AS 2 - Inventories",
      "Ind AS 16 - Property, Plant and Equipment",
      "Ind AS 116 - Leases",
      "Ind AS 23 - Borrowing Costs",
      "Ind AS 36 - Impairment of Assets",
      "Ind AS 38 - Intangible Assets",
      "Ind AS 40 - Investment Property",
      "Ind AS 105 - Non-current Assets Held for Sale",
      "Ind AS 19 - Employee Benefits",
      "Ind AS 37 - Provisions, Contingent Liabilities and Contingent Assets",
    ],
    example: "Content to be added",
    subchapters: [
      {
        id: "ch5-1-ind-as-2",
        title: '(i) Ind AS 2 "Inventories"',
        difficulty: "advanced",
        description:
          "Measurement and disclosure requirements for inventories",
        keyPoints: [
          "Scope and definition of inventories",
          "Measurement at lower of cost and net realizable value",
          "Cost formulas - FIFO and Weighted Average",
        ],
        example:
          "Example: NRV = Selling Price - Costs to Complete - Selling Costs",
        questions: [
          {
            id: "ch5-1-q1",
            question:
              "What is Net Realizable Value (NRV) as per Ind AS 2?",
            answer:
              "Net Realizable Value (NRV) is the estimated selling price in the ordinary course of business less the estimated costs of completion and the estimated costs necessary to make the sale.\n\nFormula: NRV = Estimated Selling Price - Estimated Costs to Complete - Estimated Selling Costs\n\nInventories are measured at the lower of cost and NRV to ensure assets are not overstated.",
            howToApproach:
              "Define NRV clearly with the formula. Explain why NRV is important.",
            conceptExplanation:
              "NRV ensures inventories are valued at realizable amounts, not inflated historical costs.",
            category: "Theoretical Questions & Answers",
          },
        ],
      },
      {
        id: "ch5-2-ind-as-16",
        title: '(ii) Ind AS 16 "Property, Plant and Equipment"',
        difficulty: "advanced",
        description:
          "Recognition, measurement, and depreciation of PPE",
        keyPoints: [
          "Recognition criteria for PPE",
          "Initial and subsequent measurement",
          "Depreciation methods",
        ],
        example:
          "Example: Depreciation = (Cost - Residual Value) / Useful Life",
        questions: [
          {
            id: "ch5-2-q1",
            question:
              "What are the recognition criteria for PPE under Ind AS 16?",
            answer:
              "For an item to be recognized as PPE:\n1. It is probable that future economic benefits will flow to the entity\n2. The cost can be measured reliably\n\nPPE must be tangible, held for use in operations, and expected to be used for more than one period.",
            howToApproach:
              "State the two recognition criteria and definition requirements.",
            conceptExplanation:
              "Recognition criteria ensure only assets with future benefits and measurable cost are capitalized.",
            category: "Theoretical Questions & Answers",
          },
        ],
      },
      {
        id: "ch5-3-ind-as-116",
        title: '(iii) Ind AS 116 "Leases"',
        difficulty: "advanced",
        description:
          "Accounting for leases by lessees and lessors",
        keyPoints: [
          "Right-of-use asset and lease liability",
          "Initial and subsequent measurement",
          "Exemptions for short-term and low-value leases",
        ],
        example:
          "Example: ROU Asset = Lease Liability + Initial Direct Costs",
        questions: [
          {
            id: "ch5-3-q1",
            question:
              "What is the fundamental principle of Ind AS 116 for lessees?",
            answer:
              "A lessee recognizes a Right-of-Use (ROU) Asset and Lease Liability for ALL leases, except short-term (≤12 months) and low-value asset leases.\n\nLease Liability = Present value of lease payments\nROU Asset = Lease Liability + Initial direct costs",
            howToApproach:
              "Explain the single model approach and exemptions.",
            conceptExplanation:
              "Ind AS 116 eliminates off-balance sheet financing by requiring recognition of all leases.",
            category: "Theoretical Questions & Answers",
          },
        ],
      },
      {
        id: "ch5-4-ind-as-23",
        title: '(iv) Ind AS 23 "Borrowing Costs"',
        difficulty: "advanced",
        description:
          "Capitalization of borrowing costs for qualifying assets",
        keyPoints: [
          "Definition of qualifying assets",
          "Capitalization vs expense",
          "Suspension of capitalization",
        ],
        example:
          "Example: Capitalize interest on loans for assets taking substantial time to construct",
        questions: [
          {
            id: "ch5-4-q1",
            question:
              "What is a qualifying asset under Ind AS 23?",
            answer:
              "A qualifying asset is an asset that necessarily takes a substantial period of time to get ready for its intended use or sale.\n\nExamples: Manufacturing plants, power facilities, inventories requiring substantial aging time.\n\nBorrowing costs directly attributable to qualifying assets must be capitalized.",
            howToApproach:
              "Define qualifying asset and provide examples.",
            conceptExplanation:
              "Capitalizing borrowing costs matches financing costs with the asset benefiting from them.",
            category: "Theoretical Questions & Answers",
          },
        ],
      },
      {
        id: "ch5-5-ind-as-36",
        title: '(v) Ind AS 36 "Impairment of Assets"',
        difficulty: "advanced",
        description:
          "Ensuring assets are not carried above recoverable amount",
        keyPoints: [
          "Recoverable amount concept",
          "Value in use vs fair value less costs of disposal",
          "Recognition of impairment loss",
        ],
        example:
          "Example: Impairment Loss = Carrying Amount - Recoverable Amount",
        questions: [
          {
            id: "ch5-5-q1",
            question:
              "Define Recoverable Amount under Ind AS 36.",
            answer:
              "Recoverable amount is the HIGHER of:\n1. Fair Value Less Costs of Disposal (FVLCD)\n2. Value in Use (VIU - present value of future cash flows)\n\nImpairment Loss = Carrying Amount - Recoverable Amount (if positive)",
            howToApproach:
              "Explain both components and the impairment calculation.",
            conceptExplanation:
              "Recoverable amount ensures assets are valued at what they are worth through sale or use.",
            category: "Theoretical Questions & Answers",
          },
        ],
      },
      {
        id: "ch5-6-ind-as-38",
        title: '(vi) Ind AS 38 "Intangible Assets"',
        difficulty: "advanced",
        description:
          "Recognition and measurement of intangible assets",
        keyPoints: [
          "Research vs development phase",
          "Recognition criteria",
          "Amortization over useful life",
        ],
        example:
          "Example: Research = Expense; Development (if criteria met) = Capitalize",
        questions: [
          {
            id: "ch5-6-q1",
            question:
              "Distinguish between Research and Development under Ind AS 38.",
            answer:
              "Research Phase:\n• Exploratory activities\n• ALWAYS expensed as incurred\n\nDevelopment Phase:\n• Application of research findings\n• CAPITALIZE if all 6 criteria met (technical feasibility, intention to complete, ability to use/sell, future benefits, resources available, reliable measurement)\n• Otherwise, expense",
            howToApproach:
              "Define both phases and explain treatment.",
            conceptExplanation:
              "Only development costs meeting criteria are capitalized to avoid overstating assets.",
            category: "Theoretical Questions & Answers",
          },
        ],
      },
      {
        id: "ch5-7-ind-as-40",
        title: '(vii) Ind AS 40 "Investment Property"',
        difficulty: "advanced",
        description:
          "Property held for rentals or capital appreciation",
        keyPoints: [
          "Definition of investment property",
          "Distinction from PPE",
          "Fair value model vs cost model",
        ],
        example:
          "Example: Building leased to third party = Investment Property",
        questions: [
          {
            id: "ch5-7-q1",
            question:
              "Define Investment Property as per Ind AS 40.",
            answer:
              "Investment Property is property held to earn rentals or for capital appreciation (or both), rather than for:\n• Use in production/operations (PPE)\n• Sale in ordinary course (Inventory)\n\nKey test: Does it generate cash flows independently of other assets?",
            howToApproach:
              "Define investment property and distinguish from PPE.",
            conceptExplanation:
              "Investment property generates returns independently through rentals, not integrated operations.",
            category: "Theoretical Questions & Answers",
          },
        ],
      },
      {
        id: "ch5-8-ind-as-105",
        title:
          '(viii) Ind AS 105 "Non-current Assets Held for Sale"',
        difficulty: "advanced",
        description:
          "Assets whose carrying amount will be recovered through sale",
        keyPoints: [
          "Criteria for held for sale classification",
          "Measurement at lower of carrying amount and FVLCS",
          "Cessation of depreciation",
        ],
        example:
          "Example: Asset available for immediate sale, highly probable within 12 months",
        questions: [
          {
            id: "ch5-8-q1",
            question:
              "What are the criteria for classifying assets as held for sale?",
            answer:
              "ALL criteria must be met:\n1. Available for immediate sale in present condition\n2. Sale highly probable (management committed, active marketing, expected within 12 months)\n3. Measured at lower of carrying amount and FVLCS\n\nConsequences: Stop depreciation, present separately",
            howToApproach:
              "List all criteria and consequences.",
            conceptExplanation:
              "Strict criteria ensure only assets genuinely being sold are classified as held for sale.",
            category: "Theoretical Questions & Answers",
          },
        ],
      },
      {
        id: "ch5-9-ind-as-19",
        title: '(ix) Ind AS 19 "Employee Benefits"',
        difficulty: "advanced",
        description: "Accounting for employee benefits",
        keyPoints: [
          "Short-term vs post-employment benefits",
          "Defined contribution vs defined benefit plans",
          "Actuarial valuation",
        ],
        example:
          "Example: Gratuity = Defined Benefit; PF = Defined Contribution",
        questions: [
          {
            id: "ch5-9-q1",
            question:
              "Distinguish between Defined Contribution and Defined Benefit Plans.",
            answer:
              "Defined Contribution:\n• Fixed contributions by employer\n• Risk borne by EMPLOYEE\n• Simple accounting\n• Example: Provident Fund\n\nDefined Benefit:\n• Specified benefit promised\n• Risk borne by EMPLOYER\n• Requires actuarial valuation\n• Example: Gratuity, Pension",
            howToApproach:
              "Define both and explain who bears the risk.",
            conceptExplanation:
              "The key difference is who bears the investment and actuarial risk.",
            category: "Theoretical Questions & Answers",
          },
        ],
      },
      {
        id: "ch5-10-ind-as-37",
        title:
          '(x) Ind AS 37 "Provisions, Contingent Liabilities and Contingent Assets"',
        difficulty: "advanced",
        description:
          "Recognition and disclosure of provisions and contingencies",
        keyPoints: [
          "Provision vs contingent liability",
          "Recognition criteria",
          "Measurement at best estimate",
        ],
        example:
          "Example: Probable loss = Provision; Possible loss = Contingent Liability",
        questions: [
          {
            id: "ch5-10-q1",
            question:
              "Distinguish between Provision and Contingent Liability.",
            answer:
              "Provision:\n• Probable outflow (>50%)\n• Reliable estimate available\n• RECOGNIZE in financial statements\n\nContingent Liability:\n• Possible (not probable) OR cannot be measured reliably\n• DO NOT recognize\n• DISCLOSE in notes (unless remote)\n\nContingent Asset:\n• DO NOT recognize\n• Disclose if probable",
            howToApproach:
              "Define each and explain recognition vs disclosure.",
            conceptExplanation:
              "Distinction based on probability and reliability of measurement.",
            category: "Theoretical Questions & Answers",
          },
        ],
      },
    ],
  },
  {
    id: "ch6-items-impacting",
    title:
      "Chapter 6: Ind AS on Items impacting the Financial Statements",
    difficulty: "advanced",
    description:
      "Comprehensive coverage of Ind AS standards related to income taxes and foreign exchange",
    keyPoints: [
      "Ind AS 12 - Income Taxes",
      "Ind AS 21 - The Effects of Changes in Foreign Exchange Rates",
    ],
    example: "Content to be added",
    subchapters: [
      {
        id: "ch6-1-ind-as-12",
        title: '(i) Ind AS 12 "Income Taxes"',
        difficulty: "advanced",
        description:
          "Accounting for current and deferred taxes",
        keyPoints: [
          "Current tax vs deferred tax",
          "Temporary differences - taxable and deductible",
          "Deferred tax assets and liabilities",
          "Recognition and measurement",
          "Tax base concept",
          "Carry forward of losses",
          "Disclosure requirements",
        ],
        example:
          "Example: Deferred Tax\n\nAccounting Depreciation: ₹10 lakhs\nTax Depreciation: ₹15 lakhs\nTemporary Difference: ₹5 lakhs (Deductible)\nTax Rate: 30%\n\nDeferred Tax Asset = ₹5 lakhs × 30% = ₹1.5 lakhs",
        questions: [
          {
            id: "ch6-1-q1",
            question:
              "Distinguish between Current Tax and Deferred Tax as per Ind AS 12. What are temporary differences?",
            answer:
              "Current Tax:\n\nDefinition: Amount of income taxes payable (or recoverable) in respect of taxable profit (or tax loss) for the current period.\n\nCalculation: Based on tax laws enacted/substantively enacted at reporting date\nRecognition: Tax expense for current year based on taxable income\nTiming: Relates to current period only\n\nJournal Entry:\nCurrent Tax Expense          Dr. Amount\n    To Current Tax Payable           Amount\n\nDeferred Tax:\n\nDefinition: Income taxes payable (or recoverable) in future periods in respect of temporary differences and carry forward of unused tax losses/credits.\n\nArises due to: Temporary differences between accounting and tax treatment\nRecognition: Deferred Tax Asset (DTA) or Deferred Tax Liability (DTL)\nTiming: Relates to future periods\n\nTemporary Differences:\n\nDefinition: Differences between carrying amount of asset/liability in financial statements and its tax base.\n\nTypes:\n\n1. Taxable Temporary Differences:\n• Will result in taxable amounts in future when carrying amount is recovered/settled\n• Creates DEFERRED TAX LIABILITY (DTL)\n• Example: Accounting depreciation < Tax depreciation in initial years\n\n2. Deductible Temporary Differences:\n• Will result in deductible amounts in future\n• Creates DEFERRED TAX ASSET (DTA)\n• Example: Provision for doubtful debts not allowed for tax purposes\n\nFormula:\nDeferred Tax = Temporary Difference × Tax Rate\n\nExample:\nBook Value of Asset: ₹100 lakhs\nTax Base: ₹80 lakhs\nTemporary Difference: ₹20 lakhs (Taxable)\nTax Rate: 25%\nDTL = ₹20 lakhs × 25% = ₹5 lakhs",
            howToApproach:
              "Define current tax first, then deferred tax. Explain the concept of temporary differences clearly. Distinguish between taxable and deductible temporary differences. Provide examples for each type. Show the impact on DTA/DTL.",
            conceptExplanation:
              "Current tax is based on taxable profit for the current year, while deferred tax accounts for timing differences that will reverse in future periods. Temporary differences arise because accounting and tax rules differ in timing of recognition.",
            category: "Theoretical Questions & Answers",
          },
          {
            id: "ch6-1-q2",
            question:
              "ABC Ltd purchased machinery for ₹50 lakhs on 1st April 2023. Accounting depreciation 20% SLM, Tax depreciation 40% WDV. Tax rate 30%. Calculate deferred tax for FY 2023-24.",
            answer:
              "Given Data:\nCost of Machinery: ₹50,00,000\nAccounting Depreciation: 20% SLM\nTax Depreciation: 40% WDV\nTax Rate: 30%\n\nStep 1: Calculate Depreciation for FY 2023-24\n\nAccounting Depreciation (SLM):\n= ₹50,00,000 × 20% = ₹10,00,000\n\nTax Depreciation (WDV):\n= ₹50,00,000 × 40% = ₹20,00,000\n\nStep 2: Calculate Carrying Amounts at Year-End\n\nBook Value (Accounting):\n= ₹50,00,000 - ₹10,00,000 = ₹40,00,000\n\nTax Base (for tax purposes):\n= ₹50,00,000 - ₹20,00,000 = ₹30,00,000\n\nStep 3: Calculate Temporary Difference\n\nTemporary Difference = Book Value - Tax Base\n                     = ₹40,00,000 - ₹30,00,000\n                     = ₹10,00,000 (Taxable Temporary Difference)\n\nReason: Book value is higher than tax base. When this asset is recovered in future, taxable income will be higher (less depreciation to claim).\n\nStep 4: Calculate Deferred Tax Liability\n\nDeferred Tax Liability (DTL) = Temporary Difference × Tax Rate\n                              = ₹10,00,000 × 30%\n                              = ₹3,00,000\n\nStep 5: Journal Entries\n\na) For Depreciation:\nDepreciation Expense           Dr. ₹10,00,000\n    To Accumulated Depreciation         ₹10,00,000\n\nb) For Deferred Tax:\nDeferred Tax Expense           Dr. ₹3,00,000\n    To Deferred Tax Liability           ₹3,00,000\n\nPresentation in Financial Statements:\n\nStatement of Profit & Loss:\nDepreciation Expense: ₹10,00,000\nDeferred Tax Expense: ₹3,00,000\n\nStatement of Financial Position:\nNon-Current Liabilities:\nDeferred Tax Liability: ₹3,00,000",
            howToApproach:
              "Calculate both accounting and tax depreciation. Determine book value and tax base at year-end. Calculate temporary difference (book value minus tax base). Identify whether it's taxable or deductible. Calculate deferred tax. Show journal entries and presentation.",
            conceptExplanation:
              "Higher tax depreciation in early years creates a taxable temporary difference. The book value exceeds tax base, meaning less depreciation is available for tax purposes in future, resulting in higher taxable income later. This creates a Deferred Tax Liability.",
            category: "Practical Questions & Answers",
          },
          {
            id: "ch6-1-q3",
            question:
              "Case Study: XYZ Ltd has Accounting Profit ₹100 lakhs, Provision for doubtful debts ₹5 lakhs (not allowed for tax), Entertainment expenses ₹3 lakhs (not allowed), Tax depreciation exceeds book by ₹10 lakhs. Tax rate 25%. Calculate current tax, deferred tax, and total tax expense.",
            answer:
              "Step 1: Calculate Taxable Profit\n\nAccounting Profit: ₹1,00,00,000\nAdd: Provision for Doubtful Debts: ₹5,00,000\nAdd: Entertainment Expenses: ₹3,00,000\nLess: Excess Tax Depreciation: (₹10,00,000)\nTaxable Profit: ₹98,00,000\n\nStep 2: Calculate Current Tax\n\nCurrent Tax = ₹98,00,000 × 25% = ₹24,50,000\n\nStep 3: Identify Temporary Differences\n\n1. Provision for Doubtful Debts: ₹5,00,000 (Deductible)\n   DTA = ₹5,00,000 × 25% = ₹1,25,000\n\n2. Excess Tax Depreciation: ₹10,00,000 (Taxable)\n   DTL = ₹10,00,000 × 25% = ₹2,50,000\n\n3. Entertainment: ₹3,00,000 (Permanent - No deferred tax)\n\nStep 4: Calculate Net Deferred Tax\n\nNet DTL = ₹2,50,000 - ₹1,25,000 = ₹1,25,000\n\nStep 5: Total Tax Expense\n\nCurrent Tax: ₹24,50,000\nDeferred Tax: ₹1,25,000\nTotal Tax: ₹25,75,000",
            howToApproach:
              "Calculate taxable profit from accounting profit. Calculate current tax. Identify temporary vs permanent differences. Calculate DTA and DTL separately. Sum to get total tax expense.",
            conceptExplanation:
              "Permanent differences affect only current tax. Temporary differences create deferred tax because they reverse in future periods.",
            category: "Case Studies",
          },
          {
            id: "ch6-1-q4",
            question:
              "Multiple Choice: DTA on unabsorbed losses should be recognized when: (A) Always (B) Virtually certain of future profits (C) Probable to have future profits (D) Never",
            answer:
              'Correct Answer: (C) Probable to have future profits\n\nExplanation: DTA on losses is recognized only when it is PROBABLE (not virtually certain) that future taxable profits will be available to utilize the losses.\n\nWhy others are wrong:\n(A) Would overstate assets if losses cannot be utilized\n(B) Too strict - Ind AS 12 requires "probable" not "virtually certain"\n(D) Would understate assets when future profits are probable',
            howToApproach:
              'Recall that "probable" (>50%) is the threshold for DTA recognition. Explain why each option is correct or incorrect.',
            conceptExplanation:
              "DTA represents future tax benefits. Recognition requires probability of future profits, balancing prudence with faithful representation.",
            category: "Multiple Choice Questions",
          },
        ],
      },
      {
        id: "ch6-2-ind-as-21",
        title:
          '(ii) Ind AS 21 "The Effects of Changes in Foreign Exchange Rates"',
        difficulty: "advanced",
        description:
          "Accounting for foreign currency transactions and translation",
        keyPoints: [
          "Functional currency vs presentation currency",
          "Foreign currency transactions - initial recognition",
          "Monetary vs non-monetary items",
          "Exchange differences - P&L or OCI",
          "Translation of foreign operations",
        ],
        example:
          "Example: Exchange Difference\n\nSale $10,000 at ₹80 = ₹8,00,000\nReceived at ₹82 = ₹8,20,000\nGain: ₹20,000 in P&L",
        questions: [
          {
            id: "ch6-2-q1",
            question:
              "Define Functional Currency and Presentation Currency as per Ind AS 21. How is functional currency determined?",
            answer:
              "Functional Currency:\nThe currency of the primary economic environment in which the entity operates.\n\nDetermination Factors:\n1. Currency influencing sales prices\n2. Currency influencing costs\n3. Currency of financing activities\n\nPresentation Currency:\nThe currency in which financial statements are presented (management choice).\n\nKey Difference: Functional is based on economic environment; Presentation is management choice.",
            howToApproach:
              "Define functional currency with determination factors. Define presentation currency. Highlight the key distinction.",
            conceptExplanation:
              "Functional currency reflects economic reality; presentation currency is about reporting convenience.",
            category: "Theoretical Questions & Answers",
          },
          {
            id: "ch6-2-q2",
            question:
              "ABC Ltd purchased machinery from USA for $100,000 on 1st Oct (₹82/$). Paid 31st Dec (₹83/$). Record entries.",
            answer:
              "1st Oct 2023:\nMachinery Dr. ₹82,00,000\n    To Creditor ₹82,00,000\n\n31st Dec 2023:\nCreditor Dr. ₹82,00,000\nExchange Loss Dr. ₹1,00,000\n    To Bank ₹83,00,000\n\nKey: Machinery stays at ₹82 lakhs (non-monetary). Exchange loss on creditor (monetary) = ₹1 lakh.",
            howToApproach:
              "Record at transaction date rate. Calculate exchange difference on payment. Non-monetary items not retranslated.",
            conceptExplanation:
              "Non-monetary items stay at historical rate. Monetary items retranslated with differences to P&L.",
            category: "Practical Questions & Answers",
          },
          {
            id: "ch6-2-q3",
            question:
              "Case Study: Export sales $50,000 on 1st Jan (₹82/$). Received $30,000 on 28th Feb (₹83/$). Year-end 31st Mar (₹84/$). Calculate exchange gains.",
            answer:
              "1st Jan: Sales ₹41,00,000\n\n28th Feb Receipt:\nCash ₹24,90,000\nReceivable settled ₹24,60,000\nGain: ₹30,000\n\n31st Mar Restatement:\nOutstanding $20,000 at ₹84 = ₹16,80,000\nCarrying amount ₹16,40,000\nGain: ₹40,000\n\nTotal FY Gain: ₹70,000 in P&L",
            howToApproach:
              "Calculate gain on each receipt. Retranslate outstanding at year-end. Sum total gains for the period.",
            conceptExplanation:
              "Trade receivables are monetary items retranslated at each reporting and settlement date with gains/losses to P&L.",
            category: "Case Studies",
          },
          {
            id: "ch6-2-q4",
            question:
              "Multiple Choice: Which exchange difference goes to OCI? (A) Monetary settled (B) Monetary outstanding (C) Non-monetary at FV (D) Translation of foreign operation",
            answer:
              "Correct Answer: (D) Translation of foreign operation\n\nExplanation: Translation differences for foreign operations go to OCI (FCTR) because they are not realized and arise only for consolidation presentation.\n\n(A), (B), (C) all go to P&L (or follow the item's measurement basis).",
            howToApproach:
              "Recall the general rule (P&L) and the key exception (foreign operation translation to OCI).",
            conceptExplanation:
              "Translation differences are not transactional or realized, hence OCI. Reclassified to P&L on disposal of foreign operation.",
            category: "Multiple Choice Questions",
          },
        ],
      },
    ],
  },
  {
    id: "ch7-disclosures",
    title:
      "Chapter 7: Ind AS on Disclosures in the Financial Statements",
    difficulty: "advanced",
    description:
      "Comprehensive coverage of disclosure requirements for related parties, earnings per share, and operating segments",
    keyPoints: [
      "Ind AS 24 - Related Party Disclosures",
      "Ind AS 33 - Earnings per Share",
      "Ind AS 108 - Operating Segments",
    ],
    example: "Content to be added",
    subchapters: [
      {
        id: "ch7-1-ind-as-24",
        title: '(i) Ind AS 24 "Related Party Disclosures"',
        difficulty: "advanced",
        description:
          "Disclosure requirements for related party relationships and transactions",
        keyPoints: [
          "Definition of related parties",
          "Key Management Personnel (KMP)",
          "Close family members",
          "Related party transactions",
          "Disclosure requirements",
        ],
        example:
          "Example: Related Parties - Parent, Subsidiaries, KMP, Close family members",
        questions: [
          {
            id: "ch7-1-q1",
            question:
              "Define Related Party as per Ind AS 24. Who are Key Management Personnel (KMP) and close family members?",
            answer:
              "Related Party: A person or entity related to the reporting entity.\n\nKMP: Persons with authority for planning, directing, and controlling activities (MD, CEO, CFO, Directors).\n\nClose Family Members: Spouse, children, dependents who may influence or be influenced.",
            howToApproach:
              "Define related party broadly. Define KMP with examples. Define close family members with inclusions and exclusions.",
            conceptExplanation:
              "Related party disclosure ensures transparency as transactions may not be at arm's length.",
            category: "Theoretical Questions & Answers",
          },
          {
            id: "ch7-1-q2",
            question:
              "ABC Ltd: Sale to subsidiary ₹50 lakhs, Rent to MD ₹12 lakhs, Salary to CFO ₹25 lakhs, Loan from parent ₹100 lakhs at 8%. Prepare disclosure.",
            answer:
              "Related Party Transactions:\n\n• Sale to Subsidiary: ₹50 lakhs\n• Rent to MD: ₹12 lakhs\n• Remuneration to CFO: ₹25 lakhs\n• Loan from Parent: ₹100 lakhs at 8% (Interest ₹8 lakhs)\n\nOutstanding: Loan Payable ₹100 lakhs",
            howToApproach:
              "List all related parties. Show transactions in tabular format. Disclose terms and conditions.",
            conceptExplanation:
              "Comprehensive disclosure enables users to assess financial effects of related party relationships.",
            category: "Practical Questions & Answers",
          },
          {
            id: "ch7-1-q3",
            question:
              "Case Study: XYZ Ltd has complex related party transactions with parent, subsidiary, associate, and KMP. Prepare comprehensive disclosure.",
            answer:
              "Classify by relationship: Parent, Subsidiary, Associate, KMP. Show all transactions, outstanding balances, KMP compensation breakdown, terms and conditions.",
            howToApproach:
              "Group by category. Create detailed tables. Include reconciliations and notes about arm's length pricing.",
            conceptExplanation:
              "Proper classification and comprehensive disclosure ensure transparency.",
            category: "Case Studies",
          },
          {
            id: "ch7-1-q4",
            question:
              "MCQ: Which is NOT a related party transaction? (A) Sale to subsidiary (B) Rent to spouse of MD (C) Purchase from customer (10% of sales) (D) Dividend to parent",
            answer:
              "Answer: (C) Purchase from a customer\n\nA customer is not automatically a related party unless they have control, joint control, or significant influence.",
            howToApproach:
              "Test each option against related party definition. Normal customer relationship ≠ related party.",
            conceptExplanation:
              "Not all significant relationships create related party status - must meet control/influence criteria.",
            category: "Multiple Choice Questions",
          },
        ],
      },
      {
        id: "ch7-2-ind-as-33",
        title: '(ii) Ind AS 33 "Earnings per Share"',
        difficulty: "advanced",
        description:
          "Calculation and presentation of earnings per share",
        keyPoints: [
          "Basic EPS vs Diluted EPS",
          "Weighted average shares",
          "Dilutive potential equity shares",
          "Bonus and rights issue adjustments",
        ],
        example:
          "Basic EPS = (Profit - Pref Div) / Weighted Avg Shares",
        questions: [
          {
            id: "ch7-2-q1",
            question:
              "Distinguish Basic EPS and Diluted EPS. What are dilutive potential equity shares?",
            answer:
              "Basic EPS = Actual profit / Actual weighted avg shares\n\nDiluted EPS = Adjusted profit / (Actual + Potential shares)\n\nPotential shares: Convertible debentures, options, warrants. Include only if dilutive (reduce EPS).",
            howToApproach:
              "Define both. Explain dilutive vs anti-dilutive. List types of potential shares.",
            conceptExplanation:
              "Diluted EPS shows worst-case scenario if all convertibles are converted.",
            category: "Theoretical Questions & Answers",
          },
          {
            id: "ch7-2-q2",
            question:
              "ABC Ltd: 10 lakh shares, issued 2 lakh on 1st July, Bonus 1:5 on 1st Jan. Profit ₹60 lakhs. Calculate Basic EPS.",
            answer:
              "Bonus factor = 1.2\n\nPeriod 1 (Apr-Jun): 10L × 1.2 × 3/12 = 3L\nPeriod 2 (Jul-Dec): 12L × 1.2 × 6/12 = 7.2L\nPeriod 3 (Jan-Mar): 14.4L × 3/12 = 3.6L\nTotal = 13.8L shares\n\nBasic EPS = ₹60L / 13.8L = ₹4.35",
            howToApproach:
              "Calculate bonus factor. Apply retrospectively to pre-bonus shares. Calculate weighted average.",
            conceptExplanation:
              "Bonus issue treated as if it occurred at the beginning (no new resources).",
            category: "Practical Questions & Answers",
          },
          {
            id: "ch7-2-q3",
            question:
              "Case Study: Calculate Basic and Diluted EPS with convertible debentures and preference shares.",
            answer:
              "Basic EPS = ₹7.80. Test each instrument for dilution. Include only dilutive ones. Diluted EPS = ₹7.71.",
            howToApproach:
              "Calculate Basic EPS. Test incremental EPS for each instrument. Include if dilutive.",
            conceptExplanation:
              "Anti-dilutive items excluded to show worst-case EPS.",
            category: "Case Studies",
          },
          {
            id: "ch7-2-q4",
            question:
              "MCQ: Rights issue 1:10 at ₹50 (market ₹60). Calculate Basic EPS with proper TERP adjustment.",
            answer:
              "Answer: (B) ₹4.76\n\nTERP = ₹59.09. Adjustment factor = 1.0154. Apply to pre-rights shares.",
            howToApproach:
              "Calculate TERP. Determine adjustment factor. Apply weighted average.",
            conceptExplanation:
              "Rights issue has bonus element (discount) requiring retrospective adjustment.",
            category: "Multiple Choice Questions",
          },
        ],
      },
      {
        id: "ch7-3-ind-as-108",
        title: '(iii) Ind AS 108 "Operating Segments"',
        difficulty: "advanced",
        description:
          "Segment reporting for diversified entities",
        keyPoints: [
          "Operating segment definition",
          "Reportable segments criteria",
          "CODM concept",
          "Quantitative thresholds (10% tests)",
          "Segment disclosures",
        ],
        example:
          "Operating Segment = Component reviewed by CODM with discrete financial info",
        questions: [
          {
            id: "ch7-3-q1",
            question:
              "Define Operating Segment and Reportable Segment. What is CODM?",
            answer:
              "Operating Segment: Component that earns revenues, reviewed by CODM, with discrete financial info.\n\nReportable Segment: Operating segment meeting 10% tests (revenue, profit, or assets).\n\nCODM: Function that allocates resources and assesses performance.",
            howToApproach:
              "Define operating segment with 3 criteria. Define reportable with 10% tests. Explain CODM function.",
            conceptExplanation:
              "Segments reflect how management views the business (management approach).",
            category: "Theoretical Questions & Answers",
          },
          {
            id: "ch7-3-q2",
            question:
              "ABC Ltd has 4 segments. Apply 10% tests to identify reportable segments.",
            answer:
              "Revenue test: 10% of ₹1,400 = ₹140\nProfit test: 10% of ₹170 = ₹17\nAssets test: 10% of ₹2,700 = ₹270\n\nAll segments qualify.",
            howToApproach:
              "Calculate thresholds. Test each segment against each threshold.",
            conceptExplanation:
              "10% tests ensure only significant segments are disclosed.",
            category: "Practical Questions & Answers",
          },
          {
            id: "ch7-3-q3",
            question:
              "Case Study: Prepare comprehensive segment disclosure with reconciliations.",
            answer:
              "Show segment revenue, profit, assets. Reconcile to entity totals. Include unallocated items, entity-wide disclosures.",
            howToApproach:
              "Present in tabular format. Show reconciliations. Add comprehensive notes.",
            conceptExplanation:
              "Reconciliations connect segment data to financial statements.",
            category: "Case Studies",
          },
          {
            id: "ch7-3-q4",
            question:
              "MCQ: Which is NOT required? (A) Segment revenue (B) Segment profit (C) Segment cash flows (D) Segment assets if reviewed by CODM",
            answer:
              "Answer: (C) Segment cash flows\n\nInd AS 108 does not require segment cash flows as cash is managed centrally.",
            howToApproach:
              "Recall management approach - disclose what CODM reviews. Cash flows typically not reviewed by segment.",
            conceptExplanation:
              "Cash is fungible and managed centrally, making segment allocation arbitrary.",
            category: "Multiple Choice Questions",
          },
        ],
      },
    ],
  },
  {
    id: "ch8-ind-as-115",
    title:
      "Chapter 8: Ind AS 115 – Revenue from Contracts with Customers",
    difficulty: "advanced",
    description: "Content to be added",
    keyPoints: ["Content to be added"],
    example: "Content to be added",
  },
  {
    id: "ch9-other-ind-as",
    title: "Chapter 9: Other Indian Accounting Standards",
    difficulty: "advanced",
    description:
      "Comprehensive coverage of accounting for government grants, share-based payments, and agriculture",
    keyPoints: [
      "Ind AS 20 - Accounting for Government Grants",
      "Ind AS 102 - Share Based Payment",
      "Ind AS 41 - Agriculture",
    ],
    example: "Content to be added",
    subchapters: [
      {
        id: "ch9-1-ind-as-20",
        title:
          '(i) Ind AS 20 "Accounting for Government Grants and Disclosure of Government Assistance"',
        difficulty: "advanced",
        description:
          "Accounting treatment and disclosure of government grants",
        keyPoints: [
          "Definition of government grants",
          "Recognition criteria",
          "Capital grants vs revenue grants",
          "Presentation approaches",
          "Repayment of grants",
        ],
        example:
          "Example: Capital Grant - Deferred Income approach or Deduction approach",
        questions: [
          {
            id: "ch9-1-q1",
            question:
              "Define Government Grants. Distinguish between Capital Grants and Revenue Grants. What are the recognition criteria?",
            answer:
              "Government Grants: Assistance by government in transfers of resources for compliance with conditions.\n\nRecognition: When reasonable assurance that (a) conditions will be met, and (b) grant will be received.\n\nCapital Grants: For purchasing fixed assets. Recognized over asset life (deferred income or asset deduction).\n\nRevenue Grants: For revenue expenses. Recognized when related costs incurred.",
            howToApproach:
              "Define grants. State recognition criteria. Distinguish capital vs revenue with presentation options.",
            conceptExplanation:
              "Grants are assistance, not revenue. Matching principle ensures benefit recognized with related costs.",
            category: "Theoretical Questions & Answers",
          },
          {
            id: "ch9-1-q2",
            question:
              "Grant ₹50 lakhs for machinery ₹200 lakhs (10-year life). Show BOTH income and deduction approaches.",
            answer:
              "Income Approach:\nMachinery: ₹200 lakhs\nDeferred Grant: ₹50 lakhs (liability)\nAnnual: Depreciation ₹20L, Grant amortization ₹5L\nNet P&L impact: ₹15 lakhs\n\nDeduction Approach:\nMachinery (net): ₹150 lakhs\nAnnual Depreciation: ₹15 lakhs\nNo separate grant income\n\nSame net P&L impact.",
            howToApproach:
              "Show both methods. Calculate depreciation and amortization. Verify same net impact.",
            conceptExplanation:
              "Both approaches spread grant benefit over asset life. Choice is policy decision.",
            category: "Practical Questions & Answers",
          },
          {
            id: "ch9-1-q3",
            question:
              "Case Study: Multiple grants (capital, export, training) with repayment. Show complete accounting.",
            answer:
              "Record each grant type appropriately. Capital grant as deferred income. Revenue grants as income.\n\nFor repayment: Adjust against deferred income balance. Recalculate future amortization.\n\nShow movement schedule and disclosures.",
            howToApproach:
              "Categorize grants. Show all entries. Handle repayment by reducing deferred income. Disclose comprehensively.",
            conceptExplanation:
              "Different grant types have different recognition patterns. Repayment treated as revision of estimate.",
            category: "Case Studies",
          },
          {
            id: "ch9-1-q4",
            question:
              "MCQ: Which is NOT a government grant? (A) Machinery subsidy (B) Export incentive (C) Tax holiday (D) Free land",
            answer:
              "Answer: (C) Tax holiday\n\nTax benefits excluded from Ind AS 20. Covered by Ind AS 12.\n\nOthers are grants: (A) Capital grant, (B) Revenue grant, (D) Non-monetary grant.",
            howToApproach:
              "Identify exclusion for tax benefits. Tax benefits work through tax calculation, not resource transfer.",
            conceptExplanation:
              "Tax benefits are NOT transfers of resources. They are resources not taken. Different from grants.",
            category: "Multiple Choice Questions",
          },
        ],
      },
      {
        id: "ch9-2-ind-as-102",
        title: '(ii) Ind AS 102 "Share Based Payment"',
        difficulty: "advanced",
        description:
          "Accounting for share-based payment transactions",
        keyPoints: [
          "Equity-settled vs cash-settled",
          "Grant date, vesting date, exercise date",
          "Fair value measurement",
          "Vesting conditions",
          "Expense recognition",
        ],
        example:
          "Example: ESOP expense = (Options × FV) / Vesting period",
        questions: [
          {
            id: "ch9-2-q1",
            question:
              "Distinguish Equity-Settled and Cash-Settled share-based payments. Explain Grant Date, Vesting Date, and Exercise Date.",
            answer:
              "Equity-Settled: Entity issues equity instruments. Measured at FV at grant date (not remeasured).\n\nCash-Settled: Entity pays cash based on share price. Measured at FV, remeasured each period.\n\nGrant Date: Agreement date.\nVesting Date: Entitlement date (after meeting conditions).\nExercise Date: Option exercise date.",
            howToApproach:
              "Distinguish equity vs cash based on settlement and measurement. Define the three dates clearly.",
            conceptExplanation:
              "Equity-settled creates dilution. Cash-settled creates liability. Measurement differs fundamentally.",
            category: "Theoretical Questions & Answers",
          },
          {
            id: "ch9-2-q2",
            question:
              "10,000 options, FV ₹40, vesting 3 years, expected vesting 90%. Show accounting.",
            answer:
              "Expected options: 9,000\nTotal expense: 9,000 × ₹40 = ₹3,60,000\n\nAnnual expense: ₹1,20,000\n\nEach year:\nESOP Expense Dr. ₹1,20,000\n    To ESOP Reserve ₹1,20,000",
            howToApproach:
              "Calculate total expense using expected vesting. Spread equally over vesting period.",
            conceptExplanation:
              "ESOP expense recognized as services received over vesting period.",
            category: "Practical Questions & Answers",
          },
          {
            id: "ch9-2-q3",
            question:
              "Case Study: Cash-settled SARs with changing fair values.",
            answer:
              "Remeasure liability each period at current FV.\n\nExpense = Cumulative liability × vesting % - Prior balance.\n\nFair value changes impact expense each period.",
            howToApproach:
              "Calculate cumulative liability based on current FV and vesting progress. Adjust for prior balance.",
            conceptExplanation:
              "Cash-settled plans remeasured, reflecting current obligation based on share price.",
            category: "Case Studies",
          },
          {
            id: "ch9-2-q4",
            question:
              "MCQ: Equity-settled FV measured at: (A) Grant date (B) Vesting date (C) Exercise date (D) Each reporting date",
            answer:
              "Answer: (A) Grant date\n\nEquity-settled measured at grant date, NOT remeasured.\n\nCash-settled remeasured at each reporting date.",
            howToApproach:
              "Equity = grant date (fixed). Cash = reporting date (variable).",
            conceptExplanation:
              "Equity instruments fixed at commitment. Cash liability varies with share price.",
            category: "Multiple Choice Questions",
          },
        ],
      },
      {
        id: "ch9-3-ind-as-41",
        title: '(iii) Ind AS 41 "Agriculture"',
        difficulty: "advanced",
        description:
          "Accounting for agricultural activity and biological assets",
        keyPoints: [
          "Biological assets definition",
          "Agricultural produce",
          "Fair value measurement",
          "Recognition criteria",
        ],
        example:
          "Example: Dairy cattle (biological asset) produces milk (agricultural produce)",
        questions: [
          {
            id: "ch9-3-q1",
            question:
              "Define Biological Assets and Agricultural Produce. How are they measured?",
            answer:
              "Biological Asset: Living animal or plant (e.g., cattle, fruit trees).\n\nAgricultural Produce: Harvested product (e.g., milk, fruit).\n\nMeasurement:\nBiological Assets: Fair value less costs to sell (each reporting date).\n\nAgricultural Produce: Fair value less costs to sell at harvest (then becomes inventory).",
            howToApproach:
              "Define both with examples. State measurement at fair value. Distinguish at harvest point.",
            conceptExplanation:
              "Living assets measured at fair value to reflect biological transformation.",
            category: "Theoretical Questions & Answers",
          },
          {
            id: "ch9-3-q2",
            question:
              "Dairy farm: Opening ₹50L (100 cattle), Purchased ₹12L (20 cattle), Closing FV ₹70L. Show accounting.",
            answer:
              "Purchase:\nBiological Assets Dr. ₹12L\n    To Bank ₹12L\n\nCarrying: ₹62L\nClosing FV: ₹70L\nGain: ₹8L\n\nBiological Assets Dr. ₹8L\n    To Gain on FV (P&L) ₹8L",
            howToApproach:
              "Record purchase. Calculate pre-adjustment carrying amount. Compare with FV. Recognize gain/loss.",
            conceptExplanation:
              "Fair value changes reflect biological growth and transformation, recognized in P&L.",
            category: "Practical Questions & Answers",
          },
          {
            id: "ch9-3-q3",
            question:
              "Case Study: Fruit plantation with harvesting.",
            answer:
              "Trees: Biological assets at fair value.\n\nHarvest:\nInventory Dr. [FV - costs to sell]\n    To Agricultural Produce Income\n\nPost-harvest: Inventory (Ind AS 2) at lower of cost and NRV.",
            howToApproach:
              "Measure trees at FV. At harvest, transfer produce to inventory at FV. Then apply inventory accounting.",
            conceptExplanation:
              "Transformation measured until harvest. FV at harvest becomes deemed cost for inventory.",
            category: "Case Studies",
          },
          {
            id: "ch9-3-q4",
            question:
              "MCQ: Agricultural produce measured at: (A) Cost (B) NRV (C) FV less costs to sell at harvest (D) FV each period",
            answer:
              "Answer: (C) Fair value less costs to sell at point of harvest\n\nAt harvest, FV - costs becomes deemed cost. Then Ind AS 2 applies (lower of cost and NRV).",
            howToApproach:
              "Produce measured at harvest. This FV becomes cost for inventory accounting.",
            conceptExplanation:
              "Harvest completes agricultural transformation. FV at that point is most relevant measure.",
            category: "Multiple Choice Questions",
          },
        ],
      },
    ],
  },
  {
    id: "ch10-financial-instruments",
    title:
      "Chapter 10: Accounting and Reporting of Financial Instruments",
    difficulty: "advanced",
    description: "Content to be added",
    keyPoints: ["Content to be added"],
    example: "Content to be added",
  },
  {
    id: "ch11-ind-as-103",
    title: "Chapter 11: Ind AS 103 – Business Combinations",
    difficulty: "advanced",
    description: "Content to be added",
    keyPoints: ["Content to be added"],
    example: "Content to be added",
  },
  {
    id: "ch12-consolidated",
    title:
      "Chapter 12: Consolidated and Separate Financial Statements of Group Entities",
    difficulty: "advanced",
    description: "Content to be added",
    keyPoints: ["Content to be added"],
    example: "Content to be added",
  },
  {
    id: "ch13-ind-as-101",
    title:
      "Chapter 13: Ind AS 101 – First Time Adoption of Ind AS",
    difficulty: "advanced",
    description: "Content to be added",
    keyPoints: ["Content to be added"],
    example: "Content to be added",
  },
  {
    id: "ch14-analysis",
    title: "Chapter 14: Analysis of Financial Statements",
    difficulty: "advanced",
    description: "Content to be added",
    keyPoints: ["Content to be added"],
    example: "Content to be added",
  },
  {
    id: "ch15-professional-ethics",
    title:
      "Chapter 15: Professional and Ethical Duty of a Chartered Accountant",
    difficulty: "advanced",
    description: "Content to be added",
    keyPoints: ["Content to be added"],
    example: "Content to be added",
  },
  {
    id: "ch16-accounting-technology",
    title: "Chapter 16: Accounting and Technology",
    difficulty: "advanced",
    description: "Content to be added",
    keyPoints: ["Content to be added"],
    example: "Content to be added",
  },
];
// CA Foundation Paper-3: Quantitative Aptitude - All 18 Chapters
// Part A: Business Mathematics (Chapters 1-8)
// Part B: Logical Reasoning (Chapters 9-12)
// Part C: Statistics (Chapters 13-18)

interface Concept {
  id: string;
  title: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  description: string;
  keyPoints: string[];
  example: string;
  formula?: string;
}

export const caFoundationQuantitativeAptitudeConcepts: Concept[] = [
  // PART A: BUSINESS MATHEMATICS
  {
    id: 'ratio-proportion-indices-log',
    title: 'Chapter 1: Ratio and Proportion, Indices, Logarithms (Part-A)',
    difficulty: 'beginner',
    description: 'Ratio compares quantities. Indices represent repeated multiplication. Logarithms are inverse of exponentials.',
    keyPoints: [
      'Ratio a:b = a/b where b ≠ 0',
      'Proportion: a:b = c:d means ad = bc',
      'Indices: aᵐ × aⁿ = aᵐ⁺ⁿ; aᵐ ÷ aⁿ = aᵐ⁻ⁿ; (aᵐ)ⁿ = aᵐⁿ',
      'Logarithm: If aˣ = N, then logₐN = x',
      'log(AB) = logA + logB; log(A/B) = logA - logB',
      'logₐAⁿ = n logₐA; logₐa = 1; logₐ1 = 0'
    ],
    example: 'Example: If 3:x = 9:15, find x\nad = bc → 3×15 = 9×x → x = 5\n\nIndices: 2³ × 2⁴ = 2⁷ = 128\n\nLogarithm: log₂8 = 3 (because 2³ = 8)',
    formula: 'ad = bc; aᵐ × aⁿ = aᵐ⁺ⁿ; logₐN = x ⟺ aˣ = N'
  },
  {
    id: 'equations',
    title: 'Chapter 2: Equations (Part-A)',
    difficulty: 'beginner',
    description: 'Equations are mathematical statements with equal sign. Linear and quadratic equations are fundamental in business mathematics.',
    keyPoints: [
      'Linear Equation: ax + b = 0, one variable, degree 1',
      'Quadratic Equation: ax² + bx + c = 0, degree 2',
      'Quadratic Formula: x = [-b ± √(b² - 4ac)] / 2a',
      'Discriminant D = b² - 4ac determines nature of roots',
      'D > 0: Two real distinct roots; D = 0: Equal roots; D < 0: No real roots',
      'Simultaneous Equations: Two equations solved together'
    ],
    example: 'Example: Solve x² - 5x + 6 = 0\n\nUsing factorization:\n(x - 2)(x - 3) = 0\nx = 2 or x = 3\n\nUsing formula:\nx = [5 ± √(25-24)] / 2 = [5 ± 1] / 2\nx = 3 or x = 2',
    formula: 'x = [-b ± √(b² - 4ac)] / 2a'
  },
  {
    id: 'linear-inequalities',
    title: 'Chapter 3: Linear Inequalities (Part-A)',
    difficulty: 'intermediate',
    description: 'Inequalities show relationship using <, >, ≤, ≥ symbols instead of equality. Important for optimization problems.',
    keyPoints: [
      'Inequality symbols: < (less than), > (greater than), ≤, ≥',
      'Adding/subtracting same number: inequality unchanged',
      'Multiplying/dividing by positive: inequality unchanged',
      'Multiplying/dividing by negative: inequality reverses',
      'Solution is a range of values, not single value',
      'Graphical representation on number line'
    ],
    example: 'Example: Solve 3x - 5 < 10\n\n3x < 15\nx < 5\n\nSolution: All values less than 5\n\nExample 2: -2x > 6\nx < -3 (inequality reversed when dividing by -2)',
    formula: 'ax + b < c → x < (c - b)/a'
  },
  {
    id: 'mathematics-of-finance',
    title: 'Chapter 4: Mathematics of Finance (Part-A)',
    difficulty: 'intermediate',
    description: 'Financial mathematics includes Simple Interest, Compound Interest, annuities, EMI, and present/future value calculations.',
    keyPoints: [
      'Simple Interest: SI = (P × R × T) / 100',
      'Compound Interest: Amount = P(1 + r/100)ⁿ; CI = Amount - P',
      'Effective Rate when compounded multiple times per year',
      'Annuity: Series of equal payments at regular intervals',
      'Present Value: Current worth of future sum',
      'Future Value: Value of current sum at future date',
      'EMI calculation for loans'
    ],
    example: 'Example: ₹10,000 at 10% for 2 years\n\nSimple Interest:\nSI = (10,000 × 10 × 2) / 100 = ₹2,000\n\nCompound Interest:\nAmount = 10,000(1.1)² = ₹12,100\nCI = 12,100 - 10,000 = ₹2,100\n\nDifference = ₹100',
    formula: 'SI = PRT/100; A = P(1+r)ⁿ; CI = P[(1+r)ⁿ - 1]'
  },
  {
    id: 'permutations-combinations',
    title: 'Chapter 5: Basic Concepts of Permutations and Combinations (Part-A)',
    difficulty: 'intermediate',
    description: 'Permutations: arrangements where order matters. Combinations: selections where order does not matter.',
    keyPoints: [
      'Permutation: Arrangement where order matters',
      'ⁿPᵣ = n! / (n-r)! = n(n-1)(n-2)...(n-r+1)',
      'Combination: Selection where order does not matter',
      'ⁿCᵣ = n! / [r!(n-r)!]',
      'ⁿCᵣ = ⁿCₙ₋ᵣ (symmetry property)',
      'n! = n × (n-1) × (n-2) × ... × 2 × 1',
      '0! = 1 by definition'
    ],
    example: 'Example: From 5 people, select 3 for committee\n\nCombination (order does not matter):\n⁵C₃ = 5!/(3!×2!) = (5×4)/(2×1) = 10\n\nIf positions matter (President, VP, Secretary):\nPermutation: ⁵P₃ = 5×4×3 = 60',
    formula: 'ⁿPᵣ = n!/(n-r)!; ⁿCᵣ = n!/[r!(n-r)!]'
  },
  {
    id: 'sequence-series-ap-gp',
    title: 'Chapter 6: Sequence and Series – AP and GP (Part-A)',
    difficulty: 'intermediate',
    description: 'Arithmetic Progression (AP) has constant difference. Geometric Progression (GP) has constant ratio.',
    keyPoints: [
      'AP: a, a+d, a+2d,... where d is common difference',
      'AP nth term: aₙ = a + (n-1)d',
      'AP sum: Sₙ = (n/2)[2a + (n-1)d] = (n/2)(first + last)',
      'GP: a, ar, ar²,... where r is common ratio',
      'GP nth term: aₙ = arⁿ⁻¹',
      'GP sum: Sₙ = a(rⁿ - 1)/(r - 1) when r ≠ 1',
      'Infinite GP sum: S∞ = a/(1-r) when |r| < 1'
    ],
    example: 'Example: AP 2, 5, 8, 11,...\na = 2, d = 3\n10th term = 2 + 9×3 = 29\nSum of 10 terms = (10/2)[2×2 + 9×3] = 5×31 = 155\n\nGP: 2, 6, 18,...\na = 2, r = 3\n5th term = 2×3⁴ = 162\nSum of 5 terms = 2(3⁵-1)/(3-1) = 2×242/2 = 242',
    formula: 'AP: aₙ=a+(n-1)d, Sₙ=n/2[2a+(n-1)d]; GP: aₙ=arⁿ⁻¹, Sₙ=a(rⁿ-1)/(r-1)'
  },
  {
    id: 'sets-relations-functions',
    title: 'Chapter 7: Sets, Relations, Functions, Limits, Continuity (Part-A)',
    difficulty: 'advanced',
    description: 'Sets are collections of objects. Relations connect elements. Functions are special relations. Limits and continuity form calculus foundation.',
    keyPoints: [
      'Set: Collection of distinct objects. Notation: A = {1, 2, 3}',
      'Union (A ∪ B), Intersection (A ∩ B), Difference (A - B), Complement (A\')',
      'Relation: Set of ordered pairs from set A to set B',
      'Function: Each input has exactly one output, f: A → B',
      'Domain: Set of all inputs; Range: Set of all outputs',
      'Limit: lim(x→a) f(x) = L as x approaches a',
      'Continuity: Function continuous if no breaks, jumps, or holes'
    ],
    example: 'Example: A = {1,2,3}, B = {2,3,4}\nA ∪ B = {1,2,3,4}\nA ∩ B = {2,3}\nA - B = {1}\n\nFunction: f(x) = 2x + 1\nf(3) = 7, f(5) = 11\n\nLimit: lim(x→2) x² = 4',
    formula: 'n(A ∪ B) = n(A) + n(B) - n(A ∩ B)'
  },
  {
    id: 'calculus-applications',
    title: 'Chapter 8: Differential and Integral Calculus Applications (Part-A)',
    difficulty: 'advanced',
    description: 'Differentiation finds rate of change. Integration finds area under curve. Both applied extensively in business and economics.',
    keyPoints: [
      'Differentiation: dy/dx represents rate of change of y with respect to x',
      'Power rule: d/dx(xⁿ) = nxⁿ⁻¹',
      'Product rule: d/dx(uv) = u(dv/dx) + v(du/dx)',
      'Maxima/Minima: Find critical points where dy/dx = 0',
      'Marginal Cost: MC = dC/dQ (derivative of total cost)',
      'Marginal Revenue: MR = dR/dQ (derivative of total revenue)',
      'Integration: Reverse of differentiation, ∫xⁿdx = xⁿ⁺¹/(n+1) + C'
    ],
    example: 'Example: Cost function C = 100 + 5Q + 2Q²\n\nMarginal Cost:\nMC = dC/dQ = 5 + 4Q\nAt Q = 10, MC = 5 + 40 = 45\n\nIntegration:\n∫x²dx = x³/3 + C\n∫(3x² + 2x)dx = x³ + x² + C',
    formula: 'd/dx(xⁿ) = nxⁿ⁻¹; ∫xⁿdx = xⁿ⁺¹/(n+1) + C (n ≠ -1)'
  },
  
  // PART B: LOGICAL REASONING
  {
    id: 'number-series',
    title: 'Chapter 9: Number Series (Part-B)',
    difficulty: 'beginner',
    description: 'Find patterns in number sequences to identify missing or next numbers. Tests logical thinking and pattern recognition.',
    keyPoints: [
      'Arithmetic Series: Constant difference between consecutive terms',
      'Geometric Series: Constant ratio between consecutive terms',
      'Perfect Squares: 1, 4, 9, 16, 25, 36, 49, 64,...',
      'Perfect Cubes: 1, 8, 27, 64, 125, 216,...',
      'Prime Numbers: 2, 3, 5, 7, 11, 13, 17, 19, 23,...',
      'Fibonacci: Each term is sum of previous two',
      'Mixed patterns: Combination of operations'
    ],
    example: 'Example 1: 2, 5, 10, 17, 26, ?\nDifferences: +3, +5, +7, +9\nPattern: Adding consecutive odd numbers\nNext: +11, so 26 + 11 = 37\n\nExample 2: 1, 4, 9, 16, 25, ?\nPattern: Perfect squares (1², 2², 3², 4², 5²)\nNext: 6² = 36',
    formula: 'Identify the pattern → Apply to find next/missing term'
  },
  {
    id: 'coding-decoding-odd-man',
    title: 'Chapter 10: Coding Decoding and Odd Man Out (Part-B)',
    difficulty: 'beginner',
    description: 'Coding assigns patterns to words/numbers. Odd man out finds the element that does not fit the pattern.',
    keyPoints: [
      'Letter Shift: Each letter shifted by fixed positions in alphabet',
      'Reverse Coding: Word or letters written in reverse order',
      'Number Coding: Letters assigned specific number values',
      'Odd Man Out: Find element different from others in group',
      'Analyze properties: Even/odd, prime, perfect squares, multiples',
      'Look for common patterns or categories'
    ],
    example: 'Example 1: If CAT → ECV, then DOG → ?\nPattern: C→E (+2), A→C (+2), T→V (+2)\nApply: D→F (+2), O→Q (+2), G→I (+2)\nAnswer: DOG → FQI\n\nExample 2: Odd Man Out\n2, 4, 6, 9, 10\nAnswer: 9 (only odd number, others are even)',
    formula: 'Identify coding pattern → Apply systematically'
  },
  {
    id: 'direction-sense-test',
    title: 'Chapter 11: Direction Sense Test (Part-B)',
    difficulty: 'intermediate',
    description: 'Problems involving cardinal directions (N, S, E, W) to find final position, direction, or distance from starting point.',
    keyPoints: [
      'Four main directions: North, South, East, West',
      'Four sub-directions: North-East (NE), North-West (NW), South-East (SE), South-West (SW)',
      'Right turn from North → East, from East → South',
      'Left turn from North → West, from West → South',
      'Opposite directions: North ↔ South, East ↔ West',
      'Use Pythagoras theorem to find shortest distance',
      'Draw diagram for complex problems'
    ],
    example: 'Example: Person walks 3 km North, then 4 km East\nFind shortest distance from starting point.\n\nUsing Pythagoras theorem:\nDistance = √(3² + 4²) = √(9 + 16) = √25 = 5 km\n\nDirection from start: North-East',
    formula: 'Shortest Distance = √(horizontal distance² + vertical distance²)'
  },
  {
    id: 'seating-arrangements',
    title: 'Chapter 12: Seating Arrangements (Part-B)',
    difficulty: 'intermediate',
    description: 'Logical problems about arranging people in linear rows or circular formations based on given conditions.',
    keyPoints: [
      'Linear Arrangement: People sitting in a straight row',
      'Circular Arrangement: People sitting around circular/rectangular table',
      'Facing center vs Facing outside (direction matters)',
      'Left/Right depends on facing direction',
      'Read all conditions carefully before starting',
      'Draw clear diagram to visualize arrangement',
      'Eliminate impossible options systematically'
    ],
    example: 'Example: 5 people A, B, C, D, E in a row\nConditions:\n• A is to the left of B\n• C is between A and D\n• E is at the rightmost position\n\nPossible arrangement: A - C - D - B - E\n\nTip: Start with definite positions (like E at rightmost), then apply other conditions.',
    formula: 'Linear arrangements: Use given constraints to determine positions'
  },
  
  // PART C: STATISTICS
  {
    id: 'blood-relations',
    title: 'Chapter 13: Blood Relations (Part-C)',
    difficulty: 'beginner',
    description: 'Problems involving family relationships to determine how individuals are related to each other.',
    keyPoints: [
      'Basic relations: Father, Mother, Son, Daughter, Brother, Sister',
      'Extended family: Uncle, Aunt, Nephew, Niece, Cousin, Grandfather, Grandmother',
      'In-laws: Father-in-law, Mother-in-law, Brother-in-law, Sister-in-law',
      'Same generation: Brother, Sister, Cousin, Spouse',
      'Draw family tree for complex multi-step problems',
      'Paternal uncle = Father\'s brother; Maternal uncle = Mother\'s brother'
    ],
    example: 'Example: A is B\'s sister. B is C\'s father. How is A related to C?\n\nAnalysis:\n• B is C\'s father (B is one generation above C)\n• A is B\'s sister (A and B same generation)\n• Therefore, A is C\'s aunt (father\'s sister)\n\nFamily tree:\n     A    B\n          |\n          C',
    formula: 'Draw family tree to trace relationships accurately'
  },
  {
    id: 'central-tendency-dispersion',
    title: 'Chapter 14: Measures of Central Tendency and Dispersion (Part-C)',
    difficulty: 'intermediate',
    description: 'Central tendency (Mean, Median, Mode) shows center of data. Dispersion (Range, Variance, SD) shows spread of data.',
    keyPoints: [
      'Mean (Arithmetic Average) = Σx / n = Sum of all values / Number of values',
      'Median: Middle value when data arranged in ascending/descending order',
      'For odd n: Median = middle value; For even n: Average of two middle values',
      'Mode: Most frequently occurring value in dataset',
      'Range = Maximum value - Minimum value',
      'Variance (σ²) = Σ(x - x̄)² / n',
      'Standard Deviation (σ) = √Variance'
    ],
    example: 'Example: Data set 10, 15, 20, 20, 25, 30\n\nMean = (10+15+20+20+25+30) / 6 = 120/6 = 20\n\nMedian (even count): (20+20)/2 = 20\n\nMode = 20 (appears twice, most frequent)\n\nRange = 30 - 10 = 20',
    formula: 'Mean = Σx/n; Median = Middle value; Mode = Most frequent; SD = √[Σ(x-x̄)²/n]'
  },
  {
    id: 'probability',
    title: 'Chapter 15: Probability (Part-C)',
    difficulty: 'intermediate',
    description: 'Probability measures likelihood of events occurring. Value ranges from 0 (impossible) to 1 (certain).',
    keyPoints: [
      'Probability P(E) = Number of favorable outcomes / Total number of outcomes',
      '0 ≤ P(E) ≤ 1 for any event E',
      'P(sure/certain event) = 1; P(impossible event) = 0',
      'P(not E) = 1 - P(E) [Complement rule]',
      'Addition Rule: P(A or B) = P(A) + P(B) - P(A and B)',
      'Multiplication Rule: P(A and B) = P(A) × P(B) [for independent events]',
      'Conditional Probability: P(A|B) = P(A and B) / P(B)'
    ],
    example: 'Example 1: Single die roll\nP(getting 3) = 1/6\nP(even number) = 3/6 = 1/2\nP(not 3) = 1 - 1/6 = 5/6\n\nExample 2: Two dice\nP(sum = 7) = 6/36 = 1/6\n(Favorable outcomes: 1-6, 2-5, 3-4, 4-3, 5-2, 6-1)',
    formula: 'P(E) = n(E)/n(S); P(Ā) = 1 - P(A); P(A∪B) = P(A) + P(B) - P(A∩B)'
  },
  {
    id: 'theoretical-distributions',
    title: 'Chapter 16: Theoretical Distributions (Part-C)',
    difficulty: 'advanced',
    description: 'Binomial, Poisson, and Normal distributions are theoretical probability distributions used extensively in statistics.',
    keyPoints: [
      'Binomial Distribution: Fixed trials, two outcomes, P(r successes) = ⁿCᵣ pʳ qⁿ⁻ʳ',
      'Binomial parameters: n (trials), p (success probability), q = 1-p',
      'Binomial: Mean = np, Variance = npq',
      'Poisson Distribution: For rare events, P(r) = (e⁻λ × λʳ) / r!',
      'Poisson parameter: λ (lambda) = average rate',
      'Normal Distribution: Bell-shaped, symmetric around mean',
      'Standard Normal: Mean μ = 0, Standard Deviation σ = 1',
      'Z-score: Z = (X - μ) / σ converts to standard normal'
    ],
    example: 'Example: Binomial - Coin tossed 5 times\nFind P(exactly 3 heads)\n\nn = 5, r = 3, p = 1/2, q = 1/2\nP(3) = ⁵C₃ × (1/2)³ × (1/2)²\n     = 10 × (1/8) × (1/4)\n     = 10/32 = 5/16',
    formula: 'Binomial: P(r) = ⁿCᵣpʳqⁿ⁻ʳ; Poisson: P(r) = e⁻λλʳ/r!; Normal: Z = (X-μ)/σ'
  },
  {
    id: 'correlation-regression',
    title: 'Chapter 17: Correlation and Regression (Part-C)',
    difficulty: 'advanced',
    description: 'Correlation measures strength of relationship between two variables. Regression predicts one variable from another.',
    keyPoints: [
      'Correlation coefficient (r): Measures strength and direction of linear relationship',
      'Range: -1 ≤ r ≤ +1',
      'r = +1: Perfect positive correlation; r = -1: Perfect negative correlation',
      'r = 0: No linear correlation',
      'Positive correlation: Both variables increase/decrease together',
      'Negative correlation: One increases while other decreases',
      'Regression equation: Y = a + bX (line of best fit)',
      'Regression coefficient b = Σ(x-x̄)(y-ȳ) / Σ(x-x̄)²'
    ],
    example: 'Example: Height (X) vs Weight (Y)\nPositive correlation r = +0.85\nAs height increases, weight tends to increase\n\nRegression line: Y = 10 + 0.5X\nPrediction: If Height X = 170 cm\nWeight Y = 10 + 0.5(170) = 10 + 85 = 95 kg',
    formula: 'r = Σ(x-x̄)(y-ȳ) / √[Σ(x-x̄)² × Σ(y-ȳ)²]; Regression: Y = a + bX'
  },
  {
    id: 'index-numbers',
    title: 'Chapter 18: Index Numbers (Part-C)',
    difficulty: 'intermediate',
    description: 'Index numbers measure relative changes in variables (price, quantity, value) over time, with base year = 100.',
    keyPoints: [
      'Index Number = (Current Year Value / Base Year Value) × 100',
      'Base year index always = 100',
      'Price Index: Measures changes in prices over time',
      'Quantity Index: Measures changes in quantities over time',
      'Value Index: Measures changes in total value',
      'Laspeyres Index: Uses base year quantities as weights',
      'Paasche Index: Uses current year quantities as weights',
      'Consumer Price Index (CPI): Measures inflation, cost of living'
    ],
    example: 'Example: Price Index Calculation\n\nBase Year (2020): Price = ₹50\nCurrent Year (2024): Price = ₹65\n\nPrice Index for 2024:\n= (65/50) × 100\n= 1.30 × 100\n= 130\n\nInterpretation: Prices increased by 30% from base year',
    formula: 'Index = (Current Value / Base Value) × 100; CPI measures cost of living changes'
  }
];

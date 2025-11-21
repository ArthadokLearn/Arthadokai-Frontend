export interface Concept {
  id: string;
  title: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  description: string;
  keyPoints: string[];
  example: string;
  formula?: string;
}

export const cmaInterOperationsStrategicManagementConcepts: Concept[] = [
  {
    id: 'cma-i-osm-1',
    title: 'Introduction',
    difficulty: 'intermediate',
    description: 'Overview of operations management, its scope, objectives, and importance in organizational efficiency.',
    keyPoints: [
      'Concept of operations management',
      'Scope and objectives',
      'Operations strategy',
      'Production systems',
      'Service operations'
    ],
    example: 'Operations management involves planning, organizing, and supervising production, manufacturing, or service provision.',
  },
  {
    id: 'cma-i-osm-2',
    title: 'Operations Planning',
    difficulty: 'intermediate',
    description: 'Capacity planning, facility location, layout planning, and production planning.',
    keyPoints: [
      'Capacity planning and measurement',
      'Facility location decisions',
      'Plant layout - product, process, fixed position',
      'Aggregate production planning',
      'Master production schedule'
    ],
    example: 'Facility location is determined by factors like proximity to raw materials, labor availability, and market access.',
  },
  {
    id: 'cma-i-osm-3',
    title: 'Designing of Operational Systems and Control',
    difficulty: 'intermediate',
    description: 'Design of production systems, quality control, and inventory management.',
    keyPoints: [
      'Product and service design',
      'Process design and selection',
      'Quality management systems',
      'Statistical quality control',
      'Inventory control systems'
    ],
    example: 'EOQ model helps in determining the optimal order quantity that minimizes total inventory costs.',
    formula: 'EOQ = √(2 × Annual Demand × Ordering Cost / Holding Cost per unit)'
  },
  {
    id: 'cma-i-osm-4',
    title: 'Application of Operation Research – Production Planning and Control',
    difficulty: 'intermediate',
    description: 'OR techniques including linear programming, transportation, and assignment problems.',
    keyPoints: [
      'Linear programming - Simplex method',
      'Transportation problem',
      'Assignment problem',
      'Sequencing and routing',
      'Network analysis'
    ],
    example: 'Transportation problem aims to determine the optimal way to transport goods from sources to destinations at minimum cost.',
  },
  {
    id: 'cma-i-osm-5',
    title: 'Productivity Management and Control Management',
    difficulty: 'intermediate',
    description: 'Measurement and improvement of productivity, work study, and method study.',
    keyPoints: [
      'Productivity concepts and measurement',
      'Work study - method study and work measurement',
      'Time standards',
      'Productivity improvement techniques',
      'Learning curve'
    ],
    example: 'Productivity is measured as output per unit of input, e.g., units produced per labor hour.',
    formula: 'Productivity = Output / Input'
  },
  {
    id: 'cma-i-osm-6',
    title: 'Project Management, Monitoring and Control',
    difficulty: 'intermediate',
    description: 'Project planning, scheduling using PERT/CPM, and project monitoring techniques.',
    keyPoints: [
      'Project life cycle',
      'Network analysis - PERT and CPM',
      'Critical path determination',
      'Project crashing',
      'Resource allocation and leveling'
    ],
    example: 'Critical path is the longest path in a project network, determining the minimum project completion time.',
    formula: 'Expected Time (PERT) = (Optimistic + 4×Most Likely + Pessimistic) / 6'
  },
  {
    id: 'cma-i-osm-7',
    title: 'Economics of Maintenance and Spares Management',
    difficulty: 'intermediate',
    description: 'Maintenance strategies, replacement decisions, and spare parts management.',
    keyPoints: [
      'Types of maintenance - preventive, breakdown',
      'Maintenance policies',
      'Replacement decisions',
      'Spare parts inventory management',
      'Maintenance cost optimization'
    ],
    example: 'Preventive maintenance reduces unexpected breakdowns but increases maintenance costs.',
  },
  {
    id: 'cma-i-osm-8',
    title: 'Strategic Analysis and Strategic Planning',
    difficulty: 'intermediate',
    description: 'Strategic management process, environmental analysis, and strategic planning.',
    keyPoints: [
      'Strategic management process',
      'Environmental scanning - PESTEL',
      'Industry analysis - Porter\'s Five Forces',
      'SWOT analysis',
      'Mission, vision, and objectives'
    ],
    example: 'SWOT analysis helps organizations identify internal strengths and weaknesses, and external opportunities and threats.',
  },
  {
    id: 'cma-i-osm-9',
    title: 'Formulation and Implementation of Strategy',
    difficulty: 'intermediate',
    description: 'Strategy formulation at corporate, business, and functional levels, and implementation.',
    keyPoints: [
      'Corporate level strategies',
      'Business level strategies - Porter\'s generic strategies',
      'Functional strategies',
      'Strategy implementation',
      'Strategic control and evaluation'
    ],
    example: 'Cost leadership strategy focuses on becoming the lowest cost producer in the industry.',
  },
  {
    id: 'cma-i-osm-10',
    title: 'Digital Strategy',
    difficulty: 'intermediate',
    description: 'Digital transformation, e-business models, and technology-driven strategic initiatives.',
    keyPoints: [
      'Digital transformation concepts',
      'E-business and e-commerce strategies',
      'Digital marketing',
      'Big data and analytics in strategy',
      'Industry 4.0 and emerging technologies'
    ],
    example: 'Digital strategy involves leveraging technology to create competitive advantage and transform business models.',
  }
];

export interface Concept {
  id: string;
  title: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  description: string;
  keyPoints: string[];
  example: string;
  formula?: string;
}

export const csFoundationBusinessManagementEthicsConcepts: Concept[] = [
  {
    id: 'cs-f-bme-1',
    title: 'Planning',
    difficulty: 'beginner',
    description: 'Fundamentals of planning, types of plans, and the planning process in management.',
    keyPoints: [
      'Definition and importance of planning',
      'Types of plans - strategic, tactical, operational',
      'Planning process and steps',
      'Objectives, policies, procedures, and rules',
      'Forecasting and planning',
      'Limitations of planning'
    ],
    example: 'A company sets a 5-year strategic plan to expand into new markets, supported by annual tactical plans.',
  },
  {
    id: 'cs-f-bme-2',
    title: 'Organizing',
    difficulty: 'beginner',
    description: 'Organizational structure, authority relationships, and coordination mechanisms.',
    keyPoints: [
      'Concept of organization',
      'Principles of organization',
      'Organizational structure - line, functional, matrix',
      'Span of control',
      'Centralization vs decentralization',
      'Delegation of authority'
    ],
    example: 'A functional organization groups employees by specialized departments like Finance, HR, and Marketing.',
  },
  {
    id: 'cs-f-bme-3',
    title: 'Human Resource Management',
    difficulty: 'beginner',
    description: 'HR functions including recruitment, selection, training, and performance management.',
    keyPoints: [
      'Importance of HRM',
      'Recruitment and selection process',
      'Training and development',
      'Performance appraisal',
      'Compensation management',
      'Employee retention and motivation'
    ],
    example: 'HRM involves recruiting qualified candidates, conducting interviews, and providing orientation to new employees.',
  },
  {
    id: 'cs-f-bme-4',
    title: 'Direction and Coordination',
    difficulty: 'beginner',
    description: 'Leadership, motivation, communication, and coordination in organizations.',
    keyPoints: [
      'Concept of direction',
      'Leadership styles - autocratic, democratic, laissez-faire',
      'Motivation theories - Maslow, Herzberg, McGregor',
      'Communication process',
      'Coordination and its importance',
      'Barriers to communication'
    ],
    example: 'Democratic leadership involves team members in decision-making, fostering collaboration and commitment.',
  },
  {
    id: 'cs-f-bme-5',
    title: 'Controlling',
    difficulty: 'beginner',
    description: 'Control process, types of control, and control techniques in management.',
    keyPoints: [
      'Concept and importance of control',
      'Control process - setting standards, measuring performance',
      'Types of control - feedforward, concurrent, feedback',
      'Management control techniques',
      'Budgetary control',
      'Management audit'
    ],
    example: 'Budgetary control compares actual expenses with budgeted amounts to identify variances.',
  },
  {
    id: 'cs-f-bme-6',
    title: 'Recent Trends in Management',
    difficulty: 'beginner',
    description: 'Contemporary management practices and emerging trends in business management.',
    keyPoints: [
      'Total Quality Management (TQM)',
      'Six Sigma methodology',
      'Business Process Reengineering (BPR)',
      'Knowledge management',
      'Change management',
      'Digital transformation'
    ],
    example: 'Six Sigma uses DMAIC (Define, Measure, Analyze, Improve, Control) to reduce defects and improve quality.',
  },
  {
    id: 'cs-f-bme-7',
    title: 'Business Ethics',
    difficulty: 'beginner',
    description: 'Ethical principles, corporate social responsibility, and ethical decision-making in business.',
    keyPoints: [
      'Concept of business ethics',
      'Ethical theories and principles',
      'Corporate Social Responsibility (CSR)',
      'Ethical dilemmas in business',
      'Corporate governance and ethics',
      'Whistleblowing and ethical compliance'
    ],
    example: 'A company practicing CSR invests in community development and environmental sustainability initiatives.',
  },
  {
    id: 'cs-f-bme-8',
    title: 'Business Communication',
    difficulty: 'beginner',
    description: 'Communication process, types, barriers, and effective communication strategies.',
    keyPoints: [
      'Communication process and elements',
      'Types of communication - verbal and non-verbal',
      'Oral and written communication',
      'Barriers to communication',
      'Effective listening skills',
      'Communication networks'
    ],
    example: 'Effective communication requires clear encoding of messages, choosing the right medium, and ensuring feedback.',
  },
  {
    id: 'cs-f-bme-9',
    title: 'Essentials of Good English',
    difficulty: 'beginner',
    description: 'Grammar, vocabulary, and language skills for professional communication.',
    keyPoints: [
      'Parts of speech',
      'Tenses and their usage',
      'Active and passive voice',
      'Direct and indirect speech',
      'Common grammatical errors',
      'Vocabulary building'
    ],
    example: 'Active voice: "The manager approved the proposal." Passive voice: "The proposal was approved by the manager."',
  },
  {
    id: 'cs-f-bme-10',
    title: 'Business Correspondence',
    difficulty: 'beginner',
    description: 'Writing business letters, memos, reports, and professional correspondence.',
    keyPoints: [
      'Business letter format and structure',
      'Types of business letters',
      'Memo writing',
      'Report writing',
      'Resume and cover letter',
      'Professional tone and etiquette'
    ],
    example: 'A business letter includes sender address, date, recipient address, salutation, body, closing, and signature.',
  },
  {
    id: 'cs-f-bme-11',
    title: 'Interdepartmental Communication',
    difficulty: 'beginner',
    description: 'Communication between different departments and organizational units.',
    keyPoints: [
      'Importance of interdepartmental communication',
      'Horizontal communication',
      'Coordination mechanisms',
      'Meetings and conferences',
      'Circulars and notices',
      'Cross-functional teams'
    ],
    example: 'Sales and Production departments communicate to align production schedules with customer demand.',
  },
  {
    id: 'cs-f-bme-12',
    title: 'E-Correspondence',
    difficulty: 'beginner',
    description: 'Electronic communication including emails, video conferencing, and digital collaboration.',
    keyPoints: [
      'Email etiquette and best practices',
      'Subject line and message structure',
      'Professional email writing',
      'Video conferencing tools',
      'Digital collaboration platforms',
      'Netiquette and online professionalism'
    ],
    example: 'Professional emails should have clear subject lines, proper salutations, concise content, and appropriate sign-offs.',
  },
  {
    id: 'cs-f-bme-13',
    title: 'Entrepreneurship',
    difficulty: 'beginner',
    description: 'Concept of entrepreneurship, entrepreneur characteristics, and types of entrepreneurs.',
    keyPoints: [
      'Definition of entrepreneurship',
      'Characteristics of entrepreneurs',
      'Types of entrepreneurs',
      'Entrepreneurship vs management',
      'Role in economic development',
      'Entrepreneurial motivation'
    ],
    example: 'Entrepreneurs identify market opportunities, take calculated risks, and create innovative solutions.',
  },
  {
    id: 'cs-f-bme-14',
    title: 'Entrepreneurship – Creativity and Innovation',
    difficulty: 'beginner',
    description: 'Creative thinking, innovation process, and idea generation for entrepreneurs.',
    keyPoints: [
      'Creativity and creative thinking',
      'Sources of ideas',
      'Innovation and its types',
      'Design thinking',
      'Opportunity identification',
      'Product and service innovation'
    ],
    example: 'Design thinking involves empathizing with users, defining problems, ideating solutions, prototyping, and testing.',
  },
  {
    id: 'cs-f-bme-15',
    title: 'Growth and Challenges of Entrepreneurial Ventures',
    difficulty: 'beginner',
    description: 'Stages of venture growth, challenges, and strategies for sustainable entrepreneurship.',
    keyPoints: [
      'Stages of business growth',
      'Challenges faced by entrepreneurs',
      'Funding and financial management',
      'Scaling the business',
      'Risk management',
      'Exit strategies'
    ],
    example: 'Start-ups face challenges like funding constraints, market competition, talent acquisition, and regulatory compliance.',
  },
  {
    id: 'cs-f-bme-16',
    title: 'Social Entrepreneurship',
    difficulty: 'beginner',
    description: 'Social enterprises, impact measurement, and sustainable business models.',
    keyPoints: [
      'Concept of social entrepreneurship',
      'Social vs commercial entrepreneurship',
      'Creating social value',
      'Social enterprise models',
      'Impact measurement',
      'Sustainability and triple bottom line'
    ],
    example: 'Social entrepreneurs address social problems like poverty, education, and healthcare through sustainable business models.',
  },
  {
    id: 'cs-f-bme-17',
    title: 'Government Initiatives for Business Development',
    difficulty: 'beginner',
    description: 'Government schemes, policies, and support systems for business and entrepreneurship.',
    keyPoints: [
      'Startup India initiative',
      'Make in India campaign',
      'MUDRA loan scheme',
      'Skill India mission',
      'Digital India programme',
      'Ease of doing business reforms'
    ],
    example: 'Startup India provides tax benefits, easier compliance, and funding support to registered startups.',
  }
];

import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ChevronLeft, Award, TrendingUp, Trophy, Lock } from 'lucide-react';

interface Level {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  difficulty: string;
}

const levelsByCourse: Record<string, Level[]> = {
  CA: [
    {
      id: 'CA Foundation',
      name: 'CA Foundation',
      description: 'Entry level for CA - Build fundamental knowledge in accounting, law, economics, and mathematics',
      icon: <Award className="w-5 h-5" />,
      difficulty: 'Beginner'
    },
    {
      id: 'CA Inter',
      name: 'CA Intermediate',
      description: 'Advanced concepts in accounting, taxation, auditing, and financial management',
      icon: <TrendingUp className="w-5 h-5" />,
      difficulty: 'Intermediate'
    },
    {
      id: 'CA Final',
      name: 'CA Final',
      description: 'Professional level covering advanced topics and practical training',
      icon: <Trophy className="w-5 h-5" />,
      difficulty: 'Advanced'
    }
  ],
  CMA: [
    {
      id: 'CMA Foundation',
      name: 'CMA Foundation',
      description: 'Foundation level covering basics of accounting, economics, and business laws',
      icon: <Award className="w-5 h-5" />,
      difficulty: 'Beginner'
    },
    {
      id: 'CMA Inter',
      name: 'CMA Intermediate',
      description: 'Cost accounting, financial management, and operational management',
      icon: <TrendingUp className="w-5 h-5" />,
      difficulty: 'Intermediate'
    },
    {
      id: 'CMA Final',
      name: 'CMA Final',
      description: 'Strategic cost management, corporate laws, and advanced financial management',
      icon: <Trophy className="w-5 h-5" />,
      difficulty: 'Advanced'
    }
  ],
  CS: [
    {
      id: 'CS Foundation',
      name: 'CS Foundation',
      description: 'Basic knowledge of business communication, economics, and accounting',
      icon: <Award className="w-5 h-5" />,
      difficulty: 'Beginner'
    },
    {
      id: 'CS Executive',
      name: 'CS Executive',
      description: 'Company law, securities laws, economic & commercial laws, and tax laws',
      icon: <TrendingUp className="w-5 h-5" />,
      difficulty: 'Intermediate'
    },
    {
      id: 'CS Professional',
      name: 'CS Professional',
      description: 'Advanced corporate laws, governance, compliance, and secretarial practice',
      icon: <Trophy className="w-5 h-5" />,
      difficulty: 'Advanced'
    }
  ]
};

interface LevelSelectorProps {
  course: string;
  selectedLevel: string;
  onSelectLevel: (level: string) => void;
  onBack: () => void;
  allowedLevel?: string;
}

export function LevelSelector({ course, selectedLevel, onSelectLevel, onBack, allowedLevel }: LevelSelectorProps) {
  const levels = levelsByCourse[course] || [];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner':
        return 'bg-green-100 text-green-800';
      case 'Intermediate':
        return 'bg-yellow-100 text-yellow-800';
      case 'Advanced':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-gray-900 dark:text-gray-100 mb-2">Select Your Level - {course}</h2>
        <p className="text-gray-600 dark:text-gray-400">
          {allowedLevel 
            ? "Choose the level you're currently preparing for" 
            : "Admin Access: All levels available"}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {levels.map((level) => {
          const isAllowed = !allowedLevel || level.id === allowedLevel;
          const isLocked = !isAllowed;
          
          return (
            <Card
              key={level.id}
              className={`p-6 transition-all ${
                isLocked
                  ? 'opacity-50 cursor-not-allowed'
                  : `cursor-pointer hover:shadow-xl ${
                      selectedLevel === level.id 
                        ? 'ring-2 ring-indigo-600 shadow-lg' 
                        : 'hover:scale-105'
                    }`
              }`}
              onClick={() => isAllowed && onSelectLevel(level.id)}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300 p-3 rounded-lg">
                    {isLocked ? <Lock className="w-5 h-5" /> : level.icon}
                  </div>
                  <div className="flex flex-col gap-1 items-end">
                    <Badge className={getDifficultyColor(level.difficulty)}>
                      {level.difficulty}
                    </Badge>
                    {isLocked && (
                      <Badge variant="secondary" className="text-xs">Locked</Badge>
                    )}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-gray-900 dark:text-gray-100 mb-2">{level.name}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{level.description}</p>
                  {isLocked && (
                    <p className="text-xs text-red-600 dark:text-red-400 mt-2">
                      Access restricted to your registered level
                    </p>
                  )}
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { BookOpen, Calculator, Briefcase, Video } from 'lucide-react';

interface Course {
  id: string;
  name: string;
  fullName: string;
  icon: React.ReactNode;
  color: string;
  description: string;
  levels: string[];
}

const courses: Course[] = [
  {
    id: 'CA',
    name: 'Chartered Accountancy',
    fullName: 'CA',
    icon: <Calculator className="w-6 h-6" />,
    color: 'bg-blue-500',
    description: 'Master accounting, auditing, taxation, and financial management',
    levels: ['CA Foundation', 'CA Inter', 'CA Final']
  },
  {
    id: 'CMA',
    name: 'Cost Accountancy',
    fullName: 'CMA',
    icon: <BookOpen className="w-6 h-6" />,
    color: 'bg-green-500',
    description: 'Specialize in cost management, financial planning, and analysis',
    levels: ['CMA Foundation', 'CMA Inter', 'CMA Final']
  },
  {
    id: 'CS',
    name: 'Company Secretary',
    fullName: 'CS',
    icon: <Briefcase className="w-6 h-6" />,
    color: 'bg-purple-500',
    description: 'Expert in corporate laws, governance, and compliance',
    levels: ['CS Foundation', 'CS Executive', 'CS Professional']
  },
  {
    id: 'KNOWLEDGE_POOL',
    name: 'Knowledge Pool',
    fullName: 'Knowledge Pool',
    icon: <Video className="w-6 h-6" />,
    color: 'bg-orange-500',
    description: 'Democratise knowledge and opportunities',
    levels: []
  }
];

interface CourseSelectorProps {
  selectedCourse: string;
  onSelectCourse: (course: string) => void;
  allowedCourse?: string;
}

export function CourseSelector({ selectedCourse, onSelectCourse, allowedCourse }: CourseSelectorProps) {
  return (
    <div>
      <div className="mb-6">
        <h2 className="text-gray-900 dark:text-gray-100 mb-2">Choose Your Professional Course</h2>
        <p className="text-gray-600 dark:text-gray-400">
          {allowedCourse 
            ? "Select from India's premier professional accounting qualifications" 
            : "Admin Access: All courses available"}
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {courses.map((course) => {
          // Knowledge Pool is always allowed
          const isAllowed = course.id === 'KNOWLEDGE_POOL' || !allowedCourse || course.id === allowedCourse;
          const isLocked = !isAllowed;
          
          return (
            <Card
              key={course.id}
              className={`p-6 transition-all ${
                isLocked 
                  ? 'opacity-50 cursor-not-allowed' 
                  : `cursor-pointer hover:shadow-xl ${
                      selectedCourse === course.id 
                        ? 'ring-2 ring-indigo-600 shadow-lg' 
                        : 'hover:scale-105'
                    }`
              }`}
              onClick={() => isAllowed && onSelectCourse(course.id)}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className={`${course.color} text-white p-3 rounded-lg`}>
                    {course.icon}
                  </div>
                  {selectedCourse === course.id && isAllowed && (
                    <Badge variant="default">Selected</Badge>
                  )}
                  {isLocked && (
                    <Badge variant="secondary">Locked</Badge>
                  )}
                </div>
                
                <div>
                  <h3 className="text-gray-900 dark:text-gray-100 mb-1">{course.name}</h3>
                  <Badge variant="outline" className="mb-3">{course.fullName}</Badge>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{course.description}</p>
                  
                  {course.levels.length > 0 && (
                    <div className="space-y-2">
                      <p className="text-xs text-gray-500 dark:text-gray-400">Levels Available:</p>
                      <div className="flex flex-wrap gap-2">
                        {course.levels.map((level, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {level}
                          </Badge>
                        ))}
                      </div>
                    </div>
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
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { BookOpen, Calculator, Briefcase, Video, Lightbulb, GraduationCap, ArrowLeft } from 'lucide-react';
import { useState } from 'react';
import { Button } from './ui/button';

interface Course {
  id: string;
  name: string;
  fullName: string;
  icon: React.ReactNode;
  color: string;
  description: string;
  levels: string[];
}

interface ContentBlock {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  courses?: Course[];
}

const contentBlocks: ContentBlock[] = [
  {
    id: 'ACADEMIC_CONTENT',
    title: 'Academic Content',
    description: 'Professional accounting qualifications - CA, CMA & CS',
    icon: <GraduationCap className="w-8 h-8" />,
    color: 'bg-gradient-to-br from-blue-500 to-indigo-600',
    courses: [
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
      }
    ]
  },
  {
    id: 'PRACTICAL_CONTENT',
    title: 'Practical Content',
    description: 'Video courses and practical learning from expert instructors',
    icon: <Video className="w-8 h-8" />,
    color: 'bg-gradient-to-br from-orange-500 to-red-600',
    courses: [
      {
        id: 'KNOWLEDGE_POOL',
        name: 'Video Courses',
        fullName: 'Video Courses',
        icon: <Video className="w-6 h-6" />,
        color: 'bg-orange-500',
        description: 'Premium video courses from expert instructors',
        levels: []
      }
    ]
  },
  {
    id: 'CAREER_OPPORTUNITIES',
    title: 'Career Opportunities',
    description: 'Explore job opportunities and build your career',
    icon: <Lightbulb className="w-8 h-8" />,
    color: 'bg-gradient-to-br from-pink-500 to-rose-600',
    courses: [
      {
        id: 'CAREER_OPPORTUNITIES',
        name: 'Career Opportunities',
        fullName: 'Career Opportunities',
        icon: <Lightbulb className="w-6 h-6" />,
        color: 'bg-pink-500',
        description: 'Find internships, jobs, and career guidance',
        levels: []
      }
    ]
  }
];

interface CourseSelectorProps {
  selectedCourse: string;
  onSelectCourse: (course: string) => void;
  allowedCourse?: string;
}

export function CourseSelector({ selectedCourse, onSelectCourse, allowedCourse }: CourseSelectorProps) {
  const [selectedBlock, setSelectedBlock] = useState<string | null>(null);

  // If a block is selected, show its courses
  if (selectedBlock) {
    const block = contentBlocks.find(b => b.id === selectedBlock);
    if (!block || !block.courses) {
      setSelectedBlock(null);
      return null;
    }

    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-gray-900 dark:text-gray-100 mb-2">{block.title}</h2>
            <p className="text-gray-600 dark:text-gray-400">{block.description}</p>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setSelectedBlock(null)}
            className="gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to All Content
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {block.courses.map((course) => {
            const isAlwaysAllowed = course.id === 'KNOWLEDGE_POOL' || course.id === 'CAREER_OPPORTUNITIES';
            const isAllowed = isAlwaysAllowed || !allowedCourse || course.id === allowedCourse;
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

  // Show main content blocks
  return (
    <div className="space-y-6">
      <div className="mb-6">
        <h2 className="text-gray-900 dark:text-gray-100 mb-2">Choose Your Learning Path</h2>
        <p className="text-gray-600 dark:text-gray-400">Select from academic courses, practical content, or career opportunities</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {contentBlocks.map((block) => {
          // For single-item blocks (Practical Content and Career Opportunities), navigate directly
          const hasSingleCourse = block.courses && block.courses.length === 1;
          const singleCourse = hasSingleCourse ? block.courses![0] : null;

          return (
            <Card
              key={block.id}
              className="p-8 cursor-pointer hover:shadow-xl hover:scale-105 transition-all"
              onClick={() => {
                if (hasSingleCourse && singleCourse) {
                  // Navigate directly to the single course
                  onSelectCourse(singleCourse.id);
                } else {
                  // Show courses within this block
                  setSelectedBlock(block.id);
                }
              }}
            >
              <div className="space-y-4">
                <div className={`${block.color} text-white p-4 rounded-lg inline-flex`}>
                  {block.icon}
                </div>
                
                <div>
                  <h3 className="text-gray-900 dark:text-gray-100 mb-2">{block.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{block.description}</p>
                </div>

                {block.courses && block.courses.length > 1 && (
                  <div className="pt-4 border-t dark:border-gray-700">
                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">Includes:</p>
                    <div className="flex flex-wrap gap-2">
                      {block.courses.map((course, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {course.fullName}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
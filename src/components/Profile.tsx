import { useState, useEffect, useMemo } from 'react';
import { UserData } from './Register';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Avatar, AvatarFallback } from './ui/avatar';
import { Separator } from './ui/separator';
import { ScrollArea } from './ui/scroll-area';
import { Button } from './ui/button';
import { Settings } from './Settings';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from './ui/alert-dialog';
import {
  User,
  BookOpen,
  CheckCircle2,
  Trophy,
  TrendingUp,
  Calendar,
  Target,
  Award,
  Flame,
  Star,
  Clock,
  BarChart3,
  GraduationCap,
  Settings as SettingsIcon,
  LogOut,
  Moon,
  Sun,
  ChevronLeft,
} from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';

interface ProfileProps {
  currentUser: UserData;
  allChapters: any[];
  onLogout: () => void;
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
  onUpdateUser: (updates: Partial<UserData>) => void;
  onDeleteAccount: () => void;
  onClearProgress: () => void;
  onClose?: () => void;
}

interface QuizProgress {
  subjectId: string;
  subjectName: string;
  chapterId: string;
  chapterName: string;
  score: number;
  total: number;
  date: string;
}

interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: any;
  unlocked: boolean;
  unlockedDate?: Date;
  progress?: number;
  target?: number;
}

const CHART_COLORS = ['#6366f1', '#8b5cf6', '#ec4899', '#f59e0b', '#10b981'];

export function Profile({ 
  currentUser, 
  allChapters, 
  onLogout, 
  isDarkMode, 
  onToggleDarkMode,
  onUpdateUser,
  onDeleteAccount,
  onClearProgress,
  onClose,
}: ProfileProps) {
  const [studiedSubjects, setStudiedSubjects] = useState<string[]>([]);
  const [quizProgress, setQuizProgress] = useState<QuizProgress[]>([]);
  const [studyStreak, setStudyStreak] = useState(0);
  const [totalStudyDays, setTotalStudyDays] = useState(0);

  // Load user progress data
  useEffect(() => {
    const studied = JSON.parse(localStorage.getItem(`studied_subjects_${currentUser.email}`) || '[]');
    setStudiedSubjects(studied);

    const progress = JSON.parse(localStorage.getItem(`quiz_progress_${currentUser.email}`) || '[]');
    setQuizProgress(progress);

    // Calculate study streak
    const studyDates = [...new Set(progress.map((p: QuizProgress) => p.date))].sort().reverse();
    let streak = 0;
    let currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);

    for (const dateStr of studyDates) {
      const studyDate = new Date(dateStr);
      studyDate.setHours(0, 0, 0, 0);
      const diffTime = currentDate.getTime() - studyDate.getTime();
      const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

      if (diffDays === streak) {
        streak++;
      } else {
        break;
      }
    }
    setStudyStreak(streak);
    setTotalStudyDays(studyDates.length);
  }, [currentUser.email]);

  // Calculate statistics
  const stats = useMemo(() => {
    const totalQuizzes = quizProgress.length;
    const totalScore = quizProgress.reduce((sum, q) => sum + q.score, 0);
    const totalPossible = quizProgress.reduce((sum, q) => sum + q.total, 0);
    const averageScore = totalPossible > 0 ? Math.round((totalScore / totalPossible) * 100) : 0;
    
    // Get unique chapters studied
    const chaptersStudied = new Set(quizProgress.map(q => q.chapterId)).size;
    
    // Calculate best subject
    const subjectScores: { [key: string]: { score: number; total: number; name: string } } = {};
    quizProgress.forEach(q => {
      if (!subjectScores[q.subjectId]) {
        subjectScores[q.subjectId] = { score: 0, total: 0, name: q.subjectName };
      }
      subjectScores[q.subjectId].score += q.score;
      subjectScores[q.subjectId].total += q.total;
    });
    
    let bestSubject = 'None';
    let bestScore = 0;
    Object.entries(subjectScores).forEach(([_, data]) => {
      if (data.total > 0) {
        const percentage = (data.score / data.total) * 100;
        if (percentage > bestScore) {
          bestScore = percentage;
          bestSubject = data.name;
        }
      }
    });

    return {
      totalQuizzes,
      averageScore,
      subjectsStudied: studiedSubjects.length,
      chaptersStudied,
      bestSubject,
      bestScore: Math.round(bestScore),
    };
  }, [quizProgress, studiedSubjects]);

  // Achievements system
  const achievements: Achievement[] = useMemo(() => {
    return [
      {
        id: 'first_quiz',
        title: 'First Steps',
        description: 'Complete your first quiz',
        icon: Star,
        unlocked: stats.totalQuizzes >= 1,
        progress: Math.min(stats.totalQuizzes, 1),
        target: 1,
      },
      {
        id: 'quiz_master_10',
        title: 'Quiz Master',
        description: 'Complete 10 quizzes',
        icon: Trophy,
        unlocked: stats.totalQuizzes >= 10,
        progress: Math.min(stats.totalQuizzes, 10),
        target: 10,
      },
      {
        id: 'quiz_legend_50',
        title: 'Quiz Legend',
        description: 'Complete 50 quizzes',
        icon: Award,
        unlocked: stats.totalQuizzes >= 50,
        progress: Math.min(stats.totalQuizzes, 50),
        target: 50,
      },
      {
        id: 'perfect_score',
        title: 'Perfectionist',
        description: 'Score 100% on any quiz',
        icon: Target,
        unlocked: quizProgress.some(q => q.score === q.total && q.total > 0),
      },
      {
        id: 'high_achiever',
        title: 'High Achiever',
        description: 'Maintain 80%+ average score',
        icon: TrendingUp,
        unlocked: stats.averageScore >= 80 && stats.totalQuizzes >= 5,
      },
      {
        id: 'study_streak_7',
        title: 'Week Warrior',
        description: 'Study for 7 days in a row',
        icon: Flame,
        unlocked: studyStreak >= 7,
        progress: Math.min(studyStreak, 7),
        target: 7,
      },
      {
        id: 'subject_explorer',
        title: 'Subject Explorer',
        description: 'Study 5 different subjects',
        icon: BookOpen,
        unlocked: stats.subjectsStudied >= 5,
        progress: Math.min(stats.subjectsStudied, 5),
        target: 5,
      },
      {
        id: 'dedicated_learner',
        title: 'Dedicated Learner',
        description: 'Study for 30 different days',
        icon: Calendar,
        unlocked: totalStudyDays >= 30,
        progress: Math.min(totalStudyDays, 30),
        target: 30,
      },
    ];
  }, [stats, quizProgress, studyStreak, totalStudyDays]);

  const unlockedAchievements = achievements.filter(a => a.unlocked);

  // Chart data - Recent progress (last 7 quizzes)
  const recentProgressData = useMemo(() => {
    return quizProgress
      .slice(-7)
      .map((q, index) => ({
        name: `Quiz ${index + 1}`,
        score: q.total > 0 ? Math.round((q.score / q.total) * 100) : 0,
      }));
  }, [quizProgress]);

  // Subject performance data
  const subjectPerformanceData = useMemo(() => {
    const subjectScores: { [key: string]: { score: number; total: number; name: string } } = {};
    quizProgress.forEach(q => {
      if (!subjectScores[q.subjectId]) {
        subjectScores[q.subjectId] = { score: 0, total: 0, name: q.subjectName };
      }
      subjectScores[q.subjectId].score += q.score;
      subjectScores[q.subjectId].total += q.total;
    });

    return Object.entries(subjectScores)
      .map(([_, data]) => ({
        name: data.name.length > 20 ? data.name.substring(0, 20) + '...' : data.name,
        percentage: data.total > 0 ? Math.round((data.score / data.total) * 100) : 0,
      }))
      .sort((a, b) => b.percentage - a.percentage)
      .slice(0, 5);
  }, [quizProgress]);

  // Activity timeline data
  const activityTimeline = useMemo(() => {
    return quizProgress
      .slice(-10)
      .reverse()
      .map(q => ({
        ...q,
        percentage: q.total > 0 ? Math.round((q.score / q.total) * 100) : 0,
      }));
  }, [quizProgress]);

  // Get user initials for avatar
  const initials = currentUser.name
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase()
    .substring(0, 2);

  return (
    <div className="space-y-6">
      {/* Profile Header with Close Button */}
      {onClose && (
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-gray-900 dark:text-gray-100">My Profile</h1>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              View your progress, achievements, settings, and more
            </p>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={onClose}
            className="gap-2"
          >
            <ChevronLeft className="w-4 h-4" />
            Back
          </Button>
        </div>
      )}

      {/* Profile Header */}
      <Card className="p-6">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          <Avatar className="w-24 h-24">
            <AvatarFallback className="text-2xl bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300">
              {initials}
            </AvatarFallback>
          </Avatar>
          
          <div className="flex-1 text-center md:text-left">
            <div className="flex flex-col md:flex-row md:items-center gap-3 mb-2">
              <h2 className="text-gray-900 dark:text-gray-100">{currentUser.name}</h2>
              <div className="flex gap-2 justify-center md:justify-start">
                <Badge variant={currentUser.userType === 'admin' ? 'default' : 'secondary'}>
                  {currentUser.userType === 'admin' ? 'Administrator' : 'Student'}
                </Badge>
                {studyStreak > 0 && (
                  <Badge variant="outline" className="gap-1">
                    <Flame className="w-3 h-3 text-orange-500" />
                    {studyStreak} Day Streak
                  </Badge>
                )}
              </div>
            </div>
            
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{currentUser.email}</p>
            
            {currentUser.userType === 'student' && (
              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                <div className="flex items-center gap-2 text-sm">
                  <BookOpen className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                  <span className="text-gray-700 dark:text-gray-300">{currentUser.course}</span>
                </div>
                <Separator orientation="vertical" className="h-4" />
                <div className="flex items-center gap-2 text-sm">
                  <GraduationCap className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                  <span className="text-gray-700 dark:text-gray-300">{currentUser.level}</span>
                </div>
              </div>
            )}
          </div>

          <div className="flex gap-2">
            <Badge variant="outline" className="text-green-600 dark:text-green-400 gap-1">
              <Trophy className="w-3 h-3" />
              {unlockedAchievements.length}/{achievements.length} Achievements
            </Badge>
          </div>
        </div>
      </Card>

      {/* Welcome message for new users */}
      {stats.totalQuizzes === 0 && (
        <Card className="p-6 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/50 dark:to-purple-950/50 border-indigo-200 dark:border-indigo-900">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-indigo-100 dark:bg-indigo-900 rounded-lg">
              <Star className="w-6 h-6 text-indigo-600 dark:text-indigo-300" />
            </div>
            <div>
              <h3 className="text-gray-900 dark:text-gray-100 mb-1">Welcome to Your Profile!</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                Start taking quizzes to track your progress, earn achievements, and watch your stats grow. 
                Your learning journey begins here!
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="gap-1">
                  <Trophy className="w-3 h-3" />
                  Unlock Achievements
                </Badge>
                <Badge variant="outline" className="gap-1">
                  <TrendingUp className="w-3 h-3" />
                  Track Progress
                </Badge>
                <Badge variant="outline" className="gap-1">
                  <Flame className="w-3 h-3" />
                  Build Streaks
                </Badge>
              </div>
            </div>
          </div>
        </Card>
      )}

      {/* Statistics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
              <CheckCircle2 className="w-6 h-6 text-blue-600 dark:text-blue-300" />
            </div>
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Quizzes Completed</p>
              <p className="text-2xl text-gray-900 dark:text-gray-100">{stats.totalQuizzes}</p>
            </div>
          </div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-green-100 dark:bg-green-900 rounded-lg">
              <TrendingUp className="w-6 h-6 text-green-600 dark:text-green-300" />
            </div>
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Average Score</p>
              <p className="text-2xl text-gray-900 dark:text-gray-100">{stats.averageScore}%</p>
            </div>
          </div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-lg">
              <BookOpen className="w-6 h-6 text-purple-600 dark:text-purple-300" />
            </div>
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Subjects Studied</p>
              <p className="text-2xl text-gray-900 dark:text-gray-100">{stats.subjectsStudied}</p>
            </div>
          </div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-orange-100 dark:bg-orange-900 rounded-lg">
              <Flame className="w-6 h-6 text-orange-600 dark:text-orange-300" />
            </div>
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Study Streak</p>
              <p className="text-2xl text-gray-900 dark:text-gray-100">{studyStreak} days</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="flex flex-wrap gap-3">
        <Button
          variant="outline"
          onClick={onToggleDarkMode}
          className="gap-2"
        >
          {isDarkMode ? (
            <>
              <Sun className="w-4 h-4" />
              <span>Light Mode</span>
            </>
          ) : (
            <>
              <Moon className="w-4 h-4" />
              <span>Dark Mode</span>
            </>
          )}
        </Button>
        
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button
              variant="outline"
              className="gap-2 text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300"
            >
              <LogOut className="w-4 h-4" />
              <span>Logout</span>
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Confirm Logout</AlertDialogTitle>
              <AlertDialogDescription>
                Are you sure you want to logout? You'll need to sign in again to access your account.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={onLogout}>Logout</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>

      {/* Tabs for detailed views */}
      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="achievements">Achievements</TabsTrigger>
          <TabsTrigger value="activity">Activity</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-4">
          {/* Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Recent Progress */}
            <Card className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <BarChart3 className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                <h3 className="text-gray-900 dark:text-gray-100">Recent Quiz Performance</h3>
              </div>
              {recentProgressData.length > 0 ? (
                <ResponsiveContainer width="100%" height={200}>
                  <LineChart data={recentProgressData}>
                    <CartesianGrid strokeDasharray="3 3" className="stroke-gray-200 dark:stroke-gray-700" />
                    <XAxis 
                      dataKey="name" 
                      className="text-xs"
                      tick={{ fill: 'currentColor' }}
                    />
                    <YAxis 
                      domain={[0, 100]}
                      className="text-xs"
                      tick={{ fill: 'currentColor' }}
                    />
                    <Tooltip 
                      contentStyle={{
                        backgroundColor: 'var(--color-popover)',
                        border: '1px solid var(--color-border)',
                        borderRadius: '8px',
                      }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="score" 
                      stroke="#6366f1" 
                      strokeWidth={2}
                      dot={{ fill: '#6366f1', r: 4 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              ) : (
                <div className="h-[200px] flex items-center justify-center text-gray-500 dark:text-gray-400">
                  <p className="text-sm">No quiz data yet. Start practicing!</p>
                </div>
              )}
            </Card>

            {/* Subject Performance */}
            <Card className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <Target className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                <h3 className="text-gray-900 dark:text-gray-100">Subject Performance</h3>
              </div>
              {subjectPerformanceData.length > 0 ? (
                <ResponsiveContainer width="100%" height={200}>
                  <BarChart data={subjectPerformanceData} layout="horizontal">
                    <CartesianGrid strokeDasharray="3 3" className="stroke-gray-200 dark:stroke-gray-700" />
                    <XAxis type="number" domain={[0, 100]} className="text-xs" tick={{ fill: 'currentColor' }} />
                    <YAxis 
                      type="category" 
                      dataKey="name" 
                      width={100}
                      className="text-xs"
                      tick={{ fill: 'currentColor' }}
                    />
                    <Tooltip 
                      contentStyle={{
                        backgroundColor: 'var(--color-popover)',
                        border: '1px solid var(--color-border)',
                        borderRadius: '8px',
                      }}
                    />
                    <Bar dataKey="percentage" fill="#6366f1" radius={[0, 4, 4, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              ) : (
                <div className="h-[200px] flex items-center justify-center text-gray-500 dark:text-gray-400">
                  <p className="text-sm">No subject data yet</p>
                </div>
              )}
            </Card>
          </div>

          {/* Best Performance */}
          {stats.bestSubject !== 'None' && (
            <Card className="p-6">
              <div className="flex items-center gap-3">
                <Award className="w-6 h-6 text-yellow-500" />
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Best Subject</p>
                  <p className="text-gray-900 dark:text-gray-100">{stats.bestSubject}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-500">{stats.bestScore}% average</p>
                </div>
              </div>
            </Card>
          )}
        </TabsContent>

        {/* Achievements Tab */}
        <TabsContent value="achievements" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {achievements.map((achievement) => {
              const Icon = achievement.icon;
              return (
                <Card
                  key={achievement.id}
                  className={`p-4 ${
                    achievement.unlocked
                      ? 'border-green-200 dark:border-green-900 bg-green-50/50 dark:bg-green-950/20'
                      : 'opacity-60'
                  }`}
                >
                  <div className="flex gap-4">
                    <div
                      className={`p-3 rounded-lg ${
                        achievement.unlocked
                          ? 'bg-green-100 dark:bg-green-900'
                          : 'bg-gray-100 dark:bg-gray-800'
                      }`}
                    >
                      <Icon
                        className={`w-6 h-6 ${
                          achievement.unlocked
                            ? 'text-green-600 dark:text-green-300'
                            : 'text-gray-400 dark:text-gray-600'
                        }`}
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="text-gray-900 dark:text-gray-100">{achievement.title}</h4>
                        {achievement.unlocked && (
                          <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400" />
                        )}
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                        {achievement.description}
                      </p>
                      {achievement.target && (
                        <div className="space-y-1">
                          <div className="flex justify-between text-xs text-gray-500 dark:text-gray-500">
                            <span>Progress</span>
                            <span>
                              {achievement.progress}/{achievement.target}
                            </span>
                          </div>
                          <Progress
                            value={((achievement.progress || 0) / achievement.target) * 100}
                            className="h-2"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </TabsContent>

        {/* Activity Tab */}
        <TabsContent value="activity" className="space-y-4">
          <Card className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <Clock className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              <h3 className="text-gray-900 dark:text-gray-100">Recent Activity</h3>
            </div>
            <ScrollArea className="h-[400px] pr-4">
              {activityTimeline.length > 0 ? (
                <div className="space-y-4">
                  {activityTimeline.map((activity, index) => (
                    <div key={`${activity.chapterId}-${index}`} className="flex gap-4">
                      <div className="relative">
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center ${
                            activity.percentage >= 80
                              ? 'bg-green-100 dark:bg-green-900'
                              : activity.percentage >= 60
                              ? 'bg-blue-100 dark:bg-blue-900'
                              : 'bg-orange-100 dark:bg-orange-900'
                          }`}
                        >
                          <CheckCircle2
                            className={`w-4 h-4 ${
                              activity.percentage >= 80
                                ? 'text-green-600 dark:text-green-300'
                                : activity.percentage >= 60
                                ? 'text-blue-600 dark:text-blue-300'
                                : 'text-orange-600 dark:text-orange-300'
                            }`}
                          />
                        </div>
                        {index < activityTimeline.length - 1 && (
                          <div className="absolute left-1/2 top-8 w-0.5 h-8 bg-gray-200 dark:bg-gray-700 -translate-x-1/2" />
                        )}
                      </div>
                      <div className="flex-1 pb-4">
                        <div className="flex items-start justify-between gap-2 mb-1">
                          <div>
                            <p className="text-sm text-gray-900 dark:text-gray-100">
                              {activity.chapterName}
                            </p>
                            <p className="text-xs text-gray-500 dark:text-gray-500">
                              {activity.subjectName}
                            </p>
                          </div>
                          <Badge
                            variant={
                              activity.percentage >= 80
                                ? 'default'
                                : activity.percentage >= 60
                                ? 'secondary'
                                : 'outline'
                            }
                          >
                            {activity.percentage}%
                          </Badge>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-500">
                          <Calendar className="w-3 h-3" />
                          <span>{new Date(activity.date).toLocaleDateString()}</span>
                          <span className="text-gray-400">•</span>
                          <span>
                            {activity.score}/{activity.total} correct
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="h-[400px] flex items-center justify-center text-gray-500 dark:text-gray-400">
                  <div className="text-center">
                    <Clock className="w-12 h-12 mx-auto mb-3 opacity-30" />
                    <p className="text-sm">No activity yet</p>
                    <p className="text-xs mt-1">Start taking quizzes to see your progress!</p>
                  </div>
                </div>
              )}
            </ScrollArea>
          </Card>
        </TabsContent>

        {/* Settings Tab */}
        <TabsContent value="settings" className="space-y-4">
          <Settings
            currentUser={currentUser}
            onUpdateUser={onUpdateUser}
            onDeleteAccount={onDeleteAccount}
            onClearProgress={onClearProgress}
            isDarkMode={isDarkMode}
            onToggleDarkMode={onToggleDarkMode}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
}

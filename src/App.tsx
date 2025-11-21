import { useState, useEffect } from 'react';
import { Register, UserData } from './components/Register';
import { Login } from './components/Login';
import { CourseSelector } from './components/CourseSelector';
import { LevelSelector } from './components/LevelSelector';
import { SubjectSelector } from './components/SubjectSelector';
import { ChapterSelector } from './components/ChapterSelector';
import { ConceptViewer } from './components/ConceptViewer';
import { QuizSection } from './components/QuizSection';
import { RAGChat } from './components/RAGChat';
import { KnowledgePool } from './components/KnowledgePool';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './components/ui/tabs';
import { Card } from './components/ui/card';
import { Popover, PopoverContent, PopoverTrigger } from './components/ui/popover';
import { Brain, User, MessageSquare, Bell, CheckCheck, X } from 'lucide-react';
import { Profile } from './components/Profile';
import { Button } from './components/ui/button';
import { Badge } from './components/ui/badge';
import { Alert, AlertDescription } from './components/ui/alert';
import { ScrollArea } from './components/ui/scroll-area';
import { toast } from 'sonner@2.0.3';
import logo from 'figma:asset/5c638375b43477d76381740217f8f2eed9947622.png';
import { getFilteredChapters } from './utils/ragData';

interface StoredUser extends UserData {
  // password is stored but never exposed
}

interface Notification {
  id: string;
  title: string;
  message: string;
  type: 'info' | 'success' | 'warning';
  timestamp: Date;
  read: boolean;
}

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState<UserData | null>(null);
  const [showLogin, setShowLogin] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showAIChat, setShowAIChat] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [showNotifications, setShowNotifications] = useState(false);
  
  const [selectedCourse, setSelectedCourse] = useState<string>('');
  const [selectedLevel, setSelectedLevel] = useState<string>('');
  const [selectedSubject, setSelectedSubject] = useState<string>('');
  const [selectedSubjectName, setSelectedSubjectName] = useState<string>('');
  const [selectedChapter, setSelectedChapter] = useState<string>('');

  // Check if user is already logged in and load theme preference
  useEffect(() => {
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      const user = JSON.parse(storedUser);
      setCurrentUser(user);
      setIsAuthenticated(true);
      
      // Load notifications for this user
      loadNotifications(user.email);
    }
    
    // Load theme preference
    const storedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldBeDark = storedTheme === 'dark' || (!storedTheme && prefersDark);
    
    setIsDarkMode(shouldBeDark);
    if (shouldBeDark) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  // Load notifications from localStorage
  const loadNotifications = (userEmail: string) => {
    const storedNotifications = localStorage.getItem(`notifications_${userEmail}`);
    if (storedNotifications) {
      const parsed = JSON.parse(storedNotifications);
      // Convert timestamp strings back to Date objects
      const notifications = parsed.map((n: any) => ({
        ...n,
        timestamp: new Date(n.timestamp)
      }));
      setNotifications(notifications);
    } else {
      // Create welcome notifications for new users
      const welcomeNotifications: Notification[] = [
        {
          id: '1',
          title: 'Welcome to Arthadok! 🎉',
          message: 'Start your journey to becoming a professional accountant. Explore courses and master key concepts.',
          type: 'success',
          timestamp: new Date(),
          read: false
        },
        {
          id: '2',
          title: 'Arthadok AI Available',
          message: 'Try our Arthadok AI for instant help with concepts, formulas, and examples.',
          type: 'info',
          timestamp: new Date(),
          read: false
        }
      ];
      setNotifications(welcomeNotifications);
      localStorage.setItem(`notifications_${userEmail}`, JSON.stringify(welcomeNotifications));
    }
  };

  // Save notifications to localStorage
  const saveNotifications = (notifs: Notification[]) => {
    if (currentUser) {
      localStorage.setItem(`notifications_${currentUser.email}`, JSON.stringify(notifs));
    }
  };

  // Mark notification as read
  const markAsRead = (id: string) => {
    const updated = notifications.map(n => 
      n.id === id ? { ...n, read: true } : n
    );
    setNotifications(updated);
    saveNotifications(updated);
  };

  // Mark all notifications as read
  const markAllAsRead = () => {
    const updated = notifications.map(n => ({ ...n, read: true }));
    setNotifications(updated);
    saveNotifications(updated);
  };

  // Delete notification
  const deleteNotification = (id: string) => {
    const updated = notifications.filter(n => n.id !== id);
    setNotifications(updated);
    saveNotifications(updated);
  };

  // Get unread count
  const unreadCount = notifications.filter(n => !n.read).length;

  // Check if notification type is enabled
  const isNotificationEnabled = (type: string): boolean => {
    if (!currentUser) return true;
    const settings = localStorage.getItem(`settings_${currentUser.email}`);
    if (!settings) return true;
    
    try {
      const parsed = JSON.parse(settings);
      const notifSettings = parsed.notifications || {};
      
      // Map notification types to setting keys
      if (type === 'welcome') return notifSettings.welcomeMessages !== false;
      if (type === 'subject') return notifSettings.subjectProgress !== false;
      if (type === 'quiz') return notifSettings.quizResults !== false;
      if (type === 'achievement') return notifSettings.achievements !== false;
      if (type === 'system') return notifSettings.systemUpdates !== false;
      
      return true;
    } catch {
      return true;
    }
  };

  // Add notification (can be called when certain events happen)
  const addNotification = (notification: Omit<Notification, 'id' | 'timestamp' | 'read'>, notificationType: string = 'system') => {
    // Check if this notification type is enabled
    if (!isNotificationEnabled(notificationType)) {
      return;
    }

    const newNotification: Notification = {
      ...notification,
      id: Date.now().toString(),
      timestamp: new Date(),
      read: false
    };
    const updated = [newNotification, ...notifications];
    setNotifications(updated);
    saveNotifications(updated);
  };

  // Format notification timestamp
  const formatNotificationTime = (timestamp: Date) => {
    const now = new Date();
    const diffMs = now.getTime() - timestamp.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 1) return 'Just now';
    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffHours < 24) return `${diffHours}h ago`;
    if (diffDays < 7) return `${diffDays}d ago`;
    return timestamp.toLocaleDateString();
  };

  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const handleRegister = (userData: UserData) => {
    // Get existing users
    const existingUsers = JSON.parse(localStorage.getItem('users') || '[]');
    
    // Check if email already exists
    const emailExists = existingUsers.some((user: UserData) => user.email === userData.email);
    if (emailExists) {
      toast.error('Email already registered. Please login or use a different email.');
      return;
    }

    // Add new user
    existingUsers.push(userData);
    localStorage.setItem('users', JSON.stringify(existingUsers));
    
    // Auto login after registration
    const userWithoutPassword = { ...userData };
    delete (userWithoutPassword as any).password;
    setCurrentUser(userWithoutPassword);
    localStorage.setItem('currentUser', JSON.stringify(userWithoutPassword));
    setIsAuthenticated(true);
    
    // Load notifications for new user
    loadNotifications(userData.email);
    
    toast.success('Registration successful! Welcome to the academy.');
  };

  const handleLogin = (email: string, password: string): boolean => {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find((u: UserData) => u.email === email && u.password === password);
    
    if (user) {
      const userWithoutPassword = { ...user };
      delete userWithoutPassword.password;
      setCurrentUser(userWithoutPassword);
      localStorage.setItem('currentUser', JSON.stringify(userWithoutPassword));
      setIsAuthenticated(true);
      
      // Load notifications for this user
      loadNotifications(email);
      
      toast.success('Login successful! Welcome back.');
      return true;
    }
    
    return false;
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('currentUser');
    setSelectedCourse('');
    setSelectedLevel('');
    setSelectedSubject('');
    setShowProfile(false);
    toast.success('Logged out successfully');
  };

  const handleUpdateUser = (updatedUser: UserData) => {
    setCurrentUser(updatedUser);
    localStorage.setItem('currentUser', JSON.stringify(updatedUser));
  };

  const handleDeleteAccount = () => {
    if (!currentUser) return;

    // Remove user from users array
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const filteredUsers = users.filter((u: UserData) => u.email !== currentUser.email);
    localStorage.setItem('users', JSON.stringify(filteredUsers));

    // Clear all user-specific data
    localStorage.removeItem('currentUser');
    localStorage.removeItem(`settings_${currentUser.email}`);
    localStorage.removeItem(`notifications_${currentUser.email}`);
    localStorage.removeItem(`studied_subjects_${currentUser.email}`);
    localStorage.removeItem(`quiz_progress_${currentUser.email}`);

    // Log out
    setCurrentUser(null);
    setIsAuthenticated(false);
    setShowProfile(false);
    
    toast.success('Account deleted successfully');
  };

  const handleClearProgress = () => {
    if (!currentUser) return;

    localStorage.removeItem(`studied_subjects_${currentUser.email}`);
    localStorage.removeItem(`quiz_progress_${currentUser.email}`);
    
    // Clear notifications except welcome ones
    const notifications = JSON.parse(localStorage.getItem(`notifications_${currentUser.email}`) || '[]');
    const welcomeNotifications = notifications.filter((n: Notification) => 
      n.title.includes('Welcome') || n.title.includes('Arthadok AI')
    );
    localStorage.setItem(`notifications_${currentUser.email}`, JSON.stringify(welcomeNotifications));
    setNotifications(welcomeNotifications.map((n: any) => ({
      ...n,
      timestamp: new Date(n.timestamp)
    })));

    toast.success('Learning progress cleared successfully');
  };

  const handleBackToCourses = () => {
    setSelectedCourse('');
    setSelectedLevel('');
    setSelectedSubject('');
    setSelectedSubjectName('');
    setSelectedChapter('');
  };

  const handleBackToLevels = () => {
    setSelectedLevel('');
    setSelectedSubject('');
    setSelectedSubjectName('');
    setSelectedChapter('');
  };

  const handleBackToSubjects = () => {
    setSelectedSubject('');
    setSelectedSubjectName('');
    setSelectedChapter('');
  };

  const handleBackToChapters = () => {
    setSelectedChapter('');
  };

  // Check if user has access to selected level
  const hasAccessToLevel = (level: string): boolean => {
    if (!currentUser) return false;
    // Admin has access to all levels
    if (currentUser.userType === 'admin') return true;
    // Students only have access to their registered level
    return currentUser.level === level;
  };

  // Get course from user's level
  const getUserCourse = (): string => {
    if (!currentUser) return '';
    // Admin can access all courses
    if (currentUser.userType === 'admin') return '';
    if (currentUser.level.startsWith('CA')) return 'CA';
    if (currentUser.level.startsWith('CMA')) return 'CMA';
    if (currentUser.level.startsWith('CS')) return 'CS';
    return '';
  };

  // Check if user can access a course
  const hasAccessToCourse = (course: string): boolean => {
    if (!currentUser) return false;
    // Admin has access to all courses
    if (currentUser.userType === 'admin') return true;
    // Students only have access to their registered course
    return getUserCourse() === course;
  };

  // Get all available chapters for RAG based on user access
  const getAllAvailableChapters = () => {
    if (!currentUser) return [];
    
    // Admin gets all chapters
    if (currentUser.userType === 'admin') {
      return getFilteredChapters();
    }
    
    // Students get chapters for their level
    const userCourse = getUserCourse();
    return getFilteredChapters(userCourse, currentUser.level);
  };

  // Add notification when user starts a new subject
  useEffect(() => {
    if (selectedSubject && selectedSubjectName && currentUser) {
      const studiedSubjectsKey = `studied_subjects_${currentUser.email}`;
      const studiedSubjects = JSON.parse(localStorage.getItem(studiedSubjectsKey) || '[]');
      
      if (!studiedSubjects.includes(selectedSubject)) {
        // First time studying this subject
        studiedSubjects.push(selectedSubject);
        localStorage.setItem(studiedSubjectsKey, JSON.stringify(studiedSubjects));
        
        // Add notification after a short delay
        setTimeout(() => {
          addNotification({
            title: `Started ${selectedSubjectName}! 📚`,
            message: `You've begun studying ${selectedSubjectName}. Keep going to master all the concepts!`,
            type: 'info'
          }, 'subject');
        }, 1000);
      }
    }
  }, [selectedSubject]);

  // Show login/register screen if not authenticated
  if (!isAuthenticated) {
    return showLogin ? (
      <Login 
        onLogin={handleLogin} 
        onSwitchToRegister={() => setShowLogin(false)} 
      />
    ) : (
      <Register 
        onRegister={handleRegister} 
        onSwitchToLogin={() => setShowLogin(true)} 
      />
    );
  }

  const userCourse = getUserCourse();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 transition-colors">
      <header className="dark:bg-gray-900 border-b dark:border-gray-700 shadow-sm" style={{ backgroundColor: '#F7F9FB' }}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Arthadok Logo" className="w-10 h-10" />
              <div>
                <h1 className="font-sans dark:text-white" style={{ color: '#0B3D91', fontWeight: '600' }}>Arthadok</h1>
                <p className="text-sm text-gray-600 dark:text-gray-400">AI-Powered Learning for CA, CMA & CS</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              {/* Arthadok AI Button */}
              <Button 
                className="gap-2 bg-indigo-600 text-white hover:bg-indigo-700"
                size="sm"
                title="Arthadok AI"
                onClick={() => setShowAIChat(true)}
              >
                <MessageSquare className="w-4 h-4" />
                <span className="hidden md:inline">Arthadok AI</span>
              </Button>

              {/* Profile */}
              <Button 
                variant="outline" 
                size="sm" 
                className="gap-2"
                title="Profile"
                onClick={() => setShowProfile(true)}
              >
                <User className="w-4 h-4" />
                <span className="hidden lg:inline">Profile</span>
              </Button>

              {/* Notifications */}
              <Popover open={showNotifications} onOpenChange={setShowNotifications}>
                <PopoverTrigger asChild>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="relative"
                    title="Notifications"
                  >
                    <Bell className="w-4 h-4" />
                    {unreadCount > 0 && (
                      <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                        {unreadCount > 9 ? '9+' : unreadCount}
                      </span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-80 p-0" align="end">
                  <div className="flex items-center justify-between p-4 border-b dark:border-gray-700">
                    <h3 className="text-gray-900 dark:text-gray-100">Notifications</h3>
                    {unreadCount > 0 && (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={markAllAsRead}
                        className="text-xs gap-1 h-7"
                      >
                        <CheckCheck className="w-3 h-3" />
                        Mark all read
                      </Button>
                    )}
                  </div>
                  <ScrollArea className="h-[400px]">
                    {notifications.length === 0 ? (
                      <div className="p-8 text-center text-gray-500 dark:text-gray-400">
                        <Bell className="w-12 h-12 mx-auto mb-3 opacity-30" />
                        <p className="text-sm">No notifications yet</p>
                      </div>
                    ) : (
                      <div className="divide-y dark:divide-gray-700">
                        {notifications.map((notification) => (
                          <div
                            key={notification.id}
                            className={`p-4 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors ${
                              !notification.read ? 'bg-blue-50 dark:bg-blue-950/20' : ''
                            }`}
                          >
                            <div className="flex items-start justify-between gap-2">
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2 mb-1">
                                  <h4 className={`text-sm ${!notification.read ? 'font-semibold' : ''} text-gray-900 dark:text-gray-100`}>
                                    {notification.title}
                                  </h4>
                                  {!notification.read && (
                                    <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0" />
                                  )}
                                </div>
                                <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">
                                  {notification.message}
                                </p>
                                <div className="flex items-center gap-3">
                                  <span className="text-xs text-gray-500 dark:text-gray-500">
                                    {formatNotificationTime(notification.timestamp)}
                                  </span>
                                  {!notification.read && (
                                    <button
                                      onClick={() => markAsRead(notification.id)}
                                      className="text-xs text-blue-600 dark:text-blue-400 hover:underline"
                                    >
                                      Mark as read
                                    </button>
                                  )}
                                </div>
                              </div>
                              <button
                                onClick={() => deleteNotification(notification.id)}
                                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 p-1"
                                title="Delete notification"
                              >
                                <X className="w-4 h-4" />
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </ScrollArea>
                </PopoverContent>
              </Popover>


            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto space-y-6">
          {/* Arthadok AI Full Screen View */}
          {showAIChat ? (
            <Card className="h-[calc(100vh-120px)] overflow-hidden">
              <RAGChat 
                course={selectedCourse || userCourse || 'All Courses'}
                level={selectedLevel || currentUser?.level || 'All Levels'}
                allChapters={getAllAvailableChapters()}
                onClose={() => setShowAIChat(false)}
                userEmail={currentUser?.email}
              />
            </Card>
          ) : showProfile ? (
            <Profile
              currentUser={currentUser!}
              allChapters={getAllAvailableChapters()}
              onLogout={handleLogout}
              isDarkMode={isDarkMode}
              onToggleDarkMode={toggleDarkMode}
              onUpdateUser={handleUpdateUser}
              onDeleteAccount={handleDeleteAccount}
              onClearProgress={handleClearProgress}
              onClose={() => setShowProfile(false)}
            />
          ) : (
            <>
              {/* Access Information */}
              <Card className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-indigo-950 dark:to-blue-950 border-indigo-200 dark:border-indigo-800">
                <div className="flex items-center gap-3">
                  <Brain className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                  <div>
                    <h3 className="text-indigo-900 dark:text-indigo-300">Your Learning Access</h3>
                    {currentUser?.userType === 'admin' ? (
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        You have <span className="font-semibold">full administrative access</span> to all courses, levels, and content.
                      </p>
                    ) : (
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        You have access to <span className="font-semibold">{currentUser?.level}</span> course materials and assessments.
                      </p>
                    )}
                  </div>
                </div>
              </Card>

          {/* Breadcrumb Navigation */}
          {(selectedCourse || selectedLevel || selectedSubject || selectedChapter) && (
            <div className="flex items-center gap-2 text-sm flex-wrap">
              <Button
                variant="ghost"
                size="sm"
                onClick={handleBackToCourses}
                className="text-indigo-600 hover:text-indigo-700"
              >
                All Courses
              </Button>
              {selectedCourse && (
                <>
                  <span className="text-gray-400">/</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleBackToLevels}
                    className="text-indigo-600 hover:text-indigo-700"
                  >
                    {selectedCourse}
                  </Button>
                </>
              )}
              {selectedLevel && (
                <>
                  <span className="text-gray-400">/</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleBackToSubjects}
                    className="text-indigo-600 hover:text-indigo-700"
                  >
                    {selectedLevel}
                  </Button>
                </>
              )}
              {selectedSubject && (
                <>
                  <span className="text-gray-400">/</span>
                  {!selectedChapter ? (
                    <span className="text-gray-600">{selectedSubjectName || selectedSubject}</span>
                  ) : (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={handleBackToChapters}
                      className="text-indigo-600 hover:text-indigo-700"
                    >
                      {selectedSubjectName || selectedSubject}
                    </Button>
                  )}
                </>
              )}
              {selectedChapter && (
                <>
                  <span className="text-gray-400">/</span>
                  <span className="text-gray-600">Chapter</span>
                </>
              )}
            </div>
          )}

          {/* Course Selection - Only show user's course */}
          {!selectedCourse && (
            <>
              <CourseSelector 
                selectedCourse={selectedCourse} 
                onSelectCourse={(course) => {
                  // Knowledge Pool is always accessible
                  if (course === 'KNOWLEDGE_POOL') {
                    setSelectedCourse(course);
                  } else if (hasAccessToCourse(course)) {
                    setSelectedCourse(course);
                  } else {
                    toast.error(`Access denied. You are registered for ${getUserCourse()} only.`);
                  }
                }}
                allowedCourse={currentUser?.userType === 'admin' ? undefined : userCourse}
              />
            </>
          )}

          {/* Knowledge Pool */}
          {selectedCourse === 'KNOWLEDGE_POOL' && (
            <KnowledgePool
              onBack={handleBackToCourses}
              userEmail={currentUser?.email || ''}
              isAdmin={currentUser?.userType === 'admin'}
            />
          )}

          {/* Level Selection - Only show user's level */}
          {selectedCourse && selectedCourse !== 'KNOWLEDGE_POOL' && !selectedLevel && (
            <>
              {currentUser?.userType === 'student' && !hasAccessToLevel(currentUser?.level || '') && (
                <Alert>
                  <AlertDescription>
                    You can only access <span className="font-semibold">{currentUser?.level}</span> content. 
                    Other levels are locked based on your registration.
                  </AlertDescription>
                </Alert>
              )}
              <LevelSelector
                course={selectedCourse}
                selectedLevel={selectedLevel}
                onSelectLevel={(level) => {
                  if (hasAccessToLevel(level)) {
                    setSelectedLevel(level);
                  } else {
                    toast.error(`Access denied. You are registered for ${currentUser?.level} only.`);
                  }
                }}
                onBack={handleBackToCourses}
                allowedLevel={currentUser?.userType === 'admin' ? undefined : currentUser?.level || ''}
              />
            </>
          )}

          {/* Subject Selection */}
          {selectedCourse && selectedLevel && !selectedSubject && (
            <SubjectSelector
              course={selectedCourse}
              level={selectedLevel}
              selectedSubject={selectedSubject}
              onSelectSubject={(subjectId, subjectName) => {
                setSelectedSubject(subjectId);
                setSelectedSubjectName(subjectName);
              }}
              onBack={handleBackToLevels}
              userEmail={currentUser?.email}
            />
          )}

          {/* Chapter Selection */}
          {selectedCourse && selectedLevel && selectedSubject && !selectedChapter && (
            <ChapterSelector
              subject={selectedSubject}
              subjectName={selectedSubjectName || selectedSubject}
              selectedChapter={selectedChapter}
              onSelectChapter={setSelectedChapter}
              onBack={handleBackToSubjects}
            />
          )}

          {/* Learning Content - Chapter Level */}
          {selectedCourse && selectedLevel && selectedSubject && selectedChapter && (
            <Card className="p-6">
              <Tabs defaultValue="concepts" className="w-full">
                <TabsList className={`grid w-full ${selectedLevel === 'CA Final' ? 'grid-cols-3' : 'grid-cols-2'}`}>
                  <TabsTrigger value="concepts">
                    {selectedLevel === 'CA Final' ? 'Question & Answers' : 'Learn Concepts'}
                  </TabsTrigger>
                  <TabsTrigger value="quiz">
                    {selectedLevel === 'CA Final' ? 'Case Studies' : 'Practice Quiz'}
                  </TabsTrigger>
                  {selectedLevel === 'CA Final' && (
                    <TabsTrigger value="mcq">
                      Multiple Choice Questions
                    </TabsTrigger>
                  )}
                </TabsList>
                
                <TabsContent value="concepts" className="mt-6">
                  <ConceptViewer 
                    course={selectedCourse}
                    level={selectedLevel}
                    subject={selectedSubject}
                    chapterId={selectedChapter}
                  />
                </TabsContent>
                
                <TabsContent value="quiz" className="mt-6">
                  <QuizSection 
                    course={selectedCourse}
                    level={selectedLevel}
                    subject={selectedSubject}
                    chapterId={selectedChapter}
                    userEmail={currentUser?.email}
                    mode={selectedLevel === 'CA Final' ? 'case-studies' : 'mcq'}
                  />
                </TabsContent>
                
                {selectedLevel === 'CA Final' && (
                  <TabsContent value="mcq" className="mt-6">
                    <QuizSection 
                      course={selectedCourse}
                      level={selectedLevel}
                      subject={selectedSubject}
                      chapterId={selectedChapter}
                      userEmail={currentUser?.email}
                      mode="mcq"
                    />
                  </TabsContent>
                )}
              </Tabs>
            </Card>
          )}
            </>
          )}
        </div>
      </main>
    </div>
  );
}
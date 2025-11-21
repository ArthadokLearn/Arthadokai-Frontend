import { useState, useEffect } from 'react';
import { UserData } from './Register';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Switch } from './ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Separator } from './ui/separator';
import { Badge } from './ui/badge';
import { 
  User, 
  Palette, 
  Bell, 
  GraduationCap, 
  Shield, 
  Trash2, 
  Download,
  AlertTriangle,
  Check,
  Key
} from 'lucide-react';
import { toast } from 'sonner@2.0.3';
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

interface SettingsProps {
  currentUser: UserData;
  onUpdateUser: (user: UserData) => void;
  onDeleteAccount: () => void;
  onClearProgress: () => void;
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
}

interface AppSettings {
  notifications: {
    welcomeMessages: boolean;
    subjectProgress: boolean;
    quizResults: boolean;
    achievements: boolean;
    systemUpdates: boolean;
  };
  learning: {
    autoAdvance: boolean;
    showHints: boolean;
    quizDifficulty: 'all' | 'beginner' | 'intermediate' | 'advanced';
    questionsPerSession: number;
  };
  appearance: {
    fontSize: 'small' | 'medium' | 'large';
    compactMode: boolean;
  };
}

const defaultSettings: AppSettings = {
  notifications: {
    welcomeMessages: true,
    subjectProgress: true,
    quizResults: true,
    achievements: true,
    systemUpdates: true,
  },
  learning: {
    autoAdvance: false,
    showHints: true,
    quizDifficulty: 'all',
    questionsPerSession: 10,
  },
  appearance: {
    fontSize: 'medium',
    compactMode: false,
  },
};

export function Settings({
  currentUser,
  onUpdateUser,
  onDeleteAccount,
  onClearProgress,
  isDarkMode,
  onToggleDarkMode,
}: SettingsProps) {
  const [settings, setSettings] = useState<AppSettings>(defaultSettings);
  const [editMode, setEditMode] = useState(false);
  const [editedName, setEditedName] = useState(currentUser.name);
  const [editedEmail, setEditedEmail] = useState(currentUser.email);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Load settings from localStorage
  useEffect(() => {
    const stored = localStorage.getItem(`settings_${currentUser.email}`);
    if (stored) {
      const loadedSettings = JSON.parse(stored);
      setSettings(loadedSettings);
      
      // Apply font size
      document.documentElement.classList.remove('text-small', 'text-medium', 'text-large');
      document.documentElement.classList.add(`text-${loadedSettings.appearance.fontSize}`);
    } else {
      // Apply default font size
      document.documentElement.classList.add('text-medium');
    }
  }, [currentUser.email]);

  // Save settings to localStorage
  const saveSettings = (newSettings: AppSettings) => {
    setSettings(newSettings);
    localStorage.setItem(`settings_${currentUser.email}`, JSON.stringify(newSettings));
    toast.success('Settings saved successfully');
  };

  // Update notification setting
  const updateNotificationSetting = (key: keyof AppSettings['notifications'], value: boolean) => {
    const newSettings = {
      ...settings,
      notifications: {
        ...settings.notifications,
        [key]: value,
      },
    };
    saveSettings(newSettings);
  };

  // Update learning setting
  const updateLearningSetting = (key: keyof AppSettings['learning'], value: any) => {
    const newSettings = {
      ...settings,
      learning: {
        ...settings.learning,
        [key]: value,
      },
    };
    saveSettings(newSettings);
  };

  // Update appearance setting
  const updateAppearanceSetting = (key: keyof AppSettings['appearance'], value: any) => {
    const newSettings = {
      ...settings,
      appearance: {
        ...settings.appearance,
        [key]: value,
      },
    };
    saveSettings(newSettings);
    
    // Apply font size immediately
    if (key === 'fontSize') {
      document.documentElement.classList.remove('text-small', 'text-medium', 'text-large');
      document.documentElement.classList.add(`text-${value}`);
    }
  };

  // Save profile changes
  const handleSaveProfile = () => {
    if (!editedName.trim()) {
      toast.error('Name cannot be empty');
      return;
    }
    if (!editedEmail.trim() || !editedEmail.includes('@')) {
      toast.error('Please enter a valid email');
      return;
    }

    const updatedUser = {
      ...currentUser,
      name: editedName.trim(),
      email: editedEmail.trim(),
    };

    // Update in users array
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const userIndex = users.findIndex((u: UserData) => u.email === currentUser.email);
    if (userIndex !== -1) {
      users[userIndex] = { ...users[userIndex], name: editedName.trim(), email: editedEmail.trim() };
      localStorage.setItem('users', JSON.stringify(users));
    }

    onUpdateUser(updatedUser);
    setEditMode(false);
    toast.success('Profile updated successfully');
  };

  // Change password
  const handleChangePassword = () => {
    if (!currentPassword || !newPassword || !confirmPassword) {
      toast.error('Please fill in all password fields');
      return;
    }

    // Verify current password
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find((u: any) => u.email === currentUser.email && u.password === currentPassword);
    
    if (!user) {
      toast.error('Current password is incorrect');
      return;
    }

    if (newPassword.length < 6) {
      toast.error('New password must be at least 6 characters');
      return;
    }

    if (newPassword !== confirmPassword) {
      toast.error('New passwords do not match');
      return;
    }

    // Update password
    const userIndex = users.findIndex((u: UserData) => u.email === currentUser.email);
    if (userIndex !== -1) {
      users[userIndex] = { ...users[userIndex], password: newPassword };
      localStorage.setItem('users', JSON.stringify(users));
      
      setCurrentPassword('');
      setNewPassword('');
      setConfirmPassword('');
      toast.success('Password changed successfully');
    }
  };

  // Export user data
  const handleExportData = () => {
    const userData = {
      profile: currentUser,
      settings: settings,
      notifications: localStorage.getItem(`notifications_${currentUser.email}`),
      studiedSubjects: localStorage.getItem(`studied_subjects_${currentUser.email}`),
      quizProgress: localStorage.getItem(`quiz_progress_${currentUser.email}`),
    };

    const dataStr = JSON.stringify(userData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `arthadok-data-${currentUser.email}-${new Date().toISOString().split('T')[0]}.json`;
    link.click();
    URL.revokeObjectURL(url);
    
    toast.success('Data exported successfully');
  };

  return (
    <Tabs defaultValue="profile" className="w-full">
      <TabsList className="grid w-full grid-cols-5">
        <TabsTrigger value="profile" className="gap-1">
          <User className="w-3 h-3" />
          <span className="hidden sm:inline">Profile</span>
        </TabsTrigger>
        <TabsTrigger value="appearance" className="gap-1">
          <Palette className="w-3 h-3" />
          <span className="hidden sm:inline">Appearance</span>
        </TabsTrigger>
        <TabsTrigger value="notifications" className="gap-1">
          <Bell className="w-3 h-3" />
          <span className="hidden sm:inline">Notifications</span>
        </TabsTrigger>
        <TabsTrigger value="learning" className="gap-1">
          <GraduationCap className="w-3 h-3" />
          <span className="hidden sm:inline">Learning</span>
        </TabsTrigger>
        <TabsTrigger value="account" className="gap-1">
          <Shield className="w-3 h-3" />
          <span className="hidden sm:inline">Account</span>
        </TabsTrigger>
      </TabsList>

      {/* Profile Tab */}
      <TabsContent value="profile" className="space-y-4">
        <Card className="p-6">
          <div className="space-y-4">
            <div>
              <h3 className="text-gray-900 dark:text-gray-100 mb-1">Personal Information</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Update your profile information
              </p>
            </div>
            
            <Separator />

            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  value={editedName}
                  onChange={(e) => setEditedName(e.target.value)}
                  disabled={!editMode}
                  className="dark:bg-gray-800"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  value={editedEmail}
                  onChange={(e) => setEditedEmail(e.target.value)}
                  disabled={!editMode}
                  className="dark:bg-gray-800"
                />
              </div>

              <div className="space-y-2">
                <Label>Account Type</Label>
                <div className="flex gap-2">
                  <Badge variant={currentUser.userType === 'admin' ? 'default' : 'secondary'}>
                    {currentUser.userType === 'admin' ? 'Administrator' : 'Student'}
                  </Badge>
                </div>
              </div>

              {currentUser.userType === 'student' && (
                <>
                  <div className="space-y-2">
                    <Label>Course</Label>
                    <div className="flex gap-2">
                      <Badge variant="outline">{currentUser.course}</Badge>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Level</Label>
                    <div className="flex gap-2">
                      <Badge variant="outline">{currentUser.level}</Badge>
                    </div>
                  </div>
                </>
              )}
            </div>

            <div className="flex gap-2 pt-2">
              {!editMode ? (
                <Button onClick={() => setEditMode(true)}>
                  Edit Profile
                </Button>
              ) : (
                <>
                  <Button onClick={handleSaveProfile}>
                    <Check className="w-4 h-4 mr-2" />
                    Save Changes
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setEditMode(false);
                      setEditedName(currentUser.name);
                      setEditedEmail(currentUser.email);
                    }}
                  >
                    Cancel
                  </Button>
                </>
              )}
            </div>
          </div>
        </Card>
      </TabsContent>

      {/* Appearance Tab */}
      <TabsContent value="appearance" className="space-y-4">
        <Card className="p-6">
          <div className="space-y-4">
            <div>
              <h3 className="text-gray-900 dark:text-gray-100 mb-1">Appearance Settings</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Customize how the app looks
              </p>
            </div>
            
            <Separator />

            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Dark Mode</Label>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Switch between light and dark theme
                  </p>
                </div>
                <Switch
                  checked={isDarkMode}
                  onCheckedChange={onToggleDarkMode}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="fontSize">Font Size</Label>
                <Select
                  value={settings.appearance.fontSize}
                  onValueChange={(value: any) => updateAppearanceSetting('fontSize', value)}
                >
                  <SelectTrigger id="fontSize" className="dark:bg-gray-800">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="small">Small</SelectItem>
                    <SelectItem value="medium">Medium (Default)</SelectItem>
                    <SelectItem value="large">Large</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Compact Mode</Label>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Reduce spacing for more content on screen
                  </p>
                </div>
                <Switch
                  checked={settings.appearance.compactMode}
                  onCheckedChange={(checked) => updateAppearanceSetting('compactMode', checked)}
                />
              </div>
            </div>
          </div>
        </Card>
      </TabsContent>

      {/* Notifications Tab */}
      <TabsContent value="notifications" className="space-y-4">
        <Card className="p-6">
          <div className="space-y-4">
            <div>
              <h3 className="text-gray-900 dark:text-gray-100 mb-1">Notification Preferences</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Choose which notifications you want to receive
              </p>
            </div>
            
            <Separator />

            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Welcome Messages</Label>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Receive welcome notifications and tips
                  </p>
                </div>
                <Switch
                  checked={settings.notifications.welcomeMessages}
                  onCheckedChange={(checked) => updateNotificationSetting('welcomeMessages', checked)}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Subject Progress</Label>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Get notified when you start new subjects
                  </p>
                </div>
                <Switch
                  checked={settings.notifications.subjectProgress}
                  onCheckedChange={(checked) => updateNotificationSetting('subjectProgress', checked)}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Quiz Results</Label>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Notifications for quiz completions and scores
                  </p>
                </div>
                <Switch
                  checked={settings.notifications.quizResults}
                  onCheckedChange={(checked) => updateNotificationSetting('quizResults', checked)}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Achievements</Label>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Get notified when you unlock achievements
                  </p>
                </div>
                <Switch
                  checked={settings.notifications.achievements}
                  onCheckedChange={(checked) => updateNotificationSetting('achievements', checked)}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>System Updates</Label>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Important updates and announcements
                  </p>
                </div>
                <Switch
                  checked={settings.notifications.systemUpdates}
                  onCheckedChange={(checked) => updateNotificationSetting('systemUpdates', checked)}
                />
              </div>
            </div>
          </div>
        </Card>
      </TabsContent>

      {/* Learning Tab */}
      <TabsContent value="learning" className="space-y-4">
        <Card className="p-6">
          <div className="space-y-4">
            <div>
              <h3 className="text-gray-900 dark:text-gray-100 mb-1">Learning Preferences</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Customize your learning experience
              </p>
            </div>
            
            <Separator />

            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Auto-Advance</Label>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Automatically move to next question in quizzes
                  </p>
                </div>
                <Switch
                  checked={settings.learning.autoAdvance}
                  onCheckedChange={(checked) => updateLearningSetting('autoAdvance', checked)}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Show Hints</Label>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Display helpful hints during learning
                  </p>
                </div>
                <Switch
                  checked={settings.learning.showHints}
                  onCheckedChange={(checked) => updateLearningSetting('showHints', checked)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="difficulty">Quiz Difficulty Filter</Label>
                <Select
                  value={settings.learning.quizDifficulty}
                  onValueChange={(value: any) => updateLearningSetting('quizDifficulty', value)}
                >
                  <SelectTrigger id="difficulty" className="dark:bg-gray-800">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Levels</SelectItem>
                    <SelectItem value="beginner">Beginner Only</SelectItem>
                    <SelectItem value="intermediate">Intermediate Only</SelectItem>
                    <SelectItem value="advanced">Advanced Only</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="questionsPerSession">Questions Per Quiz Session</Label>
                <Select
                  value={settings.learning.questionsPerSession.toString()}
                  onValueChange={(value) => updateLearningSetting('questionsPerSession', parseInt(value))}
                >
                  <SelectTrigger id="questionsPerSession" className="dark:bg-gray-800">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="5">5 Questions</SelectItem>
                    <SelectItem value="10">10 Questions (Default)</SelectItem>
                    <SelectItem value="15">15 Questions</SelectItem>
                    <SelectItem value="20">20 Questions</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </Card>
      </TabsContent>

      {/* Account Tab */}
      <TabsContent value="account" className="space-y-4">
        {/* Change Password */}
        <Card className="p-6">
          <div className="space-y-4">
            <div>
              <h3 className="text-gray-900 dark:text-gray-100 mb-1">Change Password</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Update your account password
              </p>
            </div>
            
            <Separator />

            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="currentPassword">Current Password</Label>
                <Input
                  id="currentPassword"
                  type="password"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  className="dark:bg-gray-800"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="newPassword">New Password</Label>
                <Input
                  id="newPassword"
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="dark:bg-gray-800"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm New Password</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="dark:bg-gray-800"
                />
              </div>

              <Button onClick={handleChangePassword}>
                <Key className="w-4 h-4 mr-2" />
                Change Password
              </Button>
            </div>
          </div>
        </Card>

        {/* Data Management */}
        <Card className="p-6">
          <div className="space-y-4">
            <div>
              <h3 className="text-gray-900 dark:text-gray-100 mb-1">Data Management</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Manage your learning data and progress
              </p>
            </div>
            
            <Separator />

            <div className="space-y-3">
              <Button variant="outline" onClick={handleExportData} className="w-full justify-start">
                <Download className="w-4 h-4 mr-2" />
                Export My Data
              </Button>

              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button variant="outline" className="w-full justify-start text-orange-600 hover:text-orange-700 hover:bg-orange-50 dark:hover:bg-orange-950">
                    <Trash2 className="w-4 h-4 mr-2" />
                    Clear Learning Progress
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Clear Learning Progress?</AlertDialogTitle>
                    <AlertDialogDescription>
                      This will delete all your quiz scores, studied subjects, and learning progress. 
                      Your account and settings will remain intact. This action cannot be undone.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction
                      onClick={onClearProgress}
                      className="bg-orange-600 hover:bg-orange-700"
                    >
                      Clear Progress
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </div>
        </Card>

        {/* Danger Zone */}
        <Card className="p-6 border-red-200 dark:border-red-900">
          <div className="space-y-4">
            <div>
              <h3 className="text-red-600 dark:text-red-400 mb-1 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5" />
                Danger Zone
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Irreversible and destructive actions
              </p>
            </div>
            
            <Separator className="bg-red-200 dark:bg-red-900" />

            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="destructive" className="w-full justify-start">
                  <Trash2 className="w-4 h-4 mr-2" />
                  Delete Account
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Delete Account Permanently?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This will permanently delete your account, all your learning progress, 
                    settings, and personal data. This action cannot be undone and you will 
                    be logged out immediately.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction
                    onClick={onDeleteAccount}
                    className="bg-red-600 hover:bg-red-700"
                  >
                    Delete Account
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </Card>
      </TabsContent>
    </Tabs>
  );
}

import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Badge } from './ui/badge';
import { ScrollArea } from './ui/scroll-area';
import { Alert, AlertDescription } from './ui/alert';
import { 
  Users, BookOpen, Video, Briefcase, MessageSquare, Settings, 
  BarChart3, UserPlus, Trash2, Shield, ShieldOff, Edit, Save,
  X, ArrowLeft, Search, Plus, Eye, CheckCircle, XCircle, Clock,
  TrendingUp, GraduationCap, Calendar, Award
} from 'lucide-react';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from './ui/table';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from './ui/dialog';
import { Switch } from './ui/switch';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { toast } from 'sonner@2.0.3';

interface UserData {
  name: string;
  email: string;
  phone: string;
  dob: string;
  address: string;
  level: string;
  userType?: string;
  password?: string;
}

interface KnowledgePoolVideo {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  videoUrl: string;
  price: number;
  category: string;
  instructor: string;
  duration: string;
  uploadedBy: string;
  uploadDate: Date;
  approved: boolean;
  views: number;
  purchases: number;
}

interface CareerOpportunity {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  salary: string;
  description: string;
  requirements: string[];
  postedDate: Date;
  status: 'active' | 'inactive';
}

interface QAItem {
  id: string;
  level: string;
  subject: string;
  question: string;
  answer: string;
  approach: string;
  conceptExplanation: string;
  imageUrl?: string;
  createdBy: string;
  createdDate: Date;
  lastModified: Date;
}

interface AdminPanelProps {
  onClose?: () => void;
  currentUser: UserData;
}

export function AdminPanel({ onClose, currentUser }: AdminPanelProps) {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [users, setUsers] = useState<UserData[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [editingUser, setEditingUser] = useState<UserData | null>(null);
  const [videos, setVideos] = useState<KnowledgePoolVideo[]>([]);
  const [careers, setCareers] = useState<CareerOpportunity[]>([]);
  const [qaItems, setQAItems] = useState<QAItem[]>([]);
  const [showAddVideo, setShowAddVideo] = useState(false);
  const [showAddCareer, setShowAddCareer] = useState(false);
  const [showAddQA, setShowAddQA] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<KnowledgePoolVideo | null>(null);
  const [selectedCareer, setSelectedCareer] = useState<CareerOpportunity | null>(null);

  // Form states for new video
  const [newVideo, setNewVideo] = useState({
    title: '',
    description: '',
    thumbnailUrl: '',
    videoUrl: '',
    price: '',
    category: '',
    instructor: '',
    duration: ''
  });

  // Form states for new career
  const [newCareer, setNewCareer] = useState({
    title: '',
    company: '',
    location: '',
    type: '',
    salary: '',
    description: '',
    requirements: ''
  });

  // Form states for new Q&A
  const [newQA, setNewQA] = useState({
    level: '',
    subject: '',
    question: '',
    answer: '',
    approach: '',
    conceptExplanation: '',
    imageUrl: '',
    category: 'Other' as 'Theoretical Questions & Answers' | 'Practical Questions & Answers' | 'Case Studies' | 'Multiple Choice Questions' | 'Extract of Financial Statements' | 'Formulas & Insights' | 'Extract of Audit Report' | 'Other'
  });

  // Load data on mount
  useEffect(() => {
    loadUsers();
    loadVideos();
    loadCareers();
    loadQAItems();
  }, []);

  const loadUsers = () => {
    const storedUsers = JSON.parse(localStorage.getItem('users') || '[]');
    setUsers(storedUsers);
  };

  const loadVideos = () => {
    const storedVideos = JSON.parse(localStorage.getItem('knowledgePoolVideos') || '[]');
    const videosWithDates = storedVideos.map((v: any) => ({
      ...v,
      uploadDate: new Date(v.uploadDate)
    }));
    setVideos(videosWithDates);
  };

  const loadCareers = () => {
    const storedCareers = JSON.parse(localStorage.getItem('careerOpportunities') || '[]');
    const careersWithDates = storedCareers.map((c: any) => ({
      ...c,
      postedDate: new Date(c.postedDate)
    }));
    setCareers(careersWithDates);
  };

  const loadQAItems = () => {
    const storedQA = JSON.parse(localStorage.getItem('qaItems') || '[]');
    const qaWithDates = storedQA.map((q: any) => ({
      ...q,
      createdDate: new Date(q.createdDate),
      lastModified: new Date(q.lastModified)
    }));
    setQAItems(qaWithDates);
  };

  // User Management Functions
  const toggleUserAdmin = (email: string) => {
    const updatedUsers = users.map(u => 
      u.email === email 
        ? { ...u, userType: u.userType === 'admin' ? 'student' : 'admin' }
        : u
    );
    setUsers(updatedUsers);
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    toast.success(`User ${email} admin status updated`);
  };

  const deleteUser = (email: string) => {
    if (email === currentUser.email) {
      toast.error("You cannot delete your own account from admin panel");
      return;
    }
    const updatedUsers = users.filter(u => u.email !== email);
    setUsers(updatedUsers);
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    
    // Clear user data
    localStorage.removeItem(`settings_${email}`);
    localStorage.removeItem(`notifications_${email}`);
    localStorage.removeItem(`studied_subjects_${email}`);
    localStorage.removeItem(`quiz_progress_${email}`);
    
    toast.success(`User ${email} deleted successfully`);
  };

  const updateUser = (updatedUser: UserData) => {
    const updatedUsers = users.map(u => 
      u.email === updatedUser.email ? updatedUser : u
    );
    setUsers(updatedUsers);
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    setEditingUser(null);
    toast.success('User updated successfully');
  };

  // Video Management Functions
  const approveVideo = (videoId: string) => {
    const updatedVideos = videos.map(v => 
      v.id === videoId ? { ...v, approved: true } : v
    );
    setVideos(updatedVideos);
    localStorage.setItem('knowledgePoolVideos', JSON.stringify(updatedVideos));
    toast.success('Video approved');
  };

  const rejectVideo = (videoId: string) => {
    const updatedVideos = videos.filter(v => v.id !== videoId);
    setVideos(updatedVideos);
    localStorage.setItem('knowledgePoolVideos', JSON.stringify(updatedVideos));
    toast.success('Video rejected and removed');
  };

  const deleteVideo = (videoId: string) => {
    const updatedVideos = videos.filter(v => v.id !== videoId);
    setVideos(updatedVideos);
    localStorage.setItem('knowledgePoolVideos', JSON.stringify(updatedVideos));
    toast.success('Video deleted');
  };

  // Career Management Functions
  const toggleCareerStatus = (careerId: string) => {
    const updatedCareers = careers.map(c => 
      c.id === careerId 
        ? { ...c, status: c.status === 'active' ? 'inactive' : 'active' }
        : c
    );
    setCareers(updatedCareers);
    localStorage.setItem('careerOpportunities', JSON.stringify(updatedCareers));
    toast.success('Career opportunity status updated');
  };

  const deleteCareer = (careerId: string) => {
    const updatedCareers = careers.filter(c => c.id !== careerId);
    setCareers(updatedCareers);
    localStorage.setItem('careerOpportunities', JSON.stringify(updatedCareers));
    toast.success('Career opportunity deleted');
  };

  // Q&A Management Functions
  const deleteQA = (qaId: string) => {
    const updatedQA = qaItems.filter(q => q.id !== qaId);
    setQAItems(updatedQA);
    localStorage.setItem('qaItems', JSON.stringify(updatedQA));
    toast.success('Q&A item deleted');
  };

  // Add new video
  const handleAddVideo = () => {
    if (!newVideo.title || !newVideo.description || !newVideo.price || !newVideo.category) {
      toast.error('Please fill in all required fields');
      return;
    }

    const video: KnowledgePoolVideo = {
      id: Date.now().toString(),
      title: newVideo.title,
      description: newVideo.description,
      thumbnailUrl: newVideo.thumbnailUrl || 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400',
      videoUrl: newVideo.videoUrl || '#',
      price: parseFloat(newVideo.price),
      category: newVideo.category,
      instructor: newVideo.instructor || currentUser.name,
      duration: newVideo.duration || '30 mins',
      uploadedBy: currentUser.email,
      uploadDate: new Date(),
      approved: true, // Auto-approve admin uploads
      views: 0,
      purchases: 0
    };

    const updatedVideos = [...videos, video];
    setVideos(updatedVideos);
    localStorage.setItem('knowledgePoolVideos', JSON.stringify(updatedVideos));
    
    // Reset form
    setNewVideo({
      title: '',
      description: '',
      thumbnailUrl: '',
      videoUrl: '',
      price: '',
      category: '',
      instructor: '',
      duration: ''
    });
    setShowAddVideo(false);
    toast.success('Video added successfully');
  };

  // Add new career
  const handleAddCareer = () => {
    if (!newCareer.title || !newCareer.company || !newCareer.location || !newCareer.description) {
      toast.error('Please fill in all required fields');
      return;
    }

    const career: CareerOpportunity = {
      id: Date.now().toString(),
      title: newCareer.title,
      company: newCareer.company,
      location: newCareer.location,
      type: newCareer.type || 'Full-time',
      salary: newCareer.salary,
      description: newCareer.description,
      requirements: newCareer.requirements.split('\n').filter(r => r.trim()),
      postedDate: new Date(),
      status: 'active'
    };

    const updatedCareers = [...careers, career];
    setCareers(updatedCareers);
    localStorage.setItem('careerOpportunities', JSON.stringify(updatedCareers));
    
    // Reset form
    setNewCareer({
      title: '',
      company: '',
      location: '',
      type: '',
      salary: '',
      description: '',
      requirements: ''
    });
    setShowAddCareer(false);
    toast.success('Career opportunity added successfully');
  };

  // Add new Q&A
  const handleAddQA = () => {
    if (!newQA.level || !newQA.subject || !newQA.question || !newQA.answer) {
      toast.error('Please fill in all required fields');
      return;
    }

    const qa: QAItem = {
      id: Date.now().toString(),
      level: newQA.level,
      subject: newQA.subject,
      question: newQA.question,
      answer: newQA.answer,
      approach: newQA.approach,
      conceptExplanation: newQA.conceptExplanation,
      imageUrl: newQA.imageUrl,
      createdBy: currentUser.email,
      createdDate: new Date(),
      lastModified: new Date()
    };

    const updatedQA = [...qaItems, qa];
    setQAItems(updatedQA);
    localStorage.setItem('qaItems', JSON.stringify(updatedQA));
    
    // Reset form
    setNewQA({
      level: '',
      subject: '',
      question: '',
      answer: '',
      approach: '',
      conceptExplanation: '',
      imageUrl: ''
    });
    setShowAddQA(false);
    toast.success('Q&A item added successfully');
  };

  // Statistics
  const totalUsers = users.length;
  const adminUsers = users.filter(u => u.userType === 'admin').length;
  const studentUsers = users.filter(u => u.userType !== 'admin').length;
  const pendingVideos = videos.filter(v => !v.approved).length;
  const approvedVideos = videos.filter(v => v.approved).length;
  const activeCareers = careers.filter(c => c.status === 'active').length;
  const totalQAs = qaItems.length;

  // Filter users based on search
  const filteredUsers = users.filter(u => 
    u.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    u.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    u.level.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Shield className="w-8 h-8 text-indigo-600" />
              <div>
                <CardTitle>Admin Panel</CardTitle>
                <CardDescription>
                  Manage users, content, and platform settings
                </CardDescription>
              </div>
            </div>
            {onClose && (
              <Button variant="outline" onClick={onClose}>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Platform
              </Button>
            )}
          </div>
        </CardHeader>
      </Card>

      {/* Main Content */}
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-6">
          <TabsTrigger value="dashboard">
            <BarChart3 className="w-4 h-4 mr-2" />
            Dashboard
          </TabsTrigger>
          <TabsTrigger value="users">
            <Users className="w-4 h-4 mr-2" />
            Users
          </TabsTrigger>
          <TabsTrigger value="videos">
            <Video className="w-4 h-4 mr-2" />
            Videos
          </TabsTrigger>
          <TabsTrigger value="careers">
            <Briefcase className="w-4 h-4 mr-2" />
            Careers
          </TabsTrigger>
          <TabsTrigger value="qa">
            <MessageSquare className="w-4 h-4 mr-2" />
            Q&A
          </TabsTrigger>
          <TabsTrigger value="settings">
            <Settings className="w-4 h-4 mr-2" />
            Settings
          </TabsTrigger>
        </TabsList>

        {/* Dashboard Tab */}
        <TabsContent value="dashboard" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card>
              <CardHeader className="pb-2">
                <CardDescription>Total Users</CardDescription>
                <CardTitle className="text-3xl">{totalUsers}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Users className="w-4 h-4" />
                  <span>{adminUsers} admins, {studentUsers} students</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardDescription>Knowledge Pool Videos</CardDescription>
                <CardTitle className="text-3xl">{videos.length}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>{approvedVideos} approved, {pendingVideos} pending</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardDescription>Career Opportunities</CardDescription>
                <CardTitle className="text-3xl">{careers.length}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Briefcase className="w-4 h-4" />
                  <span>{activeCareers} active positions</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardDescription>Q&A Items</CardDescription>
                <CardTitle className="text-3xl">{totalQAs}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MessageSquare className="w-4 h-4" />
                  <span>Across all subjects</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recent Activity */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Stats</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-blue-500" />
                  <span>CA Students</span>
                </div>
                <Badge>{users.filter(u => u.level.startsWith('CA')).length}</Badge>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-green-500" />
                  <span>CMA Students</span>
                </div>
                <Badge>{users.filter(u => u.level.startsWith('CMA')).length}</Badge>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-purple-500" />
                  <span>CS Students</span>
                </div>
                <Badge>{users.filter(u => u.level.startsWith('CS')).length}</Badge>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Video className="w-5 h-5 text-orange-500" />
                  <span>Total Video Views</span>
                </div>
                <Badge>{videos.reduce((acc, v) => acc + (v.views || 0), 0)}</Badge>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-yellow-500" />
                  <span>Total Video Purchases</span>
                </div>
                <Badge>{videos.reduce((acc, v) => acc + (v.purchases || 0), 0)}</Badge>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Users Tab */}
        <TabsContent value="users" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>User Management</CardTitle>
                  <CardDescription>Manage all registered users</CardDescription>
                </div>
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <Input
                      placeholder="Search users..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10 w-64"
                    />
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[500px]">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Level</TableHead>
                      <TableHead>Role</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredUsers.map((user) => (
                      <TableRow key={user.email}>
                        <TableCell>{user.name}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>
                          <Badge variant="outline">{user.level}</Badge>
                        </TableCell>
                        <TableCell>
                          {user.userType === 'admin' ? (
                            <Badge className="bg-purple-500">
                              <Shield className="w-3 h-3 mr-1" />
                              Admin
                            </Badge>
                          ) : (
                            <Badge variant="secondary">Student</Badge>
                          )}
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => setEditingUser(user)}
                            >
                              <Edit className="w-3 h-3" />
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => toggleUserAdmin(user.email)}
                              disabled={user.email === currentUser.email}
                            >
                              {user.userType === 'admin' ? (
                                <ShieldOff className="w-3 h-3" />
                              ) : (
                                <Shield className="w-3 h-3" />
                              )}
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => deleteUser(user.email)}
                              disabled={user.email === currentUser.email}
                            >
                              <Trash2 className="w-3 h-3 text-red-500" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </ScrollArea>
            </CardContent>
          </Card>

          {/* Edit User Dialog */}
          {editingUser && (
            <Dialog open={!!editingUser} onOpenChange={() => setEditingUser(null)}>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Edit User</DialogTitle>
                  <DialogDescription>
                    Update user information
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                  <div>
                    <Label>Name</Label>
                    <Input
                      value={editingUser.name}
                      onChange={(e) => setEditingUser({ ...editingUser, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label>Email</Label>
                    <Input
                      value={editingUser.email}
                      disabled
                    />
                  </div>
                  <div>
                    <Label>Phone</Label>
                    <Input
                      value={editingUser.phone}
                      onChange={(e) => setEditingUser({ ...editingUser, phone: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label>Level</Label>
                    <Select 
                      value={editingUser.level} 
                      onValueChange={(value) => setEditingUser({ ...editingUser, level: value })}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="CA Foundation">CA Foundation</SelectItem>
                        <SelectItem value="CA Intermediate">CA Intermediate</SelectItem>
                        <SelectItem value="CA Final">CA Final</SelectItem>
                        <SelectItem value="CMA Foundation">CMA Foundation</SelectItem>
                        <SelectItem value="CMA Intermediate">CMA Intermediate</SelectItem>
                        <SelectItem value="CMA Final">CMA Final</SelectItem>
                        <SelectItem value="CS Foundation">CS Foundation</SelectItem>
                        <SelectItem value="CS Executive">CS Executive</SelectItem>
                        <SelectItem value="CS Professional">CS Professional</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <DialogFooter>
                  <Button variant="outline" onClick={() => setEditingUser(null)}>
                    Cancel
                  </Button>
                  <Button onClick={() => updateUser(editingUser)}>
                    Save Changes
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          )}
        </TabsContent>

        {/* Videos Tab */}
        <TabsContent value="videos" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Knowledge Pool Videos</CardTitle>
                  <CardDescription>
                    Manage and moderate uploaded videos
                  </CardDescription>
                </div>
                <Button onClick={() => setShowAddVideo(true)}>
                  <Plus className="w-4 h-4 mr-2" />
                  Upload Video
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              {pendingVideos > 0 && (
                <Alert className="mb-4">
                  <Clock className="w-4 h-4" />
                  <AlertDescription>
                    You have {pendingVideos} video(s) pending approval
                  </AlertDescription>
                </Alert>
              )}
              <ScrollArea className="h-[500px]">
                <div className="space-y-4">
                  {videos.length === 0 ? (
                    <div className="text-center py-12 text-muted-foreground">
                      <Video className="w-12 h-12 mx-auto mb-3 opacity-30" />
                      <p>No videos uploaded yet</p>
                    </div>
                  ) : (
                    videos.map((video) => (
                      <Card key={video.id}>
                        <CardContent className="p-4">
                          <div className="flex items-start gap-4">
                            <img 
                              src={video.thumbnailUrl} 
                              alt={video.title}
                              className="w-32 h-20 object-cover rounded"
                            />
                            <div className="flex-1">
                              <div className="flex items-start justify-between">
                                <div>
                                  <h4 className="font-semibold">{video.title}</h4>
                                  <p className="text-sm text-muted-foreground line-clamp-2">
                                    {video.description}
                                  </p>
                                  <div className="flex items-center gap-4 mt-2 text-sm">
                                    <Badge variant="outline">{video.category}</Badge>
                                    <span className="text-muted-foreground">₹{video.price}</span>
                                    <span className="text-muted-foreground">{video.duration}</span>
                                    <span className="text-muted-foreground">{video.views || 0} views</span>
                                  </div>
                                </div>
                                <div className="flex flex-col items-end gap-2">
                                  {video.approved ? (
                                    <Badge className="bg-green-500">
                                      <CheckCircle className="w-3 h-3 mr-1" />
                                      Approved
                                    </Badge>
                                  ) : (
                                    <Badge variant="secondary">
                                      <Clock className="w-3 h-3 mr-1" />
                                      Pending
                                    </Badge>
                                  )}
                                  <div className="flex gap-2">
                                    {!video.approved && (
                                      <Button
                                        size="sm"
                                        onClick={() => approveVideo(video.id)}
                                      >
                                        <CheckCircle className="w-3 h-3 mr-1" />
                                        Approve
                                      </Button>
                                    )}
                                    <Button
                                      size="sm"
                                      variant="destructive"
                                      onClick={() => deleteVideo(video.id)}
                                    >
                                      <Trash2 className="w-3 h-3" />
                                    </Button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))
                  )}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>

          {/* Add Video Dialog */}
          <Dialog open={showAddVideo} onOpenChange={setShowAddVideo}>
            <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>Upload New Video</DialogTitle>
                <DialogDescription>
                  Add a new video to the Knowledge Pool
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <Label>Title *</Label>
                  <Input
                    value={newVideo.title}
                    onChange={(e) => setNewVideo({ ...newVideo, title: e.target.value })}
                    placeholder="Enter video title"
                  />
                </div>
                <div>
                  <Label>Description *</Label>
                  <Textarea
                    value={newVideo.description}
                    onChange={(e) => setNewVideo({ ...newVideo, description: e.target.value })}
                    placeholder="Enter video description"
                    rows={3}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label>Category *</Label>
                    <Select 
                      value={newVideo.category} 
                      onValueChange={(value) => setNewVideo({ ...newVideo, category: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Accounting">Accounting</SelectItem>
                        <SelectItem value="Taxation">Taxation</SelectItem>
                        <SelectItem value="Audit">Audit</SelectItem>
                        <SelectItem value="Corporate Law">Corporate Law</SelectItem>
                        <SelectItem value="Financial Management">Financial Management</SelectItem>
                        <SelectItem value="Cost Management">Cost Management</SelectItem>
                        <SelectItem value="Economics">Economics</SelectItem>
                        <SelectItem value="Other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label>Price (₹) *</Label>
                    <Input
                      type="number"
                      value={newVideo.price}
                      onChange={(e) => setNewVideo({ ...newVideo, price: e.target.value })}
                      placeholder="199"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label>Instructor</Label>
                    <Input
                      value={newVideo.instructor}
                      onChange={(e) => setNewVideo({ ...newVideo, instructor: e.target.value })}
                      placeholder="Instructor name"
                    />
                  </div>
                  <div>
                    <Label>Duration</Label>
                    <Input
                      value={newVideo.duration}
                      onChange={(e) => setNewVideo({ ...newVideo, duration: e.target.value })}
                      placeholder="e.g., 45 mins"
                    />
                  </div>
                </div>
                <div>
                  <Label>Thumbnail URL</Label>
                  <Input
                    value={newVideo.thumbnailUrl}
                    onChange={(e) => setNewVideo({ ...newVideo, thumbnailUrl: e.target.value })}
                    placeholder="https://example.com/thumbnail.jpg"
                  />
                </div>
                <div>
                  <Label>Video URL</Label>
                  <Input
                    value={newVideo.videoUrl}
                    onChange={(e) => setNewVideo({ ...newVideo, videoUrl: e.target.value })}
                    placeholder="https://example.com/video.mp4"
                  />
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setShowAddVideo(false)}>
                  Cancel
                </Button>
                <Button onClick={handleAddVideo}>
                  Upload Video
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </TabsContent>

        {/* Careers Tab */}
        <TabsContent value="careers" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Career Opportunities</CardTitle>
                  <CardDescription>Manage job listings</CardDescription>
                </div>
                <Button onClick={() => setShowAddCareer(true)}>
                  <Plus className="w-4 h-4 mr-2" />
                  Add Career
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[500px]">
                {careers.length === 0 ? (
                  <div className="text-center py-12 text-muted-foreground">
                    <Briefcase className="w-12 h-12 mx-auto mb-3 opacity-30" />
                    <p>No career opportunities posted yet</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {careers.map((career) => (
                      <Card key={career.id}>
                        <CardContent className="p-4">
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <h4 className="font-semibold">{career.title}</h4>
                              <p className="text-sm text-muted-foreground">{career.company}</p>
                              <div className="flex items-center gap-4 mt-2 text-sm">
                                <Badge variant="outline">{career.location}</Badge>
                                <Badge variant="outline">{career.type}</Badge>
                                <span className="text-muted-foreground">{career.salary}</span>
                              </div>
                            </div>
                            <div className="flex flex-col items-end gap-2">
                              {career.status === 'active' ? (
                                <Badge className="bg-green-500">Active</Badge>
                              ) : (
                                <Badge variant="secondary">Inactive</Badge>
                              )}
                              <div className="flex gap-2">
                                <Button
                                  size="sm"
                                  variant="outline"
                                  onClick={() => toggleCareerStatus(career.id)}
                                >
                                  {career.status === 'active' ? 'Deactivate' : 'Activate'}
                                </Button>
                                <Button
                                  size="sm"
                                  variant="destructive"
                                  onClick={() => deleteCareer(career.id)}
                                >
                                  <Trash2 className="w-3 h-3" />
                                </Button>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                )}
              </ScrollArea>
            </CardContent>
          </Card>

          {/* Add Career Dialog */}
          <Dialog open={showAddCareer} onOpenChange={setShowAddCareer}>
            <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>Add Career Opportunity</DialogTitle>
                <DialogDescription>
                  Post a new job listing
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <Label>Job Title *</Label>
                  <Input
                    value={newCareer.title}
                    onChange={(e) => setNewCareer({ ...newCareer, title: e.target.value })}
                    placeholder="e.g., Senior Accountant"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label>Company *</Label>
                    <Input
                      value={newCareer.company}
                      onChange={(e) => setNewCareer({ ...newCareer, company: e.target.value })}
                      placeholder="Company name"
                    />
                  </div>
                  <div>
                    <Label>Location *</Label>
                    <Input
                      value={newCareer.location}
                      onChange={(e) => setNewCareer({ ...newCareer, location: e.target.value })}
                      placeholder="e.g., Mumbai, India"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label>Job Type</Label>
                    <Select 
                      value={newCareer.type} 
                      onValueChange={(value) => setNewCareer({ ...newCareer, type: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select job type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Full-time">Full-time</SelectItem>
                        <SelectItem value="Part-time">Part-time</SelectItem>
                        <SelectItem value="Contract">Contract</SelectItem>
                        <SelectItem value="Internship">Internship</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label>Salary</Label>
                    <Input
                      value={newCareer.salary}
                      onChange={(e) => setNewCareer({ ...newCareer, salary: e.target.value })}
                      placeholder="e.g., ₹8-12 LPA"
                    />
                  </div>
                </div>
                <div>
                  <Label>Description *</Label>
                  <Textarea
                    value={newCareer.description}
                    onChange={(e) => setNewCareer({ ...newCareer, description: e.target.value })}
                    placeholder="Enter job description"
                    rows={4}
                  />
                </div>
                <div>
                  <Label>Requirements (one per line)</Label>
                  <Textarea
                    value={newCareer.requirements}
                    onChange={(e) => setNewCareer({ ...newCareer, requirements: e.target.value })}
                    placeholder="CA/CMA/CS qualification&#10;3+ years experience&#10;Knowledge of taxation"
                    rows={4}
                  />
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setShowAddCareer(false)}>
                  Cancel
                </Button>
                <Button onClick={handleAddCareer}>
                  Add Career
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </TabsContent>

        {/* Q&A Tab */}
        <TabsContent value="qa" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Question & Answers</CardTitle>
                  <CardDescription>Moderate Q&A content</CardDescription>
                </div>
                <Button onClick={() => setShowAddQA(true)}>
                  <Plus className="w-4 h-4 mr-2" />
                  Add Q&A
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[500px]">
                {qaItems.length === 0 ? (
                  <div className="text-center py-12 text-muted-foreground">
                    <MessageSquare className="w-12 h-12 mx-auto mb-3 opacity-30" />
                    <p>No Q&A items created yet</p>
                  </div>
                ) : (
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Level</TableHead>
                        <TableHead>Subject</TableHead>
                        <TableHead>Question</TableHead>
                        <TableHead>Created By</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {qaItems.map((qa) => (
                        <TableRow key={qa.id}>
                          <TableCell>
                            <Badge variant="outline">{qa.level}</Badge>
                          </TableCell>
                          <TableCell className="max-w-[150px] truncate">
                            {qa.subject}
                          </TableCell>
                          <TableCell className="max-w-[200px]">
                            <p className="line-clamp-2 text-sm">{qa.question}</p>
                          </TableCell>
                          <TableCell>{qa.createdBy}</TableCell>
                          <TableCell className="text-sm text-muted-foreground">
                            {qa.createdDate.toLocaleDateString()}
                          </TableCell>
                          <TableCell>
                            <Button
                              size="sm"
                              variant="destructive"
                              onClick={() => deleteQA(qa.id)}
                            >
                              <Trash2 className="w-3 h-3" />
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                )}
              </ScrollArea>
            </CardContent>
          </Card>

          {/* Add Q&A Dialog */}
          <Dialog open={showAddQA} onOpenChange={setShowAddQA}>
            <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>Add Q&A Item</DialogTitle>
                <DialogDescription>
                  Create a new question and answer for CA Final students
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label>Level *</Label>
                    <Select 
                      value={newQA.level} 
                      onValueChange={(value) => setNewQA({ ...newQA, level: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="CA Foundation">CA Foundation</SelectItem>
                        <SelectItem value="CA Intermediate">CA Intermediate</SelectItem>
                        <SelectItem value="CA Final">CA Final</SelectItem>
                        <SelectItem value="CMA Foundation">CMA Foundation</SelectItem>
                        <SelectItem value="CMA Intermediate">CMA Intermediate</SelectItem>
                        <SelectItem value="CMA Final">CMA Final</SelectItem>
                        <SelectItem value="CS Foundation">CS Foundation</SelectItem>
                        <SelectItem value="CS Executive">CS Executive</SelectItem>
                        <SelectItem value="CS Professional">CS Professional</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label>Subject *</Label>
                    <Input
                      value={newQA.subject}
                      onChange={(e) => setNewQA({ ...newQA, subject: e.target.value })}
                      placeholder="e.g., Financial Reporting"
                    />
                  </div>
                </div>
                <div>
                  <Label>Category *</Label>
                  <Select 
                    value={newQA.category} 
                    onValueChange={(value) => setNewQA({ ...newQA, category: value as any })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Theoretical Questions & Answers">Theoretical Questions & Answers</SelectItem>
                      <SelectItem value="Practical Questions & Answers">Practical Questions & Answers</SelectItem>
                      <SelectItem value="Case Studies">Case Studies</SelectItem>
                      <SelectItem value="Multiple Choice Questions">Multiple Choice Questions</SelectItem>
                      <SelectItem value="Extract of Financial Statements">Extract of Financial Statements</SelectItem>
                      <SelectItem value="Formulas & Insights">Formulas & Insights</SelectItem>
                      <SelectItem value="Extract of Audit Report">Extract of Audit Report</SelectItem>
                      <SelectItem value="Other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>Question *</Label>
                  <Textarea
                    value={newQA.question}
                    onChange={(e) => setNewQA({ ...newQA, question: e.target.value })}
                    placeholder="Enter the question"
                    rows={3}
                  />
                </div>
                <div>
                  <Label>Answer *</Label>
                  <Textarea
                    value={newQA.answer}
                    onChange={(e) => setNewQA({ ...newQA, answer: e.target.value })}
                    placeholder="Enter the answer"
                    rows={4}
                  />
                </div>
                <div>
                  <Label>How to Approach</Label>
                  <Textarea
                    value={newQA.approach}
                    onChange={(e) => setNewQA({ ...newQA, approach: e.target.value })}
                    placeholder="Explain the approach to solve this question"
                    rows={3}
                  />
                </div>
                <div>
                  <Label>Concept & Explanation</Label>
                  <Textarea
                    value={newQA.conceptExplanation}
                    onChange={(e) => setNewQA({ ...newQA, conceptExplanation: e.target.value })}
                    placeholder="Provide detailed concept explanation"
                    rows={4}
                  />
                </div>
                <div>
                  <Label>Image URL (Optional)</Label>
                  <Input
                    value={newQA.imageUrl}
                    onChange={(e) => setNewQA({ ...newQA, imageUrl: e.target.value })}
                    placeholder="https://example.com/diagram.jpg"
                  />
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setShowAddQA(false)}>
                  Cancel
                </Button>
                <Button onClick={handleAddQA}>
                  Add Q&A
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </TabsContent>

        {/* Settings Tab */}
        <TabsContent value="settings" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Platform Settings</CardTitle>
              <CardDescription>System-wide configuration</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <Alert>
                <Settings className="w-4 h-4" />
                <AlertDescription>
                  Platform settings are currently managed through localStorage. Consider migrating to a backend solution for centralized configuration management.
                </AlertDescription>
              </Alert>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Platform Statistics</Label>
                    <p className="text-sm text-muted-foreground">
                      View comprehensive platform usage statistics
                    </p>
                  </div>
                  <Button variant="outline">View Stats</Button>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label>Data Export</Label>
                    <p className="text-sm text-muted-foreground">
                      Export all platform data for backup
                    </p>
                  </div>
                  <Button variant="outline">Export Data</Button>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label>Clear Cache</Label>
                    <p className="text-sm text-muted-foreground">
                      Clear all cached data and temporary files
                    </p>
                  </div>
                  <Button variant="outline">Clear Cache</Button>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label>System Logs</Label>
                    <p className="text-sm text-muted-foreground">
                      View system activity and error logs
                    </p>
                  </div>
                  <Button variant="outline">View Logs</Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Database Migration</CardTitle>
              <CardDescription>Migrate to Supabase for enhanced features</CardDescription>
            </CardHeader>
            <CardContent>
              <Alert>
                <AlertDescription>
                  Currently using localStorage for data persistence. Consider migrating to Supabase for:
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Real-time authentication and authorization</li>
                    <li>Centralized database with PostgreSQL</li>
                    <li>File storage for videos and images</li>
                    <li>Multi-device synchronization</li>
                    <li>Better security and data integrity</li>
                    <li>Scalability for growing user base</li>
                  </ul>
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
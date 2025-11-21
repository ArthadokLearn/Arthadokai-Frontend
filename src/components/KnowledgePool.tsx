import { useState, useEffect } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from './ui/dialog';
import { Alert, AlertDescription } from './ui/alert';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { 
  Video, 
  Plus, 
  Play, 
  ShoppingCart, 
  Check, 
  Edit, 
  Trash2, 
  Search,
  IndianRupee,
  Clock,
  Eye,
  ArrowLeft,
  Lock,
  Upload,
  Briefcase,
  MapPin,
  Calendar,
  Building2,
  GraduationCap,
  Star,
  ExternalLink
} from 'lucide-react';
import { toast } from 'sonner@2.0.3';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface VideoItem {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  videoUrl: string;
  price: number;
  duration: string;
  instructor: string;
  category: string;
  createdAt: Date;
  views: number;
}

interface Opportunity {
  id: string;
  title: string;
  company: string;
  type: 'Audit Firm' | 'Company' | 'Job Work';
  location: string;
  experienceRequired: string;
  salary: string;
  description: string;
  requirements: string[];
  postedDate: Date;
  applicationDeadline: string;
  contactEmail: string;
  isActive: boolean;
}

interface KnowledgePoolProps {
  onBack: () => void;
  userEmail: string;
  isAdmin: boolean;
}

export function KnowledgePool({ onBack, userEmail, isAdmin }: KnowledgePoolProps) {
  const [activeTab, setActiveTab] = useState<'videos' | 'opportunities'>('videos');
  const [videos, setVideos] = useState<VideoItem[]>([]);
  const [purchasedVideos, setPurchasedVideos] = useState<string[]>([]);
  const [opportunities, setOpportunities] = useState<Opportunity[]>([]);
  const [savedOpportunities, setSavedOpportunities] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [showAddVideo, setShowAddVideo] = useState(false);
  const [showVideoPlayer, setShowVideoPlayer] = useState(false);
  const [currentVideo, setCurrentVideo] = useState<VideoItem | null>(null);
  const [editingVideo, setEditingVideo] = useState<VideoItem | null>(null);

  // Opportunities states
  const [opportunitySearchQuery, setOpportunitySearchQuery] = useState('');
  const [selectedOpportunityType, setSelectedOpportunityType] = useState<string>('All');
  const [showAddOpportunity, setShowAddOpportunity] = useState(false);
  const [editingOpportunity, setEditingOpportunity] = useState<Opportunity | null>(null);
  const [viewingOpportunity, setViewingOpportunity] = useState<Opportunity | null>(null);

  // Form states
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    thumbnailUrl: '',
    videoUrl: '',
    price: '',
    duration: '',
    instructor: '',
    category: ''
  });

  const [opportunityFormData, setOpportunityFormData] = useState({
    title: '',
    company: '',
    type: 'Company' as 'Audit Firm' | 'Company' | 'Job Work',
    location: '',
    experienceRequired: '',
    salary: '',
    description: '',
    requirements: '',
    applicationDeadline: '',
    contactEmail: ''
  });

  const categories = ['All', 'Accounting', 'Taxation', 'Audit', 'Corporate Law', 'Financial Management', 'Cost Management', 'Other'];
  const opportunityTypes = ['All', 'Audit Firm', 'Company', 'Job Work'];

  // Load videos and purchases on mount
  useEffect(() => {
    loadVideos();
    loadPurchases();
    loadOpportunities();
    loadSavedOpportunities();
  }, []);

  const loadVideos = () => {
    const storedVideos = localStorage.getItem('knowledge_pool_videos');
    if (storedVideos) {
      const parsed = JSON.parse(storedVideos);
      const videosWithDates = parsed.map((v: any) => ({
        ...v,
        createdAt: new Date(v.createdAt)
      }));
      setVideos(videosWithDates);
    } else {
      // Add sample videos
      const sampleVideos: VideoItem[] = [
        {
          id: '1',
          title: 'Advanced Tax Planning Strategies',
          description: 'Learn advanced techniques for tax planning and optimization for businesses and individuals.',
          thumbnailUrl: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800',
          videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
          price: 499,
          duration: '2h 30m',
          instructor: 'CA Rajesh Kumar',
          category: 'Taxation',
          createdAt: new Date(),
          views: 1234
        },
        {
          id: '2',
          title: 'GST Compliance Masterclass',
          description: 'Complete guide to GST compliance, return filing, and handling notices.',
          thumbnailUrl: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800',
          videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
          price: 699,
          duration: '3h 15m',
          instructor: 'CMA Priya Sharma',
          category: 'Taxation',
          createdAt: new Date(),
          views: 2156
        },
        {
          id: '3',
          title: 'Internal Audit Best Practices',
          description: 'Master internal audit techniques and risk assessment strategies.',
          thumbnailUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800',
          videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
          price: 599,
          duration: '2h 45m',
          instructor: 'CA Amit Verma',
          category: 'Audit',
          createdAt: new Date(),
          views: 987
        },
        {
          id: '4',
          title: 'Financial Modeling in Excel',
          description: 'Build professional financial models and perform scenario analysis.',
          thumbnailUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
          videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
          price: 799,
          duration: '4h 00m',
          instructor: 'CMA Sneha Patel',
          category: 'Financial Management',
          createdAt: new Date(),
          views: 3421
        }
      ];
      localStorage.setItem('knowledge_pool_videos', JSON.stringify(sampleVideos));
      setVideos(sampleVideos);
    }
  };

  const loadPurchases = () => {
    const storedPurchases = localStorage.getItem(`purchases_${userEmail}`);
    if (storedPurchases) {
      setPurchasedVideos(JSON.parse(storedPurchases));
    }
  };

  const savePurchases = (purchases: string[]) => {
    localStorage.setItem(`purchases_${userEmail}`, JSON.stringify(purchases));
    setPurchasedVideos(purchases);
  };

  const saveVideos = (updatedVideos: VideoItem[]) => {
    localStorage.setItem('knowledge_pool_videos', JSON.stringify(updatedVideos));
    setVideos(updatedVideos);
  };

  const handleAddVideo = () => {
    if (!formData.title || !formData.description || !formData.price || !formData.duration || !formData.instructor || !formData.category) {
      toast.error('Please fill in all required fields');
      return;
    }

    const newVideo: VideoItem = {
      id: Date.now().toString(),
      title: formData.title,
      description: formData.description,
      thumbnailUrl: formData.thumbnailUrl || 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800',
      videoUrl: formData.videoUrl || 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      price: parseFloat(formData.price),
      duration: formData.duration,
      instructor: formData.instructor,
      category: formData.category,
      createdAt: new Date(),
      views: 0
    };

    const updatedVideos = [newVideo, ...videos];
    saveVideos(updatedVideos);
    
    setShowAddVideo(false);
    resetForm();
    toast.success('Video added successfully!');
  };

  const handleUpdateVideo = () => {
    if (!editingVideo || !formData.title || !formData.description || !formData.price || !formData.duration || !formData.instructor || !formData.category) {
      toast.error('Please fill in all required fields');
      return;
    }

    const updatedVideo: VideoItem = {
      ...editingVideo,
      title: formData.title,
      description: formData.description,
      thumbnailUrl: formData.thumbnailUrl || editingVideo.thumbnailUrl,
      videoUrl: formData.videoUrl || editingVideo.videoUrl,
      price: parseFloat(formData.price),
      duration: formData.duration,
      instructor: formData.instructor,
      category: formData.category
    };

    const updatedVideos = videos.map(v => v.id === editingVideo.id ? updatedVideo : v);
    saveVideos(updatedVideos);
    
    setEditingVideo(null);
    resetForm();
    toast.success('Video updated successfully!');
  };

  const handleDeleteVideo = (videoId: string) => {
    if (confirm('Are you sure you want to delete this video?')) {
      const updatedVideos = videos.filter(v => v.id !== videoId);
      saveVideos(updatedVideos);
      toast.success('Video deleted successfully');
    }
  };

  const handlePurchase = (video: VideoItem) => {
    if (purchasedVideos.includes(video.id)) {
      toast.info('You already own this video');
      return;
    }

    // Simulate payment
    const updatedPurchases = [...purchasedVideos, video.id];
    savePurchases(updatedPurchases);
    
    // Increment view count
    const updatedVideos = videos.map(v => 
      v.id === video.id ? { ...v, views: v.views + 1 } : v
    );
    saveVideos(updatedVideos);

    toast.success(`Successfully purchased "${video.title}"!`);
  };

  const handleWatchVideo = (video: VideoItem) => {
    if (!isAdmin && !purchasedVideos.includes(video.id)) {
      toast.error('Please purchase this video to watch it');
      return;
    }

    setCurrentVideo(video);
    setShowVideoPlayer(true);

    // Increment view count if not already viewed
    if (!purchasedVideos.includes(video.id) && isAdmin) {
      const updatedVideos = videos.map(v => 
        v.id === video.id ? { ...v, views: v.views + 1 } : v
      );
      saveVideos(updatedVideos);
    }
  };

  const handleEditVideo = (video: VideoItem) => {
    setEditingVideo(video);
    setFormData({
      title: video.title,
      description: video.description,
      thumbnailUrl: video.thumbnailUrl,
      videoUrl: video.videoUrl,
      price: video.price.toString(),
      duration: video.duration,
      instructor: video.instructor,
      category: video.category
    });
  };

  const resetForm = () => {
    setFormData({
      title: '',
      description: '',
      thumbnailUrl: '',
      videoUrl: '',
      price: '',
      duration: '',
      instructor: '',
      category: ''
    });
  };

  // Opportunities functions
  const loadOpportunities = () => {
    const storedOpportunities = localStorage.getItem('knowledge_pool_opportunities');
    if (storedOpportunities) {
      const parsed = JSON.parse(storedOpportunities);
      const opportunitiesWithDates = parsed.map((o: any) => ({
        ...o,
        postedDate: new Date(o.postedDate)
      }));
      setOpportunities(opportunitiesWithDates);
    } else {
      // Add sample opportunities
      const sampleOpportunities: Opportunity[] = [
        {
          id: '1',
          title: 'Senior Audit Associate',
          company: 'Deloitte India',
          type: 'Audit Firm',
          location: 'Mumbai, Maharashtra',
          experienceRequired: '2-4 years',
          salary: '₹8-12 LPA',
          description: 'Looking for experienced audit professionals to join our statutory audit team. Must have strong knowledge of Ind AS and Companies Act.',
          requirements: ['CA qualified', 'Experience in statutory audits', 'Knowledge of Ind AS', 'Good communication skills'],
          postedDate: new Date(),
          applicationDeadline: '2025-11-30',
          contactEmail: 'careers@deloitte.com',
          isActive: true
        },
        {
          id: '2',
          title: 'Tax Consultant',
          company: 'KPMG India',
          type: 'Audit Firm',
          location: 'Bangalore, Karnataka',
          experienceRequired: '3-5 years',
          salary: '₹10-15 LPA',
          description: 'Seeking tax professionals for direct and indirect tax consulting. Experience in GST compliance and tax advisory is essential.',
          requirements: ['CA/CMA qualified', 'GST and Income Tax expertise', 'Client-facing experience', 'Strong analytical skills'],
          postedDate: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
          applicationDeadline: '2025-11-25',
          contactEmail: 'recruitment@kpmg.in',
          isActive: true
        },
        {
          id: '3',
          title: 'Financial Analyst',
          company: 'Reliance Industries Ltd',
          type: 'Company',
          location: 'Navi Mumbai, Maharashtra',
          experienceRequired: '1-3 years',
          salary: '₹6-10 LPA',
          description: 'Join our corporate finance team to support financial planning, analysis, and reporting activities.',
          requirements: ['CA Inter/CMA Inter qualified', 'Excel proficiency', 'Financial modeling skills', 'Team player'],
          postedDate: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
          applicationDeadline: '2025-12-05',
          contactEmail: 'hr@ril.com',
          isActive: true
        },
        {
          id: '4',
          title: 'Accounts Finalization Work',
          company: 'Multiple SME Clients',
          type: 'Job Work',
          location: 'Remote/Delhi NCR',
          experienceRequired: '0-2 years',
          salary: '₹15,000-25,000 per assignment',
          description: 'Project-based accounts finalization work for various SME clients. Flexible work arrangements available.',
          requirements: ['CA Final students/qualified', 'Tally knowledge', 'Financial statements preparation', 'Attention to detail'],
          postedDate: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
          applicationDeadline: 'Ongoing',
          contactEmail: 'projects@accountingservices.in',
          isActive: true
        },
        {
          id: '5',
          title: 'Internal Auditor',
          company: 'Tata Consultancy Services',
          type: 'Company',
          location: 'Pune, Maharashtra',
          experienceRequired: '2-5 years',
          salary: '₹7-12 LPA',
          description: 'Looking for internal auditors to strengthen our risk and compliance framework across multiple business units.',
          requirements: ['CA/CS/CMA qualified', 'Internal audit experience', 'Risk assessment skills', 'Travel willingness'],
          postedDate: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000),
          applicationDeadline: '2025-11-20',
          contactEmail: 'careers.ia@tcs.com',
          isActive: true
        },
        {
          id: '6',
          title: 'GST Return Filing & Compliance',
          company: 'Various Clients',
          type: 'Job Work',
          location: 'Work from Home',
          experienceRequired: '1-2 years',
          salary: '₹500-1500 per return',
          description: 'Regular monthly GST return filing work for multiple clients. Flexible timing and work from home.',
          requirements: ['CA/CMA students or qualified', 'GST portal knowledge', 'Accuracy oriented', 'Good at deadlines'],
          postedDate: new Date(Date.now() - 12 * 24 * 60 * 60 * 1000),
          applicationDeadline: 'Ongoing',
          contactEmail: 'gst.services@taxadvisors.in',
          isActive: true
        }
      ];
      localStorage.setItem('knowledge_pool_opportunities', JSON.stringify(sampleOpportunities));
      setOpportunities(sampleOpportunities);
    }
  };

  const loadSavedOpportunities = () => {
    const storedSaved = localStorage.getItem(`saved_opportunities_${userEmail}`);
    if (storedSaved) {
      setSavedOpportunities(JSON.parse(storedSaved));
    }
  };

  const saveSavedOpportunities = (saved: string[]) => {
    localStorage.setItem(`saved_opportunities_${userEmail}`, JSON.stringify(saved));
    setSavedOpportunities(saved);
  };

  const saveOpportunities = (updatedOpportunities: Opportunity[]) => {
    localStorage.setItem('knowledge_pool_opportunities', JSON.stringify(updatedOpportunities));
    setOpportunities(updatedOpportunities);
  };

  const handleAddOpportunity = () => {
    if (!opportunityFormData.title || !opportunityFormData.company || !opportunityFormData.location || 
        !opportunityFormData.description || !opportunityFormData.contactEmail) {
      toast.error('Please fill in all required fields');
      return;
    }

    const newOpportunity: Opportunity = {
      id: Date.now().toString(),
      title: opportunityFormData.title,
      company: opportunityFormData.company,
      type: opportunityFormData.type,
      location: opportunityFormData.location,
      experienceRequired: opportunityFormData.experienceRequired,
      salary: opportunityFormData.salary,
      description: opportunityFormData.description,
      requirements: opportunityFormData.requirements.split('\n').filter(r => r.trim()),
      postedDate: new Date(),
      applicationDeadline: opportunityFormData.applicationDeadline,
      contactEmail: opportunityFormData.contactEmail,
      isActive: true
    };

    const updatedOpportunities = [newOpportunity, ...opportunities];
    saveOpportunities(updatedOpportunities);
    
    setShowAddOpportunity(false);
    resetOpportunityForm();
    toast.success('Opportunity posted successfully!');
  };

  const handleUpdateOpportunity = () => {
    if (!editingOpportunity || !opportunityFormData.title || !opportunityFormData.company || 
        !opportunityFormData.location || !opportunityFormData.description || !opportunityFormData.contactEmail) {
      toast.error('Please fill in all required fields');
      return;
    }

    const updatedOpportunity: Opportunity = {
      ...editingOpportunity,
      title: opportunityFormData.title,
      company: opportunityFormData.company,
      type: opportunityFormData.type,
      location: opportunityFormData.location,
      experienceRequired: opportunityFormData.experienceRequired,
      salary: opportunityFormData.salary,
      description: opportunityFormData.description,
      requirements: opportunityFormData.requirements.split('\n').filter(r => r.trim()),
      applicationDeadline: opportunityFormData.applicationDeadline,
      contactEmail: opportunityFormData.contactEmail
    };

    const updatedOpportunities = opportunities.map(o => o.id === editingOpportunity.id ? updatedOpportunity : o);
    saveOpportunities(updatedOpportunities);
    
    setEditingOpportunity(null);
    resetOpportunityForm();
    toast.success('Opportunity updated successfully!');
  };

  const handleDeleteOpportunity = (opportunityId: string) => {
    if (confirm('Are you sure you want to delete this opportunity?')) {
      const updatedOpportunities = opportunities.filter(o => o.id !== opportunityId);
      saveOpportunities(updatedOpportunities);
      toast.success('Opportunity deleted successfully');
    }
  };

  const handleToggleOpportunityStatus = (opportunityId: string) => {
    const updatedOpportunities = opportunities.map(o => 
      o.id === opportunityId ? { ...o, isActive: !o.isActive } : o
    );
    saveOpportunities(updatedOpportunities);
    toast.success('Opportunity status updated');
  };

  const handleSaveOpportunity = (opportunityId: string) => {
    if (savedOpportunities.includes(opportunityId)) {
      const updated = savedOpportunities.filter(id => id !== opportunityId);
      saveSavedOpportunities(updated);
      toast.success('Opportunity removed from saved');
    } else {
      const updated = [...savedOpportunities, opportunityId];
      saveSavedOpportunities(updated);
      toast.success('Opportunity saved!');
    }
  };

  const handleEditOpportunity = (opportunity: Opportunity) => {
    setEditingOpportunity(opportunity);
    setOpportunityFormData({
      title: opportunity.title,
      company: opportunity.company,
      type: opportunity.type,
      location: opportunity.location,
      experienceRequired: opportunity.experienceRequired,
      salary: opportunity.salary,
      description: opportunity.description,
      requirements: opportunity.requirements.join('\n'),
      applicationDeadline: opportunity.applicationDeadline,
      contactEmail: opportunity.contactEmail
    });
  };

  const resetOpportunityForm = () => {
    setOpportunityFormData({
      title: '',
      company: '',
      type: 'Company',
      location: '',
      experienceRequired: '',
      salary: '',
      description: '',
      requirements: '',
      applicationDeadline: '',
      contactEmail: ''
    });
  };

  const filteredVideos = videos.filter(video => {
    const matchesSearch = video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         video.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         video.instructor.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || video.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const filteredOpportunities = opportunities.filter(opportunity => {
    const matchesSearch = opportunity.title.toLowerCase().includes(opportunitySearchQuery.toLowerCase()) ||
                         opportunity.company.toLowerCase().includes(opportunitySearchQuery.toLowerCase()) ||
                         opportunity.description.toLowerCase().includes(opportunitySearchQuery.toLowerCase());
    const matchesType = selectedOpportunityType === 'All' || opportunity.type === selectedOpportunityType;
    return matchesSearch && matchesType && opportunity.isActive;
  });

  return (
    <div>
      {/* Header */}
      <Card className="p-6 mb-6 bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-950 dark:to-red-950 border-orange-200 dark:border-orange-800">
        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-orange-500 text-white p-3 rounded-lg">
                <Video className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-orange-900 dark:text-orange-300">Knowledge Pool</h2>
                <p className="text-orange-700 dark:text-orange-400">Democratise knowledge and opportunities</p>
              </div>
            </div>
            <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">
              {isAdmin 
                ? 'Manage and share expert video courses with students' 
                : 'Access premium video courses from expert instructors'}
            </p>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={onBack}
            className="gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </Button>
        </div>
      </Card>

      {/* Stats for admin */}
      {isAdmin && activeTab === 'videos' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <Card className="p-4">
            <div className="flex items-center gap-3">
              <div className="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 p-3 rounded-lg">
                <Video className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Total Videos</p>
                <p className="text-2xl text-gray-900 dark:text-gray-100">{videos.length}</p>
              </div>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center gap-3">
              <div className="bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 p-3 rounded-lg">
                <Eye className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Total Views</p>
                <p className="text-2xl text-gray-900 dark:text-gray-100">
                  {videos.reduce((sum, v) => sum + v.views, 0)}
                </p>
              </div>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center gap-3">
              <div className="bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400 p-3 rounded-lg">
                <IndianRupee className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Revenue Potential</p>
                <p className="text-2xl text-gray-900 dark:text-gray-100">
                  ₹{videos.reduce((sum, v) => sum + v.price * v.views, 0).toLocaleString()}
                </p>
              </div>
            </div>
          </Card>
        </div>
      )}

      {isAdmin && activeTab === 'opportunities' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <Card className="p-4">
            <div className="flex items-center gap-3">
              <div className="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 p-3 rounded-lg">
                <Briefcase className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Total Opportunities</p>
                <p className="text-2xl text-gray-900 dark:text-gray-100">{opportunities.length}</p>
              </div>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center gap-3">
              <div className="bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 p-3 rounded-lg">
                <Check className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Active Opportunities</p>
                <p className="text-2xl text-gray-900 dark:text-gray-100">
                  {opportunities.filter(o => o.isActive).length}
                </p>
              </div>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center gap-3">
              <div className="bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400 p-3 rounded-lg">
                <Building2 className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Companies</p>
                <p className="text-2xl text-gray-900 dark:text-gray-100">
                  {new Set(opportunities.map(o => o.company)).size}
                </p>
              </div>
            </div>
          </Card>
        </div>
      )}

      {/* Main Tabs */}
      <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as 'videos' | 'opportunities')} className="mb-6">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="videos" className="gap-2">
            <Video className="w-4 h-4" />
            Video Courses
          </TabsTrigger>
          <TabsTrigger value="opportunities" className="gap-2">
            <Briefcase className="w-4 h-4" />
            Career Opportunities
          </TabsTrigger>
        </TabsList>

        {/* Videos Tab Content */}
        <TabsContent value="videos" className="mt-6">
          {/* Search and Filter */}
          <Card className="p-4 mb-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                type="text"
                placeholder="Search videos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
          <div className="flex gap-2 flex-wrap">
            {categories.map(category => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
          {isAdmin && (
            <Button
              onClick={() => setShowAddVideo(true)}
              className="gap-2 bg-orange-600 hover:bg-orange-700"
            >
              <Plus className="w-4 h-4" />
              Add Video
            </Button>
          )}
        </div>
      </Card>

      {/* Videos Grid */}
      {filteredVideos.length === 0 ? (
        <Card className="p-12">
          <div className="text-center">
            <Video className="w-16 h-16 mx-auto mb-4 text-gray-400" />
            <h3 className="text-gray-900 dark:text-gray-100 mb-2">No videos found</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              {searchQuery || selectedCategory !== 'All' 
                ? 'Try adjusting your search or filters' 
                : isAdmin 
                  ? 'Start by adding your first video' 
                  : 'Check back soon for new content'}
            </p>
          </div>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVideos.map(video => {
            const isPurchased = purchasedVideos.includes(video.id);
            const hasAccess = isAdmin || isPurchased;

            return (
              <Card key={video.id} className="overflow-hidden hover:shadow-xl transition-all">
                <div className="relative">
                  <ImageWithFallback
                    src={video.thumbnailUrl}
                    alt={video.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {video.duration}
                  </div>
                  {!hasAccess && (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                      <Lock className="w-12 h-12 text-white" />
                    </div>
                  )}
                  <Badge variant="secondary" className="absolute top-2 left-2">
                    {video.category}
                  </Badge>
                </div>

                <div className="p-4">
                  <h3 className="text-gray-900 dark:text-gray-100 mb-2 line-clamp-2">
                    {video.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">
                    {video.description}
                  </p>

                  <div className="flex items-center justify-between mb-3">
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      By {video.instructor}
                    </p>
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                      <Eye className="w-3 h-3" />
                      {video.views}
                    </div>
                  </div>

                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-1 text-gray-900 dark:text-gray-100">
                      <IndianRupee className="w-4 h-4" />
                      <span>{video.price}</span>
                    </div>
                    
                    <div className="flex gap-2">
                      {isAdmin ? (
                        <>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleEditVideo(video)}
                          >
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleDeleteVideo(video.id)}
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                          <Button
                            size="sm"
                            onClick={() => handleWatchVideo(video)}
                            className="gap-1"
                          >
                            <Play className="w-4 h-4" />
                            Preview
                          </Button>
                        </>
                      ) : isPurchased ? (
                        <Button
                          size="sm"
                          onClick={() => handleWatchVideo(video)}
                          className="gap-1 bg-green-600 hover:bg-green-700"
                        >
                          <Play className="w-4 h-4" />
                          Watch
                        </Button>
                      ) : (
                        <Button
                          size="sm"
                          onClick={() => handlePurchase(video)}
                          className="gap-1 bg-orange-600 hover:bg-orange-700"
                        >
                          <ShoppingCart className="w-4 h-4" />
                          Buy Now
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      )}
        </TabsContent>

        {/* Opportunities Tab Content */}
        <TabsContent value="opportunities" className="mt-6">
          {/* Search and Filter */}
          <Card className="p-4 mb-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    type="text"
                    placeholder="Search opportunities..."
                    value={opportunitySearchQuery}
                    onChange={(e) => setOpportunitySearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <div className="flex gap-2 flex-wrap">
                {opportunityTypes.map(type => (
                  <Button
                    key={type}
                    variant={selectedOpportunityType === type ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setSelectedOpportunityType(type)}
                  >
                    {type}
                  </Button>
                ))}
              </div>
              {isAdmin && (
                <Button
                  onClick={() => setShowAddOpportunity(true)}
                  className="gap-2 bg-orange-600 hover:bg-orange-700"
                >
                  <Plus className="w-4 h-4" />
                  Post Opportunity
                </Button>
              )}
            </div>
          </Card>

          {/* Opportunities List */}
          {filteredOpportunities.length === 0 ? (
            <Card className="p-12">
              <div className="text-center">
                <Briefcase className="w-16 h-16 mx-auto mb-4 text-gray-400" />
                <h3 className="text-gray-900 dark:text-gray-100 mb-2">No opportunities found</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {opportunitySearchQuery || selectedOpportunityType !== 'All' 
                    ? 'Try adjusting your search or filters' 
                    : isAdmin 
                      ? 'Start by posting your first opportunity' 
                      : 'Check back soon for new opportunities'}
                </p>
              </div>
            </Card>
          ) : (
            <div className="space-y-4">
              {filteredOpportunities.map(opportunity => {
                const isSaved = savedOpportunities.includes(opportunity.id);
                const daysAgo = Math.floor((new Date().getTime() - opportunity.postedDate.getTime()) / (1000 * 60 * 60 * 24));

                return (
                  <Card key={opportunity.id} className="p-6 hover:shadow-lg transition-all">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-start gap-3 mb-3">
                          <div className={`p-3 rounded-lg ${
                            opportunity.type === 'Audit Firm' ? 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400' :
                            opportunity.type === 'Company' ? 'bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400' :
                            'bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400'
                          }`}>
                            <Briefcase className="w-5 h-5" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <h3 className="text-gray-900 dark:text-gray-100">{opportunity.title}</h3>
                              <Badge variant="outline">{opportunity.type}</Badge>
                              {daysAgo === 0 && <Badge className="bg-green-500">New</Badge>}
                            </div>
                            <p className="text-gray-900 dark:text-gray-100 mb-2">{opportunity.company}</p>
                            <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
                              <div className="flex items-center gap-1">
                                <MapPin className="w-4 h-4" />
                                {opportunity.location}
                              </div>
                              <div className="flex items-center gap-1">
                                <GraduationCap className="w-4 h-4" />
                                {opportunity.experienceRequired}
                              </div>
                              <div className="flex items-center gap-1">
                                <IndianRupee className="w-4 h-4" />
                                {opportunity.salary}
                              </div>
                            </div>
                          </div>
                        </div>

                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">
                          {opportunity.description}
                        </p>

                        {opportunity.requirements.length > 0 && (
                          <div className="flex flex-wrap gap-2 mb-3">
                            {opportunity.requirements.slice(0, 3).map((req, idx) => (
                              <Badge key={idx} variant="secondary" className="text-xs">
                                {req}
                              </Badge>
                            ))}
                            {opportunity.requirements.length > 3 && (
                              <Badge variant="secondary" className="text-xs">
                                +{opportunity.requirements.length - 3} more
                              </Badge>
                            )}
                          </div>
                        )}

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-3 h-3" />
                              Posted {daysAgo === 0 ? 'today' : `${daysAgo}d ago`}
                            </div>
                            <div>
                              Deadline: {opportunity.applicationDeadline}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col gap-2">
                        {isAdmin ? (
                          <>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => handleEditOpportunity(opportunity)}
                            >
                              <Edit className="w-4 h-4" />
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => handleDeleteOpportunity(opportunity.id)}
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                            <Button
                              size="sm"
                              variant={opportunity.isActive ? 'default' : 'outline'}
                              onClick={() => handleToggleOpportunityStatus(opportunity.id)}
                              title={opportunity.isActive ? 'Active' : 'Inactive'}
                            >
                              {opportunity.isActive ? <Check className="w-4 h-4" /> : <Lock className="w-4 h-4" />}
                            </Button>
                          </>
                        ) : (
                          <>
                            <Button
                              size="sm"
                              variant={isSaved ? 'default' : 'outline'}
                              onClick={() => handleSaveOpportunity(opportunity.id)}
                              title={isSaved ? 'Saved' : 'Save for later'}
                            >
                              <Star className={`w-4 h-4 ${isSaved ? 'fill-current' : ''}`} />
                            </Button>
                            <Button
                              size="sm"
                              onClick={() => setViewingOpportunity(opportunity)}
                              className="gap-1"
                            >
                              View Details
                            </Button>
                          </>
                        )}
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          )}
        </TabsContent>
      </Tabs>

      {/* Add/Edit Video Dialog */}
      <Dialog open={showAddVideo || editingVideo !== null} onOpenChange={(open) => {
        if (!open) {
          setShowAddVideo(false);
          setEditingVideo(null);
          resetForm();
        }
      }}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{editingVideo ? 'Edit Video' : 'Add New Video'}</DialogTitle>
            <DialogDescription>
              {editingVideo ? 'Update video details below' : 'Fill in the details to add a new video to the knowledge pool'}
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4">
            <div>
              <label className="text-sm text-gray-700 dark:text-gray-300 mb-1 block">
                Video Title *
              </label>
              <Input
                type="text"
                placeholder="e.g., Advanced Tax Planning Strategies"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              />
            </div>

            <div>
              <label className="text-sm text-gray-700 dark:text-gray-300 mb-1 block">
                Description *
              </label>
              <Textarea
                placeholder="Describe what students will learn in this video..."
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                rows={3}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-gray-700 dark:text-gray-300 mb-1 block">
                  Price (₹) *
                </label>
                <Input
                  type="number"
                  placeholder="499"
                  value={formData.price}
                  onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                />
              </div>
              <div>
                <label className="text-sm text-gray-700 dark:text-gray-300 mb-1 block">
                  Duration *
                </label>
                <Input
                  type="text"
                  placeholder="e.g., 2h 30m"
                  value={formData.duration}
                  onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-gray-700 dark:text-gray-300 mb-1 block">
                  Instructor Name *
                </label>
                <Input
                  type="text"
                  placeholder="CA Rajesh Kumar"
                  value={formData.instructor}
                  onChange={(e) => setFormData({ ...formData, instructor: e.target.value })}
                />
              </div>
              <div>
                <label className="text-sm text-gray-700 dark:text-gray-300 mb-1 block">
                  Category *
                </label>
                <select
                  className="w-full h-10 px-3 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-950 text-sm"
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                >
                  <option value="">Select category</option>
                  {categories.filter(c => c !== 'All').map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="text-sm text-gray-700 dark:text-gray-300 mb-1 block">
                Thumbnail URL
              </label>
              <Input
                type="text"
                placeholder="https://example.com/thumbnail.jpg (leave empty for default)"
                value={formData.thumbnailUrl}
                onChange={(e) => setFormData({ ...formData, thumbnailUrl: e.target.value })}
              />
            </div>

            <div>
              <label className="text-sm text-gray-700 dark:text-gray-300 mb-1 block">
                Video URL (Embed Link)
              </label>
              <Input
                type="text"
                placeholder="https://www.youtube.com/embed/... (leave empty for demo)"
                value={formData.videoUrl}
                onChange={(e) => setFormData({ ...formData, videoUrl: e.target.value })}
              />
            </div>
          </div>

          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => {
                setShowAddVideo(false);
                setEditingVideo(null);
                resetForm();
              }}
            >
              Cancel
            </Button>
            <Button
              onClick={editingVideo ? handleUpdateVideo : handleAddVideo}
              className="bg-orange-600 hover:bg-orange-700"
            >
              {editingVideo ? 'Update Video' : 'Add Video'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Video Player Dialog */}
      <Dialog open={showVideoPlayer} onOpenChange={setShowVideoPlayer}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle>{currentVideo?.title}</DialogTitle>
            <DialogDescription>
              By {currentVideo?.instructor} • {currentVideo?.duration}
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4">
            <div className="aspect-video bg-black rounded-lg overflow-hidden">
              {currentVideo?.videoUrl ? (
                <iframe
                  src={currentVideo.videoUrl}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-white">
                  <div className="text-center">
                    <Video className="w-16 h-16 mx-auto mb-4 opacity-50" />
                    <p>Video player would appear here</p>
                  </div>
                </div>
              )}
            </div>

            <div>
              <h3 className="text-gray-900 dark:text-gray-100 mb-2">About this course</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {currentVideo?.description}
              </p>
            </div>
          </div>

          <DialogFooter>
            <Button onClick={() => setShowVideoPlayer(false)}>Close</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Add/Edit Opportunity Dialog */}
      <Dialog open={showAddOpportunity || editingOpportunity !== null} onOpenChange={(open) => {
        if (!open) {
          setShowAddOpportunity(false);
          setEditingOpportunity(null);
          resetOpportunityForm();
        }
      }}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{editingOpportunity ? 'Edit Opportunity' : 'Post New Opportunity'}</DialogTitle>
            <DialogDescription>
              {editingOpportunity ? 'Update opportunity details below' : 'Fill in the details to post a new job opportunity'}
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4">
            <div>
              <label className="text-sm text-gray-700 dark:text-gray-300 mb-1 block">
                Job Title *
              </label>
              <Input
                type="text"
                placeholder="e.g., Senior Audit Associate"
                value={opportunityFormData.title}
                onChange={(e) => setOpportunityFormData({ ...opportunityFormData, title: e.target.value })}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-gray-700 dark:text-gray-300 mb-1 block">
                  Company Name *
                </label>
                <Input
                  type="text"
                  placeholder="Company/Firm name"
                  value={opportunityFormData.company}
                  onChange={(e) => setOpportunityFormData({ ...opportunityFormData, company: e.target.value })}
                />
              </div>
              <div>
                <label className="text-sm text-gray-700 dark:text-gray-300 mb-1 block">
                  Opportunity Type *
                </label>
                <select
                  className="w-full h-10 px-3 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-950 text-sm"
                  value={opportunityFormData.type}
                  onChange={(e) => setOpportunityFormData({ ...opportunityFormData, type: e.target.value as any })}
                >
                  <option value="Company">Company</option>
                  <option value="Audit Firm">Audit Firm</option>
                  <option value="Job Work">Job Work</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-gray-700 dark:text-gray-300 mb-1 block">
                  Location *
                </label>
                <Input
                  type="text"
                  placeholder="e.g., Mumbai, Maharashtra"
                  value={opportunityFormData.location}
                  onChange={(e) => setOpportunityFormData({ ...opportunityFormData, location: e.target.value })}
                />
              </div>
              <div>
                <label className="text-sm text-gray-700 dark:text-gray-300 mb-1 block">
                  Experience Required
                </label>
                <Input
                  type="text"
                  placeholder="e.g., 2-4 years"
                  value={opportunityFormData.experienceRequired}
                  onChange={(e) => setOpportunityFormData({ ...opportunityFormData, experienceRequired: e.target.value })}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-gray-700 dark:text-gray-300 mb-1 block">
                  Salary/Compensation
                </label>
                <Input
                  type="text"
                  placeholder="e.g., ₹8-12 LPA"
                  value={opportunityFormData.salary}
                  onChange={(e) => setOpportunityFormData({ ...opportunityFormData, salary: e.target.value })}
                />
              </div>
              <div>
                <label className="text-sm text-gray-700 dark:text-gray-300 mb-1 block">
                  Application Deadline
                </label>
                <Input
                  type="text"
                  placeholder="e.g., 2025-12-31 or Ongoing"
                  value={opportunityFormData.applicationDeadline}
                  onChange={(e) => setOpportunityFormData({ ...opportunityFormData, applicationDeadline: e.target.value })}
                />
              </div>
            </div>

            <div>
              <label className="text-sm text-gray-700 dark:text-gray-300 mb-1 block">
                Job Description *
              </label>
              <Textarea
                placeholder="Describe the role and responsibilities..."
                value={opportunityFormData.description}
                onChange={(e) => setOpportunityFormData({ ...opportunityFormData, description: e.target.value })}
                rows={4}
              />
            </div>

            <div>
              <label className="text-sm text-gray-700 dark:text-gray-300 mb-1 block">
                Requirements (one per line)
              </label>
              <Textarea
                placeholder="CA qualified&#10;Experience in statutory audits&#10;Knowledge of Ind AS"
                value={opportunityFormData.requirements}
                onChange={(e) => setOpportunityFormData({ ...opportunityFormData, requirements: e.target.value })}
                rows={4}
              />
            </div>

            <div>
              <label className="text-sm text-gray-700 dark:text-gray-300 mb-1 block">
                Contact Email *
              </label>
              <Input
                type="email"
                placeholder="careers@company.com"
                value={opportunityFormData.contactEmail}
                onChange={(e) => setOpportunityFormData({ ...opportunityFormData, contactEmail: e.target.value })}
              />
            </div>
          </div>

          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => {
                setShowAddOpportunity(false);
                setEditingOpportunity(null);
                resetOpportunityForm();
              }}
            >
              Cancel
            </Button>
            <Button
              onClick={editingOpportunity ? handleUpdateOpportunity : handleAddOpportunity}
              className="bg-orange-600 hover:bg-orange-700"
            >
              {editingOpportunity ? 'Update Opportunity' : 'Post Opportunity'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* View Opportunity Details Dialog */}
      <Dialog open={viewingOpportunity !== null} onOpenChange={(open) => !open && setViewingOpportunity(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{viewingOpportunity?.title}</DialogTitle>
            <DialogDescription>
              {viewingOpportunity?.company}
            </DialogDescription>
          </DialogHeader>
          <div className="flex items-center gap-2 mb-4">
            <Badge variant="outline">{viewingOpportunity?.type}</Badge>
          </div>

          {viewingOpportunity && (
            <div className="space-y-6">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div>
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-1">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">Location</span>
                  </div>
                  <p className="text-gray-900 dark:text-gray-100">{viewingOpportunity.location}</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-1">
                    <GraduationCap className="w-4 h-4" />
                    <span className="text-sm">Experience</span>
                  </div>
                  <p className="text-gray-900 dark:text-gray-100">{viewingOpportunity.experienceRequired || 'Not specified'}</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-1">
                    <IndianRupee className="w-4 h-4" />
                    <span className="text-sm">Salary</span>
                  </div>
                  <p className="text-gray-900 dark:text-gray-100">{viewingOpportunity.salary || 'Not disclosed'}</p>
                </div>
              </div>

              <div>
                <h3 className="text-gray-900 dark:text-gray-100 mb-2">About the Role</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 whitespace-pre-wrap">
                  {viewingOpportunity.description}
                </p>
              </div>

              {viewingOpportunity.requirements.length > 0 && (
                <div>
                  <h3 className="text-gray-900 dark:text-gray-100 mb-2">Requirements</h3>
                  <ul className="space-y-2">
                    {viewingOpportunity.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                        <Check className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="flex items-center justify-between pt-4 border-t dark:border-gray-700">
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex items-center gap-1 mb-1">
                    <Calendar className="w-4 h-4" />
                    <span>Application Deadline: {viewingOpportunity.applicationDeadline}</span>
                  </div>
                </div>
                <Button
                  onClick={() => {
                    window.location.href = `mailto:${viewingOpportunity.contactEmail}?subject=Application for ${viewingOpportunity.title}`;
                  }}
                  className="gap-2 bg-orange-600 hover:bg-orange-700"
                >
                  <ExternalLink className="w-4 h-4" />
                  Apply Now
                </Button>
              </div>
            </div>
          )}

          <DialogFooter>
            <Button variant="outline" onClick={() => setViewingOpportunity(null)}>Close</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

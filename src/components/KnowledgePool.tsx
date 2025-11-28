import { useState, useEffect } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from './ui/dialog';
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
  GraduationCap
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

interface KnowledgePoolProps {
  onBack: () => void;
  userEmail: string;
  isAdmin: boolean;
}

export function KnowledgePool({ onBack, userEmail, isAdmin }: KnowledgePoolProps) {
  const [videos, setVideos] = useState<VideoItem[]>([]);
  const [purchasedVideos, setPurchasedVideos] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [showAddVideo, setShowAddVideo] = useState(false);
  const [showVideoPlayer, setShowVideoPlayer] = useState(false);
  const [currentVideo, setCurrentVideo] = useState<VideoItem | null>(null);
  const [editingVideo, setEditingVideo] = useState<VideoItem | null>(null);

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

  const categories = ['All', 'Accounting', 'Taxation', 'Audit', 'Corporate Law', 'Financial Management', 'Cost Management', 'Other'];

  useEffect(() => {
    loadVideos();
    loadPurchases();
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
      const sampleVideos: VideoItem[] = [
        {
          id: '1',
          title: 'Advanced GST Compliance & Return Filing',
          description: 'Master GST return filing, reconciliation, and compliance requirements.',
          thumbnailUrl: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800',
          videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
          price: 1299,
          duration: '6h 30m',
          instructor: 'CA Rajesh Kumar',
          category: 'Taxation',
          createdAt: new Date(),
          views: 2543
        },
        {
          id: '2',
          title: 'Ind AS Financial Reporting',
          description: 'Comprehensive guide to Indian Accounting Standards with practical examples.',
          thumbnailUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
          videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
          price: 1599,
          duration: '8h 15m',
          instructor: 'CA Priya Sharma',
          category: 'Accounting',
          createdAt: new Date(),
          views: 1876
        },
        {
          id: '3',
          title: 'Audit Planning and Execution',
          description: 'Learn systematic approach to audit planning, execution, and reporting.',
          thumbnailUrl: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800',
          videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
          price: 999,
          duration: '5h 45m',
          instructor: 'CA Amit Desai',
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
      videoUrl: formData.videoUrl,
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
      thumbnailUrl: formData.thumbnailUrl,
      videoUrl: formData.videoUrl,
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

  const handlePurchaseVideo = (videoId: string) => {
    const video = videos.find(v => v.id === videoId);
    if (!video) return;

    if (confirm(`Purchase "${video.title}" for ₹${video.price}?`)) {
      const updatedPurchases = [...purchasedVideos, videoId];
      savePurchases(updatedPurchases);
      
      const updatedVideos = videos.map(v => 
        v.id === videoId ? { ...v, views: v.views + 1 } : v
      );
      saveVideos(updatedVideos);
      
      toast.success('Video purchased successfully!');
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

  const filteredVideos = videos.filter(video => {
    const matchesSearch = video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         video.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         video.instructor.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || video.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-4">
      {/* Header */}
      <Card className="p-6 mb-6 bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-950 dark:to-red-950 border-orange-200 dark:border-orange-800">
        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-orange-500 text-white p-3 rounded-lg">
                <Video className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-orange-900 dark:text-orange-300">Video Courses</h2>
                <p className="text-orange-700 dark:text-orange-400">Premium learning content from expert instructors</p>
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
      {isAdmin && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
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
                  {videos.reduce((sum, v) => sum + v.views, 0).toLocaleString()}
                </p>
              </div>
            </div>
          </Card>
        </div>
      )}

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
                  <Badge className="absolute top-2 right-2 bg-orange-600">
                    {video.category}
                  </Badge>
                  {!hasAccess && (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                      <Lock className="w-12 h-12 text-white" />
                    </div>
                  )}
                </div>
                
                <div className="p-4">
                  <h3 className="text-gray-900 dark:text-gray-100 mb-2">{video.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">
                    {video.description}
                  </p>
                  
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-3">
                    <GraduationCap className="w-4 h-4" />
                    <span>{video.instructor}</span>
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{video.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        <span>{video.views}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-orange-600">
                      <IndianRupee className="w-4 h-4" />
                      <span>{video.price}</span>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    {hasAccess ? (
                      <Button
                        onClick={() => {
                          setCurrentVideo(video);
                          setShowVideoPlayer(true);
                        }}
                        className="flex-1 bg-orange-600 hover:bg-orange-700 gap-2"
                      >
                        <Play className="w-4 h-4" />
                        Watch Now
                      </Button>
                    ) : (
                      <Button
                        onClick={() => handlePurchaseVideo(video.id)}
                        className="flex-1 gap-2"
                        variant="default"
                      >
                        <ShoppingCart className="w-4 h-4" />
                        Purchase
                      </Button>
                    )}
                    
                    {isAdmin && (
                      <>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleEditVideo(video)}
                        >
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleDeleteVideo(video.id)}
                        >
                          <Trash2 className="w-4 h-4 text-red-600" />
                        </Button>
                      </>
                    )}
                  </div>
                  
                  {isPurchased && !isAdmin && (
                    <div className="mt-2 flex items-center gap-2 text-sm text-green-600">
                      <Check className="w-4 h-4" />
                      <span>Purchased</span>
                    </div>
                  )}
                </div>
              </Card>
            );
          })}
        </div>
      )}

      {/* Add/Edit Video Dialog */}
      <Dialog open={showAddVideo || editingVideo !== null} onOpenChange={(open) => {
        if (!open) {
          setShowAddVideo(false);
          setEditingVideo(null);
          resetForm();
        }
      }}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>{editingVideo ? 'Edit Video' : 'Add New Video'}</DialogTitle>
            <DialogDescription>
              {editingVideo ? 'Update video details' : 'Add a new video course to the platform'}
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4">
            <div>
              <label className="text-sm text-gray-700 dark:text-gray-300 mb-1 block">Title *</label>
              <Input
                type="text"
                placeholder="Enter video title"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              />
            </div>

            <div>
              <label className="text-sm text-gray-700 dark:text-gray-300 mb-1 block">Description *</label>
              <Textarea
                placeholder="Enter video description"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                rows={3}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-gray-700 dark:text-gray-300 mb-1 block">Instructor *</label>
                <Input
                  type="text"
                  placeholder="Instructor name"
                  value={formData.instructor}
                  onChange={(e) => setFormData({ ...formData, instructor: e.target.value })}
                />
              </div>
              <div>
                <label className="text-sm text-gray-700 dark:text-gray-300 mb-1 block">Duration *</label>
                <Input
                  type="text"
                  placeholder="e.g. 2h 30m"
                  value={formData.duration}
                  onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-gray-700 dark:text-gray-300 mb-1 block">Price (₹) *</label>
                <Input
                  type="number"
                  placeholder="999"
                  value={formData.price}
                  onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                />
              </div>
              <div>
                <label className="text-sm text-gray-700 dark:text-gray-300 mb-1 block">Category *</label>
                <Input
                  type="text"
                  placeholder="e.g. Accounting"
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                />
              </div>
            </div>

            <div>
              <label className="text-sm text-gray-700 dark:text-gray-300 mb-1 block">Thumbnail URL</label>
              <Input
                type="text"
                placeholder="https://example.com/image.jpg"
                value={formData.thumbnailUrl}
                onChange={(e) => setFormData({ ...formData, thumbnailUrl: e.target.value })}
              />
            </div>

            <div>
              <label className="text-sm text-gray-700 dark:text-gray-300 mb-1 block">Video URL (embed link)</label>
              <Input
                type="text"
                placeholder="https://www.youtube.com/embed/..."
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
              <p className="text-gray-600 dark:text-gray-400">{currentVideo?.description}</p>
            </div>
          </div>

          <DialogFooter>
            <Button onClick={() => setShowVideoPlayer(false)}>Close</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

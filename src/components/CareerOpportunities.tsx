import { useState, useEffect } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from './ui/dialog';
import { 
  Plus, 
  Edit, 
  Trash2, 
  Search,
  IndianRupee,
  ArrowLeft,
  Briefcase,
  MapPin,
  Calendar,
  GraduationCap,
  Star,
  ExternalLink,
  Lightbulb
} from 'lucide-react';
import { toast } from 'sonner@2.0.3';

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

interface CareerOpportunitiesProps {
  onBack: () => void;
  userEmail: string;
  isAdmin: boolean;
}

export function CareerOpportunities({ onBack, userEmail, isAdmin }: CareerOpportunitiesProps) {
  const [opportunities, setOpportunities] = useState<Opportunity[]>([]);
  const [savedOpportunities, setSavedOpportunities] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState<string>('All');
  const [showAddOpportunity, setShowAddOpportunity] = useState(false);
  const [editingOpportunity, setEditingOpportunity] = useState<Opportunity | null>(null);
  const [viewingOpportunity, setViewingOpportunity] = useState<Opportunity | null>(null);

  const [formData, setFormData] = useState({
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

  const opportunityTypes = ['All', 'Audit Firm', 'Company', 'Job Work'];

  useEffect(() => {
    loadOpportunities();
    loadSavedOpportunities();
  }, []);

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
          requirements: ['CA/CMA qualified', 'Statutory Audit Experience', 'Ind AS Knowledge', 'Good Communication'],
          postedDate: new Date(),
          applicationDeadline: '15 Dec 2024',
          contactEmail: 'careers@deloitte.com',
          isActive: true
        },
        {
          id: '2',
          title: 'Tax Manager',
          company: 'KPMG',
          type: 'Audit Firm',
          location: 'Bengaluru, Karnataka',
          experienceRequired: '5-7 years',
          salary: '₹15-20 LPA',
          description: 'Seeking tax professionals with expertise in direct and indirect taxation to manage client portfolios.',
          requirements: ['CA qualified', 'Tax Advisory', 'GST Expertise', 'Leadership Skills'],
          postedDate: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
          applicationDeadline: '20 Dec 2024',
          contactEmail: 'recruitment@kpmg.in',
          isActive: true
        },
        {
          id: '3',
          title: 'Financial Analyst',
          company: 'Reliance Industries',
          type: 'Company',
          location: 'Navi Mumbai, Maharashtra',
          experienceRequired: '1-3 years',
          salary: '₹6-9 LPA',
          description: 'Join our finance team to support financial planning, analysis, and reporting activities.',
          requirements: ['CA Inter/CMA Inter', 'Excel Proficiency', 'Financial Modeling', 'Analytical Skills'],
          postedDate: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
          applicationDeadline: '25 Dec 2024',
          contactEmail: 'hr@ril.com',
          isActive: true
        },
        {
          id: '4',
          title: 'GST Consultant',
          company: 'CA Practice',
          type: 'Job Work',
          location: 'Pune, Maharashtra',
          experienceRequired: 'Fresher to 2 years',
          salary: '₹3-5 LPA',
          description: 'Opportunity to work on GST compliance and advisory for multiple clients.',
          requirements: ['CA/CMA pursuing or qualified', 'GST Knowledge', 'Tally/ERP', 'Client Handling'],
          postedDate: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
          applicationDeadline: '30 Dec 2024',
          contactEmail: 'contact@capractice.com',
          isActive: true
        }
      ];
      setOpportunities(sampleOpportunities);
      localStorage.setItem('knowledge_pool_opportunities', JSON.stringify(sampleOpportunities));
    }
  };

  const loadSavedOpportunities = () => {
    const saved = localStorage.getItem(`saved_opportunities_${userEmail}`);
    if (saved) {
      setSavedOpportunities(JSON.parse(saved));
    }
  };

  const saveOpportunitiesToStorage = (updatedOpportunities: Opportunity[]) => {
    localStorage.setItem('knowledge_pool_opportunities', JSON.stringify(updatedOpportunities));
    setOpportunities(updatedOpportunities);
  };

  const handleAddOpportunity = () => {
    if (!formData.title || !formData.company || !formData.description) {
      toast.error('Please fill in all required fields');
      return;
    }

    const newOpportunity: Opportunity = {
      id: Date.now().toString(),
      title: formData.title,
      company: formData.company,
      type: formData.type,
      location: formData.location,
      experienceRequired: formData.experienceRequired,
      salary: formData.salary,
      description: formData.description,
      requirements: formData.requirements.split(',').map(r => r.trim()).filter(r => r),
      postedDate: new Date(),
      applicationDeadline: formData.applicationDeadline,
      contactEmail: formData.contactEmail,
      isActive: true
    };

    const updatedOpportunities = [...opportunities, newOpportunity];
    saveOpportunitiesToStorage(updatedOpportunities);
    setShowAddOpportunity(false);
    resetForm();
    toast.success('Opportunity posted successfully!');
  };

  const handleUpdateOpportunity = () => {
    if (!editingOpportunity || !formData.title || !formData.company) {
      toast.error('Please fill in all required fields');
      return;
    }

    const updatedOpportunities = opportunities.map(opp =>
      opp.id === editingOpportunity.id
        ? {
            ...opp,
            title: formData.title,
            company: formData.company,
            type: formData.type,
            location: formData.location,
            experienceRequired: formData.experienceRequired,
            salary: formData.salary,
            description: formData.description,
            requirements: formData.requirements.split(',').map(r => r.trim()).filter(r => r),
            applicationDeadline: formData.applicationDeadline,
            contactEmail: formData.contactEmail
          }
        : opp
    );

    saveOpportunitiesToStorage(updatedOpportunities);
    setEditingOpportunity(null);
    resetForm();
    toast.success('Opportunity updated successfully!');
  };

  const handleEditOpportunity = (opportunity: Opportunity) => {
    setEditingOpportunity(opportunity);
    setFormData({
      title: opportunity.title,
      company: opportunity.company,
      type: opportunity.type,
      location: opportunity.location,
      experienceRequired: opportunity.experienceRequired,
      salary: opportunity.salary,
      description: opportunity.description,
      requirements: opportunity.requirements.join(', '),
      applicationDeadline: opportunity.applicationDeadline,
      contactEmail: opportunity.contactEmail
    });
  };

  const handleDeleteOpportunity = (id: string) => {
    if (confirm('Are you sure you want to delete this opportunity?')) {
      const updatedOpportunities = opportunities.filter(opp => opp.id !== id);
      saveOpportunitiesToStorage(updatedOpportunities);
      toast.success('Opportunity deleted successfully');
    }
  };

  const handleToggleOpportunityStatus = (id: string) => {
    const updatedOpportunities = opportunities.map(opp =>
      opp.id === id ? { ...opp, isActive: !opp.isActive } : opp
    );
    saveOpportunitiesToStorage(updatedOpportunities);
    toast.success('Status updated successfully');
  };

  const handleSaveOpportunity = (id: string) => {
    const updated = savedOpportunities.includes(id)
      ? savedOpportunities.filter(oppId => oppId !== id)
      : [...savedOpportunities, id];
    
    setSavedOpportunities(updated);
    localStorage.setItem(`saved_opportunities_${userEmail}`, JSON.stringify(updated));
    toast.success(updated.includes(id) ? 'Opportunity saved' : 'Opportunity unsaved');
  };

  const resetForm = () => {
    setFormData({
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

  const filteredOpportunities = opportunities.filter(opportunity => {
    const matchesSearch = opportunity.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         opportunity.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         opportunity.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = selectedType === 'All' || opportunity.type === selectedType;
    return matchesSearch && matchesType && opportunity.isActive;
  });

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            onClick={onBack}
            className="gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </Button>
          <div className="flex items-center gap-3">
            <div className="bg-pink-500 text-white p-3 rounded-lg">
              <Lightbulb className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-pink-900 dark:text-pink-300">Career Opportunities</h2>
              <p className="text-pink-700 dark:text-pink-400">Explore job opportunities and career paths</p>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filter */}
      <Card className="p-4 mb-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                type="text"
                placeholder="Search opportunities..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
          <div className="flex gap-2 flex-wrap">
            {opportunityTypes.map(type => (
              <Button
                key={type}
                variant={selectedType === type ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedType(type)}
              >
                {type}
              </Button>
            ))}
          </div>
          {isAdmin && (
            <Button
              onClick={() => setShowAddOpportunity(true)}
              className="gap-2 bg-pink-600 hover:bg-pink-700"
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
              {searchQuery || selectedType !== 'All' 
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
                        >
                          {opportunity.isActive ? 'Active' : 'Inactive'}
                        </Button>
                      </>
                    ) : (
                      <>
                        <Button
                          size="sm"
                          onClick={() => setViewingOpportunity(opportunity)}
                          className="gap-2"
                        >
                          <ExternalLink className="w-4 h-4" />
                          View Details
                        </Button>
                        <Button
                          size="sm"
                          variant={isSaved ? 'default' : 'outline'}
                          onClick={() => handleSaveOpportunity(opportunity.id)}
                          className="gap-2"
                        >
                          <Star className={`w-4 h-4 ${isSaved ? 'fill-current' : ''}`} />
                          {isSaved ? 'Saved' : 'Save'}
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

      {/* Add/Edit Opportunity Dialog */}
      <Dialog open={showAddOpportunity || editingOpportunity !== null} onOpenChange={(open) => {
        if (!open) {
          setShowAddOpportunity(false);
          setEditingOpportunity(null);
          resetForm();
        }
      }}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{editingOpportunity ? 'Edit Opportunity' : 'Post New Opportunity'}</DialogTitle>
            <DialogDescription>
              {editingOpportunity ? 'Update opportunity details below' : 'Fill in the details to post a new opportunity'}
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <label className="text-sm text-gray-600 dark:text-gray-400 mb-1 block">Job Title *</label>
              <Input
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                placeholder="e.g., Senior Audit Associate"
              />
            </div>
            <div>
              <label className="text-sm text-gray-600 dark:text-gray-400 mb-1 block">Company Name *</label>
              <Input
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                placeholder="e.g., Deloitte India"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-gray-600 dark:text-gray-400 mb-1 block">Type *</label>
                <select
                  value={formData.type}
                  onChange={(e) => setFormData({ ...formData, type: e.target.value as any })}
                  className="w-full p-2 border rounded-md bg-white dark:bg-gray-800"
                >
                  <option value="Audit Firm">Audit Firm</option>
                  <option value="Company">Company</option>
                  <option value="Job Work">Job Work</option>
                </select>
              </div>
              <div>
                <label className="text-sm text-gray-600 dark:text-gray-400 mb-1 block">Location</label>
                <Input
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  placeholder="e.g., Mumbai, Maharashtra"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-gray-600 dark:text-gray-400 mb-1 block">Experience Required</label>
                <Input
                  value={formData.experienceRequired}
                  onChange={(e) => setFormData({ ...formData, experienceRequired: e.target.value })}
                  placeholder="e.g., 2-4 years"
                />
              </div>
              <div>
                <label className="text-sm text-gray-600 dark:text-gray-400 mb-1 block">Salary Range</label>
                <Input
                  value={formData.salary}
                  onChange={(e) => setFormData({ ...formData, salary: e.target.value })}
                  placeholder="e.g., ₹8-12 LPA"
                />
              </div>
            </div>
            <div>
              <label className="text-sm text-gray-600 dark:text-gray-400 mb-1 block">Description *</label>
              <Textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                placeholder="Describe the role and responsibilities..."
                rows={4}
              />
            </div>
            <div>
              <label className="text-sm text-gray-600 dark:text-gray-400 mb-1 block">Requirements (comma-separated)</label>
              <Textarea
                value={formData.requirements}
                onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                placeholder="e.g., CA qualified, Audit experience, Good communication"
                rows={2}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-gray-600 dark:text-gray-400 mb-1 block">Application Deadline</label>
                <Input
                  value={formData.applicationDeadline}
                  onChange={(e) => setFormData({ ...formData, applicationDeadline: e.target.value })}
                  placeholder="e.g., 31 Dec 2024"
                />
              </div>
              <div>
                <label className="text-sm text-gray-600 dark:text-gray-400 mb-1 block">Contact Email</label>
                <Input
                  type="email"
                  value={formData.contactEmail}
                  onChange={(e) => setFormData({ ...formData, contactEmail: e.target.value })}
                  placeholder="e.g., careers@company.com"
                />
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => {
              setShowAddOpportunity(false);
              setEditingOpportunity(null);
              resetForm();
            }}>
              Cancel
            </Button>
            <Button onClick={editingOpportunity ? handleUpdateOpportunity : handleAddOpportunity}>
              {editingOpportunity ? 'Update' : 'Post'} Opportunity
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* View Opportunity Dialog */}
      {viewingOpportunity && (
        <Dialog open={!!viewingOpportunity} onOpenChange={() => setViewingOpportunity(null)}>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>{viewingOpportunity.title}</DialogTitle>
              <DialogDescription>{viewingOpportunity.company}</DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div className="flex flex-wrap gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <Badge variant="outline">{viewingOpportunity.type}</Badge>
                </div>
                <div className="flex items-center gap-1 text-gray-600 dark:text-gray-400">
                  <MapPin className="w-4 h-4" />
                  {viewingOpportunity.location}
                </div>
                <div className="flex items-center gap-1 text-gray-600 dark:text-gray-400">
                  <GraduationCap className="w-4 h-4" />
                  {viewingOpportunity.experienceRequired}
                </div>
                <div className="flex items-center gap-1 text-gray-600 dark:text-gray-400">
                  <IndianRupee className="w-4 h-4" />
                  {viewingOpportunity.salary}
                </div>
              </div>
              <div>
                <h4 className="text-gray-900 dark:text-gray-100 mb-2">Description</h4>
                <p className="text-gray-600 dark:text-gray-400">{viewingOpportunity.description}</p>
              </div>
              {viewingOpportunity.requirements.length > 0 && (
                <div>
                  <h4 className="text-gray-900 dark:text-gray-100 mb-2">Requirements</h4>
                  <div className="flex flex-wrap gap-2">
                    {viewingOpportunity.requirements.map((req, idx) => (
                      <Badge key={idx} variant="secondary">{req}</Badge>
                    ))}
                  </div>
                </div>
              )}
              <div className="pt-4 border-t">
                <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-3">
                  <div>Application Deadline: {viewingOpportunity.applicationDeadline}</div>
                </div>
                {viewingOpportunity.contactEmail && (
                  <Button
                    className="w-full gap-2"
                    onClick={() => window.open(`mailto:${viewingOpportunity.contactEmail}?subject=Application for ${viewingOpportunity.title}`, '_blank')}
                  >
                    <ExternalLink className="w-4 h-4" />
                    Apply Now
                  </Button>
                )}
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}

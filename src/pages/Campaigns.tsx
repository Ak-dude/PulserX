import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Briefcase, Calendar, DollarSign, TrendingUp, Clock, CheckCircle, XCircle, AlertCircle, Download, FileText, MessageSquare } from "lucide-react";

const Campaigns = () => {
  const { toast } = useToast();
  const [activeDialog, setActiveDialog] = useState<string | null>(null);
  const [selectedCampaign, setSelectedCampaign] = useState<any>(null);
  const [progressUpdate, setProgressUpdate] = useState("");
  const [showOpportunities, setShowOpportunities] = useState(false);

  const initialCampaigns = [
    {
      id: 1,
      brand: "Nike Sportswear",
      title: "Spring Collection Launch",
      status: "active",
      compensation: "$5,000",
      deadline: "2025-12-15",
      progress: 60,
      deliverables: ["3 Instagram Posts", "2 Stories", "1 Reel"],
      description: "Promote the new Spring 2025 athletic wear collection focusing on sustainability.",
      engagement: "150K+ reach required",
    },
    {
      id: 2,
      brand: "Glossier Beauty",
      title: "Summer Skincare Campaign",
      status: "pending",
      compensation: "$3,500",
      deadline: "2025-12-01",
      progress: 0,
      deliverables: ["5 TikTok Videos", "3 Instagram Reels"],
      description: "Create authentic content showcasing the new SPF skincare line.",
      engagement: "100K+ reach required",
    },
    {
      id: 3,
      brand: "Apple",
      title: "iPhone 16 Pro Review",
      status: "active",
      compensation: "$8,000",
      deadline: "2025-11-25",
      progress: 85,
      deliverables: ["1 YouTube Video", "3 Instagram Posts", "Twitter Thread"],
      description: "Comprehensive review of iPhone 16 Pro features and camera capabilities.",
      engagement: "500K+ reach required",
    },
    {
      id: 4,
      brand: "Starbucks",
      title: "Holiday Drinks Series",
      status: "completed",
      compensation: "$2,800",
      deadline: "2025-11-10",
      progress: 100,
      deliverables: ["4 Instagram Stories", "2 Posts"],
      description: "Showcase the new holiday beverage menu with aesthetic photography.",
      engagement: "80K+ reach achieved",
    },
    {
      id: 5,
      brand: "Tesla",
      title: "Model Y Test Drive Experience",
      status: "pending",
      compensation: "$12,000",
      deadline: "2025-12-20",
      progress: 0,
      deliverables: ["1 Long-form YouTube Video", "5 Instagram Posts"],
      description: "Document a week-long test drive experience with the new Model Y.",
      engagement: "1M+ reach required",
    },
    {
      id: 6,
      brand: "Spotify",
      title: "Year in Review Campaign",
      status: "active",
      compensation: "$4,200",
      deadline: "2025-12-05",
      progress: 40,
      deliverables: ["3 TikTok Videos", "4 Instagram Stories"],
      description: "Share your music journey and promote Spotify Wrapped 2025.",
      engagement: "200K+ reach required",
    },
    {
      id: 7,
      brand: "Adidas",
      title: "Running Shoe Launch",
      status: "rejected",
      compensation: "$6,000",
      deadline: "2025-11-15",
      progress: 0,
      deliverables: ["2 YouTube Shorts", "3 Instagram Reels"],
      description: "Showcase the new Ultraboost performance in various running conditions.",
      engagement: "300K+ reach required",
    },
    {
      id: 8,
      brand: "Samsung",
      title: "Galaxy Watch Review",
      status: "completed",
      compensation: "$5,500",
      deadline: "2025-11-08",
      progress: 100,
      deliverables: ["1 YouTube Video", "2 Instagram Posts"],
      description: "In-depth review of Galaxy Watch 6 fitness features.",
      engagement: "250K+ reach achieved",
    },
  ];

  const [campaigns, setCampaigns] = useState(initialCampaigns);

  const opportunities = [
    {
      id: 9,
      brand: "Coca-Cola",
      title: "New Year Campaign",
      compensation: "$7,500",
      deadline: "2025-12-31",
      deliverables: ["4 Instagram Posts", "3 Stories", "2 Reels"],
      description: "Celebrate New Year with refreshing Coca-Cola moments.",
      engagement: "300K+ reach required",
    },
    {
      id: 10,
      brand: "Adobe Creative Cloud",
      title: "Creator Spotlight Series",
      compensation: "$10,000",
      deadline: "2026-01-15",
      deliverables: ["2 YouTube Videos", "5 Instagram Posts"],
      description: "Showcase creative workflow using Adobe Creative Cloud tools.",
      engagement: "500K+ reach required",
    },
    {
      id: 11,
      brand: "Amazon Prime",
      title: "Holiday Shopping Guide",
      compensation: "$4,800",
      deadline: "2025-12-10",
      deliverables: ["3 TikTok Videos", "4 Instagram Stories"],
      description: "Create gift guides and shopping recommendations for Prime members.",
      engagement: "200K+ reach required",
    },
  ];

  const handleAcceptOffer = (campaign: any) => {
    setCampaigns(campaigns.map(c => 
      c.id === campaign.id ? { ...c, status: "active", progress: 0 } : c
    ));
    toast({
      title: "Campaign Accepted!",
      description: `You've accepted the ${campaign.title} campaign. Let's get started!`,
    });
    setActiveDialog(null);
  };

  const handleDeclineOffer = (campaign: any) => {
    setCampaigns(campaigns.map(c => 
      c.id === campaign.id ? { ...c, status: "rejected" } : c
    ));
    toast({
      title: "Campaign Declined",
      description: `You've declined the ${campaign.title} campaign.`,
      variant: "destructive",
    });
    setActiveDialog(null);
  };

  const handleUpdateProgress = () => {
    if (selectedCampaign) {
      const newProgress = Math.min(selectedCampaign.progress + 20, 100);
      setCampaigns(campaigns.map(c => 
        c.id === selectedCampaign.id ? { 
          ...c, 
          progress: newProgress,
          status: newProgress === 100 ? "completed" : "active"
        } : c
      ));
      toast({
        title: "Progress Updated!",
        description: `Campaign progress updated to ${newProgress}%. ${progressUpdate}`,
      });
      setProgressUpdate("");
      setActiveDialog(null);
    }
  };

  const handleDownloadInvoice = (campaign: any) => {
    toast({
      title: "Invoice Downloaded",
      description: `Invoice for ${campaign.title} has been downloaded.`,
    });
  };

  const handleViewReport = (campaign: any) => {
    setSelectedCampaign(campaign);
    setActiveDialog("report");
  };

  const handleViewDetails = (campaign: any) => {
    setSelectedCampaign(campaign);
    setActiveDialog("details");
  };

  const handleViewFeedback = (campaign: any) => {
    setSelectedCampaign(campaign);
    setActiveDialog("feedback");
  };

  const handleApplyToOpportunity = (opportunity: any) => {
    const newCampaign = {
      ...opportunity,
      status: "pending",
      progress: 0,
    };
    setCampaigns([newCampaign, ...campaigns]);
    setShowOpportunities(false);
    toast({
      title: "Application Submitted!",
      description: `Your application for ${opportunity.title} has been submitted.`,
    });
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "active":
        return <Clock className="w-4 h-4" />;
      case "completed":
        return <CheckCircle className="w-4 h-4" />;
      case "pending":
        return <AlertCircle className="w-4 h-4" />;
      case "rejected":
        return <XCircle className="w-4 h-4" />;
      default:
        return null;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-blue-500/10 text-blue-500 border-blue-500/20";
      case "completed":
        return "bg-green-500/10 text-green-500 border-green-500/20";
      case "pending":
        return "bg-yellow-500/10 text-yellow-500 border-yellow-500/20";
      case "rejected":
        return "bg-red-500/10 text-red-500 border-red-500/20";
      default:
        return "";
    }
  };

  const filterCampaigns = (status: string) => {
    if (status === "all") return campaigns;
    return campaigns.filter((campaign) => campaign.status === status);
  };

  const stats = [
    {
      title: "Active Campaigns",
      value: campaigns.filter((c) => c.status === "active").length,
      icon: TrendingUp,
      color: "text-blue-500",
    },
    {
      title: "Pending Offers",
      value: campaigns.filter((c) => c.status === "pending").length,
      icon: Clock,
      color: "text-yellow-500",
    },
    {
      title: "Completed",
      value: campaigns.filter((c) => c.status === "completed").length,
      icon: CheckCircle,
      color: "text-green-500",
    },
    {
      title: "Total Earnings",
      value: "$27,000",
      icon: DollarSign,
      color: "text-primary",
    },
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Campaigns</h1>
            <p className="text-muted-foreground mt-1">
              Manage your brand collaborations and opportunities
            </p>
          </div>
          <Button onClick={() => setShowOpportunities(true)}>
            <Briefcase className="w-4 h-4 mr-2" />
            Find Opportunities
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">{stat.title}</p>
                    <p className="text-2xl font-bold mt-1">{stat.value}</p>
                  </div>
                  <stat.icon className={`w-8 h-8 ${stat.color}`} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="w-full justify-start mb-6">
            <TabsTrigger value="all">All Campaigns</TabsTrigger>
            <TabsTrigger value="active">Active</TabsTrigger>
            <TabsTrigger value="pending">Pending</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
            <TabsTrigger value="rejected">Rejected</TabsTrigger>
          </TabsList>

          {["all", "active", "pending", "completed", "rejected"].map((status) => (
            <TabsContent key={status} value={status} className="space-y-4">
              {filterCampaigns(status).map((campaign) => (
                <Card key={campaign.id}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <CardTitle className="text-xl">{campaign.title}</CardTitle>
                          <Badge className={getStatusColor(campaign.status)}>
                            <div className="flex items-center gap-1">
                              {getStatusIcon(campaign.status)}
                              <span className="capitalize">{campaign.status}</span>
                            </div>
                          </Badge>
                        </div>
                        <CardDescription className="text-base">
                          {campaign.brand}
                        </CardDescription>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-primary">
                          {campaign.compensation}
                        </p>
                        <p className="text-sm text-muted-foreground">Compensation</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">{campaign.description}</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm">
                          <Calendar className="w-4 h-4 text-muted-foreground" />
                          <span className="text-muted-foreground">Deadline:</span>
                          <span className="font-medium">{campaign.deadline}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <TrendingUp className="w-4 h-4 text-muted-foreground" />
                          <span className="text-muted-foreground">{campaign.engagement}</span>
                        </div>
                      </div>

                      <div>
                        <p className="text-sm font-medium mb-2">Deliverables:</p>
                        <div className="flex flex-wrap gap-2">
                          {campaign.deliverables.map((deliverable, idx) => (
                            <Badge key={idx} variant="secondary">
                              {deliverable}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>

                    {campaign.status === "active" && (
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">Progress</span>
                          <span className="font-medium">{campaign.progress}%</span>
                        </div>
                        <Progress value={campaign.progress} />
                      </div>
                    )}

                    <div className="flex gap-2 pt-2">
                      {campaign.status === "pending" && (
                        <>
                          <Button className="flex-1" onClick={() => handleAcceptOffer(campaign)}>
                            Accept Offer
                          </Button>
                          <Button variant="outline" className="flex-1" onClick={() => handleDeclineOffer(campaign)}>
                            Decline
                          </Button>
                        </>
                      )}
                      {campaign.status === "active" && (
                        <>
                          <Button className="flex-1" onClick={() => {
                            setSelectedCampaign(campaign);
                            setActiveDialog("progress");
                          }}>
                            Update Progress
                          </Button>
                          <Button variant="outline" className="flex-1" onClick={() => handleViewDetails(campaign)}>
                            View Details
                          </Button>
                        </>
                      )}
                      {campaign.status === "completed" && (
                        <>
                          <Button variant="outline" className="flex-1" onClick={() => handleViewReport(campaign)}>
                            <FileText className="w-4 h-4 mr-2" />
                            View Report
                          </Button>
                          <Button variant="outline" className="flex-1" onClick={() => handleDownloadInvoice(campaign)}>
                            <Download className="w-4 h-4 mr-2" />
                            Download Invoice
                          </Button>
                        </>
                      )}
                      {campaign.status === "rejected" && (
                        <Button variant="outline" className="flex-1" onClick={() => handleViewFeedback(campaign)}>
                          <MessageSquare className="w-4 h-4 mr-2" />
                          View Feedback
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
          ))}
        </Tabs>
      </div>

      {/* Find Opportunities Dialog */}
      <Dialog open={showOpportunities} onOpenChange={setShowOpportunities}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Available Opportunities</DialogTitle>
            <DialogDescription>
              Browse and apply to new brand collaboration opportunities
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            {opportunities.map((opp) => (
              <Card key={opp.id}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-lg">{opp.title}</CardTitle>
                      <CardDescription>{opp.brand}</CardDescription>
                    </div>
                    <div className="text-right">
                      <p className="text-xl font-bold text-primary">{opp.compensation}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground">{opp.description}</p>
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="w-4 h-4 text-muted-foreground" />
                    <span className="text-muted-foreground">Deadline:</span>
                    <span className="font-medium">{opp.deadline}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <TrendingUp className="w-4 h-4 text-muted-foreground" />
                    <span className="text-muted-foreground">{opp.engagement}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {opp.deliverables.map((deliverable, idx) => (
                      <Badge key={idx} variant="secondary">
                        {deliverable}
                      </Badge>
                    ))}
                  </div>
                  <Button className="w-full" onClick={() => handleApplyToOpportunity(opp)}>
                    Apply Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </DialogContent>
      </Dialog>

      {/* Update Progress Dialog */}
      <Dialog open={activeDialog === "progress"} onOpenChange={() => setActiveDialog(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Update Campaign Progress</DialogTitle>
            <DialogDescription>
              {selectedCampaign?.title} - Current progress: {selectedCampaign?.progress}%
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <Label htmlFor="progress-note">Progress Note (Optional)</Label>
              <Textarea
                id="progress-note"
                placeholder="Add notes about what you've completed..."
                value={progressUpdate}
                onChange={(e) => setProgressUpdate(e.target.value)}
                className="mt-2"
              />
            </div>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">
                This will update progress by +20% (to {Math.min((selectedCampaign?.progress || 0) + 20, 100)}%)
              </p>
              <Progress value={Math.min((selectedCampaign?.progress || 0) + 20, 100)} />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setActiveDialog(null)}>Cancel</Button>
            <Button onClick={handleUpdateProgress}>Update Progress</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* View Details Dialog */}
      <Dialog open={activeDialog === "details"} onOpenChange={() => setActiveDialog(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{selectedCampaign?.title}</DialogTitle>
            <DialogDescription>{selectedCampaign?.brand}</DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Campaign Description</h4>
              <p className="text-sm text-muted-foreground">{selectedCampaign?.description}</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Deliverables</h4>
              <ul className="list-disc list-inside space-y-1">
                {selectedCampaign?.deliverables.map((d: string, idx: number) => (
                  <li key={idx} className="text-sm text-muted-foreground">{d}</li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4 pt-2 border-t">
              <div>
                <p className="text-sm text-muted-foreground">Compensation</p>
                <p className="text-lg font-bold text-primary">{selectedCampaign?.compensation}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Deadline</p>
                <p className="text-lg font-bold">{selectedCampaign?.deadline}</p>
              </div>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Required Engagement</p>
              <p className="font-medium">{selectedCampaign?.engagement}</p>
            </div>
          </div>
          <DialogFooter>
            <Button onClick={() => setActiveDialog(null)}>Close</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* View Report Dialog */}
      <Dialog open={activeDialog === "report"} onOpenChange={() => setActiveDialog(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Campaign Report</DialogTitle>
            <DialogDescription>{selectedCampaign?.title}</DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <Card>
                <CardContent className="p-4">
                  <p className="text-sm text-muted-foreground">Total Reach</p>
                  <p className="text-2xl font-bold">842K</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <p className="text-sm text-muted-foreground">Engagement</p>
                  <p className="text-2xl font-bold">12.4%</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <p className="text-sm text-muted-foreground">Impressions</p>
                  <p className="text-2xl font-bold">1.2M</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <p className="text-sm text-muted-foreground">Clicks</p>
                  <p className="text-2xl font-bold">28.5K</p>
                </CardContent>
              </Card>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Performance Summary</h4>
              <p className="text-sm text-muted-foreground">
                This campaign exceeded expectations with a 12.4% engagement rate, surpassing the initial goal by 3.1%. 
                All deliverables were completed on time with excellent audience reception.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Deliverables Completed</h4>
              <ul className="space-y-2">
                {selectedCampaign?.deliverables.map((d: string, idx: number) => (
                  <li key={idx} className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => handleDownloadInvoice(selectedCampaign)}>
              <Download className="w-4 h-4 mr-2" />
              Download Report
            </Button>
            <Button onClick={() => setActiveDialog(null)}>Close</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* View Feedback Dialog */}
      <Dialog open={activeDialog === "feedback"} onOpenChange={() => setActiveDialog(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Brand Feedback</DialogTitle>
            <DialogDescription>{selectedCampaign?.title}</DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
              <div className="flex items-start gap-2">
                <XCircle className="w-5 h-5 text-red-500 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-red-500 mb-1">Campaign Not Accepted</h4>
                  <p className="text-sm text-muted-foreground">
                    Thank you for your interest in our campaign. After careful review, we've decided to move forward 
                    with other creators whose audience demographics more closely align with our target market.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Feedback Details</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Target audience age range didn't match our requirements (25-34)</li>
                <li>• Looking for creators with higher engagement rates in specific regions</li>
                <li>• Content style preference for more lifestyle-focused content</li>
              </ul>
            </div>
            <div className="border-t pt-4">
              <p className="text-sm text-muted-foreground">
                We encourage you to apply to future opportunities that better match your profile. 
                Your portfolio has been saved for future consideration.
              </p>
            </div>
          </div>
          <DialogFooter>
            <Button onClick={() => setActiveDialog(null)}>Close</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Campaigns;

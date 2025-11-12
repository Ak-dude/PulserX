import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Briefcase, Calendar, DollarSign, TrendingUp, Clock, CheckCircle, XCircle, AlertCircle } from "lucide-react";

const Campaigns = () => {
  const campaigns = [
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
          <Button>
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
                          <Button className="flex-1">Accept Offer</Button>
                          <Button variant="outline" className="flex-1">
                            Decline
                          </Button>
                        </>
                      )}
                      {campaign.status === "active" && (
                        <>
                          <Button className="flex-1">Update Progress</Button>
                          <Button variant="outline" className="flex-1">
                            View Details
                          </Button>
                        </>
                      )}
                      {campaign.status === "completed" && (
                        <>
                          <Button variant="outline" className="flex-1">
                            View Report
                          </Button>
                          <Button variant="outline" className="flex-1">
                            Download Invoice
                          </Button>
                        </>
                      )}
                      {campaign.status === "rejected" && (
                        <Button variant="outline" className="flex-1">
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
    </div>
  );
};

export default Campaigns;

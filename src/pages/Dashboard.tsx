import { Card } from "@/components/ui/card";
import { Users, MessageSquare, Bell, TrendingUp } from "lucide-react";

const Dashboard = () => {
  const stats = [
    { icon: Users, label: "Connections", value: "1.2K", change: "+12%" },
    { icon: MessageSquare, label: "Messages", value: "84", change: "+5%" },
    { icon: Bell, label: "Notifications", value: "12", change: "new" },
    { icon: TrendingUp, label: "Engagement", value: "94%", change: "+8%" },
  ];

  return (
    <div className="min-h-screen bg-background pb-20 pt-8 px-4">
      <div className="max-w-6xl mx-auto space-y-6">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
            Welcome Back! 👋
          </h1>
          <p className="text-muted-foreground">Here's what's happening with your network</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <Card key={stat.label} className="p-4 bg-card border-border hover:border-primary/50 transition-all duration-300">
              <div className="flex items-start justify-between mb-3">
                <stat.icon className="w-5 h-5 text-primary" />
                <span className="text-xs text-accent font-medium">{stat.change}</span>
              </div>
              <div className="text-2xl font-bold mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-4">
          <Card className="p-6 bg-gradient-card border-border">
            <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
            <div className="space-y-3">
              {[
                { name: "Sarah Mitchell", action: "sent you a collaboration request", time: "5m ago", handle: "@sarahmitch" },
                { name: "David Park", action: "liked your recent campaign", time: "23m ago", handle: "@davidpark" },
                { name: "Emma Rodriguez", action: "wants to connect", time: "1h ago", handle: "@emmarodriguez" },
                { name: "Alex Chen", action: "commented on your post", time: "2h ago", handle: "@alexchen" },
                { name: "Maya Johnson", action: "shared your content", time: "3h ago", handle: "@mayaj" },
                { name: "Ryan Foster", action: "started following you", time: "4h ago", handle: "@ryanf" },
              ].map((activity, i) => (
                <div key={i} className="flex items-center gap-4 p-3 rounded-lg bg-background/50 hover:bg-background/70 transition-colors cursor-pointer">
                  <div className="w-10 h-10 rounded-full bg-gradient-primary" />
                  <div className="flex-1">
                    <p className="font-medium">{activity.name}</p>
                    <p className="text-sm text-muted-foreground">{activity.action}</p>
                  </div>
                  <span className="text-xs text-muted-foreground">{activity.time}</span>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6 bg-card border-border">
            <h2 className="text-xl font-bold mb-4">Top Performing Content</h2>
            <div className="space-y-3">
              {[
                { title: "Summer Fashion Collab", platform: "Instagram", engagement: "12.5K", growth: "+24%" },
                { title: "Tech Review Series", platform: "YouTube", engagement: "45.2K", growth: "+18%" },
                { title: "Behind the Scenes", platform: "TikTok", engagement: "89.1K", growth: "+32%" },
                { title: "Product Launch Event", platform: "Twitter", engagement: "6.8K", growth: "+15%" },
                { title: "Daily Vlog #42", platform: "YouTube", engagement: "23.4K", growth: "+21%" },
              ].map((content, i) => (
                <div key={i} className="p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <p className="font-medium">{content.title}</p>
                      <p className="text-xs text-muted-foreground">{content.platform}</p>
                    </div>
                    <span className="text-xs text-accent font-medium">{content.growth}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{content.engagement} engagements</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

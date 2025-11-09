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

        <Card className="p-6 bg-gradient-card border-border">
          <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center gap-4 p-3 rounded-lg bg-background/50 hover:bg-background/70 transition-colors">
                <div className="w-10 h-10 rounded-full bg-gradient-primary" />
                <div className="flex-1">
                  <p className="font-medium">New connection request</p>
                  <p className="text-sm text-muted-foreground">@influencer{i} wants to connect</p>
                </div>
                <span className="text-xs text-muted-foreground">2h ago</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;

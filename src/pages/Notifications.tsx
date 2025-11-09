import { Card } from "@/components/ui/card";
import { Bell, UserPlus, MessageSquare, Heart } from "lucide-react";

const Notifications = () => {
  const notifications = [
    { icon: UserPlus, text: "Sarah Johnson wants to connect", time: "5m ago", type: "connection" },
    { icon: MessageSquare, text: "New message from Mike Chen", time: "15m ago", type: "message" },
    { icon: Heart, text: "Emma Davis liked your post", time: "32m ago", type: "like" },
    { icon: Bell, text: "Your campaign reached 10K views", time: "1h ago", type: "milestone" },
    { icon: UserPlus, text: "Alex Rivera accepted your request", time: "2h ago", type: "connection" },
    { icon: MessageSquare, text: "Jordan Smith replied to your comment", time: "3h ago", type: "message" },
    { icon: Heart, text: "Taylor Brown and 24 others liked your photo", time: "4h ago", type: "like" },
    { icon: Bell, text: "New collaboration opportunity available", time: "5h ago", type: "milestone" },
    { icon: UserPlus, text: "Casey Martinez is now following you", time: "6h ago", type: "connection" },
    { icon: MessageSquare, text: "Morgan Lee mentioned you in a comment", time: "8h ago", type: "message" },
    { icon: Heart, text: "Riley Cooper shared your content", time: "10h ago", type: "like" },
    { icon: Bell, text: "You've reached 500K total followers!", time: "12h ago", type: "milestone" },
    { icon: UserPlus, text: "Jamie Wilson sent you a connection request", time: "1d ago", type: "connection" },
    { icon: MessageSquare, text: "Chris Anderson started a conversation", time: "1d ago", type: "message" },
    { icon: Bell, text: "Your engagement rate increased by 15%", time: "2d ago", type: "milestone" },
    { icon: Heart, text: "Sam Taylor loved your recent video", time: "2d ago", type: "like" },
    { icon: UserPlus, text: "Blake Garcia wants to collaborate", time: "3d ago", type: "connection" },
    { icon: Bell, text: "Monthly analytics report is ready", time: "3d ago", type: "milestone" },
  ];

  const getIconColor = (type: string) => {
    switch (type) {
      case "connection": return "text-primary";
      case "message": return "text-accent";
      case "like": return "text-pink-500";
      case "milestone": return "text-yellow-500";
      default: return "text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-background pb-20 pt-8 px-4">
      <div className="max-w-6xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Notifications</h1>
            <p className="text-muted-foreground">Stay updated with your network</p>
          </div>
          <button className="text-sm text-primary hover:underline">Mark all as read</button>
        </div>

        <div className="space-y-3">
          {notifications.map((notif, index) => (
            <Card 
              key={index} 
              className="p-4 bg-card border-border hover:border-primary/50 transition-all cursor-pointer"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                  <notif.icon className={`w-5 h-5 ${getIconColor(notif.type)}`} />
                </div>
                <div className="flex-1">
                  <p className="font-medium mb-1">{notif.text}</p>
                  <p className="text-sm text-muted-foreground">{notif.time}</p>
                </div>
                <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0 mt-2" />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Notifications;

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import { Bell, UserPlus, MessageSquare, Heart, X } from "lucide-react";

const Notifications = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [selectedNotif, setSelectedNotif] = useState<any>(null);
  const [showNotifDialog, setShowNotifDialog] = useState(false);

  const initialNotifications = [
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

  const [notifications, setNotifications] = useState(initialNotifications);

  const handleMarkAllRead = () => {
    toast({
      title: "All Read",
      description: "All notifications marked as read.",
    });
  };

  const handleNotificationClick = (notif: any) => {
    setSelectedNotif(notif);
    setShowNotifDialog(true);
  };

  const handleAcceptConnection = () => {
    toast({
      title: "Connection Accepted",
      description: "You're now connected!",
    });
    setShowNotifDialog(false);
  };

  const handleViewMessage = () => {
    setShowNotifDialog(false);
    navigate("/messages");
  };

  const handleDeleteNotification = (index: number) => {
    setNotifications(notifications.filter((_, i) => i !== index));
    toast({
      title: "Notification Removed",
      description: "Notification has been deleted.",
    });
  };

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
          <Button variant="ghost" onClick={handleMarkAllRead}>
            Mark all as read
          </Button>
        </div>

        <div className="space-y-3">
          {notifications.map((notif, index) => (
            <Card 
              key={index} 
              className="p-4 bg-card border-border hover:border-primary/50 transition-all group relative"
            >
              <div 
                className="flex items-start gap-4 cursor-pointer"
                onClick={() => handleNotificationClick(notif)}
              >
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                  <notif.icon className={`w-5 h-5 ${getIconColor(notif.type)}`} />
                </div>
                <div className="flex-1">
                  <p className="font-medium mb-1">{notif.text}</p>
                  <p className="text-sm text-muted-foreground">{notif.time}</p>
                </div>
                <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0 mt-2" />
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                onClick={(e) => {
                  e.stopPropagation();
                  handleDeleteNotification(index);
                }}
              >
                <X className="w-4 h-4" />
              </Button>
            </Card>
          ))}
        </div>
      </div>

      {/* Notification Dialog */}
      <Dialog open={showNotifDialog} onOpenChange={setShowNotifDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Notification</DialogTitle>
            <DialogDescription>
              {selectedNotif?.time}
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                {selectedNotif?.icon && <selectedNotif.icon className={`w-6 h-6 ${getIconColor(selectedNotif.type)}`} />}
              </div>
              <p className="font-medium flex-1">{selectedNotif?.text}</p>
            </div>
          </div>
          <DialogFooter className="flex-col sm:flex-row gap-2">
            {selectedNotif?.type === "connection" && (
              <>
                <Button onClick={handleAcceptConnection} className="w-full">
                  Accept
                </Button>
                <Button variant="outline" onClick={() => setShowNotifDialog(false)} className="w-full">
                  Ignore
                </Button>
              </>
            )}
            {selectedNotif?.type === "message" && (
              <Button onClick={handleViewMessage} className="w-full">
                View Message
              </Button>
            )}
            {(selectedNotif?.type === "like" || selectedNotif?.type === "milestone") && (
              <Button onClick={() => setShowNotifDialog(false)} className="w-full">
                Close
              </Button>
            )}
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Notifications;

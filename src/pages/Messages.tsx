import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Send } from "lucide-react";

const Messages = () => {
  const conversations = [
    { id: 1, name: "Sarah Johnson", lastMessage: "That sounds great! Let's collab", time: "2m ago", unread: 2 },
    { id: 2, name: "Mike Chen", lastMessage: "Thanks for connecting!", time: "1h ago", unread: 0 },
    { id: 3, name: "Emma Davis", lastMessage: "I'll send you the details soon", time: "3h ago", unread: 1 },
    { id: 4, name: "Alex Rivera", lastMessage: "Love your recent content!", time: "5h ago", unread: 0 },
    { id: 5, name: "Jordan Smith", lastMessage: "Are you available next week?", time: "8h ago", unread: 3 },
    { id: 6, name: "Taylor Brown", lastMessage: "Check out this opportunity", time: "12h ago", unread: 0 },
    { id: 7, name: "Casey Martinez", lastMessage: "Perfect! I'll book it now", time: "1d ago", unread: 0 },
    { id: 8, name: "Morgan Lee", lastMessage: "Thanks for the introduction", time: "1d ago", unread: 1 },
    { id: 9, name: "Riley Cooper", lastMessage: "See you at the event!", time: "2d ago", unread: 0 },
    { id: 10, name: "Jamie Wilson", lastMessage: "Great working with you", time: "3d ago", unread: 0 },
  ];

  return (
    <div className="min-h-screen bg-background pb-20 pt-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-6">
          <h1 className="text-3xl font-bold mb-4">Messages</h1>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input 
              placeholder="Search conversations..." 
              className="pl-10 bg-card border-border"
            />
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-4">
          <Card className="lg:col-span-1 p-4 bg-card border-border">
            <div className="space-y-2">
              {conversations.map((conv) => (
                <div
                  key={conv.id}
                  className="p-3 rounded-lg hover:bg-secondary cursor-pointer transition-colors"
                >
                  <div className="flex items-start justify-between mb-1">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-primary" />
                      <div>
                        <h3 className="font-semibold text-sm">{conv.name}</h3>
                        <p className="text-xs text-muted-foreground truncate max-w-[150px]">
                          {conv.lastMessage}
                        </p>
                      </div>
                    </div>
                    {conv.unread > 0 && (
                      <span className="w-5 h-5 rounded-full bg-accent text-xs flex items-center justify-center">
                        {conv.unread}
                      </span>
                    )}
                  </div>
                  <span className="text-xs text-muted-foreground">{conv.time}</span>
                </div>
              ))}
            </div>
          </Card>

          <Card className="lg:col-span-2 p-6 bg-card border-border hidden lg:flex flex-col">
            <div className="flex items-center gap-3 pb-4 border-b border-border mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-primary" />
              <div>
                <h3 className="font-semibold">Sarah Johnson</h3>
                <p className="text-xs text-muted-foreground">Active now</p>
              </div>
            </div>

            <div className="flex-1 space-y-4 mb-4">
              <div className="flex gap-2">
                <div className="w-8 h-8 rounded-full bg-gradient-primary flex-shrink-0" />
                <div className="bg-secondary rounded-2xl rounded-tl-sm p-3 max-w-[70%]">
                  <p className="text-sm">Hey! I saw your latest campaign. Would love to collaborate!</p>
                </div>
              </div>
              <div className="flex gap-2 justify-end">
                <div className="bg-primary rounded-2xl rounded-tr-sm p-3 max-w-[70%]">
                  <p className="text-sm text-primary-foreground">That sounds great! Let's collab</p>
                </div>
              </div>
            </div>

            <div className="flex gap-2">
              <Input 
                placeholder="Type a message..." 
                className="bg-secondary border-border"
              />
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Messages;

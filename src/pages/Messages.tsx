import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Search, Send } from "lucide-react";

const Messages = () => {
  const { toast } = useToast();
  const [selectedConversation, setSelectedConversation] = useState(1);
  const [messageText, setMessageText] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  
  const initialConversations = [
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

  const [conversations, setConversations] = useState(initialConversations);
  const [messages, setMessages] = useState([
    { id: 1, sender: "them", text: "Hey! I saw your latest campaign. Would love to collaborate!", time: "2m ago" },
    { id: 2, sender: "me", text: "That sounds great! Let's collab", time: "Just now" },
  ]);

  const selectedConv = conversations.find(c => c.id === selectedConversation);

  const handleSendMessage = () => {
    if (messageText.trim()) {
      setMessages([...messages, {
        id: messages.length + 1,
        sender: "me",
        text: messageText,
        time: "Just now"
      }]);
      
      // Update last message in conversation list
      setConversations(conversations.map(c => 
        c.id === selectedConversation 
          ? { ...c, lastMessage: messageText, time: "Just now" }
          : c
      ));

      toast({
        title: "Message Sent",
        description: "Your message has been delivered.",
      });
      
      setMessageText("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const filteredConversations = conversations.filter(c => 
    c.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-4">
          <Card className="lg:col-span-1 p-4 bg-card border-border">
            <div className="space-y-2">
              {filteredConversations.map((conv) => (
                <div
                  key={conv.id}
                  className={`p-3 rounded-lg hover:bg-secondary cursor-pointer transition-colors ${
                    selectedConversation === conv.id ? "bg-secondary" : ""
                  }`}
                  onClick={() => setSelectedConversation(conv.id)}
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
                <h3 className="font-semibold">{selectedConv?.name}</h3>
                <p className="text-xs text-muted-foreground">Active now</p>
              </div>
            </div>

            <div className="flex-1 space-y-4 mb-4 overflow-y-auto">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex gap-2 ${msg.sender === "me" ? "justify-end" : ""}`}>
                  {msg.sender === "them" && (
                    <div className="w-8 h-8 rounded-full bg-gradient-primary flex-shrink-0" />
                  )}
                  <div className={`${
                    msg.sender === "me" 
                      ? "bg-primary text-primary-foreground rounded-2xl rounded-tr-sm" 
                      : "bg-secondary rounded-2xl rounded-tl-sm"
                  } p-3 max-w-[70%]`}>
                    <p className="text-sm">{msg.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-2">
              <Input 
                placeholder="Type a message..." 
                className="bg-secondary border-border"
                value={messageText}
                onChange={(e) => setMessageText(e.target.value)}
                onKeyPress={handleKeyPress}
              />
              <Button 
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
                onClick={handleSendMessage}
              >
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

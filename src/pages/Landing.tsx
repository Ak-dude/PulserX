import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { Users, MessageSquare, TrendingUp, Sparkles, Link as LinkIcon, Bell } from "lucide-react";

const Landing = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: LinkIcon,
      title: "Connect All Platforms",
      description: "Link your Instagram, Twitter, YouTube, and more in one place",
    },
    {
      icon: Users,
      title: "Network with Creators",
      description: "Find and collaborate with influencers in your niche",
    },
    {
      icon: MessageSquare,
      title: "Seamless Messaging",
      description: "Chat directly with other influencers and manage collaborations",
    },
    {
      icon: Bell,
      title: "Smart Notifications",
      description: "Stay updated with real-time alerts on connections and messages",
    },
    {
      icon: TrendingUp,
      title: "Track Your Growth",
      description: "Monitor your engagement and reach across all platforms",
    },
    {
      icon: Sparkles,
      title: "Discover Opportunities",
      description: "Get matched with brands and collaboration opportunities",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-primary opacity-20 blur-3xl" />
        <div className="relative max-w-6xl mx-auto px-4 pt-20 pb-32 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">The Future of Influencer Collaboration</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Connect. Collaborate.
            <br />
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Grow Together.
            </span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of influencers building meaningful connections and growing their brands through collaboration.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8"
              onClick={() => navigate("/dashboard")}
            >
              Get Started Free
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-border text-lg px-8"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="max-w-6xl mx-auto px-4 pb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything You Need</h2>
          <p className="text-xl text-muted-foreground">
            Powerful tools to amplify your influence
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <Card 
              key={feature.title}
              className="p-6 bg-gradient-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-6xl mx-auto px-4 pb-20">
        <Card className="p-12 bg-gradient-card border-border text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Elevate Your Influence?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join our community of creators and start building valuable connections today.
          </p>
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8"
            onClick={() => navigate("/dashboard")}
          >
            Start Your Journey
          </Button>
        </Card>
      </section>
    </div>
  );
};

export default Landing;

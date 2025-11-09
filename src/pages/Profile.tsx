import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Settings, Instagram, Twitter, Youtube, MapPin, Link as LinkIcon } from "lucide-react";

const Profile = () => {
  return (
    <div className="min-h-screen bg-background pb-20 pt-8 px-4">
      <div className="max-w-6xl mx-auto space-y-6">
        <Card className="p-6 bg-gradient-card border-border">
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="w-24 h-24 rounded-full bg-gradient-primary flex-shrink-0" />
            <div className="flex-1">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-2xl font-bold mb-1">Your Name</h1>
                  <p className="text-muted-foreground">@yourhandle</p>
                </div>
                <Button variant="outline" className="border-border">
                  <Settings className="w-4 h-4 mr-2" />
                  Edit Profile
                </Button>
              </div>
              <p className="text-muted-foreground mb-4">
                Content creator & influencer helping brands connect with audiences. 
                Passionate about tech, lifestyle, and digital marketing.
              </p>
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  San Francisco, CA
                </div>
                <div className="flex items-center gap-2">
                  <LinkIcon className="w-4 h-4" />
                  yourwebsite.com
                </div>
              </div>
            </div>
          </div>
        </Card>

        <div className="grid md:grid-cols-3 gap-4">
          <Card className="p-6 bg-card border-border text-center">
            <div className="text-3xl font-bold mb-1">1.2K</div>
            <div className="text-sm text-muted-foreground">Connections</div>
          </Card>
          <Card className="p-6 bg-card border-border text-center">
            <div className="text-3xl font-bold mb-1">470K</div>
            <div className="text-sm text-muted-foreground">Total Reach</div>
          </Card>
          <Card className="p-6 bg-card border-border text-center">
            <div className="text-3xl font-bold mb-1">94%</div>
            <div className="text-sm text-muted-foreground">Engagement</div>
          </Card>
        </div>

        <Card className="p-6 bg-card border-border">
          <h2 className="text-xl font-bold mb-4">Connected Platforms</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { icon: Instagram, name: "Instagram", followers: "125K" },
              { icon: Twitter, name: "Twitter", followers: "89K" },
              { icon: Youtube, name: "YouTube", followers: "256K" },
            ].map((platform) => (
              <div key={platform.name} className="flex items-center gap-3 p-4 rounded-lg bg-secondary">
                <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
                  <platform.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold">{platform.name}</div>
                  <div className="text-sm text-muted-foreground">{platform.followers}</div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Profile;

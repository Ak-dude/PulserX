import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Settings, Instagram, Twitter, Youtube, MapPin, Link as LinkIcon } from "lucide-react";

const Profile = () => {
  const { toast } = useToast();
  const [showEditDialog, setShowEditDialog] = useState(false);
  const [profileData, setProfileData] = useState({
    name: "Your Name",
    handle: "@yourhandle",
    bio: "Content creator & influencer helping brands connect with audiences. Passionate about tech, lifestyle, and digital marketing.",
    location: "San Francisco, CA",
    website: "yourwebsite.com",
  });
  const [editData, setEditData] = useState(profileData);

  const handleEditProfile = () => {
    setEditData(profileData);
    setShowEditDialog(true);
  };

  const handleSaveProfile = () => {
    setProfileData(editData);
    toast({
      title: "Profile Updated",
      description: "Your profile has been successfully updated.",
    });
    setShowEditDialog(false);
  };

  return (
    <div className="min-h-screen bg-background pb-20 pt-8 px-4">
      <div className="max-w-6xl mx-auto space-y-6">
        <Card className="p-6 bg-gradient-card border-border">
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="w-24 h-24 rounded-full bg-gradient-primary flex-shrink-0" />
            <div className="flex-1">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-2xl font-bold mb-1">{profileData.name}</h1>
                  <p className="text-muted-foreground">{profileData.handle}</p>
                </div>
                <Button variant="outline" className="border-border" onClick={handleEditProfile}>
                  <Settings className="w-4 h-4 mr-2" />
                  Edit Profile
                </Button>
              </div>
              <p className="text-muted-foreground mb-4">
                {profileData.bio}
              </p>
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  {profileData.location}
                </div>
                <div className="flex items-center gap-2">
                  <LinkIcon className="w-4 h-4" />
                  {profileData.website}
                </div>
              </div>
            </div>
          </div>
        </Card>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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
          <Card className="p-6 bg-card border-border text-center">
            <div className="text-3xl font-bold mb-1">$12.5K</div>
            <div className="text-sm text-muted-foreground">Avg. Campaign</div>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <Card className="p-6 bg-card border-border">
            <h2 className="text-xl font-bold mb-4">Recent Collaborations</h2>
            <div className="space-y-3">
              {[
                { brand: "TechGear Pro", type: "Product Review", status: "Completed", amount: "$15K" },
                { brand: "FashionNova", type: "Campaign", status: "In Progress", amount: "$22K" },
                { brand: "HealthFit", type: "Sponsored Post", status: "Completed", amount: "$8.5K" },
                { brand: "TravelMore", type: "Ambassador", status: "Active", amount: "$30K" },
              ].map((collab, i) => (
                <div key={i} className="p-3 rounded-lg bg-secondary/50">
                  <div className="flex items-start justify-between mb-1">
                    <div>
                      <p className="font-semibold">{collab.brand}</p>
                      <p className="text-sm text-muted-foreground">{collab.type}</p>
                    </div>
                    <span className="text-sm font-medium text-accent">{collab.amount}</span>
                  </div>
                  <p className="text-xs text-muted-foreground">{collab.status}</p>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6 bg-card border-border">
            <h2 className="text-xl font-bold mb-4">Growth Analytics</h2>
            <div className="space-y-4">
              {[
                { metric: "Follower Growth", value: "+12.4K", period: "This Month", change: "+18%" },
                { metric: "Engagement Rate", value: "94%", period: "Last 30 Days", change: "+8%" },
                { metric: "Content Reach", value: "2.3M", period: "This Week", change: "+25%" },
                { metric: "Collaboration Requests", value: "47", period: "Pending", change: "+12" },
              ].map((stat, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-gradient-card">
                  <div>
                    <p className="text-sm text-muted-foreground">{stat.metric}</p>
                    <p className="text-2xl font-bold">{stat.value}</p>
                    <p className="text-xs text-muted-foreground">{stat.period}</p>
                  </div>
                  <span className="text-sm font-medium text-accent">{stat.change}</span>
                </div>
              ))}
            </div>
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

      {/* Edit Profile Dialog */}
      <Dialog open={showEditDialog} onOpenChange={setShowEditDialog}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Edit Profile</DialogTitle>
            <DialogDescription>
              Update your profile information
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                value={editData.name}
                onChange={(e) => setEditData({ ...editData, name: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="handle">Handle</Label>
              <Input
                id="handle"
                value={editData.handle}
                onChange={(e) => setEditData({ ...editData, handle: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="bio">Bio</Label>
              <Textarea
                id="bio"
                value={editData.bio}
                onChange={(e) => setEditData({ ...editData, bio: e.target.value })}
                rows={4}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="location">Location</Label>
              <Input
                id="location"
                value={editData.location}
                onChange={(e) => setEditData({ ...editData, location: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="website">Website</Label>
              <Input
                id="website"
                value={editData.website}
                onChange={(e) => setEditData({ ...editData, website: e.target.value })}
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowEditDialog(false)}>
              Cancel
            </Button>
            <Button onClick={handleSaveProfile}>
              Save Changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Profile;

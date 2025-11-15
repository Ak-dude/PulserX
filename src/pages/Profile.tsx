import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { Settings, Instagram, Twitter, Youtube, MapPin, Link as LinkIcon, Camera, Mail, Phone, Briefcase, Award } from "lucide-react";

const Profile = () => {
  const { toast } = useToast();
  const [showEditDialog, setShowEditDialog] = useState(false);
  const [profileData, setProfileData] = useState({
    name: "Alexandra Rivera",
    handle: "@alexrivera",
    bio: "Content creator & influencer helping brands connect with audiences. Passionate about tech, lifestyle, and digital marketing. 🚀",
    location: "San Francisco, CA",
    website: "alexrivera.com",
    email: "alex@alexrivera.com",
    phone: "+1 (555) 123-4567",
    profession: "Digital Content Creator",
    specialties: ["Fashion", "Tech", "Lifestyle", "Travel"],
    avatarUrl: "",
  });
  const [editData, setEditData] = useState(profileData);
  const [avatarPreview, setAvatarPreview] = useState("");

  const handleEditProfile = () => {
    setEditData(profileData);
    setShowEditDialog(true);
  };

  const handleSaveProfile = () => {
    setProfileData(editData);
    if (avatarPreview) {
      setProfileData(prev => ({ ...prev, avatarUrl: avatarPreview }));
    }
    toast({
      title: "Profile Updated",
      description: "Your profile has been successfully updated.",
    });
    setShowEditDialog(false);
  };

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatarPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen bg-background pb-20 pt-8 px-4">
      <div className="max-w-6xl mx-auto space-y-6">
        <Card className="p-8 bg-gradient-card border-border shadow-lg relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-shine opacity-50" />
          <div className="relative flex flex-col md:flex-row gap-8 items-start">
            <div className="relative">
              {profileData.avatarUrl ? (
                <img 
                  src={profileData.avatarUrl} 
                  alt={profileData.name}
                  className="w-32 h-32 rounded-full object-cover border-4 border-primary/30 shadow-glow"
                />
              ) : (
                <div className="w-32 h-32 rounded-full bg-gradient-primary flex-shrink-0 shadow-glow flex items-center justify-center text-4xl font-bold">
                  {profileData.name.split(' ').map(n => n[0]).join('')}
                </div>
              )}
              <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-success rounded-full border-4 border-background" />
            </div>
            <div className="flex-1">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-3xl font-bold mb-2 bg-gradient-primary bg-clip-text text-transparent">
                    {profileData.name}
                  </h1>
                  <p className="text-muted-foreground text-lg mb-2">{profileData.handle}</p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <Briefcase className="w-4 h-4" />
                    <span>{profileData.profession}</span>
                  </div>
                </div>
                <Button variant="outline" className="border-primary/30 hover:bg-primary/10 hover:border-primary" onClick={handleEditProfile}>
                  <Settings className="w-4 h-4 mr-2" />
                  Edit Profile
                </Button>
              </div>
              <p className="text-foreground/90 mb-4 leading-relaxed">
                {profileData.bio}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {profileData.specialties.map(specialty => (
                  <Badge key={specialty} variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                    {specialty}
                  </Badge>
                ))}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="w-4 h-4 text-primary" />
                  {profileData.location}
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <LinkIcon className="w-4 h-4 text-primary" />
                  {profileData.website}
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Mail className="w-4 h-4 text-accent" />
                  {profileData.email}
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Phone className="w-4 h-4 text-info" />
                  {profileData.phone}
                </div>
              </div>
            </div>
          </div>
        </Card>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card className="p-6 bg-gradient-card border-primary/20 text-center hover:border-primary/40 transition-all hover:shadow-glow group">
            <div className="text-3xl font-bold mb-1 bg-gradient-primary bg-clip-text text-transparent">1.2K</div>
            <div className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">Connections</div>
          </Card>
          <Card className="p-6 bg-gradient-card border-accent/20 text-center hover:border-accent/40 transition-all hover:shadow-glow-accent group">
            <div className="text-3xl font-bold mb-1 bg-gradient-accent bg-clip-text text-transparent">470K</div>
            <div className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">Total Reach</div>
          </Card>
          <Card className="p-6 bg-gradient-card border-success/20 text-center hover:border-success/40 transition-all group">
            <div className="text-3xl font-bold mb-1 text-success">94%</div>
            <div className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">Engagement</div>
          </Card>
          <Card className="p-6 bg-gradient-card border-info/20 text-center hover:border-info/40 transition-all group">
            <div className="text-3xl font-bold mb-1 text-info">$12.5K</div>
            <div className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">Avg. Campaign</div>
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
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl">Edit Profile</DialogTitle>
            <DialogDescription>Update your profile information and avatar</DialogDescription>
          </DialogHeader>
          <div className="space-y-6 py-4">
            <div className="space-y-4">
              <Label>Profile Picture</Label>
              <div className="flex items-center gap-4">
                {avatarPreview ? (
                  <img src={avatarPreview} alt="Preview" className="w-20 h-20 rounded-full object-cover border-2 border-primary" />
                ) : profileData.avatarUrl ? (
                  <img src={profileData.avatarUrl} alt="Current" className="w-20 h-20 rounded-full object-cover border-2 border-primary" />
                ) : (
                  <div className="w-20 h-20 rounded-full bg-gradient-primary flex items-center justify-center text-2xl font-bold">
                    {editData.name.split(' ').map(n => n[0]).join('')}
                  </div>
                )}
                <div className="flex-1">
                  <label htmlFor="avatar" className="cursor-pointer">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary hover:bg-secondary/80 rounded-md transition-colors">
                      <Camera className="w-4 h-4" />
                      <span className="text-sm">Upload Photo</span>
                    </div>
                    <input
                      id="avatar"
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={handleAvatarChange}
                    />
                  </label>
                  <p className="text-xs text-muted-foreground mt-2">Recommended: Square image, at least 400x400px</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  value={editData.name}
                  onChange={(e) => setEditData({ ...editData, name: e.target.value })}
                  placeholder="Your full name"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="handle">Username</Label>
                <Input
                  id="handle"
                  value={editData.handle}
                  onChange={(e) => setEditData({ ...editData, handle: e.target.value })}
                  placeholder="@username"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="profession">Profession</Label>
              <Input
                id="profession"
                value={editData.profession}
                onChange={(e) => setEditData({ ...editData, profession: e.target.value })}
                placeholder="What do you do?"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="bio">Bio</Label>
              <Textarea
                id="bio"
                value={editData.bio}
                onChange={(e) => setEditData({ ...editData, bio: e.target.value })}
                rows={4}
                placeholder="Tell us about yourself..."
                maxLength={300}
              />
              <p className="text-xs text-muted-foreground text-right">{editData.bio.length}/300</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={editData.email}
                  onChange={(e) => setEditData({ ...editData, email: e.target.value })}
                  placeholder="your@email.com"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={editData.phone}
                  onChange={(e) => setEditData({ ...editData, phone: e.target.value })}
                  placeholder="+1 (555) 123-4567"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Input
                  id="location"
                  value={editData.location}
                  onChange={(e) => setEditData({ ...editData, location: e.target.value })}
                  placeholder="City, Country"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="website">Website</Label>
                <Input
                  id="website"
                  value={editData.website}
                  onChange={(e) => setEditData({ ...editData, website: e.target.value })}
                  placeholder="yourwebsite.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="specialties">Specialties (comma-separated)</Label>
              <Input
                id="specialties"
                value={editData.specialties.join(', ')}
                onChange={(e) => setEditData({ 
                  ...editData, 
                  specialties: e.target.value.split(',').map(s => s.trim()).filter(Boolean)
                })}
                placeholder="Fashion, Tech, Lifestyle"
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => {
              setShowEditDialog(false);
              setAvatarPreview("");
            }}>
              Cancel
            </Button>
            <Button onClick={handleSaveProfile} className="bg-gradient-primary hover:opacity-90">
              <Award className="w-4 h-4 mr-2" />
              Save Changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Profile;

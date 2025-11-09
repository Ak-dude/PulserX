import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Instagram, Twitter, Youtube, Linkedin, Plus } from "lucide-react";

const Connections = () => {
  const connectedAccounts = [
    { icon: Instagram, name: "Instagram", handle: "@yourhandle", followers: "125K", connected: true },
    { icon: Twitter, name: "Twitter", handle: "@yourhandle", followers: "89K", connected: true },
    { icon: Youtube, name: "YouTube", handle: "Your Channel", followers: "256K", connected: true },
  ];

  const availableAccounts = [
    { icon: Linkedin, name: "LinkedIn", connected: false },
  ];

  return (
    <div className="min-h-screen bg-background pb-20 pt-8 px-4">
      <div className="max-w-6xl mx-auto space-y-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">Social Accounts</h1>
          <p className="text-muted-foreground">Manage your connected platforms</p>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Connected Accounts</h2>
          {connectedAccounts.map((account) => (
            <Card key={account.name} className="p-6 bg-card border-border hover:border-primary/50 transition-all">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center">
                    <account.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{account.name}</h3>
                    <p className="text-sm text-muted-foreground">{account.handle}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold">{account.followers}</p>
                  <p className="text-sm text-muted-foreground">followers</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Add More Platforms</h2>
          {availableAccounts.map((account) => (
            <Card key={account.name} className="p-6 bg-card border-border border-dashed hover:border-primary/50 transition-all">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
                    <account.icon className="w-6 h-6 text-muted-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{account.name}</h3>
                    <p className="text-sm text-muted-foreground">Not connected</p>
                  </div>
                </div>
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Plus className="w-4 h-4 mr-2" />
                  Connect
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Connections;

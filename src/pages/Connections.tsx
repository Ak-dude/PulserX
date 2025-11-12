import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Instagram, Twitter, Youtube, Linkedin, Plus, Unplug } from "lucide-react";

const Connections = () => {
  const { toast } = useToast();
  const [showConnectDialog, setShowConnectDialog] = useState(false);
  const [selectedPlatform, setSelectedPlatform] = useState<any>(null);
  const [username, setUsername] = useState("");

  const initialConnected = [
    { icon: Instagram, name: "Instagram", handle: "@yourhandle", followers: "125K", connected: true },
    { icon: Twitter, name: "Twitter", handle: "@yourhandle", followers: "89K", connected: true },
    { icon: Youtube, name: "YouTube", handle: "Your Channel", followers: "256K", connected: true },
  ];

  const initialAvailable = [
    { icon: Linkedin, name: "LinkedIn", connected: false },
  ];

  const [connectedAccounts, setConnectedAccounts] = useState(initialConnected);
  const [availableAccounts, setAvailableAccounts] = useState(initialAvailable);

  const handleConnect = (account: any) => {
    setSelectedPlatform(account);
    setShowConnectDialog(true);
  };

  const handleConfirmConnect = () => {
    if (username.trim()) {
      const newAccount = {
        ...selectedPlatform,
        handle: `@${username}`,
        followers: "0",
        connected: true,
      };
      setConnectedAccounts([...connectedAccounts, newAccount]);
      setAvailableAccounts(availableAccounts.filter(a => a.name !== selectedPlatform.name));
      toast({
        title: "Account Connected!",
        description: `${selectedPlatform.name} account successfully linked.`,
      });
      setShowConnectDialog(false);
      setUsername("");
    }
  };

  const handleDisconnect = (accountName: string) => {
    const account = connectedAccounts.find(a => a.name === accountName);
    if (account) {
      setConnectedAccounts(connectedAccounts.filter(a => a.name !== accountName));
      setAvailableAccounts([...availableAccounts, { icon: account.icon, name: account.name, connected: false }]);
      toast({
        title: "Account Disconnected",
        description: `${accountName} has been disconnected.`,
        variant: "destructive",
      });
    }
  };

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
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <p className="font-semibold">{account.followers}</p>
                    <p className="text-sm text-muted-foreground">followers</p>
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => handleDisconnect(account.name)}
                  >
                    <Unplug className="w-4 h-4 mr-2" />
                    Disconnect
                  </Button>
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
                <Button 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                  onClick={() => handleConnect(account)}
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Connect
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Connect Dialog */}
      <Dialog open={showConnectDialog} onOpenChange={setShowConnectDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Connect {selectedPlatform?.name}</DialogTitle>
            <DialogDescription>
              Enter your {selectedPlatform?.name} username to link your account
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                placeholder={`Your ${selectedPlatform?.name} username`}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowConnectDialog(false)}>
              Cancel
            </Button>
            <Button onClick={handleConfirmConnect}>
              Connect Account
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Connections;

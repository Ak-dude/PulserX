import { Home, Users, MessageSquare, Bell, User } from "lucide-react";
import { NavLink } from "./NavLink";

const BottomNav = () => {
  const navItems = [
    { icon: Home, label: "Home", path: "/dashboard" },
    { icon: Users, label: "Connect", path: "/connections" },
    { icon: MessageSquare, label: "Messages", path: "/messages" },
    { icon: Bell, label: "Alerts", path: "/notifications" },
    { icon: User, label: "Profile", path: "/profile" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-around h-16">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className="flex flex-col items-center gap-1 text-muted-foreground hover:text-foreground transition-colors py-2 px-3"
              activeClassName="text-primary"
            >
              <item.icon className="w-5 h-5" />
              <span className="text-xs font-medium">{item.label}</span>
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default BottomNav;

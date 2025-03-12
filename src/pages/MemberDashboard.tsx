
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
  Home, Library, Video, Users, Briefcase, ShoppingBag, 
  HelpCircle, Settings, LogOut, ChevronLeft, ChevronRight,
  Crown
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const MemberDashboard = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  
  const mainMenuItems = [
    { icon: Home, label: "Portal", path: "/member-dashboard" },
    { icon: Library, label: "Library", path: "/library" },
    { icon: Video, label: "Live!", path: "/live" },
    { icon: Users, label: "Chapters", path: "/chapters" },
    { icon: Briefcase, label: "Job Connect", path: "/job-connect" },
    { icon: ShoppingBag, label: "Shop Discount", path: "/shop-discount" },
  ];
  
  const bottomMenuItems = [
    { icon: HelpCircle, label: "Support", path: "/support" },
    { icon: Settings, label: "Settings", path: "/settings" },
    { icon: LogOut, label: "Logout", path: "/" },
  ];

  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar */}
      <div className={`${collapsed ? 'w-16' : 'w-60'} bg-muted flex flex-col justify-between border-r transition-all duration-300 ease-in-out`}>
        <div>
          {/* Logo and collapse button */}
          <div className="p-4 flex items-center justify-between border-b">
            {!collapsed && (
              <div className="flex items-center">
                <img 
                  src="/lovable-uploads/c42e68cb-a477-4c4c-9250-d8d15547b973.png" 
                  alt="IEJL Logo" 
                  className="h-8 w-auto"
                />
              </div>
            )}
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setCollapsed(!collapsed)}
              className="ml-auto"
            >
              {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
            </Button>
          </div>

          {/* Main menu items */}
          <div className="pt-4">
            {mainMenuItems.map((item, index) => (
              <Button
                key={index}
                variant={index === 0 ? "secondary" : "ghost"}
                className={`w-full justify-start rounded-none h-12 px-4 ${collapsed ? 'justify-center' : ''}`}
                onClick={() => navigate(item.path)}
              >
                <item.icon className={`w-5 h-5 ${collapsed ? '' : 'mr-3'}`} />
                {!collapsed && <span>{item.label}</span>}
              </Button>
            ))}
          </div>
        </div>

        {/* Bottom menu items */}
        <div className="border-t">
          {bottomMenuItems.map((item, index) => (
            <Button
              key={index}
              variant="ghost"
              className={`w-full justify-start rounded-none h-12 px-4 ${collapsed ? 'justify-center' : ''}`}
              onClick={() => navigate(item.path)}
            >
              <item.icon className={`w-5 h-5 ${collapsed ? '' : 'mr-3'}`} />
              {!collapsed && <span>{item.label}</span>}
            </Button>
          ))}
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 p-6">
        <div className="flex items-center mb-8">
          <div className="relative mr-3">
            <Avatar className="h-14 w-14">
              <AvatarImage src="/placeholder.svg" alt="User" />
              <AvatarFallback>M</AvatarFallback>
            </Avatar>
            <div className="absolute -top-2 -right-2 bg-amber-400 rounded-full p-1">
              <Crown className="h-4 w-4 text-white" />
            </div>
          </div>
          <h1 className="text-2xl font-bold">Hi, Minion</h1>
        </div>

        {/* Dashboard cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <Card>
            <CardContent className="p-4">
              <h3 className="font-medium mb-2">POINTS</h3>
              <p className="text-2xl font-bold">0</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="font-medium mb-2">Job Connect Profile</h3>
              <p className="text-muted-foreground">Not set up yet</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="font-medium mb-2">Last Time Activity</h3>
              <p className="text-muted-foreground">No recent activity</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <CardContent className="p-4">
              <h3 className="font-medium mb-2">Newest/Upcoming Chapters Event / Library</h3>
              <p className="text-muted-foreground">No upcoming events</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="font-medium mb-2">Learning curve</h3>
              <p className="text-muted-foreground">Start your learning journey</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default MemberDashboard;

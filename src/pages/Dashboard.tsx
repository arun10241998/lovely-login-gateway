
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  
  const handleLogout = () => {
    toast({
      title: "Logged out",
      description: "You have been successfully logged out.",
    });
    navigate("/");
  };
  
  return (
    <div className="min-h-screen p-8 bg-gradient-to-br from-background to-muted">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/c42e68cb-a477-4c4c-9250-d8d15547b973.png" 
              alt="IEJL Logo" 
              className="h-12 w-auto mr-4"
            />
            <h1 className="text-3xl font-bold">Dashboard</h1>
          </div>
          <Button onClick={handleLogout}>Logout</Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Welcome to IEJL</CardTitle>
              <CardDescription>Your dashboard is ready</CardDescription>
            </CardHeader>
            <CardContent>
              <p>This is a placeholder dashboard. In a real application, your dashboard content would appear here.</p>
            </CardContent>
          </Card>
          
          {/* Additional cards would go here in a real application */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

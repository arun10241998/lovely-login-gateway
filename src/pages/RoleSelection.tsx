
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { UserPlus, Building2, Briefcase } from "lucide-react";

const RoleSelection = () => {
  const navigate = useNavigate();

  const handleRoleSelection = (role: string) => {
    // In a real app, this would save the role to the user's profile
    console.log(`Selected role: ${role}`);
    
    // For now, all roles navigate to the member dashboard
    navigate("/member-dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted p-4">
      <div className="w-full max-w-md">
        <div className="flex flex-col items-center mb-8">
          <img 
            src="/lovable-uploads/c42e68cb-a477-4c4c-9250-d8d15547b973.png" 
            alt="IEJL Logo" 
            className="h-28 w-auto mb-2"
          />
          <h1 className="text-2xl font-bold text-center mt-4">Choose Your Role</h1>
          <p className="text-center text-muted-foreground mt-2">
            Select your role to access the appropriate dashboard
          </p>
        </div>
        
        <Card className="w-full mb-4">
          <CardContent className="p-4">
            <Button 
              variant="outline" 
              className="w-full h-14 justify-start text-lg mb-3"
              onClick={() => handleRoleSelection("member")}
            >
              <UserPlus className="mr-3 h-5 w-5" />
              Become a Member/Pledge
            </Button>
            
            <Button 
              variant="outline" 
              className="w-full h-14 justify-start text-lg mb-3"
              onClick={() => handleRoleSelection("merchant")}
            >
              <Building2 className="mr-3 h-5 w-5" />
              Become a Merchant
            </Button>
            
            <Button 
              variant="outline" 
              className="w-full h-14 justify-start text-lg"
              onClick={() => handleRoleSelection("employer")}
            >
              <Briefcase className="mr-3 h-5 w-5" />
              Become an Employer
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default RoleSelection;

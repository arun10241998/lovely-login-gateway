
import LoginForm from "@/components/LoginForm";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted p-4">
      <div className="w-full max-w-md">
        <div className="flex flex-col items-center mb-8">
          <img 
            src="/lovable-uploads/c42e68cb-a477-4c4c-9250-d8d15547b973.png" 
            alt="IEJL Logo" 
            className="h-28 w-auto mb-2"
          />
        </div>
        
        <Card className="w-full">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold text-center">Welcome back</CardTitle>
            <CardDescription className="text-center">Enter your credentials to access your account</CardDescription>
          </CardHeader>
          <CardContent>
            <LoginForm />
          </CardContent>
        </Card>
        
        <p className="text-center text-sm text-muted-foreground mt-4">
          By continuing, you agree to IEJL's Terms of Service and Privacy Policy.
        </p>
      </div>
    </div>
  );
};

export default Index;

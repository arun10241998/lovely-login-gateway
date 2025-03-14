
import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";
import { Github, Mail, Linkedin } from "lucide-react";
import { useNavigate } from "react-router-dom";

const formSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters" }),
});

type FormValues = z.infer<typeof formSchema>;

const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsLoading(true);
    
    try {
      // For now, we're just showing a toast notification
      // In a real app, this would connect to an auth service
      console.log("Login attempt with:", data);
      
      toast({
        title: "Login Attempt",
        description: `Attempted login with email: ${data.email}`,
      });
      
      // Reset form after submission
      form.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSocialLogin = (provider: string) => {
    setIsLoading(true);
    
    try {
      // For now, just show a toast notification
      console.log(`Login with ${provider}`);
      
      toast({
        title: "Social Login",
        description: `Attempted login with ${provider}`,
      });
    } catch (error) {
      toast({
        title: "Error",
        description: `Failed to login with ${provider}`,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-6 w-full max-w-md">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="your.email@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="••••••••" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? "Logging in..." : "Log in"}
          </Button>
        </form>
      </Form>
      
      <div className="flex items-center">
        <Separator className="flex-1" />
        <span className="mx-4 text-sm text-muted-foreground">or continue with</span>
        <Separator className="flex-1" />
      </div>
      
      <div className="flex gap-2">
        <Button 
          variant="outline" 
          className="flex-1"
          onClick={() => handleSocialLogin("Google")}
          disabled={isLoading}
        >
          <Mail className="mr-2 h-4 w-4" />
          Google
        </Button>
        
        <Button 
          variant="outline" 
          className="flex-1"
          onClick={() => handleSocialLogin("GitHub")}
          disabled={isLoading}
        >
          <Github className="mr-2 h-4 w-4" />
          GitHub
        </Button>
        
        <Button 
          variant="outline" 
          className="flex-1"
          onClick={() => handleSocialLogin("LinkedIn")}
          disabled={isLoading}
        >
          <Linkedin className="mr-2 h-4 w-4" />
          LinkedIn
        </Button>
      </div>
      
      <div className="text-center">
        <span className="text-sm text-muted-foreground">
          Don't have an account?{" "}
          <Button variant="link" className="p-0 h-auto" onClick={() => navigate('/signup')}>
            Sign up
          </Button>
        </span>
      </div>
    </div>
  );
};

export default LoginForm;

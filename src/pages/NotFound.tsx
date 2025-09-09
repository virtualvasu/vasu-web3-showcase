import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center space-y-8 max-w-md mx-auto px-4">
        {/* 404 Visual */}
        <div className="relative">
          <div className="text-8xl md:text-9xl font-bold text-gradient opacity-80">
            404
          </div>
          <div className="absolute inset-0 text-8xl md:text-9xl font-bold text-primary/20 translate-x-1 translate-y-1">
            404
          </div>
        </div>

        {/* Error Message */}
        <div className="space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground">
            Page Not Found
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            The page you're looking for doesn't exist or has been moved to another location.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            className="web3-button flex items-center"
            onClick={() => window.location.href = '/'}
          >
            <Home size={16} className="mr-2" />
            Go to Homepage
          </Button>
          <Button 
            variant="outline" 
            className="hover:border-primary hover:text-primary glow-on-hover flex items-center"
            onClick={() => window.history.back()}
          >
            <ArrowLeft size={16} className="mr-2" />
            Go Back
          </Button>
        </div>

        {/* Fun Web3 Message */}
        <div className="pt-8 border-t border-border/50">
          <p className="text-sm text-muted-foreground">
            Looks like this page got lost in the blockchain! 🔗
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
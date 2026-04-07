import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";

const NotFound = () => {
  useSEO({
    title: "Page Not Found",
    description: "The page you are looking for does not exist. Return to Gissat Eco Solutions homepage.",
  });

  const location = useLocation();
  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center px-4">
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <p className="text-xl text-muted-foreground mb-6">Page not found</p>
        <Button asChild>
          <a href="/">
            <Home className="w-4 h-4 mr-2" />
            Return Home
          </a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;

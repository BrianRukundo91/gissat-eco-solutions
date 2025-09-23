import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Award, Users, Globe } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KPGcgZmlsbD0iIzA0Nzg1NyIgZmlsbC1vcGFjaXR5PSIwLjAzIj4KPGNpcmNsZSBjeD0iNyIgY3k9IjciIHI9IjciLz4KPC9nPgo8L2c+Cjwvc3ZnPg==')] opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center">
          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            <span className="block">Practical Environmental</span>
            <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Solutions for Sustainable
            </span>
            <span className="block">Development</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Gissat is Uganda's leading environmental consultancy, providing comprehensive 
            environmental solutions since 1991. We help organizations achieve sustainable 
            development through expert environmental management and compliance services.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button size="lg" className="min-w-[200px]">
              Learn More About Us
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button variant="outline" size="lg" className="min-w-[200px]">
              View Our Projects
            </Button>
          </div>

          {/* Quick stats/highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-3 bg-primary/10 rounded-full flex items-center justify-center">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <p className="text-2xl font-bold text-primary">30+</p>
              <p className="text-sm text-muted-foreground">Years Experience</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-3 bg-accent/10 rounded-full flex items-center justify-center">
                <Users className="w-6 h-6 text-accent" />
              </div>
              <p className="text-2xl font-bold text-accent">500+</p>
              <p className="text-sm text-muted-foreground">Projects Completed</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-3 bg-primary/10 rounded-full flex items-center justify-center">
                <Globe className="w-6 h-6 text-primary" />
              </div>
              <p className="text-2xl font-bold text-primary">6</p>
              <p className="text-sm text-muted-foreground">Key Sectors</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-3 bg-accent/10 rounded-full flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-accent" />
              </div>
              <p className="text-2xl font-bold text-accent">100%</p>
              <p className="text-sm text-muted-foreground">Compliance Rate</p>
            </div>
          </div>

          {/* Quick links */}
          <div className="text-center">
            <p className="text-sm font-medium text-muted-foreground mb-4">
              Explore our expertise:
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              <Button variant="secondary" size="sm" className="rounded-full">Mining & Minerals</Button>
              <Button variant="secondary" size="sm" className="rounded-full">Infrastructure</Button>
              <Button variant="secondary" size="sm" className="rounded-full">Oil & Gas</Button>
              <Button variant="secondary" size="sm" className="rounded-full">Environmental Audits</Button>
              <Button variant="secondary" size="sm" className="rounded-full">Impact Assessment</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
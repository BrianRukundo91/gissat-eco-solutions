import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mountain, Building, Fuel, Factory, Home, Zap } from "lucide-react";

const Sectors = () => {
  const sectors = [
    {
      icon: Mountain,
      title: "Mining and Minerals",
      description: "Environmental impact assessments, compliance monitoring, and sustainable mining practices for Uganda's growing extractive industry.",
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      icon: Building,
      title: "Infrastructure",
      description: "Environmental planning and management for roads, bridges, railways, and urban development projects across East Africa.",
      color: "text-accent",
      bgColor: "bg-accent/10"
    },
    {
      icon: Fuel,
      title: "Oil and Gas",
      description: "Specialized environmental services for petroleum exploration, production, and pipeline development in the Albertine region.",
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      icon: Factory,
      title: "Industry",
      description: "Manufacturing and industrial facility environmental compliance, waste management, and pollution control solutions.",
      color: "text-accent",
      bgColor: "bg-accent/10"
    },
    {
      icon: Home,
      title: "The Built Environment",
      description: "Green building certification, urban planning environmental assessments, and sustainable construction practices.",
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      icon: Zap,
      title: "Power and Energy",
      description: "Environmental services for renewable energy projects, power generation facilities, and transmission infrastructure.",
      color: "text-accent",
      bgColor: "bg-accent/10"
    }
  ];

  return (
    <section id="sectors" className="py-12 sm:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">
            Sectors We Serve
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
            With over 30 years of experience, we provide specialized environmental 
            solutions across Uganda's key economic sectors, ensuring sustainable 
            development and regulatory compliance.
          </p>
        </div>

        {/* Sectors grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {sectors.map((sector, index) => {
            const IconComponent = sector.icon;
            return (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/20">
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 mx-auto mb-4 ${sector.bgColor} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`w-8 h-8 ${sector.color}`} />
                  </div>
                  <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                    {sector.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-muted-foreground text-center leading-relaxed">
                    {sector.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Don't see your sector listed? We work across all industries requiring environmental expertise.
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors duration-200"
          >
            Contact us to discuss your specific needs
          </a>
        </div>
      </div>
    </section>
  );
};

export default Sectors;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Calendar, CheckCircle, ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Latitude 0 Degrees, Kampala",
      location: "Kampala, Uganda",
      year: "2023",
      category: "Commercial Development",
      description: "Comprehensive environmental impact assessment and management plan for a major commercial development project in Kampala's central business district.",
      outcome: "Successfully obtained environmental certificate with zero non-compliance issues. Project achieved 30% reduction in projected environmental impact through our mitigation strategies.",
      image: "/api/placeholder/400/300",
      services: ["EIA", "Environmental Permits", "Compliance Monitoring"],
      status: "Completed"
    },
    {
      title: "Broiler Breeder Poultry Farm",
      location: "Wakiso District, Uganda",
      year: "2022",
      category: "Agricultural Development",
      description: "Environmental assessment and sustainable farming practices implementation for a large-scale poultry operation focusing on waste management and biosafety.",
      outcome: "Established industry-leading waste management system resulting in 95% waste recycling rate and compliance with all environmental standards.",
      image: "/api/placeholder/400/300",
      services: ["Waste Management", "Environmental Audits", "EMS Implementation"],
      status: "Completed"
    },
    {
      title: "Vocational Development Center",
      location: "Mukono District, Uganda",
      year: "2023",
      category: "Educational Infrastructure",
      description: "Environmental planning and green building consultation for a sustainable vocational training facility incorporating renewable energy and water conservation.",
      outcome: "Achieved LEED Silver equivalent certification with 40% energy savings and implemented innovative rainwater harvesting system serving 500+ students.",
      image: "/api/placeholder/400/300",
      services: ["Green Building Certification", "Sustainability Planning", "Resource Management"],
      status: "Ongoing"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Showcasing our commitment to environmental excellence through successful 
            project implementations across Uganda's diverse sectors.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
              {/* Project image placeholder */}
              <div className="h-48 bg-gradient-to-br from-primary/10 to-accent/10 relative overflow-hidden">
                <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors duration-300"></div>
                <div className="absolute bottom-4 left-4">
                  <Badge variant="secondary" className="bg-background/90">
                    {project.category}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge 
                    variant={project.status === "Completed" ? "default" : "secondary"}
                    className={project.status === "Completed" ? "bg-green-600 hover:bg-green-700" : ""}
                  >
                    {project.status}
                  </Badge>
                </div>
              </div>

              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300 line-clamp-2">
                      {project.title}
                    </CardTitle>
                    <div className="flex items-center space-x-4 mt-2 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4" />
                        <span>{project.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{project.year}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {project.description}
                </CardDescription>

                {/* Services provided */}
                <div>
                  <p className="text-sm font-medium text-foreground mb-2">Services Provided:</p>
                  <div className="flex flex-wrap gap-1">
                    {project.services.map((service, serviceIndex) => (
                      <Badge key={serviceIndex} variant="outline" className="text-xs">
                        {service}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Outcome */}
                <div className="bg-secondary/50 rounded-lg p-4">
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-foreground mb-1">Project Outcome</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {project.outcome}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* More projects CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Explore More Success Stories
            </h3>
            <p className="text-muted-foreground mb-6">
              These represent just a fraction of our 500+ completed projects. 
              Contact us to learn how we can help your organization achieve its environmental goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="default">
                View All Projects
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
              <Button variant="outline">
                Request Case Study
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
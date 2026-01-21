import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { MapPin, Calendar, CheckCircle, ExternalLink, ChevronRight } from "lucide-react";

// Project images
import VocationalCenterImage from "@/assets/projects/vocational_dev_center.jpeg";
import AnderitaBeachImage from "@/assets/projects/anderita_beach.jpg";
import OnomoHotelImage from "@/assets/projects/onomo_hotel.jpg";
import LatitudeHotelImage from "@/assets/projects/latitude_hotel.jpeg";

interface Project {
  title: string;
  location: string;
  year: string;
  category: string;
  description: string;
  detailedDescription?: string[];
  auditObjectives?: string[];
  outcome: string;
  image?: string;
  services: string[];
  status: string;
}

const Projects = () => {
  const projects: Project[] = [
    {
      title: "Environmental Compliance Audit for Anderita Beach Hotel and Ancillary Facilities",
      location: "Plot 05, Nambi Road, Manyango 'II' Village, Entebbe Municipality, Wakiso District",
      year: "2023",
      category: "Hospitality",
      description: "Comprehensive environmental audit for a beach resort facility to review operations, practices and infrastructure against the national regulatory framework.",
      detailedDescription: [
        "Anderita Beach Hotel Limited (ABHL) is a registered company with operations in the leisure and hospitality sector. They own and operate a beach resort facility. The facility is located on plot 5 in Manyango II within Entebbe Municipality. The resort's location offers a unique blend of proximity to the city and scenic lake views. This is a main attraction for potential patrons.",
        "The objectives of the project among others included: To develop and diversify the tourism products and services; To develop tourism infrastructure and facilities; To promote and market the destination in national, regional and international markets; and To promote community involvement and enterprise development in the tourism economy.",
        "Gissat was contracted to conduct an Environmental Audit to comprehensively review ABHL's operations, practices and infrastructure against the national regulatory framework, conditions in approval permits and best hotel management practices.",
        "The Audit was carried out to also assess the impact of the Hotel's activities on the adjacent Lake Victoria. The operation of ABHL is subject to the provision of the National Environmental Act 2019.",
        "Gissat was contracted to carry out an audit in order to meet all the required regulations. This task required reviewing previous audit reports, facility inspections as well as stakeholder consultations. This helped to understand the project components and ongoing activities at the resort."
      ],
      auditObjectives: [
        "Air and Noise pollution",
        "Water pollution Control",
        "Occupational Health and Safety",
        "Wastewater management"
      ],
      outcome: "Comprehensive review of operations against regulatory framework, assessment of Lake Victoria impact, and recommendations for environmental compliance.",
      image: AnderitaBeachImage,
      services: ["Environmental Compliance Audit", "Regulatory Review", "Impact Assessment"],
      status: "Completed"
    },
    {
      title: "Onomo Hotel Kampala",
      location: "Akii Bua Road, Nakasero, Kampala",
      year: "2023",
      category: "Hospitality",
      description: "Environmental and Social Impact Assessment for the Development of Onomo Kampala Hotel – part of the Onomo Hotel Chain with hotels in Western and Eastern African region.",
      detailedDescription: [
        "An Environmental Impact Assessment was conducted for the Onomo Kampala Hotel – part of the Onomo Hotel Chain with hotels in Western and Eastern African region.",
        "The assessment included extensive public consultation and involvement processes and numerous detailed specialist investigations.",
        "Positive Record of Decision was issued for the facility by the National Environment Management Authority (NEMA)."
      ],
      outcome: "Positive Record of Decision issued by NEMA following comprehensive ESIA with extensive public consultation.",
      image: OnomoHotelImage,
      services: ["ESIA", "Public Consultation", "Specialist Investigations"],
      status: "Completed"
    },
    {
      title: "Latitude 0 Degrees, Kampala",
      location: "Kampala, Uganda",
      year: "2023",
      category: "Commercial Development",
      description: "Comprehensive environmental impact assessment and management plan for a major commercial development project in Kampala's central business district.",
      outcome: "Successfully obtained environmental certificate with zero non-compliance issues. Project achieved 30% reduction in projected environmental impact through our mitigation strategies.",
      image: LatitudeHotelImage,
      services: ["EIA", "Environmental Permits", "Compliance Monitoring"],
      status: "Completed"
    },
    {
      title: "Environmental Compliance Audit for the Vocational Development Centre",
      location: "Kitebulura 'B' Cell, Fort Portal City, Kabarole District",
      year: "2023",
      category: "Educational Infrastructure",
      description: "Environmental compliance audit conducted for Youth Encouragement Services (YES) to assess mitigation and monitoring measures at their vocational training facility.",
      detailedDescription: [
        "The Youth Encouragement Services (YES) is a registered Community-Based Organization (CBO) that provides vocational education and practical skilling to the youths of Kabarole and surrounding districts in South Western Uganda. YES has a broad experience in equipping youths with skills ranging from pottery, mechanical engineering, hairdressing, cookery, welding and carpentry.",
        "Gissat was contracted by Youth Encouragement Services (YES) to conduct an Environmental Compliance audit; this was to assess whether the mitigation and monitoring measures recommended in the school's ESMP were achieving their intended objectives and to make recommendations for the way forward.",
        "The audit criteria complied with the policies, laws, guidelines, policies, standards and permitting requirements and/or approval conditions relevant to the Vocational development Centre's operations.",
        "The study was carried out with the use of proper measurements, interviews and observations during the audit of Vocational Development Centre to ensure that the facility's operations are in line with relevant regulations. Findings and recommendations were made regarding the facility.",
        "The environmental audit was conducted according to systematic procedures and focused on verifying if the mitigation and monitoring measures specified in the ESMP conform to the ongoing and planned arrangements."
      ],
      auditObjectives: [
        "Reporting the level of compliance with the conditions of the environmental authorisation",
        "Reporting the extent to which the avoidance, management and mitigation measures provided in the Environment and Social Management Plan achieve the objectives and outcomes",
        "Identifying and assessing any new impacts and risks as a result of undertaking the activity"
      ],
      outcome: "Comprehensive compliance review with recommendations for ongoing environmental management.",
      image: VocationalCenterImage,
      services: ["Environmental Compliance Audit", "ESMP Assessment", "Regulatory Compliance Review"],
      status: "Completed"
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
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
              {/* Project image */}
              <div className="h-48 bg-gradient-to-br from-primary/10 to-accent/10 relative overflow-hidden">
                {project.image ? (
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors duration-300"></div>
                )}
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
                        <span className="line-clamp-1">{project.location}</span>
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

                {/* Read More for detailed description */}
                {project.detailedDescription && (
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="link" className="p-0 h-auto text-primary hover:text-primary/80">
                        Read More
                        <ChevronRight className="w-4 h-4 ml-1" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
                      <DialogHeader>
                        <div className="flex items-start gap-4 mb-4">
                          {project.image && (
                            <img 
                              src={project.image} 
                              alt={project.title}
                              className="w-32 h-24 rounded-lg object-cover"
                            />
                          )}
                          <div className="flex-1">
                            <DialogTitle className="text-xl leading-tight">{project.title}</DialogTitle>
                            <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
                              <MapPin className="w-4 h-4" />
                              <span>{project.location}</span>
                            </div>
                          </div>
                        </div>
                      </DialogHeader>
                      
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">Project Details</h4>
                          {project.detailedDescription.map((paragraph, idx) => (
                            <p key={idx} className="text-muted-foreground leading-relaxed mb-3">
                              {paragraph}
                            </p>
                          ))}
                        </div>

                        {project.auditObjectives && (
                          <div>
                            <h4 className="font-semibold text-foreground mb-2">
                              {project.title.includes("Anderita") ? "Areas of Emphasis During Audit" : "Audit Objectives"}
                            </h4>
                            <ul className="list-disc list-inside text-muted-foreground space-y-1">
                              {project.auditObjectives.map((objective, idx) => (
                                <li key={idx}>{objective}</li>
                              ))}
                            </ul>
                          </div>
                        )}

                        <div>
                          <h4 className="font-semibold text-foreground mb-2">Services Provided</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.services.map((service, serviceIndex) => (
                              <Badge key={serviceIndex} variant="outline">
                                {service}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                )}

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
                      <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
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
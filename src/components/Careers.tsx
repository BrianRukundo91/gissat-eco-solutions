import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Users, GraduationCap, ArrowRight, Heart } from "lucide-react";

const Careers = () => {
  const jobOpenings = [
    {
      title: "Senior Environmental Consultant",
      department: "Environmental Services",
      type: "Full-time",
      location: "Kampala, Uganda",
      experience: "5+ years",
      description: "Lead environmental impact assessments and manage client relationships for major infrastructure and industrial projects across East Africa.",
      requirements: [
        "Master's degree in Environmental Science or related field",
        "Minimum 5 years experience in environmental consulting",
        "Professional certification in environmental auditing",
        "Strong project management and client communication skills"
      ],
      benefits: ["Competitive salary", "Health insurance", "Professional development", "Flexible working"]
    },
    {
      title: "GIS Analyst & Spatial Planning Specialist",
      department: "Technical Services",
      type: "Full-time",
      location: "Kampala, Uganda",
      experience: "3+ years",
      description: "Provide GIS analysis and spatial planning support for environmental assessments and sustainable development projects.",
      requirements: [
        "Bachelor's degree in GIS, Geography, or related field",
        "Proficiency in ArcGIS, QGIS, and remote sensing software",
        "Experience with environmental and land use planning",
        "Strong analytical and data visualization skills"
      ],
      benefits: ["Competitive salary", "Training opportunities", "Health insurance", "Transport allowance"]
    },
    {
      title: "Environmental Compliance Officer",
      department: "Compliance & Monitoring",
      type: "Full-time",
      location: "Kampala, Uganda",
      experience: "2+ years",
      description: "Monitor and ensure client compliance with environmental regulations and standards. Conduct site inspections and prepare compliance reports.",
      requirements: [
        "Bachelor's degree in Environmental Science or Law",
        "Knowledge of Uganda's environmental regulations",
        "Field work experience and ability to travel",
        "Excellent report writing and communication skills"
      ],
      benefits: ["Professional growth", "Field allowances", "Health insurance", "Performance bonuses"]
    }
  ];

  const companyBenefits = [
    {
      icon: Heart,
      title: "Work-Life Balance",
      description: "Flexible working arrangements and generous leave policies to ensure you maintain a healthy work-life balance."
    },
    {
      icon: GraduationCap,
      title: "Professional Development",
      description: "Continuous learning opportunities, conference attendance, and support for professional certifications."
    },
    {
      icon: Users,
      title: "Collaborative Environment",
      description: "Work alongside experienced professionals in a supportive team environment that values innovation and expertise."
    }
  ];

  return (
    <section id="careers" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Join Our Team
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Build your career with Uganda's leading environmental consultancy. 
            We're looking for passionate professionals who share our commitment 
            to environmental excellence and sustainable development.
          </p>
        </div>

        {/* Company culture and benefits */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">
            Why Work at Gissat?
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {companyBenefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl font-semibold text-foreground">
                      {benefit.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Current job openings */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">
            Current Opportunities
          </h3>
          <div className="space-y-6">
            {jobOpenings.map((job, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between space-y-4 md:space-y-0">
                    <div className="flex-1">
                      <CardTitle className="text-xl font-semibold text-foreground mb-2">
                        {job.title}
                      </CardTitle>
                      <CardDescription className="text-muted-foreground mb-4">
                        {job.description}
                      </CardDescription>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-4 h-4" />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{job.type}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <GraduationCap className="w-4 h-4" />
                          <span>{job.experience}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col space-y-2">
                      <Badge variant="secondary">{job.department}</Badge>
                      <Button className="w-full md:w-auto">
                        Apply Now
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Requirements */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Key Requirements:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {job.requirements.map((requirement, reqIndex) => (
                        <li key={reqIndex} className="flex items-start space-x-2">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0 mt-2"></span>
                          <span>{requirement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Benefits */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Benefits:</h4>
                    <div className="flex flex-wrap gap-2">
                      {job.benefits.map((benefit, benefitIndex) => (
                        <Badge key={benefitIndex} variant="outline" className="text-xs">
                          {benefit}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Application call-to-action */}
        <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Don't See the Right Position?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            We're always looking for talented individuals to join our team. 
            Send us your CV and tell us how you'd like to contribute to Uganda's 
            environmental sustainability efforts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">
              Submit General Application
            </Button>
            <Button variant="outline" size="lg">
              View Company Culture
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Careers;
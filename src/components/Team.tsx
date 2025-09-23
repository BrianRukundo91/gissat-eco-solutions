import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Linkedin, Mail, GraduationCap, Users2 } from "lucide-react";

const Team = () => {
  const teamMembers = [
    {
      name: "Dr. Sarah Nakawuka",
      role: "Managing Director & Lead Environmental Consultant",
      bio: "With over 25 years of experience, Dr. Nakawuka leads Gissat's strategic direction and major project implementations. She holds a PhD in Environmental Science and is a certified environmental auditor.",
      specialties: ["Environmental Impact Assessment", "Strategic Planning", "Regulatory Compliance"],
      education: "PhD Environmental Science, MSc Environmental Management",
      image: "/api/placeholder/200/200"
    },
    {
      name: "James Okello",
      role: "Senior Environmental Engineer",
      bio: "James specializes in air quality assessments and industrial environmental management. His technical expertise has been instrumental in over 200 successful project completions.",
      specialties: ["Air Quality Monitoring", "Industrial Compliance", "Environmental Auditing"],
      education: "MEng Environmental Engineering, BSc Chemical Engineering",
      image: "/api/placeholder/200/200"
    },
    {
      name: "Grace Atuhaire",
      role: "Sustainability Consultant",
      bio: "Grace focuses on corporate sustainability strategies and ESG reporting. She has helped numerous organizations achieve their sustainability goals and improve stakeholder engagement.",
      specialties: ["ESG Reporting", "Sustainability Strategy", "Stakeholder Engagement"],
      education: "MSc Sustainable Development, BSc Environmental Science",
      image: "/api/placeholder/200/200"
    },
    {
      name: "Michael Wasswa",
      role: "Environmental Compliance Specialist",
      bio: "Michael ensures our clients maintain full regulatory compliance. His deep understanding of Uganda's environmental legislation makes him invaluable for permitting and licensing projects.",
      specialties: ["Environmental Permitting", "Compliance Monitoring", "Legal Advisory"],
      education: "LLM Environmental Law, BSc Environmental Science",
      image: "/api/placeholder/200/200"
    },
    {
      name: "Rebecca Nalwanga",
      role: "Project Coordinator & GIS Specialist",
      bio: "Rebecca coordinates complex multi-disciplinary projects and provides GIS analysis for environmental assessments. Her organizational skills ensure projects are delivered on time and within budget.",
      specialties: ["Project Management", "GIS Analysis", "Spatial Planning"],
      education: "MSc GIS & Remote Sensing, BSc Geography",
      image: "/api/placeholder/200/200"
    },
    {
      name: "David Kirunda",
      role: "Waste Management Expert",
      bio: "David leads our waste management initiatives and circular economy projects. His innovative approaches have helped clients achieve industry-leading waste reduction and recycling rates.",
      specialties: ["Waste Management", "Circular Economy", "Resource Recovery"],
      education: "MSc Waste Management, BSc Environmental Engineering",
      image: "/api/placeholder/200/200"
    }
  ];

  return (
    <section id="team" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Expert Team
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Meet the experienced professionals who drive Gissat's success. 
            Our multidisciplinary team brings together decades of expertise 
            in environmental consulting and sustainable development.
          </p>
        </div>

        {/* Team introduction */}
        <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg p-8 mb-16 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Users2 className="w-8 h-8 text-primary" />
            <h3 className="text-2xl font-bold text-foreground">Collaborative Excellence</h3>
          </div>
          <p className="text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Our team's collaborative spirit and diverse expertise enable us to tackle the most complex 
            environmental challenges. Each member brings unique skills and perspectives, ensuring 
            comprehensive solutions that meet our clients' specific needs while advancing 
            environmental sustainability across Uganda.
          </p>
        </div>

        {/* Team members grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300">
              <CardHeader className="text-center pb-4">
                {/* Profile image placeholder */}
                <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <GraduationCap className="w-12 h-12 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="text-primary font-medium text-sm">{member.role}</p>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {member.bio}
                </p>
                
                {/* Specialties */}
                <div>
                  <p className="text-sm font-medium text-foreground mb-2">Specialties:</p>
                  <div className="flex flex-wrap gap-1">
                    {member.specialties.map((specialty, specialtyIndex) => (
                      <Badge key={specialtyIndex} variant="outline" className="text-xs">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                {/* Education */}
                <div className="text-xs text-muted-foreground">
                  <p className="font-medium">Education:</p>
                  <p>{member.education}</p>
                </div>
                
                {/* Contact links */}
                <div className="flex space-x-2 pt-2">
                  <button className="w-8 h-8 bg-primary/10 hover:bg-primary/20 rounded-full flex items-center justify-center transition-colors duration-200">
                    <Linkedin className="w-4 h-4 text-primary" />
                  </button>
                  <button className="w-8 h-8 bg-accent/10 hover:bg-accent/20 rounded-full flex items-center justify-center transition-colors duration-200">
                    <Mail className="w-4 h-4 text-accent" />
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Ready to Work with Our Experts?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Our team is ready to provide you with personalized environmental solutions. 
            Contact us today to discuss how we can help your project succeed.
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-md font-medium transition-colors duration-200"
          >
            Get Expert Consultation
          </a>
        </div>
      </div>
    </section>
  );
};

export default Team;
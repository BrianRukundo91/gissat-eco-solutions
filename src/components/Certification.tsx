import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Shield, CheckCircle, ExternalLink } from "lucide-react";

const Certification = () => {
  const certifications = [
    {
      title: "ISO 14001:2015",
      description: "Environmental Management Systems",
      status: "Certified",
      issuer: "Uganda National Bureau of Standards",
      validUntil: "2025"
    },
    {
      title: "NEMA Registration",
      description: "Environmental Practitioners Registration",
      status: "Active",
      issuer: "National Environment Management Authority",
      validUntil: "2024"
    },
    {
      title: "Professional Environmental Auditor",
      description: "Certified Environmental Auditing",
      status: "Certified",
      issuer: "Institute of Environmental Professionals",
      validUntil: "2025"
    }
  ];

  return (
    <section id="certification" className="py-12 sm:py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">
            Certifications & Compliance
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
            Our certifications demonstrate our commitment to the highest standards 
            of environmental consulting and regulatory compliance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {certifications.map((cert, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <Award className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
                </div>
                <CardTitle className="text-lg sm:text-xl font-semibold text-foreground">
                  {cert.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 sm:space-y-4">
                <p className="text-muted-foreground text-sm sm:text-base">{cert.description}</p>
                <div className="space-y-2">
                  <Badge variant="default" className="bg-green-600 hover:bg-green-700">
                    {cert.status}
                  </Badge>
                  <p className="text-xs sm:text-sm text-muted-foreground">Valid until {cert.validUntil}</p>
                  <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certification;
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
    <section id="certification" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Certifications & Compliance
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our certifications demonstrate our commitment to the highest standards 
            of environmental consulting and regulatory compliance.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-semibold text-foreground">
                  {cert.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{cert.description}</p>
                <div className="space-y-2">
                  <Badge variant="default" className="bg-green-600 hover:bg-green-700">
                    {cert.status}
                  </Badge>
                  <p className="text-sm text-muted-foreground">Valid until {cert.validUntil}</p>
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
import { Card, CardContent } from "@/components/ui/card";
import { Award, Shield, Leaf, HardHat, FileCheck, Building2 } from "lucide-react";

const Certification = () => {
  const certifications = [
    {
      title: "Petroleum Authority of Uganda",
      number: "NS-12775/19/1755",
      icon: Building2,
    },
    {
      title: "PPDA",
      number: "PRV/SRVCS/240430142/APR/24",
      icon: FileCheck,
    },
    {
      title: "NEMA",
      number: "CC/EP/010/2023",
      icon: Leaf,
    },
    {
      title: "ISO 9001:2015",
      subtitle: "Quality Management Systems",
      number: "UG240118026",
      icon: Award,
    },
    {
      title: "ISO 14001:2015",
      subtitle: "Environment Management Systems",
      number: "UG240118027",
      icon: Shield,
    },
    {
      title: "ISO 45001:2018",
      subtitle: "Occupational Health & Safety",
      number: "UG240118028",
      icon: HardHat,
    },
    {
      title: "Ministry of Gender, Labour & Social Development",
      subtitle: "OHS23",
      number: "00111",
      icon: FileCheck,
    },
  ];

  return (
    <section id="certification" className="py-12 sm:py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">
            Certifications & Accreditations
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
            Registered and certified to deliver excellence in environmental consulting
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {certifications.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <Card key={index} className="hover:shadow-md transition-shadow duration-300">
                <CardContent className="p-4 flex items-start gap-3">
                  <div className="w-10 h-10 flex-shrink-0 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-semibold text-foreground text-sm leading-tight">
                      {cert.title}
                    </h3>
                    {cert.subtitle && (
                      <p className="text-xs text-muted-foreground mt-0.5">{cert.subtitle}</p>
                    )}
                    <p className="text-xs font-mono text-primary mt-1 break-all">{cert.number}</p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Certification;
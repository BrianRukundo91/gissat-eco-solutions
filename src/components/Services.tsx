import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Settings, 
  FileCheck, 
  BarChart3, 
  ClipboardCheck, 
  Volume2, 
  Search, 
  FileText, 
  Wind, 
  Trash2, 
  Target, 
  TrendingUp 
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Settings,
      title: "Environmental Management Systems Development and Implementation",
      shortTitle: "EMS Development",
      description: "Comprehensive environmental management system design and implementation to help organizations achieve ISO 14001 certification and maintain environmental excellence.",
      features: ["ISO 14001 Certification Support", "Policy Development", "Training Programs", "Continuous Improvement"]
    },
    {
      icon: FileCheck,
      title: "Environmental Permitting and Licensing",
      shortTitle: "Permitting & Licensing",
      description: "Expert guidance through Uganda's environmental permitting process, ensuring full regulatory compliance for all your operations.",
      features: ["ESIA Certificates", "Environmental Permits", "License Renewals", "Regulatory Liaison"]
    },
    {
      icon: BarChart3,
      title: "Resource Monitoring and Compliance",
      shortTitle: "Monitoring & Compliance",
      description: "Ongoing monitoring services to ensure continuous compliance with environmental regulations and performance standards.",
      features: ["Real-time Monitoring", "Compliance Reporting", "Data Analysis", "Performance Tracking"]
    },
    {
      icon: ClipboardCheck,
      title: "Environmental Impact Assessment",
      shortTitle: "EIA Services",
      description: "Comprehensive environmental impact assessments for projects of all scales, ensuring sustainable development practices.",
      features: ["Baseline Studies", "Impact Prediction", "Mitigation Measures", "Public Consultation"]
    },
    {
      icon: Volume2,
      title: "Noise and Acoustics",
      shortTitle: "Noise Assessment",
      description: "Professional noise assessment and acoustic consulting services for industrial, commercial, and infrastructure projects.",
      features: ["Noise Surveys", "Acoustic Design", "Mitigation Strategies", "Compliance Monitoring"]
    },
    {
      icon: Search,
      title: "Environmental Audits",
      shortTitle: "Environmental Audits",
      description: "Thorough environmental audits to identify risks, ensure compliance, and optimize environmental performance.",
      features: ["Compliance Audits", "Risk Assessment", "Gap Analysis", "Improvement Plans"]
    },
    {
      icon: FileText,
      title: "Environmental Management Plan",
      shortTitle: "Management Plans",
      description: "Detailed environmental management plans tailored to your project's specific needs and regulatory requirements.",
      features: ["Customized Plans", "Implementation Guidance", "Monitoring Protocols", "Reporting Templates"]
    },
    {
      icon: Wind,
      title: "Air Quality Assessments",
      shortTitle: "Air Quality",
      description: "Comprehensive air quality monitoring and assessment services to protect public health and meet environmental standards.",
      features: ["Ambient Monitoring", "Emission Testing", "Dispersion Modeling", "Source Identification"]
    },
    {
      icon: Trash2,
      title: "Waste Management",
      shortTitle: "Waste Management",
      description: "Integrated waste management solutions covering waste minimization, treatment, disposal, and circular economy principles.",
      features: ["Waste Audits", "Management Systems", "Treatment Solutions", "Recycling Programs"]
    },
    {
      icon: Target,
      title: "Baseline Environmental Assessments",
      shortTitle: "Baseline Studies",
      description: "Establishing environmental baselines to track changes and measure the effectiveness of environmental interventions.",
      features: ["Pre-project Assessments", "Reference Conditions", "Monitoring Design", "Trend Analysis"]
    },
    {
      icon: TrendingUp,
      title: "Corporate Reporting and Sustainability",
      shortTitle: "Sustainability Reporting",
      description: "Strategic sustainability consulting and reporting services to enhance corporate environmental performance and stakeholder engagement.",
      features: ["Sustainability Strategy", "ESG Reporting", "Stakeholder Engagement", "Performance Metrics"]
    }
  ];

  return (
    <section id="services" className="py-12 sm:py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">
            Our Services
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive environmental solutions designed to help your organization 
            achieve sustainability goals while maintaining full regulatory compliance.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                        {service.shortTitle}
                      </CardTitle>
                      <CardDescription className="text-muted-foreground leading-relaxed">
                        {service.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, featureIndex) => (
                      <Badge key={featureIndex} variant="secondary" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Need a Custom Environmental Solution?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Our team of environmental experts can design tailored solutions for your unique challenges. 
              Contact us today to discuss your project requirements.
            </p>
            <a 
              href="#contact" 
              className="inline-flex items-center bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-md font-medium transition-colors duration-200"
            >
              Get Expert Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
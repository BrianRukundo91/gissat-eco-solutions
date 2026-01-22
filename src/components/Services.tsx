import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
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
      features: ["Baseline Studies", "Impact Prediction", "Mitigation Measures", "Public Consultation"],
      readMore: {
        title: "Environmental & Social Impact Assessment (EIA/SIA)",
        intro:
          "Gissat undertakes EIAs to determine the positive and negative consequences to the environment of any proposed project in a location. This is done to ensure that decision makers consider the environmental impacts when deciding whether or not to proceed with a project. Social Impact Assessments are done to review the social effects of infrastructure projects and developments interventions.",
        sections: [
          {
            heading: "Our approach",
            paragraphs: [
              "This is done through a process of identifying, predicting, evaluating and mitigating the biophysical, social, and other relevant effects of development proposals prior to major decisions being taken and commitments made.",
              "Our consultants have vast experience working in different environmental and engineering roles across a range of different industries. It is our thorough environmental knowledge which best places us to assist your operation. Our services range across all environmental and sustainability fields and our experienced consultants can advise on best environmental practice.",
              "We have a proven track record in development of bespoke risk management solutions for property portfolio acquisition and divestiture, due diligence evaluation of lease and tenant operations, ongoing licensed operations and management of liabilities to enable our clients to meet with corporate and statutory obligations.",
              "We provide advice and guidance on potential environmental liabilities and risks associated with ongoing operations and every phase of a project. We proactively work with our clients to minimize uncertainty, develop risk mitigation strategies and ensure delivery of risk management solutions to add tangible value to their business.",
            ],
          },
          {
            heading: "Some of our services include",
            bullets: [
              "Environmental Impact Assessments",
              "Ecological Impact Assessments",
              "Project Management",
              "Environmental Due Diligence Assessments",
              "Stakeholder and Public Consultation and Engagement",
            ],
          },
          {
            heading: "Ecological Impact Assessments",
            paragraphs: [
              "Ecological Impact Assessment (EIA) is a process of identifying and evaluating potential effects of development and proposed actions on habitats, species and ecosystems. The findings of an assessment can help clarify ecological issues when determining planning consent.",
              "These can be used for the appraisal of projects of any scale including the ecological component of Environmental Impact Assessments. Unlike an EIA, an EIA on its own is not a statutory requirement. It is an evaluation process to support an assessment and planning application. Gissat has a team of ecologists available to assist you in the compilation of an EIA.",
            ],
          },
          {
            heading: "Project Management",
            paragraphs: [
              "Gissat has a track record of project management of large and small-scale projects. We can offer specialized consultants with a broad range of experience, that can provide expert advice on planning, environmental compliance and waste. Our project managers have the experience to ensure projects are progressed and completed in an efficient and timely manner.",
            ],
          },
          {
            heading: "Environmental Due Diligence Assessments",
            paragraphs: [
              "Environmental due diligence is the process of assessing lands to be acquired / developed, identifying actual or potential environmental liabilities arising from current or historical land usage.",
              "Gissat offers both Phase 1 Site assessments, which are generally desktop exercises and Phase II site investigation works. The information gathered during an Environmental due diligence assessment is used to identify the need for, and extent of any site remediation measures, and the likely associated costs.",
            ],
          },
          {
            heading: "Stakeholder and Public Consultation and Engagement",
            paragraphs: [
              "Gissat has a wealth of knowledge of both Stakeholder and Public consultation and engagement. This experience includes facilitating workshops to running public consultation events, offering a range of tools to give added value to stakeholder and/or public.",
            ],
          },
        ],
      },
    },
    {
      icon: Volume2,
      title: "Noise and Acoustics",
      shortTitle: "Noise Assessment",
      description: "Professional noise assessment and acoustic consulting services for industrial, commercial, and infrastructure projects.",
      features: ["Noise Surveys", "Acoustic Design", "Mitigation Strategies", "Compliance Monitoring"],
      readMore: {
        title: "Noise, Vibration & Acoustics",
        intro:
          "Gissat offers the services of its specialist acoustics departments to assist with the treatment of noise and vibration problems associated with sources that are within or external to buildings. The acoustic service is available either on an individual basis or as part of an integrated design appointment.",
        sections: [
          {
            heading: "Building acoustics",
            paragraphs: [
              "During recent years, the scope of activities associated with building acoustics has extended beyond the requirements of simple noise control towards meeting an increased demand for better general acoustic conditions within buildings.",
            ],
          },
          {
            heading: "Included within our extensive environmental noise and vibration experience",
            bullets: [
              "Noise mapping",
              "Building acoustics",
              "Environmental Impact Assessment noise and vibration studies",
              "Transportation (road/rail/air/port)",
              "Problem solving/troubleshooting",
              "Resource recycling",
              "Industrial IPPC",
              "Construction/Demolition",
              "Licensing",
              "Developing and Planning (residential/retail/leisure/commercial)",
              "Expert witness",
            ],
          },
          {
            heading: "Specialist advice areas",
            bullets: [
              "Transportation Noise and Vibration",
              "Noise prediction mapping",
              "Environmental Noise",
              "Building Services Vibration",
              "Building and Architectural Acoustics",
              "Vibration (Human comfort, building damage, railway impact studies, demolition, monitoring)",
            ],
          },
          {
            heading: "Transportation noise",
            paragraphs: [
              "Transportation noise affects a significant proportion of the population, especially in urban and suburban areas. Ugandan legislation has been used to gradually reduce the noise emissions from vehicles, but this has been offset by steady increases in traffic flows.",
              "Gissat has carried out numerous environmental impact assessments for road schemes, including transportation noise, air quality, greenhouse gases, ecology, heritage, biodiversity and water quality (including flood risk).",
              "We utilize noise propagation software to model noise levels from a variety of sources including roads, railways, construction sites and industries.",
              "We work closely with clients from inception to design to pre-completion testing and commissioning, providing practical and cost-effective solutions tailored to unique needs.",
            ],
          },
        ],
      },
    },
    {
      icon: Search,
      title: "Environmental Audits",
      shortTitle: "Environmental Audits",
      description: "Thorough environmental audits to identify risks, ensure compliance, and optimize environmental performance.",
      features: ["Compliance Audits", "Risk Assessment", "Gap Analysis", "Improvement Plans"],
      readMore: {
        title: "Environmental Audits",
        intro:
          "Gissat conducts technical audits to confirm/review the company's establishments environmental legal compliance in an operational context. These begin by determining the compliance requirements against which the operations will be assessed. We have the experience to develop protocols that are application suited to the establishment.",
        sections: [
          {
            heading: "What audits measure",
            paragraphs: [
              "Environmental audits are conducted on already existing establishments and therefore seek to measure the level of performance against a set out standard.",
              "Our consultants are trained in all aspects of auditing and inspections. We have experience in working with both the public and private sectors across a range of different industries. We can offer you a professional service with legislative and international standards expertise.",
              "Our experienced consultants can advise on best practice and will provide practical auditing solutions tailored to your individual requirements.",
            ],
          },
          {
            heading: "Some of our Auditing Services include",
            bullets: [
              "Environmental Compliance Inspections",
              "Enforcement Support Services",
              "Environmental and Quality Management Systems (ISO 14001:2015 / ISO 9001:2015)",
              "Waste Management Audits",
            ],
          },
          {
            heading: "Environmental Compliance Inspections",
            paragraphs: [
              "Gissat has a team of expert consultants trained in environmental compliance inspections. We can offer compliance inspections for all businesses, including local authority regulated or Environmental Protection Agency (EPA) regulated facilities.",
            ],
          },
          {
            heading: "Enforcement Support Services",
            paragraphs: [
              "We offer enforcement support services across diverse industries, assisting in a clear, quick and concise manner addressing enforcement needs. Our team has hands-on experience working on both sides of public and private industry.",
            ],
          },
          {
            heading: "Environmental & Quality Management Systems",
            paragraphs: [
              "We provide compliance support and expert advice in developing and maintaining integrated management systems to International ISO standards (ISO 14001:2015 and ISO 9001:2015).",
              "We can tailor procedures, forms, registers, KPIs, objectives and process mapping, and provide training on use and maintenance. We also offer gap analysis audits, pre-assessment and internal audits.",
            ],
          },
          {
            heading: "Waste Management Audits",
            paragraphs: [
              "Our senior consultants are trained in waste compliance reporting, monitoring and auditing, with experience managing EPA and local authority regulated sites. We tailor simple solutions to increase recycling and recovery rates and save costs.",
            ],
          },
        ],
      },
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
      title: "Air Quality Assessment",
      shortTitle: "Air Quality",
      description: "Air quality modelling, monitoring, permitting and compliance services aligned with the latest legislative requirements.",
      features: ["Dispersion Modelling", "Monitoring", "Permitting", "Compliance Strategy"],
      readMore: {
        title: "Air Quality Assessment",
        intro:
          "With over 10 years of air quality experience, Gissat is expertly placed to meet all possible air quality needs. Gissat Air Quality Team has extensive air quality experience and offers a comprehensive range of air quality management services, all provided in accordance with the latest legislative requirements and guidelines.",
        sections: [
          {
            heading: "What we do",
            paragraphs: [
              "We undertake air quality assessments and provide solutions for a wide range of public and private clients, including the national government, investors and industry.",
            ],
          },
          {
            heading: "Our air quality services cover",
            bullets: [
              "Air Quality Modelling and Risk Assessment",
              "Dispersion modelling",
              "Ambient Air Quality Monitoring",
              "Facility Air Quality Monitoring",
              "Air Permitting",
              "Expert Advice and Expert Witness Support",
              "Assessments and Monitoring of odour, dust and bioaerosols",
              "Air Quality Management Plans (e.g. dust, NOx)",
              "Development of Air Quality Guidance",
              "Emissions and Green House Gas (GHG) Inventories",
              "Emissions Data and Regulatory Compliance Analysis",
              "Indoor Air Quality Assessments",
              "Local Air Quality Management",
              "Evaluations of Best Available Techniques (BAT)",
              "Stack Height Assessments",
              "Air Compliance Strategy Development",
              "Environmental Compliance and Environmental Management System Auditing",
            ],
          },
          {
            heading: "Air quality modelling and assessments",
            paragraphs: [
              "Gissat offers a wide range of air quality services including air quality modelling, dispersion modelling, air pollution control system design, waste minimization, air quality monitoring, New Source review permitting, compliance strategy development, emissions inventory development, and other specialities within the air quality/air pollution control arena.",
            ],
          },
          {
            heading: "Air permitting",
            paragraphs: [
              "We prepare air permit applications for numerous industries and provide services ranging from consultation and oversight to complex turnkey permit applications. Our staff actively monitors regulatory changes and understands how permit applications are reviewed by regulatory agencies.",
            ],
            bullets: [
              "Permitting feasibility studies and sensitivity analyses",
              "Emission estimates and netting analyses",
              "Control technology evaluations",
              "Visibility impact assessments",
              "Transportation facility applications and modelling analyses",
            ],
          },
          {
            heading: "Air quality impact evaluations",
            paragraphs: [
              "We provide ambient air quality evaluations and dispersion modelling to determine impacts of source emissions on ambient air quality levels and support risk assessments.",
            ],
            bullets: [
              "AERMOD",
              "RTDM Model",
              "CTDMPLUS Model",
              "COMPLEX I Model",
              "CALPUFF (Refined/Screening)",
              "ISCST3/LT3 Models",
              "SCREEN3 Model",
              "VISCREEN2 Model",
              "PLUVUE II",
              "CAL3QHC2 (Transportation model)",
              "PAL2 (Transportation model)",
              "MOBILE5A (Emissions model)",
            ],
          },
          {
            heading: "Compliance services",
            paragraphs: [
              "We support both routine and non-routine compliance obligations and streamline monitoring and reporting requirements to reduce compliance costs and potential liability.",
            ],
            bullets: [
              "Annual air emissions inventories and Toxic Release Inventories (TRIs)",
              "Source measurements (stack testing)",
              "Compliance audits",
              "Historical permitting reviews",
              "Monitoring protocols and strategies",
              "Continuous emissions monitoring design and programming",
            ],
          },
          {
            heading: "Air quality measurements for process optimization and compliance",
            paragraphs: [
              "We design testing protocols specific to facility needs, including continuous measurement techniques and integrated batch sampling methods for very low concentrations.",
            ],
            bullets: [
              "Halogenated compounds",
              "TRS",
              "Non-hazardous organic compounds",
              "Criteria pollutants (e.g. NOx, SO2, PM)",
              "Metals",
              "State regulated toxic air pollutants",
              "Hazardous air pollutants",
            ],
          },
          {
            heading: "Greenhouse gases",
            paragraphs: [
              "Gissat has extensive expertise in managing carbon management projects, from preparing greenhouse gases (GHG) emission inventories to lifecycle analyses for the six internationally-recognized greenhouse gases (CO2, CH4, N2O, HFCs, PFCs, SF6).",
            ],
          },
        ],
      },
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

                  {service.readMore ? (
                    <div className="mt-4">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="link" className="h-auto p-0">
                            Read more
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-2xl">
                          <DialogHeader>
                            <DialogTitle>{service.readMore.title}</DialogTitle>
                            <DialogDescription className="mt-2">
                              {service.readMore.intro}
                            </DialogDescription>
                          </DialogHeader>

                          <div className="space-y-6">
                            {service.readMore.sections?.map((section, sIdx) => (
                              <div key={sIdx} className="space-y-3">
                                {section.heading ? (
                                  <h4 className="text-base font-semibold text-foreground">
                                    {section.heading}
                                  </h4>
                                ) : null}

                                {section.paragraphs?.map((p, pIdx) => (
                                  <p key={pIdx} className="text-sm text-muted-foreground leading-relaxed">
                                    {p}
                                  </p>
                                ))}

                                {section.bullets?.length ? (
                                  <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                                    {section.bullets.map((b, bIdx) => (
                                      <li key={bIdx}>{b}</li>
                                    ))}
                                  </ul>
                                ) : null}
                              </div>
                            ))}
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                  ) : null}
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
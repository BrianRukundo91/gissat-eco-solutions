import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { MapPin, CheckCircle, ChevronRight, ChevronLeft, Building2 } from "lucide-react";

// ── Kaazi Beach ──────────────────────────────────────────────────────────────
import KaaziBeach1 from "@/assets/projects/kaazi beach 1.png";
import KaaziBeach2 from "@/assets/projects/kaazi beach 2.png";

// ── TotalEnergies ─────────────────────────────────────────────────────────────
import Total1 from "@/assets/projects/total 1.png";
import Total2 from "@/assets/projects/total 2.png";

// ── Iowa State ────────────────────────────────────────────────────────────────
import IowaState1 from "@/assets/projects/iowa state 1.png";
import IowaState2 from "@/assets/projects/iowa state 2.png";

// ── PDL ───────────────────────────────────────────────────────────────────────
import Pdl1 from "@/assets/projects/pdl 1.png";
import Pdl2 from "@/assets/projects/pdl2.png";
import Pdl3 from "@/assets/projects/pdl3 (6).png";
import Pdl4 from "@/assets/projects/pdl 4.png";

// ── Ambrosoli ─────────────────────────────────────────────────────────────────
import AmbrosoliImg from "@/assets/projects/Ambrosoli.png";

// ─── Types ────────────────────────────────────────────────────────────────────

interface Project {
  title: string;
  shortTitle: string;
  location: string;
  client: string;
  category: string;
  serviceType: "ECA" | "ESIA";
  description: string;
  detailedDescription: string[];
  services: string[];
  outcome: string;
  images: string[];
}

// ─── Image Carousel ───────────────────────────────────────────────────────────

const ImageCarousel = ({ images, title }: { images: string[]; title: string }) => {
  const [current, setCurrent] = useState(0);
  const total = images.length;

  const prev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrent((c) => (c - 1 + total) % total);
  };

  const next = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrent((c) => (c + 1) % total);
  };

  return (
    <div className="relative h-full w-full overflow-hidden group/carousel">
      {/* Images */}
      {images.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`${title} — image ${i + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Arrows — only shown when multiple images */}
      {total > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-black/50 hover:bg-black/70 text-white flex items-center justify-center opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-200"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-black/50 hover:bg-black/70 text-white flex items-center justify-center opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-200"
            aria-label="Next image"
          >
            <ChevronRight className="w-4 h-4" />
          </button>

          {/* Dot indicators */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 flex gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={(e) => { e.stopPropagation(); setCurrent(i); }}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-200 ${
                  i === current ? "bg-white w-4" : "bg-white/50 hover:bg-white/80"
                }`}
                aria-label={`Go to image ${i + 1}`}
              />
            ))}
          </div>

          {/* Image counter */}
          <div className="absolute top-3 right-3 z-10 bg-black/50 text-white text-xs font-medium px-2 py-0.5 rounded-full">
            {current + 1} / {total}
          </div>
        </>
      )}
    </div>
  );
};

// ─── Service badge ─────────────────────────────────────────────────────────────

const ServiceBadge = ({ type }: { type: "ECA" | "ESIA" }) => (
  <span
    className={`inline-flex items-center text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full ${
      type === "ECA"
        ? "bg-primary/15 text-primary border border-primary/25"
        : "bg-accent/15 text-accent border border-accent/25"
    }`}
  >
    {type === "ECA" ? "Compliance Audit" : "Impact Assessment"}
  </span>
);

// ─── Data ─────────────────────────────────────────────────────────────────────

const projects: Project[] = [
  {
    shortTitle: "Kaazi Beach Resort ECA",
    title: "Environmental Compliance Audit for Kaazi Beach Resort on Plots 205/206 Block 273 in Busabala Cell, Busabala Ward, Makindye Ssabagabo Municipality, Wakiso District",
    location: "Busabala Cell, Makindye Ssabagabo Municipality, Wakiso District",
    client: "Paradiso Beach Limited",
    category: "Hotel, Tourism & Recreation",
    serviceType: "ECA",
    description:
      "Environmental Compliance Audit for a serene lakeside resort set on approximately 10.4 acres along the shores of Lake Victoria, offering integrated hotel, conference, and recreational facilities.",
    detailedDescription: [
      "Kaazi Beach Resort is a serene lakeside destination set on approximately 10.4 acres along the shores of Lake Victoria. The resort offers a tranquil environment ideal for both leisure guests and corporate clients hosting conferences and retreats. Designed as an integrated hotel and conference facility, the resort blends comfort, functionality, and natural beauty.",
      "Key features include a central reception and administration block, 18 well-appointed guest rooms in a grass-thatched structure with 12 interconnecting rooms configurable as family apartments, a two-level restaurant with a fully equipped professional kitchen, a brasserie and bar near the swimming pool, flexible conference facilities with breakout spaces, a health and wellness centre, a large public swimming pool, a public beach area along the lake, and open space for outdoor events.",
      "GISSAT was appointed to carry out an Environmental Compliance Audit (ECA) for the facility in line with the National Environmental Audit Regulations, 2020 and the conditions of the Environmental and Social Impact Assessment (ESIA) Certificate.",
      "The purpose of the audit was to assess whether the mitigation and monitoring measures outlined in the Environmental Management Plan (EMP) are being effectively implemented and achieving their intended outcomes. The audit also identified areas for improvement and provided practical recommendations to strengthen environmental performance.",
    ],
    services: [
      "The assessment was conducted by a team of experienced environmental professionals using a combination of desktop review and field investigations. This included reviewing project documentation and environmental reports, as well as conducting site visits to evaluate physical, biological, and socio-economic conditions.",
      "Data collection involved site inspections, analysis of existing plans and reports, and stakeholder consultations to ensure a comprehensive and accurate assessment of the facility's environmental performance.",
    ],
    outcome:
      "Comprehensive compliance review against National Environmental Audit Regulations, 2020, with actionable recommendations to strengthen the facility's environmental performance and EMP implementation.",
    images: [KaaziBeach1, KaaziBeach2],
  },
  {
    shortTitle: "TotalEnergies 20MWac Solar Plant ESIA",
    title: "Environmental and Social Impact Assessment for the Proposed 20MWac Solar Power Plant in Utro 'A' Village, Kayoro Sub County, and Ngelechom 'B' Cell, Osukuru Town Council, Tororo District",
    location: "Kayoro Sub County & Osukuru Town Council, Tororo District",
    client: "TotalEnergies EP Uganda",
    category: "Renewable Energy",
    serviceType: "ESIA",
    description:
      "Environmental and Social Impact Assessment for a utility-scale 20MWac ground-mounted solar PV power plant, contributing to Uganda's energy transition and supporting industrial growth in the Tororo region.",
    detailedDescription: [
      "TotalEnergies EP Uganda (TEPU) is actively contributing to Uganda's energy transition through investments in renewable energy, with a focus on solar PV technology. The company brings extensive international experience in energy development, including upstream oil and gas, power generation, and increasingly, low-carbon and renewable energy solutions.",
      "TEPU proposed to construct a 20MWac solar power generation plant utilising solar photovoltaic (solar PV) technology, where solar modules/panels (N Type) made from silicon material convert solar energy into direct current (DC) electricity. The utility-scale installation deploys ground-mounted PV modules, inverters, and associated infrastructure.",
      "The project is expected to enhance power supply reliability across Tororo and neighbouring districts, stimulate industrial growth and agro-processing, create employment across project phases, advance environmental sustainability by curbing fossil fuel dependency, and contribute to global climate mitigation efforts through reduced emissions.",
      "As a result of the anticipated environmental impacts on biophysical and socio-economic aspects, Gissat was contracted to conduct an Environmental and Social Impact Assessment (ESIA) for both the construction and operation phases of the project.",
    ],
    services: [
      "The ESIA was conducted by Gissat following the basic steps outlined in the National Environment (Environmental and Social Assessment) Regulations 2020 and National EIA Guidelines-1997.",
      "Field visits involving area experts were carried out to identify issues and possible project impacts through inspection, verification, observations and discussions with local residents and key informants. Secondary information was collected through published reports and interpretation of maps and photographs. Primary information was generated through questionnaires, checklists, measurements and consultations.",
      "The impacts of the project were assessed and generally grouped into those affecting water resources, air quality, flora and fauna, community and their economic activities, soil, vegetation, aesthetics and landscape, noise and human health.",
    ],
    outcome:
      "Comprehensive ESIA covering construction and operation phases, providing a robust Environmental and Social Management Plan to guide sustainable development of Uganda's renewable energy sector.",
    images: [Total1, Total2],
  },
  {
    shortTitle: "Mpirigiti Rural Training Centre ECA — ISU-UP",
    title: "Environmental Compliance Audit of Mpirigiti Rural Training Centre in Buyomba Zone, Sabawali Ward, Northern Division, Kamuli Municipality, Kamuli District",
    location: "Buyomba Zone, Kamuli Municipality, Kamuli District",
    client: "Iowa State University-Uganda Program (ISU-UP)",
    category: "The Built Environment",
    serviceType: "ECA",
    description:
      "Environmental Compliance Audit for a multi-purpose rural training and residential centre operated by Iowa State University-Uganda Program, conducted to support the extension of the facility's EIA certificate of approval.",
    detailedDescription: [
      "Iowa State University-Uganda Program (ISU-UP) is a registered International non-governmental organization that operates Mpirigiti Rural Training Centre (MRTC) as the operational hub for several community outreach programs primarily aimed at promoting service learning for students of Iowa State University and Makerere University.",
      "The Training Centre is a multi-purpose facility serving as a residential facility for Iowa State and Makerere University students and faculty, a community training and demonstration center, and a conference and meeting venue, inter alia.",
      "In accordance with Regulation 26 of the National Environment (Environmental and Social Assessment) Regulations, 2020, Gissat was contracted to undertake an environmental compliance audit as an antecedent to the extension of the validity period for the facility's EIA certificate of approval.",
    ],
    services: [
      "The audit procedures followed conformed to Uganda's statutory environmental audit guidelines, and included the customary steps of pre-audit, on-site audit and post audit, in line with best practice audit procedures.",
      "Audit criteria were derived from a comprehensive review of a suite of documents, including operator-availed documents pertinent to a thorough audit of the facility. Physical site inspections enabled the audit team to assess the efficiency of a number of operational strategies relevant to the environmental and social performance of the facility.",
      "The audit scope entailed site intrusive investigations to assess environmental impacts arising from the facility's operations, including an evaluation of operation and maintenance schedules, general social impact assessment, and health and risk assessment, in line with the requirements of the National Environment (Audit) Regulations, 2020.",
    ],
    outcome:
      "Statutory compliance audit completed in support of EIA certificate renewal, with assessment findings and recommendations aligned to the National Environment (Audit) Regulations, 2020.",
    images: [IowaState1, IowaState2],
  },
  {
    shortTitle: "PDL Plastics Bottle Manufacturing Plant ESIA",
    title: "Environmental and Social Impact Assessment for the Proposed Development of a Plastics Bottle Manufacturing Plant on Plot 179 Block 101 in Wattuba Cell, Kasangati Town Council, Wakiso District",
    location: "Wattuba Cell, Kasangati Town Council, Wakiso District",
    client: "Premier Distilleries Limited (PDL)",
    category: "Industry",
    serviceType: "ESIA",
    description:
      "Environmental and Social Impact Assessment for a second PET bottle and cap manufacturing plant, strategically designed to address production limitations and reinforce PDL's commitment to environmental sustainability.",
    detailedDescription: [
      "Premier Distilleries Limited (PDL) experienced a successful increase in sales for both the domestic market and the entire East African region. However, the produced alcoholic beverages needed sustainable and eco-friendly packaging. To this end, PDL planned to set up a second plastics bottle manufacturing unit for their PET bottles and caps.",
      "The initiative was strategically designed to address existing production limitations, cater to the growing market demand, and reinforce the company's commitment to environmental sustainability. It would also serve as a contingency, ensuring continuity of operations in case of any disruptions at the main plant.",
      "The project was expected to have environmental impacts on certain aspects of the biophysical and socio-economic environment. As a result, Gissat was contracted to conduct an Environmental and Social Impact Assessment (ESIA) for both the construction and operation phases of the project.",
    ],
    services: [
      "The ESIA was conducted by Gissat following the basic steps outlined in the National Environment (Environmental and Social Assessment) Regulations 2020 and National EIA Guidelines-1997.",
      "Field visits involving area experts were carried out to identify issues and possible project impacts through inspection, verification, observations and discussions with local residents and key informants. Secondary information was collected through published reports and interpretation of maps and photographs. Primary information was generated through questionnaires, checklists, measurements and consultations.",
      "The impacts of the project were assessed and generally grouped into those affecting water resources, air quality, flora and fauna, community and their economic activities, soil, vegetation, aesthetics and landscape, noise and human health.",
    ],
    outcome:
      "Full ESIA completed covering construction and operation phases, with a comprehensive Environmental and Social Management Plan ensuring PDL's expansion meets national and international environmental standards.",
    images: [Pdl1, Pdl2, Pdl3, Pdl4],
  },
  {
    shortTitle: "Ambrosoli International School Classroom Block ESIA",
    title: "Environmental and Social Impact Assessment for the Proposed New Classroom Block at Ambrosoli International School, Plot 8 Binayomba Road, Bugolobi Bungalows II Village, Bugolobi Parish, Nakawa Division",
    location: "Plot 8 Binayomba Road, Bugolobi, Nakawa Division, Kampala",
    client: "Ambrosoli International School (AIS)",
    category: "Housing & Urban Development",
    serviceType: "ESIA",
    description:
      "Environmental and Social Impact Assessment for the remodelling and construction of a new classroom block at one of Kampala's leading international schools, accredited by the International Primary Curriculum (IPC) and the Council of International Schools (CIS).",
    detailedDescription: [
      "Ambrosoli International School (AIS) is an education institution with decades of experience offering a comprehensive program for students from nursery through primary, accredited by the International Primary Curriculum (IPC) and the Council of International Schools (CIS).",
      "AIS prioritised the remodelling of current buildings and construction of a new classroom block to provide adequate space for personalised instruction and group activities, accommodating different learning styles for all children including those with special educational needs.",
      "An environmental and social impact assessment was undertaken in conformity with the National Environment Act, 2019, for the design, operation and decommissioning of the proposed classroom block.",
    ],
    services: [
      "GISSAT undertook the project ESIA to identify and analyse impacts of the proposed development on the natural and socio-cultural environment. The study also aimed to assess impacts on infrastructure and social amenities such as traffic, drainage and water supply.",
      "The methodology used consisted of desktop studies to review literature as well as field investigations. Baseline data for the study area was collected using a combination of site reconnaissance, analysis of maps and plans, review of reports, public consultations, and specialist studies.",
      "Key assessment areas included water resources, air quality, flora and fauna, community and their economic activities, soil, vegetation, aesthetics and landscape, noise, and human health.",
    ],
    outcome:
      "Comprehensive ESIA completed, covering design through decommissioning phases, with impact assessments across key environmental and socio-economic categories in line with the National Environment Act, 2019.",
    images: [AmbrosoliImg],
  },
];

// ─── Project Card ──────────────────────────────────────────────────────────────

const ProjectCard = ({ project }: { project: Project }) => (
  <Card className="group flex flex-col overflow-hidden hover:shadow-xl transition-all duration-300 border-border/60">
    {/* Image / Carousel */}
    <div className="h-52 relative overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10 flex-shrink-0">
      <ImageCarousel images={project.images} title={project.shortTitle} />
      {/* Category badge overlay */}
      <div className="absolute bottom-3 left-3 z-10">
        <Badge variant="secondary" className="bg-background/90 backdrop-blur-sm text-xs font-medium shadow-sm">
          {project.category}
        </Badge>
      </div>
    </div>

    <CardHeader className="pb-2 pt-5">
      <div className="flex items-start justify-between gap-2 mb-2">
        <ServiceBadge type={project.serviceType} />
      </div>
      <CardTitle className="text-base sm:text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300 leading-snug line-clamp-3">
        {project.title}
      </CardTitle>
      <div className="flex items-center gap-1.5 mt-1.5 text-xs text-muted-foreground">
        <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
        <span className="line-clamp-1">{project.location}</span>
      </div>
      <div className="flex items-center gap-1.5 mt-1 text-xs text-muted-foreground">
        <Building2 className="w-3.5 h-3.5 flex-shrink-0" />
        <span className="font-medium text-foreground/70">{project.client}</span>
      </div>
    </CardHeader>

    <CardContent className="flex flex-col flex-1 space-y-4 pt-0">
      <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">{project.description}</p>

      {/* Outcome strip */}
      <div className="bg-secondary/50 rounded-lg p-3 flex items-start gap-2">
        <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
        <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">{project.outcome}</p>
      </div>

      {/* Read More */}
      <div className="mt-auto pt-1">
        <Dialog>
          <DialogTrigger asChild>
            <Button
              variant="ghost"
              className="w-full justify-between text-primary hover:text-primary/80 hover:bg-primary/10 text-sm"
            >
              View Full Details
              <ChevronRight className="w-4 h-4" />
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl max-h-[92vh] overflow-y-auto">
            <DialogHeader>
              {/* Carousel in dialog */}
              <div className="w-full h-56 rounded-xl overflow-hidden mb-4 bg-muted">
                <ImageCarousel images={project.images} title={project.shortTitle} />
              </div>
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <ServiceBadge type={project.serviceType} />
                <Badge variant="outline" className="text-xs">{project.category}</Badge>
              </div>
              <DialogTitle className="text-xl leading-snug">{project.title}</DialogTitle>
              <div className="flex flex-col gap-1 mt-1">
                <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4 flex-shrink-0" />
                  <span>{project.location}</span>
                </div>
                <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                  <Building2 className="w-4 h-4 flex-shrink-0" />
                  <span className="font-medium">{project.client}</span>
                </div>
              </div>
            </DialogHeader>

            <div className="space-y-5 mt-2">
              <div>
                <h4 className="text-sm font-semibold text-foreground mb-2 uppercase tracking-wide">Project Background</h4>
                <div className="space-y-2">
                  {project.detailedDescription.map((p, i) => (
                    <p key={i} className="text-sm text-muted-foreground leading-relaxed">{p}</p>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-foreground mb-2 uppercase tracking-wide">Services Provided</h4>
                <div className="space-y-2">
                  {project.services.map((s, i) => (
                    <p key={i} className="text-sm text-muted-foreground leading-relaxed">{s}</p>
                  ))}
                </div>
              </div>

              <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-900/40 rounded-lg p-4 flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-foreground mb-1">Project Outcome</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{project.outcome}</p>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </CardContent>
  </Card>
);

// ─── Main Component ────────────────────────────────────────────────────────────

const Projects = () => {
  const navigate = useNavigate();

  return (
    <section id="projects" className="py-12 sm:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="text-center mb-10 sm:mb-14">
          <span className="inline-block text-[11px] font-bold tracking-[0.25em] text-primary/80 uppercase mb-3">
            Featured Work
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">
            Recent Projects
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
            A selection of our most recent environmental consulting assignments across Uganda.
          </p>
        </div>

        {/* Projects grid — 2 cols with last card centred if odd */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 sm:p-10 max-w-3xl mx-auto border border-border/40">
            <h3 className="text-2xl font-bold text-foreground mb-3">Explore More Success Stories</h3>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto text-sm sm:text-base">
              These represent just a fraction of our 500+ completed projects. Contact us to learn how we can help your
              organisation achieve its environmental goals.
            </p>
            <Button variant="default" onClick={() => navigate("/contact")}>
              Request a Case Study
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Linkedin, Mail, Users2, ChevronRight } from "lucide-react";

interface TeamMember {
  name: string;
  role: string;
  shortBio: string;
  fullBio: string[];
  specialties: string[];
  memberships?: string[];
}

const Team = () => {
  const teamMembers: TeamMember[] = [
    {
      name: "Harriet Mujuni",
      role: "Chief Executive Officer",
      shortBio:
        "A lawyer and environmental policy analyst with over sixteen years' experience in environmental management at national and regional level.",
      fullBio: [
        "Harriet Mujuni is the Chief Executive Officer of Gissat Environment Associates. She is a lawyer and environmental policy analyst. She is also a natural resource management consultant with over sixteen years' experience in the field of environmental management at national and regional level. She holds a Bachelor of Laws Degree, a Post Graduate Diploma in Legal Practice and is currently undertaking a Masters Degree in Environmental Policy and Natural Resource Management.",
        "She has experience in implementation of Ugandan environmental law, policy and legal frameworks governing natural resources (especially biodiversity and forest conservation related), environmental management, agriculture and climate change in Uganda, and the analysis of relevant policies. She has nearly 15 years of experience providing environmental consulting services to governments, manufacturers, service organizations, financial institutions, private developers and other businesses.",
        "In her capacity as Head of the Environmental Compliance Section, Harriet performs the primary or concurring review of most of the environmental assessments conducted. She also serves as lead partner for several government clients.",
        "As team leader on various projects, Mujuni has professional network established with Ugandan government agencies, NGOs, international donors and the private sector. She has specifically been involved in integrated environmental assessment and reporting at sub-national, national and regional levels. Over the last ten years she has been involved in undertaking environmental studies (impact and socio-economic assessment, audits, management systems) of several development projects.",
        "She has worked as Theme Author for the National State of Environment Reports (1998, 2000) produced by the National Environment Management Authority biennially and also coordinated several projects relating to legal compliance issues and conflict resolution.",
        "She has led EIA, SEA and ESMP studies for numerous construction and infrastructure development projects including: Auditor General's Offices, DFCU Headquarters, Naguru-Nakawa Satellite City; Redevelopment of National Teachers' College Kaliro and Abilonino, NHCC – Mbarara; Canaan projects (Kololo, Muyenga, Kafu Road), Red Chilli Lodge and Camp; Sebalu-Lule Towers; Mbale and Tororo Central Markets.",
        "Mujuni has been Team Leader for several energy projects including Nyagak Hydropower Project; Kabalega HPP; Waki HPP; Feasibility Studies for Ndugutu, Esia and Mitano. Biofuel refinery in Namalu - Nakapiripirit; Nexus Biodiesel Plant, Pakanyi Masindi.",
        "She led EIA team for Export Development Centre and Regional Trade Hub for Uganda Export Promotions Board; Nsimbe Estates for NSSF & Mugoya Investments Ltd. Participated in ESIAs for Hydropower Development Masterplan in Uganda, Karamoja Community Livestock Development Project for OXFAM; Development of Environment Information Systems for NEMC Tanzania for improved natural resources management.",
        "EIAs for roads include: Tirinyi-Pallisa and Kumi-Pallisa-Mbale Roads; Ntungamo-Rukungir-Ishasha Road; Mbarara-Ibanda Road; Karuma-Pakwach-Arua Road; Busunju-Kiboga-Hoima Road and Katunguru-Kasese-Fort Portal Roads.",
        "Mujuni has also worked on several projects entailing gathering and getting acquainted with existing background information on Uganda such as the country's natural resources, geographical, ecological and biological specificities, current status of environment and biodiversity, institutional organization on entity and state level, key stakeholders and donors in environment and biodiversity, legislation related to the environment and biodiversity.",
      ],
      specialties: [
        "Certified EIA & Audits Team Leader (NEMA)",
        "Environmental Management Systems Specialist",
        "Strategic Environmental Assessments",
        "Cleaner Production Assessor",
        "Enrolled Advocate - Courts of Judicature of Uganda",
      ],
      memberships: [
        "International Association of Impact Assessment (IAIA) - No. 105991",
        "East African Law Society",
        "Uganda Law Society",
        "NEMA-registered EIA Practitioner (Team Leader)",
        "NEMA-registered Environmental Auditor (Team Leader)",
        "Uganda Association of Impact Assessment Practitioners (UAIA)",
      ],
    },
    {
      name: "Peacekinz Kweezi",
      role: "Chief Operations Manager",
      shortBio:
        "A growth-focused and innovative leader leveraging over 6 years of professional experience in operations, finance, and environmental engineering.",
      fullBio: [
        "Growth-focused and innovative, Ms. Kweezi Peacekinz is a talented, high-functioning leader who leverages over 6 years of professional experience. As the Chief Operations Manager of Gissat, she is responsible for all office operations, finance, technical and administrative functions.",
        "Peacekinz has the unique ability to grasp the most complex issues and challenges, find sound solutions and implement processes that continue to move the business forward. She is never happy with standing still and always looks for creative and innovative ways to grow and expand the business.",
        "In addition to her main role, she is also a Senior Environmental Engineer at Gissat specializing as a consulting Energy and Renewable Energy Engineer as well as Natural resource and Exploration Geologist.",
        "She is a graduate at Heriot-Watt University, Scotland, in Renewable Energy Engineering (MSc). She also holds a Bachelor's degree in Exploration and Resource Geology from Cardiff University, Wales United Kingdom which combines geologic, economic and sustainable development and strategic developments of the future of the mining and exploration industry.",
        "Peacekinz is a registered NEMA EIA Practitioner, a member of the Society of Economic Geologists, Cardiff (SEG) and has professional exploration and mining fieldwork experience in countries like Spain, Cyprus, South Wales, England and Uganda including the Kingfisher oil well mining project on Lake Albert in the Western region.",
        "Kweezi is an active member of community organizations such as Rotaract Muyenga and the 40/40 charity organization, Uganda. She previously served as a youth society president (YCS- 2010), and has participated in several marathon runs for example the Rotaract Cancer run and the MTN Kampala marathon.",
      ],
      specialties: [
        "Renewable Energy Engineering",
        "Exploration & Resource Geology",
        "Operations Management",
        "NEMA EIA Practitioner",
      ],
      memberships: [
        "Society of Economic Geologists, Cardiff (SEG)",
        "Rotaract Muyenga",
        "40/40 Charity Organization, Uganda",
      ],
    },
    {
      name: "Irene Tuhaise",
      role: "Senior Environmental Engineer",
      shortBio:
        "Environmental engineer with over five years' experience in environmental consulting, project management, and team leadership.",
      fullBio: [
        "Ms Irene Tuhaise is Senior Environmental Engineer at Gissat. She holds a bachelor's degree in Environmental Engineering and Management.",
        "She has served as an environmental consultant for over five years and participates in different activities within the company. She has participated as a team leader in company projects and developed an exceptional background in team members (being honest, respectful, committed) project management as well as a professional style based on excellent inter-personal communications and an ability to make the best possible use of her personal network.",
        "Irene is a registered member of the Uganda Association of Impact Assessment as well as the Environmental Engineering and Management Association of Kyambogo University.",
      ],
      specialties: ["Environmental Engineering", "Project Management", "Team Leadership", "Environmental Consulting"],
      memberships: [
        "Uganda Association of Impact Assessment",
        "Environmental Engineering and Management Association of Kyambogo University",
      ],
    },
    {
      name: "Ibrah Muluya",
      role: "Principal Operations Officer",
      shortBio:
        "A proactive Office Administrator with 8+ years of experience managing office operations and developing efficient administrative processes.",
      fullBio: [
        "Mr. Muluya holds a Diploma in Office Administration. He is a proactive Office Administrator at Gissat with 8+ years of experience managing office operations.",
        "He is adept at developing and maintaining detailed administrative and procedural processes that reduce redundancy, improve accuracy, and achieve organizational objectives.",
        "Ibra is also skilled at working effectively with different departments (Technical, Finance and Administration) to coordinate information and resolve problems.",
      ],
      specialties: [
        "Office Administration",
        "Process Development",
        "Cross-departmental Coordination",
        "Operational Efficiency",
      ],
    },
    {
      name: "Isaiah Cula",
      role: "Social Safeguards Specialist",
      shortBio:
        "Experienced specialist in field research, socio-economic surveys, stakeholder engagement, and social impact assessment processes.",
      fullBio: [
        "Isaiah is an experienced social safeguards specialist involved in conducting field research, socio-economic surveys, management and analysis of data, undertaking stakeholder engagements & communication processes, socio-economic baseline data analyses and conducting general social research for a variety of projects.",
        "This includes managing and coordinating the socio impact assessment processes and compiling SIA reports in line with the country's guidelines and legislation.",
        "He is knowledgeable and experienced in addressing issues covered by the World Bank's ESF and social safeguards policies or similar policies in other international finance institutions in complex and challenging settings, and across sectors.",
        "This includes experience with: social assessments and analyzing social risks & impacts for different population groups; involuntary resettlement in different socio-economic contexts and tenure systems; vulnerable groups' issues; coordination of transparent consultative and stakeholder engagement processes; grievance redress mechanisms, integration of relevant planning instruments such as Resettlement Action Plans in overall project planning and implementation; labor and working conditions; community health and safety; and cultural heritage.",
      ],
      specialties: [
        "Social Impact Assessment",
        "Stakeholder Engagement",
        "Resettlement Action Plans",
        "World Bank ESF Policies",
        "Socio-economic Surveys",
      ],
    },
  ];

  return (
    <section id="team" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Expert Team</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Meet the experienced professionals who drive Gissat's success. Our multidisciplinary team brings together
            decades of expertise in environmental consulting and sustainable development.
          </p>
        </div>

        {/* Team introduction */}
        <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg p-8 mb-16 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Users2 className="w-8 h-8 text-primary" />
            <h3 className="text-2xl font-bold text-foreground">Collaborative Excellence</h3>
          </div>
          <p className="text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Our team's collaborative spirit and diverse expertise enable us to tackle the most complex environmental
            challenges. Each member brings unique skills and perspectives, ensuring comprehensive solutions that meet
            our clients' specific needs while advancing environmental sustainability across Uganda.
          </p>
        </div>

        {/* Team members grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300">
              <CardHeader className="text-center pb-4">
                {/* Profile image placeholder */}
                <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <span className="text-2xl font-bold text-primary">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="text-primary font-medium text-sm">{member.role}</p>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">{member.shortBio}</p>

                {/* Specialties */}
                <div>
                  <p className="text-sm font-medium text-foreground mb-2">Specialties:</p>
                  <div className="flex flex-wrap gap-1">
                    {member.specialties.slice(0, 3).map((specialty, specialtyIndex) => (
                      <Badge key={specialtyIndex} variant="outline" className="text-xs">
                        {specialty}
                      </Badge>
                    ))}
                    {member.specialties.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{member.specialties.length - 3} more
                      </Badge>
                    )}
                  </div>
                </div>

                {/* Read More Dialog */}
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      variant="ghost"
                      className="w-full justify-between text-primary hover:text-primary/80 hover:bg-primary/10"
                    >
                      Read More
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                    <DialogHeader>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center">
                          <span className="text-xl font-bold text-primary">
                            {member.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </span>
                        </div>
                        <div>
                          <DialogTitle className="text-2xl">{member.name}</DialogTitle>
                          <p className="text-primary font-medium">{member.role}</p>
                        </div>
                      </div>
                    </DialogHeader>

                    <div className="space-y-6">
                      {/* Full Bio */}
                      <div className="space-y-3">
                        {member.fullBio.map((paragraph, pIndex) => (
                          <p key={pIndex} className="text-muted-foreground leading-relaxed text-sm">
                            {paragraph}
                          </p>
                        ))}
                      </div>

                      {/* All Specialties */}
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Areas of Expertise</h4>
                        <div className="flex flex-wrap gap-2">
                          {member.specialties.map((specialty, sIndex) => (
                            <Badge key={sIndex} variant="secondary" className="text-xs">
                              {specialty}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Memberships */}
                      {member.memberships && member.memberships.length > 0 && (
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">Professional Memberships</h4>
                          <ul className="space-y-1">
                            {member.memberships.map((membership, mIndex) => (
                              <li key={mIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                {membership}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </DialogContent>
                </Dialog>

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
          <h3 className="text-2xl font-bold text-foreground mb-4">Ready to Work with Our Experts?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Our team is ready to provide you with personalized environmental solutions. Contact us today to discuss how
            we can help your project succeed.
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

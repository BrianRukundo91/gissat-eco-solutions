import { useState, useRef } from "react";
import {
  Factory,
  Sprout,
  Radio,
  Utensils,
  FlaskConical,
  Recycle,
  Building2,
  Trees,
  X,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

// ─── Interfaces ───────────────────────────────────────────────────────────────

interface ProjectEntry {
  shortTitle: string;        // Shown in accordion header
  title: string;             // Full title (shown when expanded)
  client: string;
  serviceType: "ECA" | "ESIA";
  description: string[];     // Background paragraphs
  services: string[];        // Services rendered paragraphs
  highlights?: string[];     // Optional bullet points
  highlightsLabel?: string;  // Label for highlight list
}

interface Category {
  id: string;
  name: string;
  icon: React.ElementType;
  projects: ProjectEntry[];
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const categories: Category[] = [
  {
    id: "manufacturing",
    name: "Manufacturing of Non-Metallic Products",
    icon: Factory,
    projects: [
      {
        shortTitle: "Plastics Bottle Manufacturing Plant ESIA — PDL, Wakiso",
        title: "Environmental And Social Impact Assessment for the Proposed Development of a Plastics Bottle Manufacturing Plant on Plot 179 Block 101 in Wattuba Cell, Kasangati Town Council, Wakiso District",
        client: "Premier Distilleries Limited (PDL)",
        serviceType: "ESIA",
        description: [
          "Premier Distilleries Limited (PDL) experienced a successful increase in both the domestic market and entire East African region. They produced alcoholic beverages which needed sustainable and quality packaging. To this end, PDL planned to set up a second plastic manufacturing unit for their PET bottles and caps.",
          "The plant was strategically designed to address existing capacity limitations, cater to the growing market demand, and reflect the company's commitment to environmental sustainability. It was also intended to serve as a contingency, ensuring continuity of operations in case of any disruptions at the main plant.",
          "The plant was expected to have environmental impacts on certain aspects of the biophysical and socio-economic environment of the project area. As a result, Gissat was contracted to conduct an Environmental and Social Impact Assessment (ESIA) for both the construction and operation phases of the project.",
        ],
        services: [
          "The ESIA was conducted by Gissat, following the basic steps outlined in the National Environment (Environmental and Social Assessment) Regulations 2020 and National EIA Guidelines-1997.",
          "Field visits involving area experts were carried out to identify issues and possible project impacts through inspection, verification, observations and discussions with local residents and key informants. Secondary information was collected through published reports and interpretation of maps and photographs. Primary information was generated through questionnaires, checklists, measurements and consultations.",
          "The impacts of the project were assessed and generally grouped into those affecting water resources, air quality, flora and fauna, community and their economic activities, soil, vegetation, aesthetics and landscape, noise and human health.",
        ],
      },
      {
        shortTitle: "Brigade Plastics Manufacturing Plant ECA — BPL, Nansana",
        title: "Environmental Compliance Audit for Brigade Plastics Manufacturing Plant on Plot 346 Block 82 in Kiryowa Cell, Kiryamuli Ward, Gombe Division, Nansana Municipality, Wakiso District",
        client: "Brigade Plastics Limited (BPL)",
        serviceType: "ECA",
        description: [
          "Brigade Plastics Limited (BPL) is a Ugandan registered company established in 2020 to manufacture PET bottles and closures for Brigade Distilleries' alcoholic beverages, catering to both local and international markets. The company has experienced significant growth in sales, driven by increasing demand for its diverse product range across Uganda and the East African region.",
          "BPL is a subsidiary of Brigade Distilleries Limited (BDL) with a manufacturing plant spanning 0.22 acres, featuring key physical components such as the production block, utility section, packing area, pedestrian walkways and driveways, storm drainage systems and support services.",
          "Per the National Environment Act (Cap 181), the facility is classified under Schedule 5 which mandates Environmental and Social Impact Assessment (ESIA) and also necessitates the conduct of Environmental Compliance Audits (ECAs).",
        ],
        services: [
          "The environmental audit was conducted systematically by Gissat, focusing on verifying compliance with mitigation and monitoring measures outlined in the Environmental and Social Management Plan (ESMP). The assessment relied on auditors' professional judgment, objectivity and verification of findings.",
          "The audit primarily utilized existing information and reports, including those produced under Routine Performance Monitoring (RPM) with the facility manager and personal observations during the site visit. Spot checks in form of sampling were conducted to verify air and noise emissions, ensuring pollution control equipment functionality and compliance with the remedial action plan.",
          "The audit was conducted against applicable environmental policies, regulations and guidelines governing BPL operations at the site, commitments and conditions stipulated in the ESIA, environmental management plan commitments and corrective actions for non-conformances identified on site.",
        ],
      },
    ],
  },

  {
    id: "agricultural",
    name: "Agricultural Investments, Livestock, Range Management and Fisheries",
    icon: Sprout,
    projects: [
      {
        shortTitle: "Commercial Poultry Farm & Feed Mill ECA — SR Afrochicks, Luweero",
        title: "Environmental Compliance Audit for a Commercial Poultry Farm and Feed Mill Comprised in Plots 1508 and 1509 Block 1026 at Kikomeko Village, Nyimbwa Sub-County, Luweero District",
        client: "SR Afrochicks & Breeders Limited (SR)",
        serviceType: "ECA",
        description: [
          "SR Afrochicks & Breeders Limited owns and operates a commercial poultry and feed mill comprised in Plots 1508 and 1509 Block 1026 at Kikomeko Village, Nyimbwa Sub-County, Luweero District. The facility constitutes a commercial broiler farm that includes four production units (sheds) of capacity 25,000 birds each, and a feed mill with a raw material storage section, main feed processing section and a finished product section.",
          "The facility commenced operations in 2021 after acquisition of all necessary regulatory permits pertaining to this type of development project in Uganda. In compliance with the requirements of the National Environment (Audit) Regulations, 2020 and the National Environment Act (Cap181), an environmental audit of the commercial poultry broiler farm and chicken houses was undertaken between the months of July to November with simultaneous monitoring.",
        ],
        services: [
          "Gissat conducted the audit in line with the National Environment Management Authority (NEMA) guidelines and included standard steps of pre-audit, on-site audit, reporting and post audit. The Project Team reviewed relevant documents and legislation, conducted stakeholder interviews, undertook comprehensive site inspections and carried out a limited physical sampling program.",
          "The environmental audit used primarily existing information and reports produced by SR, interviews with the farm management, and personal observation at the site. Spot checks in the form of samples were done with regard to noise emission and to verify that pollution control equipment onsite was functional and in compliance with requirements of the remedial action plan.",
          "The methodology adopted by the audit team for site investigation included discussions with senior and technical management, a walk-through of the facility and a review of relevant documentation. Data was collected through utilization of questionnaires, consultations with key informants, followed by an assessment of site findings and evaluation of risks associated with the operations at the facility.",
        ],
      },
      {
        shortTitle: "Wastewater Treatment Plant ESIA — SR Afrochicks, Luweero",
        title: "Environmental And Social Impact Assessment for the Wastewater Treatment Plant on Plot 1322 Block 1026 Kikomeko Village, Nakatonya Parish, Nyimbwa Sub-County, Luweero District",
        client: "SR Afrochicks and Breeders Ltd (SR)",
        serviceType: "ESIA",
        description: [
          "SR Afrochicks and Breeders Ltd was incorporated in November 2013 as an agro-business with focus on production of broiler chicks, table eggs, and concentrates, premixes and other poultry related products for both local and regional markets. SR has scaled its operations through establishment of a number of facilities to sustain high demand for the company's products.",
          "SR established a poultry slaughterhouse at the poultry farm in Kikomeko village, Luweero District. The operation of this slaughter house generated significant volumes of wastewater that required treatment before making its way to the natural environment. For this reason, a site close to the slaughter was identified for establishment of an effluent treatment plant.",
          "SR Afrochicks commissioned Gissat to review available environmental and social documentation for compliance with applicable national and international requirements and to conduct the Environmental and Social Impact Assessment (ESIA) of the proposed effluent treatment plant.",
        ],
        services: [
          "The overall objective of the study was to carry out an assessment of the installation and operation of the proposed effluent treatment plant to determine whether or not the construction, operation and associated activities would have any adverse impacts on the environment with due consideration of biophysical, social, cultural, legal and economic aspects.",
          "The assessment methodology employed comprised desktop studies to review literature on environmental impacts emanating from construction and operation of the proposed project. Field investigations were undertaken to establish baseline physical, biological and socio-economic environmental aspects.",
          "As part of the ESIA process, several key stakeholders were engaged to inform both the study and project. Stakeholders were consulted based on their institutional mandates which govern the project and its activities, and members of the general public who are neighbours to the project.",
        ],
      },
      {
        shortTitle: "Broiler Poultry Farm ECA — SR Afrochicks, Mityana",
        title: "Environmental Compliance Audit for Broiler Poultry Farm on Plot 358 Block 11 in Kasiba Village, Kiwawu Parish, Malangala Subcounty, Mityana District",
        client: "SR Afrochicks & Breeders Limited (SR)",
        serviceType: "ECA",
        description: [
          "SR Afrochicks & Breeders Limited's poultry farm in Kasiba was acquired in 2014 under a lease and commenced operations in 2016. The farm underwent transformation from a small scale poultry project into a commercial broiler farming operation adopting best practices in design and management to augment the domestic supply of poultry products.",
          "The facility was subjected to a mandatory Environmental And Social Impact Assessment study as required by the National Environment Act, 2019. SR was compelled to undertake an Environmental Compliance Audit to fulfill the requirements of the certificate of approval as well as the National Environment Act. SR contracted Gissat to conduct the audit from March 2024 to July 2024.",
        ],
        services: [
          "The environmental audit was conducted according to systematic procedures focused on verifying if the mitigation and monitoring measures specified in the ESMP conform to the ongoing and planned arrangements. The assessment relied on professional judgment of the auditors, objectivity and physical verification of findings.",
          "The audit used primarily existing information and reports produced by SR with the farm manager and personal observation at the site. Spot checks were done with regard to air and noise emission to verify that pollution control equipment onsite were functional and in compliance with requirements of the remedial action plan.",
          "The audit criteria was compliance with policies, laws, guidelines, standards and permitting requirements and approval conditions relevant to the farm's operations. Best practices relevant to the sector were triggered during the audit. The audit findings were prioritized as compliant or non-compliant to assist SR in implementing corrective actions and improvement opportunities.",
        ],
      },
    ],
  },

  {
    id: "communications",
    name: "Communications Facilities",
    icon: Radio,
    projects: [
      {
        shortTitle: "ATC Kaserem Cell Site ECA — ATC Uganda, Kapchorwa",
        title: "Environmental Compliance Audit for the ATC Kaserem Cell Site in Bonyo Village, Kaptano Parish, Kaserem Subcounty, Kapchorwa District",
        client: "ATC Uganda Limited",
        serviceType: "ECA",
        description: [
          "ATC Uganda Limited builds and maintains a network of communications towers, leasing space on the towers to multiple providers of Mobile Communications (GSM), fixed wireless and wireless services under long term lease agreements.",
          "ATC Uganda Limited owns and operates a cell site located in Kaserem Subcounty, Kapchorwa District. The site commenced operations in 2007 after acquisition of all necessary regulatory permits pertaining to the telecommunications sector in Uganda. As per the requirements of Section 126 (2) of the National Environment Act (Cap181), an environmental compliance audit was conducted to prevent harm to human health or the environment.",
          "An environmental compliance audit was undertaken by Gissat to ensure compliance of the cell site with design criteria and national standards, assess its operation status and identify measures to address any gaps.",
        ],
        services: [
          "The objectives of the audit were to report on the level of compliance with the conditions of the environmental authorization, describe the baseline conditions existing at the cell site, assess any new impacts resulting from operation of the cell site, recommend appropriate monitoring and review programs and submit recommendations to rectify the registered non-conformances.",
          "The audit included review of the adequacy of any approved strategy, plan or program, systematic examination of the present environmental situation within the project area, identification of opportunities for improved environmental management and consultations with relevant lead agencies and the host community.",
        ],
        highlights: [
          "Lattice tower",
          "BTS units",
          "Antennas",
          "Cabin shelter",
          "Palisade",
          "Navigation lights",
          "Alternative power source",
        ],
        highlightsLabel: "Audited Facilities",
      },
    ],
  },

  {
    id: "food-beverage",
    name: "Food and Beverage Industry",
    icon: Utensils,
    projects: [
      {
        shortTitle: "Alcohol Spirits Blending Plant Expansion ESIA — BDL, Nansana",
        title: "Environmental And Social Impact Assessment for the Proposed Expansion of Alcohol Spirits Blending Plant on Plot 346 Block 82 Kiryowa Cell, Kiryamuli Ward, Gombe Division, Nansana Municipality, Wakiso District",
        client: "Brigade Distilleries Limited (BDL)",
        serviceType: "ESIA",
        description: [
          "Brigade Distilleries Limited (BDL) which initially operated a small-fuel and spirits plant proposed to enhance the monthly capacity from 800m³ to 1200m³ without process changes by installing additional machinery in the existing plant.",
          "The expansion of the spirits blending plant was a viable investment offering numerous benefits for economic growth, job creation and social development. This was justified by the growing demand for spirits, diversification of products, and the need for best environmental practices.",
          "The objective of the environmental assessment study was to assess impacts of the proposed development in relation to environmental aspects i.e. physical, biological and socio-economic environment, aimed at influencing the protection and management of the development with the surrounding area.",
        ],
        services: [
          "An environmental assessment study was conducted by Gissat to identify and analyse impacts of the proposed project on the natural and socio-economic environment, evaluate impacts on infrastructure as well as social amenities and predict any effects on sensitive ecosystems.",
          "The assessment methodology consisted of desktop studies to review literature on environmental impacts emanating from construction and operation of the proposed project. Field investigations were undertaken to establish baseline physical, biological and socio-economic environmental aspects.",
          "Baseline data for the study area was collected using a combination of site reconnaissance, desktop research, analysis of maps and plans, review of reports of related projects, public consultations and specialist studies inter alia.",
        ],
      },
      {
        shortTitle: "Spirits Blending & Production Factory ECA — BDL, Nansana",
        title: "Environmental Compliance Audit for Spirits Blending and Production Factory on Plot 346 Block 82 in Kiryowa – Kirolo Cell, Kiryamuli Ward, Gombe Division, Nansana Municipality, Wakiso District",
        client: "Brigade Distilleries Limited (BDL)",
        serviceType: "ECA",
        description: [
          "Brigade Distilleries Limited (BDL) owns and operates a spirits and production factory on plot 346 block 82 at Kiryowa - Kiryamuli Ward, Gombe Division in Nansana Municipality, Wakiso District. Facility operations commenced upon acquisition of all regulatory permits pertaining to this kind of development. The facility comprises the main production complex, the block and ENA storage area.",
          "An environmental compliance audit was conducted by Gissat to fulfil requirements of the National Environment (Environmental and Social Assessment) Regulations, 2020 and to support the extension of the Environmental Impact Assessment as required by NEMA. The audit aimed to assess the project's compliance with applicable environmental regulations and identify areas for improvement to ensure continued environmental sustainability.",
        ],
        services: [
          "The audit procedures followed conformed to Uganda's statutory audit guidelines and included the customary steps of pre-audit, on-site audit and post audit in line with best practice audit procedures. Audit criteria were derived from a comprehensive review of a suite of documents, including operator availed documents pertinent to a thorough audit of the facility.",
          "Physical site inspections enabled the audit team to assess the efficiency of operational strategies relevant to the environmental and social performance of the facility. On-site investigations included discussions with the Managing Director, General Manager and line managers, a walk-through audit of the facility and a review of relevant documentation.",
          "The audit scope entailed site intrusive investigations to assess environmental impacts arising from the facility's operations, including an evaluation of operation and maintenance schedules, general social impact assessment and risk assessment in line with the requirements of the National Environment (Audit) Regulations, 2020.",
        ],
      },
      {
        shortTitle: "1500 TCD Sugar Mill ECA — PDL, Kyankwanzi",
        title: "Environmental Compliance Audit for a 1500 TCD Sugar Mill and Associated Infrastructure on Plot 3, Block 823 in Kalangala Village, Kiryanongo Parish, Kyankwanzi District",
        client: "Premier Distilleries Limited (PDL)",
        serviceType: "ECA",
        description: [
          "Premier Distilleries Limited (PDL) owns and operates a 1500 TCD sugar mill and associated infrastructure on Plot 3, Block 823, Kalangala Village, Kiryanongo Parish, Kyankwanzi District. The sugar mill project entailed the establishment of a 1500 tons/day sugar production facility, accompanied by a 9.2 MW power generation plant. Approximately 3.2 MW of power would be used on-site while 6 MW would be fed into the national grid.",
          "In compliance with the National Environment Act, Cap 181, the operation of a sugar mill and ancillary infrastructure is a scheduled activity requiring annual environmental compliance auditing and monitoring as part of project implementation. The first audit of the project, due on 30th March 2024, was conducted by Gissat, contracted by PDL for the purpose.",
        ],
        services: [
          "The environmental audit was conducted systematically by focusing on verifying compliance with mitigation and monitoring measures outlined in the Environmental and Social Management Plan (ESMP). A detailed analysis of the policy, legislative and regulatory requirements governing environmental management and operations of the project was conducted.",
          "The methodology adopted for site investigation included discussions with senior and technical management, a walk-through of the facility and a review of relevant documentation provided by PDL. Data was collected through utilization of questionnaires, consultations with key informants including staff and neighbouring residents.",
          "Stakeholders were consulted and an overview of the project operations was provided to the concerned agencies and the community. The audit team formulated recommendations for corrective measures to reduce impacts to levels as low as reasonably possible.",
        ],
      },
    ],
  },

  {
    id: "chemical",
    name: "Chemical Industry",
    icon: FlaskConical,
    projects: [
      {
        shortTitle: "Hybrid Steam Boiler ESIA — Revive Pharma, Mukono",
        title: "Environmental And Social Impact Assessment for the Proposed Installation of a Hybrid Steam Boiler for the Pharmaceutical Manufacturing Plant on Plot 247, Block 191 in Kasenge \"B\" Village, Kasenge Parish, Nama Subcounty, Mukono District",
        client: "Revive Pharma Limited (RPL)",
        serviceType: "ESIA",
        description: [
          "Revive Pharma Limited (RPL) is among the producers of efficacious, safe, good quality and affordable human health and other health supplies whilst continually striving to achieve long-term sustainable growth and profitability.",
          "RPL intended to install a hybrid steam boiler of capacity 2000 kilograms per hour of steam mainly powered by residual waste. This aimed at improving environmental performance, increasing resource efficiency, lowering energy consumption, and reducing overall operational costs at the drug manufacturing facility.",
          "As per Section 19 of the National Environment Act (Cap181) and the National Environment (Environmental and Social Assessment) Regulations 2020, Gissat was contracted to conduct an Environmental and Social Impact Assessment (ESIA) prior to installation of the boiler.",
        ],
        services: [
          "The objective of the ESIA was to conduct a thorough analysis of the current environmental conditions within the project area to assess the potential adverse environmental impacts of the proposed project on the surrounding environment.",
          "The methodology used involved review of RPL project documents, ambient air quality assessment, ambient noise levels, proposed project design report, the Mukono District Development Plan and maps. Field investigations were also undertaken to compile relevant baseline biophysical and socio-economic information about the study area.",
          "A number of alternatives were identified and analysed during the project's design phase including no-project scenario, site alternative, technology alternatives, as well as undertaking the initial development plan. The project development alternative was analysed against land use, proximity to main road and amenities, landscape and availability of land.",
        ],
      },
      {
        shortTitle: "Pharmaceutical Manufacturing Plant ECA — Revive Pharma, Mukono",
        title: "Environmental Compliance Audit of the Pharmaceutical Manufacturing Plant on Plot 274, Block 191 in Kasenge B Village, Kasenge Parish, Nama Sub County, Mukono District",
        client: "Revive Pharma Limited (RPL)",
        serviceType: "ECA",
        description: [
          "Revive Pharma Limited (RPL) was incorporated in April 2017 as a limited growth-oriented pharmaceutical company, designed to produce and sell human drugs and related products both locally and internationally. The facility is fully functional and licensed to produce a variety of drugs such as Revidol, Cotrev, Regyl and Orev inter alia.",
          "The pharmaceutical manufacturing plant comprises key structural elements including a production block, parking lot, walkways and driveways, effluent treatment section, storm water drainage structures and support services. RPL is listed under Schedule 5, category 14(d) of the National Environment Act, 2019 and is subject to annual environmental audits.",
          "The audit covered the period from June 2024 when RPL contracted Gissat for the assignment to August 2024, considering works undertaken during this time and commitments/requirements relevant during this time.",
        ],
        services: [
          "The environmental audit was conducted according to systematic procedures focused on verifying if the mitigation and monitoring measures specified in the ESMP conformed to the ongoing and planned arrangements. The assessment relied on professional judgment of the auditors, objectivity and physical verification of findings.",
          "The audit used primarily existing information and reports produced by RPL with the facility manager and personal observation at the site. Spot checks in the form of samples were done with regard to air and noise emissions to verify that pollution control equipment onsite was functional and in compliance with requirements of the remedial action plan.",
          "The audit criteria was compliance with the policies, laws, guidelines, standards, and permitting requirements and/or approval conditions relevant to the plant's operations. The audit findings were categorized as compliant or non-compliant to assist RPL in implementing corrective actions and improvement opportunities.",
        ],
      },
    ],
  },

  {
    id: "waste",
    name: "Waste Management Facilities",
    icon: Recycle,
    projects: [
      {
        shortTitle: "Wastewater Treatment Plant ECA — Revive Pharma, Mukono",
        title: "Environmental Compliance Audit for the Wastewater Treatment Plant at Revive Pharma Limited on Plot 247 Block 191 in Kasenge B Village, Kasenge Parish, Mukono District",
        client: "Revive Pharma Limited (RPL)",
        serviceType: "ECA",
        description: [
          "Revive Pharma Limited (RPL) is a private limited growth-oriented company licensed to produce and market human and related products both locally and internationally. In 2018, RPL was granted environmental approval for establishment of its pharmaceutical manufacturing plant, and in February 2022, approval was acquired for establishment of a Wastewater Treatment Plant (WWTP) on RPL premises.",
          "The WWTP was initially operated on trial basis since June 2024 with the aim of thorough monitoring of the plant's performance and fine-tuning the treatment processes until the plant acquired an effluent discharge permit from relevant authorities.",
          "RPL contracted Gissat to undertake an environmental compliance audit covering the period from June 2024 to February 2025, considering works undertaken during this time and commitments/requirements relevant to the facility. The audit reviewed compliance with ESMP requirements, conditions in the EIA approval certificate as well as national laws and regulations.",
        ],
        services: [
          "The environmental audit process followed standard auditing procedures adjusted to the specific requirements of the particular audit and the operator's needs. The audit followed systematic procedures and concentrated on assessing the alignment of the mitigation and monitoring measures in the ESMP with the ongoing and planned arrangements.",
          "The audit primarily relied on existing information and reports generated by RPL, supplemented by input from the facility manager and RPL study team's physical observations at the site. Spot checks in the form of samples were done with regard to air, noise emissions and effluent quality to verify that pollution control equipment onsite was functional and in compliance with the requirements of the facility's approvals/permits.",
          "The audit criteria were mainly derived from legal and regulatory requirements for facilities of the kind, the plant's ESMP and environmental management system against which the overall environmental performance was assessed. The ESMP provided a functional baseline against which the performance evaluation was conducted.",
        ],
      },
    ],
  },

  {
    id: "housing",
    name: "Housing and Urban Development",
    icon: Building2,
    projects: [
      {
        shortTitle: "Children's Surgical Hospital ECA — EMERGENCY, Entebbe",
        title: "Environmental Compliance Audit for the Children's Surgical Hospital on Plot 120-122 Bishop Dunstan Nsubuga Road, Banga-Nakiwogo, Entebbe Municipality, Wakiso District",
        client: "EMERGENCY",
        serviceType: "ECA",
        description: [
          "EMERGENCY is an independent, neutral international non-governmental organization founded in Milan, Italy in 1994. It provides quality medical and surgical care to victims of war, land mines and poverty among others. Between 1994 and 2023, over 13 million people in 20 countries benefitted from free medical treatment from EMERGENCY.",
          "To strengthen health sector capacity and infrastructure in Uganda and nearby countries, EMERGENCY established the Children's Surgical Hospital in Entebbe. The facility prominently conducts elective surgery including but not limited to birth duct illnesses, cleft lip, urological and gynaecological conditions.",
          "Gissat was contracted to undertake an environmental compliance audit to assess compliance with the requirements and provisions of the National Environment Act (Cap 181) as well as other laws and regulations relevant to facility operations.",
        ],
        services: [
          "The audit covered a three-month period from July to September 2024 and considered facility operations undertaken during this time and commitments/requirements relevant to the facility. The audit process was phased into pre-audit, on-site audit, reporting and post-audit.",
          "The audit mainly focused on hospital departments, facility access and control, and other facility components such as warehousing, solid waste storage section, wastewater management installations, storm water drainage, hospital vehicle fleet parking area, and power supply inter alia.",
          "The audit criteria were mainly derived from the facility's ESMP and Environmental Management System. The ESMP provided a functional baseline against which the performance evaluation was conducted. Observed non-conformances were duly highlighted and a corrective action plan was incorporated to address the identified issues of non-compliance.",
        ],
      },
      {
        shortTitle: "Ambrosoli International School Classroom Block ESIA — Nakawa",
        title: "Environmental And Social Impact Assessment for the Proposed New Classroom Block at Ambrosoli International School, Plot 8 Binayomba Road, Bugolobi Bungalows II Village, Bugolobi Parish, Nakawa Division",
        client: "Ambrosoli International School (AIS)",
        serviceType: "ESIA",
        description: [
          "Ambrosoli International School (AIS) is an education institution with decades of experience in offering a comprehensive program for students from nursery through primary, accredited by the International Primary Curriculum (IPC) and the Council of International Schools (CIS).",
          "AIS prioritised the remodelling of current buildings and construction of a new classroom block to provide adequate space for personalised instruction and group activities accommodating different learning styles for all children including those with special educational needs.",
          "An environmental and social impact assessment was undertaken in conformity with the National Environment Act, 2019 for the design, operation and decommissioning of the proposed classroom block.",
        ],
        services: [
          "GISSAT undertook the project ESIA to identify and analyse impacts of the proposed development on the natural and socio-cultural environment. The study also aimed to assess impacts on infrastructure and social amenities such as traffic, drainage and water supply inter alia.",
          "The methodology used consisted of desktop studies to review literature as well as field investigations. Baseline data for the study area was collected using a combination of site reconnaissance, analysis of maps and plans, review of reports of related projects, public consultation, desktop research and specialist studies.",
        ],
        highlights: [
          "Water resources",
          "Air quality",
          "Flora and fauna",
          "Community and their economic activities",
          "Soil",
          "Vegetation",
          "Aesthetics and landscape",
          "Noise",
          "Human health",
        ],
        highlightsLabel: "Key Assessment Areas",
      },
      {
        shortTitle: "Mpirigiti Rural Training Centre ECA — ISU-UP, Kamuli",
        title: "Environmental Compliance Audit of Mpirigiti Rural Training Centre in Buyomba Zone, Sabawali Ward, Northern Division, Kamuli Municipality, Kamuli District",
        client: "Iowa State University-Uganda Program (ISU-UP)",
        serviceType: "ECA",
        description: [
          "Iowa State University-Uganda Program (ISU-UP) is a registered non-governmental organization that operates Mpirigiti Training Centre (MRTC) as the operational hub for several outreach programs primarily aimed at promoting service for students of Iowa State University and Makerere University.",
          "The Training Centre is a multi-purpose facility serving as a hub for Iowa State and Makerere University students, a community training and demonstration center, and meeting venue inter alia.",
          "In compliance with Regulation 26 of the National Environment (Environmental and Social Assessment) Regulations, 2020, Gissat was contracted to undertake an environmental compliance audit pursuant to the extension of the validity period for the facility's certificate of approval.",
        ],
        services: [
          "The audit procedures followed conformed to Uganda's statutory environmental audit guidelines, and included the customary steps of pre-audit, on-site audit and post audit, in line with best practice audit procedures.",
          "Audit criteria were derived from a comprehensive review of a suite of documents, including operator-availed documents pertinent to a thorough audit of the facility. Physical site inspections enabled the audit team to assess the efficiency of a number of operational strategies relevant to the environmental and social performance of the facility.",
          "The audit scope entailed site intrusive investigations to assess environmental impacts arising from the facility's operations. The scope also included an evaluation of operation and maintenance schedules at the facility so as to ascertain compliance to local legislation, general social impact assessment and health and risk assessment, in line with the requirements of the National Environment (Audit) Regulations, 2020.",
        ],
      },
    ],
  },

  {
    id: "wood",
    name: "Wood Industries",
    icon: Trees,
    projects: [
      {
        shortTitle: "Hybrid Steam Boiler ESIA — PDL Cardboard Factory, Wakiso",
        title: "Environmental And Social Impact Assessment for the Proposed Installation of a Hybrid Steam Boiler for the Corrugated Cardboard Boxes Manufacturing Factory on Plot 179, Block 101, Watuuba Cell, Kasangati Town Council, Wakiso District",
        client: "Premier Distilleries Limited (PDL)",
        serviceType: "ESIA",
        description: [
          "Premier Distilleries Limited (PDL) proposed to install a hybrid steam boiler of capacity 4000Kg/h in the underdeveloped section of the property northeast of the corrugated cardboard boxes manufacturing factory.",
          "The primary goal of this installation was to generate steam for drying and heating during the manufacture of corrugated cardboard boxes, to improve environmental performance, increase resource use efficiency, lower energy consumption and reduce overall operational costs.",
          "One of the objectives of the Environmental And Social Impact Assessment was to conduct a thorough analysis of the current physical conditions within the project area to assess the baseline conditions and the adverse environmental impacts of the proposed project on the surrounding environment.",
        ],
        services: [
          "GISSAT conducted the ESIA to determine the comparability of the proposed development with the neighboring land uses, identify and evaluate the significant environmental impacts, and assess and evaluate the associated environmental costs and benefits.",
          "Field investigations were undertaken to establish baseline physical, biological, and socioeconomic environmental aspects. Baseline data for the study area was collected using a combination of surveys, site reconnaissance, desktop research, analysis of maps and plans, review of reports and background documents, public consultations and field studies inter alia.",
          "A number of alternatives were identified and analysed including no-project scenario, site alternative, technology alternatives, and undertaking of the current development plan. The no-project alternative was evaluated based on both environmental and socio-economic costs and benefits.",
        ],
      },
    ],
  },
];

// ─── Helper: service badge style ─────────────────────────────────────────────

const serviceBadgeClass = (type: "ECA" | "ESIA") =>
  type === "ECA"
    ? "bg-primary/10 text-primary border border-primary/20"
    : "bg-accent/15 text-accent border border-accent/20";

const serviceBadgeLabel = (type: "ECA" | "ESIA") =>
  type === "ECA" ? "Compliance Audit" : "Impact Assessment";

// ─── Component ────────────────────────────────────────────────────────────────

const ProjectCategories = () => {
  const [activeCategoryId, setActiveCategoryId] = useState<string | null>(null);
  const [activeProjectIdx, setActiveProjectIdx] = useState<number | null>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const activeCategory = categories.find((c) => c.id === activeCategoryId);

  const handleCategorySelect = (id: string) => {
    if (activeCategoryId === id) {
      setActiveCategoryId(null);
      setActiveProjectIdx(null);
    } else {
      setActiveCategoryId(id);
      setActiveProjectIdx(null);
      setTimeout(() => {
        panelRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }, 150);
    }
  };

  const handleProjectToggle = (idx: number) => {
    setActiveProjectIdx(activeProjectIdx === idx ? null : idx);
  };

  return (
    <section className="py-14 sm:py-20 bg-gradient-to-b from-secondary/40 via-secondary/20 to-background border-b border-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="text-center mb-10 sm:mb-14">
          <span className="inline-block text-[11px] font-bold tracking-[0.25em] text-primary/80 uppercase mb-3">
            Project Portfolio
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3">
            Projects by Sector
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Explore our environmental consulting work across Uganda's key industries.
            Select a sector to discover our experience.
          </p>
        </div>

        {/* Category cards */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8">
          {categories.map((category) => {
            const Icon = category.icon;
            const isActive = activeCategoryId === category.id;
            const count = category.projects.length;

            return (
              <button
                key={category.id}
                onClick={() => handleCategorySelect(category.id)}
                aria-pressed={isActive}
                className={[
                  "group flex flex-col items-center gap-2.5 px-4 py-5 rounded-2xl border-2 text-center",
                  "transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
                  "w-[calc(50%-6px)] sm:w-44 lg:w-48",
                  isActive
                    ? "bg-primary border-primary shadow-xl shadow-primary/30 scale-[1.03] -translate-y-0.5"
                    : "bg-card/80 border-border hover:border-primary/50 hover:shadow-md hover:shadow-primary/10 hover:-translate-y-0.5 hover:bg-primary/5",
                ].join(" ")}
              >
                <div className={[
                  "p-3 rounded-xl transition-all duration-300",
                  isActive ? "bg-white/20" : "bg-primary/10 group-hover:bg-primary/20",
                ].join(" ")}>
                  <Icon className={`w-5 h-5 transition-colors duration-300 ${isActive ? "text-white" : "text-primary"}`} />
                </div>

                <span className={[
                  "text-xs sm:text-sm font-semibold leading-snug transition-colors duration-300",
                  isActive ? "text-white" : "text-foreground/90",
                ].join(" ")}>
                  {category.name}
                </span>

                <span className={[
                  "text-[10px] font-bold tracking-wide px-2 py-0.5 rounded-full transition-colors duration-300",
                  isActive ? "bg-white/20 text-white/80" : "bg-primary/10 text-primary/70",
                ].join(" ")}>
                  {count} {count === 1 ? "project" : "projects"}
                </span>
              </button>
            );
          })}
        </div>

        {/* ── Expanded Category Panel ── */}
        {activeCategory && (
          <div
            ref={panelRef}
            className="bg-card rounded-2xl border border-border/80 shadow-lg overflow-hidden"
            style={{ animation: "summaryReveal 0.3s cubic-bezier(0.16, 1, 0.3, 1) both" }}
          >
            {/* Panel header */}
            <div className="flex items-start gap-4 px-6 sm:px-8 py-5 bg-gradient-to-r from-primary/8 to-primary/3 border-b border-border/60">
              <div className="p-3 bg-primary/15 rounded-xl flex-shrink-0 mt-0.5">
                <activeCategory.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[10px] font-bold tracking-[0.2em] text-primary/70 uppercase mb-1">
                  Project Category
                </p>
                <h3 className="text-lg sm:text-xl font-bold text-foreground leading-snug">
                  {activeCategory.name}
                </h3>
                <p className="text-xs text-muted-foreground mt-1">
                  {activeCategory.projects.length} {activeCategory.projects.length === 1 ? "project" : "projects"} in this sector
                </p>
              </div>
              <button
                onClick={() => { setActiveCategoryId(null); setActiveProjectIdx(null); }}
                aria-label="Close category panel"
                className="p-2 rounded-lg hover:bg-primary/10 text-muted-foreground hover:text-primary transition-colors flex-shrink-0"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Project accordion list */}
            <div className="divide-y divide-border/50">
              {activeCategory.projects.map((project, idx) => {
                const isOpen = activeProjectIdx === idx;
                return (
                  <div key={idx}>
                    {/* Accordion header (always visible) */}
                    <button
                      onClick={() => handleProjectToggle(idx)}
                      className={[
                        "w-full flex items-start gap-4 px-6 sm:px-8 py-5 text-left transition-colors duration-200",
                        isOpen ? "bg-primary/5" : "hover:bg-muted/40",
                      ].join(" ")}
                    >
                      {/* Project number */}
                      <span className={[
                        "flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold mt-0.5 transition-colors duration-200",
                        isOpen ? "bg-primary text-white" : "bg-primary/10 text-primary",
                      ].join(" ")}>
                        {String(idx + 1).padStart(2, "0")}
                      </span>

                      {/* Title + meta */}
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-foreground leading-snug mb-1.5">
                          {project.shortTitle}
                        </p>
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-xs text-muted-foreground">{project.client}</span>
                          <span className="text-muted-foreground/30 text-xs">•</span>
                          <span className={`text-[10px] font-bold tracking-wide px-2 py-0.5 rounded-full ${serviceBadgeClass(project.serviceType)}`}>
                            {serviceBadgeLabel(project.serviceType)}
                          </span>
                        </div>
                      </div>

                      {/* Chevron */}
                      <span className={`flex-shrink-0 mt-0.5 transition-colors duration-200 ${isOpen ? "text-primary" : "text-muted-foreground/50"}`}>
                        {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </span>
                    </button>

                    {/* Accordion body (expanded content) */}
                    {isOpen && (
                      <div
                        className="px-6 sm:px-8 pb-7 pt-1"
                        style={{ animation: "summaryReveal 0.25s ease both" }}
                      >
                        {/* Full project title */}
                        <p className="text-xs font-semibold text-primary/80 leading-relaxed mb-5 pl-11 border-l-2 border-primary/30 italic">
                          {project.title}
                        </p>

                        {/* Two-column layout */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                          {/* Background */}
                          <div>
                            <h5 className="text-[10px] font-bold tracking-[0.2em] text-primary uppercase mb-3 flex items-center gap-2">
                              <span className="w-4 h-px bg-primary inline-block" />
                              Project Background
                            </h5>
                            <div className="space-y-3">
                              {project.description.map((para, i) => (
                                <p key={i} className="text-sm text-muted-foreground leading-relaxed">
                                  {para}
                                </p>
                              ))}
                            </div>
                          </div>

                          {/* Services Rendered */}
                          <div>
                            <h5 className="text-[10px] font-bold tracking-[0.2em] text-primary uppercase mb-3 flex items-center gap-2">
                              <span className="w-4 h-px bg-primary inline-block" />
                              Services Rendered
                            </h5>
                            <div className="space-y-3">
                              {project.services.map((para, i) => (
                                <p key={i} className="text-sm text-muted-foreground leading-relaxed">
                                  {para}
                                </p>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Highlights (full width, below columns) */}
                        {project.highlights && (
                          <div className="mt-6 pt-5 border-t border-border/50">
                            <h5 className="text-[10px] font-bold tracking-[0.2em] text-primary uppercase mb-3 flex items-center gap-2">
                              <span className="w-4 h-px bg-primary inline-block" />
                              {project.highlightsLabel ?? "Key Areas"}
                            </h5>
                            <div className="flex flex-wrap gap-2">
                              {project.highlights.map((item, i) => (
                                <span
                                  key={i}
                                  className="px-3 py-1 rounded-full bg-primary/8 text-primary text-xs font-medium border border-primary/15"
                                >
                                  {item}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Divider into Featured Projects */}
        <div className="mt-14 sm:mt-20 flex items-center gap-4">
          <div className="flex-1 h-px bg-border/60" />
          <span className="text-xs font-bold tracking-[0.2em] text-muted-foreground/60 uppercase px-2">
            Featured Projects
          </span>
          <div className="flex-1 h-px bg-border/60" />
        </div>
      </div>

      <style>{`
        @keyframes summaryReveal {
          from { opacity: 0; transform: translateY(-8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default ProjectCategories;

import ClientLogos1 from "@/assets/clients/client_logos_1.png";
import ClientLogos2 from "@/assets/clients/client_logos_2.png";

const Clients = () => {
  return (
    <section id="clients" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Trusted by Leading Organizations
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            For over 30 years, we've partnered with government agencies, multinational corporations, 
            and international organizations to deliver exceptional environmental solutions.
          </p>
        </div>

        {/* Client logos display */}
        <div className="space-y-12">
          {/* First row of logos */}
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <img 
              src={ClientLogos1} 
              alt="Client logos including Uganda Wildlife Safaris, Premier Distilleries, Century Bottling, Uganda Christian University, National Planning Authority, Jameaster Investments, MackOil, Studio FH Architects, Balaji, Petro, UWA, UNHCR, KM, Madhvani Group, Oryx Energies, Ministry of Energy, Sebalu & Lule Advocates, Rwenzori Bottling"
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Second row of logos */}
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <img 
              src={ClientLogos2} 
              alt="Client logos including Ntake Group, Imani Milele, Yo Kuku, Cherish Uganda, USAID, AEC Uganda, Fine Spinners, Great Lakes Pharmaceuticals, Fresh Perch, MOGAS, Schlumberger, Luuka Plastics, Kids of Africa, S. Alam Group, Brigade Distilleries, UNICEF, Hashi Energy, Ugarose Flowers"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Join Our Growing List of Satisfied Clients
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Ready to experience the same level of professional service and environmental expertise? 
            Contact us today to discuss your project requirements.
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-md font-medium transition-colors duration-200"
          >
            Become Our Next Success Story
          </a>
        </div>
      </div>
    </section>
  );
};

export default Clients;
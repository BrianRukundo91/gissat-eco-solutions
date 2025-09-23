import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Quote, Star, Building2, Landmark, Factory } from "lucide-react";

const Clients = () => {
  const testimonials = [
    {
      quote: "Gissat's environmental expertise was instrumental in helping us achieve ISO 14001 certification. Their team's professionalism and attention to detail exceeded our expectations.",
      author: "Patricia Namugga",
      position: "Environmental Manager",
      company: "Uganda Breweries Limited",
      rating: 5,
      sector: "Manufacturing"
    },
    {
      quote: "The comprehensive EIA conducted by Gissat for our mining project was exemplary. They identified critical environmental factors and provided practical solutions that ensured project success.",
      author: "Robert Kiprotich",
      position: "Operations Director",
      company: "Tororo Cement Limited",
      rating: 5,
      sector: "Mining & Industrial"
    },
    {
      quote: "Working with Gissat on our infrastructure development project was a game-changer. Their deep understanding of Uganda's environmental regulations saved us months of potential delays.",
      author: "Sarah Achieng",
      position: "Project Manager",
      company: "UNRA - Uganda National Roads Authority",
      rating: 5,
      sector: "Government/Infrastructure"
    }
  ];

  const clientLogos = [
    { name: "Ministry of Water and Environment", sector: "Government" },
    { name: "Uganda Wildlife Authority", sector: "Government" },
    { name: "National Environment Management Authority", sector: "Government" },
    { name: "Uganda National Roads Authority", sector: "Government" },
    { name: "Uganda Breweries Limited", sector: "Private" },
    { name: "Tororo Cement Limited", sector: "Private" },
    { name: "MTN Uganda", sector: "Private" },
    { name: "Stanbic Bank Uganda", sector: "Private" },
    { name: "Total Uganda", sector: "Private" },
    { name: "Tullow Oil", sector: "Private" },
    { name: "World Bank Group", sector: "International" },
    { name: "African Development Bank", sector: "International" }
  ];

  const getSectorIcon = (sector: string) => {
    switch (sector) {
      case "Government":
        return <Landmark className="w-5 h-5 text-primary" />;
      case "Private":
        return <Building2 className="w-5 h-5 text-accent" />;
      case "International":
        return <Factory className="w-5 h-5 text-primary" />;
      default:
        return <Building2 className="w-5 h-5 text-muted-foreground" />;
    }
  };

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

        {/* Client testimonials */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <Quote className="w-8 h-8 text-primary/30 flex-shrink-0" />
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-primary">{testimonial.position}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                  <div className="flex items-center space-x-2 mt-2">
                    {getSectorIcon(testimonial.sector)}
                    <span className="text-xs text-muted-foreground">{testimonial.sector}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Client logos section */}
        <div className="bg-secondary/30 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">
            Our Valued Clients
          </h3>
          
          {/* Government clients */}
          <div className="mb-8">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Landmark className="w-5 h-5 text-primary" />
              <h4 className="text-lg font-semibold text-foreground">Government & Regulatory Bodies</h4>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {clientLogos.filter(client => client.sector === "Government").map((client, index) => (
                <div key={index} className="bg-background rounded-lg p-4 text-center hover:shadow-md transition-shadow duration-200">
                  <div className="w-12 h-12 mx-auto mb-2 bg-primary/10 rounded-full flex items-center justify-center">
                    <Landmark className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-sm font-medium text-foreground">{client.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Private sector clients */}
          <div className="mb-8">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Building2 className="w-5 h-5 text-accent" />
              <h4 className="text-lg font-semibold text-foreground">Private Sector</h4>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {clientLogos.filter(client => client.sector === "Private").map((client, index) => (
                <div key={index} className="bg-background rounded-lg p-4 text-center hover:shadow-md transition-shadow duration-200">
                  <div className="w-12 h-12 mx-auto mb-2 bg-accent/10 rounded-full flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-accent" />
                  </div>
                  <p className="text-sm font-medium text-foreground">{client.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* International organizations */}
          <div>
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Factory className="w-5 h-5 text-primary" />
              <h4 className="text-lg font-semibold text-foreground">International Organizations</h4>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {clientLogos.filter(client => client.sector === "International").map((client, index) => (
                <div key={index} className="bg-background rounded-lg p-4 text-center hover:shadow-md transition-shadow duration-200">
                  <div className="w-12 h-12 mx-auto mb-2 bg-primary/10 rounded-full flex items-center justify-center">
                    <Factory className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-sm font-medium text-foreground">{client.name}</p>
                </div>
              ))}
            </div>
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
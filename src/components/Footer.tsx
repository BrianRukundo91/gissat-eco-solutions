import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo_gissat.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Our Services", href: "#services" },
    { name: "Sectors", href: "#sectors" },
    { name: "Projects", href: "#projects" },
    { name: "Team", href: "#team" },
    { name: "Careers", href: "#careers" }
  ];

  const services = [
    { name: "Environmental Impact Assessment", href: "#services" },
    { name: "Environmental Audits", href: "#services" },
    { name: "Permitting & Licensing", href: "#services" },
    { name: "Waste Management", href: "#services" },
    { name: "Air Quality Assessment", href: "#services" },
    { name: "Sustainability Consulting", href: "#services" }
  ];

  return (
    <footer className="bg-card text-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-10 sm:py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company info */}
          <div className="sm:col-span-2 lg:col-span-1 text-center sm:text-left">
            <div className="mb-4 flex justify-center sm:justify-start">
              <img src={logo} alt="Gissat Inc - For Exceptional Eco Solutions" className="h-10 sm:h-12 w-auto brightness-0 invert" />
            </div>
            <p className="text-background/80 mb-6 leading-relaxed text-sm sm:text-base">
              Uganda's leading environmental consultancy since 1991. 
              Providing practical environmental solutions for sustainable development.
            </p>
            <div className="flex space-x-4 justify-center sm:justify-start">
              <Button variant="ghost" size="icon" className="text-background/80 hover:text-background hover:bg-background/10">
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-background/80 hover:text-background hover:bg-background/10">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-background/80 hover:text-background hover:bg-background/10">
                <Facebook className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-5 text-background border-b border-background/30 pb-2">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-background hover:text-primary hover:pl-1 transition-all duration-200 text-sm flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href={service.href}
                    className="text-background/80 hover:text-background transition-colors duration-200"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-background/80 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-background/80">
                    Muyenga, Kampala<br />
                    Uganda
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-background/80" />
                <p className="text-background/80">+256 (0) 414 510 263</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-background/80" />
                <p className="text-background/80">info@gissat.co.ug</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom footer */}
        <div className="border-t border-background/20 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-background/80 text-sm">
              © {currentYear} Gissat Environmental Consultants. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-background/80 hover:text-background transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-background/80 hover:text-background transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#certification" className="text-background/80 hover:text-background transition-colors duration-200">
                Certifications
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
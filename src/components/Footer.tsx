import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Our Services", href: "/services" },
    { name: "Careers", href: "/careers" },
  ];

  return (
    <footer className="bg-gradient-green-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col items-center text-center space-y-10">
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-5 text-white tracking-wide uppercase">
              Quick Links
            </h3>
            <ul className="flex flex-wrap justify-center gap-6">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-white/80 hover:text-white text-sm font-medium transition-colors duration-200 hover:underline underline-offset-4"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Divider */}
          <div className="w-24 h-px bg-white/30"></div>

          {/* Contact Us */}
          <div>
            <h3 className="text-lg font-semibold mb-5 text-white tracking-wide uppercase">
              Contact Us
            </h3>
            <div className="space-y-3 text-sm text-white/80">
              <p className="font-medium">Muyenga, Kampala, Uganda</p>
              <p>+256 (0) 414 510 263</p>
              <a 
                href="mailto:info@gissat.co.ug" 
                className="inline-block hover:text-white transition-colors duration-200 hover:underline underline-offset-4"
              >
                info@gissat.co.ug
              </a>
            </div>
          </div>
        </div>

        {/* Bottom footer */}
        <div className="border-t border-white/20 mt-12 pt-6 text-center">
          <p className="text-white/60 text-sm">
            © {currentYear} Gissat Environmental Consultants. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

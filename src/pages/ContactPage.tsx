import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useSEO } from "@/hooks/useSEO";

const ContactPage = () => {
  useSEO({
    title: "Contact Us | Environmental Consultancy Kampala Uganda",
    description:
      "Get in touch with Gissat Eco Solutions. Headquartered in Kampala, Uganda. Contact us for environmental audits, EIA services, and environmental consultancy.",
    canonical: "https://gissat.org/contact",
  });

  const { hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 100);
      }
    }
  }, [hash]);

  return (
    <div className="min-h-screen sm:border-x-2 md:border-x-4 border-gissat-dark">
      <Navigation />
      <div className="pt-16 sm:pt-20">
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;

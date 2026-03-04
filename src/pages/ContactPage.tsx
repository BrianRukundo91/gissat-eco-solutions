import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const ContactPage = () => {
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

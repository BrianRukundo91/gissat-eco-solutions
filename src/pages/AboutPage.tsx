import Navigation from "@/components/Navigation";
import About from "@/components/About";
import Footer from "@/components/Footer";
import { useSEO } from "@/hooks/useSEO";

const AboutPage = () => {
  useSEO({
    title: "About Us | Uganda's Environmental Consultancy Since 1991",
    description:
      "Founded in 1991, Gissat Eco Solutions is Uganda's foremost environmental management consultancy, delivering independent audits and impact assessments across East Africa.",
    canonical: "https://gissat.org/about",
  });

  return (
    <div className="min-h-screen sm:border-x-2 md:border-x-4 border-gissat-dark">
      <Navigation />
      <div className="pt-16 sm:pt-20">
        <About />
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;

import Navigation from "@/components/Navigation";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import { useSEO } from "@/hooks/useSEO";

const ServicesPage = () => {
  useSEO({
    title: "Environmental Consulting Services Uganda",
    description:
      "Comprehensive environmental services: EIA, strategic environmental assessments, audits, monitoring, waste management, and resettlement action plans in Uganda.",
    canonical: "https://gissat.org/services",
  });

  return (
    <div className="min-h-screen sm:border-x-2 md:border-x-4 border-gissat-dark">
      <Navigation />
      <div className="pt-16 sm:pt-20">
        <Services />
      </div>
      <Footer />
    </div>
  );
};

export default ServicesPage;

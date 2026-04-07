import Navigation from "@/components/Navigation";
import Sectors from "@/components/Sectors";
import Footer from "@/components/Footer";
import { useSEO } from "@/hooks/useSEO";

const SectorsPage = () => {
  useSEO({
    title: "Sectors We Serve | Mining, Oil & Gas, Infrastructure Uganda",
    description:
      "Gissat serves Uganda's most critical development sectors — mining, oil & gas, infrastructure, agriculture, urban development, and wetland conservation.",
    canonical: "https://gissat.org/sectors",
  });

  return (
    <div className="min-h-screen sm:border-x-2 md:border-x-4 border-gissat-dark">
      <Navigation />
      <div className="pt-16 sm:pt-20">
        <Sectors />
      </div>
      <Footer />
    </div>
  );
};

export default SectorsPage;

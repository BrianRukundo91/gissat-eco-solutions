import Navigation from "@/components/Navigation";
import Sectors from "@/components/Sectors";
import Footer from "@/components/Footer";

const SectorsPage = () => {
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

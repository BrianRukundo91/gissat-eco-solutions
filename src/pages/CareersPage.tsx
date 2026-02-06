import Navigation from "@/components/Navigation";
import Careers from "@/components/Careers";
import Footer from "@/components/Footer";

const CareersPage = () => {
  return (
    <div className="min-h-screen sm:border-x-2 md:border-x-4 border-gissat-dark">
      <Navigation />
      <div className="pt-16 sm:pt-20">
        <Careers />
      </div>
      <Footer />
    </div>
  );
};

export default CareersPage;

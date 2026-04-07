import Navigation from "@/components/Navigation";
import Careers from "@/components/Careers";
import Footer from "@/components/Footer";
import { useSEO } from "@/hooks/useSEO";

const CareersPage = () => {
  useSEO({
    title: "Careers | Environmental Jobs in Uganda",
    description:
      "Join Uganda's leading environmental consultancy. Explore career opportunities for environmental scientists, ecologists, and sustainability professionals at Gissat.",
    canonical: "https://gissat.org/careers",
  });

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

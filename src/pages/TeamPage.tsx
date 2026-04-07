import Navigation from "@/components/Navigation";
import Team from "@/components/Team";
import Footer from "@/components/Footer";
import { useSEO } from "@/hooks/useSEO";

const TeamPage = () => {
  useSEO({
    title: "Our Team | Environmental Experts Uganda",
    description:
      "Meet Gissat's team of certified environmental scientists, ecologists, and compliance specialists serving Uganda and East Africa since 1991.",
    canonical: "https://gissat.org/team",
  });

  return (
    <div className="min-h-screen sm:border-x-2 md:border-x-4 border-gissat-dark">
      <Navigation />
      <div className="pt-16 sm:pt-20">
        <Team />
      </div>
      <Footer />
    </div>
  );
};

export default TeamPage;

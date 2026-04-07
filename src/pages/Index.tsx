import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import HomeServices from "@/components/HomeServices";
import HomeWhyUs from "@/components/HomeWhyUs";
import HomeCTA from "@/components/HomeCTA";
import Footer from "@/components/Footer";
import ChatbotWidget from "@/components/ChatbotWidget";
import { useSEO } from "@/hooks/useSEO";

const Index = () => {
  useSEO({
    title: "Environmental Audits & Consultancy Uganda",
    description:
      "Uganda's leading environmental consultancy since 1991. Expert EIA, environmental audits, monitoring, and compliance services for mining, oil & gas, infrastructure and agriculture sectors.",
    canonical: "https://gissat.org/",
  });

  return (
    <div className="min-h-screen sm:border-x-2 md:border-x-4 border-gissat-dark">
      <Navigation />
      <Hero />
      <HomeServices />
      <HomeWhyUs />
      <HomeCTA />
      <Footer />
      <ChatbotWidget />
    </div>
  );
};

export default Index;

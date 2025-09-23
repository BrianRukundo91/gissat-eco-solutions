import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Sectors from "@/components/Sectors";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Team from "@/components/Team";
import Clients from "@/components/Clients";
import Careers from "@/components/Careers";
import Contact from "@/components/Contact";
import Certification from "@/components/Certification";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Sectors />
      <Services />
      <Projects />
      <Team />
      <Clients />
      <Careers />
      <Contact />
      <Certification />
      <Footer />
    </div>
  );
};

export default Index;

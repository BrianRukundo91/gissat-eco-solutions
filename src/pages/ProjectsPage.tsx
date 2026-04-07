import Navigation from "@/components/Navigation";
import ProjectCategories from "@/components/ProjectCategories";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import { useSEO } from "@/hooks/useSEO";

const ProjectsPage = () => {
  useSEO({
    title: "Environmental Projects Portfolio Uganda",
    description:
      "500+ completed environmental projects across Uganda since 1991. View our portfolio of EIAs, environmental audits, and monitoring assignments across key sectors.",
    canonical: "https://gissat.org/projects",
  });

  return (
    <div className="min-h-screen sm:border-x-2 md:border-x-4 border-gissat-dark">
      <Navigation />
      <div className="pt-16 sm:pt-20">
        <ProjectCategories />
        <Projects />
      </div>
      <Footer />
    </div>
  );
};

export default ProjectsPage;

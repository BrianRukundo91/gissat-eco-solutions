import Navigation from "@/components/Navigation";
import Clients from "@/components/Clients";
import Footer from "@/components/Footer";
import { useSEO } from "@/hooks/useSEO";

const ClientsPage = () => {
  useSEO({
    title: "Our Clients | Government, NGOs & Private Sector Uganda",
    description:
      "Gissat works with government agencies, multinationals, development partners, and NGOs across Uganda's key economic and environmental sectors.",
    canonical: "https://gissat.org/clients",
  });

  return (
    <div className="min-h-screen sm:border-x-2 md:border-x-4 border-gissat-dark">
      <Navigation />
      <div className="pt-16 sm:pt-20">
        <Clients />
      </div>
      <Footer />
    </div>
  );
};

export default ClientsPage;

import Navigation from "@/components/Navigation";
import Clients from "@/components/Clients";
import Footer from "@/components/Footer";

const ClientsPage = () => {
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

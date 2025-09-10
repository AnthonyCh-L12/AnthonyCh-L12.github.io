import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import PortfolioSection from "@/components/PortfolioSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Sección 1: Hero - Fondo oscuro (patrón impar) */}
        <div className="bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800">
          <HeroSection />
        </div>
        
        {/* Sección 2: About - Fondo oscuro alternativo (patrón par) */}
        <AboutSection />
        
        {/* Sección 3: Services - Fondo oscuro (patrón impar) */}
        <PortfolioSection />
        
        {/* Sección 4: Portfolio - Fondo oscuro alternativo (patrón par) */}
        <div className="bg-gradient-to-br from-slate-800 via-gray-800 to-slate-900 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 via-transparent to-blue-600/5"></div>
          <ServicesSection />
        </div>
        
        {/* Sección 5: Contact - Fondo oscuro (patrón impar) */}
        <div className="bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800 relative">
          <ContactSection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
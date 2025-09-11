import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import anthonyProfile from "@/assets/anthony-profile.jpeg";

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contacto");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-muted/30 pt-16"
    >
      <div className="container mx-auto px-4 lg:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <AnimatedSection animation="fade-in-left" className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold text-primary leading-tight">
                Anthony
                <span className="block tech-gradient bg-clip-text text-white">
                  Chávez Lujan
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-roboto leading-relaxed">
                Impulso tu negocio con{" "}
                <span className="text-secondary font-semibold">
                  soluciones web
                </span>
                ,{" "}
                <span className="text-secondary font-semibold">
                  sistemas a medida
                </span>{" "}
                y{" "}
                <span className="text-secondary font-semibold">
                  automatización empresarial
                </span>
                .
              </p>
            </div>

            <AnimatedSection animation="fade-in-up" delay={300}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  onClick={scrollToContact}
                  className="hero-gradient text-white font-semibold hover:shadow-lg transition-all duration-300 group"
                >
                  Trabajemos juntos
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Descargar CV
                </Button>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-in-up" delay={600}>
              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-poppins font-bold text-primary">
                    3+
                  </div>
                  <div className="text-sm text-muted-foreground">Proyectos</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-poppins font-bold text-primary">
                    2+
                  </div>
                  <div className="text-sm text-muted-foreground">Años Exp.</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-poppins font-bold text-primary">
                    100%
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Satisfacción
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </AnimatedSection>

          {/* Image */}
          <AnimatedSection
            animation="scale-in"
            delay={400}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="absolute inset-0 hero-gradient rounded-full blur-3xl opacity-20 scale-110"></div>
              <div className="relative w-80 h-80 rounded-full overflow-hidden shadow-card border-4 border-white">
                <img
                  src={anthonyProfile}
                  alt="Anthony Chávez Lujan - Ingeniero de Sistemas"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 hero-gradient rounded-full flex items-center justify-center shadow-card">
                <div className="text-white font-poppins font-bold text-lg">
                  23
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

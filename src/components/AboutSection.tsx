import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User, Target, Lightbulb, Award } from "lucide-react";

const AboutSection = () => {
  const stats = [
    { number: "23", label: "Años", description: "Joven y apasionado por la tecnología" },
    { number: "2+", label: "Años", description: "Experiencia en desarrollo" },
    { number: "3+", label: "Proyectos", description: "Completados exitosamente" },
    { number: "100%", label: "Satisfacción", description: "Clientes satisfechos" }
  ];

  const values = [
    {
      icon: Target,
      title: "Precisión",
      description: "Cada proyecto se desarrolla con atención meticulosa a los detalles y requisitos específicos."
    },
    {
      icon: Lightbulb,
      title: "Innovación",
      description: "Utilizo las últimas tecnologías para crear soluciones modernas y eficientes."
    },
    {
      icon: Award,
      title: "Calidad",
      description: "Código limpio, escalable y mantenible que garantiza resultados duraderos."
    }
  ];

  return (
    <section id="sobre-mi" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="flex items-center space-x-3 mb-4">
                <User className="h-8 w-8 text-secondary" />
                <h2 className="text-3xl md:text-4xl font-poppins font-bold text-primary">
                  Sobre mí
                </h2>
              </div>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Soy <span className="text-primary font-semibold">Anthony Chávez Lujan</span>, 
                un ingeniero de sistemas de 23 años apasionado por transformar ideas complejas 
                en soluciones tecnológicas simples y efectivas.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Como freelancer, me especializo en crear aplicaciones web, sistemas empresariales 
                y automatizaciones que ayudan a los negocios a optimizar sus procesos y alcanzar 
                sus objetivos.
              </p>
            </div>

            {/* Philosophy Quote */}
            <div className="relative p-6 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg border-l-4 border-secondary">
              <blockquote className="text-lg font-medium text-primary italic">
                "La tecnología es más poderosa cuando convierte tareas complejas en soluciones simples y prácticas."
              </blockquote>
            </div>

            {/* Values */}
            <div className="space-y-4">
              <h3 className="text-xl font-poppins font-semibold text-primary">Mis valores</h3>
              <div className="space-y-4">
                {values.map((value, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <value.icon className="h-5 w-5 text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-roboto font-semibold text-primary">{value.title}</h4>
                      <p className="text-muted-foreground text-sm">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 gap-6 animate-fade-in">
            {stats.map((stat, index) => (
              <Card 
                key={index}
                className="text-center shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-2 border-0"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="pb-3">
                  <div className="text-3xl md:text-4xl font-poppins font-bold hero-gradient bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <CardTitle className="text-sm font-roboto font-semibold text-secondary">
                    {stat.label}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-xs text-muted-foreground leading-tight">
                    {stat.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
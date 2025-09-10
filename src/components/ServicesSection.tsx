import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, Settings, Zap, Code, Database, BarChart3 } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Globe,
      title: "Desarrollo Web",
      description: "Sitios web modernos y aplicaciones web responsivas con tecnologías de vanguardia.",
      technologies: ["PHP", "React", "Laravel", "Tailwind CSS"],
      color: "text-blue-600"
    },
    {
      icon: Database,
      title: "Sistemas Empresariales",
      description: "Soluciones a medida para optimizar procesos empresariales y gestión de datos.",
      technologies: ["MySQL", "Laravel", "APIs REST", "Dashboard"],
      color: "text-cyan-600"
    },
    {
      icon: Zap,
      title: "Automatización de Procesos",
      description: "Automatizo tareas repetitivas y optimizo flujos de trabajo para mayor eficiencia.",
      technologies: ["Excel Macros", "Scripts", "Integrations", "Workflows"],
      color: "text-purple-600"
    }
  ];

  const features = [
    { icon: Code, text: "Código limpio y escalable" },
    { icon: Settings, text: "Soporte y mantenimiento" },
    { icon: BarChart3, text: "Optimización continua" }
  ];

  return (
    <section id="servicios" className="py-20 section-pattern">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-primary mb-4">
            Mis Servicios
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ofrezco soluciones tecnológicas completas para impulsar tu negocio hacia el éxito
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-card transition-all duration-300 hover:-translate-y-2 border-0 shadow-soft animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-poppins font-semibold text-primary group-hover:text-secondary transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
                <div className="flex flex-wrap gap-2 justify-center">
                  {service.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-muted rounded-full text-xs font-medium text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Features Row */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="flex items-center justify-center space-x-3 p-6 rounded-lg bg-background shadow-soft hover:shadow-card transition-all duration-300 animate-slide-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <feature.icon className="h-6 w-6 text-secondary" />
              <span className="font-roboto font-medium text-primary">{feature.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
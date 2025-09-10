import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Globe, Database, Zap } from "lucide-react";
import projectWeb from "@/assets/project-web.jpg";
import projectSystem1 from "@/assets/project-system1.jpg";
import projectSystem2 from "@/assets/project-system2.jpg";

const PortfolioSection = () => {
  const projects = [
    {
      id: 1,
      title: "Sitio Web Corporativo",
      description: "Sitio web moderno y responsivo para empresa de consultoría con sistema de gestión de contenidos y optimización SEO.",
      image: projectWeb,
      type: "Web Development",
      icon: Globe,
      technologies: ["React", "Tailwind CSS", "Laravel", "MySQL"],
      features: ["Responsive Design", "CMS Admin", "SEO Optimizado", "Formularios Dinámicos"],
      demoUrl: "#",
      codeUrl: "#"
    },
    {
      id: 2,
      title: "Sistema de Inventario",
      description: "Sistema empresarial completo para gestión de inventarios, reportes automáticos y control de stock en tiempo real.",
      image: projectSystem1,
      type: "Enterprise System",
      icon: Database,
      technologies: ["Laravel", "MySQL", "Chart.js", "Bootstrap"],
      features: ["Gestión Stock", "Reportes PDF", "Dashboard Analytics", "Multi-usuario"],
      demoUrl: "#",
      codeUrl: "#"
    },
    {
      id: 3,
      title: "Automatización de Procesos",
      description: "Sistema de automatización para optimizar flujos de trabajo empresariales y generar reportes automatizados.",
      image: projectSystem2,
      type: "Process Automation",
      icon: Zap,
      technologies: ["PHP", "Excel VBA", "MySQL", "APIs"],
      features: ["Workflows", "Reportes Auto", "Integración Excel", "Notificaciones"],
      demoUrl: "#",
      codeUrl: "#"
    }
  ];

  return (
    <section id="portafolio" className="py-20 section-pattern">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-primary mb-4">
            Mi Portafolio
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Proyectos destacados que demuestran mi experiencia en desarrollo web y sistemas empresariales
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.id}
              className="group overflow-hidden shadow-soft hover:shadow-card transition-all duration-500 hover:-translate-y-2 border-0 animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Project Type Badge */}
                <div className="absolute top-4 left-4">
                  <div className="flex items-center space-x-2 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                    <project.icon className="h-4 w-4 text-primary" />
                    <span className="text-xs font-medium text-primary">{project.type}</span>
                  </div>
                </div>

                {/* Hover Actions */}
                <div className="absolute inset-0 flex items-center justify-center space-x-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <Button
                    size="sm"
                    variant="secondary"
                    className="bg-white/90 text-primary hover:bg-white"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Demo
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="bg-white/90 border-white text-primary hover:bg-white"
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Código
                  </Button>
                </div>
              </div>

              <CardHeader className="pb-3">
                <CardTitle className="text-xl font-poppins font-semibold text-primary group-hover:text-secondary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Technologies */}
                <div>
                  <h4 className="text-sm font-roboto font-semibold text-primary mb-2">Tecnologías</h4>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-2 py-1 bg-secondary/10 text-secondary rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div>
                  <h4 className="text-sm font-roboto font-semibold text-primary mb-2">Características</h4>
                  <div className="grid grid-cols-2 gap-1">
                    {project.features.map((feature, featureIndex) => (
                      <span 
                        key={featureIndex}
                        className="text-xs text-muted-foreground"
                      >
                        • {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16 animate-fade-in">
          <p className="text-lg text-muted-foreground mb-6">
            ¿Te interesa ver más proyectos o trabajar conmigo?
          </p>
          <Button 
            size="lg"
            className="hero-gradient text-white font-semibold hover:shadow-lg transition-all duration-300"
            onClick={() => {
              const element = document.querySelector("#contacto");
              if (element) element.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Ver más proyectos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
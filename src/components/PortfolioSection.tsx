import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, Globe, Database, Zap, Search, X } from "lucide-react";
import projectWeb from "@/assets/project-web.jpeg";
import projectWeb1 from "@/assets/project-web1.jpeg";
import projectWeb2 from "@/assets/project-web2.jpeg";
import projectWeb3 from "@/assets/project-web3.jpeg";
import projectWeb4 from "@/assets/project-web4.jpeg";
import projectSystem1 from "@/assets/project-system1.jpg";
import projectSystem1_1 from "@/assets/project-system1-1.jpg";
import projectSystem1_2 from "@/assets/project-system1-2.jpg";
import projectSystem1_3 from "@/assets/project-system1-3.jpeg";
import projectSystem1_4 from "@/assets/project-system1-4.jpeg";
import projectSystem2 from "@/assets/project-system2.jpg";
import projectSystem2_1 from "@/assets/project-system2-1.jpeg";
import projectSystem2_2 from "@/assets/project-system2-2.jpeg";
import projectSystem2_3 from "@/assets/project-system2-3.jpeg";
import projectSystem2_4 from "@/assets/project-system2-4.jpeg";

const PortfolioSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState<{ [key: number]: number }>({});
  const [modalOpen, setModalOpen] = useState(false);
  const [modalProject, setModalProject] = useState<any>(null);
  const [modalImageIndex, setModalImageIndex] = useState(0);

  const projects = [
    {
      id: 1,
      title: "Sitio Web Corporativo",
      description: "Sitio web moderno y responsivo para empresa de servicios logísticos, CAMET E.I.R.L.",
      images: [
        projectWeb, // project-web-1
        projectWeb1, // project-web-2
        projectWeb2, // project-web-3
        projectWeb3, // project-web-4
        projectWeb4  // project-web-5
      ],
      type: "Web Development",
      icon: Globe,
      technologies: ["React", "Tailwind CSS", "Typescript"],
      features: ["Diseño Responsivo", "Página intuitiva", "SEO Optimizado", "Formularios Dinámicos"],
      demoUrl: "#",
      codeUrl: "#"
    },
    {
      id: 2,
      title: "Sistema de Inventario",
      description: "Sistema empresarial completo para gestión de inventarios ycontrol de stock en tiempo real.",
      images: [
        projectSystem1, // project-system1-1
        projectSystem1_1, // project-system1-2
        projectSystem1_2, // project-system1-3
        projectSystem1_3, // project-system1-4
        projectSystem1_4  // project-system1-5
      ],
      type: "Enterprise System",
      icon: Database,
      technologies: ["PHP", "JavaScript", "CSS", "MySQL"],
      features: ["Gestión Stock", "Reportes PDF", "Dashboard Analytics", "Multi-usuario"],
      demoUrl: "#",
      codeUrl: "#"
    },
    {
      id: 3,
      title: "Sistema de Control de Asistencia",
      description: "Sistema de automatización para optimizar flujos de trabajo empresariales y generar reportes automatizados.",
      images: [
        projectSystem2, // project-system2-1
        projectSystem2_1, // project-system2-2
        projectSystem2_2, // project-system2-3
        projectSystem2_3, // project-system2-4
        projectSystem2_4  // project-system2-5
      ],
      type: "Enterprise System",
      icon: Database,
      technologies: ["PHP", "JavaScript", "CSS", "MySQL", "APIs"],
      features: ["Reportes PDF", "Multi-usuario", "Integración Excel", "Notificaciones"],
      demoUrl: "#",
      codeUrl: "#"
    }
  ];

  const nextImage = (projectId: number, totalImages: number) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [projectId]: ((prev[projectId] || 0) + 1) % totalImages
    }));
  };

  const prevImage = (projectId: number, totalImages: number) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [projectId]: ((prev[projectId] || 0) - 1 + totalImages) % totalImages
    }));
  };

  const goToImage = (projectId: number, imageIndex: number) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [projectId]: imageIndex
    }));
  };

  const openModal = (project: any, imageIndex: number) => {
    setModalProject(project);
    setModalImageIndex(imageIndex);
    setModalOpen(true);
  };

  const nextModalImage = () => {
    if (modalProject) {
      setModalImageIndex((prev) => (prev + 1) % modalProject.images.length);
    }
  };

  const prevModalImage = () => {
    if (modalProject) {
      setModalImageIndex((prev) => (prev - 1 + modalProject.images.length) % modalProject.images.length);
    }
  };

  const goToModalImage = (imageIndex: number) => {
    setModalImageIndex(imageIndex);
  };

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
          {projects.map((project, index) => {
            const currentIndex = currentImageIndex[project.id] || 0;
            return (
              <Card 
                key={project.id}
                className="group overflow-hidden shadow-soft hover:shadow-card transition-all duration-500 hover:-translate-y-2 border-0 animate-fade-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Project Image Gallery */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.images[currentIndex]}
                    alt={`${project.title} - Imagen ${currentIndex + 1}`}
                    className="w-full h-48 object-cover transition-opacity duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  
                  {/* Project Type Badge */}
                  <div className="absolute top-4 left-4">
                    <div className="flex items-center space-x-2 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                      <project.icon className="h-4 w-4 text-primary" />
                      <span className="text-xs font-medium text-primary">{project.type}</span>
                    </div>
                  </div>

                  {/* Magnifying Glass (Search) Button */}
                  <Button
                    size="sm"
                    variant="ghost"
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white rounded-full w-12 h-12 p-0 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
                    onClick={(e) => {
                      e.stopPropagation();
                      openModal(project, currentIndex);
                    }}
                  >
                    <Search className="h-5 w-5" />
                  </Button>

                  {/* Navigation Arrows */}
                  <Button
                    size="sm"
                    variant="ghost"
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full w-8 h-8 p-0 opacity-0 group-hover:opacity-100 transition-all duration-300"
                    onClick={(e) => {
                      e.stopPropagation();
                      prevImage(project.id, project.images.length);
                    }}
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>

                  <Button
                    size="sm"
                    variant="ghost"
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full w-8 h-8 p-0 opacity-0 group-hover:opacity-100 transition-all duration-300"
                    onClick={(e) => {
                      e.stopPropagation();
                      nextImage(project.id, project.images.length);
                    }}
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>

                  {/* Image Indicators */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    {project.images.map((_, imageIndex) => (
                      <button
                        key={imageIndex}
                        className={`w-2 h-2 rounded-full transition-all duration-200 ${
                          currentIndex === imageIndex 
                            ? 'bg-white scale-125' 
                            : 'bg-white/60 hover:bg-white/80'
                        }`}
                        onClick={(e) => {
                          e.stopPropagation();
                          goToImage(project.id, imageIndex);
                        }}
                      />
                    ))}
                  </div>

                  {/* Image Counter */}
                  <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-sm rounded-full px-2 py-1 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="text-xs text-white font-medium">
                      {currentIndex + 1} / {project.images.length}
                    </span>
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
            );
          })}
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

      {/* Image Modal */}
      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogContent className="max-w-5xl w-full h-[90vh] p-0 bg-black/95 border-gray-800">
          <DialogHeader className="absolute top-4 left-6 z-10">
            <DialogTitle className="text-white text-lg font-semibold">
              {modalProject?.title} - Imagen {modalImageIndex + 1} de {modalProject?.images.length}
            </DialogTitle>
          </DialogHeader>
          
          {/* Close Button */}
          <Button
            variant="ghost"
            size="sm"
            className="absolute top-4 right-4 z-10 text-white hover:bg-white/20 rounded-full w-10 h-10 p-0"
            onClick={() => setModalOpen(false)}
          >
            <X className="h-5 w-5" />
          </Button>

          {modalProject && (
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Main Image */}
              <img
                src={modalProject.images[modalImageIndex]}
                alt={`${modalProject.title} - Imagen ${modalImageIndex + 1}`}
                className="max-w-full max-h-full object-contain"
              />

              {/* Navigation Arrows */}
              <Button
                size="lg"
                variant="ghost"
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full w-12 h-12 p-0 transition-all duration-300"
                onClick={prevModalImage}
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>

              <Button
                size="lg"
                variant="ghost"
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full w-12 h-12 p-0 transition-all duration-300"
                onClick={nextModalImage}
              >
                <ChevronRight className="h-6 w-6" />
              </Button>

              {/* Bottom Controls */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-4">
                {/* Image Indicators */}
                <div className="flex space-x-2">
                  {modalProject.images.map((_, imageIndex) => (
                    <button
                      key={imageIndex}
                      className={`w-3 h-3 rounded-full transition-all duration-200 ${
                        modalImageIndex === imageIndex 
                          ? 'bg-white scale-125' 
                          : 'bg-white/50 hover:bg-white/80'
                      }`}
                      onClick={() => goToModalImage(imageIndex)}
                    />
                  ))}
                </div>

                {/* Image Info */}
                <div className="bg-black/60 backdrop-blur-sm rounded-lg px-4 py-2">
                  <span className="text-white text-sm font-medium">
                    {modalImageIndex + 1} / {modalProject.images.length}
                  </span>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default PortfolioSection;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, Settings, Zap, Code, Database, BarChart3 } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Globe,
      title: "Desarrollo Web",
      description: "Sitios web modernos y aplicaciones web responsivas con tecnologías de vanguardia.",
      technologies: ["PHP", "React", "Laravel", "Tailwind CSS"],
      color: "text-blue-400"
    },
    {
      icon: Database,
      title: "Sistemas Empresariales",
      description: "Soluciones a medida para optimizar procesos empresariales y gestión de datos.",
      technologies: ["MySQL", "Laravel", "APIs REST", "Dashboard"],
      color: "text-cyan-400"
    },
    {
      icon: Zap,
      title: "Automatización de Procesos",
      description: "Automatizo tareas repetitivas y optimizo flujos de trabajo para mayor eficiencia.",
      technologies: ["Excel Macros", "Scripts", "Integrations", "Workflows"],
      color: "text-purple-400"
    }
  ];

  const features = [
    { icon: Code, text: "Código limpio y escalable" },
    { icon: Settings, text: "Soporte y mantenimiento" },
    { icon: BarChart3, text: "Optimización continua" }
  ];

  return (
    <section id="servicios" className="py-20 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/5 via-transparent to-teal-600/5"></div>
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-gradient-to-br from-emerald-500/8 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-gradient-to-bl from-teal-500/8 to-transparent rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Settings className="h-8 w-8 text-emerald-400" />
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-white">
              Mis Servicios
            </h2>
          </div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Ofrezco soluciones tecnológicas completas para impulsar tu negocio hacia el éxito
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300 hover:-translate-y-2 border-0 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-poppins font-semibold text-white group-hover:text-emerald-400 transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <CardDescription className="text-gray-400 leading-relaxed">
                  {service.description}
                </CardDescription>
                <div className="flex flex-wrap gap-2 justify-center">
                  {service.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-gray-700/50 border border-gray-600/50 rounded-full text-xs font-medium text-gray-300 backdrop-blur-sm hover:bg-emerald-500/20 hover:border-emerald-500/30 transition-all duration-200"
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
              className="flex items-center justify-center space-x-3 p-6 rounded-lg bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 shadow-lg hover:shadow-emerald-500/20 hover:bg-gray-700/40 transition-all duration-300 animate-slide-in group"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <feature.icon className="h-6 w-6 text-emerald-400 group-hover:text-emerald-300 transition-colors" />
              <span className="font-roboto font-medium text-white group-hover:text-emerald-100 transition-colors">{feature.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
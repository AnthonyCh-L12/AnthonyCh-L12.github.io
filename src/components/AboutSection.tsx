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
    <section id="sobre-mi" className="py-20 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-transparent to-purple-600/5"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-purple-500/10 to-transparent rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="flex items-center space-x-3 mb-4">
                <User className="h-8 w-8 text-blue-400" />
                <h2 className="text-3xl md:text-4xl font-poppins font-bold text-white">
                  Sobre mí
                </h2>
              </div>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                Soy <span className="text-blue-400 font-semibold">Anthony Chávez Lujan</span>, 
                un ingeniero de sistemas de 23 años apasionado por transformar ideas complejas 
                en soluciones tecnológicas simples y efectivas.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                Como freelancer, me especializo en crear aplicaciones web, sistemas empresariales 
                y automatizaciones que ayudan a los negocios a optimizar sus procesos y alcanzar 
                sus objetivos.
              </p>
            </div>

            {/* Philosophy Quote */}
            <div className="relative p-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg border-l-4 border-blue-400 backdrop-blur-sm">
              <blockquote className="text-lg font-medium text-white italic">
                "La tecnología es más poderosa cuando convierte tareas complejas en soluciones simples y prácticas."
              </blockquote>
            </div>

            {/* Values */}
            <div className="space-y-4">
              <h3 className="text-xl font-poppins font-semibold text-white">Mis valores</h3>
              <div className="space-y-4">
                {values.map((value, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <value.icon className="h-5 w-5 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-roboto font-semibold text-white">{value.title}</h4>
                      <p className="text-gray-400 text-sm">{value.description}</p>
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
                className="text-center shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:-translate-y-2 border-0 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="pb-3">
                  <div className="text-3xl md:text-4xl font-poppins font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-blue-300 bg-clip-text text-transparent drop-shadow-lg">
                    {stat.number}
                  </div>
                  <CardTitle className="text-sm font-roboto font-semibold text-blue-400">
                    {stat.label}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-xs text-gray-400 leading-tight">
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
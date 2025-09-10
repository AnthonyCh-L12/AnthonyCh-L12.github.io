import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "María González",
      role: "Gerente General",
      company: "Empresa Retail S.A.",
      content: "Anthony desarrolló nuestro sistema de inventario y ha revolucionado completamente nuestros procesos. Su atención al detalle y capacidad de entender nuestras necesidades es excepcional.",
      rating: 5,
      avatar: "MG"
    },
    {
      id: 2,
      name: "Carlos Mendoza",
      role: "Director de TI",
      company: "Consultora Tech",
      content: "El sitio web que nos desarrolló superó todas nuestras expectativas. Moderno, rápido y con un diseño que realmente representa nuestra marca. Altamente recomendado.",
      rating: 5,
      avatar: "CM"
    },
    {
      id: 3,
      name: "Ana Patricia Ruiz",
      role: "CEO",
      company: "StartUp Innovadora",
      content: "La automatización de procesos que implementó Anthony nos ahorra más de 10 horas semanales. Su visión tecnológica y profesionalismo son impresionantes para su edad.",
      rating: 5,
      avatar: "AR"
    }
  ];

  return (
    <section id="testimonios" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-primary mb-4">
            Lo que dicen mis clientes
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            La satisfacción de mis clientes es mi mayor recompensa y motivación para seguir mejorando
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.id}
              className="shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-2 border-0 animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-full hero-gradient flex items-center justify-center">
                      <span className="text-white font-poppins font-semibold text-sm">
                        {testimonial.avatar}
                      </span>
                    </div>
                    <div>
                      <div className="font-poppins font-semibold text-primary">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </div>
                      <div className="text-xs text-secondary font-medium">
                        {testimonial.company}
                      </div>
                    </div>
                  </div>
                  <Quote className="h-8 w-8 text-secondary/30" />
                </div>

                <div className="flex items-center space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </CardHeader>

              <CardContent>
                <p className="text-muted-foreground leading-relaxed italic">
                  "{testimonial.content}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 p-8 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl animate-fade-in">
          <h3 className="text-2xl font-poppins font-bold text-primary mb-4">
            ¿Listo para llevar tu negocio al siguiente nivel?
          </h3>
          <p className="text-lg text-muted-foreground mb-6">
            Únete a mis clientes satisfechos y transforma tu visión en realidad
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/+51999999999?text=Hola%20Anthony,%20me%20interesa%20trabajar%20contigo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors duration-300"
            >
              Contactar por WhatsApp 🚀
            </a>
            <button 
              onClick={() => {
                const element = document.querySelector("#contacto");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center justify-center px-8 py-3 hero-gradient text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
            >
              Solicitar Cotización
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
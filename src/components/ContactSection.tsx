import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import AnimatedSection from "@/components/AnimatedSection";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    message: "",
  });

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "anthonymanuelchavezlujan@gmail.com",
      href: "mailto:anthonymanuelchavezlujan@gmail.com",
    },
    {
      icon: Phone,
      title: "WhatsApp",
      value: "+51 970 862 081",
      href: "https://wa.me/51970862081",
    },
    {
      icon: MapPin,
      title: "Ubicación",
      value: "Chimbote, Perú",
      href: "#",
    },
    {
      icon: Clock,
      title: "Horario",
      value: "Lun - Vie: 9AM - 6PM",
      href: "#",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Mapeo de tipos de proyecto para el mensaje
    const projectTypeMap: { [key: string]: string } = {
      web: "Desarrollo Web",
      system: "Sistema Empresarial",
      automation: "Automatización",
      consulting: "Consultoría",
      other: "Otro",
    };

    // Construir el mensaje para WhatsApp
    const whatsappMessage =
      `*SOLICITUD DE COTIZACIÓN*%0A%0A` +
      `*Nombre:* ${formData.name}%0A` +
      `*Email:* ${formData.email}%0A` +
      `${formData.company ? `*Empresa:* ${formData.company}%0A` : ""}` +
      `*Tipo de Proyecto:* ${
        projectTypeMap[formData.projectType] || formData.projectType
      }%0A%0A` +
      `*Descripción del Proyecto:*%0A${formData.message}`;

    // Número de WhatsApp (sin espacios ni símbolos)
    const phoneNumber = "51970862081";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;

    // Abrir WhatsApp
    window.open(whatsappUrl, "_blank");

    // Mostrar mensaje de confirmación
    toast({
      title: "✅ Solicitud enviada correctamente",
      description:
        "Tu cotización será respondida en menos de 24 horas. ¡Gracias por contactarme!",
      duration: 5000,
    });

    // Limpiar formulario
    setFormData({
      name: "",
      email: "",
      company: "",
      projectType: "",
      message: "",
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <section
      id="contacto"
      className="py-20 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800 relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-transparent to-indigo-600/5"></div>
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-gradient-to-bl from-blue-500/8 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-gradient-to-tr from-indigo-500/8 to-transparent rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        {/* Header */}
        <AnimatedSection animation="fade-in-up" className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <MessageCircle className="h-8 w-8 text-blue-400" />
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-white">
              Hablemos de tu proyecto
            </h2>
          </div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            ¿Tienes una idea? ¡Me encantaría escucharla! Contacta conmigo y
            transformemos tu visión en realidad.
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <AnimatedSection animation="fade-in-left" className="space-y-8">
            <div>
              <h3 className="text-xl font-poppins font-semibold text-white mb-6">
                Información de contacto
              </h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <AnimatedSection
                    key={index}
                    animation="fade-in-left"
                    delay={200 + index * 150}
                    className="flex items-center space-x-4"
                  >
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg">
                      <info.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="font-roboto font-medium text-blue-400">
                        {info.title}
                      </div>
                      {info.href && info.href !== "#" ? (
                        <a
                          href={info.href}
                          className="text-gray-300 hover:text-blue-400 transition-colors relative z-20"
                          target={
                            info.href.startsWith("http") ? "_blank" : undefined
                          }
                          rel={
                            info.href.startsWith("http")
                              ? "noopener noreferrer"
                              : undefined
                          }
                        >
                          {info.value}
                        </a>
                      ) : (
                        <div className="text-gray-300">{info.value}</div>
                      )}
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>

            {/* Quick Contact */}
            <AnimatedSection animation="scale-in" delay={800}>
              <Card className="shadow-2xl border-0 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-white">
                    <MessageCircle className="h-5 w-5 text-green-400" />
                    <span>Contacto Rápido</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-gray-400">
                    ¿Necesitas una respuesta inmediata? Escríbeme por WhatsApp.
                  </p>
                  <a
                    href="https://wa.me/51970862081?text=Hola%20Anthony,%20me%20interesa%20conocer%20más%20sobre%20tus%20servicios"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative z-30 w-full inline-flex items-center justify-center px-4 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/25 cursor-pointer"
                  >
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Abrir WhatsApp
                  </a>
                </CardContent>
              </Card>
            </AnimatedSection>
          </AnimatedSection>

          {/* Contact Form */}
          <AnimatedSection animation="fade-in-right" className="lg:col-span-2">
            <Card className="shadow-2xl border-0 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50">
              <CardHeader>
                <CardTitle className="text-2xl font-poppins font-semibold text-white">
                  Solicitar Cotización
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form
                  onSubmit={handleSubmit}
                  className="space-y-6 relative z-20"
                >
                  <AnimatedSection animation="fade-in-up" delay={200}>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-gray-300">
                          Nombre completo *
                        </Label>
                        <Input
                          id="name"
                          type="text"
                          placeholder="Tu nombre"
                          value={formData.name}
                          onChange={(e) =>
                            handleInputChange("name", e.target.value)
                          }
                          required
                          className="bg-gray-700/50 border-gray-600/50 text-white placeholder:text-gray-400 focus:border-blue-400 focus:ring-blue-400/20"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-gray-300">
                          Email *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="tu@email.com"
                          value={formData.email}
                          onChange={(e) =>
                            handleInputChange("email", e.target.value)
                          }
                          required
                          className="bg-gray-700/50 border-gray-600/50 text-white placeholder:text-gray-400 focus:border-blue-400 focus:ring-blue-400/20"
                        />
                      </div>
                    </div>
                  </AnimatedSection>

                  <AnimatedSection animation="fade-in-up" delay={400}>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="company" className="text-gray-300">
                          Empresa
                        </Label>
                        <Input
                          id="company"
                          type="text"
                          placeholder="Nombre de tu empresa"
                          value={formData.company}
                          onChange={(e) =>
                            handleInputChange("company", e.target.value)
                          }
                          className="bg-gray-700/50 border-gray-600/50 text-white placeholder:text-gray-400 focus:border-blue-400 focus:ring-blue-400/20"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="projectType" className="text-gray-300">
                          Tipo de proyecto *
                        </Label>
                        <Select
                          value={formData.projectType}
                          onValueChange={(value) =>
                            handleInputChange("projectType", value)
                          }
                          required
                        >
                          <SelectTrigger className="bg-gray-700/50 border-gray-600/50 text-white focus:border-blue-400 focus:ring-blue-400/20 relative z-30">
                            <SelectValue
                              placeholder="Selecciona un tipo"
                              className="text-gray-400"
                            />
                          </SelectTrigger>
                          <SelectContent className="bg-gray-800 border-gray-700 relative z-50">
                            <SelectItem
                              value="web"
                              className="text-white hover:bg-gray-700"
                            >
                              Desarrollo Web
                            </SelectItem>
                            <SelectItem
                              value="system"
                              className="text-white hover:bg-gray-700"
                            >
                              Sistema Empresarial
                            </SelectItem>
                            <SelectItem
                              value="automation"
                              className="text-white hover:bg-gray-700"
                            >
                              Automatización
                            </SelectItem>
                            <SelectItem
                              value="consulting"
                              className="text-white hover:bg-gray-700"
                            >
                              Consultoría
                            </SelectItem>
                            <SelectItem
                              value="other"
                              className="text-white hover:bg-gray-700"
                            >
                              Otro
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </AnimatedSection>

                  <AnimatedSection animation="fade-in-up" delay={600}>
                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-gray-300">
                        Describe tu proyecto *
                      </Label>
                      <Textarea
                        id="message"
                        placeholder="Cuéntame sobre tu proyecto, objetivos, timeline y cualquier detalle importante..."
                        value={formData.message}
                        onChange={(e) =>
                          handleInputChange("message", e.target.value)
                        }
                        required
                        rows={6}
                        className="bg-gray-700/50 border-gray-600/50 text-white placeholder:text-gray-400 focus:border-blue-400 focus:ring-blue-400/20 resize-none"
                      />
                    </div>
                  </AnimatedSection>

                  <AnimatedSection animation="scale-in" delay={800}>
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold hover:from-blue-600 hover:to-indigo-700 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 relative z-30"
                    >
                      <Send className="h-5 w-5 mr-2" />
                      Enviar mensaje
                    </Button>
                  </AnimatedSection>
                </form>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    message: ""
  });

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "anthony.chavez@email.com",
      href: "mailto:anthony.chavez@email.com"
    },
    {
      icon: Phone,
      title: "WhatsApp",
      value: "+51 999 999 999",
      href: "https://wa.me/+51999999999"
    },
    {
      icon: MapPin,
      title: "Ubicación",
      value: "Lima, Perú",
      href: "#"
    },
    {
      icon: Clock,
      title: "Horario",
      value: "Lun - Vie: 9AM - 6PM",
      href: "#"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically send the form data to your backend
    console.log("Form data:", formData);
    
    toast({
      title: "¡Mensaje enviado!",
      description: "Te contactaré pronto para discutir tu proyecto.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      company: "",
      projectType: "",
      message: ""
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contacto" className="py-20 section-pattern">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-primary mb-4">
            Hablemos de tu proyecto
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            ¿Tienes una idea? ¡Me encantaría escucharla! Contacta conmigo y transformemos tu visión en realidad.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="space-y-8 animate-slide-in">
            <div>
              <h3 className="text-xl font-poppins font-semibold text-primary mb-6">
                Información de contacto
              </h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-lg hero-gradient flex items-center justify-center">
                      <info.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="font-roboto font-medium text-primary">{info.title}</div>
                      {info.href && info.href !== "#" ? (
                        <a 
                          href={info.href}
                          className="text-muted-foreground hover:text-secondary transition-colors"
                          target={info.href.startsWith('http') ? '_blank' : undefined}
                          rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        >
                          {info.value}
                        </a>
                      ) : (
                        <div className="text-muted-foreground">{info.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Contact */}
            <Card className="shadow-soft border-0">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-primary">
                  <MessageCircle className="h-5 w-5" />
                  <span>Contacto Rápido</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground">
                  ¿Necesitas una respuesta inmediata? Escríbeme por WhatsApp.
                </p>
                <a 
                  href="https://wa.me/+51999999999?text=Hola%20Anthony,%20me%20interesa%20conocer%20más%20sobre%20tus%20servicios"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center px-4 py-2 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors duration-300"
                >
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Abrir WhatsApp
                </a>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 animate-fade-in">
            <Card className="shadow-card border-0">
              <CardHeader>
                <CardTitle className="text-2xl font-poppins font-semibold text-primary">
                  Solicitar Cotización
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nombre completo *</Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Tu nombre"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        required
                        className="border-muted-foreground/20 focus:border-secondary"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="tu@email.com"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        required
                        className="border-muted-foreground/20 focus:border-secondary"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="company">Empresa</Label>
                      <Input
                        id="company"
                        type="text"
                        placeholder="Nombre de tu empresa"
                        value={formData.company}
                        onChange={(e) => handleInputChange("company", e.target.value)}
                        className="border-muted-foreground/20 focus:border-secondary"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="projectType">Tipo de proyecto *</Label>
                      <Select value={formData.projectType} onValueChange={(value) => handleInputChange("projectType", value)}>
                        <SelectTrigger className="border-muted-foreground/20 focus:border-secondary">
                          <SelectValue placeholder="Selecciona un tipo" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="web">Desarrollo Web</SelectItem>
                          <SelectItem value="system">Sistema Empresarial</SelectItem>
                          <SelectItem value="automation">Automatización</SelectItem>
                          <SelectItem value="consulting">Consultoría</SelectItem>
                          <SelectItem value="other">Otro</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Describe tu proyecto *</Label>
                    <Textarea
                      id="message"
                      placeholder="Cuéntame sobre tu proyecto, objetivos, timeline y cualquier detalle importante..."
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      required
                      rows={6}
                      className="border-muted-foreground/20 focus:border-secondary resize-none"
                    />
                  </div>

                  <Button 
                    type="submit"
                    size="lg"
                    className="w-full hero-gradient text-white font-semibold hover:shadow-lg transition-all duration-300"
                  >
                    <Send className="h-5 w-5 mr-2" />
                    Enviar mensaje
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
import { Mail, Phone, MapPin, Linkedin, Github, Facebook, Code2 } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Inicio", href: "#inicio" },
    { name: "Sobre mí", href: "#sobre-mi" },
    { name: "Servicios", href: "#servicios" },
    { name: "Portafolio", href: "#portafolio" },
    { name: "Testimonios", href: "#testimonios" },
    { name: "Contacto", href: "#contacto" }
  ];

  const services = [
    "Desarrollo Web",
    "Sistemas Empresariales", 
    "Automatización",
    "Consultoría Tech"
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/anthony-chavez-lujan",
      icon: Linkedin
    },
    {
      name: "GitHub", 
      href: "https://github.com/anthony-chavez",
      icon: Github
    },
    {
      name: "Facebook",
      href: "https://facebook.com/anthony.chavez.dev",
      icon: Facebook
    }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 lg:px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center">
                <Code2 className="h-5 w-5 text-white" />
              </div>
              <span className="font-poppins font-semibold text-lg">
                Anthony Chávez
              </span>
            </div>
            <p className="text-white/80 leading-relaxed">
              Ingeniero de sistemas especializado en desarrollo web, 
              sistemas empresariales y automatización de procesos.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-secondary transition-colors duration-300"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-poppins font-semibold text-lg">Enlaces rápidos</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-white/80 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-poppins font-semibold text-lg">Servicios</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service} className="text-white/80">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-poppins font-semibold text-lg">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-secondary" />
                <a 
                  href="mailto:anthony.chavez@email.com"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  anthony.chavez@email.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-secondary" />
                <a 
                  href="https://wa.me/+51999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  +51 999 999 999
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-secondary" />
                <span className="text-white/80">Lima, Perú</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-white/80 text-sm">
            © {currentYear} Anthony Chávez Lujan. Todos los derechos reservados.
          </p>
          <div className="flex items-center space-x-6 text-sm text-white/80">
            <button 
              onClick={() => scrollToSection("#inicio")}
              className="hover:text-white transition-colors"
            >
              Política de Privacidad
            </button>
            <button 
              onClick={() => scrollToSection("#inicio")}
              className="hover:text-white transition-colors"
            >
              Términos de Servicio
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
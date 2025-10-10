import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Endereço",
      content: "Rua do Comércio Nº 659, Centro",
      subtitle: "CEP: 65274-000 - Nova Olinda do Maranhão-MA",
    },
    {
      icon: Phone,
      title: "Telefone",
      content: "(98) 8497-1655",
      link: "https://wa.me/5598984971655",
    },
    {
      icon: Mail,
      title: "E-mail",
      content: "playfotosatendimento@gmail.com",
      link: "mailto:playfotosatendimento@gmail.com",
    },
    {
      icon: Clock,
      title: "Horário",
      content: "Segunda a Sexta",
      subtitle: "8:00 às 18:30",
    },
  ];

  return (
    <section id="contato" className="py-12 sm:py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-white">
            Entre em contato
          </h2>
          <p className="text-base sm:text-lg text-white/90">
            Estamos prontos para transformar seus momentos em memórias inesquecíveis
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto mb-8 sm:mb-12">
          {contactInfo.map((info, index) => (
            <Card
              key={index}
              className="border-2 border-card hover:border-primary hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-card"
            >
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/20 mb-4">
                  <info.icon className="w-6 h-6 text-primary-light" />
                </div>
                <h3 className="font-semibold mb-2 text-white">{info.title}</h3>
                {info.link ? (
                  <a
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/80 hover:text-primary-light transition-colors"
                  >
                    {info.content}
                  </a>
                ) : (
                  <p className="text-white/80">{info.content}</p>
                )}
                {info.subtitle && (
                  <p className="text-sm text-white/70 mt-1">{info.subtitle}</p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-8 sm:mb-12 max-w-2xl mx-auto">
          <Button
            size="lg"
            asChild
            className="bg-primary hover:bg-primary-light shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 w-full sm:w-auto"
          >
            <a
              href="https://wa.me/5598984971655"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Phone className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              WhatsApp
            </a>
          </Button>
          
          <Button
            size="lg"
            variant="outline"
            asChild
            className="border-2 border-primary text-primary hover:bg-primary hover:text-white shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 w-full sm:w-auto"
          >
            <a
              href="https://www.instagram.com/oficialplayfotos/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              Instagram
            </a>
          </Button>
          
          <Button
            size="lg"
            variant="outline"
            asChild
            className="border-2 border-primary text-primary hover:bg-primary hover:text-white shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 w-full sm:w-auto"
          >
            <a
              href="https://www.facebook.com/PlayFotos/?locale=pt_BR"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              Facebook
            </a>
          </Button>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-2 border-card overflow-hidden bg-card">
            <CardContent className="p-0">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.123456789!2d-45.123456!3d-4.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNMKwMDcnMjQuNCJTIDQ1wrAwNycyNC40Ilc!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                width="100%"
                height="300"
                className="sm:h-[400px]"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização PLAYFOTOS"
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;

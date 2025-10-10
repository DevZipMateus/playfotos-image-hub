import { Camera, Printer, Image, FileEdit, Palette, Video } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Camera,
      title: "Ensaios fotográficos",
      description: "Em estúdio ou externos - infantis, gestantes, casais, família, formandos.",
    },
    {
      icon: Video,
      title: "Cobertura de eventos",
      description: "Casamentos, aniversários, formaturas, eventos corporativos e religiosos.",
    },
    {
      icon: Image,
      title: "Restauração de fotografias",
      description: "Digitalização e tratamento de imagens danificadas ou antigas.",
    },
    {
      icon: FileEdit,
      title: "Edição e tratamento de imagem",
      description: "Correção de cor, retoque e montagem criativa profissional.",
    },
    {
      icon: Printer,
      title: "Impressão digital rápida",
      description: "Para trabalhos escolares, profissionais e empresariais.",
    },
    {
      icon: Palette,
      title: "Serviços gráficos",
      description: "Cartões de visita, panfletos, banners, faixas, adesivos e material promocional.",
    },
  ];

  return (
    <section id="servicos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Serviços
          </h2>
          <p className="text-lg text-white/90">
            Oferecemos uma gama completa de serviços profissionais para atender todas as suas 
            necessidades em fotografia, impressão e criação visual.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={index}
              className="border-2 border-card hover:border-primary hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group bg-card"
            >
              <CardHeader>
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/20 mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <service.icon className="w-7 h-7 text-primary-light group-hover:text-white transition-colors" />
                </div>
                <CardTitle className="text-xl text-white">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/80">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

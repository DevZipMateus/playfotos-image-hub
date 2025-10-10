import { Target, Eye, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Missão",
      description:
        "Proporcionar aos clientes de Nova Olinda do Maranhão e região soluções completas em fotografia e impressão com excelência, capturando emoções, preservando lembranças e oferecendo serviços confiáveis, acessíveis e personalizados.",
    },
    {
      icon: Eye,
      title: "Visão",
      description:
        "Ser referência local em produção fotográfica e impressão de qualidade, reconhecida por unir criatividade, tecnologia e atendimento humanizado, tornando momentos em memórias duradouras.",
    },
    {
      icon: Heart,
      title: "Valores",
      description:
        "Qualidade, compromisso, inovação e atenção aos detalhes. Buscamos sempre a excelência em cada atendimento, criando experiências que combinam confiabilidade, eficiência e cuidado personalizado.",
    },
  ];

  return (
    <section id="sobre" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Sobre nós
          </h2>
          <p className="text-lg text-white/90 leading-relaxed">
            Começamos nossa loja em 2005 com uma visão clara: levar aos nossos clientes produtos e 
            serviços com o mais alto padrão de qualidade e total garantia. Desde o início, nosso objetivo 
            foi oferecer soluções que realmente fizessem a diferença, proporcionando experiências que 
            combinassem inovação, confiabilidade e atenção aos detalhes.
          </p>
          <p className="text-lg text-white/90 leading-relaxed mt-4">
            Com uma vasta experiência adquirida ao longo dos anos no mercado de trabalho, conseguimos 
            entender profundamente as necessidades de nossos clientes e trazer soluções personalizadas 
            para cada demanda. Hoje, seguimos com a mesma missão de 2005: continuar inovando, aprimorando 
            nossos serviços e mantendo a confiança de todos que escolhem a Playfotos como parceira para 
            transformar ideias em realidade e momentos em lembranças inesquecíveis.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {values.map((value, index) => (
            <Card
              key={index}
              className="border-2 border-card hover:border-primary hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-card"
            >
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-6">
                  <value.icon className="w-8 h-8 text-primary-light" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">{value.title}</h3>
                <p className="text-white/80 leading-relaxed">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

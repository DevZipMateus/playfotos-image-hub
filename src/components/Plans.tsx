import { Wrench, Layout, Sticker, Scissors, Wand2, Lightbulb } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Plans = () => {
  const plans = [
    {
      icon: Layout,
      title: "Instalação de placas e sinalizações",
      description: "Montagem de placas em eventos, comércios, fachadas e decoração personalizada.",
    },
    {
      icon: Wrench,
      title: "Montagem de painéis e quadros",
      description: "Fixação e acabamento profissional de fotos, murais e banners.",
    },
    {
      icon: Sticker,
      title: "Impressão e aplicação de adesivos",
      description: "Para veículos, vitrines, paredes ou materiais promocionais.",
    },
    {
      icon: Scissors,
      title: "Manutenção e acabamento gráfico",
      description: "Ajuste, corte, laminação e tratamento de materiais impressos.",
    },
    {
      icon: Wand2,
      title: "Tratamento e edição técnica",
      description: "Correção de cores, retoques profissionais, restauração de fotos antigas.",
    },
    {
      icon: Lightbulb,
      title: "Consultoria técnica para projetos visuais",
      description: "Orientação sobre materiais, formatos, cores e posicionamento de placas, banners ou produtos gráficos.",
    },
  ];

  return (
    <section id="planos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Planos especializados
          </h2>
          <p className="text-lg text-muted-foreground">
            Oferecemos serviços técnicos especializados para garantir que seus projetos visuais 
            sejam executados com perfeição e profissionalismo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className="border-2 hover:border-primary hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <CardHeader>
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <plan.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
                </div>
                <CardTitle className="text-xl text-foreground">{plan.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{plan.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Plans;

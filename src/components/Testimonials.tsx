import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      text: "Atendimento excepcional! A qualidade das fotos do meu casamento superou todas as expectativas. Recomendo de olhos fechados!",
    },
    {
      name: "João Santos",
      text: "Profissionais dedicados e atenciosos. Os brindes personalizados ficaram perfeitos. Ótimo custo-benefício!",
    },
    {
      name: "Ana Costa",
      text: "A restauração das fotos antigas da minha família ficou incrível. Muito cuidado e carinho em cada detalhe.",
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-secondary/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-white">
            Depoimentos
          </h2>
          <p className="text-base sm:text-lg text-white/90">
            Veja o que nossos clientes dizem sobre nosso trabalho
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="border-2 border-card hover:border-primary hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-card"
            >
              <CardContent className="p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary-light text-primary-light" />
                  ))}
                </div>
                <p className="text-white/80 mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                <p className="font-semibold text-white">{testimonial.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

import { ImageIcon, BookOpen, Gift, Calendar, Frame, IdCard } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Products = () => {
  const products = [
    {
      icon: ImageIcon,
      title: "Revelação de fotos",
      description: "Fotos digitais e analógicas em diferentes tamanhos e acabamentos.",
    },
    {
      icon: Frame,
      title: "Ampliações e painéis",
      description: "Fotos em grande formato, ideais para decoração.",
    },
    {
      icon: BookOpen,
      title: "Álbuns e fotolivros",
      description: "Personalizados para casamentos, aniversários, formaturas e momentos especiais.",
    },
    {
      icon: Gift,
      title: "Convites e lembrancinhas",
      description: "Para casamentos, aniversários, batizados, chá revelação e eventos em geral.",
    },
    {
      icon: Calendar,
      title: "Brindes personalizados",
      description: "Canecas, camisetas, squeezes, chaveiros, almofadas e outros itens com fotos e artes exclusivas.",
    },
    {
      icon: IdCard,
      title: "Documentação fotográfica",
      description: "Fotos 3x4, passaporte e outros formatos oficiais.",
    },
  ];

  return (
    <section id="produtos" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Produtos
          </h2>
          <p className="text-lg text-muted-foreground">
            Transformamos suas fotos em produtos únicos e memoráveis, perfeitos para presentear 
            ou decorar seus ambientes favoritos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <Card
              key={index}
              className="border-2 hover:border-primary hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group bg-white"
            >
              <CardHeader>
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <product.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
                </div>
                <CardTitle className="text-xl text-foreground">{product.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{product.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;

import { Button } from "@/components/ui/button";
import { Camera, Sparkles, Award } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      <div className="absolute inset-0 bg-black/40" />
      
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white bg-black/20 backdrop-blur-sm rounded-3xl p-8 md:p-12">
          <div className="flex justify-center gap-4 mb-6 flex-wrap">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <Camera className="w-5 h-5" />
              <span className="text-sm font-medium">Desde 2005</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <Award className="w-5 h-5" />
              <span className="text-sm font-medium">Qualidade Garantida</span>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            PLAYFOTOS
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-light mb-8 animate-fade-in opacity-90">
            100% Digital 100% Você
          </h2>
          
          <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in opacity-90">
            Transformamos seus momentos especiais em memórias eternas com fotografia profissional, 
            impressão de alta qualidade e produtos personalizados.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button
              size="lg"
              onClick={() => {
                const element = document.getElementById("servicos");
                if (element) {
                  const offset = 80;
                  const elementPosition = element.getBoundingClientRect().top;
                  const offsetPosition = elementPosition + window.pageYOffset - offset;
                  window.scrollTo({ top: offsetPosition, behavior: "smooth" });
                }
              }}
              className="bg-white text-primary hover:bg-white/90 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 font-semibold px-8 py-6 text-lg"
            >
              <Sparkles className="mr-2 h-5 w-5" />
              Nossos serviços
            </Button>
            
            <Button
              size="lg"
              onClick={() => {
                const element = document.getElementById("contato");
                if (element) {
                  const offset = 80;
                  const elementPosition = element.getBoundingClientRect().top;
                  const offsetPosition = elementPosition + window.pageYOffset - offset;
                  window.scrollTo({ top: offsetPosition, behavior: "smooth" });
                }
              }}
              className="bg-white/10 text-white border-2 border-white/60 hover:bg-white hover:text-primary backdrop-blur-sm shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 font-semibold px-8 py-6 text-lg"
            >
              Entre em contato
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

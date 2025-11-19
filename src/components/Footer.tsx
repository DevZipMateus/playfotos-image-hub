import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <img src="/logo.png" alt="Logo" className="h-12 mb-4" />
            <p className="text-muted-foreground">
              Transformando momentos em memórias inesquecíveis através da fotografia profissional.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contato</h3>
            <div className="space-y-3">
              <a href="tel:+5511999999999" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                <Phone className="h-4 w-4" />
                <span>(11) 99999-9999</span>
              </a>
              <a href="mailto:contato@exemplo.com" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                <Mail className="h-4 w-4" />
                <span>contato@exemplo.com</span>
              </a>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>São Paulo, SP</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Links Rápidos</h3>
            <nav className="space-y-2">
              <a href="#sobre" className="block text-muted-foreground hover:text-foreground transition-colors">
                Sobre
              </a>
              <a href="#servicos" className="block text-muted-foreground hover:text-foreground transition-colors">
                Serviços
              </a>
              <a href="#produtos" className="block text-muted-foreground hover:text-foreground transition-colors">
                Produtos
              </a>
              <a href="#galeria" className="block text-muted-foreground hover:text-foreground transition-colors">
                Galeria
              </a>
              <a href="#contato" className="block text-muted-foreground hover:text-foreground transition-colors">
                Contato
              </a>
            </nav>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

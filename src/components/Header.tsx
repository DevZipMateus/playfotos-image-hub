import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setIsMobileMenuOpen(false);
    }
  };
  const navItems = [{
    label: "Início",
    id: "hero"
  }, {
    label: "Sobre",
    id: "sobre"
  }, {
    label: "Serviços",
    id: "servicos"
  }, {
    label: "Produtos",
    id: "produtos"
  }, {
    label: "Planos",
    id: "planos"
  }, {
    label: "Contato",
    id: "contato"
  }];
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-secondary/95 backdrop-blur-md shadow-md" : "bg-secondary"}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <div className="flex items-center">
            <img src={logo} alt="PLAYFOTOS" className="h-20 sm:h-28 md:h-32 lg:h-36 w-auto" />
          </div>

          <nav className="hidden md:flex items-center gap-4 lg:gap-8">
            {navItems.map(item => <button key={item.id} onClick={() => scrollToSection(item.id)} className="text-white hover:text-primary-light font-medium transition-colors relative group text-sm lg:text-base">
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-light transition-all duration-300 group-hover:w-full" />
              </button>)}
          </nav>

          <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Menu">
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && <nav className="md:hidden py-4 border-t border-white/20">
            {navItems.map(item => <button key={item.id} onClick={() => scrollToSection(item.id)} className="block w-full text-left py-3 text-white hover:text-primary-light hover:bg-white/10 transition-colors px-4 rounded-lg">
                {item.label}
              </button>)}
          </nav>}
      </div>
    </header>;
};
export default Header;
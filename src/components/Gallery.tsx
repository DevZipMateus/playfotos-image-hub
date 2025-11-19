import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const Gallery = () => {
  const [isOpen, setIsOpen] = useState(false);

  const photos = [
    "/fotos/01.jpg",
    "/fotos/03.jpg",
    "/fotos/DSC_0185.jpg",
    "/fotos/WhatsApp Image 2025-10-16 at 17.08.04 (3).jpeg",
    "/fotos/WhatsApp Image 2025-10-23 at 18.23.39 (1).jpeg",
    "/fotos/WhatsApp Image 2025-10-24 at 08.57.39.jpeg",
    "/fotos/WhatsApp Image 2025-10-24 at 08.57.39 (1).jpeg",
    "/fotos/WhatsApp Image 2025-10-24 at 08.57.40.jpeg",
    "/fotos/WhatsApp Image 2025-10-24 at 08.57.41 (1).jpeg",
    "/fotos/WhatsApp Image 2025-10-24 at 08.57.42.jpeg",
    "/fotos/WhatsApp Image 2025-10-24 at 08.57.42 (1).jpeg",
    "/fotos/WhatsApp Image 2025-10-24 at 08.57.43.jpeg",
    "/fotos/WhatsApp Image 2025-10-24 at 08.57.44.jpeg",
    "/fotos/WhatsApp Image 2025-10-24 at 08.57.44 (1).jpeg",
    "/fotos/WhatsApp Image 2025-10-24 at 08.57.45.jpeg",
    "/fotos/WhatsApp Image 2025-10-24 at 08.57.46.jpeg",
    "/fotos/WhatsApp Image 2025-10-24 at 08.57.46 (1).jpeg",
    "/fotos/WhatsApp Image 2025-10-24 at 08.57.46 (2).jpeg",
    "/fotos/WhatsApp Image 2025-10-24 at 08.57.47.jpeg",
    "/fotos/Captura de tela 2025-10-24 120850.jpg",
  ];

  const visiblePhotos = photos.slice(0, 8);
  const hiddenPhotos = photos.slice(8);

  return (
    <section id="galeria" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Galeria de Fotos</h2>
          <p className="text-muted-foreground">Confira alguns dos nossos melhores momentos</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {visiblePhotos.map((photo, index) => (
            <div
              key={index}
              className="aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <img
                src={photo}
                alt={`Foto ${index + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>

        <Collapsible open={isOpen} onOpenChange={setIsOpen}>
          <CollapsibleContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
              {hiddenPhotos.map((photo, index) => (
                <div
                  key={index + 8}
                  className="aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <img
                    src={photo}
                    alt={`Foto ${index + 9}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </CollapsibleContent>

          <div className="flex justify-center mt-8">
            <CollapsibleTrigger asChild>
              <button className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
                <span>{isOpen ? "Ver menos" : "Ver mais fotos"}</span>
                <ChevronDown
                  className={`h-5 w-5 transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
            </CollapsibleTrigger>
          </div>
        </Collapsible>
      </div>
    </section>
  );
};

export default Gallery;

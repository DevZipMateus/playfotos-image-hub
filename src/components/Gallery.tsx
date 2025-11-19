import { useState, useEffect } from "react";
import { ChevronDown, ChevronLeft, ChevronRight, X } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const Gallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const goToNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % photos.length);
  };

  const goToPrevious = () => {
    setCurrentImageIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      
      if (e.key === "ArrowRight") {
        goToNext();
      } else if (e.key === "ArrowLeft") {
        goToPrevious();
      } else if (e.key === "Escape") {
        setLightboxOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen]);

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
              className="aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => openLightbox(index)}
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
                  className="aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                  onClick={() => openLightbox(index + 8)}
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

        <Dialog open={lightboxOpen} onOpenChange={setLightboxOpen}>
          <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 bg-black/95 border-none">
            <div className="relative w-full h-full flex items-center justify-center">
              <button
                onClick={() => setLightboxOpen(false)}
                className="absolute top-4 right-4 z-50 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <X className="h-6 w-6 text-white" />
              </button>

              <button
                onClick={goToPrevious}
                className="absolute left-4 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <ChevronLeft className="h-8 w-8 text-white" />
              </button>

              <img
                src={photos[currentImageIndex]}
                alt={`Foto ${currentImageIndex + 1}`}
                className="max-w-full max-h-[90vh] object-contain"
              />

              <button
                onClick={goToNext}
                className="absolute right-4 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <ChevronRight className="h-8 w-8 text-white" />
              </button>

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm bg-black/50 px-4 py-2 rounded-full">
                {currentImageIndex + 1} / {photos.length}
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Gallery;

import { useState, useEffect, useRef } from 'react';
import { Dialog, DialogContent, DialogTrigger } from '../ui/dialog';
import { Button } from '../ui/button';

export const VideosSection = () => {
  const [isInView, setIsInView] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      // Change image only when MORE than 10% visible
      if (entry.intersectionRatio > 0.1) {
        setIsInView(true);
      } else {
        setIsInView(false);
      }
    }, {
      threshold: [0, 0.1, 0.2, 0.5, 1]
    });
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center py-12 px-4 md:px-8">
      <div className="max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full mx-0 px-0">
        {/* Coluna 1 - Texto */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-5xl font-montserrat font-black uppercase">
            VEJA TODOS OS VÍDEOS
          </h2>
          <p className="text-base md:text-lg text-foreground/80 font-inter font-extralight">
            Não aceite as coisas como são. Sua perspectiva única é o que precisamos para quebrar paradigmas e evoluir. Vamos questionar e crescer juntos!
          </p>
          <Button 
            asChild
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold uppercase tracking-wider"
          >
            <a href="https://vimeo.com/theoriass" target="_blank" rel="noopener noreferrer">
              Clique aqui
            </a>
          </Button>
        </div>

        {/* Coluna 2 - Imagem */}
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <div className="cursor-pointer transition-transform duration-300 hover:scale-105">
              <img 
                src={isInView 
                  ? "https://cardeal.tv/wp-content/uploads/2025/07/tela2-3.png" 
                  : "https://cardeal.tv/wp-content/uploads/2025/07/tela1-3.png"
                } 
                alt="Veja todos os vídeos" 
                className="w-full h-auto transition-opacity duration-500" 
              />
            </div>
          </DialogTrigger>
          <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 bg-black border-border">
            <iframe 
              src="https://space-cardeal.lovable.app" 
              className="w-full h-[90vh]" 
              title="Cardeal Videos" 
              frameBorder="0" 
            />
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};
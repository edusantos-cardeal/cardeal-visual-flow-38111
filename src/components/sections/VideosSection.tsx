import { useState } from 'react';
import { Dialog, DialogContent, DialogTrigger } from '../ui/dialog';
import { Button } from '../ui/button';
export const VideosSection = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return <section className="relative min-h-screen flex items-center py-12 px-4 md:px-8">
      <div className="max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full mx-auto">
        {/* Coluna 1 - Texto */}
        <div className="space-y-6 mx-4 md:mx-[35px] text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-montserrat font-black uppercase">
            VEJA TODOS OS VÍDEOS
          </h2>
          <p className="text-base md:text-lg text-foreground/80 font-inter font-extralight">
            Não aceite as coisas como são. Sua perspectiva única é o que precisamos para quebrar paradigmas e evoluir. Vamos questionar e crescer juntos!
          </p>
          <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold uppercase tracking-wider">
            <a href="https://vimeo.com/theoriass" target="_blank" rel="noopener noreferrer">
              Clique aqui
            </a>
          </Button>
        </div>

        {/* Coluna 2 - Imagem (50% da área) */}
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <div 
              className="cursor-pointer transition-transform duration-300 hover:scale-105"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <img 
                src={isHovered ? "https://cardeal.tv/wp-content/uploads/2025/07/tela2-3.png" : "https://cardeal.tv/wp-content/uploads/2025/07/tela1-3.png"} 
                alt="Veja todos os vídeos" 
                className="w-full h-auto transition-opacity duration-300" 
              />
            </div>
          </DialogTrigger>
          <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 bg-black border-border">
            <iframe src="https://space-cardeal.lovable.app" className="w-full h-[90vh]" title="Cardeal Videos" frameBorder="0" />
          </DialogContent>
        </Dialog>
      </div>
    </section>;
};
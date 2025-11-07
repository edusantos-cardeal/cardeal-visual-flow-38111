import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogTrigger } from './ui/dialog';
import { useLanguage } from '@/contexts/LanguageContext';
export const Sidebar = () => {
  const {
    t
  } = useLanguage();
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videos = ['https://cardeal.tv/wp-content/uploads/2025/08/Style_static_blackandwhite_202508121452_0x.mp4', 'https://cardeal.tv/wp-content/uploads/2025/08/video1.gif', 'https://cardeal.tv/wp-content/uploads/2025/08/video2.gif'];
  const sections = [{
    id: 'hero',
    label: t('menu.home')
  }, {
    id: 'about',
    label: t('menu.about')
  }, {
    id: 'services',
    label: t('menu.services')
  }, {
    id: 'gallery',
    label: t('menu.gallery')
  }, {
    id: 'brands',
    label: t('menu.brands')
  }];

  const handleTalentosClick = () => {
    window.open('https://talent-arena-showcase-61.lovable.app/', '_blank');
  };
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  const handleVideoClick = () => {
    setIsVideoOpen(true);
    setCurrentVideoIndex(Math.floor(Math.random() * videos.length));
    setTimeout(() => {
      setIsVideoOpen(false);
    }, 8000);
  };
  useEffect(() => {
    if (!isVideoOpen) {
      setCurrentVideoIndex(0);
    }
  }, [isVideoOpen]);
  return <>
      {/* Logo */}
      <div className="fixed top-6 left-4 z-[100]">
        <img src="https://cardeal.tv/wp-content/uploads/2025/05/LOGO_WHITE_PNG.png" alt="Cardeal" className="w-12 h-12 object-contain" />
      </div>

      {/* Sidebar */}
      <div className={`hidden md:flex fixed left-0 top-0 h-full w-16 flex-col items-center py-4 z-[99] bg-background/80 backdrop-blur-sm`} style={{
      borderRight: `1px solid hsl(var(--border))`
    }}>
        {/* Menu e dot centralizados */}
        <div className="flex-1 flex flex-col items-center justify-center gap-4 mx-0 py-2 px-1 mt-12">
          <nav className="flex flex-col gap-1 items-center mx-0 py-0">
            {sections.map(section => <button key={section.id} onClick={() => scrollToSection(section.id)} className={`text-foreground hover:text-primary [writing-mode:vertical-rl] rotate-180 mx-0 my-1 text-sm px-1 py-1`}>
                {section.label}
              </button>)}
            <button onClick={handleTalentosClick} className={`text-foreground hover:text-primary [writing-mode:vertical-rl] rotate-180 mx-0 my-1 text-sm px-1 py-1`}>
              Talentos
            </button>
          </nav>

          <Dialog open={isVideoOpen} onOpenChange={setIsVideoOpen}>
            <DialogTrigger asChild>
              <button onClick={handleVideoClick} className="w-3 h-3 rounded-full bg-primary animate-pulse my-4" />
            </DialogTrigger>
            <DialogContent className="bg-black border-border max-w-4xl">
              <div className="aspect-video bg-black rounded flex items-center justify-center">
                {videos[currentVideoIndex].endsWith('.gif') ? <img src={videos[currentVideoIndex]} alt="Video" className="w-full h-full object-contain" /> : <video src={videos[currentVideoIndex]} autoPlay muted className="w-full h-full object-contain" />}
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </>;
};
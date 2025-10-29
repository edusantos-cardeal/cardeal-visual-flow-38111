import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogTrigger } from './ui/dialog';
import { useLanguage } from '@/contexts/LanguageContext';
import { useColorOnWhiteBackground } from '@/hooks/useColorOnWhiteBackground';
export const Sidebar = () => {
  const {
    t
  } = useLanguage();
  const isOnWhite = useColorOnWhiteBackground();
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
  }, {
    id: 'contact',
    label: t('menu.contact')
  }];
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
      <div className={`hidden md:flex fixed left-0 top-0 h-full w-16 flex-col items-center py-32 z-[99] ${isOnWhite ? 'bg-white/80' : 'bg-background/80'} backdrop-blur-sm`} style={{
      borderRight: `1px solid ${isOnWhite ? '#000' : 'hsl(var(--border))'}`
    }}>
        {/* Menu e dot centralizados */}
        <div className="flex-1 flex flex-col items-center justify-center gap-1 mx-0 px-0 py-0">
          <nav className="flex flex-col gap-1 items-center mx-[9px] py-0">
            {sections.map(section => <button key={section.id} onClick={() => scrollToSection(section.id)} className={`${isOnWhite ? 'text-black' : 'text-foreground'} hover:text-primary [writing-mode:vertical-rl] rotate-180 mx-0 my-[15px] text-base px-[4px] py-[3px]`}>
                {section.label}
              </button>)}
          </nav>

          <Dialog open={isVideoOpen} onOpenChange={setIsVideoOpen}>
            <DialogTrigger asChild>
              <button onClick={handleVideoClick} className="w-3 h-3 rounded-full bg-primary animate-pulse my-12" />
            </DialogTrigger>
            <DialogContent className="bg-black border-border max-w-4xl">
              <div className="aspect-video bg-black rounded flex items-center justify-center">
                {videos[currentVideoIndex].endsWith('.gif') ? <img src={videos[currentVideoIndex]} alt="Video" className="w-full h-full object-contain" /> : <video src={videos[currentVideoIndex]} autoPlay muted className="w-full h-full object-contain" />}
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Botão de contato fixo no bottom */}
        <button onClick={() => scrollToSection('contact')} className={`w-full ${isOnWhite ? 'bg-black text-white' : 'bg-foreground text-background'} hover:opacity-90 -rotate-90 whitespace-nowrap py-4 px-6 text-[10px] font-bold tracking-wider origin-center`}>
          {t('menu.contact.button')}
        </button>
      </div>
    </>;
};
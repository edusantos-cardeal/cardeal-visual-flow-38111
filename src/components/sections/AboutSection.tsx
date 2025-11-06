import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export const AboutSection = () => {
  const { t } = useLanguage();
  const [irisPosition, setIrisPosition] = useState({ x: 50, y: 50 });
  const containerRef = useRef<HTMLDivElement>(null);
  const { ref: sectionRef, isVisible } = useScrollAnimation();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const eyeCenterX = rect.left + rect.width * 0.46;
      const eyeCenterY = rect.top + rect.height * 0.40;
      
      const angle = Math.atan2(e.clientY - eyeCenterY, e.clientX - eyeCenterX);
      const distance = Math.min(
        Math.sqrt(Math.pow(e.clientX - eyeCenterX, 2) + Math.pow(e.clientY - eyeCenterY, 2)) / 10,
        15
      );
      
      setIrisPosition({
        x: 50 + Math.cos(angle) * distance * 0.5,
        y: 50 + Math.sin(angle) * distance * 0.5,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className={`relative min-h-screen flex items-center py-8 md:py-12 px-4 md:px-8 transition-all duration-700 ${isVisible ? 'animate-zoom-in' : 'opacity-0'}`}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center w-full gap-12 px-4">
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <div 
            ref={containerRef}
            className="relative w-full overflow-hidden mx-auto"
            style={{
              maxWidth: '900px',
              aspectRatio: '16/7',
              isolation: 'isolate',
              boxSizing: 'border-box',
            }}
          >
            <div 
              className="absolute inset-0"
              style={{
                backgroundColor: '#fffff0',
                zIndex: 1,
                border: '1px solid #C20000',
              }}
            />
            <img
              src="https://cardeal.tv/wp-content/uploads/2025/06/iris.png"
              alt="Iris"
              className="absolute transition-all duration-100 ease-out"
              style={{
                width: '12%',
                aspectRatio: '1/1',
                top: `${irisPosition.y}%`,
                left: `${irisPosition.x}%`,
                zIndex: 2,
                pointerEvents: 'none',
                transform: 'translate(-50%, -50%)',
              }}
            />
            <img
              src="https://cardeal.tv/wp-content/uploads/2025/07/OLHAR_VAZADO4.webp"
              alt="Eye"
              className="absolute inset-0 w-full h-full object-cover"
              style={{
                zIndex: 3,
                pointerEvents: 'none',
                border: '1px solid #C20000',
                boxSizing: 'border-box',
              }}
            />
          </div>
        </div>
        
        <div className="w-full md:w-1/2 space-y-6 md:pl-16 text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-montserrat font-black uppercase tracking-tight">
            {t('about.title')}
          </h2>
          <div className="space-y-4 text-base md:text-lg text-foreground/80 font-inter font-extralight">
            <p>{t('about.p1')}</p>
            <p>{t('about.p2')}</p>
            <p>{t('about.p3')}</p>
            <p>{t('about.p4')}</p>
            <p>{t('about.p5')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

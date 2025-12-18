import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export const EnergySection = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <section 
      id="energy" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full opacity-70">
        <iframe
          src="https://player.vimeo.com/video/1034079051?background=1&autoplay=1&loop=1&muted=1&controls=0"
          className="absolute"
          style={{
            width: '177.77vh',
            height: '100vh',
            minWidth: '100vw',
            minHeight: '56.25vw',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            pointerEvents: 'none',
          }}
          frameBorder="0"
          allow="autoplay; fullscreen"
          title="Energy Background Video"
        />
      </div>
      
      {/* Content */}
      <div 
        ref={ref}
        className={`relative z-10 flex flex-col items-center justify-center py-12 md:py-20 px-4 md:px-8 transition-all duration-700 ${isVisible ? 'animate-zoom-in' : 'opacity-0'}`}
      >
        <h2 className="text-3xl md:text-5xl font-montserrat font-black uppercase mb-6 md:mb-8 text-center text-white">
          {t('energy.title')}
        </h2>
        <div className="max-w-3xl text-center text-sm md:text-lg text-white font-inter font-extralight px-4">
          <p>{t('energy.text')}</p>
        </div>
      </div>
    </section>
  );
};

import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export const EnergySection = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <section 
      ref={ref}
      id="energy" 
      className={`relative min-h-screen flex flex-col items-center justify-center py-12 px-8 transition-all duration-700 ${isVisible ? 'animate-zoom-in' : 'opacity-0'}`}
    >
      <h2 className="text-5xl font-montserrat font-black uppercase mb-8 text-center">
        {t('energy.title')}
      </h2>
      <div className="max-w-3xl text-center text-lg text-foreground/80 font-inter font-extralight">
        <p>{t('energy.text')}</p>
      </div>
    </section>
  );
};

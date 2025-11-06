import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
export const EnergySection = () => {
  const {
    t
  } = useLanguage();
  const {
    ref,
    isVisible
  } = useScrollAnimation();
  return (
    <section 
      ref={ref} 
      id="energy" 
      className={`relative min-h-screen flex flex-col items-center justify-center py-8 md:py-12 px-4 md:px-8 transition-all duration-700 ${isVisible ? 'animate-zoom-in' : 'opacity-0'}`}
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-montserrat font-black uppercase mb-8 text-center px-4">
        {t('energy.title')}
      </h2>
      <div className="relative flex min-h-[40vh] w-full items-center justify-center py-8 px-4">
        <div className="w-full max-w-4xl flex flex-wrap justify-center gap-4">
          <p className="font-inter uppercase text-center font-extralight text-base py-0">
            {t('energy.text')}
          </p>
        </div>
      </div>
    </section>
  );
};
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
      className={`relative min-h-screen flex flex-col items-center justify-center py-12 md:py-12 px-4 md:px-8 transition-all duration-700 ${isVisible ? 'animate-zoom-in' : 'opacity-0'}`}
    >
      <h2 className="text-3xl md:text-5xl font-montserrat font-black uppercase mb-6 md:mb-8 text-center">
        {t('energy.title')}
      </h2>
      <div className="relative flex min-h-[40vh] w-full items-center justify-center mx-0 py-6 md:py-[31px] my-0 px-4 md:px-[9px]">
        <div className="w-full md:w-[80vw] max-w-4xl flex flex-wrap justify-center gap-4">
          <p className="font-inter uppercase text-center font-extralight text-sm md:text-base py-0">
            {t('energy.text')}
          </p>
        </div>
      </div>
    </section>
  );
};
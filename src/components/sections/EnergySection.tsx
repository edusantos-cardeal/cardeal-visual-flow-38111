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
  return <section ref={ref} id="energy" className={`relative min-h-screen flex flex-col items-center justify-center py-12 px-8 transition-all duration-700 ${isVisible ? 'animate-zoom-in' : 'opacity-0'}`}>
      <h2 className="text-5xl font-montserrat font-black uppercase mb-8 text-center">
        {t('energy.title')}
      </h2>
      <div className="relative flex min-h-[40vh] w-full items-center justify-center mx-0 py-0 px-0">
        <div className="w-[80vw] max-w-4xl flex flex-wrap justify-center gap-4">
          <p className="font-montserrat uppercase text-center text-base font-extralight">
            {t('energy.text')}
          </p>
        </div>
      </div>
    </section>;
};
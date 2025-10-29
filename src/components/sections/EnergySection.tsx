import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { TextDisperse } from '../ui/text-disperse';

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
      <div className="relative flex min-h-[40vh] w-full items-center justify-center">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-10 left-1/2 size-full -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,hsl(var(--foreground)/.1),transparent_50%)] blur-[30px]"
        />
        <div className="w-[80vw] max-w-4xl flex flex-wrap justify-center gap-4">
          <TextDisperse className="text-[6vw] font-montserrat font-black uppercase">
            {t('energy.text')}
          </TextDisperse>
        </div>
      </div>
    </section>
  );
};

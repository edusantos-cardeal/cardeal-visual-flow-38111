import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export const MethodSection = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <section 
      ref={ref}
      id="method" 
      className={`absolute inset-0 z-10 flex flex-col items-center justify-center py-12 md:py-20 px-4 md:px-8 transition-all duration-700 ${isVisible ? 'animate-zoom-in' : 'opacity-0'}`}
    >
      <h2 className="text-3xl md:text-5xl font-montserrat font-black uppercase mb-6 md:mb-8 text-center text-white">
        {t('method.title')}
      </h2>
      <div className="max-w-3xl text-center text-sm md:text-lg text-white font-inter font-extralight px-4">
        <p>{t('method.text')}</p>
      </div>
    </section>
  );
};

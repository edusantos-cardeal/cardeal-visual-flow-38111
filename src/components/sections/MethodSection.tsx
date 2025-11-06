import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export const MethodSection = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <section 
      ref={ref}
      id="method" 
      className={`absolute inset-0 z-10 flex flex-col items-center justify-center py-20 px-8 transition-all duration-700 ${isVisible ? 'animate-zoom-in' : 'opacity-0'}`}
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-montserrat font-black uppercase mb-8 text-center text-white px-4">
        {t('method.title')}
      </h2>
      <div className="max-w-3xl text-center text-base md:text-lg text-white font-inter font-extralight px-4">
        <p>{t('method.text')}</p>
      </div>
    </section>
  );
};

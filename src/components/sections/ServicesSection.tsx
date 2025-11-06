import { ServiceAccordion } from '../ui/service-accordion';
import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
export const ServicesSection = () => {
  const {
    t
  } = useLanguage();
  const {
    ref,
    isVisible
  } = useScrollAnimation();
  const services = [{
    id: 1,
    title: t('services.editing'),
    description: t('services.editing.desc'),
    imageUrl: 'https://cardeal.tv/wp-content/uploads/2025/06/ESTRATEGIA.jpg'
  }, {
    id: 2,
    title: t('services.motion'),
    description: t('services.motion.desc'),
    imageUrl: 'https://cardeal.tv/wp-content/uploads/2025/06/producao-1.jpg'
  }, {
    id: 3,
    title: t('services.color'),
    description: t('services.color.desc'),
    imageUrl: 'https://cardeal.tv/wp-content/uploads/2025/06/directorArte-2.jpg'
  }, {
    id: 4,
    title: t('services.finishing'),
    description: t('services.finishing.desc'),
    imageUrl: 'https://cardeal.tv/wp-content/uploads/2025/06/POS_PRODUCAO.jpg'
  }];
  return (
    <section 
      ref={ref} 
      id="services" 
      className={`relative min-h-screen flex items-center justify-center py-8 md:py-12 px-4 md:px-8 transition-all duration-700 ${isVisible ? 'animate-zoom-in' : 'opacity-0'}`}
    >
      <div className="max-w-7xl w-full grid md:grid-cols-[300px_1fr] gap-8 md:gap-12 items-center px-4 mx-auto">
        <div className="flex flex-col justify-center text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-montserrat font-black uppercase mb-4">{t('services.title')}</h2>
          <p className="text-base md:text-lg text-foreground/70 font-inter font-light">
            Oferecemos soluções completas de pós-produção com excelência e criatividade
          </p>
        </div>
        <div className="flex items-center justify-center">
          <ServiceAccordion services={services} />
        </div>
      </div>
    </section>
  );
};
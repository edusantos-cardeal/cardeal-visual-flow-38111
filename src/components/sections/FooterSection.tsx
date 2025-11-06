import { useLanguage } from '@/contexts/LanguageContext';

export const FooterSection = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="relative py-12 px-4 md:px-8 border-t border-border bg-transparent">
      <div className="max-w-7xl mx-auto text-center space-y-4">
        <h3 className="text-xl sm:text-2xl font-montserrat font-black uppercase">
          {t('footer.title')}
        </h3>
        <p className="text-xs sm:text-sm text-foreground/60 font-inter font-extralight italic">
          {t('footer.subtitle')}
        </p>
      </div>
    </footer>
  );
};

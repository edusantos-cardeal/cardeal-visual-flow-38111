import { useState } from 'react';
import { Sidebar } from '@/components/Sidebar';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { DateTime } from '@/components/DateTime';
import { FloatingActions } from '@/components/FloatingActions';
import { TVLoadingEffect } from '@/components/TVLoadingEffect';
import { HeroSection } from '@/components/sections/HeroSection';
import { IntroSection } from '@/components/sections/IntroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { ShowcaseSection } from '@/components/sections/ShowcaseSection';
import { MethodSection } from '@/components/sections/MethodSection';
import { GallerySection } from '@/components/sections/GallerySection';
import { VideosSection } from '@/components/sections/VideosSection';
import { EnergySection } from '@/components/sections/EnergySection';
import { BrandsSection } from '@/components/sections/BrandsSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { FAQSection } from '@/components/sections/FAQSection';
import { FooterSection } from '@/components/sections/FooterSection';
import { LanguageProvider } from '@/contexts/LanguageContext';
const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  return <LanguageProvider>
      {isLoading && <TVLoadingEffect onComplete={() => setIsLoading(false)} />}
      
      {!isLoading && <div className="relative bg-black text-foreground">
          <Sidebar />
          <DateTime />
          <LanguageSwitcher />
          <FloatingActions />
          
          <main className="relative">
            <HeroSection />
            <IntroSection />
            <AboutSection />
            <div className="-mt-32">
              <ServicesSection />
            </div>
            <div className="relative min-h-screen">
              <ShowcaseSection />
              <MethodSection />
            </div>
            <GallerySection />
            <VideosSection />
            <div className="-mt-24">
              <EnergySection />
            </div>
            <BrandsSection />
            <ContactSection />
            <FAQSection />
            <FooterSection />
          </main>
        </div>}
    </LanguageProvider>;
};
export default Index;
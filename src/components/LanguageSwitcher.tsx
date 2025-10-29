import { useState } from 'react';
import { Globe } from 'lucide-react';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { useLanguage } from '@/contexts/LanguageContext';
import { useColorOnWhiteBackground } from '@/hooks/useColorOnWhiteBackground';

export const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const isOnWhite = useColorOnWhiteBackground();
  const languages = [
    { code: 'BR', label: '🇧🇷 Português' },
    { code: 'EN', label: '🇺🇸 English' },
    { code: 'ES', label: '🇪🇸 Español' },
    { code: 'FR', label: '🇫🇷 Français' },
    { code: 'CH', label: '🇨🇳 中文' },
  ] as const;

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button 
          variant="ghost" 
          size="icon"
          className={`fixed top-6 right-6 z-50 backdrop-blur-sm border transition-none ${isOnWhite ? 'bg-white/80 border-black hover:bg-white/90' : 'bg-background/80 border-border hover:bg-background/90'}`}
        >
          <Globe className={`w-5 h-5 transition-none ${isOnWhite ? 'text-black' : 'text-foreground'}`} />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="bg-background/95 backdrop-blur-sm border-l border-border">
        <div className="flex flex-col gap-4 mt-8">
          <h3 className="text-lg font-bold mb-4">Idioma / Language</h3>
          {languages.map((lang) => (
            <Button
              key={lang.code}
              variant="ghost"
              onClick={() => {
                setLanguage(lang.code);
                setIsOpen(false);
              }}
              className={`justify-start text-base ${
                language === lang.code ? 'text-primary font-bold' : 'text-foreground/70'
              }`}
            >
              {lang.label}
            </Button>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
};

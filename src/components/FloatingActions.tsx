import { Instagram, Linkedin, ArrowUp } from 'lucide-react';
import { Button } from './ui/button';


export const FloatingActions = () => {
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <a
        href="https://instagram.com/cardeal.tv"
        target="_blank"
        rel="noopener noreferrer"
        className={`w-12 h-12 rounded-full border flex items-center justify-center hover:bg-primary group bg-background border-border`}
      >
        <Instagram className={`w-5 h-5 group-hover:text-white text-foreground`} />
      </a>
      
      <a
        href="https://vimeo.com/theoriass"
        target="_blank"
        rel="noopener noreferrer"
        className={`w-12 h-12 rounded-full border flex items-center justify-center hover:bg-primary group bg-background border-border`}
      >
        <svg 
          className={`w-5 h-5 group-hover:text-white text-foreground`}
          viewBox="0 0 24 24" 
          fill="currentColor"
        >
          <path d="M23.9765 6.4168c-.105 2.338-1.739 5.5429-4.894 9.6088-3.2679 4.2474-6.0258 6.3713-8.2898 6.3713-1.4007 0-2.5835-1.2938-3.5579-3.8813-.6485-2.3707-1.297-4.7415-1.9457-7.1122-.7229-2.5876-1.4985-3.8813-2.3271-3.8813-.1814 0-.8175.3825-1.9083.9652l-1.1425-1.4743c1.2003-1.0535 2.3833-2.107 3.5498-3.1605 1.5956-1.3787 2.7938-2.1075 3.5945-2.1867 1.8897-.1814 3.0575.9652 3.5025 3.4389.4813 2.6779.8179 4.3367.9652 4.9765.4813 2.1874.9652 3.3365 1.4523 3.4389.3761.1008.9418-.5972 1.7067-2.0947.7649-1.4975 1.1745-2.6351 1.2365-3.4125.1212-1.2728-.3679-1.909-1.4685-1.909-.5244 0-1.0632.1208-1.6145.3625 1.0718-3.5108 3.1163-5.2173 6.1335-5.1164 2.2364.0638 3.2938 1.5139 3.1708 4.3502z"/>
        </svg>
      </a>

      <a
        href="https://www.linkedin.com/company/cardeal-tv/"
        target="_blank"
        rel="noopener noreferrer"
        className={`w-12 h-12 rounded-full border flex items-center justify-center hover:bg-primary group bg-background border-border`}
      >
        <Linkedin className={`w-5 h-5 group-hover:text-white text-foreground`} />
      </a>

      <Button 
        size="icon" 
        onClick={scrollToTop}
        className="bg-primary hover:bg-primary/90 text-primary-foreground border-0"
      >
        <ArrowUp className="w-4 h-4" />
      </Button>
    </div>
  );
};

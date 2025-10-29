import { useState, useEffect } from 'react';

export const useColorOnWhiteBackground = () => {
  const [isOnWhite, setIsOnWhite] = useState(false);

  useEffect(() => {
    const checkBackground = () => {
      // IDs das seções com fundo branco
      const whiteSections = ['about', 'services', 'brands', 'contact'];
      
      let onWhite = false;
      for (const sectionId of whiteSections) {
        const section = document.getElementById(sectionId);
        if (section) {
          const rect = section.getBoundingClientRect();
          // Verifica se a seção está visível no viewport (especialmente no topo)
          if (rect.top < 100 && rect.bottom > 0) {
            onWhite = true;
            break;
          }
        }
      }
      
      setIsOnWhite(onWhite);
    };

    checkBackground();
    window.addEventListener('scroll', checkBackground);
    return () => window.removeEventListener('scroll', checkBackground);
  }, []);

  return isOnWhite;
};

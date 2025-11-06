import { useState, useEffect, useRef } from 'react';
import { Logos3 } from '../ui/logos3';
import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
export const BrandsSection = () => {
  const {
    t
  } = useLanguage();
  const [isBlinking, setIsBlinking] = useState(false);
  const [leftIrisPosition, setLeftIrisPosition] = useState({
    x: 50,
    y: 50
  });
  const [rightIrisPosition, setRightIrisPosition] = useState({
    x: 50,
    y: 50
  });
  const containerRef = useRef<HTMLDivElement>(null);
  const {
    ref: sectionRef,
    isVisible
  } = useScrollAnimation();
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setIsBlinking(true);
      setTimeout(() => setIsBlinking(false), 200);
    }, 5000);
    return () => clearInterval(blinkInterval);
  }, []);
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const leftEyeCenterX = rect.left + rect.width * 0.32;
      const rightEyeCenterX = rect.left + rect.width * 0.72;
      const eyeCenterY = rect.top + rect.height * 0.43;
      const calculatePosition = (centerX: number) => {
        const angle = Math.atan2(e.clientY - eyeCenterY, e.clientX - centerX);
        const distance = Math.min(Math.sqrt(Math.pow(e.clientX - centerX, 2) + Math.pow(e.clientY - eyeCenterY, 2)) / 10, 15);
        return {
          x: 50 + Math.cos(angle) * distance * 0.5,
          y: 50 + Math.sin(angle) * distance * 0.5
        };
      };
      setLeftIrisPosition(calculatePosition(leftEyeCenterX));
      setRightIrisPosition(calculatePosition(rightEyeCenterX));
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  const brands = [{
    id: 'samsung-1',
    name: 'Samsung',
    logo: 'https://cardeal.tv/wp-content/uploads/2025/06/samsung-1.png'
  }, {
    id: 'mercadolivre',
    name: 'Mercado Livre',
    logo: 'https://cardeal.tv/wp-content/uploads/2025/06/mercadolivre-1.png'
  }, {
    id: 'itau',
    name: 'Itaú',
    logo: 'https://cardeal.tv/wp-content/uploads/2025/06/itau-1.png'
  }, {
    id: 'ipiranga',
    name: 'Ipiranga',
    logo: 'https://cardeal.tv/wp-content/uploads/2025/06/ipiranga-1.png'
  }, {
    id: 'fanta',
    name: 'Fanta',
    logo: 'https://cardeal.tv/wp-content/uploads/2025/06/fanta-1.png'
  }, {
    id: 'booking',
    name: 'Booking',
    logo: 'https://cardeal.tv/wp-content/uploads/2025/06/booking-1.png'
  }, {
    id: 'bk',
    name: 'Burger King',
    logo: 'https://cardeal.tv/wp-content/uploads/2025/06/bk-1.png'
  }, {
    id: 'samsung-2',
    name: 'Samsung',
    logo: 'https://cardeal.tv/wp-content/uploads/2025/06/samsung-1.png'
  }, {
    id: 'mercadolivre-2',
    name: 'Mercado Livre',
    logo: 'https://cardeal.tv/wp-content/uploads/2025/06/mercadolivre-1.png'
  }, {
    id: 'itau-2',
    name: 'Itaú',
    logo: 'https://cardeal.tv/wp-content/uploads/2025/06/itau-1.png'
  }, {
    id: 'ipiranga-2',
    name: 'Ipiranga',
    logo: 'https://cardeal.tv/wp-content/uploads/2025/06/ipiranga-1.png'
  }, {
    id: 'fanta-2',
    name: 'Fanta',
    logo: 'https://cardeal.tv/wp-content/uploads/2025/06/fanta-1.png'
  }, {
    id: 'booking-2',
    name: 'Booking',
    logo: 'https://cardeal.tv/wp-content/uploads/2025/06/booking-1.png'
  }, {
    id: 'bk-2',
    name: 'Burger King',
    logo: 'https://cardeal.tv/wp-content/uploads/2025/06/bk-1.png'
  }];
  return (
    <section 
      ref={sectionRef} 
      id="brands" 
      className={`relative min-h-screen w-full flex flex-col items-center justify-center py-12 md:py-20 px-4 md:px-8 transition-all duration-700 ${isVisible ? 'animate-zoom-in' : 'opacity-0'}`}
    >
      <h2 className="text-2xl sm:text-3xl md:text-5xl font-montserrat font-black uppercase mb-16 text-center py-0 my-[76px] mx-0 px-4">
        {t('brands.title')}
      </h2>
      
      <div className="mb-6 relative w-full max-w-5xl mx-auto">
        <div ref={containerRef} className="relative w-full mx-auto overflow-hidden" style={{
        aspectRatio: '16/8',
        isolation: 'isolate'
      }}>
          {/* Fundo amarelo apenas sob a imagem dos olhos */}
          <div style={{
          backgroundColor: '#fffff0',
          zIndex: 1,
          width: '70%',
          left: '15%'
        }} className="absolute inset-y-0" />
          
          {!isBlinking && <>
              <img src="https://cardeal.tv/wp-content/uploads/2025/06/iris.png" alt="Left Iris" className="absolute transition-all duration-150 ease-out" style={{
            width: '9%',
            aspectRatio: '1/1',
            top: `${leftIrisPosition.y}%`,
            left: `${30 + (leftIrisPosition.x - 50) * 0.12}%`,
            zIndex: 2,
            pointerEvents: 'none',
            transform: 'translate(-50%, -50%)'
          }} />
              <img src="https://cardeal.tv/wp-content/uploads/2025/06/iris.png" alt="Right Iris" className="absolute transition-all duration-150 ease-out" style={{
            width: '9%',
            aspectRatio: '1/1',
            top: `${rightIrisPosition.y}%`,
            left: `${72 + (rightIrisPosition.x - 50) * 0.12}%`,
            zIndex: 2,
            pointerEvents: 'none',
            transform: 'translate(-50%, -50%)'
          }} />
            </>}
          
          <img src={isBlinking ? "https://cardeal.tv/wp-content/uploads/2025/06/OLHOS_FECHADOS.png" : "https://cardeal.tv/wp-content/uploads/2025/06/OLHOS_ABERTOS.png"} alt="Eyes" className="absolute inset-0 w-full h-full object-contain transition-opacity duration-100" style={{
          zIndex: 3,
          pointerEvents: 'none',
          objectPosition: 'center'
        }} />
        </div>
      </div>

      <Logos3 heading="" logos={brands.map(brand => ({
      id: brand.id,
      description: brand.name,
      image: brand.logo,
      className: "h-20 w-auto"
    }))} className="py-0" />
    </section>
  );
};
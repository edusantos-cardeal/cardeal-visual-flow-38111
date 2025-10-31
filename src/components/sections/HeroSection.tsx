import { useEffect, useState } from 'react';

export const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Add delay - only start animation after scrolling 100px
  const effectiveScroll = Math.max(0, scrollY - 100);
  const videoScale = Math.max(0.4, 1 - effectiveScroll / 1500);
  const textOpacity = Math.min(1, effectiveScroll / 800);
  const textPosition = Math.max(-100, 100 - effectiveScroll / 8);
  const titleOpacity = Math.max(0, 1 - effectiveScroll / 400);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 flex items-center justify-center overflow-hidden bg-black"
        style={{
          transform: `scale(${videoScale})`,
          transition: 'transform 0.05s ease-out',
        }}
      >
        <iframe
          src="https://player.vimeo.com/video/991148258?background=1&autoplay=1&loop=1&muted=1&controls=0&t=2s"
          className="absolute"
          style={{
            width: '177.77vh',
            height: '100vh',
            minWidth: '100vw',
            minHeight: '56.25vw',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            pointerEvents: 'none',
          }}
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          title="Hero Video"
        />
      </div>
      
      <div 
        className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none"
        style={{
          opacity: textOpacity,
        }}
      >
        <div
          className="whitespace-nowrap text-[15vw] font-['Times_New_Roman'] tracking-wider"
          style={{
            transform: `translateX(${textPosition}%)`,
            transition: 'transform 0.05s ease-out',
          }}
        >
          CARDEAL TV • POST PRODUCTION HOUSE
        </div>
      </div>

      <div 
        className="relative z-10 text-center transition-opacity duration-300"
        style={{
          opacity: titleOpacity,
        }}
      >
        <h1 className="text-8xl md:text-9xl font-montserrat font-black uppercase text-foreground drop-shadow-2xl">
          CARDEAL TV
        </h1>
        <p className="text-2xl md:text-3xl font-inter font-extralight text-foreground mt-4">
          Post Production House
        </p>
      </div>
    </section>
  );
};

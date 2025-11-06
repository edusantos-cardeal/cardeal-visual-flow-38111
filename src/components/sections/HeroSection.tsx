import { useEffect, useState } from 'react';

export const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const [vh, setVh] = useState<number>(typeof window !== 'undefined' ? window.innerHeight : 0);
  const [vw, setVw] = useState<number>(typeof window !== 'undefined' ? window.innerWidth : 0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleResize = () => {
      setVh(window.innerHeight);
      setVw(window.innerWidth);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Scroll-controlled animation config
  const START_DELAY = 120; // px before starting effects
  const PASS_PX = Math.max(2400, Math.min(3600, Math.round(vw * 2.5))); // per pass - bem mais lento
  const LOOPS = 2; // number of text passes
  const TOTAL_SCROLL = LOOPS * PASS_PX;

  const raw = scrollY - START_DELAY;
  const effectiveScroll = Math.max(0, Math.min(TOTAL_SCROLL, raw));

  // Video scales from 1 to 0.4 over the TOTAL_SCROLL
  const videoScale = Math.max(0.4, 1 - 0.6 * (effectiveScroll / TOTAL_SCROLL));
  
  // Video opacity: diminui levemente durante o zoom out (de 1 para 0.7)
  const videoOpacity = Math.max(0.7, 1 - 0.3 * (effectiveScroll / TOTAL_SCROLL));

  // Title fades out as soon as zoom-out starts
  const titleOpacity = Math.max(0, 1 - Math.min(1, effectiveScroll / 60));

  // Background marquee text opacity and position (right -> left)
  const textOpacity = Math.min(1, Math.max(0, effectiveScroll / 180));
  const progressInLoop = (effectiveScroll % PASS_PX) / PASS_PX;
  const textPosition = 100 - progressInLoop * 200; // 100% to -100%

  // Section height = screen + the scroll budget for two passes (+ small buffer)
  const sectionHeight = vh + TOTAL_SCROLL + Math.round(START_DELAY / 2);

  return (
    <section id="hero" className="relative w-full" style={{ height: sectionHeight }}>
      <div className="sticky top-0 left-0 w-full h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-10 flex items-center justify-center overflow-hidden bg-black"
          style={{
            transform: `scale(${videoScale})`,
            opacity: videoOpacity,
            transition: 'transform 0.05s ease-out, opacity 0.05s ease-out',
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
          className="absolute inset-0 z-0 flex items-center justify-center overflow-hidden pointer-events-none"
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
          className="relative z-20 text-center transition-opacity duration-300"
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
      </div>
    </section>
  );
};

export const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 w-full h-full opacity-80">
        <iframe
          src="https://player.vimeo.com/video/991148258?background=1&autoplay=1&loop=1&muted=1&controls=0&t=2s"
          className="absolute top-0 left-0 w-full h-full"
          style={{
            width: '100vw',
            height: '100vh',
            objectFit: 'cover',
            pointerEvents: 'none',
          }}
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          title="Hero Video"
        />
      </div>
      <div className="relative z-10 text-center">
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

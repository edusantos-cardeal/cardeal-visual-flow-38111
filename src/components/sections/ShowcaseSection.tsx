export const ShowcaseSection = () => {
  return (
    <section id="showcase" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 w-full h-full opacity-70">
        <iframe
          src="https://player.vimeo.com/video/991148213?background=1&autoplay=1&loop=1&muted=1&controls=0"
          className="absolute top-0 left-0 w-full h-full"
          style={{
            width: '100vw',
            height: '100vh',
            objectFit: 'cover',
            pointerEvents: 'none',
          }}
          frameBorder="0"
          allow="autoplay; fullscreen"
          title="Showcase Video"
        />
      </div>
    </section>
  );
};

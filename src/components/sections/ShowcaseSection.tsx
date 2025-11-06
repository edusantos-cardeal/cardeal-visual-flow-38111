export const ShowcaseSection = () => {
  return (
    <section id="showcase" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden md:pt-0 pt-0">
      <div className="absolute inset-0 w-full h-full">
        <iframe
          src="https://player.vimeo.com/video/991148213?background=1&autoplay=1&loop=1&muted=1&controls=0"
          className="absolute top-0 left-0 w-full h-full"
          style={{
            width: '177.77vh',
            height: '100vh',
            minWidth: '100vw',
            minHeight: '56.25vw',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
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

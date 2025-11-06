export const ShowcaseSection = () => {
  return (
    <section id="showcase" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 w-full h-full opacity-70">
        <iframe
          src="https://player.vimeo.com/video/991148213?background=1&autoplay=1&loop=1&muted=1&controls=0"
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
          allow="autoplay; fullscreen"
          title="Showcase Video"
        />
      </div>
    </section>
  );
};

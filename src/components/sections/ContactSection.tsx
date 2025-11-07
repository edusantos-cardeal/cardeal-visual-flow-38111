import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export const ContactSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <section 
      ref={ref} 
      id="contact" 
      className={`relative min-h-screen flex items-center justify-center py-12 md:py-20 px-4 md:px-8 transition-all duration-700 ${isVisible ? 'animate-zoom-in' : 'opacity-0'}`}
    >
      <div className="w-full h-screen max-w-7xl mx-auto">
        <iframe 
          src="https://portfolio-creativehub.lovable.app/home-cardeal" 
          className="w-full h-full border-0"
          title="Contact Form"
          loading="lazy"
        />
      </div>
    </section>
  );
};
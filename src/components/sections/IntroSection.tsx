import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export const IntroSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <section 
      ref={ref}
      className={`relative py-12 md:py-20 px-4 md:px-8 md:pl-24 bg-white transition-all duration-700 ${isVisible ? 'animate-zoom-in' : 'opacity-0'}`}
    >
      <div className="max-w-4xl mx-auto text-center px-4">
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-black font-inter">
          <span className="font-bold">Cardeal TV</span>, uma casa de pós-produção que ama trazer vida para nossos projetos.
        </p>
      </div>
    </section>
  );
};

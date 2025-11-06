import { useState } from 'react';

interface Service {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

export const ServiceAccordion = ({ services }: { services: Service[] }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex md:flex-row flex-col items-center justify-center gap-0 md:h-[450px] h-auto w-full overflow-hidden">
      {services.map((service, index) => (
        <div
          key={service.id}
          className={`
            relative md:h-[450px] h-[300px] rounded-none overflow-hidden cursor-pointer
            transition-all duration-700 ease-in-out md:border-r md:border-b-0 border-b border-border md:last:border-r-0 last:border-b-0
            ${activeIndex === index 
              ? 'md:w-[500px] w-full md:h-[450px] h-[400px]' 
              : 'md:w-[100px] w-full md:h-[450px] h-[80px]'}
          `}
          onMouseEnter={() => setActiveIndex(index)}
          onClick={() => setActiveIndex(index)}
        >
          <img
            src={service.imageUrl}
            alt={service.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />

          <div className="absolute inset-0 flex items-end p-6">
            {activeIndex === index ? (
              <div className="transition-all duration-500">
                <h3 className="text-xl md:text-2xl font-montserrat font-black text-white mb-2">{service.title}</h3>
                <p className="text-white/80 text-xs md:text-sm font-inter font-extralight">{service.description}</p>
              </div>
            ) : (
              <span className="text-white text-xs md:text-sm font-montserrat font-black uppercase whitespace-nowrap md:absolute md:bottom-8 md:left-1/2 md:-translate-x-1/2 md:rotate-90 md:origin-center static rotate-0 translate-x-0">
                {service.title}
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

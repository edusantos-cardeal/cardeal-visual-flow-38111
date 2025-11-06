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
    <div className="flex flex-col md:flex-row items-stretch md:items-center justify-center gap-0 w-full overflow-hidden md:h-[450px]">
      {services.map((service, index) => (
        <div
          key={service.id}
          className={`
            relative rounded-none overflow-hidden cursor-pointer
            transition-all duration-700 ease-in-out border-border
            md:h-[450px] ${activeIndex === index ? 'md:w-[500px]' : 'md:w-[100px]'}
            w-full ${activeIndex === index ? 'h-[360px]' : 'h-[220px]'}
            md:border-r border-b md:border-b-0 last:border-b-0 md:last:border-r-0
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

          {/* Desktop content */}
          <div className="hidden md:flex absolute inset-0 items-end p-6">
            {activeIndex === index ? (
              <div className="transition-all duration-500">
                <h3 className="text-2xl font-montserrat font-black text-white mb-2">{service.title}</h3>
                <p className="text-white/80 text-sm font-inter font-extralight">{service.description}</p>
              </div>
            ) : (
              <span className="text-white text-sm font-montserrat font-black uppercase whitespace-nowrap absolute bottom-8 left-1/2 -translate-x-1/2 rotate-90 origin-center">
                {service.title}
              </span>
            )}
          </div>

          {/* Mobile content */}
          <div className="md:hidden absolute inset-0 flex flex-col justify-end p-4">
            <h3 className="text-lg font-montserrat font-black text-white mb-1">{service.title}</h3>
            {activeIndex === index && (
              <p className="text-white/80 text-sm font-inter font-extralight animate-fade-in">{service.description}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

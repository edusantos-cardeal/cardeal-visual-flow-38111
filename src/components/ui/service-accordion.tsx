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
    <div className="flex items-center justify-center gap-0 h-[450px] w-full overflow-hidden">
      {services.map((service, index) => (
        <div
          key={service.id}
          className={`
            relative h-[450px] rounded-none overflow-hidden cursor-pointer
            transition-all duration-700 ease-in-out border-r border-border last:border-r-0
            ${activeIndex === index ? 'w-[500px]' : 'w-[100px]'}
          `}
          onMouseEnter={() => setActiveIndex(index)}
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
                <h3 className="text-2xl font-montserrat font-black text-white mb-2">{service.title}</h3>
                <p className="text-white/80 text-sm font-inter font-extralight">{service.description}</p>
              </div>
            ) : (
              <span className="text-white text-sm font-montserrat font-black uppercase whitespace-nowrap absolute bottom-8 left-1/2 -translate-x-1/2 rotate-90 origin-center">
                {service.title}
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

import { useState, useEffect, useRef } from 'react';

export const EyeTracker = ({ hollowEyeUrl, irisUrl }: { hollowEyeUrl: string; irisUrl: string }) => {
  const [irisPosition, setIrisPosition] = useState({ x: 50, y: 50 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const angle = Math.atan2(e.clientY - centerY, e.clientX - centerX);
      const distance = Math.min(
        Math.sqrt(Math.pow(e.clientX - centerX, 2) + Math.pow(e.clientY - centerY, 2)) / 10,
        15
      );
      
      const x = 50 + Math.cos(angle) * distance;
      const y = 50 + Math.sin(angle) * distance;
      
      setIrisPosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-full flex items-center justify-center">
      <div className="relative w-64 h-64">
        <div className="absolute inset-0 rounded-full bg-[hsl(var(--yellow-eye))]" />
        <img
          src={irisUrl}
          alt="Iris"
          className="absolute w-24 h-24 transition-all duration-100 ease-out"
          style={{
            left: `${irisPosition.x}%`,
            top: `${irisPosition.y}%`,
            transform: 'translate(-50%, -50%)',
          }}
        />
        <img
          src={hollowEyeUrl}
          alt="Eye"
          className="absolute inset-0 w-full h-full"
        />
      </div>
    </div>
  );
};

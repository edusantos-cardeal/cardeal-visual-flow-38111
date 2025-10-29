import { useState, useEffect, useRef } from 'react';

export const BlinkingEyes = ({ 
  openEyeUrl, 
  closedEyeUrl, 
  irisUrl 
}: { 
  openEyeUrl: string; 
  closedEyeUrl: string; 
  irisUrl: string;
}) => {
  const [isBlinking, setIsBlinking] = useState(false);
  const [leftIrisPosition, setLeftIrisPosition] = useState({ x: 50, y: 50 });
  const [rightIrisPosition, setRightIrisPosition] = useState({ x: 50, y: 50 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setIsBlinking(true);
      setTimeout(() => setIsBlinking(false), 200);
    }, 3000 + Math.random() * 2000);

    return () => clearInterval(blinkInterval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      // Position for two eyes within the single image
      const leftEyeCenterX = rect.left + rect.width * 0.35;
      const rightEyeCenterX = rect.left + rect.width * 0.65;
      const eyeCenterY = rect.top + rect.height / 2;
      
      const calculatePosition = (centerX: number) => {
        const angle = Math.atan2(e.clientY - eyeCenterY, e.clientX - centerX);
        const distance = Math.min(
          Math.sqrt(Math.pow(e.clientX - centerX, 2) + Math.pow(e.clientY - eyeCenterY, 2)) / 15,
          12
        );
        
        return {
          x: 50 + Math.cos(angle) * distance,
          y: 50 + Math.sin(angle) * distance,
        };
      };
      
      setLeftIrisPosition(calculatePosition(leftEyeCenterX));
      setRightIrisPosition(calculatePosition(rightEyeCenterX));
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="relative w-full max-w-2xl h-64 flex items-center justify-center">
      {/* Single container for the full eye image */}
      <div className="relative w-full h-full">
        {/* Background circles for eye whites - positioned for both eyes */}
        <div className="absolute left-[23%] top-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-[#fffff0]" />
        <div className="absolute right-[23%] top-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-[#fffff0]" />
        
        {/* Iris images - only show when not blinking */}
        {!isBlinking && (
          <>
            <img
              src={irisUrl}
              alt="Left Iris"
              className="absolute w-14 h-14 transition-all duration-100 ease-out z-10"
              style={{
                left: `${23 + (leftIrisPosition.x - 50) * 0.3}%`,
                top: `${50 + (leftIrisPosition.y - 50) * 0.3}%`,
                transform: 'translate(-50%, -50%)',
              }}
            />
            <img
              src={irisUrl}
              alt="Right Iris"
              className="absolute w-14 h-14 transition-all duration-100 ease-out z-10"
              style={{
                left: `${77 + (rightIrisPosition.x - 50) * 0.3}%`,
                top: `${50 + (rightIrisPosition.y - 50) * 0.3}%`,
                transform: 'translate(-50%, -50%)',
              }}
            />
          </>
        )}
        
        {/* Single eye image overlay - contains both eyes */}
        <img
          src={isBlinking ? closedEyeUrl : openEyeUrl}
          alt="Eyes"
          className="absolute inset-0 w-full h-full object-contain transition-opacity duration-100 z-20"
        />
      </div>
    </div>
  );
};

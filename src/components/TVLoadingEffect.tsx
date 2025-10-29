import { useEffect, useState } from 'react';

export const TVLoadingEffect = ({ onComplete }: { onComplete: () => void }) => {
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
      onComplete();
    }, 1500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!isAnimating) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-black flex items-center justify-center animate-tv-on">
      <div className="w-full h-full bg-black" />
    </div>
  );
};

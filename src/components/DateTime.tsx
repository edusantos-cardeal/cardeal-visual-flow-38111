import { useState, useEffect } from 'react';
import { useColorOnWhiteBackground } from '@/hooks/useColorOnWhiteBackground';

export const DateTime = () => {
  const [dateTime, setDateTime] = useState('');
  const isOnWhite = useColorOnWhiteBackground();

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const months = ['JAN', 'FEV', 'MAR', 'ABR', 'MAI', 'JUN', 'JUL', 'AGO', 'SET', 'OUT', 'NOV', 'DEZ'];
      const month = months[now.getMonth()];
      const year = String(now.getFullYear()).slice(-2);
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      
      setDateTime(`${month}-${year} ${hours}:${minutes}`);
    };

    updateDateTime();
    const interval = setInterval(updateDateTime, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed top-6 right-20 z-50 hidden md:block">
      <span className={`text-xs font-inter transition-none ${isOnWhite ? 'text-black' : 'text-foreground/80'}`}>{dateTime}</span>
    </div>
  );
};

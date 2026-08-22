import { useState, useEffect } from 'react';

export function useTime(timeZone = 'Asia/Ulaanbaatar') {
  const [timeString, setTimeString] = useState('');

  useEffect(() => {
    const updateTime = () => {
      try {
        const now = new Date();
        const formatted = new Intl.DateTimeFormat('en-GB', {
          timeZone,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        }).format(now);
        setTimeString(formatted);
      } catch {
        const now = new Date();
        setTimeString(now.toTimeString().split(' ')[0]);
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, [timeZone]);

  return timeString;
}

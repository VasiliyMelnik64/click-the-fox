import { useEffect, useRef, useState } from 'react';

export const useTimer = (callback: () => void, timeout: number) => {
  const [time, setTime] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const interval = useRef<ReturnType<typeof setTimeout>>();

  const runTimer = () => {
    setIsTimerRunning(true);
    setTime(0);
  };

  useEffect(() => {
    if (isTimerRunning) {
      interval.current = setTimeout(() => {
        setTime((oldTime) => {
          const newTime = oldTime + 1000;

          return newTime;
        });
      }, 1000);
    }

    if (time >= timeout) {
      callback();
      clearTimeout(interval.current);
    }
  }, [time, isTimerRunning, timeout]);

  useEffect(() => () => clearTimeout(interval.current), []);

  return { isTimerRunning, time, runTimer };
};

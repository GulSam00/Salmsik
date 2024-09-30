import { useState, useEffect, useRef, useCallback } from 'react';

interface Props {
  initialTime: number;
  onTimeOut: () => void;
}

const useTimer = ({ initialTime, onTimeOut }: Props) => {
  const [timer, setTimer] = useState(initialTime);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const clearTimer = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  const startTimer = useCallback(() => {
    clearTimer();
    intervalRef.current = setInterval(() => {
      setTimer(prev => {
        if (prev === 1) {
          onTimeOut();
          return initialTime;
        }
        return prev - 1;
      });
    }, 1000);
  }, [clearTimer, initialTime, onTimeOut]);

  useEffect(() => {
    startTimer();
    return () => clearTimer();
  });

  const handleNextQuiz = useCallback(() => {
    clearTimer();
    setTimer(initialTime);
    startTimer();
  }, [clearTimer, initialTime, startTimer]);

  return { timer, handleNextQuiz };
};

export default useTimer;

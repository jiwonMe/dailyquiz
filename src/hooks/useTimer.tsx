import { useEffect } from 'react';
import useAppStore from '../stores/appStore';

const useTimer = () => {
  const { currentTime, setCurrentTime } = useAppStore();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(currentTime + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [setCurrentTime]);

  return currentTime;
};

export default useTimer;

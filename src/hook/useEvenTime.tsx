import { useEffect, useState } from "react";

const useIsEvenTime = () => {
  const [isEvenTime, setIsEvenTime] = useState(new Date().getHours() % 2 === 0);

  useEffect(() => {
    const interval = setInterval(
      () => {
        const currentHour = new Date().getHours();
        setIsEvenTime(currentHour % 2 === 0);
      },
      60 * 60 * 1000,
    );

    return () => clearInterval(interval);
  }, []);

  return isEvenTime;
};

export default useIsEvenTime;

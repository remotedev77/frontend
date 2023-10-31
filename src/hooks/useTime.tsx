import { useState } from "react";
import { useTimer } from "react-timer-hook";

type TimeProps = {
  expiryTime: number;
  onExpire: (() => void) | undefined;
};

const useTime = (x: TimeProps) => {
  const [timer] = useState(x.expiryTime || 0);
  const time = new Date();
  time.setSeconds(time.getSeconds() + timer);

  const { hours, minutes, seconds } = useTimer({
    expiryTimestamp: time,
    onExpire: x.onExpire,
  });
  return {
    hours: hours > 0 ? `0${hours}:` : ``,
    minutes: minutes < 10 ? `0${minutes}:` : `${minutes}:`,
    seconds: seconds < 10 ? `0${seconds}` : `${seconds}`,
  };
};

export default useTime;

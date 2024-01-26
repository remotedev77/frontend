import { useTimer as useTime } from "react-timer-hook";
import { add, format, set } from "date-fns";

type UseTimerProps = {
  expiryTime: number;
  onExpire: (() => void) | undefined;
};

const useTimer = ({ expiryTime, onExpire }: UseTimerProps) => {
  const date = add(new Date(), { seconds: expiryTime });
  const { totalSeconds } = useTime({
    expiryTimestamp: date,
    onExpire,
  });
  const leftTime = set(new Date(), { hours: 0, minutes: 0, seconds: totalSeconds });

  return format(leftTime, leftTime.getHours() > 0 ? "HH:mm:ss" : "mm:ss");
};

export default useTimer;

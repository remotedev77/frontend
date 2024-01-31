import useTimer from "@/pages/exam/components/exam-session/hooks/useTimer";
import useExamStore, { Stage } from "@/services/state/examStore";

const FormatTime = () => {
  const { setStage } = useExamStore();

  const handleFinish = () => {
    setStage(Stage.RESULT);
  };
  // expiryTime is the duration (in seconds) after which the timer will expire
  const time = useTimer({ expiryTime: 3600, onExpire: handleFinish });
  return <p className="m-auto">{time}</p>;
};

export default FormatTime;

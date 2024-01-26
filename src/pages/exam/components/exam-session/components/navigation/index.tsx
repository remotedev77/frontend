import { Link } from "react-router-dom";

import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";

import { Button } from "@/common/components/ui/button";
import { Card } from "@/common/components/ui/card";

import useTimer from "@/pages/exam/components/exam-session/hooks/useTimer";

import useExamStore, { Stage } from "@/services/state/examStore";

const Navigation = () => {
  const { incrementSelectedIndex, decrementSelectedIndex, setStage } = useExamStore();

  const handleFinish = () => {
    setStage(Stage.RESULT);
  };
  // expiryTime is the duration (in seconds) after which the timer will expire
  const time = useTimer({ expiryTime: 3600, onExpire: handleFinish });

  return (
    <div className="flex flex-col-reverse justify-between h-full gap-4 md:gap-6 md:flex-row">
      <Button size="lg" variant="outline">
        <Link to="/">Вернуться в меню</Link>
      </Button>

      <div className="grid w-full grid-cols-4 gap-4 md:max-w-md max-md:order-1">
        <Button className="h-full" onClick={decrementSelectedIndex}>
          <ArrowLeftIcon className="size-6" />
        </Button>
        <Card className="grid col-span-2 place-content-center">{time}</Card>

        <Button className="h-full" onClick={incrementSelectedIndex}>
          <ArrowRightIcon className="size-6" />
        </Button>
      </div>

      <Button size="lg" onClick={handleFinish}>
        Завершить
      </Button>
    </div>
  );
};

export default Navigation;

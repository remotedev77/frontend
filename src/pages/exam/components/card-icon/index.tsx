import { Link, useLocation } from "react-router-dom";

import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/common/components/ui/card";
import { Button } from "@/common/components/ui/button";

import useExamStore, { Stage } from "@/services/state/examStore";
import { ExamTypes } from "@/common/types";
import { examData } from "../../lib/utils";

type CardIconProps = {
  buttonTitle: string;
  title?: string;
  correctAnswerCount?: number;
  falseAnswerCount?: number;
};

const CardIcon = ({ buttonTitle, title: cardTitle, correctAnswerCount, falseAnswerCount }: CardIconProps) => {
  const { setStage } = useExamStore();
  const { state } = useLocation() as { pathname: string; state: ExamTypes };
  const { title, icon: Icon, desc } = examData?.[state] ? examData[state] : { title: "", icon: null, desc: "" };

  const handleStage = () => setStage(Stage.SESSION);

  const handleStartExam = () => {
    handleStage();
  };

  return (
    <Card className="relative flex flex-col my-auto overflow-hidden max-md:items-center md:h-64 size-full">
      <CardHeader className="mt-auto max-md:text-center">
        <CardTitle className="text-2xl sm:text-3xl lg:text-4xl">{cardTitle || title}</CardTitle>
        <CardDescription className="lg:text-base">
          {correctAnswerCount || falseAnswerCount
            ? `Правильных ответов: ${correctAnswerCount}  Неправильных ответов: ${falseAnswerCount}`
            : desc}
        </CardDescription>
      </CardHeader>
      <CardContent>
        {Icon && <Icon className="h-56 max-w-xs -right-8 top-4 max-md:mt-4 md:absolute w-fit sm:h-64 md:h-72" />}
      </CardContent>
      <CardFooter className="flex flex-col w-full max-w-lg gap-2 md:gap-4 md:flex-row">
        <Button className="w-full" onClick={handleStartExam}>
          {buttonTitle}
        </Button>

        <Button variant={"outline"} asChild>
          <Link to="/" className="w-full">
            Вернуться в меню
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CardIcon;

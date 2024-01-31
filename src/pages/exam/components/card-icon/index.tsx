import { Link, useLocation } from "react-router-dom";

import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/common/components/ui/card";
import { Button } from "@/common/components/ui/button";

import useExamStore, { Format, Stage } from "@/services/state/examStore";
import { ExamTypes } from "@/common/types";

import FinalTest from "@/assets/svg/final-test-entry.svg?react";
import Simulator from "@/assets/svg/simulator-entry.svg?react";
import Marathon from "@/assets/svg/marathon.svg?react";
import Know from "@/assets/svg/know-entry.svg?react";
import NotKnow from "@/assets/svg/not-know-entry.svg?react";
import NoAnswer from "@/assets/svg/no-answer-entry.svg?react";
import MakeMistake from "@/assets/svg/make-mistake-entry.svg?react";
import { QuestionType } from "../../models";

const examData = {
  "final-test": {
    title: "Итоговое тестирование",
    icon: FinalTest,
    desc: "Информация об экзамене",
    format: Format.TIME,
  },
  simulation: { title: "Симулятор экзамена", icon: Simulator, desc: "Информация об экзамене", format: Format.TIME },
  marathon: { title: "Марафон", icon: Marathon, desc: "Бесконечный поток вопросов...", format: Format.STANDART },
  Знаю: { title: "Знаю", icon: Know, desc: "Вопросы, которые вы решаете правильно", format: Format.STANDART },
  "Не знаю": {
    title: "Не знаю",
    icon: NotKnow,
    desc: "Вопросы, которые вы решаете неправильно",
    format: Format.STANDART,
  },
  "Не решал": { title: "Не решал", icon: NoAnswer, desc: "Вопросы, которые вы ещё не решали", format: Format.STANDART },
  "Делаю ошибки": {
    title: "Делаю ошибки",
    icon: MakeMistake,
    desc: "Вопросы, которые вы решаете правильно",
    format: Format.STANDART,
  },
};

type CardIconProps = {
  buttonTitle: string;
  title?: string;
  correctAnswerCount?: number;
  falseAnswerCount?: number;
};

const CardIcon = ({ buttonTitle, title: cardTitle, correctAnswerCount, falseAnswerCount }: CardIconProps) => {
  const { setStage, setFormat, setQuestionType } = useExamStore();
  const { pathname, state } = useLocation() as { pathname: string; state: ExamTypes };
  const {
    title,
    icon: Icon,
    desc,
    format,
  } = examData?.[state] ? examData[state] : { title: "", icon: null, desc: "", format: Format.STANDART };

  const handleStage = () => setStage(Stage.SESSION);
  const handleFormat = () => setFormat(format);
  const handleQuestionType = () => {
    const questionType = pathname.split("/")[2] as QuestionType;
    setQuestionType(questionType);
  };

  const handleStartExam = () => {
    handleStage();
    handleFormat();
    handleQuestionType();
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

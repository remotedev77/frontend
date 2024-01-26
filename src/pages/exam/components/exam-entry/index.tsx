import { Link, useLocation } from "react-router-dom";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/common/components/ui/card";
import { Button } from "@/common/components/ui/button";
import { ExamTypes } from "@/common/types";

import FinalTest from "@/assets/svg/final-test-entry.svg?react";
import Simulator from "@/assets/svg/simulator-entry.svg?react";
import Marathon from "@/assets/svg/marathon.svg?react";
import Know from "@/assets/svg/know-entry.svg?react";
import NotKnow from "@/assets/svg/not-know-entry.svg?react";
import NoAnswer from "@/assets/svg/no-answer-entry.svg?react";
import MakeMistake from "@/assets/svg/make-mistake-entry.svg?react";
import useExamStore, { Stage } from "@/services/state/examStore";

const examEntries = {
  "final-test": { title: "Итоговое тестирование", icon: FinalTest, desc: "Информация об экзамене" },
  simulator: { title: "Симулятор экзамена", icon: Simulator, desc: "Информация об экзамене" },
  marathon: { title: "Марафон", icon: Marathon, desc: "Бесконечный поток вопросов..." },
  Знаю: { title: "Знаю", icon: Know, desc: "Вопросы, которые вы решаете правильно" },
  "Не знаю": { title: "Не знаю", icon: NotKnow, desc: "Вопросы, которые вы решаете неправильно" },
  "Не решал": { title: "Не решал", icon: NoAnswer, desc: "Вопросы, которые вы ещё не решали" },
  "Делаю ошибки": { title: "Делаю ошибки", icon: MakeMistake, desc: "Вопросы, которые вы решаете правильно" },
};

const ExamEntry = () => {
  const { setStage } = useExamStore();
  const { state } = useLocation() as { state: ExamTypes };
  const { title, icon: Icon, desc } = examEntries?.[state] ? examEntries[state] : { title: "", icon: null, desc: "" };

  const handleStartExam = () => {
    setStage(Stage.SESSION);
  };

  return (
    <div className="flex layout min-h-dvh">
      <Card className="relative flex flex-col my-auto overflow-hidden max-md:items-center md:h-64 size-full">
        <CardHeader className="mt-auto max-md:text-center">
          <CardTitle className="text-2xl sm:text-3xl lg:text-4xl">{title}</CardTitle>
          <CardDescription className="lg:text-base">{desc}</CardDescription>
        </CardHeader>
        <CardContent>
          {Icon && <Icon className="h-56 max-w-xs -right-8 top-4 max-md:mt-4 md:absolute w-fit sm:h-64 md:h-72" />}
        </CardContent>
        <CardFooter className="flex flex-col w-full max-w-lg gap-2 md:gap-4 md:flex-row">
          <Button className="w-full" onClick={handleStartExam}>
            Начать
          </Button>

          <Button variant={"outline"} asChild>
            <Link to="/" className="w-full">
              Вернуться в меню
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export { ExamEntry };

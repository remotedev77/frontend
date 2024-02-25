import { appEndpoints } from "@/services/api/endpoints";
import { QuestionType } from "../models";

import FinalTest from "@/assets/svg/final-test-entry.svg?react";
import Simulator from "@/assets/svg/simulator-entry.svg?react";
import Marathon from "@/assets/svg/marathon.svg?react";
import Know from "@/assets/svg/know-entry.svg?react";
import NotKnow from "@/assets/svg/not-know-entry.svg?react";
import NoAnswer from "@/assets/svg/no-answer-entry.svg?react";
import MakeMistake from "@/assets/svg/make-mistake-entry.svg?react";
import { Format } from "@/services/state/examStore";

const checkQuestionType = (questionType: QuestionType) =>
  ((
    {
      marathon: appEndpoints.checkMarathon,
      category: appEndpoints.checkCategory,
      "final-test": appEndpoints.checkFinalTest,
      simulation: appEndpoints.checkSimulation,
    } as Record<QuestionType, string>
  )[questionType]);

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

export { checkQuestionType, examData };

import { useEffect } from "react";
import { observer } from "mobx-react";
import useSWRImmutable from "swr/immutable";
import { useLocation } from "react-router-dom";
import { lazily } from "react-lazily";

import { QuestionDTO } from "@/types";
import { getData } from "@/api/apis";
import DocsIcon from "@/assets/icons/docs.svg?react";
import DocsCheck from "@/assets/icons/docsCheck.svg?react";
import DocsEx from "@/assets/icons/docsExclamation.svg?react";
import DocsQuestion from "@/assets/icons/docsQuestion.svg?react";
import DocsX from "@/assets/icons/docsX.svg?react";

import { CategoryExamVm, SessionStatus } from "./category-exam.vm";

const { QuizResult, QuizStart } = lazily(() => import("@/containers"));
const { Loading, NotFound404 } = lazily(() => import("@/components"));
const { Exam } = lazily(() => import("./views"));

interface GetIcon {
  "Не решал": { icon: JSX.Element; desc: string };
  Знаю: { icon: JSX.Element; desc: string };
  "Делаю ошибки": { icon: JSX.Element; desc: string };
  "Не знаю": { icon: JSX.Element; desc: string };
}

const getIcons = (categoryTitle: keyof GetIcon) =>
  ({
    "Не решал": { icon: DocsEx, desc: "Вопросы, которые вы ещё не решали" },
    "Делаю ошибки": {
      icon: DocsX,
      desc: "Вопросы, в которых вы ошибаетесь",
    },
    Знаю: { icon: DocsCheck, desc: "Вопросы, которые вы решаете правильно" },
    "Не знаю": {
      icon: DocsQuestion,
      desc: "Вопросы, которые вы решаете неправильно",
    },
  }[categoryTitle]);

export const CategoryExam = observer(() => {
  const vm = CategoryExamVm;
  const { state } = useLocation();

  const { data, isLoading, error } = useSWRImmutable<QuestionDTO[]>(
    state ? `app/get-category-question/${state}/` : null,
    getData,
  );

  useEffect(() => {
    data && vm.setQuestions(data);
  }, [vm.sessionStatus, data, vm]);

  if (isLoading) return <Loading />;

  if (error) return <NotFound404 />;

  return vm.sessionStatus === SessionStatus.WAIT ? (
    <QuizStart Icon={getIcons(state).icon} title={`«${state}»`} subtitle={getIcons(state).desc} vm={vm} />
  ) : vm.sessionStatus === SessionStatus.START ? (
    <Exam />
  ) : vm.sessionStatus === SessionStatus.FINISH ? (
    <QuizResult Icon={DocsIcon} title={state} vm={vm} />
  ) : null;
});

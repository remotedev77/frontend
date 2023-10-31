import { useEffect } from "react";
import { observer } from "mobx-react";
import useSWRImmutable from "swr/immutable";
import { getData } from "../../api/apis";

import { QuestionDTO } from "../../types";
import { CategoryExamVm, SessionStatus } from "./category-exam.vm";
import { Exam } from "./views";
import { QuizResult, QuizStart } from "../../containers";
import { Loading } from "../../components";
import { useLocation } from "react-router-dom";
import {
  DocsCheck,
  DocsEx,
  DocsQuestion,
  DocsX,
  IconProps,
} from "../../assets/lib";

interface GetIcon {
  "Не решал": ({ style }: IconProps) => JSX.Element;
  Знаю: ({ style }: IconProps) => JSX.Element;
  "Делаю ошибки": ({ style }: IconProps) => JSX.Element;
  "Не знаю": ({ style }: IconProps) => JSX.Element;
}

const getIcons = (categoryTitle: keyof GetIcon) =>
  ({
    "Не решал": DocsEx,
    "Делаю ошибки": DocsX,
    Знаю: DocsCheck,
    "Не знаю": DocsQuestion,
  }[categoryTitle]);

export const CategoryExam = observer(() => {
  const vm = CategoryExamVm;
  const { state } = useLocation();

  const { data, isLoading, error } = useSWRImmutable<QuestionDTO[]>(
    state ? `app/get-category-question/${state}/` : null,
    getData
  );

  useEffect(() => {
    data && vm.setQuestions(data);
  }, [data, vm, vm.sessionStatus]);

  if (isLoading) return <Loading />;

  if (error) return <>{error}</>;

  return vm.sessionStatus === SessionStatus.WAIT ? (
    <QuizStart
      Icon={getIcons(state)}
      title={state}
      subtitle={"Категория вопросов"}
      vm={vm}
    />
  ) : vm.sessionStatus === SessionStatus.START ? (
    <Exam />
  ) : vm.sessionStatus === SessionStatus.FINISH ? (
    <QuizResult Icon={getIcons(state)} vm={vm} />
  ) : null;
});

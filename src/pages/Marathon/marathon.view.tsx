import { useEffect } from "react";
import { observer } from "mobx-react";
import useSWRImmutable from "swr/immutable";
import { getData } from "../../api/apis";

import { QuestionDTO } from "../../types";
import { MarathonVm, SessionStatus } from "./marathon.vm";
import { Exam } from "./views";
import { QuizResult, QuizStart } from "../../containers";
import { Loading, NotFound404 } from "../../components";
import { BigCardsIcon } from "../../assets/lib";

export const Marathon = observer(() => {
  const vm = MarathonVm;
  const { data, isLoading, error, mutate } = useSWRImmutable<QuestionDTO[]>(
    "/app/get-questions/",
    getData
  );

  useEffect(() => {
    data && vm.questions.length === 0 && vm.setQuestions(data);
    mutate();
    const getNewQuestions = async () => {
      const newData = await mutate();
      newData && vm.setQuestions(newData);
    };

    if (vm.checkedAnswers.length === 40) {
      getNewQuestions();
    }
  }, [vm.sessionStatus, vm.checkedAnswers.length]);

  if (isLoading) return <Loading />;

  if (error) return <NotFound404 />;

  return vm.sessionStatus === SessionStatus.WAIT ? (
    <QuizStart
      Icon={BigCardsIcon}
      title="Марафон"
      subtitle="Бесконечный поток вопросов...."
      vm={vm}
    />
  ) : vm.sessionStatus === SessionStatus.START ? (
    <Exam />
  ) : vm.sessionStatus === SessionStatus.FINISH ? (
    <QuizResult Icon={BigCardsIcon} vm={vm} />
  ) : null;
});

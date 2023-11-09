import { useEffect } from "react";
import { observer } from "mobx-react";
import useSWRImmutable from "swr/immutable";
import { getData } from "../../api/apis";

import { QuestionDTO } from "../../types";
import { MarathonVm, SessionStatus } from "./marathon.vm";
import { Exam } from "./views";
import { QuizResult, QuizStart } from "../../containers";
import { Loading, NotFound404 } from "../../components";
import Cards from "../../assets/icons/cards.svg?react";

export const Marathon = observer(() => {
  const vm = MarathonVm;
  const { data, isLoading, error } = useSWRImmutable<QuestionDTO[]>(
    "/app/get-questions/",
    getData
  );

  useEffect(() => {
    data && vm.setQuestions(data);
    // const getNewQuestions = async () => {
    //   const newData = await mutate();
    //   newData && vm.updateQuestions(newData);
    // };

    // if (vm.checkedAnswers.length === 2) {
    //   getNewQuestions();
    // } else {
    //   data && vm.questions?.length === 0 && vm.setQuestions(data);
    // }
    // console.log(toJS(vm.questions));
    // vm.checkedAnswers.length,
  }, [vm.sessionStatus, vm, data]);

  if (isLoading) return <Loading />;

  if (error) return <NotFound404 />;

  return vm.sessionStatus === SessionStatus.WAIT ? (
    <QuizStart
      Icon={Cards}
      title="Марафон"
      subtitle="Бесконечный поток вопросов...."
      vm={vm}
    />
  ) : vm.sessionStatus === SessionStatus.START ? (
    <Exam />
  ) : vm.sessionStatus === SessionStatus.FINISH ? (
    <QuizResult Icon={Cards} vm={vm} />
  ) : null;
});

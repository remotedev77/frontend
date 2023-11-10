import { useEffect } from "react";
import { observer } from "mobx-react";
import useSWRImmutable from "swr/immutable";
import { getData, postData } from "../../api/apis";

import { AnswerResultDTO, AnswersArgs, QuestionDTO } from "../../types";
import { MarathonVm, SessionStatus } from "./marathon.vm";
import { Exam } from "./views";
import { QuizResult, QuizStart } from "../../containers";
import { Loading, NotFound404 } from "../../components";
import Cards from "../../assets/icons/cards.svg?react";
import useSWRMutation from "swr/mutation";

export const Marathon = observer(() => {
  const vm = MarathonVm;
  const { data, isLoading, error, mutate } = useSWRImmutable<QuestionDTO[]>(
    "/app/get-questions/",
    getData
  );

  const { trigger } = useSWRMutation<
    AnswerResultDTO[],
    unknown,
    string,
    AnswersArgs[]
  >("app/check-question/", postData);

  useEffect(() => {
    const getNewQuestions = async () => {
      const newData = await mutate();
      newData && vm.updateQuestions(newData);
    };

    const saveCheckedAnswerResult = async () => {
      vm.setAnswerResult(await trigger(vm.selectedAnswers));
    };

    if (vm.checkedAnswers.length > 0 && vm.checkedAnswers.length % 40 === 0) {
      getNewQuestions();
    } else {
      data && vm.questions?.length === 0 && vm.setQuestions(data);
    }
    saveCheckedAnswerResult();
  }, [vm.sessionStatus, vm.checkedAnswers.length, isLoading]);

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

import { useEffect } from "react";
import { observer } from "mobx-react";
import useSWRImmutable from "swr/immutable";
import { getData } from "../../api/apis";

import { QuestionDTO } from "../../types";
import { MarathonVm, SessionStatus } from "./marathon.vm";
import { Exam } from "./views";
import { QuizResult, QuizStart } from "../../containers";
import { Loading } from "../../components";
import { BigCardsIcon } from "../../assets/lib";

export const Marathon = observer(() => {
  const vm = MarathonVm;
  const { data, isLoading, error } = useSWRImmutable<QuestionDTO[]>(
    "/app/get-questions/",
    getData
  );

  useEffect(() => {
    data && vm.setQuestions(data);
  }, [data, vm, vm.sessionStatus]);

  if (isLoading) return <Loading />;

  if (error) return <>{error}</>;

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

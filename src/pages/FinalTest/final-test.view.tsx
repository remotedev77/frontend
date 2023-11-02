import { useEffect } from "react";
import { observer } from "mobx-react";
import useSWRImmutable from "swr/immutable";
import { getData } from "../../api/apis";

import { QuestionDTO } from "../../types";
import { FinalTestVm, SessionStatus } from "./final-test.vm";
import { Exam } from "./views";
import { QuizResult, QuizStart } from "../../containers";
import { Loading, NotFound404 } from "../../components";
import { DocsIcon } from "../../assets/lib";

export const FinalTest = observer(() => {
  const vm = FinalTestVm;
  const { data, isLoading, error } = useSWRImmutable<QuestionDTO[]>(
    "/app/get-questions/",
    getData
  );

  useEffect(() => {
    data && vm.setQuestions(data);
  }, [data, vm, vm.sessionStatus]);

  if (isLoading) return <Loading />;

  if (error) return <NotFound404 />;

  return vm.sessionStatus === SessionStatus.WAIT ? (
    <QuizStart
      Icon={DocsIcon}
      title="Итоговое тестирование"
      subtitle="Информация об экзамене"
      vm={vm}
    />
  ) : vm.sessionStatus === SessionStatus.START ? (
    <Exam />
  ) : vm.sessionStatus === SessionStatus.FINISH ? (
    <QuizResult Icon={DocsIcon} vm={vm} />
  ) : null;
});

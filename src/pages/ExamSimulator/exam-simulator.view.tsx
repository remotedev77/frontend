import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import useSWRImmutable from "swr/immutable";
import { lazily } from "react-lazily";

import { getData } from "@/api/apis.ts";
import { QuestionDTO } from "@/types/index.ts";
import { ExamSimulatorVm, SessionStatus } from "./exam-simulator.vm.ts";
import DocsIcon from "@/assets/icons/docs.svg?react";

const { QuizResult, QuizStart } = lazily(() => import("@/containers"));
const { Loading, NotFound404 } = lazily(() => import("@/components"));
const { Exam } = lazily(() => import("./views"));

export const ExamSimulator = observer(() => {
  const vm = ExamSimulatorVm;
  const { data, isLoading, error, mutate } = useSWRImmutable<QuestionDTO[]>(
    "/app/get-questions/",
    getData
  );

  useEffect(() => {
    mutate();
    data && vm.setQuestions(data);
  }, [vm.sessionStatus]);

  if (isLoading) return <Loading />;
  if (error) return <NotFound404 />;

  return vm.sessionStatus === SessionStatus.WAIT ? (
    <QuizStart
      Icon={DocsIcon}
      title="Симулятор экзамена"
      subtitle="Информация об экзамене"
      vm={vm}
    />
  ) : vm.sessionStatus === SessionStatus.START ? (
    <Exam />
  ) : vm.sessionStatus === SessionStatus.FINISH ? (
    <QuizResult Icon={DocsIcon} vm={vm} />
  ) : null;
});

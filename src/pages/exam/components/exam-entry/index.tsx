import { TailSpin } from "react-loader-spinner";

import CardIcon from "../card-icon";
import useGetQuestions from "../exam-session/hooks/useGetQuestions";
import QuestionAccordion from "../question-accordion";
import { QuestionResponse } from "../../models";
import useExamStore from "@/services/state/examStore";
import useSetExamDetails from "../exam-session/hooks/useSetExamDetails";

const ExamEntry = () => {
  const { state } = useSetExamDetails();
  const { questionType } = useExamStore();
  const { data, isLoading, isValidating, error } = useGetQuestions();

  if (isLoading || isValidating) {
    return (
      <TailSpin
        visible={true}
        height="80"
        width="80"
        color="#F3693F"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperClass="absolute inset-0 flex items-center justify-center"
      />
    );
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div className="space-y-4 layout min-h-dvh">
      <CardIcon buttonTitle="Начать" />
      {questionType === "category" && state !== "Не решал" && (
        <QuestionAccordion type="entry" questions={data as unknown as QuestionResponse[]} />
      )}
    </div>
  );
};

export default ExamEntry;

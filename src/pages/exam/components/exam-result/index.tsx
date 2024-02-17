import useSWR from "swr";

import useExamStore, { Format } from "@/services/state/examStore";

import { postData } from "@/services/api/requests";

import { QuestionResponse } from "@/pages/exam/models";

import { checkQuestionType } from "../../lib/utils";
import { TailSpin } from "react-loader-spinner";
import CardIcon from "../card-icon";
import QuestionAccordion from "../question-accordion";

const ExamResult = () => {
  const { questionType, answers, format, checkedQuestions } = useExamStore();
  const { data, isLoading, isValidating, error } = useSWR<QuestionResponse[]>(
    format === Format.TIME ? checkQuestionType(questionType || "simulation") : null,
    (path: string) =>
      postData(path, {
        arg: answers,
      }),
    { revalidateOnFocus: false }
  );

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

  const getAnswersCount = (typeAnswer: boolean) => data?.filter(({ is_correct }) => is_correct === typeAnswer).length;

  return (
    <div className="space-y-4 layout min-h-dvh">
      <CardIcon
        buttonTitle="Пройти заново"
        correctAnswerCount={getAnswersCount(true)}
        falseAnswerCount={getAnswersCount(false)}
      />
      <QuestionAccordion questions={format === Format.TIME ? data || [] : checkedQuestions} />
    </div>
  );
};

export default ExamResult;

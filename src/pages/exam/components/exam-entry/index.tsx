import CardIcon from "../card-icon";
import useGetQuestions from "../exam-session/hooks/useGetQuestions";
import QuestionAccordion from "../question-accordion";

const ExamEntry = () => {
  const { data } = useGetQuestions();
  console.log(data);
  return (
    <div className="flex flex-col layout min-h-dvh">
      <CardIcon buttonTitle="Начать" />
      <QuestionAccordion questions={data} />
    </div>
  );
};

export default ExamEntry;

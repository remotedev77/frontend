import { Button } from "@/common/components/ui/button";
import { Separator } from "@/common/components/ui/separator";
import { Answer as AnswerDTO } from "@/pages/exam/models";
import useExamStore from "@/services/state/examStore";

type AnswerProps = AnswerDTO & {
  index: number;
};

const alpha = ["А", "Б", "В", "Г", "Д", "Е", "Ж", "З", "И", "К"];

const Answer = ({ id, answer, index }: AnswerProps) => {
  const { answers, setAnswer, getSelectedQuestion } = useExamStore();
  const currentQuestionId = getSelectedQuestion()?.id;
  const handleSetAnswer = () => {
    setAnswer(id);
  };

  const checkAnswer = () => {
    return answers.find(({ q_id }) => q_id === currentQuestionId)?.a_id.includes(id);
  };
  return (
    <div className="flex size-full">
      <div className="flex items-center justify-center w-12 h-full text-lg font-bold border border-e-0 rounded-s-md rounded-e-none shrink-0">
        {alpha[index]}
      </div>
      <Separator orientation="vertical" />
      <Button
        className="justify-start h-full py-4 whitespace-normal grow rounded-s-none border-s-0 sm:text-base lg:text-lg text-start"
        size="lg"
        variant={checkAnswer() ? "default" : "outline"}
        onClick={handleSetAnswer}
      >
        {answer}
      </Button>
    </div>
  );
};

export default Answer;

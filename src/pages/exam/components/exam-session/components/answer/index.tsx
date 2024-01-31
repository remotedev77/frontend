import { Button } from "@/common/components/ui/button";
import { Separator } from "@/common/components/ui/separator";
import { cn } from "@/common/lib/utils";
import { Answer as AnswerDTO } from "@/pages/exam/models";
import useExamStore, { Format } from "@/services/state/examStore";
import { useCallback } from "react";

type AnswerProps = AnswerDTO & {
  index: number;
  disabled: boolean;
};

const alpha = ["А", "Б", "В", "Г", "Д", "Е", "Ж", "З", "И", "К"];

const Answer = ({ id, answer, index, disabled }: AnswerProps) => {
  const { format, selectedIndex, checkedQuestions, answers, setAnswer, getSelectedQuestion } = useExamStore();
  const currentQuestionId = getSelectedQuestion()?.id;
  const handleSetAnswer = () => {
    setAnswer(id);
  };

  const checkAnswer = useCallback(
    () => answers.find(({ q_id }) => q_id === currentQuestionId)?.a_id.includes(id),
    [answers, currentQuestionId, id]
  );

  return (
    <div className="flex size-full">
      <div className="flex items-center justify-center w-12 h-full text-lg font-bold border border-e-0 rounded-s-md rounded-e-none shrink-0">
        {alpha[index]}
      </div>
      <Separator orientation="vertical" />
      <Button
        className={cn(
          "justify-start h-full py-4 whitespace-normal grow rounded-s-none border-s-0 sm:text-base lg:text-lg text-start",
          format === Format.STANDART
            ? checkedQuestions.find(({ checkedIndex }) => selectedIndex === checkedIndex)?.answers?.[index].is_correct
              ? "bg-green-500 text-white"
              : null
            : null
        )}
        size="lg"
        variant={checkAnswer() ? "default" : "outline"}
        onClick={handleSetAnswer}
        disabled={disabled}
      >
        {answer}
      </Button>
    </div>
  );
};

export default Answer;

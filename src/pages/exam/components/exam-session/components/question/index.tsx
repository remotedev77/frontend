import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/common/components/ui/card";
import useExamStore from "@/services/state/examStore";
import Answer from "../answer";

const Question = () => {
  const { selectedIndex, getSelectedQuestion } = useExamStore();
  return (
    <Card className="overflow-y-auto grow" key={getSelectedQuestion()?.id}>
      <CardHeader>
        <CardDescription>Вопрос № {selectedIndex + 1}</CardDescription>
        <CardTitle className="leading-normal card-title text-balance">{getSelectedQuestion()?.question}</CardTitle>
      </CardHeader>
      <CardContent className="grid w-full gap-4">
        {getSelectedQuestion()?.answers.map((answer, index) => (
          <Answer key={answer.id} {...answer} index={index} />
        ))}
      </CardContent>
    </Card>
  );
};

export default Question;

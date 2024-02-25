import { Card } from "@/common/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/common/components/ui/accordion";
import { Badge } from "@/common/components/ui/badge";

import { cn } from "@/common/lib/utils";
import { QuestionResponse, QuestionType } from "../../models";
import { useLocation } from "react-router-dom";

type QuestionAccordionProps = { type?: "entry"; questions: QuestionResponse[] };

const QuestionAccordion = ({ type, questions }: QuestionAccordionProps) => {
  const { state } = useLocation() as { state: QuestionType };
  console.log(questions);
  return (
    <Accordion type="single" className="grid gap-4" collapsible>
      {questions
        ?.slice(0, state === "simulation" ? questions.length - 1 : questions.length)
        ?.map(({ question, answers, description, is_correct, checkedIndex }, index) => (
          <AccordionItem className="px-4 border shadow rounded-xl" value={`item-${index}`} key={index}>
            <AccordionTrigger className="items-end text-start hover:no-underline">
              <div className="space-y-2">
                <Badge
                  className={cn(
                    " select-none",
                    type
                      ? "bg-white hover:bg-white/90 text-gray-950"
                      : is_correct === null
                      ? "bg-amber-500 hover:bg-amber-600"
                      : is_correct
                      ? "bg-green-500 hover:bg-green-600"
                      : "bg-red-500 hover:bg-red-600"
                  )}
                >
                  Вопрос №{(checkedIndex && checkedIndex + 1) || index + 1}
                </Badge>
                <div className="text-xs sm:text-sm lg:text-base">{question}</div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="space-y-3 text-xs sm:text-sm lg:text-base">
              {answers?.map(({ is_correct: answerIsCorrect, answer, user_selected }, index) => (
                <Card
                  className={cn(
                    "h-full p-3 text-pretty",
                    user_selected && "border-red-500 border-2",
                    answerIsCorrect && "border-green-500 border-2"
                  )}
                  key={index}
                >
                  {answer}
                </Card>
              ))}
              {description ? <p>{description}</p> : null}
            </AccordionContent>
          </AccordionItem>
        ))}
    </Accordion>
  );
};

export default QuestionAccordion;

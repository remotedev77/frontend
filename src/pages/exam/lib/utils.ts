import { appEndpoints } from "@/services/api/endpoints";
import { QuestionType } from "../models";

const checkQuestionType = (questionType: QuestionType) =>
  ((
    {
      marathon: appEndpoints.checkMarathon,
      category: appEndpoints.checkCategory,
      "final-test": appEndpoints.checkFinalTest,
      simulation: appEndpoints.checkSimulation,
    } as Record<QuestionType, string>
  )[questionType]);

export { checkQuestionType };

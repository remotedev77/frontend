import { AnswerDTO } from "../answer.ts";

export interface QuestionDTO {
  id: number;
  question: string;
  image: string | null;
  answers: AnswerDTO[];
}

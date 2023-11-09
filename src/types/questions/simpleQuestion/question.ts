import { AnswerDTO } from "../answer.ts";

export enum Note {
  Multiple = "multiple",
  Single = "single",
}

export interface QuestionDTO {
  id: number;
  question: string;
  image: null;
  answers: AnswerDTO[];
  question_code: number;
  work_function: string;
  note: Note;
}

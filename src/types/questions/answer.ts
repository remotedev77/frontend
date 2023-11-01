export interface AnswerDTO {
  id: number;
  answer: string;
  is_correct: boolean;
}

export interface AnswerResultDTO {
  question?: string;
  user_answer?: string;
  correct_answer?: string;
  is_correct?: boolean;
  description?: string;
  correct_answers_count?: number;
  incorrect_answers_count?: number;
  success?: boolean;
}

export enum ExamType {
  SIMULATOR = "simulator",
  FINAL_TEST = "final_test",
  MARATHON = "marathon",
  CATEGORY = "category",
}

export interface AnswersArgs {
  q_id?: number;
  a_id?: number;
  exam_type?: ExamType;
}

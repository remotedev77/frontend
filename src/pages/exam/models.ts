interface Answer {
  id: number;
  answer: string;
}

enum Note {
  Multiple = "multiple",
  Single = "single",
}

interface Question {
  id: number;
  question: string;
  answers: Answer[];
  image: null;
  question_code: number;
  work_function: string;
  note: Note;
}

interface AnswerArgs {
  q_id: number;
  a_id: number[];
}

interface AnswerResponse {
  answer: string;
  is_correct: boolean;
}

interface QuestionResponse {
  question?: string;
  is_correct?: boolean;
  user_selected_check?: null;
  description?: null;
  answers?: AnswerResponse[];
  correct_answers_count?: number;
  incorrect_answers_count?: number;
  success?: boolean;
  checkedIndex?: number;
}

type QuestionType = "marathon" | "category" | "final-test" | "simulation";

export type { Answer, Question, AnswerArgs, QuestionResponse, QuestionType };
export { Note };

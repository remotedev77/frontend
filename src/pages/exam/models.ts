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

export type { Answer, Question, AnswerArgs };
export { Note };

import { AnswerArgs, Note, Question, QuestionResponse, QuestionType } from "@/pages/exam/models";
import { create } from "zustand";

enum Format {
  TIME,
  STANDART,
}

enum Stage {
  ENTRY,
  SESSION,
  RESULT,
}

type CheckedQuestions = QuestionResponse & { checkedIndex: number };

type State = {
  stage: Stage;
  questions: Question[];
  selectedIndex: number;
  answers: AnswerArgs[];
  format: Format;
  checkedQuestions: CheckedQuestions[];
  questionType: QuestionType | null;
};

type Action = {
  getSelectedQuestion: () => Question;
  setStage: (newStage: Stage) => void;
  setQuestions: (questions: Question[]) => void;
  setSelectedIndex: (index: number) => void;
  incrementSelectedIndex: () => void;
  decrementSelectedIndex: () => void;
  setAnswer: (answer: number) => void;
  setInitialAnswers: () => void;
  resetExam: () => void;
  setFormat: (newFormat: Format) => void;
  setCheckedQuestion: (newCheckedQuestion: CheckedQuestions) => void;
  setQuestionType: (newQuestionType: QuestionType) => void;
};

type useExamStore = State & Action;

const useExamStore = create<useExamStore>((set, get) => ({
  stage: Stage.ENTRY,
  questions: [],
  selectedIndex: 0,
  answers: [],
  format: Format.STANDART,
  checkedQuestions: [],
  questionType: null,
  getSelectedQuestion: () => get().questions?.[get().selectedIndex],
  setStage: (newStage) => set({ stage: newStage }),
  setQuestions: (questions) => set({ questions }),
  setSelectedIndex: (index) => set({ selectedIndex: index }),
  incrementSelectedIndex: () =>
    set((state) => ({
      selectedIndex:
        (state.questionType === "marathon"
          ? state.questions.slice(0, state.checkedQuestions.length + 1).length
          : state.questions.length) -
          1 ===
        state.selectedIndex
          ? 0
          : state.selectedIndex + 1,
    })),
  decrementSelectedIndex: () =>
    set((state) => ({
      selectedIndex:
        state.selectedIndex === 0
          ? (state.questionType === "marathon"
              ? state.questions.slice(0, state.checkedQuestions.length + 1).length
              : state.questions.length) - 1
          : state.selectedIndex - 1,
    })),
  setAnswer: (answer) =>
    set((state) => {
      const questionType = state.getSelectedQuestion()?.note;

      const currentQuestionId = state.getSelectedQuestion()?.id;
      const currentAnswers = state.answers.find(({ q_id }) => q_id === currentQuestionId)?.a_id || [];
      const updatedAnswer = currentAnswers.includes(answer)
        ? currentAnswers?.filter((a) => a !== answer)
        : questionType === Note.Multiple
        ? [...currentAnswers, answer]
        : questionType === Note.Single
        ? [answer]
        : [];

      const newAnswer = {
        q_id: currentQuestionId,
        a_id: updatedAnswer,
      };

      const updatedAnswers = state.answers.map((answer) => (answer.q_id !== currentQuestionId ? answer : newAnswer));
      return {
        answers: updatedAnswers,
      };
    }),
  setInitialAnswers: () => set((state) => ({ answers: state.questions.map(({ id }) => ({ q_id: id, a_id: [] })) })),
  resetExam: () => set({ answers: [], checkedQuestions: [], selectedIndex: 0, questions: [] }),
  setFormat: (newFormat) => set({ format: newFormat }),
  setCheckedQuestion: (checkedQuestion) =>
    set((state) => ({
      checkedQuestions: [...state.checkedQuestions, checkedQuestion],
    })),
  setQuestionType: (newQuestionType) => set({ questionType: newQuestionType }),
}));

export default useExamStore;
export { Stage, Format };
export type { CheckedQuestions };

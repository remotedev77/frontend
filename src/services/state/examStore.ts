import { AnswerArgs, Note, Question } from "@/pages/exam/models";
import { create } from "zustand";

enum Stage {
  ENTRY,
  SESSION,
  RESULT,
}

type State = {
  stage: Stage;
  questions: Question[];
  selectedIndex: number;
  answers: AnswerArgs[];
};

type Action = {
  getSelectedQuestion: () => Question;
  setStage: (newStage: Stage) => void;
  setQuestions: (questions: Question[]) => void;
  setSelectedIndex: (index: number) => void;
  incrementSelectedIndex: () => void;
  decrementSelectedIndex: () => void;
  setAnswer: (answer: number) => void;
};

type useExamStore = State & Action;

const useExamStore = create<useExamStore>((set, get) => ({
  stage: Stage.ENTRY,
  questions: [],
  selectedIndex: 0,
  answers: [],
  getSelectedQuestion: () => get().questions?.[get().selectedIndex],
  setStage: (newStage) => set({ stage: newStage }),
  setQuestions: (questions) => set({ questions }),
  setSelectedIndex: (index) => set({ selectedIndex: index }),
  incrementSelectedIndex: () =>
    set((state) => ({
      selectedIndex: state.selectedIndex + 1,
    })),
  decrementSelectedIndex: () =>
    set((state) => ({
      selectedIndex: state.selectedIndex - 1,
    })),
  setAnswer: (answer) =>
    set((state) => {
      const questionType = get().getSelectedQuestion()?.note;

      const currentQuestionId = get().getSelectedQuestion()?.id;
      const currentAnswers = state.answers.find(({ q_id }) => q_id === currentQuestionId)?.a_id || [];
      const updatedAnswers = currentAnswers.includes(answer)
        ? currentAnswers?.filter((a) => a !== answer)
        : questionType === Note.Multiple
        ? [...currentAnswers, answer]
        : questionType === Note.Single
        ? [answer]
        : [];

      const prevAnswers = state.answers.filter(({ q_id }) => q_id !== currentQuestionId);
      const newAnswer = {
        q_id: currentQuestionId,
        a_id: updatedAnswers,
      };
      return {
        answers: [...prevAnswers, newAnswer],
      };
    }),
}));

export default useExamStore;
export { Stage };

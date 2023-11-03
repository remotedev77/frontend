import { makeAutoObservable } from "mobx";
import { AnswersArgs, ExamType, QuestionDTO } from "../../types";

export enum SessionStatus {
  START = "start",
  WAIT = "wait",
  FINISH = "finish",
}

export type CheckedAnswers = {
  questionId?: number;
  answerId?: number;
  correctAnswerId?: number;
  isCorrect?: boolean;
};

export const MarathonVm = new (class {
  exam_type: ExamType = ExamType.MARATHON;
  questions: QuestionDTO[] = [];
  questionNumber: number = 0;
  selectedAnswers: AnswersArgs[] = [];
  selectedQuestion = this.questions?.[0];
  checkedAnswers: CheckedAnswers[] = [];
  sessionStatus: SessionStatus = SessionStatus.WAIT;
  results: AnswersArgs[] = [];

  startSession() {
    this.sessionStatus = SessionStatus.START;
  }

  finishSession() {
    this.selectedAnswers.push({ exam_type: this.exam_type });
    this.sessionStatus = SessionStatus.FINISH;
  }

  waitSession() {
    this.sessionStatus = SessionStatus.WAIT;
  }

  setQuestions(questions: QuestionDTO[]) {
    this.questions = [...this.questions, ...questions];
    this.changeSelectedQuestion(this.questionNumber);
  }

  changeSelectedQuestion(n: number) {
    this.selectedQuestion = this.questions[n];
    this.questionNumber = n;
  }

  setSelectedAnswer({ a_id }: Pick<AnswersArgs, "a_id">) {
    const updatedAnswerIndex = this.selectedAnswers.findIndex(
      ({ q_id }) => q_id === this.selectedQuestion.id
    );

    updatedAnswerIndex === -1
      ? this.selectedAnswers.push({ a_id, q_id: this.selectedQuestion.id })
      : this.updateSelectedAnswer({ a_id });
  }

  updateSelectedAnswer({ a_id }: Pick<AnswersArgs, "a_id">) {
    const updatedAnswerIndex = this.selectedAnswers.findIndex(
      ({ q_id }) => q_id === this.selectedQuestion.id
    );

    const left = this.selectedAnswers.slice(0, updatedAnswerIndex - 1);
    const right = this.selectedAnswers.slice(
      updatedAnswerIndex,
      this.selectedAnswers.length - 1
    );
    const current = { a_id, q_id: this.selectedQuestion.id };
    this.selectedAnswers = [...left, current, ...right];
  }

  findSelectedAnswer() {
    return this.selectedAnswers.find(
      ({ q_id }) => q_id === this.selectedQuestion.id
    )?.a_id;
  }

  checkAnswer() {
    const correctAnswer = this.selectedQuestion.answers?.find(
      ({ is_correct }) => is_correct
    );

    const checkAnswerObj: CheckedAnswers = {
      correctAnswerId: correctAnswer?.id,
      answerId: this.findSelectedAnswer(),
      questionId: this.selectedQuestion?.id,
    };

    const checkAnswerCorrect =
      checkAnswerObj.correctAnswerId === checkAnswerObj.answerId;

    !this.findCheckedAnswer() &&
      this.findSelectedAnswer() &&
      this.checkedAnswers.push({
        ...checkAnswerObj,
        isCorrect: checkAnswerCorrect,
      });
  }

  findCheckedAnswer() {
    return this.checkedAnswers.find(
      ({ questionId }) => questionId === this.selectedQuestion.id
    );
  }

  reset() {
    this.checkedAnswers = [];
    this.questions = [];
    this.selectedAnswers = [];
    this.selectedQuestion = this.questions?.[0];
    this.questionNumber = 0;
    this.sessionStatus = SessionStatus.WAIT;
    this.results = [];
  }

  constructor() {
    makeAutoObservable(this);
  }
})();

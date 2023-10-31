import { makeAutoObservable } from "mobx";
import { AnswersArgs, ExamType, QuestionDTO } from "../../types";
import { CheckedAnswers } from "../Marathon/marathon.vm";

export enum SessionStatus {
  START = "start",
  WAIT = "wait",
  FINISH = "finish",
}

export const ExamSimulatorVm = new (class {
  checkedAnswers: CheckedAnswers[] = [];
  exam_type: ExamType = ExamType.SIMULATOR;
  questions: QuestionDTO[] = [];
  selectedAnswers: AnswersArgs[] = [];
  selectedQuestion = this.questions?.[0];
  questionNumber = 0;
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
    this.questions = [...questions];
    this.changeSelectedQuestion(0);
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
    const left = this.selectedAnswers.slice(0, updatedAnswerIndex);
    const right = this.selectedAnswers.slice(
      updatedAnswerIndex + 1,
      this.selectedAnswers.length
    );
    const current = { a_id, q_id: this.selectedQuestion.id };
    this.selectedAnswers = [...left, current, ...right];
  }

  findSelectedAnswer() {
    return this.selectedAnswers.find(
      ({ q_id }) => q_id === this.selectedQuestion.id
    )?.a_id;
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

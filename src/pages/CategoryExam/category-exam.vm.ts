import { makeAutoObservable } from "mobx";
import { AnswersArgs, ExamType, QuestionDTO } from "../../types";

export enum SessionStatus {
  START = "start",
  WAIT = "wait",
  FINISH = "finish",
}

export type CheckedAnswers = {
  questionId?: number;
  answerIds?: number[];
  correctAnswerId?: number;
  isCorrect?: boolean;
};

export const CategoryExamVm = new (class {
  exam_type: ExamType = ExamType.CATEGORY;
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
    this.sessionStatus = SessionStatus.FINISH;
  }

  waitSession() {
    this.sessionStatus = SessionStatus.WAIT;
  }

  setQuestions(questions: QuestionDTO[]) {
    this.questions = [...questions];
    const defaultSelectedAnsers = questions?.map(({ id }) => ({
      q_id: id,
      a_id: [],
    }));
    console.log(defaultSelectedAnsers);
    this.selectedAnswers = [...defaultSelectedAnsers];

    this.changeSelectedQuestion(this.questionNumber);
  }

  updateQuestions(newQuestions: QuestionDTO[]) {
    this.questions.push(...newQuestions);
  }

  changeSelectedQuestion(n: number) {
    this.selectedQuestion = this.questions[n];
    this.questionNumber = n;
  }

  setSelectedAnswer(a_id: number) {
    const updatedAnswerIndex = this.selectedAnswers.findIndex(
      ({ q_id }) => q_id === this.selectedQuestion.id
    );

    updatedAnswerIndex === -1
      ? this.selectedAnswers.push({
          a_id: [a_id],
          q_id: this.selectedQuestion.id,
        })
      : this.updateSelectedAnswer(a_id);
  }

  updateSelectedAnswer(a_id: number) {
    const updatedAnswerIndex = this.selectedAnswers.findIndex(
      ({ q_id }) => q_id === this.selectedQuestion.id
    );

    const current: AnswersArgs = {
      a_id: [a_id],
      q_id: this.selectedQuestion.id,
    };

    this.selectedAnswers[updatedAnswerIndex] = current;
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
      answerIds: this.findSelectedAnswer(),
      questionId: this.selectedQuestion?.id,
    };

    const checkAnswerCorrect =
      checkAnswerObj.correctAnswerId === checkAnswerObj.answerIds;

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

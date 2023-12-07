import { makeAutoObservable } from "mobx";
import { Question } from "../../../QuestionTable/question-table.vm.ts";
import { postQuestion } from "../../../../../../api/apis.ts";

export const AddQuestionVm = new (class {
  private _question: Question = {
    id: Date.now(),
    question: "",
    question_code: 0,
    answers: [{ answer: "", is_correct: false }],
    correct_answer_description: "",
    note: "",
    work_function: "",
    image: "",
  };

  onCodeChange = (code: number) => {
    this._question.question_code = code;
  };
  get answers() {
    return this._question.answers;
  }

  get questionValue() {
    return this._question.question;
  }
  onQuestionChange = (value: string) => {
    this._question.question = value;
  };
  onAnswersChange = (index: number, checked: boolean) => {
    this._question.answers &&
      (this._question.answers[index].is_correct = checked);
  };

  addAnswer = () => {
    this._question.answers?.push({
      id: Date.now(),
      answer: "",
      is_correct: false,
    });
  };
  onAnswerValueChange = (value: string, index: number) => {
    this._question.answers && (this._question.answers[index].answer = value);
    // = value;
  };
  onDescriptionChange = (value: string) => {
    this._question.correct_answer_description = value;
  };
  onNoteChange = (value: string) => {
    this._question.note = value;
    this._question.answers?.map((a) => (a.is_correct = false));
  };
  onWorkFunctionChange = (value: string) => {
    this._question.work_function = value;
  };

  createQuestion = async () => {
    console.log(this._question)
    await postQuestion("/admin-api/create-question/", this._question)
      .then((r) => console.log(r))
      .catch((err) => console.log(err));
  };

  constructor() {
    makeAutoObservable(this);
  }
})();

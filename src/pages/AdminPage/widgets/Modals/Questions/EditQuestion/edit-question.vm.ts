/* eslint-disable @typescript-eslint/no-unused-vars */
import { makeAutoObservable } from "mobx";
import { Question } from "../../../QuestionTable/question-table.vm.ts";
import { deleteById, updateAnswer, updateQuestion } from "../../../../../../api/apis.ts";
import { MouseEventHandler } from "react";

export class EditQuestionVm {
  static setQuestion(_question: Question) {
    throw new Error("Method not implemented.");
  }
  static onAnswersChange(_arg0: unknown, _checked: boolean): void {
    throw new Error("Method not implemented.");
  }
  static onAnswerValueChange(_value: string, _i: unknown): void {
    throw new Error("Method not implemented.");
  }
  static deleteQuestion() {
    throw new Error("Method not implemented.");
  }
  static onNoteChange(_accessKey: string): void {
    throw new Error("Method not implemented.");
  }
  static onQuestionChange(_value: string): void {
    throw new Error("Method not implemented.");
  }
  static onWorkFunctionChange(_value: string): void {
    throw new Error("Method not implemented.");
  }
  static onDescriptionChange(_value: string): void {
    throw new Error("Method not implemented.");
  }
  static editQuestion() {
    throw new Error("Method not implemented.");
  }
  private _question: Question = {
    id: 0,
    question: "",
    question_code: 0,
    answers: [],
    correct_answer_description: "",
    note: "",
    work_function: "",
    image: "",
  };

  setQuestion = (question: Question) => {
    this._question = question;
  };
  static answers: [];
  static addAnswer: MouseEventHandler<HTMLButtonElement> | undefined;
  static isModalVisible: boolean;
  static questionValue: string | number | readonly string[] | undefined;

  get answers() {
    return this._question.answers;
  }

  get questionValue() {
    return this._question.question;
  }
  onQuestionChange = (value: string) => {
    this._question.question = value;
  };
  onAnswersChange = (id: number, checked: boolean) => {
    if (this._question.note === "single") {
      this._question.answers!.map((a) => (a.id === id ? (a.is_correct = checked) : (a.is_correct = false)));
    } else {
      this._question.answers!.map((a) => (a.id === id ? (a.is_correct = checked) : a));
    }
  };

  addAnswer = () => {
    this._question.answers!.push({ id: Date.now(), answer: "", is_correct: false });
  };
  onAnswerValueChange = (value: string, index: number) => {
    this._question.answers![index].answer = value;
  };
  onDescriptionChange = (value: string) => {
    this._question.correct_answer_description = value;
  };
  onNoteChange = (value: string) => {
    this._question.note = value;
    this._question.answers!.map((a) => (a.is_correct = false));
  };
  onWorkFunctionChange = (value: string) => {
    this._question.work_function = value;
  };
  editQuestion = async () => {
    const temp = {
      question: this._question.question,
      question_code: this._question.question_code,
      correct_answer_description: this._question.correct_answer_description,
      note: this._question.note,
      work_function: this._question.work_function,
      image: this._question.image,
    };
    console.log(this._question.answers);
    updateAnswer(`/admin-api/chage-answer/`, this._question.answers!);
    updateQuestion(`/admin-api/chage-question/${this._question.id}/`, temp);
  };
  deleteQuestion = async () => {
    deleteById("/admin-api/chage-question/", this._question.id!);
  };
  constructor() {
    makeAutoObservable(this);
  }
}

import {makeAutoObservable} from "mobx";
import { Question} from "../../../QuestionTable/question-table.vm.ts";
import {postQuestion} from "../../../../../../api/apis.ts";
import {th} from "@faker-js/faker";


export const AddQuestionVm = new class{
    private _question:Question = {
        id:Date.now(),
        question:'',
        question_code:0,
        answers:[
            {id:Date.now(), answer:'', is_correct:false,},
        ],
        correct_answer_description:'',
        note:'',
        work_function:'',
        img:''
    }

    onCodeChange = (code:number) =>{
        this._question.question_code = code
    }
    get answers(){
        return this._question.answers
    }

    get questionValue(){
        return this._question.question
    }
    onQuestionChange = (value:string) =>{
        this._question.question = value
    }
    onAnswersChange = (id:number, checked: boolean) =>{
        if (this._question.note==='single'){
            this._question.answers.map(a => a.id === id? a.is_correct = checked: a.is_correct = false)
        } else {
            this._question.answers.map(a => a.id === id? a.is_correct = checked: a)
        }
    }

    addAnswer = () =>{
        this._question.answers.push({id:Date.now(),answer:'', is_correct:false})
    }
    onAnswerValueChange = (value:string, index:number) =>{
        this._question.answers[index].answer = value
    }
    onDescriptionChange = (value:string) =>{
        this._question.correct_answer_description = value
    }
    onNoteChange = (value:string) =>{
        this._question.note = value
        this._question.answers.map(a => a.is_correct = false)
        console.log('changed', this._question)
    }
    onWorkFunctionChange = (value:string) =>{
        this._question.work_function = value
    }

    createQuestion = async () =>{
      await  postQuestion('/admin-api/create-question/', this._question).then(r =>console.log(r)).catch(err=>console.log(err))
    }

    constructor() {
        makeAutoObservable(this)
    }
}

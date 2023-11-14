import {makeAutoObservable} from "mobx";
import {deleteById} from "../../../../api/apis.ts";


export interface Question{
    id?:number
    question:string
    correct_answer_description:string
    answers?:Answer[]
    image: string
    question_code: number
    work_function: string
    note: string
}

export interface Answer{
    id?:number,
    answer: string
    is_correct: boolean
    question_id?:number
}
export interface DataFormat{
    count: number
    total_pages: number
    next: string
    previous: string
    results: Question[]
}
export const QuestionTableVm = new class{
    private _questions:Question[] = []
    private isSortedByType = false
    setQuestions(data:DataFormat[]){
        this._questions = []
        data.map(d=> this._questions = [...this._questions, ...d.results] )
    }
    getQuestions = () =>{
        return this._questions
    }

    sortByType = () =>{
        if (this.isSortedByType) {
            this._questions.sort((a,b) => a.note.localeCompare(b.note))
        }else {
            this._questions.sort((a,b) => b.note.localeCompare(a.note))
        }
        this.isSortedByType = !this.isSortedByType
    }

    onDeleteQuestion = async (id:number) =>{
       await deleteById('/admin-api/chage-question/', id)
    }


    constructor() {
        makeAutoObservable(this)

    }

}

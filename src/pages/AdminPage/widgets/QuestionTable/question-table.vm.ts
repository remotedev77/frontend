import {makeAutoObservable} from "mobx";


export interface Question{
    id:number
    question:string
    correct_answer_description:string
    answers:Answer[]
    img: string
    question_code: number
    work_function: string
    note: string
}

export interface Answer{
    id:number,
    answer: string
    is_correct: boolean
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


    constructor() {
        makeAutoObservable(this)

    }

}

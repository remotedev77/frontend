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
    private _filterNote: string|null = null
    private _searchString: string = ""

    onSearchChange = (value:string) =>{
        this._searchString = value
    }
    get searchString(){
        return this._searchString
    }

    setFilterNote = (note:string|null) =>{
        this._filterNote = note
    }

    filter(data:DataFormat[]){
        this.setQuestions(data)
        console.log(this._filterNote)
        this._questions = this._questions.filter(question => ((this.searchString.trim() === "" || (
                question.question.toLowerCase().includes(this.searchString.toLowerCase()) ||
                question.question_code.toString().includes(this.searchString))) &&
            (this._filterNote === null || question.note === this._filterNote)
        ))
    }
    setQuestions(data:DataFormat[]){
        this._questions = []
        data.map(d=> this._questions = [...this._questions, ...d.results] )
    }
    getQuestions = () =>{
        return this._questions
    }


    onDeleteQuestion = async (id:number) =>{
       await deleteById('/admin-api/chage-question/', id)
    }


    constructor() {
        makeAutoObservable(this)

    }

}

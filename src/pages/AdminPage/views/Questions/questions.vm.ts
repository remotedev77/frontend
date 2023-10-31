import {QuestionDTO} from "../../../../types";
import {makeAutoObservable} from "mobx";
import {Question} from "../../../../containers";

interface Question extends QuestionDTO{
    description:string
}
interface Answer{
    id:number
    is_correct:boolean,
    answer:string

}
export const QuestionsVm = new class{
    questions:Question[]
    newQuestion:string = ''
    newDescription:string = ''
    newAnswers:Answer[]

    changeNewQuestion(newQuestion:string){
        this.newQuestion = newQuestion
    }
    changeNewDescription(newDescription:string){
        this.newDescription = newDescription
    }

    changeAnswer(index:number,answer:string){
        this.newAnswers[index].answer = answer
    }

    changeIsCorrect(index:number, isCorrect:boolean){
        this.newAnswers[index].is_correct = isCorrect
    }

    addAnswer = () =>{
        this.newAnswers.push({id:Date.now() , is_correct:false, answer:""})
    }
    getAnswer(index:number){
        return  this.newAnswers[index].answer
    }
    deleteQuestion = async (id:number) =>{
        this.questions = this.questions.filter(q=>q.id !== id)
    }
    addQuestion = async () =>{
        this.questions.push({
            id: Date.now(),
            question: this.newQuestion,
            description:this.newDescription,
            answers: this.newAnswers,
            image:null
        })
    }

    constructor() {
        this.newAnswers =[
            {
                id:1,
                is_correct:false,
                answer:''
            },
            {
                id:2,
                is_correct:false,
                answer:''
            },
            {
                id:3,
                is_correct:false,
                answer:''
            },
            {
                id:4,
                is_correct:false,
                answer:''
            },
        ]
        this.questions = [
            {
                question:"rawr",
                answers:[
                    {
                        id:1,
                        answer:"asdasd",
                        is_correct:false
                    },
                    {
                        id:1,
                        answer:"asdasd",
                        is_correct:false
                    },
                    {
                        id:1,
                        answer:"asdasd",
                        is_correct:false
                    }
                ],
                id: 1,
                image:null,
                description:"asdasda"
            },
            {
                question:"raweqweqweqwr",
                answers:[
                    {
                        id:1,
                        answer:"asdasd",
                        is_correct:false
                    },
                    {
                        id:1,
                        answer:"asdasd",
                        is_correct:false
                    },
                    {
                        id:1,
                        answer:"asdasd",
                        is_correct:false
                    }
                ],
                id: 1,
                image:null,
                description:"asdasda"
            }
        ]
        makeAutoObservable(this)
    }
}

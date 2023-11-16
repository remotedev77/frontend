import {makeAutoObservable} from "mobx";
import {User} from "../../../UsersTable";
import {postUser} from "../../../../../../api/apis.ts";


export const NewUserVm = new class{
    private _user:User = {
        id:Date.now(),
        father_name:'',
        last_name:'',
        first_name:'',
        final_test:false,
        password:'',
        email:'',
        end_date:'2022-11-11',
        start_date:'2002-11-11',
        organization:1,
        access:''
    }

    onFisrtNameChange = (value:string)=>{
        this._user.first_name = value
    }
    onLastNameChange = (value:string)=>{
        this._user.last_name = value
    }
    onFatherNameChange = (value:string)=>{
        this._user.father_name = value
    }

    onEmailChange = (value:string)=>{
        this._user.email = value
    }

    onPasswordChange = (value:string)=>{
        this._user.password = value
    }

    onCompanyChange = (id:number)=>{
        this._user.organization = id
    }
    get user(){
        return this._user
    }

    createUser = async () =>{
        postUser("/admin-api/create-user/", this.user).then().catch(err=>console.log(err))
    }

    constructor() {
        makeAutoObservable(this)
    }
}

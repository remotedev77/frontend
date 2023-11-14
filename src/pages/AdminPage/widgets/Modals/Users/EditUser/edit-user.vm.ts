import {makeAutoObservable} from "mobx";
import {User} from "../../../UsersTable";
import { updateUser} from "../../../../../../api/apis.ts";


export const EditUserVm = new class{
    private _user:User = {
        id:Date.now(),
        father_name:'',
        last_name:'',
        first_name:'',
        final_test:false,
        email:'',
        end_date:'2022-11-11',
        start_date:'2002-11-11',
        organization:1,
        access:''
    }

    setUser = (user:User) =>{
        this._user = user
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
        if (value.trim()===''){delete this._user["password"]}else this._user.password = value
    }

    onStartDateChange = (value:string) =>{
        this._user.start_date = value
    }
    onEndDateChange = (value:string) =>{
        this._user.end_date = value
    }

    onCompanyChange = (id:number)=>{
        this._user.organization = id
    }
    get user(){
        return this._user
    }

    editUser = async () =>{
        if (this._user.password === '') delete this._user["password"]
       await updateUser(`/admin-api/change-user/${this._user.id}/`, this._user).then().catch(err=>console.log(err))
    }

    constructor() {

        makeAutoObservable(this)
    }
}

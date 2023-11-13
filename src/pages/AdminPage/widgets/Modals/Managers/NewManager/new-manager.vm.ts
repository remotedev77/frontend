import {makeAutoObservable} from "mobx";
import {postManager} from "../../../../../../api/apis.ts";
import {Manager} from "../../../ManagersTable";


export const NewManagerVm = new class{
    private _manager:Manager = {
        id:Date.now(),
        is_staff:true,
        is_superadmin:false,
        father_name:'',
        last_name:'',
        first_name:'',
        password:'',
        email:'',
    }

    onFisrtNameChange = (value:string)=>{
        this._manager.first_name = value
    }
    onLastNameChange = (value:string)=>{
        this._manager.last_name = value
    }
    onFatherNameChange = (value:string)=>{
        this._manager.father_name = value
    }

    onEmailChange = (value:string)=>{
        this._manager.email = value
    }

    onPasswordChange = (value:string)=>{
        this._manager.password = value
    }



    get manager(){
        return this._manager
    }

    createManager = async () =>{
        postManager("/admin-api/managers", this.manager).then().catch(err=>console.log(err))
    }
    constructor() {
        makeAutoObservable(this)
    }
}

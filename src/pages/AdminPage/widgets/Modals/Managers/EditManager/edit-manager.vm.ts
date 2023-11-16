import {makeAutoObservable} from "mobx";
import {updateManager} from "../../../../../../api/apis.ts";
import {Manager} from "../../../ManagersTable";


export class EditManagerVm{


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
    setManager = (manager:Manager) =>{
        this._manager = manager
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

    editManager = async () =>{
        if (this._manager.password === '') delete this._manager["password"]
        await updateManager(`/admin-api/managers/${this._manager.id}/`, this._manager).then().catch(err=>console.log(err))
    }

    constructor() {

        makeAutoObservable(this)
    }
}

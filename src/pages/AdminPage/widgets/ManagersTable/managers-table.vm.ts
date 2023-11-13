import {makeAutoObservable} from "mobx";
import {deleteById} from "../../../../api/apis.ts";



export interface DataFormat{
    count: number
    total_pages: number
    next: string
    previous: string
    results: Manager[]
}
export interface Manager{
    first_name:string
    last_name:string
    father_name: string
    id : number
    password?:string
    email:string,
    is_staff:boolean,
    is_superadmin:boolean

}
export const ManagersTableVm = new class{
    private _managers: Manager[] = []
    private _searchString: string = ""
    onSearchChange = (value:string) =>{
        this._searchString = value
    }
    get searchString(){
        return this._searchString
    }

    setManagers = (data:Manager[]) =>{
        this._managers = data
    }

    deleteManager = async (id:number) =>{
        await deleteById(`admin-api/managers/`, id).then().catch(err => console.log(err))
    }

    getManagers = () =>{
        return this._managers
    }



    constructor() {
        makeAutoObservable(this)
    }
}

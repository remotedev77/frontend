import {makeAutoObservable} from "mobx";
import {deleteById} from "../../../../api/apis.ts";



export interface DataFormat{
    count: number
    total_pages: number
    next: string
    previous: string
    results: User[]
}
export interface User{
    id : number
    first_name: string
    last_name: string
    father_name: string | null
    final_test: boolean
    organization: number
    password?:string
    access:string,
    email:string,
    end_date:string|null
    start_date: string | null

}
export const UserTableVm = new class{
    private _users: User[] = []
    private _searchString: string = ""
    onSearchChange = (value:string) =>{
        this._searchString = value
    }
    get searchString(){
        return this._searchString
    }

    setUsers = (data:DataFormat[]) =>{
        this._users = []
        data.map(d=>this._users =[...this._users,...d.results])
    }

    deleteUser = async (id:number) =>{
        await deleteById(`admin-api/change-user/`, id).then().catch(err => console.log(err))
    }

    getUsers = () =>{
        return this._users
    }

    searchingUsers =  (data:DataFormat[]) =>{
        this.setUsers(data)
    this._users = this._users.filter(user => this.searchString.trim() === "" || (
                this.searchString.includes(String(user.father_name)) ||
                this.searchString.includes(String(user.first_name)) ||
                this.searchString.includes(String(user.last_name))
            ))
    }

    sortByOrganisation = () =>{
        this._users.sort((a,b) =>a.organization.toString().localeCompare(b.organization.toString()))
        console.log(this._users)
    }
    sortByFinalTest = () =>{
        this._users.sort((a,b) =>a.final_test > b.final_test? 1: -1)
    }

    constructor() {
        makeAutoObservable(this)
    }
}

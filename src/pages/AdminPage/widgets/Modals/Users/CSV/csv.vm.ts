import {makeAutoObservable} from "mobx";
import {postCSVUsers} from "../../../../../../api/apis.ts";


export const CsvVm = new class {
    private CSV:File
    private company:number = 0
    setFile = (file: File) =>{
        this.CSV = file
    }
    setCompany = (id:number) =>{
        this.company = id
    }
    get file(){
        return this.CSV
    }
    postFile = async ()=>{
        const formData = new FormData()
        formData.append('file', this.CSV)
        console.log(formData, this.company)
        postCSVUsers('admin-api/upload-csv-user-file/', {file: formData, id: this.company})
    }
    constructor() {
        makeAutoObservable(this)
    }
}

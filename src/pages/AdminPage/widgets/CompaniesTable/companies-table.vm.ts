import {makeAutoObservable} from "mobx";
import {deleteById} from "../../../../api/apis.ts";


export const CompaniesTableVm = new class{

    deleteCompany = async (id:number) =>{
        await deleteById(`/admin-api/companies/`, id)
    }

    constructor() {
        makeAutoObservable(this)
    }
}

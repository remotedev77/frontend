import {makeAutoObservable} from "mobx";
import {postCompany,} from "../../../../../../api/apis.ts";
import {Company} from "../../../../admin-page.vm.ts";


export const NewCompanyVm = new class{
    private _company:Company = {
        id: Date.now(),
        legal_adress:'',
        contact_person:'',
        phone:'',
        email:'',
        company_name:''

    }

    onContactChange = (value:string)=>{
        this._company.contact_person = value
    }
    onPhoneChange = (value:string)=>{
        this._company.phone = value
    }
    onCompanyChange = (value:string)=>{
        this._company.company_name = value
    }

    onEmailChange = (value:string)=>{
        this._company.email = value
    }

    onAdressChange = (value:string)=>{
        this._company.legal_adress = value
    }



    get company(){
        return this._company
    }

    createCompany = async () =>{
        postCompany("/admin-api/companies/", this.company).then().catch(err=>console.log(err))
    }
    constructor() {
        makeAutoObservable(this)
    }
}

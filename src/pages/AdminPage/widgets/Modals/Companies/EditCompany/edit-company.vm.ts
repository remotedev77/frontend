import {makeAutoObservable} from "mobx";
import {Company} from "../../../../admin-page.vm.ts";
import {updateCompany} from "../../../../../../api/apis.ts";


export const EditCompanyVm = new class{
    private _company:Company = {
        id: Date.now(),
        legal_adress:'',
        contact_person:'',
        phone:'',
        email:'',
        company_name:''

    }

    setCompany = (company:Company)=>{
        this._company = company
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

    updateCompany = async () =>{
        const temp = {
            company_name:this._company.company_name,
            legal_adress:this._company.legal_adress,
            contact_person:this._company.contact_person,
            phone:this._company.phone,
            email:this._company.email,
        }
        console.log(temp)
        updateCompany(`/admin-api/companies/${this._company.id}/`, temp).then().catch(err=>console.log(err))
    }
    constructor() {
        makeAutoObservable(this)
    }
}

import {observer} from "mobx-react";
import {Company} from "../../admin-page.vm.ts";
import {FC} from "react";
import {CustomSelect, Label} from "../../../../components/Modals/modal-wrapper.tsx";

interface CompaniesSelectProps{
    setCompany(id:number):void
    companies:Company[]
}

export const CompaniesSelect:FC<CompaniesSelectProps> = observer(x=>{
    return<Label>
        Организации
        <CustomSelect
            onChange={e=>x.setCompany(Number(e.target.selectedOptions[0].accessKey))}
        >
            {x.companies.map(c=><option accessKey={String(c.id)} key={c.id}>{c.company_name}</option>)}
        </CustomSelect>
    </Label>
})

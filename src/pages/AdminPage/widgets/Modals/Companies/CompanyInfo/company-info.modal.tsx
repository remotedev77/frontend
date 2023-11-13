import {observer} from "mobx-react";
import {FC} from "react";
import {
    ButtonSection,
    InfoField,
    ModalTitle
} from "../../../../../../components/Modals/modal-wrapper.tsx";
import {AdminPageVm, Company} from "../../../../admin-page.vm.ts";
import {CompaniesTableVm} from "../../../CompaniesTable/companies-table.vm.ts";

interface UserInfoProps {
    company:Company
    vm:typeof CompaniesTableVm
    admin: typeof AdminPageVm
}
export const CompanyInfoModal:FC<UserInfoProps> = observer(x=>{

    return <>
        <ModalTitle size={20} align="left">
            {x.company.company_name}
        </ModalTitle>
        <InfoField type="ФИО Контактного лица" info={x.company.contact_person}/>
        <InfoField type="Почта" info={x.company.email}/>
        <InfoField type="Номер телефона" info={x.company.phone}/>
        <InfoField type="Адрес" info={x.company.legal_adress}/>
        <ButtonSection onDelete={()=> {
            x.vm.deleteCompany(x.company.id)
            x.admin.isModalVisible = false
        }} onEdit={()=>{}}/>
    </>
})

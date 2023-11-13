import {observer} from "mobx-react";
import {User, UserTableVm} from "../../../UsersTable/user-table.vm.ts";
import {FC} from "react";
import {
    ButtonSection,
    InfoField,
    ModalTitle
} from "../../../../../../components/Modals/modal-wrapper.tsx";
import {AdminPageVm, Company} from "../../../../admin-page.vm.ts";
import {EditUser} from "../EditUser";

interface UserInfoProps {
    user:User
    vm:typeof UserTableVm
    admin: typeof AdminPageVm
    company:Company|undefined
}
export const UserInfoModal:FC<UserInfoProps> = observer(x=>{

    return <>
        <ModalTitle size={20} align="left">
            {`${x.user.last_name} ${x.user.first_name} ${x.user.father_name}`}
            {x.company === undefined? null: <ModalTitle size={16} align="left">{x.company.company_name}</ModalTitle>}
        </ModalTitle>
        <InfoField type="Логин" info={x.user.email}/>
        <InfoField type="Доступ" info={x.user.access}/>
        <InfoField type="Начало обучения" info={x.user.start_date}/>
        <InfoField type="Конец обучения" info={x.user.end_date}/>
        <ButtonSection onDelete={()=> {
            x.admin.isModalVisible = false
            x.vm.deleteUser(x.user.id)
        }} onEdit={()=>x.admin.CurrentModal = <EditUser user={x.user} vm={x.admin}/>}/>
    </>
})

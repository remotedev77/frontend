import {observer} from "mobx-react";
import {FC} from "react";
import {
    ButtonSection,
    InfoField,
    ModalTitle
} from "../../../../../../components/Modals/modal-wrapper.tsx";
import {AdminPageVm} from "../../../../admin-page.vm.ts";
import {Manager, ManagersTableVm} from "../../../ManagersTable";
import {EditManager} from "../EditManager";

interface UserInfoProps {
    manager:Manager
    vm:typeof ManagersTableVm
    admin: typeof AdminPageVm
}
export const ManagerInfoModal:FC<UserInfoProps> = observer(x=>{

    return <>
        <ModalTitle size={20} align="left">
            {`${x.manager.last_name} ${x.manager.first_name} ${x.manager.father_name}`}
        </ModalTitle>
        <InfoField type="Логин" info={x.manager.email}/>
        <ButtonSection onDelete={()=> {
            x.admin.isModalVisible = false
            x.vm.deleteManager(x.manager.id)
        }} onEdit={()=>x.admin.CurrentModal = <EditManager vm={x.admin} manager={x.manager}/>}/>
    </>
})

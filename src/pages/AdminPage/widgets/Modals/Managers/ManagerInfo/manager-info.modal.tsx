import {observer} from "mobx-react";
import {FC, useState} from "react";
import {
    ButtonSection, ConfirmContainer, ConfirmControlls,
    InfoField,
    ModalTitle,
} from "../../../../../../components/Modals/modal-wrapper.tsx";
import {AdminPageVm} from "../../../../admin-page.vm.ts";
import {Manager, ManagersTableVm} from "../../../ManagersTable";
import {EditManager} from "../EditManager";
import {Button} from "../../../../../../components";

interface UserInfoProps {
    manager:Manager
    vm:typeof ManagersTableVm
    admin: typeof AdminPageVm
}
export const ManagerInfoModal:FC<UserInfoProps> = observer(x=>{

    const [isConfirming, setIsConfirming] = useState(false)
    interface ConfirmProps{
        onConfirm:()=>void
    }
    const Confirm:FC<ConfirmProps> = x => <ConfirmContainer style={{display:isConfirming?'flex':'none'}}>
        <ModalTitle>Вы уверены, что хотите удалить пользователя?</ModalTitle>
        <ConfirmControlls >
            <Button width={160} onClick={()=>setIsConfirming(false)} primary size={16}>Отменить</Button>
            <Button onClick={()=>{
                x.onConfirm()
                setIsConfirming(false)
            }} size={16} width={160} >Удалить</Button>
        </ConfirmControlls>
    </ConfirmContainer>

    return <>
        <Confirm onConfirm={()=>{
            x.admin.isModalVisible = false
            x.vm.deleteManager(x.manager.id)
        }}/>
        <ModalTitle size={20} align="left">
            {`${x.manager.last_name} ${x.manager.first_name} ${x.manager.father_name}`}
        </ModalTitle>
        <InfoField type="Логин" info={x.manager.email}/>
        <ButtonSection onDelete={()=>setIsConfirming(true)} onEdit={()=>x.admin.CurrentModal = <EditManager vm={x.admin} manager={x.manager}/>}/>
    </>
})

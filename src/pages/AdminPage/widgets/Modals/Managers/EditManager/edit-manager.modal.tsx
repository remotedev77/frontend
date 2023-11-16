import {observer} from "mobx-react";
import {
    ModalInput,

} from "../../../../../../components/Modals/modal-wrapper.tsx";
import {Button} from "../../../../../../components";
import {EditManagerVm} from "./edit-manager.vm.ts";
import {AdminPageVm} from "../../../../admin-page.vm.ts";
import {FC,} from "react";
import {Manager} from "../../../ManagersTable";

interface EditManagerProps{
    vm: typeof AdminPageVm
    manager: Manager
}
export const EditManager:FC<EditManagerProps> = observer(x=>{
    const vm = new EditManagerVm()
    vm.setManager(x.manager)



    return <>

        <ModalInput type="text"
                    onChange={e =>vm.onLastNameChange(e.target.value) }
                    placeholder={x.manager.last_name}/>
        <ModalInput type="text"
                    onChange={e =>vm.onFisrtNameChange(e.target.value) }
                    placeholder={x.manager.first_name}/>
        <ModalInput type="text"
                    onChange={e =>vm.onFatherNameChange(e.target.value) }
                    placeholder={x.manager.father_name}/>

        <ModalInput type="email"
                    onChange={e =>vm.onEmailChange(e.target.value) }
                    placeholder={x.manager.email}/>
        <ModalInput type="text"
                    onChange={e =>vm.onPasswordChange(e.target.value) }
                    placeholder="Новый пароль"/>

        <Button width={160} onClick={()=>{
            vm.editManager()
            x.vm.closeModal()
        }} size={16} primary>
            Изменить
        </Button>
    </>
})

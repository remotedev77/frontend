import {AdminPageVm} from "../../../../admin-page.vm.ts";
import {FC} from "react";
import {observer} from "mobx-react";
import { ModalInput, ModalTitle} from "../../../../../../components/Modals/modal-wrapper.tsx";
import {Button} from "../../../../../../components";
import {NewManagerVm} from "./new-manager.vm.ts";

interface NewUserProps{
    vm: typeof AdminPageVm
}
export const NewManager:FC<NewUserProps> = observer(()=>{
    const vm = NewManagerVm


    return <>
        <ModalTitle>Добавление нового сотрудника</ModalTitle>
        <ModalInput type="text"
                    onChange={e =>vm.onLastNameChange(e.target.value) }
                    placeholder="Фамилия"/>
        <ModalInput type="text"
                    onChange={e =>vm.onFisrtNameChange(e.target.value) }
                    placeholder="Имя"/>
        <ModalInput type="text"
                    onChange={e =>vm.onFatherNameChange(e.target.value) }
                    placeholder="Отчество"/>

        <ModalInput type="email"
                    onChange={e =>vm.onEmailChange(e.target.value) }
                    placeholder="e-mail"/>
        <ModalInput type="text"
                    onChange={e =>vm.onPasswordChange(e.target.value) }
                    placeholder="Пароль"/>

        <Button width={160} onClick={vm.createManager} size={16} primary>
            Добавить
        </Button>
    </>
})

import {AdminPageVm} from "../../../../admin-page.vm.ts";
import {FC} from "react";
import {observer} from "mobx-react";
import { ModalInput, ModalTitle} from "../../../../../../components/Modals/modal-wrapper.tsx";
import {Button} from "../../../../../../components";
import {NewCompanyVm} from "./new-company.vm.ts";

interface NewUserProps{
    vm: typeof AdminPageVm
}
export const NewCompany:FC<NewUserProps> = observer(x=>{
    const vm = new NewCompanyVm


    return <>
        <ModalTitle>Добавление новой организации</ModalTitle>
        <ModalInput type="text"
                    onChange={e =>vm.onCompanyChange(e.target.value) }
                    placeholder="Наименование организации"/>
        <ModalInput type="text"
                    onChange={e =>vm.onContactChange(e.target.value) }
                    placeholder="ФИО контактного лица"/>
        <ModalInput type="email"
                    onChange={e =>vm.onEmailChange(e.target.value) }
                    placeholder="Почта"/>

        <ModalInput type="phone_number"
                    onChange={e =>vm.onPhoneChange(e.target.value) }
                    placeholder="Номер телефона"/>
        <ModalInput type="text"
                    onChange={e =>vm.onAdressChange(e.target.value) }
                    placeholder="Адрес"/>

        <Button width={160} onClick={()=>{
            vm.createCompany()
            x.vm.closeModal()
        }} size={16} primary>
            Добавить
        </Button>
    </>
})

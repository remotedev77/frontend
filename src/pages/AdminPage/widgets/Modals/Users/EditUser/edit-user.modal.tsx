import {observer} from "mobx-react";
import { Label, ModalInput} from "../../../../../../components/Modals/modal-wrapper.tsx";
import {Button} from "../../../../../../components";
import {EditUserVm} from "./edit-user.vm.ts";
import {CompaniesSelect} from "../../../CompaniesSelect/companies-select.widget.tsx";
import {AdminPageVm} from "../../../../admin-page.vm.ts";
import {FC} from "react";
import {User} from "../../../UsersTable";

interface NewUserProps{
    vm: typeof AdminPageVm
    user:User
}
export const EditUser:FC<NewUserProps> = observer(x=>{
    const vm = EditUserVm
    vm.setUser(x.user)
    console.log(vm.user)

    return <>
        <ModalInput type="text"
                    onChange={e =>vm.onLastNameChange(e.target.value) }
                    placeholder={x.user.last_name}/>
        <ModalInput type="text"
                    onChange={e =>vm.onFisrtNameChange(e.target.value) }
                    placeholder={x.user.first_name}/>
        <ModalInput type="text"
                    onChange={e =>vm.onFatherNameChange(e.target.value) }
                    placeholder={x.user.father_name?x.user.father_name:"Отество"}/>

        <ModalInput type="email"
                    onChange={e =>vm.onEmailChange(e.target.value) }
                    placeholder={x.user.email}/>
        <ModalInput type="text"
                    onChange={e =>vm.onPasswordChange(e.target.value) }
                    placeholder="Новый пароль"/>
        <Label>
            Начало обучения
            <ModalInput type="date"
                        value={x.user.start_date?x.user.start_date:undefined}
                        />
        </Label>
        <Label>
            Конец обучения
            <ModalInput type="date"
                        value={x.user.start_date?x.user.start_date:undefined}
                        onChange={e=> console.log(typeof e.target.value, e.target.value)}
            />
        </Label>
        <CompaniesSelect companies={x.vm.companies} setCompany={vm.onCompanyChange} />

        <Button width={160} onClick={()=>{
            vm.editUser()
            x.vm.isModalVisible = false
        }} size={16} primary>
            Изменить
        </Button>
    </>
})

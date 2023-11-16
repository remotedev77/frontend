import { observer } from "mobx-react";
import {
  Label,
  ModalInput,
  ModalTitle,
} from "../../../../../../components/Modals/modal-wrapper.tsx";
import { Button } from "../../../../../../components";
import { NewUserVm } from "./new-user.vm.ts";
import { CompaniesSelect } from "../../../CompaniesSelect/companies-select.widget.tsx";
import { AdminPageVm } from "../../../../admin-page.vm.ts";
import { FC } from "react";

interface NewUserProps {
  vm: typeof AdminPageVm;
}
export const NewUser: FC<NewUserProps> = observer((x) => {
  const vm = NewUserVm;

  return (
    <>
      <ModalTitle>Добавление нового пользователя</ModalTitle>
      <ModalInput
        type="text"
        onChange={(e) => vm.onLastNameChange(e.target.value)}
        placeholder="Фамилия"
      />
      <ModalInput
        type="text"
        onChange={(e) => vm.onFisrtNameChange(e.target.value)}
        placeholder="Имя"
      />
      <ModalInput
        type="text"
        onChange={(e) => vm.onFatherNameChange(e.target.value)}
        placeholder="Отчество"
      />

      <ModalInput
        type="email"
        onChange={(e) => vm.onEmailChange(e.target.value)}
        placeholder="e-mail"
      />
      <ModalInput
        type="text"
        onChange={(e) => vm.onPasswordChange(e.target.value)}
        placeholder="Пароль"
      />
      <Label>
        Начало обучения
        <ModalInput type="date" />
      </Label>
      <Label>
        Конец обучения
        <ModalInput
          type="date"
          onChange={(e) => console.log(typeof e.target.value, e.target.value)}
        />
      </Label>
      <CompaniesSelect
        companies={x.vm.companies}
        setCompany={vm.onCompanyChange}
      />

      <Button width={160} onClick={vm.createUser} size={16} primary>
        Добавить
      </Button>
    </>
  );
});

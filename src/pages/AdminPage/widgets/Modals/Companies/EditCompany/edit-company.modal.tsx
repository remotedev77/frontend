import { AdminPageVm, Company } from "../../../../admin-page.vm.ts";
import { FC } from "react";
import { observer } from "mobx-react";
import { ModalInput } from "../../../../../../components/Modals/modal-wrapper.tsx";
import { Button } from "../../../../../../components";
import { EditCompanyVm } from "./edit-company.vm.ts";

interface NewUserProps {
  vm: typeof AdminPageVm;
  company: Company;
}
export const EditCompany: FC<NewUserProps> = observer((x) => {
  const vm = new EditCompanyVm;
  vm.setCompany(x.company);

  return (
    <>
      <ModalInput
        type="text"
        onChange={(e) => vm.onCompanyChange(e.target.value)}
        placeholder={x.company.company_name}
      />
      <ModalInput
        type="text"
        onChange={(e) => vm.onContactChange(e.target.value)}
        placeholder={x.company.contact_person}
      />
      <ModalInput
        type="email"
        onChange={(e) => vm.onEmailChange(e.target.value)}
        placeholder={x.company.email}
      />

      <ModalInput
        type="phone_number"
        onChange={(e) => vm.onPhoneChange(e.target.value)}
        placeholder={x.company.phone}
      />
      <ModalInput
        type="text"
        onChange={(e) => vm.onAdressChange(e.target.value)}
        placeholder={x.company.legal_adress}
      />

      <Button width={160} onClick={()=>{
          vm.updateCompany()
          x.vm.closeModal()
      }} size={16} primary>
        Изменить
      </Button>
    </>
  );
});

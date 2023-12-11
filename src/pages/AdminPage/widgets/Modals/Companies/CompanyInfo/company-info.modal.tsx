import { observer } from "mobx-react";
import { FC, useState } from "react";
import {
  ButtonSection,
  ConfirmContainer,
  ConfirmControlls,
  InfoField,
  ModalTitle,
} from "../../../../../../components/Modals/modal-wrapper.tsx";
import { AdminPageVm, Company } from "../../../../admin-page.vm.ts";
import { CompaniesTableVm } from "../../../CompaniesTable/companies-table.vm.ts";
import { EditCompany } from "../EditCompany/edit-company.modal.tsx";
import { Button } from "../../../../../../components";

interface UserInfoProps {
  company: Company;
  vm: typeof CompaniesTableVm;
  admin: typeof AdminPageVm;
}
export const CompanyInfoModal: FC<UserInfoProps> = observer((x) => {
  const [isConfirming, setIsConfirming] = useState(false);
  interface ConfirmProps {
    onConfirm: () => void;
  }
  const Confirm: FC<ConfirmProps> = (x) => (
    <ConfirmContainer style={{ display: isConfirming ? "flex" : "none" }}>
      <ModalTitle>Вы уверены, что хотите удалить организацию?</ModalTitle>
      <ConfirmControlls>
        <Button width={160} onClick={() => setIsConfirming(false)} primary size={16}>
          Отменить
        </Button>
        <Button
          onClick={() => {
            x.onConfirm();
            setIsConfirming(false);
          }}
          size={16}
          width={160}>
          Удалить
        </Button>
      </ConfirmControlls>
    </ConfirmContainer>
  );
  return (
    <>
      <Confirm
        onConfirm={() => {
          x?.company?.id && x.vm.deleteCompany(Number(x?.company?.id));
          x.admin.isModalVisible = false;
        }}
      />
      <ModalTitle size={20} align="left">
        {x.company.company_name}
      </ModalTitle>
      <InfoField type="ФИО Контактного лица" info={x.company.contact_person} />
      <InfoField type="Почта" info={x.company.email} />
      <InfoField type="Номер телефона" info={x.company.phone} />
      <InfoField type="Адрес" info={x.company.legal_adress} />
      <ButtonSection
        onDelete={() => setIsConfirming(true)}
        onEdit={() => (x.admin.CurrentModal = <EditCompany vm={x.admin} company={x.company} />)}
      />
    </>
  );
});

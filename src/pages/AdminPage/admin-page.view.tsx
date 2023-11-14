import { observer } from "mobx-react";
import { Header } from "@/components";
import { CompaniesTable, SideBar, UsersTable } from "./widgets";
import styled from "@emotion/styled";
import { AdminPageVm, Company } from "./admin-page.vm.ts";
import { ModalWrapper } from "@/components/Modals/modal-wrapper.tsx";

import { QuestionTable } from "./widgets/QuestionTable/question-table.tsx";
import { getData } from "@/api/apis.ts";

import useSWR from "swr";
import { ManagersTable } from "./widgets/ManagersTable";

const Container = styled.div`
  width: 100%;
  max-height: 100vh;
  padding-top: 56px;
  display: flex;
  justify-content: space-between;
`;

const RightContainer = styled.div`
  overflow: scroll;
  width: 100%;
`;

export const AdminPage = observer(() => {
  const vm = AdminPageVm;

  const { data } = useSWR<Company[]>(`/admin-api/companies/`, getData);
  if (!data) return "loading";
  vm.setCompanies(data);

  const CurrentTable = observer(() => {
    switch (vm.selectedTable) {
      case "users":
        return <UsersTable vm={vm} />;
      case "questions":
        return <QuestionTable vm={vm} />;
      case "companies":
        return <CompaniesTable vm={vm} />;
      case "managers":
        return <ManagersTable vm={vm} />;
    }
  });

  return (
    <>
      {vm.isModalVisible && (
        <ModalWrapper
          offSet={window.scrollY}
          onClick={vm.changeModalVisibility}
        >
          {vm.CurentModal}
        </ModalWrapper>
      )}
      <Header></Header>
      <Container>
        <SideBar vm={vm} />
        <RightContainer className="right_admin_cotainer">
          <CurrentTable />
        </RightContainer>
      </Container>
    </>
  );
});

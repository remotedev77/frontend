import { observer } from "mobx-react";
import { AdminPageVm } from "../../admin-page.vm.ts";
import { FC } from "react";
import styled from "@emotion/styled";
import { getData } from "../../../../api/apis.ts";
import { Cell, MainFilterControlls, Row, Table } from "../../components";
import { NewManager } from "../Modals";
import { AddButton, FilterSectionContainer, SearchBar } from "../../components";
import { Manager, ManagersTableVm } from "./managers-table.vm.ts";
import useSWR from "swr";
import { ManagerInfoModal } from "../Modals/Managers/ManagerInfo";

interface UsersTableProps {
  vm: typeof AdminPageVm;
}
export const ManagersTable: FC<UsersTableProps> = observer((x) => {
  const vm = ManagersTableVm;

  const { data } = useSWR<Manager[]>("/managers/", getData);
  if (!data) return "loading";
  vm.setManagers(data);
  console.log(data);

  const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-flow: column;
  `;
  const Filters = observer(() => {
    return (
      <FilterSectionContainer>
        <MainFilterControlls>
          <SearchBar
            placeholder="Поиск по ФИО"
            onSearchChange={vm.onSearchChange}
            onSearch={() => vm.searchingUsers(data)}
          />
          <AddButton
            type="button"
            onClick={() => {
              x.vm.CurrentModal = <NewManager vm={x.vm} />;
            }}>
            Добавить сотрудника
          </AddButton>
        </MainFilterControlls>
      </FilterSectionContainer>
    );
  });

  const tableHeaderCells = [
    { width: 910, name: "ФИО" },
    { width: 450, name: "Логин" },
    { width: 120, name: "Роль" },
  ];
  const MappedInfo = observer(() => {
    return (
      <>
        {" "}
        {vm.getManagers().map((m, i) => {
          return (
            <Row key={i} onClick={() => (x.vm.CurrentModal = <ManagerInfoModal vm={vm} admin={x.vm} manager={m} />)}>
              <Cell>{`${m.last_name} ${m.first_name} ${m.father_name}`}</Cell>
              <Cell>{m.email}</Cell>
              <Cell>{m.is_staff ? "Менеджер" : "Администратор"}</Cell>
            </Row>
          );
        })}
      </>
    );
  });

  return (
    <Container>
      <Filters />
      <Table cells={tableHeaderCells}>
        <MappedInfo />
      </Table>
    </Container>
  );
});

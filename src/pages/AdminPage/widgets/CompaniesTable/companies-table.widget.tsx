import { observer } from "mobx-react";
import { AdminPageVm } from "../../admin-page.vm.ts";
import { FC } from "react";
import {
  AddButton,
  Cell,
  FilterSectionContainer,
  MainFilterControlls,
  Row,
  SearchBar,
  Table,
} from "../../components";
import styled from "@emotion/styled";
import { NewCompany } from "../Modals/Companies/NewCompany/new-company.modal.tsx";
import { CompanyInfoModal } from "../Modals/Companies/CompanyInfo";
import { CompaniesTableVm } from "./companies-table.vm.ts";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-flow: column;
`;

interface CompaniesTableProps {
  vm: typeof AdminPageVm;
}
export const CompaniesTable: FC<CompaniesTableProps> = observer((x) => {
  const vm = CompaniesTableVm;
  const Filters = observer(() => {
    return (
      <FilterSectionContainer>
        <MainFilterControlls>
          <SearchBar
            placeholder="Поиск"
            onSearchChange={() => {}}
            onSearch={() => {}}
          />
          <AddButton
            type="button"
            onClick={() => {
              x.vm.CurrentModal = <NewCompany vm={x.vm} />;
            }}
          >
            Добавить организацию
          </AddButton>
        </MainFilterControlls>
      </FilterSectionContainer>
    );
  });
  const tableHeaderCells = [
    { width: 300, name: "Организация" },
    { width: 450, name: "ФИО контактного лица" },
    { width: 220, name: "Почта" },
    { width: 220, name: "Телефон" },
    { width: 340, name: "Адрес" },
  ];
  const MappedInfo = observer(() => {
    return (
      <>
        {x.vm.companies.map((c, i) => (
          <Row
            key={i}
            onClick={() =>
              (x.vm.CurrentModal = (
                <CompanyInfoModal company={c} admin={x.vm} vm={vm} />
              ))
            }
          >
            <Cell>{c.company_name}</Cell>
            <Cell>{c.contact_person}</Cell>
            <Cell>{c.email}</Cell>
            <Cell>{c.phone}</Cell>
            <Cell>{c.legal_adress}</Cell>
          </Row>
        ))}
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

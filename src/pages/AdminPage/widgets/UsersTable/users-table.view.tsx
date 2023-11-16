import { observer } from "mobx-react";
import { AdminPageVm } from "../../admin-page.vm.ts";
import { FC, useEffect } from "react";
import styled from "@emotion/styled";
import { getData } from "../../../../api/apis.ts";
import {
  Cell,
  MainFilterControlls,
  Row,
  SubFilters,
  Table,
} from "../../components";
import { CsvModal, NewUser, UserInfoModal } from "../Modals";
import {
  AddButton,
  FilterButton,
  FilterSectionContainer,
  SearchBar,
} from "../../components";
import useSWRInfinite from "swr/infinite";
import { DataFormat, UserTableVm } from "./user-table.vm.ts";

interface UsersTableProps {
  vm: typeof AdminPageVm;
}
export const UsersTable: FC<UsersTableProps> = observer((x) => {
  const vm = UserTableVm;
  const getKey = (pageIndex: number, previousPageData: DataFormat) => {
    if (previousPageData && !previousPageData.results.length) return null;
    if (pageIndex === 0) return `/admin-api/get-users/`;
    return `/admin-api/get-users/?page=${pageIndex + 1}`;
  };
  const { data, setSize } = useSWRInfinite<DataFormat>(getKey, getData);
  useEffect(() => {
    if (data) {
      setSize(data[0].total_pages);
      vm.setUsers(data);
    }
  }, [data]);
  if (!data) return "loading";

  const Container = styled.div`
    padding: 40px;
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
              x.vm.CurrentModal = <NewUser vm={x.vm} />;
            }}
          >
            Добавить пользователя
          </AddButton>
          <FilterButton
            onClick={() => {
              x.vm.CurrentModal = <CsvModal vm={x.vm} companies={x.vm.companies} />;
            }}
          >
            Добавить через .CSV
          </FilterButton>
          <FilterButton
            onClick={() => {
              const link = document.createElement("a");
              link.href = `src/pages/AdminPage/widgets/QuestionTable/csv/example.csv`;
              link.download = "example.csv";
              link.click();
              link.href = `src/pages/AdminPage/widgets/QuestionTable/csv/type.csv`;
              link.download = "type.csv";
              link.click();
            }}
          >
            Скачать шаблон
          </FilterButton>
        </MainFilterControlls>
        <SubFilters>
          <div style={{ display: "flex", alignItems: "center" }}>
            Фильтры
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="41"
              height="40"
              viewBox="0 0 41 40"
              fill="none"
            >
              <path
                d="M17 26.1429C17 25.9155 17.0922 25.6975 17.2563 25.5368C17.4204 25.376 17.6429 25.2857 17.875 25.2857H23.125C23.3571 25.2857 23.5796 25.376 23.7437 25.5368C23.9078 25.6975 24 25.9155 24 26.1429C24 26.3702 23.9078 26.5882 23.7437 26.7489C23.5796 26.9097 23.3571 27 23.125 27H17.875C17.6429 27 17.4204 26.9097 17.2563 26.7489C17.0922 26.5882 17 26.3702 17 26.1429ZM13.5 21C13.5 20.7727 13.5922 20.5547 13.7563 20.3939C13.9204 20.2332 14.1429 20.1429 14.375 20.1429L26.625 20.1429C26.8571 20.1429 27.0796 20.2332 27.2437 20.3939C27.4078 20.5547 27.5 20.7727 27.5 21C27.5 21.2273 27.4078 21.4453 27.2437 21.6061C27.0796 21.7668 26.8571 21.8571 26.625 21.8571L14.375 21.8571C14.1429 21.8571 13.9204 21.7668 13.7563 21.6061C13.5922 21.4453 13.5 21.2273 13.5 21ZM10 15.8571C10 15.6298 10.0922 15.4118 10.2563 15.2511C10.4204 15.0903 10.6429 15 10.875 15L30.125 15C30.3571 15 30.5796 15.0903 30.7437 15.2511C30.9078 15.4118 31 15.6298 31 15.8571C31 16.0845 30.9078 16.3025 30.7437 16.4632C30.5796 16.624 30.3571 16.7143 30.125 16.7143L10.875 16.7143C10.6429 16.7143 10.4204 16.624 10.2563 16.4632C10.0922 16.3025 10 16.0845 10 15.8571Z"
                fill="#B8B8B8"
              />
            </svg>
          </div>
          <FilterButton
            onClick={vm.sortByOrganisation}
            style={{ marginLeft: "50px" }}
          >
            Организация
          </FilterButton>
          <FilterButton
            onClick={vm.sortByFinalTest}
            style={{ marginLeft: "50px" }}
          >
            Аттестация
          </FilterButton>
        </SubFilters>
      </FilterSectionContainer>
    );
  });

  const tableHeaderCells = [
    { width: 135, name: "ID" },
    { width: 450, name: "ФИО" },
    { width: 120, name: "Аттестация" },
    { width: 160, name: "Начало обучения" },
    { width: 160, name: "Конец обучения" },
    { width: 450, name: "Организация" },
    { width: 125, name: "Доступ" },
  ];
  const MappedInfo = observer(() => {
    return (
      <>
        {" "}
        {vm.getUsers().map((u, i) => {
          return (
            <Row
              key={i}
              onClick={() =>
                (x.vm.CurrentModal = (
                  <UserInfoModal
                    admin={x.vm}
                    user={u}
                    vm={vm}
                    company={x.vm.companies.find(
                      (c) => c.id === u.organization
                    )}
                  />
                ))
              }
            >
              <Cell>{u.id}</Cell>
              <Cell>{`${u.last_name} ${u.first_name} ${u.father_name}`}</Cell>
              <Cell>{u.final_test ? "сдана" : "не сдана"}</Cell>
              <Cell>
                {new Date(
                  u.start_date ? u.start_date : ""
                ).toLocaleDateString()}
              </Cell>
              <Cell>
                {new Date(u.end_date ? u.end_date : "").toLocaleDateString()}
              </Cell>
              <Cell>
                {
                  x.vm.companies.find((c) => c.id === u.organization)
                    ?.company_name
                }
              </Cell>
              <Cell>{u.access}</Cell>
            </Row>
          );
        })}
      </>
    );
  });
  console.log(MappedInfo);

  return (
    <Container>
      <Filters />
      <Table cells={tableHeaderCells}>
        <MappedInfo />
      </Table>
    </Container>
  );
});

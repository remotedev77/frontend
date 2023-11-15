import { observer } from "mobx-react";
import { getData } from "../../../../api/apis.ts";
import styled from "@emotion/styled";
import { FC, useEffect } from "react";
import { AdminPageVm } from "../../admin-page.vm.ts";
import {
  AddButton,
  Cell,
  FilterButton,
  FilterSectionContainer,
  MainFilterControlls,
  Row,
  SearchBar,
  SubFilters,
  Table,
} from "../../components";
import useSWRInfinite from "swr/infinite";
import { DataFormat, QuestionTableVm } from "./question-table.vm.ts";
import { AddQuestion } from "../Modals/Questions";
import { QuestionInfo } from "../Modals/Questions/QuestionInfo";
import { CsvQuestion } from "../Modals/Questions/CSV";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-flow: column;
`;

interface QuestionTableProps {
  vm: typeof AdminPageVm;
}

export const QuestionTable: FC<QuestionTableProps> = observer((x) => {
  const vm = QuestionTableVm;
  const getKey = (pageIndex: number, previousPageData: DataFormat) => {
    if (previousPageData && !previousPageData.results.length) return null;
    if (pageIndex === 0) return `/admin-api/get-all-questions/`;
    return `/admin-api/get-all-questions/?page=${pageIndex + 1}`;
  };
  const { data, size, setSize } = useSWRInfinite<DataFormat>(getKey, getData);
  console.log(size);
  useEffect(() => {
    if (data) {
      setSize(data[0].total_pages);
      vm.setQuestions(data);
    }
  }, [data]);
  if (!data) return "loading";

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
              x.vm.CurrentModal = <AddQuestion vm={x.vm} />;
            }}
          >
            Добавить вопрос
          </AddButton>
          <FilterButton
            onClick={() => {
              x.vm.CurrentModal = <CsvQuestion />;
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
          <FilterButton onClick={vm.sortByType} style={{ marginLeft: "50px" }}>
            Тип вопроса
          </FilterButton>
        </SubFilters>
      </FilterSectionContainer>
    );
  });
  const tableHeaderCells = [
    { width: 100, name: "Код вопроса" },
    { width: 150, name: "Трудовая функция" },
    { width: 100, name: "Вопрос" },
    { width: 150, name: "Тип вопроса" },
  ];
  const MappedInfo = observer(() => {
    return (
      <>
        {vm.getQuestions().map((q, i) => (
          <Row
            onClick={() =>
              (x.vm.CurrentModal = (
                <QuestionInfo question={q} vm={vm} admin={x.vm} />
              ))
            }
            key={i}
          >
            <Cell>{q.question_code}</Cell>
            <Cell>{q.work_function}</Cell>
            <Cell>{q.question}</Cell>
            <Cell>{q.note === "single" ? "Одиночный" : "Множественный"}</Cell>
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

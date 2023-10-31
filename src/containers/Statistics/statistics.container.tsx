import styled from "@emotion/styled";
import { BarIcon } from "../../assets/lib";
import { CardOverview, CardOverviewSubtitle } from "../../pages";
import { Fragment, useEffect, useState } from "react";
import useGetStatistics from "../../hooks/useGetStatistics";

const TestCategoryList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;
const TestCategory = styled.li`
  color: #505050;
  font-size: 1.2rem;
  font-weight: 600;
`;

type AnswerStatistics = {
  title: string;
  count: number;
};

export const Statistics = () => {
  const { statisticsData } = useGetStatistics();
  const [answerStatistics, setAnswerStatistics] = useState<AnswerStatistics[]>([
    {
      title: "Не решал",
      count: 0,
    },
    {
      title: "Знаю",
      count: 0,
    },
    {
      title: "Делаю ошибки",
      count: 0,
    },
    {
      title: "Не знаю",
      count: 0,
    },
  ]);

  useEffect(() => {
    setAnswerStatistics((prevAnswerStatistics) => {
      return prevAnswerStatistics.map((prev) => {
        const updatedStatistics: number =
          statisticsData?.statistic?.find(
            ({ category }) => category === prev.title
          )?.statistic || 0;

        return { ...prev, count: updatedStatistics };
      });
    });
  }, [statisticsData]);

  return (
    <Fragment>
      <CardOverview $height="18rem">
        <TestCategoryList>
          {answerStatistics?.map(({ title, count }) => (
            <TestCategory key={title}>
              {title} - {count}%
            </TestCategory>
          ))}
        </TestCategoryList>

        <BarIcon style="position:absolute; width:70%; right:0" />
      </CardOverview>
      <CardOverview
        $height="4.5rem"
        style={{
          width: "100%",
          borderRadius: "1.2rem",
        }}
      >
        <CardOverviewSubtitle
          style={{
            justifyContent: "center",
          }}
        >
          Готовность к экзамену -{" "}
          {answerStatistics?.find(({ title }) => title === "Знаю")?.count}%
        </CardOverviewSubtitle>
      </CardOverview>
    </Fragment>
  );
};

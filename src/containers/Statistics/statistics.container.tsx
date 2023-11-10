import styled from "@emotion/styled";
import { Fragment, useEffect, useState } from "react";
import useGetStatistics from "../../hooks/useGetStatistics";

const CardOverview = styled.div`
  display: none;
  width: 30%;
  height: 170px;
  align-items: center;

  color: #fff;
  padding: 24px;
  font-weight: 600;
  border-radius: 30px;
  background: linear-gradient(268deg, #ff9171 18.76%, #ff7046 100.4%);
  box-shadow: 0px 4px 35px 0px rgba(0, 0, 0, 0.25);

  @media only screen and (min-width: 1024px) {
    display: flex;
  }
`;

const TestCategoryList = styled.ul<{ isOpen?: boolean }>`
  overflow: hidden;
  display: grid;
  grid-template-rows: ${(props) => (props.isOpen ? "1fr" : "0fr")};
  transition: grid-template-rows 0.3s ease-out;

  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 10px;
  justify-content: space-between;
  padding: 0 10px 10px;

  @media only screen and (min-width: 1024px) {
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: flex-start;
    margin-top: 0px;
    padding: 0;
  }
`;

const TestCategory = styled.li`
  width: 48%;
  height: 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #fff;
  border-radius: 15px;
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.1);
  .count {
    font-family: Inter;
    font-size: 32px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    background: linear-gradient(
      70deg,
      #505050 -211.23%,
      rgba(80, 80, 80, 0) 148.01%
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-align: center;
  }

  .count_title {
    color: #505050;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    text-align: center;
  }

  @media only screen and (min-width: 1024px) {
    flex-direction: row;
    justify-content: flex-start;

    background: none;
    box-shadow: none;
    width: 100%;
    height: auto;
    .count {
      background: none;
      background-clip: none;
      text-align: end;
    }
    display: flex;
    gap: 16px;

    color: #fff;
    font-size: 20px;

    .count_title {
      font-size: 20px;
      text-align: start;
    }
  }
`;

const Accordion = styled.div`
  width: 100%;
  position: relative;
  border-radius: 20px;
  background: #fff;
  box-shadow: 0px 4px 46px 0px rgba(0, 0, 0, 0.25);

  @media only screen and (min-width: 1024px) {
    display: none;
  }
`;

const AccordionWrapper = styled.div`
  padding: 15px;
  color: #505050;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media only screen and (min-width: 1024px) {
    padding: 30px;
    font-size: 14px;
    gap: 20px;
  }
`;

const AccordionTitle = styled.div`
  color: #505050;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const AccordionContent = styled.div<{ isOpen: boolean }>`
  overflow: hidden;
  display: grid;
  grid-template-rows: ${(props) => (props.isOpen ? "1fr" : "0fr")};
  transition: grid-template-rows 0.3s ease-out;
  font-size: 12px;

  @media only screen and (min-width: 1024px) {
    font-size: 14px;
  }
`;

const AccordionGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
`;

const TriggerButton = styled.div<{ isOpen: boolean }>`
  cursor: pointer;
  right: 12px;
  top: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  background-color: #e6e6e6;
  border-radius: 9999px;

  transition: all 0.3s ease-out;
  rotate: ${(props) => (props.isOpen ? "180deg" : "0deg")};
`;

type AnswerStatistics = {
  title: string;
  count: number;
};

export const Statistics = () => {
  const [isOpen, setIsOpen] = useState(false);
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

  const handleTriggerBtn = () => setIsOpen(!isOpen);

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
      <Accordion>
        <AccordionWrapper>
          <AccordionGroup>
            <AccordionTitle>
              {" "}
              Готовность к экзамену-{" "}
              {answerStatistics
                .find(({ title }) => title.includes("Знаю"))
                ?.count.toFixed(2)}
              %
            </AccordionTitle>
            <TriggerButton isOpen={isOpen} onClick={handleTriggerBtn}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="10"
                viewBox="0 0 17 10"
                fill="none"
              >
                <path
                  d="M9.2686 9.69448L16.5385 1.97992C16.6598 1.8512 16.7275 1.68018 16.7275 1.50234C16.7275 1.32451 16.6598 1.15349 16.5385 1.02477L16.5303 1.01646C16.4714 0.953847 16.4006 0.903986 16.3221 0.869914C16.2436 0.835841 16.1591 0.818271 16.0737 0.818271C15.9882 0.818271 15.9037 0.835841 15.8252 0.869914C15.7467 0.903986 15.6759 0.953847 15.6171 1.01646L8.77162 8.28113L1.92891 1.01646C1.87008 0.953846 1.79926 0.903985 1.72076 0.869913C1.64227 0.83584 1.55774 0.818269 1.47232 0.818269C1.3869 0.818269 1.30237 0.83584 1.22388 0.869913C1.14538 0.903985 1.07456 0.953846 1.01573 1.01646L1.00751 1.02477C0.886151 1.15349 0.818448 1.3245 0.818448 1.50234C0.818448 1.68018 0.886151 1.8512 1.00751 1.97992L8.27738 9.69448C8.34132 9.76232 8.41821 9.81634 8.5034 9.85324C8.58859 9.89015 8.68031 9.90918 8.77299 9.90918C8.86568 9.90918 8.95739 9.89015 9.04259 9.85324C9.12778 9.81634 9.20467 9.76232 9.2686 9.69448Z"
                  fill="white"
                />
              </svg>
            </TriggerButton>
          </AccordionGroup>
          <AccordionContent isOpen={isOpen}>
            {isOpen ? (
              <TestCategoryList isOpen={isOpen}>
                {answerStatistics?.map(({ title, count }) => (
                  <TestCategory key={title}>
                    <p className="count">{count.toFixed(2)}%</p>
                    <p className="count_title">{title}</p>
                  </TestCategory>
                ))}
              </TestCategoryList>
            ) : null}
          </AccordionContent>
        </AccordionWrapper>
      </Accordion>

      <CardOverview>
        <TestCategoryList>
          {answerStatistics?.map(({ title, count }) => (
            <TestCategory key={title}>
              <p style={{ width: "80px", textAlign: "end" }}>
                {count.toFixed(2)}%
              </p>
              <p>{title}</p>
            </TestCategory>
          ))}
        </TestCategoryList>
      </CardOverview>
    </Fragment>
  );
};

import styled from "@emotion/styled";
import { observer } from "mobx-react";
import { useNavigate } from "react-router-dom";
import { EllipseShape, IconProps } from "../../assets/lib";
import { Button } from "../../components/Button/button.component";
import { FinalTestVm } from "../../pages/FinalTest/final-test.vm";
import { ExamSimulatorVm } from "../../pages/ExamSimulator/exam-simulator.vm";
import {
  ResultContainer,
  ResultList,
  ResultsList,
} from "../QuizResult/quiz-result";
import { ExamType } from "../../types";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 1150px;
  margin: 0 auto;
  flex-flow: column;
  gap: 20px;
  padding-top: 60px;
`;
const Card = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 30px;
  background: #fff;
  box-shadow: 0px 4px 46px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 80px;
`;
const CardText = styled.div`
  h1 {
    color: #505050;
    font-size: 40px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
  display: flex;
  gap: 4px;
  flex-direction: column;
  margin-top: 80px;
  align-self: center;
  color: #555;
`;
const ButtonSection = styled.div`
  width: 100%;
  gap: 40px;
  margin: 10px 0;
  display: flex;
  justify-content: space-between;
`;

type QuizStartProps = {
  vm: typeof FinalTestVm | typeof ExamSimulatorVm;
  title: string;
  subtitle: string;
  Icon: ({ style }: IconProps) => JSX.Element;
};

export const QuizStart = observer((x: QuizStartProps) => {
  const navigate = useNavigate();

  const handleStartQuiz = () => {
    x?.vm?.startSession();
  };

  return (
    <Container>
      <Card>
        <EllipseShape style="position:absolute; left:0;bottom:-10;rotate:10deg;height:100%;" />
        <CardText>
          <h1>{x.title}</h1>
          <h3>{x.subtitle}</h3>
        </CardText>
        <x.Icon
          style={
            x.vm.exam_type === ExamType.MARATHON
              ? "z-index:50; position:relative;right:-20%;top:10% ;"
              : "z-index:50;"
          }
        />
      </Card>
      <ButtonSection>
        <Button onClick={() => navigate("/")}>Вернуться в меню</Button>
        <Button primary onClick={handleStartQuiz}>
          Начать
        </Button>
      </ButtonSection>
      {x.vm?.exam_type === ExamType.CATEGORY && (
        <ResultContainer>
          <p>Список вопросов:</p>

          <ResultsList>
            {x.vm.questions?.map(({ question }, index) => (
              <ResultList key={index}>
                <span>{index + 1}.</span>
                <span>{question}</span>
              </ResultList>
            ))}
          </ResultsList>
        </ResultContainer>
      )}
    </Container>
  );
});

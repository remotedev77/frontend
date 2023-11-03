import styled from "@emotion/styled";
import { observer } from "mobx-react";
import { useNavigate } from "react-router-dom";
import { EllipseShape, IconProps } from "../../assets/lib";
import { Button } from "../../components/Button/button.component";
import { useContext, useEffect } from "react";
import { postData } from "../../api/apis";
import { AnswerResultDTO, AnswersArgs, ExamType } from "../../types";
import useSWRMutation from "swr/mutation";
import { Loading } from "../../components";
import { ExamSimulatorVm } from "../../pages/ExamSimulator/exam-simulator.vm";
import { FinalTestVm } from "../../pages/FinalTest/final-test.vm";
import { RootStoreContext } from "../../app.view";

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

export const ResultContainer = styled.div`
  position: relative;
  margin-top: auto;
  flex: 1;
  width: 100%;
  padding: 30px 80px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;
  border-radius: 30px 30px 0 0;
  background: #fff;
  box-shadow: 0px 4px 46px 0px rgba(0, 0, 0, 0.25);

  .title {
    color: #505050;
    font-family: Inter;
    font-size: 32px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
`;

export const ResultsList = styled.div`
  padding: 10px 0;
  height: 100%;
  width: 100%;
  max-height: 200px;
  overflow-y: auto;
`;
export const ResultList = styled.div`
  color: #505050;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

type QuizResultProps = {
  vm: typeof FinalTestVm | typeof ExamSimulatorVm;
  Icon: ({ style }: IconProps) => JSX.Element;
  title?: string;
};

export const QuizResult = observer((x: QuizResultProps) => {
  const { userStore } = useContext(RootStoreContext);
  const { data, isMutating, trigger } = useSWRMutation<
    AnswerResultDTO[],
    unknown,
    string,
    AnswersArgs[]
  >("app/check-simulyator/", postData);

  useEffect(() => {
    trigger(x.vm.selectedAnswers);

    x.vm.exam_type === ExamType.FINAL_TEST &&
      userStore.setIsFinalExamPass(data?.[data.length - 1]?.success || false);
    userStore.setIsExamPass(data?.[data.length - 1]?.success || false);
  }, [trigger]);

  const navigate = useNavigate();

  const handleStartQuiz = () => {
    x?.vm?.reset();
    x?.vm?.startSession();
  };

  const handleReturnHome = () => {
    x?.vm?.reset();
    x?.vm?.waitSession();
    navigate("/");
  };
  if (isMutating) return <Loading />;

  return (
    <Container>
      <Card>
        <EllipseShape style="position:absolute; left:0;bottom:-10;rotate:10deg;height:100%;" />
        <CardText>
          {x.vm.exam_type === ExamType.MARATHON ? (
            <>
              <h1>Вы завершили марафон!</h1>
              <h3>
                <p>
                  Кол-во правильных ответов:{" "}
                  {data?.[data.length - 1]?.correct_answers_count}
                </p>
                <p>
                  Кол-во неправильных ответов:{" "}
                  {/*  data?.[data.length - 1]?.incorrect_answers_count */}
                  {
                    x.vm.checkedAnswers.filter(({ isCorrect }) => !isCorrect)
                      .length
                  }
                </p>
              </h3>
            </>
          ) : x.vm.exam_type === ExamType.CATEGORY ? (
            <>
              <h1>{x.title}</h1>
              <h3>
                Кол-во правильных ответов:{" "}
                {data?.[data.length - 1]?.correct_answers_count}
              </h3>
            </>
          ) : (
            <>
              <h1>
                {userStore.isExamPassed ? "Экзамен сдан" : "Экзамен не сдан"}
              </h1>
              <h3>
                Кол-во правильных ответов:{" "}
                {data?.[data.length - 1]?.correct_answers_count}
              </h3>
            </>
          )}
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
        <Button onClick={handleReturnHome}>Вернуться в меню</Button>
        <Button primary onClick={handleStartQuiz}>
          Пройти заново
        </Button>
      </ButtonSection>

      <ResultContainer>
        {data?.filter(({ is_correct }) => is_correct === false) && (
          <p className="title">Ошибки:</p>
        )}

        <ResultsList>
          {data?.filter(({ is_correct }) => is_correct === false) ? (
            data
              ?.filter(({ is_correct }) => is_correct === false)
              ?.map(({ question, description, correct_answer }, index) =>
                x.vm.exam_type === ExamType.CATEGORY ? (
                  <ResultList key={index}>
                    <span>{index + 1}.</span>
                    <span>{question}</span>
                    <p>Correct Answer : {correct_answer}</p>
                    <p>Desc : {description}</p>
                  </ResultList>
                ) : (
                  <ResultList key={index}>
                    <span>{index + 1}.</span>
                    <span>{question}</span>
                  </ResultList>
                )
              )
          ) : (
            <p
              className="position-center"
              style={{ textTransform: "uppercase" }}
            >
              без ошибок
            </p>
          )}
        </ResultsList>
      </ResultContainer>
    </Container>
  );
});

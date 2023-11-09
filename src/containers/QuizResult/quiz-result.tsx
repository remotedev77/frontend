import styled from "@emotion/styled";
import { observer } from "mobx-react";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { postData } from "../../api/apis";
import { AnswerResultDTO, AnswersArgs, ExamType } from "../../types";
import useSWRMutation from "swr/mutation";
import { Accordion, Button, Loading } from "../../components";
import { ExamSimulatorVm } from "../../pages/ExamSimulator/exam-simulator.vm";
import { FinalTestVm } from "../../pages/FinalTest/final-test.vm";
import { RootStoreContext } from "../../app.view";

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 100%;
  padding: 56px 0;
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 1024px) {
  }
`;

const Card = styled.div`
  overflow: hidden;
  position: relative;
  width: 100%;

  border-radius: 20px;
  background: #fff;
  box-shadow: 0px 1.11304px 12.8px 0px rgba(0, 0, 0, 0.25);

  padding: 25px 10px;

  @media only screen and (min-width: 1024px) {
    height: 200px;
    padding: 30px;
    border-radius: 30px;
    background: #fff;
    box-shadow: 0px 4px 46px 0px rgba(0, 0, 0, 0.25);
  }
`;

const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  gap: 40px;

  .icon,
  .iconMarathone {
    display: none;
  }

  @media only screen and (min-width: 1024px) {
    max-width: 60%;
    gap: 30px;
    justify-content: flex-end;
    align-items: normal;
    text-align: start;

    .icon {
      display: flex;
      position: absolute;
      width: 400px;
      height: 310px;
      right: -20px;
      top: 0;
    }

    .iconMarathone {
      display: flex;
      position: absolute;
      width: 600px;
      height: 600px;
      right: -150px;
      top: 0;
    }
  }
`;

const Title = styled.div`
  color: #505050;
  font-size: 22px;
  font-weight: 600;
  padding-bottom: 8px;

  @media only screen and (min-width: 1024px) {
    font-size: 28px;
  }
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  color: #505050;
  font-size: 14px;
  font-weight: 600;

  @media only screen and (min-width: 1024px) {
    gap: 16px;
    flex-direction: row;
    font-size: 18px;
  }
`;

const ButtonSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  @media only screen and (min-width: 1024px) {
    flex-direction: row;
    gap: 40px;
  }
`;

const ScrollToTop = styled.div`
  position: fixed;
  right: 10px;
  bottom: 10px;
  background: #f3673e;
  width: 40px;
  height: 40px;
  border-radius: 9999px;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
`;

const ResultContainer = styled.div`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  @media only screen and (min-width: 1024px) {
  }
`;

type QuizResultProps = {
  vm: typeof FinalTestVm | typeof ExamSimulatorVm;
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  title?: string;
};

export const QuizResult = observer((x: QuizResultProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const { userStore } = useContext(RootStoreContext);
  const examType = x.vm?.exam_type;

  const { data, isMutating, trigger } = useSWRMutation<
    AnswerResultDTO[],
    unknown,
    string,
    AnswersArgs[]
  >(
    examType === ExamType.CATEGORY
      ? "app/check-category-question/"
      : examType === ExamType.FINAL_TEST
      ? "app/check-final-tets/"
      : examType === ExamType.SIMULATOR
      ? "app/check-question/"
      : examType === ExamType.MARATHON
      ? "app/check-category-question/"
      : "",
    postData
  );

  useEffect(() => {
    trigger(x.vm.selectedAnswers);

    x.vm.exam_type === ExamType.FINAL_TEST &&
      userStore.setIsFinalExamPass(data?.[data.length - 1]?.success || false);
    userStore.setIsExamPass(data?.[data.length - 1]?.success || false);
    // Button is displayed after scrolling for 500 pixels
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (isMutating) return <Loading />;

  return (
    <Container className="container">
      <Wrapper>
        <Card>
          <CardBody>
            {x.vm.exam_type === ExamType.MARATHON ? (
              <div>
                <Title>Вы завершили марафон!</Title>
                <Description>
                  <p>
                    Правильных ответов:{" "}
                    {data?.[data.length - 1]?.correct_answers_count}
                  </p>
                  <p>
                    Неправильных ответов:{" "}
                    {/*  data?.[data.length - 1]?.incorrect_answers_count */}
                    {
                      x.vm.checkedAnswers.filter(({ isCorrect }) => !isCorrect)
                        .length
                    }
                  </p>
                </Description>
              </div>
            ) : x.vm.exam_type === ExamType.CATEGORY ? (
              <div>
                <Title>{x.title}</Title>
                <Description>
                  Правильных ответов:{" "}
                  {data?.[data.length - 1]?.correct_answers_count}
                </Description>
              </div>
            ) : (
              <div>
                <Title>
                  {userStore.isExamPassed ? "Экзамен сдан" : "Экзамен не сдан"}
                </Title>
                <Description>
                  Правильных ответов:{" "}
                  {data?.[data.length - 1]?.correct_answers_count}
                </Description>
              </div>
            )}

            <x.Icon
              className={
                x.vm.exam_type === ExamType.MARATHON ? "iconMarathone" : "icon"
              }
            />

            <ButtonSection>
              <Button primary onClick={handleStartQuiz}>
                Пройти заново
              </Button>
              <Button onClick={handleReturnHome}>Вернуться в меню</Button>
            </ButtonSection>
          </CardBody>
        </Card>

        <ResultContainer>
          {data?.slice(0, data?.length - 1)?.map((result, index) => (
            <Accordion key={index} {...result} index={index + 1} />
          ))}
        </ResultContainer>
      </Wrapper>

      {isVisible && (
        <ScrollToTop onClick={scrollToTop}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#ffffff"
            width={30}
            height={30}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75"
            />
          </svg>
        </ScrollToTop>
      )}
    </Container>
  );
});

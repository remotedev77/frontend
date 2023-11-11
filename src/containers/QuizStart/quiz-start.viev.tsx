import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { observer } from "mobx-react";
import { useNavigate } from "react-router-dom";
import { lazily } from "react-lazily";

import { ExamType } from "@/types";
import { FinalTestVm } from "@/pages/FinalTest/final-test.vm";
import { ExamSimulatorVm } from "@/pages/ExamSimulator/exam-simulator.vm";

const { Button, Accordion } = lazily(() => import("@/components"));

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 20px 0;
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

  border-radius: 30px;
  background: #fff;
  box-shadow: 0px 4px 46px 0px rgba(0, 0, 0, 0.25);

  padding: 35px 10px;

  @media only screen and (min-width: 1024px) {
    height: 300px;

    padding: 30px;
  }
`;

const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  width: 100%;
  height: 100%;
  gap: 40px;

  .icon {
    width: 200px;
    height: 210px;
  }

  @media only screen and (min-width: 1024px) {
    max-width: 60%;
    gap: 60px;
    justify-content: flex-end;
    align-items: normal;
    text-align: start;

    .icon {
      position: absolute;
      width: 400px;
      height: 310px;
      right: -20px;
      top: 0;
    }

    .iconMarathone {
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
  font-size: 24px;
  font-weight: 600;
  @media only screen and (min-width: 1024px) {
    font-size: 52px;
  }
`;
const Description = styled.div`
  color: #505050;
  font-size: 16px;
  font-weight: 600;
  @media only screen and (min-width: 1024px) {
    font-size: 27px;
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

type QuizStartProps = {
  vm: typeof FinalTestVm | typeof ExamSimulatorVm;
  title: string;
  subtitle: string;
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
};

export const QuizStart = observer((x: QuizStartProps) => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  const handleStartQuiz = () => {
    x?.vm?.startSession();
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
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
  }, []);
  return (
    <Container className="container">
      <Wrapper>
        <Card>
          <CardBody>
            <div>
              <Title>{x.title}</Title>
              <Description>{x.subtitle}</Description>
            </div>

            <x.Icon
              className={
                x.vm.exam_type === ExamType.MARATHON ? "iconMarathone" : "icon"
              }
            />

            <ButtonSection>
              <Button primary onClick={handleStartQuiz}>
                Начать
              </Button>
              <Button onClick={() => navigate("/")}>Вернуться в меню</Button>
            </ButtonSection>
          </CardBody>
        </Card>

        {x.vm.exam_type === ExamType.MARATHON ||
        x.vm.exam_type === ExamType.CATEGORY ? (
          <ResultContainer>
            {x.vm.questions?.map((result, index) => (
              <Accordion key={index} {...result} index={index + 1} />
            ))}
          </ResultContainer>
        ) : null}
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

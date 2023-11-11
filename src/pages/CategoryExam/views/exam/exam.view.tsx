import { observer } from "mobx-react";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

import { CategoryExamVm } from "../../category-exam.vm.ts";
import { lazily } from "react-lazily";

const { ButtonsGroup, Question, QuestionSlider } = lazily(
  () => import("@/containers")
);

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 40px 10px;
  width: 100%;
  height: 100vh;

  @media only screen and (min-width: 1024px) {
    padding: 20px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 20px;
`;

export const Exam = observer(() => {
  const vm = CategoryExamVm;
  const navigate = useNavigate();
  return (
    <Container>
      <Wrapper>
        <QuestionSlider vm={vm} />
        <Question vm={vm} />
        <ButtonsGroup
          left={() => {
            vm.waitSession();
            navigate("/");
          }}
          right={() => {
            vm.finishSession();
          }}
          middle={{
            amount: 3,
            middle() {
              vm.checkAnswer();
            },
            left() {
              if (vm.questionNumber > 0) {
                vm.changeSelectedQuestion(vm.questionNumber - 1);
              }
            },
            right() {
              if (vm.questions.length - 1 > vm.questionNumber) {
                vm.changeSelectedQuestion(vm.questionNumber + 1);
              }
            },
          }}
        />
      </Wrapper>
    </Container>
  );
});

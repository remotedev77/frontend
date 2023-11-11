import { observer } from "mobx-react";
import styled from "@emotion/styled";
import { lazily } from "react-lazily";

import { ExamSimulatorVm } from "../../exam-simulator.vm.ts";
import useTime from "@/hooks/useTime.tsx";

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
  const vm = ExamSimulatorVm;
  // console.log(vm.questions);
  const time = useTime({ expiryTime: 3600, onExpire: undefined });

  return (
    <Container>
      <Wrapper>
        <QuestionSlider vm={vm} />
        <Question vm={vm} />
        <ButtonsGroup
          right={() => {
            vm.finishSession();
          }}
          middle={{
            amount: 3,
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
          time={time}
        />
      </Wrapper>
    </Container>
  );
});

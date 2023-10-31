import { observer } from "mobx-react";
import styled from "@emotion/styled";
import { FinalTestVm } from "../../final-test.vm.ts";
import {
  ButtonsGroup,
  Question,
  QuestionSlider,
} from "../../../../containers/index.ts";
import useTime from "../../../../hooks/useTime.tsx";

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
  width: 100%;
  height: 100vh;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 20px;
`;

export const Exam = observer(() => {
  const vm = FinalTestVm;
  const time = useTime({ expiryTime: 3600, onExpire: undefined });

  return (
    <Container>
      <Wrapper>
        <QuestionSlider vm={vm} />
        <Question vm={vm} />
        <div style={{ marginTop: 20 }}>
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
        </div>
      </Wrapper>
    </Container>
  );
});

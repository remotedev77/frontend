import { observer } from "mobx-react";
import styled from "@emotion/styled";
import { MarathonVm } from "../../marathon.vm.ts";
import {
  ButtonsGroup,
  Question,
  QuestionSlider,
} from "../../../../containers/index.ts";
import { useNavigate } from "react-router-dom";
import { ExamType } from "../../../../types/index.ts";

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
  const vm = MarathonVm;
  const navigate = useNavigate();
  return (
    <Container>
      <Wrapper>
        <QuestionSlider vm={vm} />
        <Question vm={vm} />
        <div style={{ marginTop: 20 }}>
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
                if (vm.exam_type === ExamType.MARATHON) {
                  if (vm.checkedAnswers.length > vm.questionNumber) {
                    return vm.changeSelectedQuestion(vm.questionNumber + 1);
                  }
                } else {
                  if (vm.questions.length - 1 > vm.questionNumber) {
                    return vm.changeSelectedQuestion(vm.questionNumber + 1);
                  }
                }
              },
            }}
          />
        </div>
      </Wrapper>
    </Container>
  );
});

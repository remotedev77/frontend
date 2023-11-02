import { observer } from "mobx-react";
import styled from "@emotion/styled";
import { FC } from "react";
import { ExamType, VM } from "../../types";

const QContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-grow: 1;
`;

const QWrapper = styled.div`
  box-sizing: border-box;
  padding: 40px;
  width: 100%;
  border-radius: 30px;
  background: #fff;
  box-shadow: 0px 4px 46px 0px rgba(0, 0, 0, 0.25);
  max-height: 600px;
  overflow-x: auto;
`;

const Title = styled.p`
  color: #aaa;
  font-family: Inter, sans-serif;
  font-size: 27px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const Text = styled.p`
  color: #000;
  font-family: Inter;
  font-size: 27px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  padding-bottom: 22px;
`;

const Form = styled.form`
  display: flex;
  flex-flow: column;
  gap: 12px;
`;

const Label = styled.label`
  display: flex;
  gap: 16px;
  color: #000;
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const Input = styled.input`
  border: 0px;
  width: 27px;
  height: 27px;
`;

const AnswerText = styled.p<{ isCorrect?: boolean }>`
  flex: 1;
  color: ${(props) =>
    props.isCorrect
      ? "#B9FF6D"
      : props.isCorrect === false
      ? "#F5574D"
      : "#000000"};
`;

interface QuestionProps {
  vm: VM;
}

export const Question: FC<QuestionProps> = observer((x) => {
  return (
    <QContainer>
      <QWrapper>
        <Title>Вопрос {x.vm.questionNumber + 1}</Title>
        <Text>{x.vm.selectedQuestion?.question}</Text>
        <Form>
          {x.vm.exam_type === ExamType.MARATHON ||
          x.vm.exam_type === ExamType.CATEGORY
            ? x.vm.selectedQuestion?.answers?.map(({ id, answer }) => (
                <Label key={id}>
                  <Input
                    type="radio"
                    checked={x.vm.findSelectedAnswer() === id}
                    value={id}
                    disabled={x.vm.findCheckedAnswer() ? true : false}
                    onChange={() => {
                      x.vm?.setSelectedAnswer({
                        a_id: id,
                      });
                    }}
                  />
                  {x.vm.findCheckedAnswer()?.answerId === id ? (
                    <AnswerText isCorrect={x.vm.findCheckedAnswer()?.isCorrect}>
                      {answer}
                    </AnswerText>
                  ) : x.vm.findCheckedAnswer()?.correctAnswerId === id ? (
                    <AnswerText isCorrect={true}>{answer}</AnswerText>
                  ) : (
                    <AnswerText>{answer}</AnswerText>
                  )}
                </Label>
              ))
            : x.vm.selectedQuestion?.answers?.map(({ id, answer }) => (
                <Label key={id}>
                  <Input
                    type="radio"
                    checked={x.vm.findSelectedAnswer() === id}
                    value={id}
                    onChange={() => {
                      x.vm?.setSelectedAnswer({
                        a_id: id,
                      });
                    }}
                  />
                  <AnswerText>{answer}</AnswerText>
                </Label>
              ))}
        </Form>
      </QWrapper>
    </QContainer>
  );
});

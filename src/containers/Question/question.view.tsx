import { observer } from "mobx-react";
import styled from "@emotion/styled";
import { FC } from "react";
import { ExamType, VM } from "../../types";
import { toJS } from "mobx";

const QContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-grow: 1;

  @media only screen and (min-width: 1024px) {
    height: calc(100% - 200px);
  }
`;

const QWrapper = styled.div`
  box-sizing: border-box;
  padding: 20px;
  width: 100%;
  border-radius: 30px;
  background: #fff;
  box-shadow: 0px 4px 46px 0px rgba(0, 0, 0, 0.25);
  overflow-x: auto;

  @media only screen and (min-width: 1024px) {
    padding: 40px;
  }
`;

const Title = styled.p`
  color: #aaa;
  font-family: Inter, sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding-bottom: 12px;

  @media only screen and (min-width: 1024px) {
    font-size: 27px;
  }
`;

const Text = styled.p`
  color: #000;
  font-family: Inter;
  font-size: 12px;

  font-style: normal;
  font-weight: 600;
  line-height: normal;
  padding-bottom: 12px;

  @media only screen and (min-width: 1024px) {
    font-size: 27px;
    padding-bottom: 22px;
  }
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
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  @media only screen and (min-width: 1024px) {
    font-size: 24px;
  }
`;

const Input = styled.input`
  border: 0px;
  width: 12px;
  height: 12px;

  @media only screen and (min-width: 1024px) {
    width: 27px;
    height: 27px;
  }
`;

const AnswerText = styled.p<{ isCorrect?: boolean }>`
  flex: 1;
  font-weight: 400;
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
  console.log(toJS(x.vm));
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
                    checked={
                      x.vm
                        .findSelectedAnswer()
                        ?.find((a_id: number) => a_id === id)
                        ? true
                        : false
                    }
                    value={id}
                    disabled={x.vm.findCheckedAnswer() ? true : false}
                    onChange={() => {
                      x.vm?.setSelectedAnswer(id);
                    }}
                  />
                  {x.vm
                    .findCheckedAnswer()
                    ?.answerIds?.find((answerId) => answerId === id) ? (
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
                    checked={
                      x.vm
                        .findSelectedAnswer()
                        ?.find((a_id: number) => a_id === id)
                        ? true
                        : false
                    }
                    value={id}
                    onChange={() => {
                      x.vm?.setSelectedAnswer(id);
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

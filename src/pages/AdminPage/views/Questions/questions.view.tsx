import { observer } from "mobx-react";
import styled from "@emotion/styled";
import { Input } from "../../../../components";
import { QuestionsVm } from "./questions.vm.ts";
import { Button } from "../../../../components/Button/button.component.tsx";

const Container = styled.div``;
const Form = styled.form`
  margin-bottom: 40px;
`;

const TextArea = styled.textarea`
  padding: 15px 20px;
  align-items: center;
  gap: 10px;
  color: #505050;
  resize: none;
  width: 500px;
  min-height: 300px;
  font-family: Inter, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  border-radius: 15px;
  border: 1px solid #000;
  margin-bottom: 20px;
`;
const InputCheckbox = styled.input`
  margin-left: 15px;
  width: 16px;
  height: 16px;
`;
const Label = styled.label`
  display: flex;
  align-items: center;
  color: #000;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 20px;
`;

const AddAnswer = styled.a`
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  cursor: pointer;
`;
const QuestionTable = styled.table`
  width: 100%;
  border: none;
  margin-bottom: 20px;

  tbody tr:nth-child(even) {
    background: #f3f3f3;
  }

  tbody tr td:first-child {
    border-radius: 8px 0 0 8px;
  }

  tbody tr td:last-child {
    border-radius: 0 8px 8px 0;
  }
`;
const QuestionTHead = styled.thead`
  th:last-child {
    border-radius: 0 8px 8px 0;
  }

  th:first-child {
    border-radius: 8px 0 0 8px;
  }
`;
const QuestionHeadRow = styled.tr``;
const QuestionHeadCell = styled.th`
  font-weight: bold;
  text-align: left;
  border: none;
  padding: 10px 15px;
  background: #d8d8d8;
  font-size: 14px;
`;
const QuestionRow = styled.tr``;
const QuestionCell = styled.td`
  text-align: left;
  border: none;
  padding: 10px 15px;
  font-size: 14px;
  vertical-align: top;
`;

export const Questions = observer(() => {
  const TableHeader = () => (
    <QuestionTHead>
      <QuestionHeadRow>
        <QuestionHeadCell>ID</QuestionHeadCell>
        <QuestionHeadCell>Вопрос</QuestionHeadCell>
        <QuestionHeadCell></QuestionHeadCell>
      </QuestionHeadRow>
    </QuestionTHead>
  );
  const vm = QuestionsVm;
  return (
    <Container>
      <Form>
        <Input
          onChange={(e) => vm.changeNewQuestion(e.target.value)}
          placeholder="Вопрос"
          textSize={16}
        />
        <TextArea
          onChange={(e) => vm.changeNewDescription(e.target.value)}
          placeholder="Описание"
        />
        {vm.newAnswers.map((_, i) => (
          <Label>
            <Input
              onChange={(e) => vm.changeAnswer(i, e.target.value)}
              placeholder="Ответ"
              noMargins
              textSize={16}
            />
            <InputCheckbox
              type="checkbox"
              onChange={(e) => vm.changeIsCorrect(i, e.target.checked)}
            />
          </Label>
        ))}
        <AddAnswer onClick={vm.addAnswer}>Добавить ответ</AddAnswer>
      </Form>
      <Button onClick={vm.addQuestion} primary size={16}>
        Добавить вопрос
      </Button>
      <QuestionTable cellSpacing={0}>
        <TableHeader />
        <tbody>
          {vm.questions.map((e) => (
            <QuestionRow>
              <QuestionCell>{e.id}</QuestionCell>
              <QuestionCell>{e.question} </QuestionCell>
              <QuestionCell>
                <button onClick={() => vm.deleteQuestion(e.id)}>Удалить</button>
              </QuestionCell>
            </QuestionRow>
          ))}
        </tbody>
      </QuestionTable>
    </Container>
  );
});

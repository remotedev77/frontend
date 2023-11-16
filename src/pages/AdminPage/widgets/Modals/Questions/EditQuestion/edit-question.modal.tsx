import { observer } from "mobx-react";
import {
  ConfirmContainer,
  ConfirmControlls,
  CustomSelect,
  FileUpload,
  Label,
  ModalInput,
  ModalTextarea,
  ModalTitle,
} from "@/components/Modals/modal-wrapper.tsx";
import { Button } from "@/components";
import { AdminPageVm } from "../../../../admin-page.vm.ts";
import { Question } from "../../../QuestionTable/question-table.vm.ts";
import { FC, useState } from "react";
import { EditQuestionVm } from "./edit-question.vm.ts";
import styled from "@emotion/styled";

interface EditQuestionProps {
  vm: typeof AdminPageVm;
  question: Question;
}
export const EditQuestion: FC<EditQuestionProps> = observer((x) => {
  const vm = EditQuestionVm;
  vm.setQuestion(x.question);
  const [isConfirming, setIsConfirming] = useState(false);
  interface ConfirmProps {
    onConfirm: () => void;
  }
  const Confirm: FC<ConfirmProps> = (x) => (
    <ConfirmContainer style={{ display: isConfirming ? "flex" : "none" }}>
      <ModalTitle>Вы уверены, что хотите удалить вопрос?</ModalTitle>
      <ConfirmControlls>
        <Button
          width={160}
          onClick={() => setIsConfirming(false)}
          primary
          size={16}
        >
          Отменить
        </Button>
        <Button
          onClick={() => {
            x.onConfirm();
            setIsConfirming(false);
          }}
          size={16}
          width={160}
        >
          Удалить
        </Button>
      </ConfirmControlls>
    </ConfirmContainer>
  );

  const Answers = observer(() => {
    const Container = styled.div`
      display: flex;
      margin-bottom: 20px;
    `;
    const Wrapper = styled.div`
      margin-bottom: 50px;
    `;

    const Radio = styled.input`
      width: 15px;
      margin-right: 15px;
    `;
    const AddButton = styled.button`
      color: #fff;
      font-size: 12px;
      font-weight: 600;
      border-radius: 10px;
      background: #c8c8c8;
      padding: 10px 15px 10px 13px;
      border: none;
    `;
    return (
      <Wrapper>
        {vm?.answers?.map((a, i) => (
          <Container key={a.id}>
            <Radio
              type="radio"
              checked={a.is_correct}
              onChange={(e) => vm.onAnswersChange(a?.id || 0, e.target.checked)}
            />
            <ModalInput
              placeholder={a.answer}
              onBlur={(e) => vm.onAnswerValueChange(e.target.value, i)}
              style={{ height: "35px", width: "400px", fontSize: "12px" }}
            />
          </Container>
        ))}
        <AddButton onClick={vm.addAnswer}>Добавить вариант ответа</AddButton>
      </Wrapper>
    );
  });

  return (
    <>
      <Confirm
        onConfirm={() => {
          vm.deleteQuestion();
          x.vm.isModalVisible = false;
        }}
      />
      <Label>
        <CustomSelect
          placeholder="Тип вопроса"
          onChange={(e) =>
            vm.onNoteChange(e.target.selectedOptions[0].accessKey)
          }
          defaultValue={"Тип вопроса"}
        >
          <option disabled>Тип вопроса</option>
          <option accessKey="single">Одиночный</option>
          <option accessKey="multiply">Множественный</option>
        </CustomSelect>
      </Label>
      <ModalTextarea
        value={vm.questionValue}
        onChange={(e) => vm.onQuestionChange(e.target.value)}
      />
      <FileUpload
        setFile={() => {}}
        fileName={null}
        description="загрузить фотографию"
      />
      <ModalInput
        placeholder={x.question.work_function}
        onChange={(e) => vm.onWorkFunctionChange(e.target.value)}
        style={{ marginBottom: "20px" }}
      />
      <Answers />
      <ModalInput
        placeholder={x.question.correct_answer_description}
        onChange={(e) => vm.onDescriptionChange(e.target.value)}
        style={{ marginBottom: "20px" }}
      />
      <Button
        width={160}
        onClick={() => {
          vm.editQuestion();
          x.vm.isModalVisible = false;
        }}
        size={16}
        primary
      >
        Изменить
      </Button>
    </>
  );
});

import { observer } from "mobx-react";
import { FC, useState } from "react";
import {
  ButtonSection,
  ConfirmContainer,
  ConfirmControlls,
  InfoField,
  ModalTitle,
} from "../../../../../../components/Modals/modal-wrapper.tsx";
import { AdminPageVm } from "../../../../admin-page.vm.ts";
import {
  Question,
  QuestionTableVm,
} from "../../../QuestionTable/question-table.vm.ts";
import { Button } from "../../../../../../components";
import { EditQuestion } from "../EditQuestion/edit-question.modal.tsx";

interface UserInfoProps {
  question: Question;
  vm: typeof QuestionTableVm;
  admin: typeof AdminPageVm;
}
export const QuestionInfo: FC<UserInfoProps> = observer((x) => {
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
  return (
    <>
      <Confirm
        onConfirm={() => {
          x.vm.onDeleteQuestion(x?.question?.id || 0);
          x.admin.isModalVisible = false;
        }}
      />
      <InfoField type="Тип вопроса" info={x.question.note} />
      <InfoField type="Код вопроса" info={String(x.question.question_code)} />
      <InfoField type="Текст вопроса" info={x.question.question} />
      <InfoField type="Примечание" info={x.question.work_function} />
      <InfoField type="Варианты ответа" info={""} />
      <ul style={{ listStyleType: "disk" }}>
        {x.question.answers!.map((a) => (
          <li style={{ marginBottom: "5px" }}>
            <InfoField green={a.is_correct} type={a.answer} info={null} />
          </li>
        ))}
      </ul>
      <InfoField type="Описание" info={x.question.correct_answer_description} />
      <ButtonSection
        onDelete={() => setIsConfirming(true)}
        onEdit={() => {
          x.admin.CurrentModal = (
            <EditQuestion vm={x.admin} question={x.question} />
          );
        }}
      />
    </>
  );
});

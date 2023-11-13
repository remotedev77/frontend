import {observer} from "mobx-react";
import {
    CustomSelect,
    FileUpload,
    Label,
    ModalInput,
    ModalTextarea, ModalTitle
} from "../../../../../../components/Modals/modal-wrapper.tsx";
import {Button} from "../../../../../../components";
import {AdminPageVm} from "../../../../admin-page.vm.ts";
import {FC} from "react";
import {AddQuestionVm} from "./add-question.vm.ts";
import styled from "@emotion/styled";

interface EditQuestionProps{
    vm: typeof AdminPageVm
}
export const AddQuestion:FC<EditQuestionProps> = observer(x =>{
    const vm = AddQuestionVm

    const Answers = observer(()=> {
        const Container = styled.div`
          display: flex;
          margin-bottom: 20px;
        `
        const Wrapper = styled.div`
          margin-bottom: 50px;
        `

        const Radio = styled.input`
          width: 15px;
          margin-right: 15px;
        `
        const AddButton = styled.button`
          color: #FFF;
          font-size: 12px;
          font-weight: 600;
          border-radius: 10px;
          background: #C8C8C8;
          padding: 10px 15px 10px 13px;
          border: none;
        `
            return <Wrapper>{vm.answers.map((a, i) => <Container key={a.id}>
                <Radio type="radio" checked={a.is_correct} onChange={e => vm.onAnswersChange(a.id, e.target.checked)}/>
                <ModalInput placeholder={a.answer}  onBlur={e=>vm.onAnswerValueChange(e.target.value, i)} style={{height:"35px", width: "400px", fontSize: "12px"}}/>
            </Container>)}
                <AddButton onClick={vm.addAnswer}>Добавить вариант ответа</AddButton>
            </Wrapper>
        }
    )

    return <>
        <ModalTitle>Добавление нового вопроса</ModalTitle>
        <Label>
            <CustomSelect
                placeholder="Тип вопроса"
                onChange={e=>vm.onNoteChange(e.target.selectedOptions[0].accessKey)}
            >
                <option disabled selected>Тип вопроса</option>
                <option accessKey="single">
                    Одиночный
                </option>
                <option accessKey="multiply">
                    Множественный
                </option>
            </CustomSelect>
        </Label>
        <ModalInput  placeholder="Код вопроса" onChange={e=>vm.onCodeChange(Number(e.target.value))} style={{marginBottom:"20px"}}/>
        <ModalTextarea value={vm.questionValue} onChange={e=>vm.onQuestionChange(e.target.value)} />
        <FileUpload setFile={()=>{}} fileName={null} description="загрузить фотографию"/>
        <ModalInput placeholder="Трудовая функция" onChange={e=>vm.onWorkFunctionChange(e.target.value)} style={{marginBottom:"20px"}}/>
        <Answers/>
        <ModalInput placeholder="Краткое описание" onChange={e=>vm.onDescriptionChange(e.target.value)} style={{marginBottom:"20px"}}/>
        <Button width={160} onClick={()=>{
            x.vm.isModalVisible = false
            vm.createQuestion()
        }} size={16} primary>
            Добавить
        </Button>
    </>

})

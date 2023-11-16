import {observer} from "mobx-react";
import {FileUpload, ModalTitle} from "../../../../../../components/Modals/modal-wrapper.tsx";
import {Button} from "../../../../../../components";
import {CsvVm} from "./csv.vm.ts";
import {FC} from "react";
import {AdminPageVm} from "@/pages/AdminPage/admin-page.vm.ts";

interface CsvQuestionProps{
    vm: typeof AdminPageVm
}
export const CsvQuestion:FC<CsvQuestionProps> = observer(x=>{
    const vm = new CsvVm
    return <>
        <ModalTitle>Добавление группы вопросов .CSV</ModalTitle>
        <FileUpload setFile={vm.setFile} fileName={vm.file ? vm.file.name: null}/>
        <Button width={160} onClick={()=>{
            vm.postFile()
            x.vm.closeModal()
        }} size={16} primary>
            Добавить
        </Button>
    </>
})

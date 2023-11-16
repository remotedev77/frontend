import {observer} from "mobx-react";
import {FileUpload, ModalTitle} from "../../../../../../components/Modals/modal-wrapper.tsx";
import {Button} from "../../../../../../components";
import {CsvVm} from "./csv.vm.ts";
import {CompaniesSelect} from "../../../CompaniesSelect/companies-select.widget.tsx";
import {AdminPageVm, Company} from "../../../../admin-page.vm.ts";
import {FC} from "react";
interface CsvModalProps{
    companies: Company[]
    vm: typeof AdminPageVm
}

export const CsvModal:FC<CsvModalProps> = observer(x=>{
    const vm = new CsvVm
    return <>
        <ModalTitle>Добавление группы пользователей через .CSV</ModalTitle>
        <FileUpload setFile={vm.setFile} fileName={vm.file ? vm.file.name: null}/>
        <CompaniesSelect setCompany={vm.setCompany} companies={x.companies}/>

        <Button width={160} onClick={()=>{
            vm.postFile()
            x.vm.closeModal()

        }} size={16} primary>
            Добавить
        </Button>
    </>
})

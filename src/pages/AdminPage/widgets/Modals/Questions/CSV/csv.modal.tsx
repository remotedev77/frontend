import { observer } from "mobx-react";
import {
  FileUpload,
  ModalTitle,
} from "../../../../../../components/Modals/modal-wrapper.tsx";
import { Button } from "../../../../../../components";
import { CsvVm } from "./csv.vm.ts";
import { FC } from "react";

export const CsvQuestion: FC = observer(() => {
  const vm = CsvVm;
  return (
    <>
      <ModalTitle>Добавление группы вопросов .XLSX</ModalTitle>
      <FileUpload
        setFile={vm.setFile}
        fileName={vm.file ? vm.file.name : null}
      />
      <Button width={160} onClick={vm.postFile} size={16} primary>
        Добавить
      </Button>
    </>
  );
});

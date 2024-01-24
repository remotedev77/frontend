import { useLocation } from "react-router-dom";

import { Button } from "@/common/components/ui/button";
import { Badge } from "@/common/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/common/components/ui/dialog";
import { UploadForm } from "./upload-form";

import useQuestionStore from "@/services/state/questionsStore";

const UploadQuestions = () => {
  const { uploadDialogOpen, setUploadDialogOpen } = useQuestionStore();
  const { state } = useLocation();

  return (
    <Dialog open={uploadDialogOpen} onOpenChange={setUploadDialogOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Добавить через .XLSX</Button>
      </DialogTrigger>
      <DialogContent className="max-h-[calc(100dvh-40px)] overflow-auto sm:max-w-lg">
        <Badge className="absolute top-0 left-0 rounded-es-none rounded-se-none w-fit">{state?.directionName}</Badge>
        <DialogHeader className="mt-2">
          <DialogTitle>Добавление группы вопросов чере .XLSX</DialogTitle>
        </DialogHeader>
        <UploadForm />
      </DialogContent>
    </Dialog>
  );
};

export { UploadQuestions };

import { Button } from "@/common/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/common/components/ui/dialog";
import useQuestionStore from "@/services/state/questionsStore";
import { UploadForm } from "./upload-form";

const UploadQuestions = () => {
  const { uploadDialogOpen, setUploadDialogOpen } = useQuestionStore();

  return (
    <Dialog open={uploadDialogOpen} onOpenChange={setUploadDialogOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Добавить через .XLSX</Button>
      </DialogTrigger>
      <DialogContent className="max-h-[calc(100dvh-40px)] overflow-auto sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Добавление группы вопросов чере .XLSX</DialogTitle>
        </DialogHeader>
        <UploadForm />
      </DialogContent>
    </Dialog>
  );
};

export { UploadQuestions };

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/common/components/ui/dialog";
import useQuestionStore from "@/services/state/questionsStore";
import { UpdateForm } from "./update-form";

const UpdateQuestion = () => {
  const { updateDialogOpen, setUpdateDialogOpen } = useQuestionStore();
  return (
    <Dialog open={updateDialogOpen} onOpenChange={setUpdateDialogOpen}>
      <DialogContent className="max-h-[calc(100dvh-40px)] overflow-auto sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Обновлять нового вопрос</DialogTitle>
        </DialogHeader>
        <UpdateForm />
      </DialogContent>
    </Dialog>
  );
};

export { UpdateQuestion };

import { Button } from "@/common/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/common/components/ui/dialog";
import { CreateForm } from "./create-form";

import useQuestionStore from "@/services/state/questionsStore";

const CreateQuestion = () => {
  const { createDialogOpen, setCreateDialogOpen } = useQuestionStore();

  return (
    <Dialog open={createDialogOpen} onOpenChange={setCreateDialogOpen}>
      <DialogTrigger asChild>
        <Button>Добавить вопрос</Button>
      </DialogTrigger>
      <DialogContent className="max-h-[calc(100dvh-40px)] overflow-auto sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Добавление нового вопрос</DialogTitle>
        </DialogHeader>
        <CreateForm />
      </DialogContent>
    </Dialog>
  );
};

export { CreateQuestion };

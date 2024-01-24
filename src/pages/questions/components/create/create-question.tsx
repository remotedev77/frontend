import { Button } from "@/common/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/common/components/ui/dialog";
import { CreateForm } from "./create-form";

import useQuestionStore from "@/services/state/questionsStore";
import { useLocation } from "react-router-dom";
import { Badge } from "@/common/components/ui/badge";

const CreateQuestion = () => {
  const { createDialogOpen, setCreateDialogOpen } = useQuestionStore();
  const { state } = useLocation();

  return (
    <Dialog open={createDialogOpen} onOpenChange={setCreateDialogOpen}>
      <DialogTrigger asChild>
        <Button>Добавить вопрос</Button>
      </DialogTrigger>
      <DialogContent className="max-h-[calc(100dvh-40px)] overflow-auto sm:max-w-lg">
        <Badge className="absolute top-0 left-0 rounded-es-none rounded-se-none w-fit">{state?.directionName}</Badge>
        <DialogHeader className="mt-2">
          <DialogTitle>Добавление нового вопрос</DialogTitle>
        </DialogHeader>
        <CreateForm />
      </DialogContent>
    </Dialog>
  );
};

export { CreateQuestion };

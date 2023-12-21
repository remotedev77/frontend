import { Button } from "@/common/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/common/components/ui/dialog";
import { CreateForm } from "./create-form";

import useManagerStore from "@/services/state/managersStore";

const CreateManager = () => {
  const { createDialogOpen, setCreateDialogOpen } = useManagerStore();

  return (
    <Dialog open={createDialogOpen} onOpenChange={setCreateDialogOpen}>
      <DialogTrigger asChild>
        <Button>Добавить менеджера</Button>
      </DialogTrigger>
      <DialogContent className="max-h-[calc(100dvh-40px)] overflow-auto sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Добавление нового менеджера</DialogTitle>
        </DialogHeader>
        <CreateForm />
      </DialogContent>
    </Dialog>
  );
};

export { CreateManager };

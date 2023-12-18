import { Button } from "@/common/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/common/components/ui/dialog";
import { CreateForm } from "./create-form";

import useUserStore from "@/services/state/usersStore";

const CreateUser = () => {
  const { createDialogOpen, setCreateDialogOpen } = useUserStore();

  return (
    <Dialog open={createDialogOpen} onOpenChange={setCreateDialogOpen}>
      <DialogTrigger asChild>
        <Button>Добавить пользователя</Button>
      </DialogTrigger>
      <DialogContent className="max-h-[calc(100dvh-40px)] overflow-auto sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Добавление нового пользователя</DialogTitle>
        </DialogHeader>
        <CreateForm />
      </DialogContent>
    </Dialog>
  );
};

export { CreateUser };

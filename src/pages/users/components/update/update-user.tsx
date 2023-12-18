import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/common/components/ui/dialog";
import useUserStore from "@/services/state/usersStore";
import { UpdateForm } from "./update-form";

const UpdateUser = () => {
  const { updateDialogOpen, setUpdateDialogOpen } = useUserStore();
  return (
    <Dialog open={updateDialogOpen} onOpenChange={setUpdateDialogOpen}>
      <DialogContent className="max-h-[calc(100dvh-40px)] overflow-auto sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Обновлять нового пользователя</DialogTitle>
        </DialogHeader>
        <UpdateForm />
      </DialogContent>
    </Dialog>
  );
};

export { UpdateUser };

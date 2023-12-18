import { Button } from "@/common/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/common/components/ui/dialog";
import { UploadForm } from "./upload-form";

import useUserStore from "@/services/state/usersStore";

const UploadUsers = () => {
  const { uploadDialogOpen, setUploadDialogOpen } = useUserStore();

  return (
    <Dialog open={uploadDialogOpen} onOpenChange={setUploadDialogOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Добавить через .XLSX</Button>
      </DialogTrigger>
      <DialogContent className="max-h-[calc(100dvh-40px)] overflow-auto sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Добавление нового пользователя</DialogTitle>
        </DialogHeader>
        <UploadForm />
      </DialogContent>
    </Dialog>
  );
};

export { UploadUsers };

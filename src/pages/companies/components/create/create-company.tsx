import { Button } from "@/common/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/common/components/ui/dialog";
import { CreateForm } from "./create-form";

import useCompanyStore from "@/services/state/companiesStore";

const CreateCompany = () => {
  const { createDialogOpen, setCreateDialogOpen } = useCompanyStore();

  return (
    <Dialog open={createDialogOpen} onOpenChange={setCreateDialogOpen}>
      <DialogTrigger asChild>
        <Button>Добавить организацию</Button>
      </DialogTrigger>
      <DialogContent className="max-h-[calc(100dvh-40px)] overflow-auto sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Добавление новой организации</DialogTitle>
        </DialogHeader>
        <CreateForm />
      </DialogContent>
    </Dialog>
  );
};

export { CreateCompany };

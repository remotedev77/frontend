import { useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/common/components/ui/dialog";
import { Button } from "@/common/components/ui/button";
import { UpdateForm } from "./update/update-form";

import { Pencil2Icon } from "@radix-ui/react-icons";
import useManagerStore from "@/services/state/managersStore";

const ManagerDetails = () => {
  const [onEdit, setOnEdit] = useState(false);
  const { detailsDialogOpen, setDetailsDialogOpen, managerDetails } = useManagerStore();
  const handleEdit = (onEdit: boolean = true) => setOnEdit(onEdit);
  return (
    <Dialog
      open={detailsDialogOpen}
      onOpenChange={() => {
        setDetailsDialogOpen();
        handleEdit(false);
      }}
    >
      <DialogContent className="max-h-[calc(100dvh-40px)] overflow-auto sm:max-w-lg">
        {onEdit ? (
          <UpdateForm handleEdit={handleEdit} />
        ) : (
          <>
            <DialogHeader>
              <DialogTitle>
                {managerDetails?.last_name} {managerDetails?.first_name} {managerDetails?.father_name}
              </DialogTitle>
              <DialogDescription>{managerDetails?.role}</DialogDescription>
            </DialogHeader>

            <div className="space-y-4">
              <ul className="space-y-2 text-sm">
                <li>
                  <span className="font-semibold">Логин: </span>
                  {managerDetails?.email}
                </li>
              </ul>
            </div>

            <DialogFooter>
              <Button onClick={() => handleEdit()}>
                <Pencil2Icon className="w-4 h-4 mr-2" /> Редактировать
              </Button>
            </DialogFooter>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export { ManagerDetails };

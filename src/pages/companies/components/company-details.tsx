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
import useCompanyStore from "@/services/state/companiesStore";

const CompanyDetails = () => {
  const [onEdit, setOnEdit] = useState(false);
  const { detailsDialogOpen, setDetailsDialogOpen, companyDetails } = useCompanyStore();
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
              <DialogTitle>{companyDetails?.company_name}</DialogTitle>
              <DialogDescription>{companyDetails?.contact_person}</DialogDescription>
            </DialogHeader>

            <div className="space-y-4">
              <ul className="space-y-2 text-sm">
                <li>
                  <span className="font-semibold">Почта: </span>
                  {companyDetails?.email}
                </li>
                <li>
                  <span className="font-semibold">Номер телефона: </span>
                  {companyDetails?.phone}
                </li>
                <li>
                  <span className="font-semibold">Адрес: </span>
                  {companyDetails?.legal_adress}
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

export { CompanyDetails };

import { ColumnDef } from "@tanstack/react-table";

import { toast } from "@/common/components/ui/use-toast";
import { DeleteAlert } from "@/common/components/delete-alert";

import { toastMessages } from "@/common/lib/utils";
import { companiesEndpoints } from "@/services/api/endpoints";
import { deleteData } from "@/services/api/requests";
import { Company } from "../models";
import useCompanyStore from "@/services/state/companiesStore";

export const columns: ColumnDef<Company>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "company_name",
    header: "Организация",
  },
  {
    accessorKey: "contact_person",
    header: "ФИО контактного лица",
  },
  {
    accessorKey: "email",
    header: "Почта",
  },
  {
    accessorKey: "phone",
    header: "Телефон",
  },
  {
    accessorKey: "legal_adress",
    header: "Адресс",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const id = row.original?.id;
      const handleDelete = async () => {
        try {
          await deleteData(companiesEndpoints.byId(id));
          useCompanyStore.getState().mutate();
          toast(toastMessages.success);
        } catch (error) {
          toast(toastMessages.error);
        }
      };

      return <DeleteAlert handleAction={handleDelete} />;
    },
  },
];

import { ColumnDef } from "@tanstack/react-table";

import { toast } from "@/common/components/ui/use-toast";
import { DeleteAlert } from "@/common/components/delete-alert";

import { toastMessages } from "@/common/lib/utils";
import { managersEndpoints } from "@/services/api/endpoints";
import { deleteData } from "@/services/api/requests";
import { Manager } from "../models";
import useManagerStore from "@/services/state/managersStore";

export const columns: ColumnDef<Manager>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "full_name",
    header: "ФИО",
    cell: ({ row }) => {
      const firstName = row.original.first_name;
      const lastName = row.original.last_name;
      const fatherName = row.original.father_name;

      return `${lastName} ${firstName} ${fatherName}`;
    },
  },
  {
    accessorKey: "email",
    header: "Логин",
  },
  // {
  //   accessorKey: "password",
  //   header: "Пароль",
  // },
  {
    accessorKey: "role",
    header: "Роль",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const id = row.original?.id;
      const handleDelete = async () => {
        try {
          await deleteData(managersEndpoints.byId(id));
          useManagerStore.getState().mutate();
          toast(toastMessages.success);
        } catch (error) {
          toast(toastMessages.error);
        }
      };

      return <DeleteAlert handleAction={handleDelete} />;
    },
  },
];

import { ColumnDef } from "@tanstack/react-table";

import { toast } from "@/common/components/ui/use-toast";
import { Badge } from "@/common/components/ui/badge";
import { DeleteAlert } from "@/common/components/delete-alert";

import { Access, Plan, TestResult, User } from "../models";
import useUserStore from "@/services/state/usersStore";
import { toastMessages } from "@/common/lib/utils";
import { usersEndpoints } from "@/services/api/endpoints";
import { deleteData } from "@/services/api/requests";
import { format } from "date-fns";

export const columns: ColumnDef<User>[] = [
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
    accessorKey: "final_test",
    header: "Аттестация",
    cell: ({ row }) => {
      const finalTest = row.getValue("final_test");

      return (
        <Badge
          className={`justify-center w-full ${
            finalTest ? "bg-green-500 hover:bg-green-500/80" : "bg-red-500 hover:bg-red-500/80"
          }`}
        >
          {finalTest ? TestResult.Pass : TestResult.Fail}
        </Badge>
      );
    },
  },
  {
    accessorKey: "start_date",
    header: "Начало обучения",
    cell: ({ row }) => {
      const startDate = row.getValue("start_date") as string;
      return startDate ? format(new Date(startDate), "dd.MM.yyyy") : null;
    },
  },
  {
    accessorKey: "end_date",
    header: "Конец обучения",
    cell: ({ row }) => {
      const endDate = row.getValue("end_date") as string;
      return endDate ? format(new Date(endDate), "dd.MM.yyyy") : null;
    },
  },
  {
    accessorKey: "organization",
    header: "Организация",
  },
  {
    accessorKey: "access",
    header: "Доступ",
    cell: ({ row }) => {
      const access = row.getValue("access") as Access;

      return (
        <Badge
          className={`justify-center w-full ${
            access === Access.Открыт ? "bg-green-500 hover:bg-green-500/80" : "bg-red-500 hover:bg-red-500/80"
          }`}
        >
          {access}
        </Badge>
      );
    },
  },
  {
    accessorKey: "plan",
    header: "План",
    cell: ({ row }) => {
      const plan = row.getValue("plan") as Plan;

      return <Badge className={`justify-center w-full`}>{plan}</Badge>;
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const id = row.original?.id;
      const handleDelete = async () => {
        try {
          await deleteData(usersEndpoints.byId(id));
          useUserStore.getState().mutate();
          toast(toastMessages.success);
        } catch (error) {
          toast(toastMessages.error);
        }
      };

      return <DeleteAlert handleAction={handleDelete} />;
    },
  },
];

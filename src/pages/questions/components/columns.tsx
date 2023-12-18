import { ColumnDef } from "@tanstack/react-table";

import { toast } from "@/common/components/ui/use-toast";
import { DeleteAlert } from "@/common/components/delete-alert";

import { toastMessages } from "@/common/lib/utils";
import { questionsEndpoints } from "@/services/api/endpoints";
import { deleteData } from "@/services/api/requests";
import { Note, Question } from "../models";
import useQuestionStore from "@/services/state/questionsStore";

export const columns: ColumnDef<Question>[] = [
  {
    accessorKey: "question_code",
    header: "Код вопроса",
  },
  {
    accessorKey: "work_function",
    header: "Трудовая функция",
  },
  {
    accessorKey: "question",
    header: "Вопрос",
  },
  {
    accessorKey: "note",
    header: "Тип вопроса",
    cell: ({ row }) => {
      const note = row.getValue("note");
      switch (note) {
        case Note.Single:
          return "Одиночный";
        case Note.Multiple:
          return "Множественный";
      }
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const id = row.original?.id;
      const handleDelete = async () => {
        try {
          await deleteData(questionsEndpoints.byId(id));
          useQuestionStore.getState().mutate();
          toast(toastMessages.success);
        } catch (error) {
          toast(toastMessages.error);
        }
      };

      return <DeleteAlert handleAction={handleDelete} />;
    },
  },
];

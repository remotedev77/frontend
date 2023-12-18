import { useState } from "react";

import { Dialog, DialogContent, DialogFooter } from "@/common/components/ui/dialog";
import { Button } from "@/common/components/ui/button";
import { UpdateForm } from "./update/update-form";

import { Pencil2Icon } from "@radix-ui/react-icons";
import useQuestionStore from "@/services/state/questionsStore";
import { Note } from "../models";
import { cn } from "@/common/lib/utils";

const QuestionDetails = () => {
  const [onEdit, setOnEdit] = useState(false);
  const { detailsDialogOpen, setDetailsDialogOpen, questionDetails } = useQuestionStore();
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
            <div className="space-y-4">
              <ul className="space-y-2 text-sm">
                <li>
                  <span className="font-semibold">Тип вопроса: </span>
                  {questionDetails?.note === Note.Single ? "Одиночный" : "Множественный"}
                </li>
                <li>
                  <span className="font-semibold">Код вопроса: </span>
                  {questionDetails?.question_code}
                </li>
                <li>
                  <span className="font-semibold">Текст вопроса: </span> {questionDetails?.question}
                </li>
                <li>{/* <span className="font-semibold">Изображение: </span> {questionDetails?.image} */}</li>
                <li>
                  <span className="font-semibold">Примечание: </span> {questionDetails?.work_function}
                </li>
                <li>
                  <span className="font-semibold">Варианты: </span>
                  <div className="mt-1 space-y-2">
                    {questionDetails?.answers.map(({ id, answer, is_correct }) => (
                      <p key={id} className={cn("border shadow rounded p-2", is_correct && "text-green-500")}>
                        {answer}
                      </p>
                    ))}
                  </div>
                </li>
                <li>
                  <span className="font-semibold">Описание: </span>
                  {questionDetails?.correct_answer_description}
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

export { QuestionDetails };

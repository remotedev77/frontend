import { Button } from "@/common/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/common/components/ui/alert-dialog";

import { TrashIcon } from "@radix-ui/react-icons";

type DeleteAlertProps = {
  handleAction: () => void;
};

const DeleteAlert = ({ handleAction }: DeleteAlertProps) => {
  return (
    <div onClick={(e) => e.stopPropagation()}>
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button size="icon" className="rounded-full" variant="outline">
            <TrashIcon className="text-red-400" />
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Вы уверены, что хотите удалить?</AlertDialogTitle>
            <AlertDialogDescription>
              Это действие не может быть отменено. Это приведет к безвозвратному удалению вашей учетной записи и
              удалению ваших данных с наших серверов.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Отмена</AlertDialogCancel>
            <AlertDialogAction onClick={handleAction}>Продолжать</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export { DeleteAlert };

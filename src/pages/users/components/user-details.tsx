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
import useUserStore from "@/services/state/usersStore";
import { useGetStatistics } from "../hooks/useGetStatistics";
import { getConstantCategories } from "@/common/lib/utils";
import { Access, Categories, TestResult } from "../models";
import { Badge } from "@/common/components/ui/badge";

const UserDetails = () => {
  const [onEdit, setOnEdit] = useState(false);
  const { detailsDialogOpen, setDetailsDialogOpen, userDetails } = useUserStore();
  const { data: statistics } = useGetStatistics(userDetails?.id);
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
                {userDetails?.last_name} {userDetails?.first_name} {userDetails?.father_name}
              </DialogTitle>
              <DialogDescription>{userDetails?.organization}</DialogDescription>
            </DialogHeader>

            <div className="space-y-4">
              <ul className="space-y-2 text-sm">
                <li>
                  <span className="font-semibold">Логин: </span>
                  {userDetails?.email}
                </li>
                <li>
                  <span className="font-semibold">Доступ: </span>
                  <Badge
                    className={`justify-center ${
                      userDetails?.access === Access.Открыт
                        ? "bg-green-500  hover:bg-green-500/80"
                        : "bg-red-500 hover:bg-red-500/80"
                    }`}
                  >
                    {userDetails?.access}
                  </Badge>
                </li>
                <li>
                  <span className="font-semibold">Начало обучения: </span> {userDetails?.start_date}
                </li>
                <li>
                  <span className="font-semibold">Конец обучения: </span> {userDetails?.end_date}
                </li>
              </ul>

              <div className="space-y-2 font-semibold">
                <p className="text-lg">Статистика</p>

                <div className="flex flex-row justify-between gap-4">
                  <div className="overflow-hidden rounded-md shadow">
                    <div className="w-full py-1 bg-primary">
                      <p className="text-xs text-center text-secondary">Категории вопросов</p>
                    </div>
                    <div className="flex justify-center">
                      <ul className="p-3 text-sm">
                        {getConstantCategories(statistics?.statistic).map(({ category, statistic }) => (
                          <li key={category} className="flex gap-1">
                            <span className="w-12 text-right">{statistic}%</span>
                            <span className="text-left">{category}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex-1 h-full overflow-hidden rounded-md shadow">
                    <div className="w-full py-1 bg-primary">
                      <p className="text-xs text-center text-secondary">Общая статистика</p>
                    </div>
                    <div className="flex justify-center">
                      <div className="p-3 space-y-2 text-sm">
                        <p>
                          Итоговая аттестация:{" "}
                          <Badge
                            className={`justify-center ${
                              userDetails?.final_test
                                ? "bg-green-500 hover:bg-green-500/80"
                                : "bg-red-500 hover:bg-red-500/80"
                            }`}
                          >
                            {userDetails?.final_test ? TestResult.Pass : TestResult.Fail}
                          </Badge>
                        </p>
                        <p>
                          Готовность к экзамену:{" "}
                          {getConstantCategories(statistics?.statistic).find(
                            ({ category }) => Categories.Знаю === category
                          )?.statistic || 0}
                          %
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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

export { UserDetails };

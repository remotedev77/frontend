import { CheckIcon, Cross1Icon } from "@radix-ui/react-icons";

import { Badge } from "@/common/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardTitle } from "@/common/components/ui/card";

import { cn } from "@/common/lib/utils";
import useAuthStore from "@/services/state/authStore";

import TwoLayer from "@/assets/svg/two-layer.svg?react";

const FinalExamCard = () => {
  const { user } = useAuthStore();
  return (
    <Card className={cn("relative text-white overflow-hidden", "bg-primary")}>
      <TwoLayer className="absolute invisible top-2 lg:visible" />
      <CardContent className="pt-6 pb-0 lg:pt-14">
        <CardDescription className="max-w-sm text-xs text-white md:text-sm lg:text-base">
          Пройдите симулятор экзамена успешно более 2-х раз, чтобы открыть доступ к итоговому тестированию{" "}
        </CardDescription>
      </CardContent>
      <CardFooter>
        <CardTitle className="card-title">Итоговое тестирование</CardTitle>
        <Badge variant={"secondary"} className="relative flex gap-2 ml-auto text-sm cursor-default">
          {user?.final_test ? (
            <>
              <CheckIcon className="text-green-500" />
              <span className="hidden md:block">Сдано</span>
            </>
          ) : (
            <>
              <Cross1Icon className="text-primary" />
              <span className="hidden md:block">Не сдано</span>
            </>
          )}
        </Badge>
      </CardFooter>
    </Card>
  );
};

export default FinalExamCard;

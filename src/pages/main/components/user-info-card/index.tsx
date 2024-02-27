import { useCallback } from "react";

import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/common/components/ui/card";
import { Progress } from "@/common/components/ui/progress";

import { useGetStatistics } from "@/pages/users/hooks/useGetStatistics";

import { Categories } from "@/pages/users/models";
import useAuthStore from "@/services/state/authStore";
import { Badge } from "@/common/components/ui/badge";

const UserInfoCard = () => {
  const { user } = useAuthStore();
  const { data: statistics } = useGetStatistics();

  const getProgress = useCallback(
    () => statistics?.statistic.find(({ category }) => category === Categories.Знаю)?.statistic || 0,
    [statistics?.statistic]
  );

  return (
    <Card className="flex-grow">
      <CardHeader>
        <CardTitle className="relative card-title">
          {user?.last_name} {user?.first_name} {user?.father_name}
          <Badge className="absolute right-0 text-base uppercase size-fit">{user?.plan.charAt(0)}</Badge>
        </CardTitle>
        <CardDescription>{user?.organization}</CardDescription>
      </CardHeader>

      <CardFooter className="flex flex-col items-start max-md:hidden">
        <p>Готовность к экзамену:</p>
        <div className="flex items-center w-full gap-4">
          <Progress value={getProgress()} /> <span className="font-semibold">{getProgress()}%</span>
        </div>
      </CardFooter>
    </Card>
  );
};

export default UserInfoCard;

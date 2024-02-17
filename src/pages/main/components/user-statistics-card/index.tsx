import { Fragment, useCallback } from "react";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/common/components/ui/accordion";
import { Card, CardContent } from "@/common/components/ui/card";

import { useGetStatistics } from "@/pages/users/hooks/useGetStatistics";

import { Categories } from "@/pages/users/models";
import { getConstantCategories } from "@/common/lib/utils";
import { useMediaQuery } from "usehooks-ts";

const UserStatisticsCard = () => {
  const { data } = useGetStatistics();
  const { data: statistics } = useGetStatistics();
  const getProgress = useCallback(
    () => statistics?.statistic.find(({ category }) => category === Categories.Знаю)?.statistic || 0,
    [statistics?.statistic]
  );

  const isDesktop = useMediaQuery("(min-width: 768px)");

  return (
    <Fragment>
      {isDesktop ? (
        <Card className="text-white bg-primary max-md:hidden">
          <CardContent className="flex justify-center h-full">
            <div className="flex flex-col items-start justify-between h-full pt-6">
              {getConstantCategories(data?.statistic).map(({ category, statistic }) => (
                <div className="flex gap-2 " key={category}>
                  <p className="w-16 text-right">{statistic.toFixed(2)}%</p>
                  <p>{category}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      ) : (
        <Accordion type="single" className="px-4 border shadow md:hidden rounded-xl bg-card" collapsible>
          <AccordionItem value="user-info" className="border-b-0">
            <AccordionTrigger className="text-sm font-semibold sm:text-base hover:no-underline">
              Готовность к экзамену - {getProgress()}%
            </AccordionTrigger>
            <AccordionContent className="grid items-start justify-between h-full grid-cols-2 gap-2 font-semibold">
              {getConstantCategories(data?.statistic).map(({ category, statistic }) => (
                <div
                  className="flex flex-col items-center justify-between gap-2 p-2 px-3 pt-5 border shadow rounded-xl bg-card"
                  key={category}
                >
                  <p className="text-2xl text-transparent bg-gradient-to-r from-gray-400 to-gray-300 sm:text-4xl bg-clip-text">
                    {statistic.toFixed(2)}%
                  </p>
                  <p className="text-sm text-center sm:text-base whitespace-nowrap">{category}</p>
                </div>
              ))}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      )}
    </Fragment>
  );
};

export default UserStatisticsCard;

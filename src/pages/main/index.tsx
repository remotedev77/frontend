import { Header } from "@/common/components/header";
import UserInfoCard from "./components/user-info-card";
import UserStatisticsCard from "./components/user-statistics-card";
import FinalExamCard from "./components/final-exam-card";
import ExamCard from "./components/exam-card";
import CategoryCard from "./components/category-card";
import { Skeleton } from "@/common/components/ui/skeleton";

import { useGetStatistics } from "@/pages/users/hooks/useGetStatistics";

import Watch from "@/assets/svg/watch.svg?react";
import Cards from "@/assets/svg/cards.svg?react";
import BlackCard from "@/assets/svg/black-card.svg?react";
import GreenCard from "@/assets/svg/green-card.svg?react";
import YellowCard from "@/assets/svg/yellow-card.svg?react";
import RedCard from "@/assets/svg/red-card.svg?react";

const categoryIcons = [BlackCard, GreenCard, YellowCard, RedCard];

const Main = () => {
  const { data, isLoading, error } = useGetStatistics();

  return (
    <div>
      <Header />
      <div className="max-w-screen-lg p-2 mx-auto space-y-4 lg:p-5">
        <div className="flex flex-col justify-between gap-4 md:flex-row">
          <UserInfoCard />
          <UserStatisticsCard />
        </div>

        <FinalExamCard />

        <div className="flex flex-col justify-between gap-4 md:flex-row">
          <ExamCard title="Симулятор экзамена" icon={Watch} />
          <ExamCard title="Марафон" icon={Cards} />
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
          {isLoading
            ? Array.from({ length: 4 }).map((_, index) => (
                <Skeleton className="w-full h-24 md:h-28 lg:h-40" key={index} />
              ))
            : error
            ? null
            : data?.category_counts?.map(({ category, category_count }, index) => (
                <CategoryCard key={category} title={category} count={category_count} icon={categoryIcons[index]} />
              ))}
        </div>
      </div>
    </div>
  );
};

export default Main;

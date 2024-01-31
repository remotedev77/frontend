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
import ExamLink from "./components/exam-link";
import useAuthStore from "@/services/state/authStore";
import { getCategories } from "@/common/lib/utils";

const categoryIcons = [BlackCard, GreenCard, YellowCard, RedCard];

const Main = () => {
  const { user } = useAuthStore();
  const { data, isLoading, error } = useGetStatistics();

  return (
    <div>
      <Header />
      <div className="w-full min-h-full space-y-4 layout">
        <div className="flex flex-col justify-between gap-4 md:flex-row">
          <UserInfoCard />
          <UserStatisticsCard />
        </div>

        <div>
          {user?.main_test_count && user?.main_test_count > 2 ? (
            <ExamLink key="final-test" examType="final-test" examId="final-test">
              <FinalExamCard />
            </ExamLink>
          ) : (
            <FinalExamCard />
          )}
        </div>

        <div className="flex flex-col justify-between gap-4 md:flex-row">
          <ExamLink key="simulation" examType="simulation" examId="simulation">
            <ExamCard title="Симулятор экзамена" icon={Watch} />
          </ExamLink>

          <ExamLink key="marathon" examType="marathon" examId="marathon">
            <ExamCard title="Марафон" icon={Cards} />
          </ExamLink>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
          {isLoading
            ? Array.from({ length: 4 }).map((_, index) => (
                <Skeleton className="w-full h-24 md:h-28 lg:h-40" key={index} />
              ))
            : error
            ? null
            : getCategories(data?.category_counts)?.map(({ category, category_count }, index) =>
                category_count ? (
                  <ExamLink key={category} examType="category" examId={category}>
                    <CategoryCard key={category} title={category} count={category_count} icon={categoryIcons[index]} />
                  </ExamLink>
                ) : null
              )}
        </div>
      </div>
    </div>
  );
};

export default Main;

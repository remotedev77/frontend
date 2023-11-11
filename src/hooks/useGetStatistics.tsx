import useSWR from "swr";
import { getData } from "@/api/apis";
import { IStatistics } from "@/types/statistics";

const useGetStatistics = () => {
  const {
    data: statisticsData,
    isLoading: statisticsLoading,
    error: statisticsError,
  } = useSWR<IStatistics>("/app/get-user-statistic/", getData);
  return { statisticsData, statisticsLoading, statisticsError };
};

export default useGetStatistics;

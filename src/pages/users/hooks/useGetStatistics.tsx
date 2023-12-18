import { usersEndpoints } from "@/services/api/endpoints";
import { getData } from "@/services/api/requests";
import useSWR from "swr";
import { IStatistics } from "../models";

type UseGetStatisticsProps = {
  id?: number;
};

const useGetStatistics = ({ id }: UseGetStatisticsProps) => {
  return useSWR<IStatistics>(id ? usersEndpoints.statistics(id) : null, getData);
};

export { useGetStatistics };

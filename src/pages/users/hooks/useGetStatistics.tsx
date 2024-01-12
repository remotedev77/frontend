import { appEndpoints, usersEndpoints } from "@/services/api/endpoints";
import { getData } from "@/services/api/requests";
import useSWR from "swr";
import { IStatistics } from "../models";

const useGetStatistics = (id?: number) => {
  return useSWR<IStatistics>(id ? usersEndpoints.statistics(id) : appEndpoints.statistics, getData);
};

export { useGetStatistics };

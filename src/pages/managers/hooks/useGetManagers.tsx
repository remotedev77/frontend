import useGetDataWithPagination from "@/common/hooks/useGetDataWithPagination";
import { Manager } from "../models";
import { managersEndpoints } from "@/services/api/endpoints";
import { FilterParams } from "@/common/types";

type UseGetManagersProps = FilterParams;

const useGetManagers = (params?: UseGetManagersProps) => {
  return useGetDataWithPagination<Manager>(managersEndpoints.search(params));
};

export { useGetManagers };

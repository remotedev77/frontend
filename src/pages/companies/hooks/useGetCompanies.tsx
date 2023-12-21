import useGetDataWithPagination from "@/common/hooks/useGetDataWithPagination";
import { Company } from "../models";
import { companiesEndpoints } from "@/services/api/endpoints";
import { FilterParams } from "@/common/types";

type UseGetCompaniesProps = FilterParams;

const useGetCompanies = (params?: UseGetCompaniesProps) => {
  return useGetDataWithPagination<Company>(companiesEndpoints.search(params));
};

export { useGetCompanies };

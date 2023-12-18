import useSWR from "swr";

import { companiesEndpoints } from "@/services/api/endpoints";
import { getData } from "@/services/api/requests";
import { Companies } from "../models";

const useGetAllCompanies = () => {
  return useSWR<Companies[]>(companiesEndpoints.base, getData);
};

export { useGetAllCompanies };

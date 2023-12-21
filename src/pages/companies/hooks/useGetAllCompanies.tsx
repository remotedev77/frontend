import useSWR from "swr";

import { companiesEndpoints } from "@/services/api/endpoints";
import { getData } from "@/services/api/requests";
import { Company } from "../models";

const useGetAllCompanies = () => {
  return useSWR<Company[]>(companiesEndpoints.base, getData);
};

export { useGetAllCompanies };

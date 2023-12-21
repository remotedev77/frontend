import useSWR from "swr";

import { managersEndpoints } from "@/services/api/endpoints";
import { getData } from "@/services/api/requests";
import { Manager } from "../models";

const useGetAllManagers = () => {
  return useSWR<Manager[]>(managersEndpoints.base, getData);
};

export { useGetAllManagers };

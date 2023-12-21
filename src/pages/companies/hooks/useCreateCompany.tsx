import useSWRMutation from "swr/mutation";

import { companiesEndpoints } from "@/services/api/endpoints";
import { postData } from "@/services/api/requests";

const useCreateCompany = () => {
  return useSWRMutation(companiesEndpoints.base, postData);
};

export default useCreateCompany;

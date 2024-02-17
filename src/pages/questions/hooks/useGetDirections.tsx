import useSWR from "swr";

import { Direction } from "@/pages/admin/models";

import { directionsEndpoints } from "@/services/api/endpoints";
import { getData } from "@/services/api/requests";

const useGetDirections = () => {
  return useSWR<Direction[]>(directionsEndpoints.base, getData);
};

export { useGetDirections };

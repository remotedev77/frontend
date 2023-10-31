import useSWR from "swr";
import { authService } from "../api/api.auth";
import { UserDTO } from "../types";
import { useContext, useEffect } from "react";
import { RootStoreContext } from "../app.view";

const useGetUserData = () => {
  const {
    data: userData,
    isLoading,
    error,
  } = useSWR<UserDTO>(authService.getUserEndpoint, authService.getUser);
  const { userStore } = useContext(RootStoreContext);
  useEffect(() => {
    userData && userStore.setUserData(userData);
  }, [userData, userStore]);
  return { userData, isLoading, error };
};

export default useGetUserData;

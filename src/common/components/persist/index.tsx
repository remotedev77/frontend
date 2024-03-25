import { Navigate, Outlet } from "react-router-dom";

import useAuthStore from "@/services/state/authStore";
import { Spinner } from "../spinner";

const Persist = () => {
  const { isAuth } = useAuthStore();

  if (isAuth === undefined) return <Spinner />;

  if (!isAuth || isAuth === undefined) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};
export { Persist };

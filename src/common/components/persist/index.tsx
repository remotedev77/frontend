import { Navigate, Outlet } from "react-router-dom";

import useAuthStore from "@/services/state/authStore";
import { Spinner } from "../spinner";

const Persist = () => {
  const { isAuth } = useAuthStore();

  console.log(isAuth);
  if (isAuth === undefined) return <Spinner />;
  return isAuth ? <Outlet /> : <Navigate to="/login" replace />;
};
export { Persist };

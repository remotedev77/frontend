import { Navigate, Outlet } from "react-router-dom";

import useAuthStore from "@/services/state/authStore";
import { Spinner } from "../spinner";

const Persist = () => {
  const { isAuth } = useAuthStore();
  if (!isAuth) return <Spinner />;
  return isAuth ? <Outlet /> : <Navigate to="/login" replace />;
};
export { Persist };

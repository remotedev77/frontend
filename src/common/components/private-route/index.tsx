import { Navigate, Outlet, useLocation } from "react-router-dom";

import useAuthStore from "@/services/state/authStore";
import { checkPermission } from "@/common/lib/utils";

const PrivateRoute = () => {
  const { user } = useAuthStore();
  const { pathname } = useLocation();

  return checkPermission(user) ? (
    pathname.includes("admin") ? (
      <Outlet />
    ) : (
      <Navigate to="/admin" replace />
    )
  ) : pathname.includes("admin") ? (
    <Navigate to="/" />
  ) : (
    <Outlet />
  );
};

export { PrivateRoute };

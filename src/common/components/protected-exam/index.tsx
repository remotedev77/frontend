import useAuthStore from "@/services/state/authStore";
import { Navigate, Outlet, useSearchParams } from "react-router-dom";

const ProtectedExam = () => {
  const { user } = useAuthStore();
  const [searchParams] = useSearchParams();
  const examName = searchParams.get("name");

  if (!examName) {
    return <Navigate to="/" />;
  } else if (user?.closed_tests.find((closedTest) => closedTest === examName)) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
};

export default ProtectedExam;

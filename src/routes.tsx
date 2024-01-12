import { Navigate, Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import { lazily } from "react-lazily";
import useAuthStore from "./services/state/authStore";
import Main from "./pages/main";

const { Persist } = lazily(() => import("./common/components/persist"));
const { PrivateRoute } = lazily(() => import("./common/components/private-route"));
const { SignIn } = lazily(() => import("./pages/sign-in"));
const { Admin } = lazily(() => import("./pages/admin"));
const { Users } = lazily(() => import("./pages/users"));
const { Questions } = lazily(() => import("./pages/questions"));
const { Companies } = lazily(() => import("./pages/companies"));
const { Managers } = lazily(() => import("./pages/managers"));
/*
    Not Found
    Login --> 
    role = Admin or Manager: 
        Admin
            Users
            Questions
            Companies
            Managers
    role = User:
        Simulation
            Final-Test
            Exam-Simulation
            Marathon
            Not-Decided  
            Know
            Make-Mistake
            Do-Not-Know

            Start
            Exam
            Result

*/

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="*" />
      <Route element={<Persist />}>
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Main />} />

          <Route path="admin" element={<Admin />}>
            <Route index element={<Users />} />
            <Route path="questions" element={<Questions />} />
            <Route path="companies" element={<Companies />} />
            <Route path="managers" element={<Managers />} />

            {/* user?.role === Role.Manager */}
          </Route>
        </Route>
      </Route>
      <Route
        index
        path="login"
        element={
          useAuthStore.getState().isAuth !== undefined && useAuthStore.getState().isAuth ? (
            <Navigate to="/" replace />
          ) : (
            <SignIn />
          )
        }
      />
    </Route>
  )
);

export default router;
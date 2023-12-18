import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Card, CardContent, CardHeader, CardTitle } from "@/common/components/ui/card";
import { SignInForm } from "./components/sign-in-form";

import useAuthStore from "@/services/state/authStore";

const SignIn = () => {
  const navigate = useNavigate();
  const { isAuth } = useAuthStore();

  useEffect(() => {
    isAuth && navigate("/");
  }, [isAuth, navigate]);

  return (
    <div className="grid w-full min-h-screen place-items-center">
      <Card className="w-full max-w-xl">
        <CardHeader>
          <CardTitle className="text-xl text-center">Авторизоваться</CardTitle>
        </CardHeader>
        <CardContent>
          <SignInForm />
        </CardContent>
      </Card>
    </div>
  );
};

export { SignIn };

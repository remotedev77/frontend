import { useNavigate } from "react-router-dom";
import VerifyOTPForm from "./components/verify-otp-form";
import useAuthStore from "@/services/state/authStore";
import { useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/common/components/ui/card";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import { Button } from "@/common/components/ui/button";

const VerifyOTP = () => {
  const navigate = useNavigate();
  const { isAuth } = useAuthStore();

  useEffect(() => {
    if (isAuth) {
      return navigate("/");
    }
  }, [isAuth, navigate]);

  return (
    <div className="container flex flex-col px-4 py-12 min-h-dvh">
      <Button
        variant="ghost"
        className="self-start space-x-2 capitalize lg:ml-12 "
        onClick={() => {
          navigate("/");
        }}
      >
        <ArrowLeftIcon className="size-4" />
        <div>назад</div>
      </Button>

      <div className="flex items-center justify-center grow">
        <Card className="w-full max-w-lg">
          <CardHeader>
            <CardTitle className="text-xl sm:text-2xl xl:text-3xl">Одноразовый пароль</CardTitle>
            <CardDescription className="text-xs sm:text-sm">
              Пожалуйста, введите одноразовый пароль, отправленный на ваш телефон.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <VerifyOTPForm />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export { VerifyOTP };

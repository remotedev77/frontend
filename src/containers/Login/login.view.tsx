import { useContext } from "react";
import { observer } from "mobx-react";
import styled from "@emotion/styled";
import { lazily } from "react-lazily";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import { RootStoreContext } from "@/app.view.tsx";
import { LoginViewModel } from "./login.vm.ts";

const { Input } = lazily(() => import("@/components"));

const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;
const AuthForm = styled.form`
  display: flex;
  flex-flow: column;
  align-items: center;
  max-width: 400px;
  width: 100%;
  margin-top: 40px;

  @media only screen and (min-width: 1024px) {
    margin-top: 75px;
  }
`;
const AuthButton = styled.button`
  cursor: pointer;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 15px;
  background: #f3673e;
  color: #fff;
  font-family: "Inter", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  border: none;
  padding: 8px 40px;

  @media only screen and (min-width: 1024px) {
    font-size: 16px;
  }
`;

const Auth = styled.div`
  display: flex;
  flex-flow: column;
  max-width: 1180px;
  width: 100%;
  flex-shrink: 0;
  border-radius: 30px;
  background: #fff;
  box-shadow: 0px 4px 46px 0px rgba(0, 0, 0, 0.25);
  align-items: center;
  justify-content: center;
  padding: 50px 15px;
`;
const Text = styled.p`
  color: #505050;
  /* font-family: Inter, sans-serif; */
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  @media only screen and (min-width: 1024px) {
    font-size: 28px;
  }
`;

export const Login = observer(() => {
  const { authStore } = useContext(RootStoreContext);
  const navigate = useNavigate();
  const vm = new LoginViewModel(authStore);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await vm.login();
    res === true ? navigate("/") : toast.error("Username or Password wrong!");
  };

  return (
    <LoginContainer className="container">
      <Auth>
        <Text>Авторизация</Text>
        <AuthForm onSubmit={handleSubmit}>
          <Input
            placeholder="Логин"
            onChange={(e) => vm.onUsernameChange(e.target.value)}
            required
          />
          <Input
            placeholder="Пароль"
            type="password"
            onChange={(e) => vm.onPasswordChange(e.target.value)}
            required
          />
          <AuthButton type="submit">Войти</AuthButton>
        </AuthForm>
      </Auth>
    </LoginContainer>
  );
});

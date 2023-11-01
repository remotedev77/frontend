import { observer } from "mobx-react";
import styled from "@emotion/styled";
import { useContext } from "react";
import { Input } from "../../components";
import { LoginViewModel } from "./login.vm.ts";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { RootStoreContext } from "../../app.view.tsx";

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
  margin-top: 66px;
`;
const AuthButton = styled.button`
  cursor: pointer;
  display: flex;
  width: 259px;
  padding: 15px 40px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 15px;
  background: #f3673e;
  color: #fff;
  font-family: "Inter", sans-serif;
  font-size: 30px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  border: none;
`;

const Auth = styled.div`
  display: flex;
  flex-flow: column;
  width: 1180px;
  height: 500px;
  flex-shrink: 0;
  border-radius: 30px;
  background: #fff;
  box-shadow: 0px 4px 46px 0px rgba(0, 0, 0, 0.25);
  align-items: center;
  justify-content: center;
`;
const Text = styled.p`
  color: #505050;
  font-family: Inter, sans-serif;
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
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
    <LoginContainer>
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

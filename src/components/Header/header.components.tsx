import { useContext } from "react";
import styled from "@emotion/styled";
import { observer } from "mobx-react";
import { RootStoreContext } from "@/app.view";

export const Header = observer(() => {
  const { authStore } = useContext(RootStoreContext);

  const Header = styled.header`
    top: 0;
    background: #ffffff;
    width: 100%;
    display: none;
    justify-content: space-between;
    box-shadow: 0px 10px 15px 0px rgba(0, 0, 0, 0.25);
    padding: 12px 40px;
    align-items: center;
    position: absolute;
    height: 56px;
    z-index: 10;

    @media only screen and (min-width: 1024px) {
      display: flex;
    }
  `;

  const Title = styled.h1`
    font-size: 22px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  `;

  const LogoutButton = styled.button`
    border-radius: 40px;
    background: #f3673e;
    padding: 4px 20px;
    border: 0;
    box-shadow: 0px 4px 19px 0px rgba(0, 0, 0, 0.25);
    cursor: pointer;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    color: #ffffff;
  `;

  return (
    <Header>
      <Title>Тренажер НОК</Title>
      <LogoutButton onClick={authStore?.logout}>Выйти</LogoutButton>
    </Header>
  );
});

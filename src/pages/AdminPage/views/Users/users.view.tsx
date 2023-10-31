import { observer } from "mobx-react";
import styled from "@emotion/styled";
import { UsersVm } from "./users.vm.ts";
import { Input } from "../../../../components";
import { Button } from "../../../../components/Button/button.component.tsx";

export const Users = observer(() => {
  const vm = UsersVm;
  const Container = styled.div`
    margin-top: 64px;
    align-items: center;
    height: 100vh;
    width: 100%;
    display: flex;
    flex-flow: column;
  `;
  const Label = styled.label`
    display: flex;
    align-items: center;
    color: #000;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-bottom: 20px;
  `;
  const InputCheckbox = styled.input`
    margin-right: 15px;
    width: 16px;
    height: 16px;
  `;
  const AddUser = styled.div`
    margin-bottom: 20px;
  `;
  const UsersTable = styled.table`
    width: 100%;
    border: none;
    margin-bottom: 20px;

    tbody tr:nth-child(even) {
      background: #f3f3f3;
    }

    tbody tr td:first-child {
      border-radius: 8px 0 0 8px;
    }

    tbody tr td:last-child {
      border-radius: 0 8px 8px 0;
    }
  `;
  const UsersTHead = styled.thead`
    th:last-child {
      border-radius: 0 8px 8px 0;
    }

    th:first-child {
      border-radius: 8px 0 0 8px;
    }
  `;
  const UserHeadRow = styled.tr``;
  const UsersHeadCell = styled.th`
    font-weight: bold;
    text-align: left;
    border: none;
    padding: 10px 15px;
    background: #d8d8d8;
    font-size: 14px;
  `;
  const UsersRow = styled.tr``;
  const UsersCell = styled.td`
    text-align: left;
    border: none;
    padding: 10px 15px;
    font-size: 14px;
    vertical-align: top;
  `;
  const TableHeader = () => (
    <UsersTHead>
      <UserHeadRow>
        <UsersHeadCell>Логин</UsersHeadCell>
        <UsersHeadCell>Пароль</UsersHeadCell>
        <UsersHeadCell>Администратор</UsersHeadCell>
        <UsersHeadCell></UsersHeadCell>
      </UserHeadRow>
    </UsersTHead>
  );

  return (
    <Container>
      <AddUser>
        <Input
          onChange={(e) => vm.changeName(e.target.value)}
          textSize={16}
          placeholder={"Логин"}
        />
        <Input
          onChange={(e) => vm.changePassword(e.target.value)}
          textSize={16}
          placeholder={"Пароль"}
        />
        <Label>
          <InputCheckbox
            type="checkbox"
            onChange={(e) => {
              vm.changeRole(e.target.checked);
            }}
          />
          Администратор
        </Label>
        <Button
          onClick={() => {
            vm.addUser()
              .then(() => {
                console.log("success");
              })
              .catch((err) => {
                console.log(err);
              });
            console.log(vm.name, vm.password, vm.isNewUsserAdmin);
          }}
          size={16}
          primary
        >
          Добавить пользователя
        </Button>
      </AddUser>
      <UsersTable cellSpacing={0}>
        <TableHeader />
        <tbody>
          {vm.users.map((e) => (
            <UsersRow>
              <UsersCell>{e.name} </UsersCell>
              <UsersCell>{e.password}</UsersCell>
              <UsersCell>{e.isAdmin ? "Да" : "Нет"}</UsersCell>
              <UsersCell>
                <button onClick={() => vm.removeUser(e.name)}>Удалить</button>
              </UsersCell>
            </UsersRow>
          ))}
        </tbody>
      </UsersTable>
    </Container>
  );
});

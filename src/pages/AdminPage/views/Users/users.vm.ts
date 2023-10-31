import { makeAutoObservable } from "mobx";

interface User {
  name: string;
  password: string;
  isAdmin: boolean;
}
export const UsersVm = new (class {
  name: string = "";
  password: string = "";
  isNewUsserAdmin: boolean = false;
  users: User[];

  changeName(name: string) {
    this.name = name;
  }

  changePassword(password: string) {
    this.password = password;
  }

  changeRole(isAdmin: boolean) {
    this.isNewUsserAdmin = isAdmin;
  }

  addUser = async () => {
    this.users.push({
      name: this.name,
      password: this.password,
      isAdmin: this.isNewUsserAdmin,
    });
  };
  removeUser = async (name: string) => {
    this.users = this.users.filter((u) => u.name !== name);
  };
  // private createNewUser = async () => {
  //   //todo ручки с бэка
  // };
  constructor() {
    makeAutoObservable(this);
    this.users = [
      { name: "Alex", password: "123", isAdmin: true },
      { name: "Anon", password: "321", isAdmin: false },
    ];
  }
})();

import { makeAutoObservable } from "mobx";
import { UserDTO } from "../types";
import { RootStore } from "./root.store";

export class UserStore {
  userData: UserDTO | undefined;
  rootStore: RootStore;

  constructor(rootStore: RootStore) {
    makeAutoObservable(this, {}, { autoBind: true });
    this.rootStore = rootStore;
  }

  setUserData = (newUserData: UserDTO) => (this.userData = { ...newUserData });
  deleteUserData = () => (this.userData = undefined);
}

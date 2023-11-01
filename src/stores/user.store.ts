import { makeAutoObservable } from "mobx";
import { UserDTO } from "../types";
import { RootStore } from "./root.store";

export class UserStore {
  userData: UserDTO | undefined;
  isFinalExamPassed: boolean = false;
  isExamPassed: boolean = false;
  rootStore: RootStore;

  constructor(rootStore: RootStore) {
    makeAutoObservable(this, {}, { autoBind: true });
    this.rootStore = rootStore;
  }

  setUserData = (newUserData: UserDTO) => (this.userData = { ...newUserData });
  deleteUserData = () => (this.userData = undefined);
  setIsFinalExamPass = (isPassed: boolean) =>
    (this.isFinalExamPassed = isPassed);
  setIsExamPass = (isPassed: boolean) => (this.isExamPassed = isPassed);
}

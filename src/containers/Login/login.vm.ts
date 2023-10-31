import { AuthStore } from "../../stores/auth.store.ts";
import { makeAutoObservable } from "mobx";

export class LoginViewModel {
  private authStore: AuthStore;
  password = "";
  username = "";

  onUsernameChange(username: string) {
    this.username = username;
  }

  onPasswordChange(password: string) {
    this.password = password;
  }

  async login() {
    return await this.authStore.login(this.username, this.password);
  }

  constructor(authStore: AuthStore) {
    makeAutoObservable(this);
    this.authStore = authStore;
  }
}

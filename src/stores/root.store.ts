import { AuthStore } from "./auth.store";
import { UserStore } from "./user.store";

export class RootStore {
  userStore: UserStore;
  authStore: AuthStore;
  constructor() {
    this.userStore = new UserStore(this);
    this.authStore = new AuthStore(this);
  }
}

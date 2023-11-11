import { makeAutoObservable } from "mobx";
import { authService } from "@/api/api.auth.ts";
import { RootStore } from "./root.store.ts";
import { AxiosError } from "axios";

export class AuthStore {
  isAdmin = false;
  isAuth = false;
  isAuthInProgress = true;
  rootStore: RootStore;

  constructor(rootStore: RootStore) {
    makeAutoObservable(this, {}, { autoBind: true });
    this.rootStore = rootStore;
  }

  async login(email: string, password: string) {
    this.isAuthInProgress = true;
    try {
      const res = await authService.login(email, password);
      localStorage.setItem("accessToken", res?.data?.access);
      localStorage.setItem("refreshToken", res?.data?.refresh);
      this.isAuth = true;
    } catch (err) {
      if (err instanceof AxiosError) return err;
    } finally {
      this.isAuthInProgress = false;
    }

    return this.isAuth;
  }

  async checkAuth() {
    this.isAuthInProgress = true;
    try {
      const refreshToken = localStorage.getItem("refreshToken") || "";
      const res = await authService.refreshToken(refreshToken);
      localStorage.setItem("accessToken", res?.data?.access);
      this.isAuth = true;
    } catch (err) {
      this.logout();
    } finally {
      this.isAuthInProgress = false;
    }
  }

  async logout() {
    this.isAuthInProgress = true;
    this.isAuth = false;
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    this.isAuthInProgress = false;
    this.rootStore.userStore.reset();
  }
}

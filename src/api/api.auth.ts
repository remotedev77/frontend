import { instance } from "./api.config.js";

export const authService = {
  getUserEndpoint: "/auth/user/",
  getAdminUserEndpoint: "/auth/user/",
  login(email: string, password: string) {
    return instance.post("/auth/login/", { email, password });
  },
  refreshToken(refresh: string) {
    return instance.post("/auth/token/refresh/", { refresh });
  },
  async getUser() {
    return (await instance.get(authService.getUserEndpoint)).data;
  },

  async getAdminUser() {
    return (await instance.get(authService.getAdminUserEndpoint)).data;
  },
};

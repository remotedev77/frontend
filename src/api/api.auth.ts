import { instance } from "./api.config.js";

export const authService = {
  getUserEndpoint: "/user/get-user/",
  login(email: string, password: string) {
    return instance.post("/user/login/", { email, password });
  },
  refreshToken(refresh: string) {
    return instance.post("/user/token/refresh/", { refresh });
  },
  async getUser() {
    return (await instance.get(authService.getUserEndpoint)).data;
  },
};

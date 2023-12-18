import { Params } from "@/common/types";

const authEndpoints = {
  signIn: "auth/login/",
  refreshToken: "auth/token/refresh/",
  currentUser: "auth/user/",
};

const usersEndpoints = {
  base: "users/",
  byId: (id: number) => `users/${id}/`,
  uploadFile: "users/upload-csv-user-file/",
  statistics: (id: number) => `users/statistics/${id}/`,
  search: (params?: Params) =>
    `users?${
      params
        ? Object.entries(params)
            .map(([key, value]) => (value ? `${key}=${value}&` : ""))
            .join("")
        : ""
    }`,
};

const companiesEndpoints = {
  base: "companies/",
  byId: (id: number) => `companies/${id}/`,
};

const questionsEndpoints = {
  base: "questions/",
  byId: (id: number) => `questions/${id}/`,
  uploadFile: "questions/upload-csv-question-file",
};

export { authEndpoints, usersEndpoints, companiesEndpoints, questionsEndpoints };

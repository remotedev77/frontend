import { FilterParams } from "@/common/types";

const authEndpoints = {
  signIn: "auth/login/",
  refreshToken: "auth/token/refresh/",
  currentUser: "auth/user/",
};

const appEndpoints = {
  statistics: "app/statistics/",
};

const usersEndpoints = {
  base: "users/",
  byId: (id: number) => `users/${id}/`,
  uploadFile: "users/upload-csv-user-file/",
  statistics: (id: number) => `users/statistics/${id}/`,
  search: (params?: FilterParams) =>
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
  search: (params?: FilterParams) =>
    `companies?${
      params
        ? Object.entries(params)
            .map(([key, value]) => (value ? `${key}=${value}&` : ""))
            .join("")
        : ""
    }`,
};

const questionsEndpoints = {
  base: "questions/",
  byId: (id: number) => `questions/${id}/`,
  uploadFile: "questions/upload-csv-question-file",
  search: (params?: FilterParams) =>
    `questions?${
      params
        ? Object.entries(params)
            .map(([key, value]) => (value ? `${key}=${value}&` : ""))
            .join("")
        : ""
    }`,
};
const managersEndpoints = {
  base: "managers/",
  byId: (id: number) => `managers/${id}/`,
  search: (params?: FilterParams) =>
    `managers?${
      params
        ? Object.entries(params)
            .map(([key, value]) => (value ? `${key}=${value}&` : ""))
            .join("")
        : ""
    }`,
};
const directionsEndpoints = {
  base: "directions/",
};

export {
  authEndpoints,
  appEndpoints,
  usersEndpoints,
  companiesEndpoints,
  questionsEndpoints,
  managersEndpoints,
  directionsEndpoints,
};

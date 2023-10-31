import axios from "axios";
import { RootStore } from "../stores/root.store";

const baseUrl = import.meta.env.VITE_API_BASE_URL;

export const instance = axios.create({
  withCredentials: true,
  baseURL: baseUrl,
});

instance.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem(
    "accessToken"
  )}`;
  return config;
});

instance.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    if (error.response.status === 401) {
      new RootStore().authStore.checkAuth();
      return instance.request(error);
    }
    throw error;
  }
);

import axios, { AxiosRequestConfig } from "axios";
import store from "./store/store";
import { AuthAction } from "./store/auth/action";
import { authApi } from "./service/auth.service";

export const axiosInstance = axios.create({
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  baseURL: "http://localhost:3000/",
  withCredentials: true,
});
axiosInstance.interceptors.request.use((config: AxiosRequestConfig) => {
  const token = authApi.getToken();
  if (token) config.headers["Authorization"] = `Bearer ` + token;
  config.headers["Authorization"] = token;
  return config;
});
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if (error.response.status !== 401) return Promise.reject(error);
    if (
      error.config.url === "auth/refresh-token" ||
      error.message === "refreshToken exist"
    ) {
      store.dispatch(AuthAction.setAuthFailed(true));
      store.dispatch(AuthAction.setError(error.response.data.message));
      return error;
    }
    const responce = await authApi.RefreshToken();
    if (!responce.data) return error;
    authApi.setToken(responce.data.accessToken);
    store.dispatch(AuthAction.setIsAuth(true));
    error.config.headers["Authorization"] = authApi.getToken();
    return axiosInstance.request(error.config);
  }
);

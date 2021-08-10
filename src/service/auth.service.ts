import { ITodo } from "../models/todo.model";
import { axiosInstance } from "../api";
import axios, { AxiosResponse, AxiosRequestConfig } from "axios";
import { useDispatch } from "react-redux";
import { AuthAction } from "../store/auth/action";
import { useHistory } from "react-router-dom";
import store from "../store/store";

export interface AuthProps {
  email: string;
  password: string;
}

export interface RegisterProps {
  email: string;
  password: string;
  name: string;
}
axiosInstance.interceptors.request.use((config: AxiosRequestConfig) => {
  const token = authApi.getToken();
  if (token) config.headers["Authorization"] = `Bearer ` + token;
  config.headers["Authorization"] = token;
  return config;
});
axiosInstance.interceptors.response.use(
  (response) => {
    console.log(response);
    return response;
  },
  async (error) => {
    console.log(error);
    if (error.response.status === 401) {
      const responce = await authApi.RefreshToken();
      if (!responce.data) return error;
      authApi.setToken(responce.data.accessToken);
      store.dispatch(AuthAction.setIsAuth(true));
      error.config.headers["Authorization"] = authApi.getToken();
      return axiosInstance.request(error.config);
    }
    return error;
  }
);

export const authApi = {
  isAuth() {
    const token = authApi.getToken();
    return !!token;
  },
  LogIn(User: AuthProps): Promise<AxiosResponse<{ accessToken: string }>> {
    return axiosInstance.post("auth/login", { ...User });
  },
  getToken(): string | null {
    return localStorage.getItem("token");
  },
  setToken(token: string) {
    localStorage.setItem("token", token);
  },
  LogOut() {
    localStorage.removeItem("token");
  },
  Registration(
    User: RegisterProps
  ): Promise<AxiosResponse<{ accessToken: string }>> {
    return axiosInstance.post("auth/registration", { ...User });
  },
  RefreshToken(): Promise<AxiosResponse<{ accessToken: string }>> {
    return axiosInstance.post("auth/refresh-token");
  },
};

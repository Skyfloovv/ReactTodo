import { ITodo } from "../models/todo.model";
import { axiosInstance } from "../api";
import axios, { AxiosResponse } from "axios";

export interface AuthProps {
  email: string;
  password: string;
}

export interface RegisterProps {
  email: string;
  password: string;
  name: string;
}

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
  Registration(User: RegisterProps): Promise<AxiosResponse<string>> {
    return axiosInstance.post("auth/registration", { ...User });
  },
};

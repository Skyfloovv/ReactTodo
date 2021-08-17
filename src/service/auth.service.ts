import { axiosInstance } from "../api";
import { AxiosResponse } from "axios";

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
    const res = axiosInstance.post("auth/logout");
    if (!res) return;
    localStorage.removeItem("token");
    return res;
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

import axios, { AxiosResponse } from "axios";
import { FilterType, ITodo } from "./models/todo.model";
import { AuthProps } from "./service/auth.service";

export const axiosInstance = axios.create({
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  baseURL: "http://localhost:3000/",
});

export const todoApi = {
  addTodo(todo: string): Promise<ITodo> {
    return axiosInstance.post("todo", { text: todo });
  },

  getAllTodos(): Promise<ITodo[]> {
    return axiosInstance.get("todo");
  },

  getTodo(id: string): Promise<AxiosResponse<ITodo>> {
    return axiosInstance.get("todo/" + id, { params: id });
  },

  updateTodo(todo: ITodo): Promise<ITodo> {
    return axiosInstance.patch("todo/" + todo._id, todo);
  },

  removeTodo(id: string | number): Promise<any> {
    return axiosInstance.delete("todo/" + id);
  },

  removeTodos(filter: FilterType): Promise<any> {
    return axiosInstance.delete("todo/group/" + filter);
  },
};

export const authApi = {
  LogIn(User: AuthProps): Promise<ITodo> {
    return axiosInstance.post("auth/login", { User });
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
};

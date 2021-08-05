import axios, { AxiosResponse, AxiosInstance } from "axios";
import { ITodo } from "./models/todo.model";

export const axiosInstance = axios.create({
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  baseURL: "http://localhost:3000/",
});

export const todoApi = {
  addTodo(todo: string): Promise<ITodo> {
    return axiosInstance.post("todo", { todo });
  },

  getAllTodos(): Promise<ITodo[]> {
    return axiosInstance.get("todo");
  },

  getTodo(id: number): Promise<ITodo> {
    return axiosInstance.get("todo", { params: id });
  },

  updateTodo(todo: ITodo): Promise<ITodo> {
    return axiosInstance.patch("todo", todo, { params: todo._id });
  },

  removeTodo(id: string | number): Promise<any> {
    return axiosInstance.delete("todo/" + id);
  },
};

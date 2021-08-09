import { FilterType, ITodo } from "../models/todo.model";
import { AxiosResponse } from "axios";
import { axiosInstance } from "../api";

export const todoApi = {
  addTodo(todo: string): Promise<ITodo> {
    return axiosInstance.post("todo", { text: todo });
  },

  getAllTodos(): Promise<ITodo[]> {
    return axiosInstance.get("todo");
  },

  getTodo(id: string): Promise<AxiosResponse<ITodo>> {
    return axiosInstance.get("todo/" + id);
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

export const filterTodoForType = (
  filter: FilterType,
  todos: ITodo[]
): ITodo[] => {
  switch (filter) {
    case FilterType.ALL: {
      return todos;
    }
    case FilterType.DONE: {
      return todos.filter((item) => item.checked);
    }
    case FilterType.TODO: {
      return todos.filter((item) => !item.checked);
    }
    default:
      return todos;
  }
};

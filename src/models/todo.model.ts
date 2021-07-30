import React from "react";

export interface ITodoListProps {
  todos: ITodo[];
  OnChecked: (id: number) => void;
  editTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
  filter: (filter: FilterType) => void;
  deleteTasks: (filter: FilterType) => void;
}
export interface TodoInputProps {
  newTodo: React.ChangeEventHandler<HTMLInputElement>;
  saveChanges: () => void;
  todo: string | undefined;
}
export interface TodoEditModalProps {
  changeTodo: React.ChangeEventHandler<HTMLInputElement>;
  saveChanges: () => void;
  todo: string | undefined;
}
export interface ITodoProps extends ITodo {
  deleteTodo: (id: number) => void;
  editTodo: (id: number) => void;
  OnChecked: (id: number) => void;
}
export interface TodoListHeaderActionProps {
  searchTodo: React.ChangeEventHandler<HTMLInputElement>;
  filter: (filter: FilterType) => void;
}
export interface ITodo {
  id: number;
  checked: boolean;
  text: string;
}

export enum FilterType {
  ALL = "All",
  DONE = "Done",
  TODO = "Todo",
}

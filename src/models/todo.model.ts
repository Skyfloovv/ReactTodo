import React from "react";

export interface ITodoListProps {
  todos: ITodo[];
  OnChecked: (id: string) => void;
  editTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
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
  deleteTodo: (id: string) => void;
  editTodo: (id: string) => void;
  OnChecked: (id: ITodo) => void;
}
export interface TodoListHeaderActionProps {
  searchTodo: React.ChangeEventHandler<HTMLInputElement>;
  filter: (filter: FilterType) => void;
}
export interface ITodo {
  _id: string;
  checked: boolean;
  text: string;
}

export enum FilterType {
  ALL = "All",
  DONE = "Done",
  TODO = "Todo",
}

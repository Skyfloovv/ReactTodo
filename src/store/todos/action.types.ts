import { Action } from "redux";
import { Actions } from "./constant";
import { ITodo } from "../../models/todo.model";
// * action type

export interface AddTodoAction extends Action<typeof Actions.AddTodo> {
  payload: string;
}
export interface SetTodosAction extends Action<typeof Actions.SetTodos> {
  payload: {
    todos: ITodo[];
  };
}
export interface SetIsLoadingAction
  extends Action<typeof Actions.SetIsLoading> {
  payload: {
    isLoading: boolean;
  };
}
export interface EditTodoAction extends Action<typeof Actions.EditTodo> {
  payload: ITodo;
}
export interface CheckTodoAction extends Action<typeof Actions.CheckTodo> {
  payload: number;
}
export interface LoadTodosAction extends Action<typeof Actions.LoadTodos> {
  payload: {
    todos: ITodo[];
  };
}
export interface DeleteTodoAction extends Action<typeof Actions.DeleteTodo> {
  payload: number;
}
export interface DeleteAllTodoAction
  extends Action<typeof Actions.DeleteAllTodo> {}
export interface DeleteCheckTodoAction
  extends Action<typeof Actions.DeleteCheckTodo> {}
export type ReducerActionType =
  | AddTodoAction
  | EditTodoAction
  | SetTodosAction
  | LoadTodosAction
  | CheckTodoAction
  | DeleteTodoAction
  | SetIsLoadingAction
  | DeleteAllTodoAction
  | DeleteCheckTodoAction;

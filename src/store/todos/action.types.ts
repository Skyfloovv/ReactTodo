import { Action } from "redux";
import { Actions } from "./constant";
import { FilterType, ITodo } from "../../models/todo.model";
// * action type

export interface AddTodoRequestAction
  extends Action<typeof Actions.AddTodo_Request> {
  payload: string;
}
export interface AddTodoSuccessAction
  extends Action<typeof Actions.AddTodo_Success> {
  payload: string;
}
export interface SetTodosAction extends Action<typeof Actions.SetTodos> {
  payload: {
    todos: ITodo[];
  };
}
export interface EditTodoAction extends Action<typeof Actions.EditTodo> {
  payload: ITodo;
}
export interface CheckTodoAction extends Action<typeof Actions.CheckTodo> {
  payload: number | string;
}
export interface LoadTodosAction extends Action<typeof Actions.LoadTodos> {}
export interface SetTmpTodoAction extends Action<typeof Actions.SetTmpTodo> {
  payload: {
    tmpTodo: ITodo;
  };
}
export interface DeleteTodoAction extends Action<typeof Actions.DeleteTodo> {
  payload: number | string;
}
export interface FilterTodosAction extends Action<typeof Actions.FilterTodos> {
  payload: {
    filterType: FilterType;
  };
}
export interface SearchTodosAction extends Action<typeof Actions.SearchTodos> {
  payload: {
    searchText: string;
  };
}
export interface DeleteAllTodoAction
  extends Action<typeof Actions.DeleteAllTodo> {}
export interface SetIsLoadingAction
  extends Action<typeof Actions.SetIsLoading> {
  payload: {
    isLoading: boolean;
  };
}
export interface DeleteCheckTodoAction
  extends Action<typeof Actions.DeleteCheckTodo> {}
export interface SetFilterTodosAction
  extends Action<typeof Actions.SetFilterTodos> {
  payload: {
    filterTodo: ITodo[];
  };
}

export type ReducerActionType =
  | EditTodoAction
  | SetTodosAction
  | LoadTodosAction
  | CheckTodoAction
  | SetTmpTodoAction
  | DeleteTodoAction
  | FilterTodosAction
  | SearchTodosAction
  | SetIsLoadingAction
  | DeleteAllTodoAction
  | AddTodoRequestAction
  | AddTodoSuccessAction
  | SetFilterTodosAction
  | DeleteCheckTodoAction;

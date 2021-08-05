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
  payload: ITodo;
}

export interface SetTodosAction extends Action<typeof Actions.SetTodos> {
  payload: {
    todos: ITodo[];
  };
}

export interface EditTodoRequestAction
  extends Action<typeof Actions.EditTodo_Request> {
  payload: ITodo;
}
export interface EditTodoSuccessAction
  extends Action<typeof Actions.EditTodo_Success> {
  payload: ITodo;
}

export interface CheckTodoRequestAction
  extends Action<typeof Actions.CheckTodo_Request> {
  payload: ITodo;
}
export interface CheckTodoSuccessAction
  extends Action<typeof Actions.CheckTodo_Success> {
  payload: ITodo;
}

export interface LoadTodosAction extends Action<typeof Actions.LoadTodos> {}

export interface SetTmpTodoAction extends Action<typeof Actions.SetTmpTodo> {
  payload: {
    tmpTodo: ITodo;
  };
}

export interface DeleteTodoRequestAction
  extends Action<typeof Actions.DeleteTodo_Request> {
  payload: number | string;
}
export interface DeleteTodoSuccessAction
  extends Action<typeof Actions.DeleteTodo_Success> {
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

export interface DeleteAllTodoRequestAction
  extends Action<typeof Actions.DeleteAllTodo_Request> {}
export interface DeleteAllTodoSuccessAction
  extends Action<typeof Actions.DeleteAllTodo_Success> {}

export interface SetIsLoadingAction
  extends Action<typeof Actions.SetIsLoading> {
  payload: {
    isLoading: boolean;
  };
}

export interface DeleteCheckTodoRequestAction
  extends Action<typeof Actions.DeleteCheckTodo_Request> {}
export interface DeleteCheckTodoSuccessAction
  extends Action<typeof Actions.DeleteCheckTodo_Success> {}

export interface SetFilterTodosAction
  extends Action<typeof Actions.SetFilterTodos> {
  payload: {
    filterTodo: ITodo[];
  };
}

export type ReducerActionType =
  | EditTodoRequestAction
  | EditTodoSuccessAction
  | SetTodosAction
  | LoadTodosAction
  | CheckTodoRequestAction
  | CheckTodoSuccessAction
  | SetTmpTodoAction
  | DeleteTodoRequestAction
  | DeleteTodoSuccessAction
  | FilterTodosAction
  | SearchTodosAction
  | SetIsLoadingAction
  | DeleteAllTodoRequestAction
  | DeleteAllTodoSuccessAction
  | AddTodoRequestAction
  | AddTodoSuccessAction
  | SetFilterTodosAction
  | DeleteCheckTodoRequestAction
  | DeleteCheckTodoSuccessAction;

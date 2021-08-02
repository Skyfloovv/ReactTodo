import { ThunkAction } from "redux-thunk";
import { getTodos } from "../../service/todo.service";
import { ITodo } from "../../models/todo.model";
import { Actions } from "./constant";
import {
  AddTodoAction,
  SetIsLoadingAction,
  SetTodosAction,
} from "./action.types";

// * Thunk
const loadTodosThunk =
  (): ThunkAction<
    Promise<void>,
    any,
    undefined,
    SetTodosAction | SetIsLoadingAction
  > =>
  async (dispatch, getState) => {
    try {
      const res = await getTodos();
      dispatch(isLoading(false));
      dispatch({ type: Actions.SetTodos, payload: { todos: res } });
    } catch (e) {
      console.log(e);
    }
  };
const isLoading = (isLoading: boolean): SetIsLoadingAction => {
  return {
    type: Actions.SetIsLoading,
    payload: { isLoading: isLoading },
  };
};

const addTodo = (text: string): AddTodoAction => {
  return {
    type: Actions.AddTodo,
    payload: text,
  };
};

const editTodo = (todo: ITodo): any => {
  return {
    type: Actions.EditTodo,
    payload: todo,
  };
};
const checkTodo = (id: string | number): any => {
  return {
    type: Actions.CheckTodo,
    payload: id,
  };
};
const deleteTodo = (id: string | number): any => {
  return {
    type: Actions.DeleteTodo,
    payload: id,
  };
};
const deleteAllTodo = (): any => {
  return {
    type: Actions.DeleteAllTodo,
  };
};
const deleteCheckTodo = (): any => {
  return {
    type: Actions.DeleteCheckTodo,
  };
};

export const TodoAction = {
  addTodo,
  editTodo,
  checkTodo,
  isLoading,
  deleteTodo,
  deleteAllTodo,
  loadTodosThunk,
  deleteCheckTodo,
};

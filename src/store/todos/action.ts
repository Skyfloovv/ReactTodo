// Thunk//////////////////////////////////
// import { ThunkAction } from "redux-thunk";
// import { getTodos } from "../../service/todo.service";
///////////////////////////////////////////////
import { FilterType, ITodo } from "../../models/todo.model";
import { Actions } from "./constant";
import {
  AddTodoRequestAction,
  AddTodoSuccessAction,
  CheckTodoRequestAction,
  CheckTodoSuccessAction,
  DeleteAllTodoRequestAction,
  DeleteAllTodoSuccessAction,
  DeleteCheckTodoRequestAction,
  DeleteCheckTodoSuccessAction,
  DeleteTodoRequestAction,
  DeleteTodoSuccessAction,
  EditTodoRequestAction,
  EditTodoSuccessAction,
  FilterTodosAction,
  GetCurrentTodoAction,
  SearchTodosAction,
  SetCurrentTodoAction,
  SetFilterTodosAction,
  SetIsLoadingAction,
  SetTmpTodoAction,
} from "./action.types";

// // * Thunk////////////////////////////////////////////////////////////////
// const loadTodosThunk =
//   (): ThunkAction<
//     Promise<void>,
//     any,
//     undefined,
//     SetTodosAction | SetIsLoadingAction | FilterTodosAction
//   > =>
//   async (dispatch, getState) => {
//     try {
//       const res = await getTodos();
//       dispatch(isLoading(false));
//       dispatch({ type: Actions.SetTodos, payload: { todos: res } });
//       dispatch(TodoAction.filterTodos(FilterType.ALL));
//     } catch (e) {
//       console.log(e);
//     }
//   };
//////////////////////////////////////////////////////////////////////////////
const addTodoRequest = (text: string): AddTodoRequestAction => {
  return {
    type: Actions.AddTodo_Request,
    payload: text,
  };
};
const addTodoSuccess = (todo: ITodo): AddTodoSuccessAction => {
  return {
    type: Actions.AddTodo_Success,
    payload: todo,
  };
};
const deleteAllTodoRequest = (): DeleteAllTodoRequestAction => {
  return {
    type: Actions.DeleteAllTodo_Request,
  };
};
const deleteAllTodoSuccess = (): DeleteAllTodoSuccessAction => {
  return {
    type: Actions.DeleteAllTodo_Success,
  };
};
const editTodoRequest = (todo: ITodo): EditTodoRequestAction => {
  return {
    type: Actions.EditTodo_Request,
    payload: todo,
  };
};
const editTodoSuccess = (todo: ITodo): EditTodoSuccessAction => {
  return {
    type: Actions.EditTodo_Success,
    payload: todo,
  };
};
const deleteCheckTodoRequest = (): DeleteCheckTodoRequestAction => {
  return {
    type: Actions.DeleteCheckTodo_Request,
  };
};
const deleteCheckTodoSuccess = (): DeleteCheckTodoSuccessAction => {
  return {
    type: Actions.DeleteCheckTodo_Success,
  };
};
const setTmpTodo = (tmpTodo: ITodo): SetTmpTodoAction => {
  return {
    type: Actions.SetTmpTodo,
    payload: { tmpTodo },
  };
};
const checkTodoRequest = (todo: ITodo): CheckTodoRequestAction => {
  return {
    type: Actions.CheckTodo_Request,
    payload: todo,
  };
};
const checkTodoSuccess = (todo: ITodo): CheckTodoSuccessAction => {
  return {
    type: Actions.CheckTodo_Success,
    payload: todo,
  };
};
const deleteTodoRequest = (id: string | number): DeleteTodoRequestAction => {
  return {
    type: Actions.DeleteTodo_Request,
    payload: id,
  };
};
const deleteTodoSuccess = (id: string | number): DeleteTodoSuccessAction => {
  return {
    type: Actions.DeleteTodo_Success,
    payload: id,
  };
};
const isLoading = (isLoading: boolean): SetIsLoadingAction => {
  return {
    type: Actions.SetIsLoading,
    payload: { isLoading: isLoading },
  };
};
const searchTodos = (searchText: string): SearchTodosAction => {
  return {
    type: Actions.SearchTodos,
    payload: { searchText },
  };
};
const setFilterTodos = (todos: ITodo[]): SetFilterTodosAction => {
  return {
    type: Actions.SetFilterTodos,
    payload: {
      filterTodo: todos,
    },
  };
};
const filterTodos = (filterType: FilterType): FilterTodosAction => {
  return {
    type: Actions.FilterTodos,
    payload: {
      filterType,
    },
  };
};
const setCurrentTodo = (todo: ITodo): SetCurrentTodoAction => {
  return {
    type: Actions.SetCurrentTodo,
    payload: {
      currentTodo: todo,
    },
  };
};
const getCurrentTodo = (id: string): GetCurrentTodoAction => {
  return {
    type: Actions.GetCurrentTodo,
    payload: id,
  };
};

export const TodoAction = {
  isLoading,
  setTmpTodo,
  filterTodos,
  searchTodos,
  getCurrentTodo,
  setCurrentTodo,
  setFilterTodos,
  addTodoRequest,
  addTodoSuccess,
  editTodoRequest,
  editTodoSuccess,
  checkTodoRequest,
  checkTodoSuccess,
  deleteTodoRequest,
  deleteTodoSuccess,
  deleteAllTodoRequest,
  deleteAllTodoSuccess,
  deleteCheckTodoRequest,
  deleteCheckTodoSuccess,
};

// Thunk//////////////////////////////////
// import { ThunkAction } from "redux-thunk";
// import { getTodos } from "../../service/todo.service";
///////////////////////////////////////////////
import { FilterType, ITodo } from "../../models/todo.model";
import { Actions } from "./constant";
import {
  AddTodoRequestAction,
  AddTodoSuccessAction,
  CheckTodoAction,
  DeleteAllTodoAction,
  DeleteCheckTodoAction,
  DeleteTodoAction,
  EditTodoAction,
  FilterTodosAction,
  SearchTodosAction,
  SetFilterTodosAction,
  SetIsLoadingAction,
  SetTmpTodoAction,
  // Thunk////////////////////
  //SetTodosAction,
  ////////////////////////////
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
const addTodoSuccess = (text: string): AddTodoSuccessAction => {
  return {
    type: Actions.AddTodo_Success,
    payload: text,
  };
};
const deleteAllTodo = (): DeleteAllTodoAction => {
  return {
    type: Actions.DeleteAllTodo,
  };
};
const editTodo = (todo: ITodo): EditTodoAction => {
  return {
    type: Actions.EditTodo,
    payload: todo,
  };
};
const deleteCheckTodo = (): DeleteCheckTodoAction => {
  return {
    type: Actions.DeleteCheckTodo,
  };
};
const setTmpTodo = (tmpTodo: ITodo): SetTmpTodoAction => {
  return {
    type: Actions.SetTmpTodo,
    payload: { tmpTodo },
  };
};
const checkTodo = (id: string | number): CheckTodoAction => {
  return {
    type: Actions.CheckTodo,
    payload: id,
  };
};
const deleteTodo = (id: string | number): DeleteTodoAction => {
  return {
    type: Actions.DeleteTodo,
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

export const TodoAction = {
  // addTodo,
  editTodo,
  checkTodo,
  isLoading,
  setTmpTodo,
  deleteTodo,
  filterTodos,
  searchTodos,
  deleteAllTodo,
  addTodoRequest,
  addTodoSuccess,
  // Thunk
  // loadTodosThunk,
  setFilterTodos,
  deleteCheckTodo,
};

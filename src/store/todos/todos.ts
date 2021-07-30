import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { ITodo } from "../../models/todo.model";
import { getTodos } from "../../service/todo.service";

//  * action
enum Actions {
  AddTodo = "addTodo",
  SetTodos = "setTodos",
  EditTodo = "editTodo",
  LoadTodos = "loadTodos",
  CheckTodo = "checkTodo",
  DeleteTodo = "deleteTodo",
  DeleteAllTodo = "deleteAllTodo",
  DeleteCheckTodo = "deleteCheckTodo",
}

// * action type

interface AddTodoAction extends Action<typeof Actions.AddTodo> {
  payload: string;
}
interface SetTodosAction extends Action<typeof Actions.SetTodos> {
  payload: {
    todos: ITodo[];
  };
}
interface EditTodoAction extends Action<typeof Actions.EditTodo> {
  payload: ITodo;
}
interface CheckTodoAction extends Action<typeof Actions.CheckTodo> {
  payload: number;
}
interface LoadTodosAction extends Action<typeof Actions.LoadTodos> {
  payload: {
    todos: ITodo[];
  };
}
interface DeleteTodoAction extends Action<typeof Actions.DeleteTodo> {
  payload: number;
}
interface DeleteAllTodoAction extends Action<typeof Actions.DeleteAllTodo> {}
interface DeleteCheckTodoAction
  extends Action<typeof Actions.DeleteCheckTodo> {}
type ReducerAction =
  | SetTodosAction
  | LoadTodosAction
  | DeleteTodoAction
  | AddTodoAction
  | EditTodoAction
  | CheckTodoAction
  | DeleteAllTodoAction
  | DeleteCheckTodoAction;

// * Thunk
const loadTodosThunk =
  (): ThunkAction<Promise<void>, any, undefined, SetTodosAction> =>
  async (dispatch, getState) => {
    try {
      const res = await getTodos();
      dispatch({ type: Actions.SetTodos, payload: { todos: res } });
    } catch (e) {
      console.log(e);
    }
  };

const addTodo = (text: string): any => {
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

export interface IinitialState {
  todos: ITodo[];
}

const initialState: IinitialState = {
  todos: [],
};

export const todosReducer = (
  state: IinitialState = initialState,
  action: ReducerAction
): IinitialState => {
  switch (action.type) {
    case Actions.LoadTodos: {
      return state;
    }
    case Actions.SetTodos: {
      return {
        ...state,
        todos: action.payload.todos,
      };
    }
    case Actions.DeleteTodo: {
      return {
        ...state,
        todos: state.todos.filter((item) => item.id === action.payload),
      };
    }
    case Actions.AddTodo: {
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: state.todos.length + 1,
            checked: false,
            text: action.payload,
          },
        ],
      };
    }
    case Actions.CheckTodo: {
      return {
        ...state,
        todos: state.todos.map((item) => {
          if (item.id === action.payload) {
            item.checked = !item.checked;
            return item;
          }
          return item;
        }),
      };
    }
    case Actions.DeleteAllTodo: {
      return {
        ...state,
        todos: [],
      };
    }
    case Actions.DeleteCheckTodo: {
      return {
        ...state,
        todos: state.todos.filter((item) => item.checked),
      };
    }
    case Actions.EditTodo: {
      return {
        ...state,
        todos: state.todos.map((item) => {
          if (item.id === action.payload.id) {
            return action.payload;
          }
          return item;
        }),
      };
    }
    default: {
      return state;
    }
  }
};

export const TodoAction = {
  addTodo,
  editTodo,
  checkTodo,
  deleteTodo,
  deleteAllTodo,
  loadTodosThunk,
  deleteCheckTodo,
};

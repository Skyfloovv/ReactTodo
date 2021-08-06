import { ITodo } from "../../models/todo.model";
import { Actions } from "./constant";
import { ReducerTodoActionType } from "./action.types";
import { filterTodoForType } from "../../service/todo.service";

export interface IinitialState {
  todos: ITodo[];
  isLoading: boolean;
  filterTodos: ITodo[];
  tmpTodo: ITodo | null;
}

const initialState: IinitialState = {
  todos: [],
  isLoading: true,
  filterTodos: [],
  tmpTodo: null,
};

export const todosReducer = (
  state: IinitialState = initialState,
  action: ReducerTodoActionType
): IinitialState => {
  switch (action.type) {
    case Actions.AddTodo_Success: {
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            ...action.payload,
          },
        ],
      };
    }
    case Actions.EditTodo_Success: {
      return {
        ...state,
        todos: state.todos.map((item) => {
          if (item._id === action.payload._id) {
            return action.payload;
          }
          return item;
        }),
      };
    }
    case Actions.SetTodos: {
      return {
        ...state,
        todos: action.payload.todos,
      };
    }
    case Actions.LoadTodos: {
      return state;
    }
    case Actions.CheckTodo_Success: {
      return {
        ...state,
        todos: state.todos.map((item) => {
          if (item._id === action.payload._id) {
            return { ...action.payload };
          }
          return { ...item };
        }),
      };
    }
    case Actions.SetTmpTodo: {
      return {
        ...state,
        tmpTodo: action.payload.tmpTodo,
      };
    }
    case Actions.DeleteTodo_Success: {
      return {
        ...state,
        todos: state.todos.filter((item) => item._id !== action.payload),
      };
    }
    case Actions.FilterTodos: {
      return {
        ...state,
        filterTodos: filterTodoForType(action.payload.filterType, state.todos),
      };
    }
    case Actions.SearchTodos: {
      return {
        ...state,
        filterTodos: state.todos.filter((item) => {
          return item.text.includes(action.payload.searchText);
        }),
      };
    }
    case Actions.SetIsLoading: {
      return {
        ...state,
        isLoading: action.payload.isLoading,
      };
    }
    case Actions.DeleteAllTodo_Success: {
      return {
        ...state,
        todos: [],
      };
    }
    case Actions.SetFilterTodos: {
      return {
        ...state,
        filterTodos: action.payload.filterTodo,
      };
    }
    case Actions.DeleteCheckTodo_Success: {
      return {
        ...state,
        todos: state.todos.filter((item) => !item.checked),
      };
    }

    default: {
      return state;
    }
  }
};

import { ITodo } from "../../models/todo.model";
import { Actions } from "./constant";
import { ReducerActionType } from "./action.types";
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
  action: ReducerActionType
): IinitialState => {
  switch (action.type) {
    case Actions.AddTodo_Success: {
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
    case Actions.SetTodos: {
      return {
        ...state,
        todos: action.payload.todos,
      };
    }
    case Actions.LoadTodos: {
      return state;
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
    case Actions.SetTmpTodo: {
      return {
        ...state,
        tmpTodo: action.payload.tmpTodo,
      };
    }
    case Actions.DeleteTodo: {
      return {
        ...state,
        todos: state.todos.filter((item) => item.id !== action.payload),
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
    case Actions.DeleteAllTodo: {
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
    case Actions.DeleteCheckTodo: {
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

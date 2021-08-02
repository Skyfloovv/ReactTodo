import { ITodo } from "../../models/todo.model";
import { Actions } from "./constant";
import { ReducerActionType } from "./action.types";

export interface IinitialState {
  todos: ITodo[];
  isLoading: boolean;
}

const initialState: IinitialState = {
  todos: [],
  isLoading: true,
};

export const todosReducer = (
  state: IinitialState = initialState,
  action: ReducerActionType
): IinitialState => {
  switch (action.type) {
    case Actions.LoadTodos: {
      return state;
    }
    case Actions.SetIsLoading: {
      return {
        ...state,
        isLoading: action.payload.isLoading,
      };
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
        todos: state.todos.filter((item) => item.id !== action.payload),
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
        todos: state.todos.filter((item) => !item.checked),
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

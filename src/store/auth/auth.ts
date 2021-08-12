import { User } from "../../models/user.model";
import { ReducerAuthActionType } from "./action.types";
import { authActions } from "./constant";
export interface InitialState {
  User: User | null;
  isAuth: boolean;
  authFailed: boolean;
  error: string | null;
}

const initialState: InitialState = {
  User: null,
  isAuth: false,
  authFailed: false,
  error: null,
};

export const authReducer = (
  state: InitialState = initialState,
  action: ReducerAuthActionType
): InitialState => {
  switch (action.type) {
    case authActions.SetIsAuth: {
      return {
        ...state,
        isAuth: action.payload,
      };
    }
    case authActions.SetAuthFailed: {
      return {
        ...state,
        authFailed: action.payload,
        isAuth: !action.payload,
      };
    }
    case authActions.SetError: {
      return {
        ...state,
        error: action.payload,
      };
    }

    default:
      return { ...state };
  }
};

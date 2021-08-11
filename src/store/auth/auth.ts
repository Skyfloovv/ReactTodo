import { User } from "../../models/user.model";
import { ReducerAuthActionType } from "./action.types";
import { authActions } from "./constant";
export interface InitialState {
  User: User | null;
  isAuth: boolean;
  authFailed: boolean;
}

const initialState: InitialState = {
  User: null,
  isAuth: false,
  authFailed: false,
};

export const authReducer = (
  state: InitialState = initialState,
  action: ReducerAuthActionType
): InitialState => {
  switch (action.type) {
    case authActions.RegisterSuccess: {
      return { ...state };
    }
    case authActions.LoginSuccess: {
      return { ...state };
    }
    case authActions.LogOut: {
      return { ...state };
    }
    case authActions.RefreshTokenSuccess: {
      return { ...state };
    }
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
    case authActions.SetUser: {
      return { ...state };
    }
    default:
      return { ...state };
  }
};

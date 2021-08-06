import { User } from "../../models/user.model";
import { ReducerAuthActionType } from "./action.types";
import { Actions } from "./constant";
export interface InitialState {
  User: User | null;
  isAuth: boolean;
}

const initialState: InitialState = {
  User: null,
  isAuth: true,
};

export const authReducer = (
  state: InitialState = initialState,
  action: ReducerAuthActionType
): InitialState => {
  switch (action.type) {
    case Actions.LoginRequest: {
      return { ...state };
    }
    case Actions.LoginSuccess: {
      return { ...state };
    }
    case Actions.LogOut: {
      return { ...state };
    }
    case Actions.RefreshTokenRequest: {
      return { ...state };
    }
    case Actions.RefreshTokenSuccess: {
      return { ...state };
    }
    case Actions.SetIsAuth: {
      return { ...state };
    }
    case Actions.SetUser: {
      return { ...state };
    }
    default:
      return { ...state };
  }
};

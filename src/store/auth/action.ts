import { AuthProps } from "../../service/authService";
import {
  LoginRequestAction,
  LoginSuccessAction,
  LogOutAction,
  RefreshTokenRequestAction,
  RefreshTokenSuccessAction,
  SetIsAuthAction,
  SetUserAction,
} from "./action.types";
import { Actions } from "./constant";
import { User } from "../../models/user.model";

const loginRequest = (authProps: AuthProps): LoginRequestAction => {
  return {
    type: Actions.LoginRequest,
    payload: authProps,
  };
};
const loginSucces = (authProps: AuthProps): LoginSuccessAction => {
  return {
    type: Actions.LoginSuccess,
    payload: authProps,
  };
};
const setIsAuth = (isAuth: boolean): SetIsAuthAction => {
  return {
    type: Actions.SetIsAuth,
    payload: isAuth,
  };
};
const logOut = (): LogOutAction => {
  return {
    type: Actions.LogOut,
  };
};
const setUser = (user: User): SetUserAction => {
  return {
    type: Actions.SetUser,
    payload: user,
  };
};
const refreshTokenRequest = (
  refreshToken: string
): RefreshTokenRequestAction => {
  return {
    type: Actions.RefreshTokenRequest,
    payload: refreshToken,
  };
};
const refreshTokenSuccess = (
  refreshToken: string
): RefreshTokenSuccessAction => {
  return {
    type: Actions.RefreshTokenSuccess,
    payload: refreshToken,
  };
};

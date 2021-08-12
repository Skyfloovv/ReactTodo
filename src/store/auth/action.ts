import { AuthProps, RegisterProps } from "../../service/auth.service";
import {
  LoginRequestAction,
  LoginSuccessAction,
  LogOutAction,
  RefreshTokenRequestAction,
  RefreshTokenSuccessAction,
  RegisterRequestAction,
  RegisterSuccessAction,
  SetAuthFailedAction,
  SetErrorAction,
  SetIsAuthAction,
  SetUserAction,
} from "./action.types";
import { authActions } from "./constant";
import { User } from "../../models/user.model";

const loginRequest = (authProps: AuthProps): LoginRequestAction => {
  return {
    type: authActions.LoginRequest,
    payload: authProps,
  };
};
const loginSuccess = (authProps: AuthProps): LoginSuccessAction => {
  return {
    type: authActions.LoginSuccess,
    payload: authProps,
  };
};
const RegisterRequest = (
  registerProps: RegisterProps
): RegisterRequestAction => {
  return {
    type: authActions.RegisterRequest,
    payload: registerProps,
  };
};
const RegisterSuccess = (
  registerProps: RegisterProps
): RegisterSuccessAction => {
  return {
    type: authActions.RegisterSuccess,
    payload: registerProps,
  };
};
const setIsAuth = (isAuth: boolean): SetIsAuthAction => {
  return {
    type: authActions.SetIsAuth,
    payload: isAuth,
  };
};
const setAuthFailed = (isAuthFailed: boolean): SetAuthFailedAction => {
  return {
    type: authActions.SetAuthFailed,
    payload: isAuthFailed,
  };
};
const setError = (error: string | null): SetErrorAction => {
  return {
    type: authActions.SetError,
    payload: error,
  };
};
const logOut = (): LogOutAction => {
  return {
    type: authActions.LogOut,
  };
};
const setUser = (user: User): SetUserAction => {
  return {
    type: authActions.SetUser,
    payload: user,
  };
};
const refreshTokenRequest = (
  refreshToken: string
): RefreshTokenRequestAction => {
  return {
    type: authActions.RefreshTokenRequest,
    payload: refreshToken,
  };
};
const refreshTokenSuccess = (
  refreshToken: string
): RefreshTokenSuccessAction => {
  return {
    type: authActions.RefreshTokenSuccess,
    payload: refreshToken,
  };
};

export const AuthAction = {
  refreshTokenSuccess,
  refreshTokenRequest,
  setUser,
  setError,
  logOut,
  setIsAuth,
  loginSuccess,
  loginRequest,
  RegisterRequest,
  RegisterSuccess,
  setAuthFailed,
};

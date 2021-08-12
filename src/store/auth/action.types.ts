import { Action } from "redux";
import { authActions } from "./constant";
import { AuthProps, RegisterProps } from "../../service/auth.service";
import { User } from "../../models/user.model";

export interface LoginRequestAction
  extends Action<typeof authActions.LoginRequest> {
  payload: AuthProps;
}
export interface LoginSuccessAction
  extends Action<typeof authActions.LoginSuccess> {
  payload: AuthProps;
}
export interface RegisterRequestAction
  extends Action<typeof authActions.RegisterRequest> {
  payload: RegisterProps;
}
export interface RegisterSuccessAction
  extends Action<typeof authActions.RegisterSuccess> {
  payload: RegisterProps;
}
export interface SetIsAuthAction extends Action<typeof authActions.SetIsAuth> {
  payload: boolean;
}
export interface SetAuthFailedAction
  extends Action<typeof authActions.SetAuthFailed> {
  payload: boolean;
}
export interface SetErrorAction extends Action<typeof authActions.SetError> {
  payload: string | null;
}
export interface LogOutAction extends Action<typeof authActions.LogOut> {}
export interface SetUserAction extends Action<typeof authActions.SetUser> {
  payload: User;
}
export interface RefreshTokenRequestAction
  extends Action<typeof authActions.RefreshTokenRequest> {
  payload: string;
}
export interface RefreshTokenSuccessAction
  extends Action<typeof authActions.RefreshTokenSuccess> {
  payload: string;
}

export type ReducerAuthActionType =
  | LoginRequestAction
  | LoginSuccessAction
  | SetAuthFailedAction
  | SetIsAuthAction
  | LogOutAction
  | SetUserAction
  | RefreshTokenRequestAction
  | RefreshTokenSuccessAction
  | RegisterRequestAction
  | RegisterSuccessAction
  | SetErrorAction;

import { Action } from "redux";
import { Actions } from "./constant";
import { AuthProps } from "../../service/authService";
import { User } from "../../models/user.model";

export interface LoginRequestAction
  extends Action<typeof Actions.LoginRequest> {
  payload: AuthProps;
}
export interface LoginSuccessAction
  extends Action<typeof Actions.LoginSuccess> {
  payload: AuthProps;
}
export interface SetIsAuthAction extends Action<typeof Actions.SetIsAuth> {
  payload: boolean;
}
export interface LogOutAction extends Action<typeof Actions.LogOut> {}
export interface SetUserAction extends Action<typeof Actions.SetUser> {
  payload: User;
}
export interface RefreshTokenRequestAction
  extends Action<typeof Actions.RefreshTokenRequest> {
  payload: string;
}
export interface RefreshTokenSuccessAction
  extends Action<typeof Actions.RefreshTokenSuccess> {
  payload: string;
}

export type ReducerAuthActionType =
  | LoginRequestAction
  | LoginSuccessAction
  | SetIsAuthAction
  | LogOutAction
  | SetUserAction
  | RefreshTokenRequestAction
  | RefreshTokenSuccessAction;

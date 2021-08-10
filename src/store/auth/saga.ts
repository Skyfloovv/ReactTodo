import { all, call, put, takeLatest } from "redux-saga/effects";
import { LoginRequestAction, RegisterRequestAction } from "./action.types";
import { authApi } from "../../service/auth.service";
import { AuthAction } from "./action";
import { authActions } from "./constant";

function* registerRequest(action: RegisterRequestAction): any {
  try {
    console.log("register");
    const { token } = yield call(authApi.Registration, action.payload);
    yield call(authApi.setToken, token);
    yield put(AuthAction.RegisterSuccess(token));
    yield put(AuthAction.setIsAuth(true));
  } catch (e) {
    console.log(e);
  }
}
function* loginRequest(action: LoginRequestAction): any {
  try {
    console.log("login");
    const { data } = yield call(authApi.LogIn, action.payload);
    console.log("login", data.accessToken);
    yield call(authApi.setToken, data.accessToken);
    yield put(AuthAction.setIsAuth(true));
  } catch (e) {
    console.log(e);
  }
}

function* watchRegisterRequest() {
  yield takeLatest(authActions.RegisterRequest, registerRequest);
}
function* watchLoginRequest() {
  yield takeLatest(authActions.LoginRequest, loginRequest);
}
export function* authSaga() {
  yield all([watchRegisterRequest(), watchLoginRequest()]);
}

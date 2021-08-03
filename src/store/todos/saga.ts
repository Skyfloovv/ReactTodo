import { all, call, put, takeLatest } from "redux-saga/effects";
import { getTodos } from "../../service/todo.service";
import { Actions } from "./constant";
import { FilterType } from "../../models/todo.model";
import { TodoAction } from "./action";
import { AddTodoRequestAction } from "./action.types";

function* fetchTodos(action: any): any {
  try {
    const todos = yield call(getTodos);
    yield put(TodoAction.isLoading(false));
    yield put({ type: Actions.SetTodos, payload: { todos: todos } });
    yield put(TodoAction.filterTodos(FilterType.ALL));
  } catch (e) {
    console.log(e);
  }
}
function* addTodo(action: AddTodoRequestAction): any {
  try {
    yield put(TodoAction.addTodoSuccess(action.payload));
  } catch (e) {}
}

export function* watchGetListTodo() {
  yield takeLatest(Actions.LoadTodos, fetchTodos);
}
export function* watchAddTodo() {
  yield takeLatest(Actions.AddTodo_Request, addTodo);
}

export function* metafieldsSaga() {
  yield all([watchGetListTodo(), watchAddTodo()]);
}

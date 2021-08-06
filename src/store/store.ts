import { todosReducer } from "./todos/todos";
import { applyMiddleware, combineReducers, compose, createStore } from "redux";
// SAGA////////////////////////////////////////
import { all, fork } from "redux-saga/effects";
////////////////////////////////////////////////

import {
  TypedUseSelectorHook,
  useDispatch as useReduxDispatch,
  useSelector as useReduxSelector,
} from "react-redux";
import createSagaMiddleware from "redux-saga";
import { metaFieldsSaga } from "./todos/saga";
const sagaMiddleware = createSagaMiddleware();
const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  todo: todosReducer,
});

// SAGA////////////////////////////////////
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);
export function* rootSaga() {
  yield all([fork(metaFieldsSaga)]);
}

sagaMiddleware.run(rootSaga);
//////////////////////////////////////////

// THUNK///////////////////////////////
//import thunk from "redux-thunk";
// const store = createStore(
//   rootReducer,
//   composeEnhancers(applyMiddleware(thunk))
// );
///////////////////////////////////////
export type StateType = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export const useSelector: TypedUseSelectorHook<StateType> = useReduxSelector;
export const useDispatch = () => useReduxDispatch<typeof store.dispatch>();

export default store;

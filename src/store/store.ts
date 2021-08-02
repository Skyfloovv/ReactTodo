import { todosReducer } from "./todos/todos";
import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import {
  TypedUseSelectorHook,
  useDispatch as useReduxDispatch,
  useSelector as useReduxSelector,
} from "react-redux";

const rootReducer = combineReducers({
  todo: todosReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export type StateType = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export const useSelector: TypedUseSelectorHook<StateType> = useReduxSelector;
export const useDispatch = () => useReduxDispatch<typeof store.dispatch>();

export default store;

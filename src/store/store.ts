import { todosReducer } from "./todos/todos";
import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  todo: todosReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export type StateType = ReturnType<typeof rootReducer>;

export default store;

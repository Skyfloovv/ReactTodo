import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TodoList from "./TodoList/TodoList";
import About from "../pages/About";
import TodoInfo from "./TodoList/Todo/TodoInfo/TodoInfo";
import LogIn from "../pages/LogIn";
import Registration from "../pages/Registration";
import { useDispatch, useSelector } from "../store/store";
import { AuthAction } from "../store/auth/action";
import { authApi } from "../service/auth.service";

// const routes = [{path: "/about", isExact: true, component: ""}]

const PageRouter = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth.isAuth);
  useEffect(() => {
    dispatch(AuthAction.setIsAuth(authApi.isAuth()));
  }, []);

  return (
    <Router>
      <Switch>
        {isAuth ? (
          <>
            <Route path="/" exact>
              <TodoList />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/todo/:id">
              <TodoInfo></TodoInfo>
            </Route>
          </>
        ) : (
          <>
            <Route path="/" exact>
              <LogIn />
            </Route>
            <Route path="/registration" exact>
              <Registration />
            </Route>
          </>
        )}
      </Switch>
    </Router>
  );
};

export default PageRouter;

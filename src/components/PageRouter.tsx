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
import { makeStyles } from "@material-ui/core/styles";
import { Redirect } from "react-router-dom";

// const routes = [{path: "/about", isExact: true, component: ""}]
export const useStyles = makeStyles((theme) => ({
  App: {
    width: "100%",
    minHeight: "100vh",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: theme.palette.background.paper,
  },
}));

const PageRouter = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth.isAuth);
  const authFailed = useSelector((state) => state.auth.authFailed);
  const s = useStyles();
  useEffect(() => {
    dispatch(AuthAction.setIsAuth(authApi.isAuth()));
  }, []);

  return (
    <div className={s.App}>
      <Router>
        <Switch>
          {isAuth ? (
            <>
              <Route path="/home" exact>
                <TodoList />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/todo/:id">
                <TodoInfo></TodoInfo>
              </Route>
              <Redirect to="/home" />
            </>
          ) : (
            <>
              <Route path="/login" exact>
                <LogIn />
              </Route>
              <Route path="/registration" exact>
                <Registration />
              </Route>
              <Redirect to="/login" />
            </>
          )}
          {authFailed ? <Redirect to="/login" /> : ""}
        </Switch>
      </Router>
    </div>
  );
};

export default PageRouter;

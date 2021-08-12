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
import { SnackBarError } from "./snackbar/snackBar";

// const routes = [{path: "/about", isExact: true, component: ""}]
const publicRoutes = [
  { path: "/login", isExact: true, Component: LogIn },
  { path: "/registration", isExact: false, Component: Registration },
];
const privateRouts = [
  { path: "/home", isExact: true, Component: TodoList },
  { path: "/about", isExact: false, Component: About },
  { path: "/todo/:id", isExact: false, Component: TodoInfo },
];

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

  const routesToMap = isAuth ? privateRouts : publicRoutes;
  let routes = routesToMap.map((routeEl) => {
    return (
      <Route path={routeEl.path} key={routeEl.path}>
        <routeEl.Component />
      </Route>
    );
  });

  return (
    <div className={s.App}>
      <SnackBarError />
      <Router>
        <Switch>
          {routes}
          {isAuth ? <Redirect to="/home" /> : <Redirect to="/login" />}
          {authFailed ? <Redirect to="/login" /> : null}
        </Switch>
      </Router>
    </div>
  );
};

export default PageRouter;

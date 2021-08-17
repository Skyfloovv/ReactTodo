import React, { FC } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import TodoList from "../components/TodoList/TodoList";
import TodoInfo from "../components/TodoList/Todo/TodoInfo/TodoInfo";
import LogIn from "../pages/LogIn";
import Registration from "../pages/Registration";
import { useSelector } from "../store/store";
import { SnackBarError } from "../components/snackbar/snackBar";
import Navbar from "../components/navbar/navbar";
import { useStyles } from "./pageRouter.style";

const publicRoutes = [
  { path: "/login", isExact: true, Component: LogIn },
  { path: "/registration", isExact: false, Component: Registration },
];
const privateRoutes = [
  { path: "/home", isExact: true, Component: TodoList },
  { path: "/todo/:id", isExact: false, Component: TodoInfo },
];

const PageRouter: FC = () => {
  const isAuth = useSelector((state) => state.auth.isAuth);
  const authFailed = useSelector((state) => state.auth.authFailed);
  const s = useStyles();
  const routesToMap = isAuth ? privateRoutes : publicRoutes;

  let routes = routesToMap.map((routeEl) => {
    return (
      <Route path={routeEl.path} key={routeEl.path} exact={routeEl.isExact}>
        {isAuth && <Navbar />}
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
          <Route path="/">
            <Redirect to={isAuth ? "/home" : "/login"} />
          </Route>
          {authFailed ? <Redirect to="/login" /> : null}
        </Switch>
      </Router>
    </div>
  );
};

export default PageRouter;

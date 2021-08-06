import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TodoList from "./TodoList/TodoList";
import About from "../pages/About";
import TodoInfo from "./TodoList/Todo/TodoInfo/TodoInfo";
import LogIn from "../pages/LogIn";

const PageRouter = () => {
  const isAuth = true;

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
          </>
        )}
      </Switch>
    </Router>
  );
};

export default PageRouter;

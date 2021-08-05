import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TodoList from "./TodoList/TodoList";
import About from "../pages/About";

const PageRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <TodoList />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </Switch>
    </Router>
  );
};

export default PageRouter;

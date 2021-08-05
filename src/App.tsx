import React, { FC } from "react";
import "./App.css";
import TodoList from "./components/TodoList/TodoList";
import PageRouter from "./components/PageRouter";

const App: FC = () => {
  return (
    <div className="App">
      <PageRouter />
    </div>
  );
};

export default App;

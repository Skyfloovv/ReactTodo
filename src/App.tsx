import { FC } from "react";
import "./App.css";
import TodoList from "./components/TodoList/TodoList";

const App: FC = () => {
  return (
    <div className="App">
      <TodoList />
    </div>
  );
};

export default App;

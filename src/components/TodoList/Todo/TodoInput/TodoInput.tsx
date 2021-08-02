import React, { FC } from "react";
import "./TodoInput.scss";
import { Button, TextField } from "@material-ui/core";
import Header from "../../../Header/Header";
import { TodoInputProps } from "../../../../models/todo.model";

export const TodoInput: FC<TodoInputProps> = ({
  newTodo,
  saveChanges,
  todo,
}) => {
  return (
    <div className="TodoInput">
      <Header text="Todo Input" />
      <div className="TodoForm">
        <TextField label={"New Todo"} value={todo} onChange={newTodo} />
        <Button
          variant="contained"
          color="primary"
          disabled={!todo}
          onClick={saveChanges}
        >
          {"Add new task"}
        </Button>
      </div>
    </div>
  );
};

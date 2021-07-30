import React, { FC } from "react";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import "./Todo.scss";
import { ITodoProps } from "../../../models/todo.model";

export const Todo: FC<ITodoProps> = ({
  id,
  checked,
  text,
  deleteTodo,
  OnChecked,
  editTodo,
}) => {
  return (
    <div className="Todo">
      <span className={checked ? "strike" : ""}>{text}</span>
      <div className="todo-actions">
        <Checkbox checked={checked} onChange={() => OnChecked(id)} />
        <Button children={"edit"} onClick={() => editTodo(id)} />
        <Button children={"delete"} onClick={() => deleteTodo(id)} />
      </div>
    </div>
  );
};

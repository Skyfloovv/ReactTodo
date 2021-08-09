import { FC } from "react";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import "./Todo.scss";
import { ITodoProps } from "../../../models/todo.model";
import { Link } from "react-router-dom";

export const Todo: FC<ITodoProps> = ({
  _id,
  checked,
  text,
  deleteTodo,
  OnChecked,
  editTodo,
}) => {
  return (
    <div className="Todo">
      <Link className="link" to={"todo/" + _id}>
        <span className={checked ? "strike" : ""}>{text}</span>
      </Link>
      <div className="todo-actions">
        <Checkbox
          checked={checked}
          onChange={() => OnChecked({ _id, checked: !checked, text })}
        />
        <Button children={"edit"} onClick={() => editTodo(_id)} />
        <Button children={"delete"} onClick={() => deleteTodo(_id)} />
      </div>
    </div>
  );
};

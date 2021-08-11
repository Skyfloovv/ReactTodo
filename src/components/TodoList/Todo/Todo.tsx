import { FC } from "react";
import Checkbox from "@material-ui/core/Checkbox";
import { ITodoProps } from "../../../models/todo.model";
import { Link } from "react-router-dom";
import { useStyles } from "./todo.styles";
import { IconButton } from "@material-ui/core";
import DeleteIcon from "../../../assets/DeleteIcon";
import EditIcon from "../../../assets/EditIcon";

export const Todo: FC<ITodoProps> = ({
  _id,
  checked,
  text,
  deleteTodo,
  OnChecked,
  editTodo,
}) => {
  const s = useStyles();
  return (
    <div className={s.todo}>
      <Link to={"todo/" + _id}>
        <span className={checked ? s.strike : ""}>{text}</span>
      </Link>
      <div className="todo-actions">
        <Checkbox
          color="primary"
          checked={checked}
          onChange={() => OnChecked({ _id, checked: !checked, text })}
        />
        <IconButton
          color="primary"
          aria-label="upload picture"
          component="span"
          onClick={() => editTodo(_id)}
        >
          <EditIcon />
        </IconButton>
        <IconButton
          color="primary"
          aria-label="upload picture"
          component="span"
          onClick={() => deleteTodo(_id)}
        >
          <DeleteIcon />
        </IconButton>
      </div>
    </div>
  );
};

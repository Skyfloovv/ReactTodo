import React, { FC } from "react";
import "./TodoListHeaderAction.scss";
import { TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import {
  FilterType,
  TodoListHeaderActionProps,
} from "../../../models/todo.model";
import { useStyles } from "../todoList.styles";

export const TodoListHeaderAction: FC<TodoListHeaderActionProps> = ({
  filter,
  searchTodo,
}) => {
  const s = useStyles();
  return (
    <div className={s.headerListAction}>
      <div>
        <TextField label={"Search"} onChange={searchTodo} />
      </div>
      <div>
        <Button
          children={"All"}
          variant="contained"
          color="primary"
          onClick={() => filter(FilterType.ALL)}
        />
        <Button
          children={"Done"}
          variant="contained"
          color="primary"
          onClick={() => filter(FilterType.DONE)}
        />
        <Button
          children={"Todo"}
          variant="contained"
          color="primary"
          onClick={() => filter(FilterType.TODO)}
        />
      </div>
    </div>
  );
};

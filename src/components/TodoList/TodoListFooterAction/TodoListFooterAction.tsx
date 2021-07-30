import React, { FC } from "react";
import "./TodoListFooterAction.scss";
import Button from "@material-ui/core/Button";
import { FilterType } from "../../../models/todo.model";

export const TodoListFooterAction: FC<{
  deleteTasks: (filter: FilterType) => void;
}> = ({ deleteTasks }) => (
  <div className="footerlistAction">
    <Button
      children={"Delete all tasks"}
      variant="contained"
      color="secondary"
      onClick={() => deleteTasks(FilterType.ALL)}
    />
    <Button
      children={"Delete done tasks"}
      variant="contained"
      color="secondary"
      onClick={() => deleteTasks(FilterType.DONE)}
    />
  </div>
);

import { FC } from "react";
import { Button, TextField } from "@material-ui/core";
import Header from "../../../Header/Header";
import { TodoInputProps } from "../../../../models/todo.model";
import { useStyles } from "../todo.styles";

export const TodoInput: FC<TodoInputProps> = ({
  newTodo,
  saveChanges,
  todo,
}) => {
  const s = useStyles();
  return (
    <div className={s.todoInput}>
      <Header text="Todo Input" />
      <div className={s.todoForm}>
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

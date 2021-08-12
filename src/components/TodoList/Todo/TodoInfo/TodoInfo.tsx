import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "../../../../store/store";
import { Link, useParams } from "react-router-dom";
import { Card, CardContent, CardHeader, Typography } from "@material-ui/core";

import WithPreloader from "../../WithPreloader";
import { TodoAction } from "../../../../store/todos/action";

const TodoInfo: FC = () => {
  const params = useParams<{ id: string }>();
  const todo = useSelector((state) => state.todo.currentTodo);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!params.id) return;
    dispatch(TodoAction.getCurrentTodo(params.id));
  }, [params, dispatch]);

  return (
    <WithPreloader isLoading={!todo}>
      <Card>
        <CardHeader>
          <Link to="/">"awdw"</Link>
        </CardHeader>
        <CardContent>
          <Typography variant="h5" component="h2">
            {todo?.text}
          </Typography>
        </CardContent>
      </Card>
    </WithPreloader>
  );
};

export default TodoInfo;

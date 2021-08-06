import React, { FC, useEffect, useState } from "react";
import "./TodoInfo.scss";
import { useSelector } from "../../../../store/store";
import { Link, useParams } from "react-router-dom";
import { Card, CardContent, CardHeader, Typography } from "@material-ui/core";
import { todoApi } from "../../../../api";
import { ITodo } from "../../../../models/todo.model";

const TodoInfo: FC = () => {
  const params = useParams<{ id: string }>();
  const [todo, setTodo] = useState<ITodo | null>(null);
  useEffect(() => {
    if (!params.id) return;
    todoApi.getTodo(params.id).then((res) => {
      setTodo(res.data);
    });
  }, [params]);

  return (
    <Card>
      <CardHeader>
        <Link to="/">Back</Link>
      </CardHeader>
      <CardContent>
        <Typography variant="h5" component="h2">
          {todo && todo.text}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default TodoInfo;

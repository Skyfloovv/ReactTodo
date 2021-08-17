import React, { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "../../../../store/store";
import { Link, useHistory, useParams } from "react-router-dom";
import {
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Typography,
} from "@material-ui/core";

import WithPreloader from "../../../common/WithPreloader";
import { TodoAction } from "../../../../store/todos/action";
import EditIcon from "../../../../assets/EditIcon";
import DeleteIcon from "../../../../assets/DeleteIcon";
import { useModal } from "../../../../hooks/useModal";
import { Modal, ModalType } from "../../../Modal";
import { ITodo } from "../../../../models/todo.model";
import Checkbox from "@material-ui/core/Checkbox";
import { useStyles } from "./todoInfo.styles";

const TodoInfo: FC = () => {
  const params = useParams<{ id: string }>();
  const todo = useSelector((state) => state.todo.currentTodo);
  const dispatch = useDispatch();
  const history = useHistory();
  const { modalOpen: openConfirmModal, toggle: ConfirmModalToggle } =
    useModal();
  const [modalType, setModalType] = useState<ModalType>();
  const modalClose = () => {
    ConfirmModalToggle();
  };
  useEffect(() => {
    if (!params.id) return;
    dispatch(TodoAction.getCurrentTodo(params.id));
  }, [params, dispatch]);
  const saveEditTodo = (todo: ITodo): void => {
    if (todo !== null) {
      dispatch(TodoAction.editTodoRequest(todo));
      dispatch(TodoAction.getCurrentTodo(todo._id));
      modalClose();
    }
  };
  const editTodo = (): void => {
    setModalType(ModalType.Edit);
    dispatch(TodoAction.setTmpTodo(todo!));
    ConfirmModalToggle();
  };
  const openModalForDelete = (): void => {
    setModalType(ModalType.Delete);
    ConfirmModalToggle();
  };
  const deleteTasksOrTask = () => {
    dispatch(TodoAction.deleteTodoRequest(todo!._id));
    modalClose();
    history.push("/");
  };
  const checked = async () => {
    await dispatch(
      TodoAction.checkTodoRequest({ ...todo!, checked: !todo!.checked })
    );
    await dispatch(TodoAction.getCurrentTodo(todo!._id));
  };
  const s = useStyles();
  return (
    <WithPreloader isLoading={!todo}>
      <Card className={s.card}>
        <CardHeader
          avatar={
            <Link to="/">
              <Typography variant="h5" component="h5">
                &lt; back
              </Typography>
            </Link>
          }
        ></CardHeader>
        <CardContent>
          <Typography variant="h5" component="h2">
            {todo?.text}
          </Typography>
          <Checkbox
            color="primary"
            checked={todo?.checked}
            onChange={() => checked()}
          />
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="span"
            onClick={() => editTodo()}
          >
            <EditIcon />
          </IconButton>
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="span"
            onClick={() => openModalForDelete()}
          >
            <DeleteIcon />
          </IconButton>
        </CardContent>
      </Card>
      <Modal
        type={modalType}
        handleEdit={saveEditTodo}
        handleDelete={deleteTasksOrTask}
        isOpen={openConfirmModal}
        handleClose={modalClose}
      />
    </WithPreloader>
  );
};

export default TodoInfo;

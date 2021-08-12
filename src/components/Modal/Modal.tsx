import React, { FC, useEffect, useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  TextField,
  Typography,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { useStyles } from "./modal.styles";
import { ModalProps, ModalType } from "./interfaces/modal.interfaces";
import { useSelector } from "../../store/store";
import { FilterType, ITodo } from "../../models/todo.model";
import { getTextForType } from "../utils";

export const Modal: FC<ModalProps> = ({
  isOpen,
  handleClose,
  type,
  handleDelete,
  handleEdit,
}) => {
  const s = useStyles();
  const tmpTodo = useSelector((state) => state.todo.tmpTodo);
  const [todo, setTodo] = useState<ITodo | null>(null);
  useEffect(() => {
    if (!tmpTodo) return;
    setTodo(tmpTodo);
  }, [tmpTodo]);
  const apply = () => {
    switch (type) {
      case ModalType.Delete: {
        handleDelete(tmpTodo?._id!);
        break;
      }
      case ModalType.DeleteAll: {
        handleDelete(FilterType.ALL);
        break;
      }
      case ModalType.DeleteChecked: {
        handleDelete(FilterType.DONE);
        break;
      }
      case ModalType.Edit: {
        handleEdit(todo!);
        break;
      }
      default:
        handleClose();
        break;
    }
  };
  const editTodoHandler: React.ChangeEventHandler<HTMLInputElement> = ({
    target,
  }) => {
    if (todo !== null && target.value.trim() !== " ") {
      setTodo({ ...todo, text: target.value });
    }
  };

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={isOpen}
    >
      <DialogTitle disableTypography className={s.root}>
        <Typography variant="h6">{getTextForType(type)}</Typography>
        {handleClose ? (
          <IconButton
            aria-label="close"
            className={s.closeButton}
            onClick={handleClose}
          >
            <CloseIcon />
          </IconButton>
        ) : null}
      </DialogTitle>
      <DialogContent className={s.dialogContent} dividers>
        {type !== ModalType.Edit ? (
          <Typography gutterBottom>
            {"if you do this you won't be able to revert the changes"}
          </Typography>
        ) : (
          <TextField
            label={"Edit"}
            onChange={editTodoHandler}
            value={todo?.text}
          />
        )}
      </DialogContent>
      <DialogActions className={s.dialogActions}>
        <Button variant="contained" onClick={handleClose} color="primary">
          {"Cancel"}
        </Button>

        <Button autoFocus variant="contained" onClick={apply} color="primary">
          {"Apply"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

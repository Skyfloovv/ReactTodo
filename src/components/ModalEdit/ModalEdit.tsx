import React, { FC } from "react";
import {
  Dialog,
  Typography,
  IconButton,
  Button,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { useStyles } from "../Modal/modal.styles";
import { DialogTitleProps } from "../Modal";
import { TodoEditModalProps } from "../../models/todo.model";

const DialogTitle1 = (props: DialogTitleProps) => {
  const { children, onClose, ...other } = props;
  const classes = useStyles();
  return (
    <DialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

export const ModalEdit: FC<
  TodoEditModalProps & { isOpen: boolean; setOpen: (state: boolean) => void }
> = ({ isOpen, setOpen, todo, saveChanges, changeTodo }) => {
  const s = useStyles();

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={isOpen}
      >
        <DialogTitle1 id="customized-dialog-title" onClose={handleClose}>
          Edit todo
        </DialogTitle1>
        <DialogContent className={s.dialogContent} dividers>
          <TextField label={"Edit"} onChange={changeTodo} value={todo} />
        </DialogContent>
        <DialogActions className={s.dialogActions}>
          <Button variant="contained" onClick={handleClose} color="primary">
            {"Cancel"}
          </Button>

          <Button
            autoFocus
            variant="contained"
            onClick={saveChanges}
            color="primary"
          >
            {"Save"}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

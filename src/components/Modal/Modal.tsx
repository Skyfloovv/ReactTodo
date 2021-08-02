import React, { FC } from "react";
import {
  Dialog,
  Typography,
  IconButton,
  Button,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { useStyles } from "./modal.styles";
import { DialogTitleProps, ModalProps } from "./interfaces/modal.interfaces";

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

export const Modal: FC<
  ModalProps & {
    isOpen: boolean;
    setOpen: (state: boolean) => void;
    handleClose: () => void;
  }
> = ({
  isOpen,
  handleClose,
  firstButton,
  secondButton,
  content,
  setOpen,
  headerText,
}) => {
  const s = useStyles();

  // const handleClose = () => {
  //   setOpen(false);
  // };

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={isOpen}
    >
      <DialogTitle1 id="customized-dialog-title" onClose={handleClose}>
        {headerText}
      </DialogTitle1>
      <DialogContent className={s.dialogContent} dividers>
        {typeof content !== "string" ? (
          content
        ) : (
          <Typography gutterBottom>{content}</Typography>
        )}
      </DialogContent>
      <DialogActions className={s.dialogActions}>
        {firstButton && (
          <Button
            variant="contained"
            onClick={firstButton.buttonHandler}
            color="primary"
          >
            {firstButton.buttonText}
          </Button>
        )}
        {secondButton && (
          <Button
            autoFocus
            variant="contained"
            onClick={secondButton.buttonHandler}
            color="primary"
          >
            {secondButton.buttonText}
          </Button>
        )}
      </DialogActions>
    </Dialog>
  );
};

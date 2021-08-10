import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  todoCheckInput: {
    color: theme.palette.grey[500],
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
  dialogContent: {
    padding: theme.spacing(2),
  },
  dialogActions: {
    margin: 0,
    padding: theme.spacing(1),
  },
}));

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
  todo: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    border: `1px solid ${theme.palette.text.secondary} `,
    borderRadius: theme.shape.borderRadius,
    "& > a": {
      paddingLeft: "5px",
      color: "inherit",
      textDecoration: "none",
    },
  },
  strike: {
    textDecoration: "line-through",
    color: theme.palette.primary.light,
  },
}));

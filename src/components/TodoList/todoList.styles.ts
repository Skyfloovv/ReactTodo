import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  TodoListContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    color: theme.palette.text.secondary,
  },
  footerListAction: {
    "& button": {
      margin: "5px",
    },
  },

  headerListAction: {
    "& button": {
      margin: "5px",
    },
  },
  TodoList: {
    width: "100%",
    maxWidth: "1000px",
  },
}));

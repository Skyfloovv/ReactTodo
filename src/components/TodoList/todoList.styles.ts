import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  TodoListContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
  },
  footerListAction: {
    "& button": {
      backgroundColor: "red!important",
      margin: "5px",
    },
  },

  headerListAction: {
    "& button": {
      backgroundColor: "red!important",
      margin: "5px",
    },
  },
  TodoList: {
    width: "100%",
    maxWidth: "1000px",
  },
}));

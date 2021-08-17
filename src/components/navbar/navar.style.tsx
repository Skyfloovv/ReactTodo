import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  nav: {
    display: "flex",
    backgroundColor: theme.palette.background.default,
    width: "100%",
    height: "50px",
    justifyContent: "center",
    alignItems: "center",
    color: theme.palette.text.primary,
  },
  content: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    margin: "0 10px 0 10px",
  },
}));

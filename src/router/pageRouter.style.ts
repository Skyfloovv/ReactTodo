import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  App: {
    width: "100%",
    minHeight: "100vh",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: theme.palette.background.paper,
  },
}));

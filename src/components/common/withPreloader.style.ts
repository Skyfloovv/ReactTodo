import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  preloader: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexGrow: 1,
    width: "100%",
    height: "100%",
  },
}));

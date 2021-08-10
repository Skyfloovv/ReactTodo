import React, { FC } from "react";
import "./App.css";
import PageRouter from "./components/PageRouter";
import { makeStyles, MuiThemeProvider } from "@material-ui/core";
import { createTheme1 } from "./styles/theme";

export const useStyles = makeStyles((theme) => ({
  App: {
    width: "100%",
    minHeight: "100vh",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.palette.grey[700],
  },
}));

const App: FC = () => {
  const theme = createTheme1({
    direction: "ltr",
    responsiveFontSizes: true,
    roundedCorners: true,
    theme: "DARK",
  });
  const s = useStyles();

  return (
    <MuiThemeProvider theme={theme}>
      <div className={s.App}>
        <PageRouter />
      </div>
    </MuiThemeProvider>
  );
};

export default App;

import React, { FC } from "react";
import PageRouter from "./components/PageRouter";
import { ThemeProvider } from "@material-ui/core/styles";
import { createThemeObject } from "./styles";

const App: FC = () => {
  const theme = createThemeObject({
    direction: "ltr",
    roundedCorners: true,
    responsiveFontSizes: true,
    theme: "DARK",
  });

  return (
    <ThemeProvider theme={theme}>
      <PageRouter />
    </ThemeProvider>
  );
};

export default App;

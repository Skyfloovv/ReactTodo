import { darkShadows, lightShadows } from "./shadows";
import type { ThemeOptions } from "@material-ui/core";

const THEMES = {
  DARK: "DARK",
  LIGHT: "LIGHT",
  NATURE: "NATURE",
};

export const themesOptions: Record<string, ThemeOptions> = {
  [THEMES.LIGHT]: {
    palette: {
      action: {
        active: "#6b778c",
      },
      background: {
        default: "#f4f5f7",
        paper: "#ffffff",
      },
      error: {
        contrastText: "#ffffff",
        main: "#f44336",
      },
      primary: {
        contrastText: "#ffffff",
        main: "#5664d2",
      },
      success: {
        contrastText: "#ffffff",
        main: "#4caf50",
      },
      text: {
        primary: "#172b4d",
        secondary: "#6b778c",
      },
      warning: {
        contrastText: "#ffffff",
        main: "#ff9800",
      },
    },
    shadows: lightShadows,
  },
  [THEMES.DARK]: {
    palette: {
      background: {
        default: "#171c24",
        paper: "#222b36",
      },
      divider: "rgba(145, 158, 171, 0.24)",
      error: {
        contrastText: "#ffffff",
        main: "#f44336",
      },
      primary: {
        contrastText: "#ffffff",
        main: "#688eff",
      },
      success: {
        contrastText: "#ffffff",
        main: "#4caf50",
      },
      text: {
        primary: "#ffffff",
        secondary: "#919eab",
      },
      warning: {
        contrastText: "#ffffff",
        main: "#ff9800",
      },
    },
    shadows: darkShadows,
  },
  [THEMES.NATURE]: {
    palette: {
      background: {
        default: "#1c2531",
        paper: "#293142",
      },
      divider: "rgba(145, 158, 171, 0.24)",
      error: {
        contrastText: "#ffffff",
        main: "#f44336",
      },
      primary: {
        contrastText: "#ffffff",
        main: "#01ab56",
      },
      success: {
        contrastText: "#ffffff",
        main: "#4caf50",
      },
      text: {
        primary: "#ffffff",
        secondary: "#919eab",
      },
      warning: {
        contrastText: "#ffffff",
        main: "#ff9800",
      },
    },
    shadows: darkShadows,
  },
};

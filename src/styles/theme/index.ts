import { createTheme, responsiveFontSizes } from "@material-ui/core/styles";
import type { Direction, Theme, ThemeOptions } from "@material-ui/core";
import { lightShadows } from "./shadows";

interface ThemeConfig {
  direction?: Direction;
  responsiveFontSizes?: boolean;
  roundedCorners?: boolean;
  theme?: string;
}

export const createTheme1 = (config: ThemeConfig = {}): Theme => {
  let theme = createTheme({
    direction: "ltr",
    components: {
      MuiAvatar: {
        styleOverrides: {
          fallback: {
            height: "75%",
            width: "75%",
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: "none",
          },
        },
      },
      MuiCardHeader: {
        defaultProps: {
          titleTypographyProps: {
            variant: "h6",
          },
        },
      },
      MuiLinearProgress: {
        styleOverrides: {
          root: {
            borderRadius: 3,
            overflow: "hidden",
          },
        },
      },
      MuiListItemIcon: {
        styleOverrides: {
          root: {
            minWidth: "auto",
            marginRight: "16px",
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundColor: "#ffff",
          },
        },
      },
      MuiInputBase: {
        styleOverrides: {
          input: {
            "&::placeholder": {
              opacity: 0.86,
              color: "#42526e",
            },
          },
        },
      },
    },
    typography: {
      button: {
        fontWeight: 600,
      },
      fontFamily:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
      h1: {
        fontWeight: 600,
        fontSize: "3.5rem",
      },
      h2: {
        fontWeight: 600,
        fontSize: "3rem",
      },
      h3: {
        fontWeight: 600,
        fontSize: "2.25rem",
      },
      h4: {
        fontWeight: 600,
        fontSize: "2rem",
      },
      h5: {
        fontWeight: 600,
        fontSize: "1.5rem",
      },
      h6: {
        fontWeight: 600,
        fontSize: "1.125rem",
      },
      overline: {
        fontWeight: 600,
      },
    },
    palette: {
      action: {
        active: "#6b778c",
      },
      background: {
        default: "#00000",
        paper: "#fafafa",
      },
      error: {
        contrastText: "#ffffff",
        main: "#f44336",
      },
      mode: "light",
      primary: {
        light: "#ADD8E6",
        main: "#00008B",
        contrastText: "#ffffff",
      },
      secondary: {
        main: "#ADD8E6",
        contrastText: "#ffffff",
      },
      white: {
        main: "#ffffff",
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
      kpYellowColors: {
        main: "#FFFF00",
      },
      kpPurpleColors: {
        main: "#800080",
      },
      kpGreenColors: {
        main: "#008000",
      },
      kpOrangeColors: {
        main: "#FFA500",
      },
      kpNeutralColors: {
        main: "#D3D3D3",
        dark: "#A9A9A9",
        light: "#696969",
      },
    },
    shadows: lightShadows,
    shape: {
      borderRadius: 12,
    },
  } as ThemeOptions);

  if (config.responsiveFontSizes) {
    theme = responsiveFontSizes(theme);
  }

  return theme;
};

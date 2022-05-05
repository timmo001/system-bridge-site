import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { deepPurple, grey } from "@mui/material/colors";

let theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      dark: deepPurple[800],
      main: deepPurple[700],
      light: deepPurple[600],
    },
    secondary: deepPurple,
    background: {
      default: grey[900],
      paper: "#292929",
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          margin: 8,
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: "24px 32px",
          "&:last-child": {
            paddingBottom: 16,
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          margin: 4,
        },
      },
    },
    MuiCardActions: {
      styleOverrides: {
        root: {
          justifyContent: "flex-end",
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        h2: {
          textAlign: "center",
        },
        h3: {
          marginTop: 64,
        },
        subtitle1: {
          textAlign: "center",
        },
      },
    },
  },
});
theme = responsiveFontSizes(theme);

export default theme;

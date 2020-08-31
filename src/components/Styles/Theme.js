import { createMuiTheme } from "@material-ui/core";
import { blue, orange, red, deepOrange, green } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: blue["A100"],
      main: blue["500"],
      dark: blue["A700"],
    },
    secondary: {
      light: orange["A100"],
      main: orange["400"],
      dark: orange["A700"],
    },
    error: {
      main: red["500"],
    },
  },
  status: {
    danger: red,
    hover: deepOrange,
    success: {
      main: green["500"],
    },
  },
});

export default theme;

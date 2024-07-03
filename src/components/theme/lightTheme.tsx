import { createTheme } from "@mui/material/styles";
import mainTheme from "./mainTheme";

const lightTheme = createTheme({
  ...mainTheme,
  palette: {
    primary: {
      main: "#FFF",
    },
    secondary: {
      main: "#111318",
    },
  },
});

export default lightTheme;

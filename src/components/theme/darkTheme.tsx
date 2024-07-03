import { createTheme } from "@mui/material/styles";
import mainTheme from './mainTheme';

const darkTheme = createTheme({
  ...mainTheme,
  palette: {
    primary: {
      main: "#111318",
    },
    secondary: {
      main: "#FFF",
    },
  },
});

export default darkTheme;

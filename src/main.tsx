import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ThemeProvider } from "@mui/material/styles";
import responsiveTheme from "./components/theme/theme.tsx";
import { MyGlobalStyles } from "./components/GlobalStyles/GlobalStyles.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={responsiveTheme}>
      <MyGlobalStyles>
        <App />
      </MyGlobalStyles>
    </ThemeProvider>
  </React.StrictMode>
);

import { StrictMode } from "react";
import "./index.css";
import App from "./App.tsx";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./theme.ts";
import ReactDOM from "react-dom";

ReactDOM.render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StrictMode>,
  document.getElementById("root")
);

import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import theme, { GlobalStyle } from "./style";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  rootElement
);

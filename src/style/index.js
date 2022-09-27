import { createGlobalStyle } from "styled-components";

const theme = {
  colors: {
    main: "#000000",
    white: "white",
    background: "#f1ecf0",
  },
  fontSize: "16px",
};

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  html {
    font-size: 62.5%;
    box-sizing: border-box;
  }

  body {
    box-sizing: inherit;
    font-family: 'ABeeZee', sans-serif;
    font-size: 1.4rem;
    line-height: 1.4;
    color: ${({ theme }) => theme.colors.main};
    background-color: white;
  }

  input {
    font-size: 1.2rem;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  main {
    padding: 1.5rem;
    text-align: center;
  }
`;

export default theme;

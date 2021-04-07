import { createGlobalStyle } from "styled-components";
export default {
  colours: {
    PRIMARY1: "#FFCA1E",
    PRIMARY2: "#0E0E0E",
    PRIMARY3: "#F2F2F2",
  },
};

export const GlobalStyle = createGlobalStyle`
  * {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
  }

  html, body, #__next {
    height: 100%;
    margin: 0;
  }
`;

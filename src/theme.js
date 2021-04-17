import { createGlobalStyle } from "styled-components";
export default {
  colours: {
    PRIMARY1: "#FFCA1E",
    PRIMARY2: "#000",
    PRIMARY3: "#F2F2F2",
  },
};

export const GlobalStyle = createGlobalStyle`
  * {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    padding: 0;
    margin: 0;
  }
  html {
    background-color: ${({ theme }) => theme.colours.PRIMARY2};
  }
`;

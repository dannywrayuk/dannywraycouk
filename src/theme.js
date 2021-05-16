import { createGlobalStyle } from "styled-components";
export default {
  colours: {
    PRIMARY1: "#FFCA1E",
    PRIMARY2: "#0a0a0a",
    PRIMARY3: "#F2F2F2",
    SECONDARY1: "#1D1D1D",
    TERTIARY1: "#2a2a2a",
  },
};

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
  }
  html {
    font-family: "Montserrat", sans-serif;
    background-color: ${({ theme }) => theme.colours.PRIMARY2};
  }

  .katex-display>.katex>.katex-html>.base{
    margin-bottom: 20px;
  }
  .katex-display>.katex>.katex-html{
    white-space: normal;
  }
  @media only screen and (max-width: 600px) {
    .katex-display>.katex>.katex-html>.tag{
        position: relative !important;
        float: right;
    }
    .katex-display>.katex>.katex-html{
        transform: scale(0.8);
    }
  }
`;

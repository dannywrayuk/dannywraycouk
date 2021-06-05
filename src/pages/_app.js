import { ThemeProvider, createGlobalStyle } from "styled-components";
import Config from "../config";

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
  }
  html {
    font-family: "Montserrat", sans-serif;
    background-color: ${({ theme }) => theme.Colours.PRIMARY2};
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

const MyApp = ({ Component, pageProps }) => (
  <ThemeProvider theme={Config.Theme}>
    <GlobalStyle />
    <Component {...pageProps} />
  </ThemeProvider>
);

export default MyApp;

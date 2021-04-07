import { ThemeProvider } from "styled-components";
import theme, { GlobalStyle } from "../theme";

const MyApp = ({ Component, pageProps }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Component {...pageProps} />
  </ThemeProvider>
);

export default MyApp;

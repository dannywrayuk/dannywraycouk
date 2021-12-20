import { ThemeProvider } from "@emotion/react";
import theme from "@utils/theme";

const MyApp = ({ Component, pageProps }) => (
  <ThemeProvider theme={theme}>
    <Component {...pageProps} />
  </ThemeProvider>
);

export default MyApp;

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
  "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
  sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
  monospace;
}

:root{
  --MainYellow: #FFCA1E;

  --ySpaceSmall: 25px;
  --ySpaceMedium: 60px;
  --ySpaceLarge: 100px;
  --ySpaceHeader: 48px;

  --mobileBreakpoint: 600px;
  --desktopBreakpoint: 992;
}

* {
    padding: 0;
    margin: 0;
}

html, body, #root{
    height: 100%;
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


export default GlobalStyle;

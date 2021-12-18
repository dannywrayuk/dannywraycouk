import NextDocument, { Html, Head, Main, NextScript } from "next/document";
export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link href="preload_colors.css" rel="stylesheet" />
          <script
            dangerouslySetInnerHTML={{
              __html: `document.documentElement.setAttribute('colorMode', 'dark');`,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

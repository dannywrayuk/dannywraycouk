import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import GoogleFonts from "@utils/GoogleFonts";
export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link href="globals.css" rel="stylesheet" />
          <script
            dangerouslySetInnerHTML={{
              __html: `document.documentElement.setAttribute('colorMode', 'dark');`,
            }}
          />
          <GoogleFonts
            fonts={{
              Sora: { weights: [400, 700] },
              Montserrat: {},
              Inter: {},
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

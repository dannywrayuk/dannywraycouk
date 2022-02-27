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
              __html: `document.documentElement.setAttribute('colorMode', 'light');`,
            }}
          />
          <GoogleFonts
            fonts={{
              Sora: { weights: [400, 600, 700] },
              Montserrat: { weights: [400, 600, 700] },
              Inter: { weights: [400, 600, 700] },
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

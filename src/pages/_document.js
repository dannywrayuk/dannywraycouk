import { Html, Head, Main, NextScript } from "next/document";
import {
  GoogleFonts,
  GoogleAnalytics,
  ColorModeScript,
  KatexScript,
} from "@components/Head";

export default () => (
  <Html lang="en">
    <Head>
      <ColorModeScript />
      <GoogleAnalytics />
      <GoogleFonts
        fonts={{
          Sora: { weights: [400, 600, 700] },
          Montserrat: { weights: [400, 600, 700] },
          Inter: { weights: [400, 600, 700] },
          Karla: { weights: [400, 600, 700] },
        }}
      />
      <KatexScript />
    </Head>
    <body>
      <Main />
      <div id="portal" />
      <NextScript />
    </body>
  </Html>
);

import { Html, Head, Main, NextScript } from "next/document";
import GoogleFonts from "@utils/GoogleFonts";

export default () => (
  <Html lang="en">
    <Head>
      <link href="/globals.css" rel="stylesheet" />
      <script
        dangerouslySetInnerHTML={{
          __html: `
          const mode = localStorage.getItem('colorMode');
          document.documentElement.setAttribute('colorMode', mode ? mode : "light");`,
        }}
      />
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-TC3WVHZ3S7"
      ></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-TC3WVHZ3S7');`,
        }}
      />
      <GoogleFonts
        fonts={{
          Sora: { weights: [400, 600, 700] },
          Montserrat: { weights: [400, 600, 700] },
          Inter: { weights: [400, 600, 700] },
          Karla: { weights: [400, 600, 700] },
        }}
      />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/katex@0.13.3/dist/katex.min.css"
        integrity="sha384-ThssJ7YtjywV52Gj4JE/1SQEDoMEckXyhkFVwaf4nDSm5OBlXeedVYjuuUd0Yua+"
        crossOrigin="anonymous"
      />
    </Head>
    <body>
      <Main />
      <div id="portal" />
      <NextScript />
    </body>
  </Html>
);

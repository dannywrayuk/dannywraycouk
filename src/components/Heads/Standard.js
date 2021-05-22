import Head from "next/head";
import Config from "../../config";

const { StandardTitle } = Config.Head;

export const StandardHead = ({ title, children }) => (
  <>
    <Head>
      <title>{title || StandardTitle}</title>
      <link rel="icon" type="image/png" href="/favicon.png" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,700;1,400;1,700&display=swap"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/katex@0.13.3/dist/katex.min.css"
        integrity="sha384-ThssJ7YtjywV52Gj4JE/1SQEDoMEckXyhkFVwaf4nDSm5OBlXeedVYjuuUd0Yua+"
        crossOrigin="anonymous"
      />
      <script
        defer
        src="https://cdn.jsdelivr.net/npm/katex@0.13.3/dist/katex.min.js"
        integrity="sha384-Bi8OWqMXO1ta+a4EPkZv7bYGIes7C3krGSZoTGNTAnAn5eYQc7IIXrJ/7ck1drAi"
        crossOrigin="anonymous"
      ></script>
    </Head>
    {children}
  </>
);
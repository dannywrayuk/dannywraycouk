import Head from "next/head";
import "highlight.js/styles/vs2015.css";
const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default App;

import { CommonMetaTags } from "@components/Head";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <CommonMetaTags />
      <Component {...pageProps} />
    </>
  );
};

export default App;

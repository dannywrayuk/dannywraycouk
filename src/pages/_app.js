import { CommonMetaTags, GoogleAnalytics } from "@components/Head";
import "../../public/globals.css";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <CommonMetaTags />
      <GoogleAnalytics />
      <Component {...pageProps} />
    </>
  );
};

export default App;

import { CommonMetaTags } from "@components/Head";
import "../../public/globals.css";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <CommonMetaTags />
      <Component {...pageProps} />
    </>
  );
};

export default App;

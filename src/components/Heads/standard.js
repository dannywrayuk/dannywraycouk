import Head from "next/head";
import constants from "../../constants";

const { StandardTitle } = constants.Head;

const StandardHead = ({ title, children }) => (
  <>
    <Head>
      <title>{title || StandardTitle}</title>
      <link rel="icon" type="image/png" href="favicon.png" />
    </Head>
    {children}
  </>
);

export default StandardHead;

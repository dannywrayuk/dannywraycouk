import { Layout } from "@components/Layout";

import { Landing } from "./sections/Landing";
import { Featured } from "./sections/Featured";
import { Contact } from "./sections/Contact";

export const Home = () => {
  return (
    <Layout>
      <Landing />
      <Featured />
      <Contact />
    </Layout>
  );
};

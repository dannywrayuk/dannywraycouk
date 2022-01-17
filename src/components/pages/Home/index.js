import { Layout } from "@components/Layout";

import { Landing } from "./sections/Landing";
import { About } from "./sections/About";
import { Featured } from "./sections/Featured";
import { Contact } from "./sections/Contact";

export const Home = () => {
  return (
    <Layout>
      <Landing />
      <About />
      <Featured />
      <Contact />
    </Layout>
  );
};

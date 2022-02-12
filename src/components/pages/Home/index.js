import { Layout } from "@components/Layout";

import { Landing } from "./sections/Landing";
import { Featured } from "./sections/Featured";

export const Home = () => {
  return (
    <Layout>
      <Landing />
      <Featured />
    </Layout>
  );
};

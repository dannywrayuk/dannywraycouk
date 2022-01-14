import styled from "@emotion/styled";
import { Layout } from "@components/Layout";
import { Navigation } from "@components/Navigation";
import { Footer } from "@components/Footer";

import { Landing } from "./sections/Landing";
import { About } from "./sections/About";
import { Featured2 } from "./sections/Featured2";
import { Contact } from "./sections/Contact";

const SectionSpacing = styled.div({
  display: "flex",
  flexDirection: "column",
  rowGap: "300px",
});

export const Home = () => {
  return (
    <Layout footer={<Footer />}>
      <Navigation />
      <SectionSpacing>
        <Landing />
        <About />
        <Featured2 />
        <Contact />
      </SectionSpacing>
    </Layout>
  );
};

import styled from "@emotion/styled";
import { Layout } from "@components/Layout";
import { SubHeading, Column } from "@components/core";

const Wrapper = styled(Column)({
  maxWidth: "700px",
  margin: "0 auto",
});

const Test = () => (
  <Layout>
    <Wrapper>
      <SubHeading _css={{ margin: "60px 0" }}>{meta.title}</SubHeading>
    </Wrapper>
  </Layout>
);

export default Test;

export const meta = {
  id: "thoughts/test2",
  date: "2000/01/03",
  title: "Hello dynamic posts again",
  blurb:
    "This is as test description for a dynamic post. This data should be loaded in by the getStaticProps method.",
};

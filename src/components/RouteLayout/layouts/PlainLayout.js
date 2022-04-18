import { Column } from "@components/core";
import { Layout } from "@components/Layout";
import styled from "@emotion/styled";

const Wrapper = styled(Column)({
  maxWidth: "700px",
  margin: "60px auto 0",
  rowGap: "20px",
  width: "100%",
  padding: "0 20px",
});

export const PlainLayout = ({ children }) => (
  <Layout>
    <Wrapper ai="stretch">{children}</Wrapper>
  </Layout>
);

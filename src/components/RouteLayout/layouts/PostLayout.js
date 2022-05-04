import { Column, SubHeading, Text } from "@components/core";
import { Layout } from "@components/Layout";
import styled from "@emotion/styled";

const Wrapper = styled(Column)({
  maxWidth: "700px",
  margin: "0 auto",
  rowGap: "20px",
  width: "100%",
  padding: "0 20px",
});

export const PostLayout = ({
  children,
  data: { title, abstract },
  className,
}) => (
  <Layout>
    <Wrapper>
      <SubHeading _css={{ marginTop: "60px" }}>{title}</SubHeading>
      <Text>{abstract}</Text>
    </Wrapper>
    <Wrapper ai="stretch" className={className}>
      {children}
    </Wrapper>
  </Layout>
);

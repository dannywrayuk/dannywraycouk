import { Text, LinkButton, Column } from "@components/core";
import styled from "@emotion/styled";

const Wrapper = styled(Column)({
  color: "var(--text)",
  rowGap: "45px",
  marginBottom: "100px",
});

export const Contact = () => (
  <Wrapper>
    <Text>Still can't find what you're looking for?</Text>
    <LinkButton variant="primary" href="/">
      <Text>Contact me</Text>
    </LinkButton>
  </Wrapper>
);

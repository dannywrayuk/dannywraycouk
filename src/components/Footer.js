import styled from "@emotion/styled";
import { CapsText } from "@components/core";
import { mq } from "@utils/breakpoints";

const Wrapper = styled.div({
  display: "flex",
  justifyContent: "space-between",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  color: "var(--color-fg-default)",
  padding: "10px 0",
  rowGap: "30px",
  [mq.sm]: {
    flexDirection: "row",
    minHeight: "60px",
    padding: "0 15px",
  },
  [mq.md]: {
    padding: "0 50px",
    margin: "0 50px",
  },
});

export const Footer = () => (
  <Wrapper>
    <CapsText _css={{ fontSize: "1.25rem" }}>~</CapsText>
    <CapsText>Danny wray {process.env.year}</CapsText>
  </Wrapper>
);

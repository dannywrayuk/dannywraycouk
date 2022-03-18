import styled from "@emotion/styled";
import { Label } from "@components/core";
import { md, sm } from "@utils/breakpoints";

const Wrapper = styled.div({
  display: "flex",
  justifyContent: "space-between",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  color: "var(--text)",
  padding: "10px 0",
  rowGap: "30px",
  [sm]: {
    flexDirection: "row",
    minHeight: "60px",
    padding: "0 15px",
  },
  [md]: {
    padding: "0 50px",
    margin: "0 50px",
  },
});

export const Footer = () => (
  <Wrapper>
    <Label _css={{ fontSize: "1.25rem" }}>~</Label>
    <Label>Danny wray {process.env.year}</Label>
  </Wrapper>
);

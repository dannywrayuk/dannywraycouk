import styled from "@emotion/styled";
import { Label } from "@components/core";
import { SocialIcons } from "@components/SocialIcons";
import { md, sm } from "@utils/breakpoints";

const Wrapper = styled.div({
  display: "flex",
  justifyContent: "space-between",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  color: "var(--text)",
  borderTop: "var(--text) 1px solid",
  padding: "10px 0",
  rowGap: "10px",
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
    <Label>Danny wray 2022</Label>
    <SocialIcons />
  </Wrapper>
);

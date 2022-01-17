import styled from "@emotion/styled";
import { Label } from "@components/core";
import { SocialIcons } from "@components/SocialIcons";

const Wrapper = styled.div({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  minHeight: "60px",
  maxWidth: "1296px",
  padding: "0 50px",
  margin: "0 50px",
  color: "var(--text)",
  borderTop: "var(--text) 1px solid",
});

export const Footer = () => (
  <Wrapper>
    <Label>Danny wray 2022</Label>
    <SocialIcons />
  </Wrapper>
);

import styled from "@emotion/styled";
import { Label, Row } from "@components/core";
import { SocialIcons } from "@components/SocialIcons";

const ShapeBackground = styled.div({
  minHeight: "125px",
  padding: "50px 50px 0",
  display: "grid",
  gridTemplateColumns: "1fr minmax(auto, 1296px) 1fr",
  color: "var(--text)",
});

export const Footer = () => (
  <ShapeBackground>
    <Row
      _css={{
        gridColumn: "2",
        borderTop: "var(--text) 1px solid",
        padding: "0 50px",
      }}
      jc="space-between"
    >
      <Label>Danny wray 2022</Label>
      <SocialIcons />
    </Row>
  </ShapeBackground>
);

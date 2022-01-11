import styled from "@emotion/styled";
import { Label, Row } from "@components/core";
import { SocialIcons } from "@components/SocialIcons";

const ShapeBackground = styled.div({
  backgroundImage: "url(/img/FooterShape.svg)",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  minHeight: "125px",
  padding: "50px 50px 0",
  display: "grid",
  gridTemplateColumns: "1fr minmax(auto, 1296px) 1fr",
});

export const Footer = () => (
  <ShapeBackground>
    <Row _css={{ gridColumn: "2" }} jc="space-between">
      <SocialIcons />
      <Label>Danny wray 2022</Label>
    </Row>
  </ShapeBackground>
);

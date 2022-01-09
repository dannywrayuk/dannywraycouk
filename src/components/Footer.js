import styled from "@emotion/styled";
import { Label, AlignV, SpaceBetween } from "@components/core";
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
    <AlignV _css={{ gridColumn: "2" }}>
      <SpaceBetween>
        <AlignV>
          <SocialIcons />
        </AlignV>
        <Label>Danny wray 2022</Label>
      </SpaceBetween>
    </AlignV>
  </ShapeBackground>
);

import styled from "@emotion/styled";
import { AlignV } from "@components/core";

const Spacing = styled.div(
  {
    display: "flex",
    justifyContent: "space-evenly",
    columnGap: "55px",
    margin: "0 55px",
  },
  ({ hFlip }) => hFlip && { flexDirection: "row-reverse" }
);

const TextWrapper = styled(AlignV)(
  {
    maxWidth: "360px",
    rowGap: "25px",
  },
  ({ flip }) => flip && { textAlign: "right", alignItems: "end" }
);

export const ImageWithText = ({ image, hFlip, hFlipText, children }) => (
  <Spacing hFlip={hFlip}>
    <AlignV _css={{ maxWidth: "650px" }}>{image}</AlignV>
    <TextWrapper flip={hFlipText}>{children}</TextWrapper>
  </Spacing>
);

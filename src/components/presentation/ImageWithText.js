import styled from "@emotion/styled";
import { Column, Row } from "@components/core";

const Spacing = styled.div(
  {
    display: "flex",
    justifyContent: "space-evenly",
    columnGap: "55px",
    margin: "0 55px",
  },
  ({ invert }) => invert && { flexDirection: "row-reverse" }
);

const TextWrapper = styled(Column)(
  {
    maxWidth: "360px",
    rowGap: "25px",
    alignItems: "flex-start",
  },
  ({ invert }) => invert && { textAlign: "right", alignItems: "flex-end" }
);

export const ImageWithText = ({ image, invert, children }) => (
  <Spacing invert={invert}>
    <Row _css={{ maxWidth: "650px" }}>{image}</Row>
    <TextWrapper invert={invert}>{children}</TextWrapper>
  </Spacing>
);

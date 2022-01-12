import styled from "@emotion/styled";
import { Column, Row } from "@components/core";

const Spacing = styled.div(
  {
    display: "flex",
    justifyContent: "space-evenly",
    columnGap: "55px",
    margin: "0 55px",
  },
  ({ swap }) => swap && { flexDirection: "row-reverse" }
);

const TextWrapper = styled(Column)(
  {
    maxWidth: "360px",
    rowGap: "25px",
    alignItems: "flex-start",
    color: "var(--text)",
  },
  ({ invertText }) =>
    invertText && { textAlign: "right", alignItems: "flex-end" }
);

export const ImageWithText = ({ image, swap, invertText, children }) => (
  <Spacing swap={swap}>
    <Row _css={{ maxWidth: "650px" }}>{image}</Row>
    <TextWrapper invertText={invertText}>{children}</TextWrapper>
  </Spacing>
);

import styled from "@emotion/styled";
import { Column, Row } from "@components/core";
import { md } from "@utils/breakpoints";

const Spacing = styled.div(
  {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "column",
    rowGap: "55px",
    width: "100%",
  },
  ({ swap }) => ({
    [md]: {
      flexDirection: swap ? "row-reverse" : "row",
      columnGap: "55px",
      margin: "0 55px",
      width: "unset",
    },
  })
);

const TextWrapper = styled(Column)(
  {
    rowGap: "25px",
    alignItems: "flex-start",
    color: "var(--text)",
  },
  ({ invertText }) => ({
    [md]: {
      maxWidth: "360px",
      ...(invertText && {
        textAlign: "right",
        alignItems: "flex-end",
      }),
    },
  })
);

const ImageWrapper = styled(Row)({
  width: "100%",
  [md]: { maxWidth: "650px" },
});

export const ImageWithText = ({ image, swap, invertText, children }) => (
  <Spacing swap={swap}>
    <ImageWrapper>{image}</ImageWrapper>
    <TextWrapper invertText={invertText}>{children}</TextWrapper>
  </Spacing>
);

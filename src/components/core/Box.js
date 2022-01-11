import styled from "@emotion/styled";
import { useCSSProp } from "@utils/useCSSProp";

export const Box = styled.div(useCSSProp);

const flexProps = ({
  flexDirection,
  dir,
  justifyContent,
  jc,
  alignItems,
  ai,
}) => ({
  flexDirection: flexDirection || dir,
  justifyContent: justifyContent || jc,
  alignItems: alignItems || ai,
});
export const Flex = styled.div({ display: "flex" }, flexProps, useCSSProp);

export const Row = styled.div(
  {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  flexProps,
  useCSSProp
);

export const Column = styled.div(
  {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  flexProps,
  useCSSProp
);

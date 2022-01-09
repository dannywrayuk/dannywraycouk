import styled from "@emotion/styled";
import { useCSSProp } from "@utils/useCSSProp";

export const Box = styled.div(useCSSProp);

export const Flex = styled.div({ display: "flex" }, useCSSProp);

export const AlignV = styled.div(
  { display: "flex", flexDirection: "column", justifyContent: "center" },
  useCSSProp
);

export const AlignH = styled.div(
  { display: "flex", flexDirection: "row", justifyContent: "center" },
  useCSSProp
);

export const SpaceBetween = styled.div(
  { display: "flex", justifyContent: "space-between" },
  useCSSProp
);
export const SpaceEvenly = styled.div(
  { display: "flex", justifyContent: "space-evenly" },
  useCSSProp
);

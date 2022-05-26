import styled from "@emotion/styled";
import { useCSSProp } from "@utils/useCSSProp";
import { boxProps, flexProps } from "./styleProps";

export const Box = styled.div(boxProps, useCSSProp);

export const Flex = styled.div(
  { display: "flex" },
  boxProps,
  flexProps,
  useCSSProp
);

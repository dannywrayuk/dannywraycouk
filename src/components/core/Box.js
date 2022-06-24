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

export const BorderBox = styled(Box)(({ bg }) => ({
  border: "1px solid var(--color-border-default)",
  borderRadius: "0.5em",
  padding: "15px",
  backgroundColor: `var(--color-${bg})`,
  position: "relative",
}));

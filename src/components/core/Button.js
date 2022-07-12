import styled from "@emotion/styled";
import { useCSSProp } from "@utils/useCSSProp";
import { boxProps } from "./styleProps";

export const Button = styled.button(
  {
    background: "none",
    border: "none",
    color: "unset",
    display: "block",
    lineHeight: 0,
    cursor: "pointer",
  },
  boxProps,
  useCSSProp
);

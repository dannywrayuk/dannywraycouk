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

export const YellowButton = styled.button(
  {
    background: "var(--color-brand-primary)",
    border: "none",
    borderRadius: "5px",
    color: "black",
    display: "block",
    cursor: "pointer",
    padding: "5px 10px",
  },
  boxProps,
  useCSSProp
);

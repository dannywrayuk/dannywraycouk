import styled from "@emotion/styled";
import { useCSSProp } from "@utils/useCSSProp";
import { textProps } from "./styleProps";

export const Text = styled.p(
  {
    fontSize: "1rem",
    fontFamily: "var(--Karla)",
    lineHeight: "2em",
  },
  textProps,
  useCSSProp
);

export const CapsText = styled.p(
  {
    fontSize: "1rem",
    fontFamily: "var(--Montserrat)",
    letterSpacing: "0.2em",
    lineHeight: "1em",
    textTransform: "uppercase",
  },
  textProps,
  useCSSProp
);

export const TextBubble = styled.span(
  {
    backgroundColor: "var(--color-brand-primary)",
    color: "black",
    padding: "5px 8px",
    borderRadius: 5,
    fontWeight: 600,
    whiteSpace: "nowrap",
  },
  textProps,
  useCSSProp
);

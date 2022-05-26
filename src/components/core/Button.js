import styled from "@emotion/styled";
import { useCSSProp } from "@utils/useCSSProp";

export const Button = styled.button(
  {
    background: "none",
    border: "none",
    color: "unset",
    display: "block",
    lineHeight: 0,
  },
  useCSSProp
);

export const PrimaryButton = styled.button({
  backgroundColor: "var(--color-fg-default)",
  border: "none",
  borderRadius: "100px",
  padding: "20px 30px",
  color: "var(--color-bg-default)",
  display: "inline-flex",
  justifyContent: "center",
  flexDirection: "row",
});

export const SecondaryButton = styled.button({
  background: "none",
  border: "2px solid var(--color-fg-default)",
  borderRadius: "100px",
  padding: "20px 30px",
  color: "var(--color-fg-default)",
  display: "inline-flex",
  justifyContent: "center",
  flexDirection: "row",
});

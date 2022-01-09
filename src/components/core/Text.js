import styled from "@emotion/styled";
import { useCSSProp } from "@utils/useCSSProp";

export const Text = styled.p(
  {
    fontSize: "1.125rem",
    fontFamily: "var(--Inter)",
    lineHeight: "1.5em",
  },
  useCSSProp
);

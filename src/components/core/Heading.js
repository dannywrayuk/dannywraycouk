import styled from "@emotion/styled";
import { useCSSProp } from "@utils/useCSSProp";
import { boxProps, textProps } from "./styleProps";

export const Heading = styled.h1(
  {
    fontSize: "var(--fs-xl)",
    fontFamily: "var(--Sora)",
    fontWeight: 400,
  },
  boxProps,
  textProps,
  useCSSProp
);

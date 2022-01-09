import styled from "@emotion/styled";
import { useCSSProp } from "@utils/useCSSProp";

export const Heading = styled.h1(
  {
    fontSize: "3rem",
    fontFamily: "var(--Sora)",
    letterSpacing: "-0.035em",
  },
  useCSSProp
);

export const SubHeading = styled.h1(
  {
    fontSize: "2.5rem",
    fontFamily: "var(--Sora)",
    letterSpacing: "-0.035em",
  },
  useCSSProp
);

export const SubSubHeading = styled.h1(
  {
    fontSize: "1.6rem",
    fontFamily: "var(--Sora)",
    letterSpacing: "-0.035em",
  },
  useCSSProp
);

export const Label = styled.h1(
  {
    fontSize: "1.25rem",
    fontFamily: "var(--Montserrat)",
    fontWeight: "normal",
    letterSpacing: "0.2em",
    textTransform: "uppercase",
  },
  useCSSProp
);

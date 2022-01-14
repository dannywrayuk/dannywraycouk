import styled from "@emotion/styled";
import { useCSSProp } from "@utils/useCSSProp";

const textProps = ({ color }) => ({ color });

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

export const Text = styled.p(
  {
    fontSize: "1.125rem",
    fontFamily: "var(--Inter)",
    lineHeight: "1.5em",
  },
  textProps,
  useCSSProp
);

export const TimelineLabel = styled.p(
  {
    fontSize: "0.75rem",
    fontWeight: "600",
    fontFamily: "var(--Inter)",
    lineHeight: "1.5rem",
  },
  textProps
);

import { forwardRef } from "react";
import { Box, Variants, withVariants } from "./system";

const variants: Variants = {
  SubHeading: {
    fontSize: "2.5rem",
  },
  SubSubHeading: {
    fontSize: "1.6rem",
  },
  Label: {
    fontFamily: "Montserrat",
    textTransform: "uppercase",
    letterSpacing: "0.2em",
    fontWeight: "normal",
    fontSize: "1.25rem",
    _hover: { color: "red" },
  },
};

export const Heading = withVariants(
  variants,
  forwardRef((props, ref) => (
    <Box as="h1" ref={ref} fontSize="3rem" fontFamily="Sora" {...props} />
  ))
);

import { forwardRef } from "react";
import { Box, withVariants, Variants, StyleProps } from "@style-system";

const variants: Variants = {};
const normalize: StyleProps = {
  background: "none",
  border: "none",
  color: "unset",
  display: "block",
  lineHeight: 0,
};

export const Button = withVariants(
  variants,
  forwardRef((props, ref) => (
    <Box as="button" {...normalize} ref={ref} {...props} />
  ))
);

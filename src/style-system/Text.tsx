import React, { forwardRef } from "react";
import { Box } from "./system";

export const Text = forwardRef((props, ref) => (
  <Box as="p" ref={ref} fontFamily="Inter" fontSize="1.125rem" {...props} />
));

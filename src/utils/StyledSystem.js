import React from "react";
import styled from "@emotion/styled";

import shouldForwardProp from "@styled-system/should-forward-prop";
import {
  compose,
  space,
  typography,
  color,
  layout,
  flexbox,
  border,
  background,
  position,
  grid,
  shadow,
  buttonStyle,
  textStyle,
  colorStyle,
} from "styled-system";

const allStyleProps = compose(
  space,
  typography,
  color,
  layout,
  flexbox,
  border,
  background,
  position,
  grid,
  shadow,
  buttonStyle,
  textStyle,
  colorStyle
);

export const StyledSystem = ({
  as = "div",
  variants = {},
  variant = 0,
  baseStyle,
  ...rest
}) =>
  React.createElement(
    styled(as, {
      shouldForwardProp,
    })(allStyleProps),
    { ...baseStyle, ...variants[variant], ...rest }
  );

export default StyledSystem;

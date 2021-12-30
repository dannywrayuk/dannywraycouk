import styled, { StyledComponent } from "@emotion/styled";
import {
  createShouldForwardProp,
  props,
} from "@styled-system/should-forward-prop";
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
  styleFn,
  SpaceProps,
  LayoutProps,
  ColorProps,
  TypographyProps,
  FlexboxProps,
  BorderProps,
  BackgroundProps,
  PositionProps,
  GridProps,
  ShadowProps,
} from "styled-system";

type StaticStyleProps = SpaceProps &
  TypographyProps &
  ColorProps &
  LayoutProps &
  FlexboxProps &
  BorderProps &
  BackgroundProps &
  PositionProps &
  GridProps &
  ShadowProps;

type StyleExtensionProps = {
  textTransform?: string;
  textDecoration?: string;
  w?: Number | string;
  h?: Number | string;
};

const extraProps: Record<string, string> = {
  w: "width",
  h: "height",
  maxW: "maxWidth",
  maxH: "maxHeight",
  minW: "minWidth",
  minH: "minHeight",
  textTransform: "textTransform",
  textDecoration: "textDecoration",
};

const styleExtension = (props: any) => {
  let values: any = {};
  console.log("ran se");
  Object.keys(extraProps).forEach((prop) => {
    values[extraProps[prop]] = props[prop];
  });
  return values;
};

type PseudoClassProps = {
  _hover?: StaticStyleProps & StyleExtensionProps;
};

const pseudoClassExtension = ({ _hover }: any) => ({ "&:hover": _hover });

export type StyleProps = StaticStyleProps &
  StyleExtensionProps &
  PseudoClassProps;

export type SystemProps = {
  as: React.ElementType;
  ref: React.ForwardedRef<unknown>;
  variant?: string;
} & StyleProps;

const allStyleProps: styleFn = compose(
  space,
  typography,
  color,
  layout,
  flexbox,
  border,
  background,
  position,
  grid,
  shadow
);

const shouldForwardProp = createShouldForwardProp([
  ...props,
  ...Object.keys(extraProps),
]);

export const Box: StyledComponent<SystemProps> = styled("div", {
  shouldForwardProp,
})(allStyleProps, styleExtension, pseudoClassExtension);

export type Variants = Record<string, StyleProps>;

export const withVariants =
  (variants: Variants, Component: React.ElementType) =>
  ({ variant, ...rest }: SystemProps) => {
    if (variants && variant)
      return <Component {...variants[variant]} {...rest} />;
    return <Component {...rest} />;
  };

export const Flex = styled(Box)({ display: "flex" });

import styled from "@emotion/styled";
import { mq } from "@utils/breakpoints";
import NextLink from "next/link";

const linkVariants = {
  noStyle: {
    textDecoration: "none",
  },
  noStyleHover: {
    textDecoration: "none",
    ":hover": {
      textDecoration: "underline",
    },
  },
  default: {
    textDecoration: "none",
    color: "var(--color-fg-link)",
    fontWeight: 600,
    ":hover": {
      textDecoration: "underline",
    },
  },
  underlineAlways: {
    textDecoration: "underline",
  },
};

export const linkProps = ({ variant, noWrap }) => ({
  ...(linkVariants[variant] || linkVariants.default),
  whiteSpace: noWrap && "nowrap",
});

export const LinkInternal = styled.a(
  {
    cursor: "pointer",
    color: "inherit",
  },
  linkProps
);

export const Link = ({ children, href, ...rest }) => (
  <NextLink href={href} passHref>
    <LinkInternal {...rest}>{children}</LinkInternal>
  </NextLink>
);

export const LinkButton = styled(Link)({
  border: "1px solid var(--color-border-default)",
  padding: "0 10px",
  borderRadius: "0.5em",
  display: "block",
  textAlign: "center",
  textDecoration: "none",
  color: "inherit",
  ":hover": {
    textDecoration: "none",
    backgroundColor: "var(--color-bg-muted)",
  },
  [mq.sm]: {
    display: "inline-block",
  },
});

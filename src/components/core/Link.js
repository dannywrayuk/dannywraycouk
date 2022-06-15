import styled from "@emotion/styled";
import { mq } from "@utils/breakpoints";
import NextLink from "next/link";
import { linkProps } from "./styleProps";
import { Text } from "./Text";

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
  backgroundColor: "var(--color-bg-muted)",
  padding: "10px 20px",
  borderRadius: "0.5em",
  display: "block",
  textAlign: "center",
  [mq.sm]: {
    display: "inline",
  },
});

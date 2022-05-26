import styled from "@emotion/styled";
import NextLink from "next/link";
import { linkProps } from "./styleProps";

const LinkInternal = styled.a(
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

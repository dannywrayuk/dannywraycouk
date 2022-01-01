import NextLink from "next/link";

export const Link = ({ children, href, ...rest }) => (
  <NextLink href={href}>
    <a {...rest}>{children}</a>
  </NextLink>
);

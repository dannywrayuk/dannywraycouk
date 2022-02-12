import styled from "@emotion/styled";
import NextLink from "next/link";

const BasicLink = styled.a({
  textDecoration: "underline",
});

export const Link = ({ children, href, ...rest }) => (
  <NextLink href={href}>
    <BasicLink {...rest}>{children}</BasicLink>
  </NextLink>
);

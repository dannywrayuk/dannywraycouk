import styled from "styled-components";
import NextLink from "next/link";

const StyledAnchor = styled.a`
  color: unset;
  text-decoration: unset;
`;

const Link = ({ href = "", children }) => (
  <NextLink href={href}>
    <StyledAnchor>{children}</StyledAnchor>
  </NextLink>
);

export default Link;

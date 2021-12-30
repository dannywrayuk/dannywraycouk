import { ForwardedRef, forwardRef } from "react";
import NextLink from "next/link";
import { withVariants, Box, Variants } from "./system";

const variants: Variants = {
  Navigation: {
    fontSize: "0.93rem",
    fontFamily: "Inter",
    fontWeight: "600",
    textDecoration: "none",
    color: "text",
    textAlign: "center",
  },
  Logo: {
    fontSize: "1.5rem",
    fontFamily: "Montserrat",
    fontWeight: "700",
    textDecoration: "none",
    letterSpacing: "-0.05em",
    color: "text",
    textAlign: "center",
  },
};

type InternalLinkProps = {
  children?: React.ReactNode;
  href: string;
};

const InternalLink = ({ children, href, ...rest }: InternalLinkProps) => (
  <NextLink href={href}>
    <a {...rest}>{children}</a>
  </NextLink>
);

export const Link = withVariants(
  variants,
  forwardRef((props, ref) => <Box as={InternalLink} ref={ref} {...props} />)
);

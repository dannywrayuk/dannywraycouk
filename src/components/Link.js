import NextLink from "next/link";
import { Link as ChakraLink } from "@chakra-ui/react";

const Link = ({ children, href, as, ...rest }) => (
  <NextLink href={href} passHref>
    <ChakraLink as={as} {...rest}>
      {children}
    </ChakraLink>
  </NextLink>
);

export default Link;

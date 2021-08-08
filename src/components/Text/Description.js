import { Heading } from "@chakra-ui/react";

export const Description = ({ children, ...rest }) => (
  <Heading
    fontSize={18}
    fontWeight={500}
    fontFamily="sans-serif"
    letterSpacing={1.5}
    {...rest}
  >
    {children}
  </Heading>
);

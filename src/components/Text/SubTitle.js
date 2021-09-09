import { Heading } from "@chakra-ui/react";

export const SubTitle = ({ children, ...rest }) => (
  <Heading
    fontSize={18}
    fontWeight={300}
    letterSpacing={2}
    textTransform="uppercase"
    fontFamily="sans-serif"
    {...rest}
  >
    {children}
  </Heading>
);
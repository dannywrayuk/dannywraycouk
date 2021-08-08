import { Heading } from "@chakra-ui/react";

export const Title = ({ children, ...rest }) => (
  <Heading
    fontWeight={700}
    fontFamily="Montserrat, sans-serif"
    fontSize={{ base: 50, sm: 60, md: 70 }}
    {...rest}
  >
    {children}
  </Heading>
);

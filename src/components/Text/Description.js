import { Text } from "@chakra-ui/react";

export const Description = ({ children, ...rest }) => (
  <Text
    lineHeight={2}
    fontSize={20}
    fontFamily="Montserrat, sans-serif"
    {...rest}
  >
    {children}
  </Text>
);

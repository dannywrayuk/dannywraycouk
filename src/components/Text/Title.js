import { Heading } from "@chakra-ui/react";

const Title = ({ children, ...rest }) => (
  <Heading fontSize={{ base: 50, sm: 60, md: 90 }} {...rest}>
    {children}
  </Heading>
);

export default Title;

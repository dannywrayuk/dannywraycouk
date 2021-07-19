import { Heading } from "@chakra-ui/react";

const SubTitle = ({ children, ...rest }) => (
  <Heading
    fontSize={18}
    fontWeight={300}
    letterSpacing={2}
    textTransform="uppercase"
    {...rest}
  >
    {children}
  </Heading>
);

export default SubTitle;

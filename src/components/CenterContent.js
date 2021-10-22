import { Flex } from "@chakra-ui/react";

export const CenterContent = (props) => (
  <Flex
    direction="column"
    maxW="920px"
    gridRowGap="100px"
    px="20px"
    mx="auto"
    {...props}
  />
);

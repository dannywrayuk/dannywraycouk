import { Flex, Box } from "@chakra-ui/react";

const VBar = ({ children, colorScheme = "primary.yellow", ...rest }) => (
  <Flex direction="row" mb={10} mt={10} {...rest}>
    <Box w={2} borderRadius={5} backgroundColor={colorScheme} mr={4} />
    <Box>{children}</Box>
  </Flex>
);

export default VBar;

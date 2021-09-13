import { Flex, Box } from "@chakra-ui/react";

const Padding = ({ children }) => (
  <Flex justifyContent="center" w="100%">
    <Box
      maxW={1600}
      minW={300}
      ml={{ base: 5, sm: 10, md: 120 }}
      mr={{ base: 5, sm: 10, md: 120 }}
      mb="50px"
      w="100%"
    >
      {children}
    </Box>
  </Flex>
);

export default Padding;

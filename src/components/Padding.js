import { Flex, Box } from "@chakra-ui/react";

const Padding = ({ children }) => (
  <Flex justifyContent="center" w="100vw">
    <Box
      maxW={1200}
      minW={300}
      ml={{ base: 5, sm: 10, md: 120 }}
      mr={{ base: 5, sm: 10, md: 120 }}
      mt="70px"
      mb="100px"
      w="100%"
    >
      {children}
    </Box>
  </Flex>
);

export default Padding;

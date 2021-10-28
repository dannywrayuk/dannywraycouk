import { Box, Heading, Text } from "@chakra-ui/react";

const Card = ({ children }) => (
  <Box
    bg="gray.900"
    borderRadius={10}
    px="20px"
    py="30px"
    border="1px solid"
    borderColor="gray.700"
    boxShadow="0 0 20px -5px rgba(0,0,0,0.8);"
    mx="-10px"
  >
    {children}
  </Box>
);

export default Card;

export const CardTitle = (props) => (
  <Heading
    fontWeight={700}
    fontFamily="Montserrat, sans-serif"
    fontSize={{ base: 30, sm: 40, md: 50 }}
    pb={3}
    {...props}
  />
);
export const CardBody = (props) => (
  <Text
    fontFamily="Montserrat, sans-serif"
    fontSize={{ base: 20, sm: 25, md: 30 }}
    {...props}
  />
);

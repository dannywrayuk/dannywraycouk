import { Box, Text } from "@chakra-ui/react";
import Link from "./Link";

export const Logo = () => (
  <Link href="/" _focus={{ boxShadow: "none" }} _hover={{ textDecor: "none" }}>
    <Box
      display="inline-flex"
      flexDirection="column"
      justifyContent="space-evenly"
      h={{ base: "50px", md: "70px" }}
      w={{ base: "50px", md: "70px" }}
      fontFamily="Montserrat, serif"
      fontSize={{ base: 10, md: 15 }}
      fontWeight={500}
      lineHeight={1}
      letterSpacing={2}
      textAlign="right"
      textTransform="uppercase"
      fontFamily="sans-serif"
    >
      <Text>danny</Text>
      <Text>wray</Text>
      <Text>.co.uk</Text>
    </Box>
  </Link>
);

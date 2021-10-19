import { Flex, Text } from "@chakra-ui/react";
import Link from "../Link";

export const Logo = (props) => (
  <Link href="/" _focus={{ boxShadow: "none" }}>
    <Flex
      {...props}
      direction="column"
      justifyContent="space-evenly"
      h={{ base: "50px", sm: "70px" }}
      w={{ base: "50px", sm: "70px" }}
      fontFamily="Montserrat, serif"
      fontSize={{ base: 10, sm: 15 }}
      fontWeight={500}
      lineHeight={1}
      letterSpacing={2}
      textAlign="right"
      textTransform="uppercase"
      fontFamily="sans-serif"
    >
      <Text w="100%">danny</Text>
      <Text w="100%">wray</Text>
      <Text w="100%">.co.uk</Text>
    </Flex>
  </Link>
);

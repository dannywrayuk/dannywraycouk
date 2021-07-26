import { Flex, Text } from "@chakra-ui/react";
import Link from "../Link";

export const Logo = () => (
  <Link href="/" _focus={{ boxShadow: "none" }}>
    <Flex
      position="fixed"
      direction="column"
      justifyContent="space-evenly"
      top={{ base: 3, md: 10 }}
      left={{ base: 3, md: 10 }}
      h={{ base: "50px", sm: "65px" }}
      w={{ base: "50px", sm: "65px" }}
      fontSize={{ base: 10, sm: 15 }}
      fontWeight={300}
      lineHeight={1}
      letterSpacing={2}
      textAlign="right"
      textTransform="uppercase"
    >
      <Text w="100%">danny</Text>
      <Text w="100%">wray</Text>
      <Text w="100%">.co.uk</Text>
    </Flex>
  </Link>
);

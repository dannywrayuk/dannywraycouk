import { Flex, Stack, Heading, Text } from "@chakra-ui/react";

const Greeting = () => (
  <Flex h="100vh" justifyContent="center">
    <Flex h="85vh" justifyContent="center" alignItems="center">
      <Flex w="70vw" minW={60} maxW={1000}>
        <Stack>
          <Heading
            fontSize={65}
            fontFamily="Nanum Myeongjo, serif"
            fontWeight={400}
            lineHeight={1}
          >
            Danny Wray
          </Heading>
          <Text fontWeight={300} letterSpacing={2}>
            SOFTWARE DEVELOPER
          </Text>
        </Stack>
      </Flex>
    </Flex>
  </Flex>
);

export default Greeting;

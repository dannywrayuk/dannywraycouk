import { Flex, Stack } from "@chakra-ui/react";
import Title from "./Text/Title";
import SubTitle from "./Text/SubTitle";

const Greeting = () => (
  <Flex h="100vh" justifyContent="center">
    <Flex h="85vh" justifyContent="center" alignItems="center">
      <Flex w="70vw" minW={60} maxW={1000}>
        <Stack spacing={4}>
          <Title>DANNY WRAY</Title>
          <SubTitle pl={2}>SOFTWARE DEVELOPER</SubTitle>
        </Stack>
      </Flex>
    </Flex>
  </Flex>
);

export default Greeting;

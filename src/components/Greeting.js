import { Flex, Stack } from "@chakra-ui/react";
import Title from "./Text/Title";
import SubTitle from "./Text/SubTitle";
import { Animation, staggerTextOnLoad } from "./Animation";

const Greeting = () => (
  <Flex h="100vh" justifyContent="center">
    <Flex h="85vh" justifyContent="center" alignItems="center">
      <Flex w="70vw" minW={60} maxW={1000}>
        <Animation onEnter={staggerTextOnLoad}>
          <Stack spacing={4}>
            <Title>DANNY WRAY</Title>
            <SubTitle pl={1}>SOFTWARE DEVELOPER</SubTitle>
          </Stack>
        </Animation>
      </Flex>
    </Flex>
  </Flex>
);

export default Greeting;

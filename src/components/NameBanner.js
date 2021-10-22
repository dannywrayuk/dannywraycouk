import { Flex, Stack } from "@chakra-ui/react";
import { StaggerText } from "./Animation";
import { Title, SubTitle } from "./Text";

export const NameBanner = () => (
  <Flex h="100vh" justifyContent="center">
    <Flex
      h="100%"
      w="70%"
      justifyContent="center"
      alignItems="center"
      minW={60}
      maxW={1600}
    >
      <StaggerText as={Stack} spacing={4} w="100%" pb="15vh">
        <Title>DANNY WRAY</Title>
        <SubTitle pl={1}>software developer</SubTitle>
      </StaggerText>
    </Flex>
  </Flex>
);

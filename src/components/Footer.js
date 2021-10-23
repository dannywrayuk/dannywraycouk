import { Flex } from "@chakra-ui/react";
import { SubTitle } from "./Text";
import SocialIcons from "./SocialIcons";

export const Footer = () => {
  return (
    <Flex
      mt="auto"
      h="60px"
      justifyContent={{ base: "space-between", sm: "space-evenly" }}
      alignItems="center"
      mb={5}
      direction={{ base: "column", sm: "row" }}
    >
      <SubTitle>Danny Wray {new Date().getFullYear()}</SubTitle>
      <SocialIcons />
    </Flex>
  );
};

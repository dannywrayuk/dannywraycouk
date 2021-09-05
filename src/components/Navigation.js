import { Flex } from "@chakra-ui/react";
import { SubTitle } from "./Text";
import SocialIcons from "./SocialIcons";

const Navigation = ({ current }) => (
  <Flex
    position="fixed"
    top={10}
    right={20}
    justifyContent="center"
    alignItems="center"
  >
    <SubTitle mx={10}>thoughts</SubTitle>
    <SubTitle mx={10}>projects</SubTitle>
    <SubTitle mx={10}>about</SubTitle>
    <SocialIcons />
  </Flex>
);

export default Navigation;

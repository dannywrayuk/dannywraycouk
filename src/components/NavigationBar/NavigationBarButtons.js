import { Box, Flex, Button } from "@chakra-ui/react";
import { BsMoon, BsCommand } from "react-icons/bs";

export const NavigationBarButtons = ({ menuOpen }) => (
  <Flex gridGap="10px">
    <Button padding={0} onClick={menuOpen}>
      <Box as={BsCommand} w={6} h={6} />
    </Button>
    <Button padding={0}>
      <Box as={BsMoon} w={6} h={6} />
    </Button>
  </Flex>
);

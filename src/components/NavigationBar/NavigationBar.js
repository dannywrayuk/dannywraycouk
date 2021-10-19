import { Flex } from "@chakra-ui/react";
import { NavigationBarButtons } from "./NavigationBarButtons";
import { Logo } from "../Content/Logo";

export const NavigationBar = ({ menuOpen }) => (
  <Flex justifyContent="space-between" height={120} alignItems="center">
    <Logo />
    <NavigationBarButtons menuOpen={menuOpen} />
  </Flex>
);

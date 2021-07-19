import { Box, Center, Flex, Stack, Text } from "@chakra-ui/react";
import Link from "../Link";
import SocialIcons from "../SocialIcons";

const StyledLink = ({ href, children }) => (
  <Link
    href={href}
    as={Box}
    fontWeight={300}
    textTransform="uppercase"
    letterSpacing={2}
    transition="0.3s"
    _hover={{ color: "gray.400" }}
  >
    {children}
  </Link>
);

export const Menu = () => (
  <Flex direction="column" justifyContent="space-between" h="100%">
    <Stack spacing={10} m={5}>
      <hr />
      <StyledLink href="/thoughts">Thoughts</StyledLink>
      <StyledLink href="/projects">Projects</StyledLink>
      <StyledLink href="/about">About</StyledLink>
      <hr />
      <StyledLink href="/physics">Physics</StyledLink>
    </Stack>
    <Center>
      <SocialIcons />
    </Center>
  </Flex>
);

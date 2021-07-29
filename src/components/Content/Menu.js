import { Center, Flex, Stack, Text } from "@chakra-ui/react";
import Link from "../Link";
import SocialIcons from "../SocialIcons";
import SubTitle from "../Text/SubTitle";

const StyledLink = ({ href, children }) => (
  <Link
    href={href}
    as={Text}
    transition="0.3s"
    _hover={{ color: "gray.400" }}
    _focus={{ borderBox: "none" }}
  >
    {children}
  </Link>
);

export const Menu = () => (
  <Flex direction="column" justifyContent="space-between" h="100%">
    <Stack spacing={10} m={5} as={SubTitle}>
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

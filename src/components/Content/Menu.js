import { Center, Flex, Stack, Text } from "@chakra-ui/react";
import Link from "../Link";
import SocialIcons from "../SocialIcons";
import { SubTitle } from "../Text";
const StyledLink = ({ href, children, ...rest }) => (
  <Link
    href={href}
    as={Text}
    transition="0.3s"
    _hover={{ color: "gray.400" }}
    _focus={{ borderBox: "none" }}
    {...rest}
  >
    {children}
  </Link>
);

export const Menu = () => (
  <Flex direction="column" justifyContent="space-between" h="100%">
    <Stack spacing={10} m={5} as={SubTitle}>
      <StyledLink href="/" textAlign="center">
        dannywray.co.uk
      </StyledLink>
      <hr />
      <StyledLink href="/thoughts">Thoughts</StyledLink>
      <StyledLink href="/projects">Projects</StyledLink>
      <StyledLink href="/about">About</StyledLink>
      <hr />
      <StyledLink href="/physics">Physics</StyledLink>
    </Stack>
    <Center mb={5}>
      <SocialIcons />
    </Center>
  </Flex>
);

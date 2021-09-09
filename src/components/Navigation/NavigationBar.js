import { Flex } from "@chakra-ui/react";
import { SubTitle } from "../Text";
import SocialIcons from "../SocialIcons";
import Link from "../Link";

const StyledLink = ({ href, children, ...rest }) => (
  <Link
    href={href}
    transition="0.3s"
    _hover={{ color: "gray.400" }}
    _focus={{ borderBox: "none" }}
    {...rest}
  >
    <SubTitle>{children}</SubTitle>
  </Link>
);

const Navigation = ({ current }) => (
  <Flex justifyContent="space-between" alignItems="center" ml="auto" w={600}>
    <StyledLink href="/">thoughts</StyledLink>
    <StyledLink href="/">projects</StyledLink>
    <StyledLink href="/">about</StyledLink>
    <SocialIcons />
  </Flex>
);

export default Navigation;

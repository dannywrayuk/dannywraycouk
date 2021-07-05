import { Flex, Text, Stack, Icon, useBreakpointValue } from "@chakra-ui/react";
import { AiFillGithub, AiOutlineTwitter, AiFillLinkedin } from "react-icons/ai";
import Link from "./Link";
import config from "../config";

const { Links } = config;

const Footer = () => {
  const responsiveDirection = useBreakpointValue({ base: "column", sm: "row" });
  return (
    <Flex
      h={50}
      justifyContent="space-evenly"
      alignItems="center"
      mb={5}
      textTransform="uppercase"
      letterSpacing={2}
      fontWeight={300}
      direction={responsiveDirection}
    >
      <Text>Danny Wray {new Date().getFullYear()}</Text>
      <Stack direction="row" spacing={6}>
        <Link href={Links.Github}>
          <Icon as={AiFillGithub} />
        </Link>
        <Link href={Links.Twitter}>
          <Icon as={AiOutlineTwitter} />
        </Link>
        <Link href={Links.Linkedin}>
          <Icon as={AiFillLinkedin} />
        </Link>
      </Stack>
    </Flex>
  );
};

export default Footer;

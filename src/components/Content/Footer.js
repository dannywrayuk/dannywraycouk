import { Flex, Text, Stack, Icon, useBreakpointValue } from "@chakra-ui/react";
import { AiFillGithub, AiOutlineTwitter, AiFillLinkedin } from "react-icons/ai";
import Link from "../Link";
import constants from "../../constants";

const { Links } = constants;

export const Footer = () => {
  return (
    <Flex
      h={50}
      justifyContent="space-evenly"
      alignItems="center"
      mb={5}
      textTransform="uppercase"
      letterSpacing={2}
      fontWeight={300}
      direction={{ base: "column", sm: "row" }}
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

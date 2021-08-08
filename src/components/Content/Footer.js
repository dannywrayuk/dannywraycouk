import { Flex, Stack, Icon } from "@chakra-ui/react";
import { AiFillGithub, AiOutlineTwitter, AiFillLinkedin } from "react-icons/ai";
import Link from "../Link";
import constants from "../../constants";
import { SubTitle } from "../Text";

const { Links } = constants;

export const Footer = () => {
  return (
    <Flex
      h={50}
      justifyContent="space-evenly"
      alignItems="center"
      mb={5}
      direction={{ base: "column", sm: "row" }}
    >
      <SubTitle>Danny Wray {new Date().getFullYear()}</SubTitle>
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

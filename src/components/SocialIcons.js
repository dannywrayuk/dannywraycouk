import { Stack, Icon } from "@chakra-ui/react";
import { AiFillGithub, AiOutlineTwitter, AiFillLinkedin } from "react-icons/ai";
import Link from "./Link";
import constants from "../constants";

const { Links } = constants;

const SocialIcons = () => (
  <Stack direction="row" spacing={6}>
    <Link
      href={Links.Github}
      _focus={{ boxShadow: "none" }}
      display="flex"
      alignItems="center"
    >
      <Icon as={AiFillGithub} />
    </Link>
    <Link
      href={Links.Twitter}
      _focus={{ boxShadow: "none" }}
      display="flex"
      alignItems="center"
    >
      <Icon as={AiOutlineTwitter} />
    </Link>
    <Link
      href={Links.Linkedin}
      _focus={{ boxShadow: "none" }}
      display="flex"
      alignItems="center"
    >
      <Icon as={AiFillLinkedin} />
    </Link>
  </Stack>
);

export default SocialIcons;

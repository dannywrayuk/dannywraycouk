import { AiFillGithub, AiOutlineTwitter, AiFillLinkedin } from "react-icons/ai";
import { Flex } from "./core";

export const SocialIcons = () => (
  <Flex _css={{ width: "fit-content", columnGap: "25px" }}>
    <AiFillGithub />
    <AiOutlineTwitter />
    <AiFillLinkedin />
  </Flex>
);

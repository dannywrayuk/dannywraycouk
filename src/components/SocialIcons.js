import { AiFillGithub, AiOutlineTwitter, AiFillLinkedin } from "react-icons/ai";
import { SpaceBetween } from "./core";

export const SocialIcons = () => (
  <SpaceBetween _css={{ width: "fit-content", columnGap: "10px" }}>
    <AiFillGithub />
    <AiOutlineTwitter />
    <AiFillLinkedin />
  </SpaceBetween>
);

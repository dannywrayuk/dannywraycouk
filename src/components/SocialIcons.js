import { AiFillGithub, AiOutlineTwitter, AiFillLinkedin } from "react-icons/ai";
import { Row, LinkButton } from "@components/core";
import { links } from "@utils/constants";

export const SocialIcons = () => (
  <Row _css={{ columnGap: "25px" }}>
    <LinkButton variant="icon" href={links.github}>
      <AiFillGithub />
    </LinkButton>
    <LinkButton variant="icon" href={links.twitter}>
      <AiOutlineTwitter />
    </LinkButton>
    <LinkButton variant="icon" href={links.linkedin}>
      <AiFillLinkedin />
    </LinkButton>
  </Row>
);

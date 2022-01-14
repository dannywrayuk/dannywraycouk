import { AiFillGithub, AiOutlineTwitter, AiFillLinkedin } from "react-icons/ai";
import { Row, LinkButton } from "@components/core";
import constants from "@utils/constants";

const { github, twitter, linkedin } = constants.links;

export const SocialIcons = () => (
  <Row _css={{ columnGap: "25px" }}>
    <LinkButton variant="icon" href={github}>
      <AiFillGithub />
    </LinkButton>
    <LinkButton variant="icon" href={twitter}>
      <AiOutlineTwitter />
    </LinkButton>
    <LinkButton variant="icon" href={linkedin}>
      <AiFillLinkedin />
    </LinkButton>
  </Row>
);

import { GithubSVG, LinkedinSVG, TwitterSVG } from "../SVG";
import { LinkContainer, StyledLink, Icon } from "./SocialLinks.style";

import constants from "../../constants";

const { Links: Links } = constants;

const SocialLinks = ({ className }) => (
  <LinkContainer className={className}>
    <Icon>
      <StyledLink href={Links.Github}>
        <GithubSVG />
      </StyledLink>
    </Icon>
    <Icon>
      <StyledLink href={Links.Linkedin}>
        <LinkedinSVG />
      </StyledLink>
    </Icon>
    <Icon>
      <StyledLink href={Links.Twitter}>
        <TwitterSVG />
      </StyledLink>
    </Icon>
  </LinkContainer>
);

export default SocialLinks;

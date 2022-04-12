import { Link, SubSubHeading, Text } from "@components/core";
import styled from "@emotion/styled";
import { FiExternalLink } from "react-icons/fi";
import { AiOutlineGithub } from "react-icons/ai";
import { lg } from "@utils/breakpoints";

const Wrapper = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  margin: "50px 0",
  rowGap: "30px",
  width: "100%",
  [lg]: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    margin: "140px 0",
    padding: "0 40px",
  },
});

const Image = styled.img({
  borderRadius: "1em",
  width: "80%",
  [lg]: {
    width: "50%",
  },
});

const TextWrapper = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  rowGap: "20px",
  maxWidth: "400px",
  [lg]: {
    margin: "0 40px",
  },
});

const IconWrapper = styled.div({});

const Icon = styled.div({
  margin: "0 10px",
  width: "25px",
  height: "100%",
  color: "var(--text)",
  ":hover": {
    color: "var(--primary)",
  },
});

const ImageLink = styled(Link)({ display: "contents" });

const TextLink = styled(Link)({
  textDecoration: "none",
  color: "inherit",
  ":hover": { textDecoration: "underline" },
});

const Links = ({ links }) => {
  if (!links) return null;
  if (links?.external || links?.github) {
    return (
      <IconWrapper>
        {links.github && (
          <a href={links.github}>
            <Icon as={AiOutlineGithub} />
          </a>
        )}
        {links.external && (
          <a href={links.external}>
            <Icon as={FiExternalLink} />
          </a>
        )}
      </IconWrapper>
    );
  } else {
    return null;
  }
};

export const ProjectCard = ({ data }) => (
  <Wrapper>
    <ImageLink href={data.id}>
      <Image src={data.project.coverImage} />
    </ImageLink>
    <TextWrapper>
      <TextLink href={data.id}>
        <SubSubHeading>{data.title}</SubSubHeading>
      </TextLink>
      <Text>{data.blurb}</Text>
      <Links links={data.project.links} />
    </TextWrapper>
  </Wrapper>
);

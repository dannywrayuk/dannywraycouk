import { Link, SubSubHeading, Text } from "@components/core";
import styled from "@emotion/styled";
import { FiExternalLink } from "react-icons/fi";
import { AiOutlineGithub } from "react-icons/ai";

const Wrapper = styled.div({
  display: "flex",
  flexDirection: "column",
  marginBottom: "80px",
});

const Image = styled.img({ width: "100%" });

const InfoText = styled.div({
  marginTop: "20px",
  marginRight: "10px",
});

const ExternalLinks = styled.div({
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  marginRight: "10px",
  columnGap: "10px",
});

const Icon = styled.div({
  width: "25px",
  height: "100%",
  color: "var(--text)",
  ":hover": {
    color: "var(--primary)",
  },
});

const LinkContent = styled.a({ display: "contents" });

export const ProjectCard = ({ data }) => (
  <Wrapper>
    <LinkContent as={Link} href={data.id}>
      <Image src={data.project.coverImage} />
      <InfoText>
        <SubSubHeading>{data.title}</SubSubHeading>
        <Text>{data.blurb}</Text>
      </InfoText>
    </LinkContent>
    {data.project.links && (
      <ExternalLinks>
        {data.project.links.github && (
          <LinkContent href={data.project.links.github}>
            <Icon as={AiOutlineGithub} />
          </LinkContent>
        )}
        {data.project.links.external && (
          <LinkContent href={data.project.links.external}>
            <Icon as={FiExternalLink} />
          </LinkContent>
        )}
      </ExternalLinks>
    )}
  </Wrapper>
);

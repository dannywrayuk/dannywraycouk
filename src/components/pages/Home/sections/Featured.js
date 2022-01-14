import styled from "@emotion/styled";
import {
  Heading,
  SubHeading,
  Text,
  Label,
  RoundedImage,
  Column,
} from "@components/core";
import { ProjectBadge, WithBadge } from "@components/Badges";
import { ImageWithText } from "@components/presentation/ImageWithText";

const VerticalLine = styled.div({
  display: "flex",
  justifyContent: "center",
  backgroundColor: "var(--midGrey)",
  height: "135px",
  width: 1,
  margin: "45px 0",
});

export const Featured = () => (
  <Column _css={{ color: "var(--text)" }}>
    <Label _css={{ marginBottom: "20px" }}>The best of the best</Label>
    <Heading>Featured projects and articles</Heading>
    <VerticalLine />
    <ImageWithText image={<RoundedImage src="/img/project_1.jpeg" />}>
      <ProjectBadge />
      <SubHeading>A project title goes here.</SubHeading>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        vel metus eget odio euismod viverra vitae nec turpis
      </Text>
    </ImageWithText>
    <VerticalLine />
    <ImageWithText
      image={<RoundedImage src="/img/project_2.jpeg" />}
      swap
      invertText
    >
      <ProjectBadge />
      <SubHeading>A project title goes here.</SubHeading>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        vel metus eget odio euismod viverra vitae nec turpis
      </Text>
    </ImageWithText>
    <VerticalLine />
    <SubHeading _css={{ marginBottom: "85px" }}>Also see</SubHeading>
    <Column _css={{ rowGap: "50px" }} ai="flex-start">
      <WithBadge badge="project">A project title goes here</WithBadge>
      <WithBadge badge="project">A project title goes here</WithBadge>
      <WithBadge badge="article">An article title goes here</WithBadge>
    </Column>
  </Column>
);

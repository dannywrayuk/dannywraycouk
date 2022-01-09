import styled from "@emotion/styled";
import {
  Heading,
  SubHeading,
  Text,
  Label,
  RoundedImage,
  AlignH,
  AlignV,
} from "@components/core";
import { ProjectBadge, WithBadge } from "@components/Badges";
import { ImageWithText } from "@components/presentation/ImageWithText";

const VerticalLine = styled.div({
  display: "flex",
  justifyContent: "center",
  backgroundColor: "var(--text)",
  height: "135px",
  width: 1,
  margin: "45px auto",
});

export const Featured = () => (
  <AlignV _css={{ margin: "0 50px" }}>
    <AlignH _css={{ marginBottom: "20px" }}>
      <Label>The best of the best</Label>
    </AlignH>
    <AlignH>
      <Heading>Featured projects and articles</Heading>
    </AlignH>
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
      hFlip
      hFlipText
    >
      <ProjectBadge />
      <SubHeading>A project title goes here.</SubHeading>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        vel metus eget odio euismod viverra vitae nec turpis
      </Text>
    </ImageWithText>
    <VerticalLine />
    <AlignH _css={{ margin: "45px 0 85px" }}>
      <SubHeading>Also see</SubHeading>
    </AlignH>
    <AlignH>
      <AlignV _css={{ rowGap: "50px" }}>
        <WithBadge badge="project">A project title goes here</WithBadge>
        <WithBadge badge="project">A project title goes here</WithBadge>
        <WithBadge badge="article">An article title goes here</WithBadge>
      </AlignV>
    </AlignH>
  </AlignV>
);

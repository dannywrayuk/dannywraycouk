import { Layout } from "@components/Layout";
import { Heading, Flex, Box, CapsText } from "@components/core";
import { getMetadataById } from "@utils/getMetadata";
import { Mapper } from "@components/Mapper";
import { ProjectCard } from "@components/presentation/ProjectCard";
import styled from "@emotion/styled";
import { mq } from "@utils/breakpoints";
import { MetaTags } from "@components/MetaTags";

const Grid = styled.div({
  display: "grid",
  gridTemplateColumns: "repeat(1, minmax(0px, 1fr))",
  gridGap: "20px",
  [mq.md]: {
    gridTemplateColumns: "repeat(2, minmax(0px, 1fr))",
  },
});

const Bubble = styled.div({
  display: "inline-block",
  backgroundColor: "var(--color-bg-muted)",
  padding: 10,
  borderRadius: "1em",
  transform: "translate(-10px, 50%)",
  [mq.md]: {
    transform: "translate(-20%, 50%)",
  },
});

const meta = {
  title: "Projects",
  abstract: "Projects that I've made, some might be WIP.",
};

const Projects = ({ pinnedPosts, featuredProject }) => (
  <Layout>
    <MetaTags meta={meta} />
    <Box>
      <Bubble>
        <CapsText>Featured</CapsText>
      </Bubble>
      <ProjectCard data={featuredProject[0]} />
    </Box>
    <Flex column>
      <Heading my={20}>Pinned</Heading>
      <Grid>
        <Mapper Component={ProjectCard} data={pinnedPosts} />
      </Grid>
    </Flex>
  </Layout>
);

export default Projects;

export const getStaticProps = async () => ({
  props: {
    pinnedPosts: getMetadataById([
      "example-project-1",
      "example-project-1",
      "notExist",
      "example-project-2",
      "example-project-3",
      "example-project-3",
    ]),
    featuredProject: getMetadataById(["example-project-1"]),
  },
});

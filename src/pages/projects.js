import { Layout } from "@components/Layout";
import { Heading, Flex, Box, CapsText } from "@components/core";
import { getMetadataById } from "@utils/getMetadata";
import { Mapper } from "@components/Mapper";
import { ProjectCard } from "@components/presentation/ProjectCard";
import styled from "@emotion/styled";
import { mq } from "@utils/breakpoints";
import { MetaTags } from "@components/Head";

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

const Projects = ({ projects, featured, university }) => (
  <Layout>
    <MetaTags meta={meta} />
    <Box>
      <Bubble>
        <CapsText>Featured</CapsText>
      </Bubble>
      <ProjectCard data={featured[0]} />
    </Box>
    <Flex column>
      <Heading my={20}>Projects</Heading>
      <Grid>
        <Mapper Component={ProjectCard} data={projects} />
      </Grid>
    </Flex>
    <Flex column>
      <Heading my={20}>University Works</Heading>
      <Grid>
        <Mapper Component={ProjectCard} data={university} />
      </Grid>
    </Flex>
  </Layout>
);

export default Projects;

export const getStaticProps = async () => ({
  props: {
    featured: getMetadataById(["this_site"]),
    projects: getMetadataById(["this_site", "physics"]),
    university: getMetadataById([
      "scalar_fields_in_cosmology",
      "computer_simulations_of_dimer_models",
      "n_body_simulations_using_the_particle_mesh_method",
    ]),
  },
});

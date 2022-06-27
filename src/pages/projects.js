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

const meta = {
  title: "Projects",
  abstract: "Projects that I've made, some might be WIP.",
  route: "/projects",
};

const Projects = ({ projects, featured, university }) => (
  <Layout>
    <MetaTags meta={meta} />
    <Box>
      <Heading my={60} center>
        Featured
      </Heading>
      <ProjectCard data={featured[0]} />
    </Box>
    <Flex column>
      <Heading my={60} center>
        Ongoing
      </Heading>
      <Grid>
        <Mapper Component={ProjectCard} data={projects} />
      </Grid>
    </Flex>
    <Flex column>
      <Heading my={60} center>
        University Works
      </Heading>
      <Grid>
        <Mapper Component={ProjectCard} data={university} />
      </Grid>
    </Flex>
  </Layout>
);

export default Projects;

export const getStaticProps = async () => ({
  props: {
    featured: getMetadataById(["scalar-fields-in-cosmology"]),
    projects: getMetadataById(["building-this-site", "physics"]),
    university: getMetadataById([
      "scalar-fields-in-cosmology",
      "computer-simulations-of-dimer-models",
      "n-body-simulations-using-the-particle-mesh-method",
    ]),
  },
});

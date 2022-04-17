import styled from "@emotion/styled";
import { Layout } from "@components/Layout";
import { SubHeading, Column, SubSubHeading } from "@components/core";
import { getMetadataById, getMetadataByRoute } from "@utils/getMetadata";
import { ProjectCard } from "@components/presentation/ProjectCard";

const Wrapper = styled(Column)({
  maxWidth: "1200px",
  margin: "0 auto",
  width: "100%",
});

const Projects = ({ pinnedPosts, childPosts }) => (
  <Layout>
    <Wrapper>
      <SubHeading _css={{ margin: "60px 0" }}>Projects</SubHeading>
      <SubSubHeading _css={{ margin: "20px 0" }}>Pinned</SubSubHeading>
      {pinnedPosts.map((data, id) => (
        <ProjectCard key={data.route + id} data={data} />
      ))}
    </Wrapper>
    <Wrapper>
      <SubSubHeading _css={{ margin: "20px 0" }}>Latest</SubSubHeading>
      {childPosts.map((data, id) => (
        <ProjectCard key={data.route + id} data={data} />
      ))}
    </Wrapper>
  </Layout>
);

export default Projects;

export const getStaticProps = async () => ({
  props: {
    pinnedPosts: getMetadataById(["test1p", "test2p"]),
    childPosts: getMetadataByRoute("/projects/*"),
  },
});

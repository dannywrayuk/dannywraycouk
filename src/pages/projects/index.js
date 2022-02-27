import styled from "@emotion/styled";
import { Layout } from "@components/Layout";
import { TempPinnedList } from "@components/temp/TempPinnedList";
import { SubHeading, Column } from "@components/core";
import { TempPostList } from "@components/temp/TempPostList";

const Wrapper = styled(Column)({
  maxWidth: "700px",
  margin: "0 auto",
});

const Projects = () => (
  <Layout>
    <Wrapper>
      <SubHeading _css={{ margin: "60px 0" }}>projects</SubHeading>
    </Wrapper>
    <TempPinnedList />
    <TempPostList />
  </Layout>
);

export default Projects;

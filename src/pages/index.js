import styled from "@emotion/styled";
import { Column, SubHeading } from "@components/core";
import { Layout } from "@components/Layout";
import { Landing } from "@components/pages/Home/sections/Landing";
import { TimelineEntry } from "@components/presentation/TimelineEntry";
import { getMetadataArray, getMetadataFromDirectory } from "@utils/getMetadata";

const Wrapper = styled(Column)({
  maxWidth: "700px",
  margin: "0 auto",
});

const Home = ({ pinnedPosts, childPosts }) => {
  return (
    <Layout>
      <Landing />
      <Wrapper>
        <SubHeading _css={{ margin: "60px 0" }}>Highlights</SubHeading>
        {pinnedPosts.map((data) => (
          <TimelineEntry data={data} type="pinned" />
        ))}
      </Wrapper>
      <Wrapper>
        {childPosts.map((data) => (
          <TimelineEntry data={data} />
        ))}
      </Wrapper>
    </Layout>
  );
};

export default Home;

export const getStaticProps = async () => ({
  props: {
    pinnedPosts: getMetadataArray([
      "src/pages/thoughts/test.js",
      "src/pages/thoughts/test.js",
    ]),
    childPosts: getMetadataFromDirectory("src/pages/thoughts"),
  },
});
